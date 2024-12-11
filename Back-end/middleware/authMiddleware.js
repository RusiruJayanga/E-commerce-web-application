import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Check for Bearer token in Authorization header
  const token = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.split(" ")[1]
    : null;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization token is missing or malformed" });
  }

  // Check if JWT_SECRET is set in the environment variables
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      message: "JWT_SECRET is not configured in environment variables",
    });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded payload to req.user
    next();
  } catch (error) {
    // Custom error handling for expired tokens
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(403).json({ message: "Token has expired" });
    }
    console.error("Token verification failed:", error); // Log the error for debugging
    return res.status(403).json({ message: "Invalid token" });
  }
};

export { authMiddleware };

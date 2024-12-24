import express from "express";
import ECommerceModel from "../models/Product_add_platform.js";

const Search = express.Router();
Search.get("/search", async (req, res) => {
  const { query } = req.query;

  try {
    const results = await ECommerceModel.find({
      ProductName: { $regex: query, $options: "i" },
    });

    res.status(200).json(results);
  } catch (error) {
    console.error("Error during search:", error);

    res.status(500).json({ message: "Error fetching search results" });
  }
});

export default Search;

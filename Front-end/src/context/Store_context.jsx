import { createContext, useState } from "react";

export const Store_context = createContext(null);

const Storecontext = (props) => {
  const url = "http://localhost:3000";

  const ContextValue = {
    url,
  };

  return (
    <Store_context.Provider value={ContextValue}>
      {props.children}
    </Store_context.Provider>
  );
};

export default Storecontext;

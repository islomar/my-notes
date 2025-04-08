import React, { useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("light");

  return { theme, setTheme };
};

export default useTheme;

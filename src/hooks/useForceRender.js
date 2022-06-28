import { useState } from "react";

const useForcerRender = () => {
  const [value, setValue] = useState(0);
  return () => setValue((value) => value + 1);
};

export default useForcerRender;

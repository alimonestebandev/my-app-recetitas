import { useState } from "react";

const state = () => {
  const [state, setState] = useState(true);

  const changeState = () => {
    setState(!state);
  };

  return { state, changeState };
};

export default state;

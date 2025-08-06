import { useState } from "react";

const state = () => {
  const [isLoading, setIsLoading] = useState(true);

  const startLoading = () => {
    setIsLoading(true);
  };
  const stopLoading = () => {
    setIsLoading(false);
  };
  return { isLoading, startLoading, stopLoading };
};

export default state;

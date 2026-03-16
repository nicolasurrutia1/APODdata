import { useContext } from "react";
import { LikeContext } from "./LikeContext";

export const useLikeContext = () => {
  return useContext(LikeContext);
};

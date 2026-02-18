import { Noto_Sans_Arabic } from "next/font/google";

export const mainFont = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100","200","300","400","500","600","700","800","900"], // all available weights
  display: "swap",
});
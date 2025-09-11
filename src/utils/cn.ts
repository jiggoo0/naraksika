// src/utils/cn.ts
import { twMerge } from "tailwind-merge";

export const cn = (...classes: (string | false | null | undefined)[]) => {
  return twMerge(classes.filter(Boolean).join(" "));
};

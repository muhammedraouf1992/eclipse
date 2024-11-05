import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function convertToKebabCase(str) {
  return str.trim().toLowerCase().replace(/\s+/g, "-");
}

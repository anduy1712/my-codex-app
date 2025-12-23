export { common } from "./common";
export { pages } from "./pages";

// Simple types for text values
export type TextValue = string | ((...args: unknown[]) => string);
export type TextCollection = {
  [key: string]: TextValue | TextCollection;
};

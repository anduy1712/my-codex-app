import React, { forwardRef } from "react";

import { TButtonProps } from "./types";

// probably not use React.FC
// Want a deep dive, See https://javascript.plainenglish.io/react-fc-in-typescript-should-you-use-react-functional-components-af4295d87d80?sk=5cf8cd13186993f6cbcd55c8e67c9b15
const Button = forwardRef<HTMLButtonElement, TButtonProps>(({ children }, ref) => {
  return <button ref={ref}>{children}</button>;
});

Button.displayName = "Button";

export default Button;

import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  const classNames = require("classnames");

  switch (appearance) {
    case "primary":
      return (
        <button
          className={classNames(styles.button, styles.primary)}
          {...props}
        >
          {children}
        </button>
      );
    case "ghost":
      return (
        <button className={classNames(styles.button, styles.ghost)} {...props}>
          
        </button>
      );
  }
};

export default Button;

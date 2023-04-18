import React from "react";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

const Tag = ({
  size = "m",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  const classNames = require("classnames");

  return (
    <div
      className={classNames(
        styles.tag,
        size == "m" ? styles.m : size == "s" ? styles.s : "",
        color == "red"
          ? styles.red
          : color == "green"
          ? styles.green
          : color == "ghost"
          ? styles.gost
          : color == "grey"
          ? styles.grey
          : color == "primary"
          ? styles.primary
          : ""
      )}
      {...props}
    >
      {href ? (
        <a href={href} target="_blank">
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default Tag;

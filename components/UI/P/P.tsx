import React from "react";
import styles from "./P.module.css";
import { PProps } from "./P.props";

const P = ({ size = "m", children, className,...props }: PProps): JSX.Element => {
  const classNames = require("classnames");
  switch (size) {
    case "m":
      return <p className={classNames(styles.p, styles.m)} {...props}>{children}</p>;
    case "s":
      return <p className={classNames(styles.p, styles.s)} {...props}>{children}</p>;
    case "l":
      return <p className={classNames(styles.p, styles.l)} {...props}>{children}</p>;
  }
};

export default P;

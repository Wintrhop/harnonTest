'use client'
import React from "react";
import { Button } from "react-bootstrap";

const Btn = ({ style, href, as, type, variant, text, size }) => {
  return (
    <Button className={style} href={href} as={as} type={type} variant={variant} size={size}>
      {text}
    </Button>
  );
};

export default Btn;

"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fe87528a-3197-4d78-8360-4be606bbc896");
  }, []);

  return null;
};
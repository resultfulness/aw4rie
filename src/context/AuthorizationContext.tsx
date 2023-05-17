"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthorizationContext = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthorizationContext;

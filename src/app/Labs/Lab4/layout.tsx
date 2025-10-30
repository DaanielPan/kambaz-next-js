"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export default function Lab4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Force client rendering only
  if (typeof window === "undefined") {
    return null;
  }

  return <Provider store={store}>{children}</Provider>;
}

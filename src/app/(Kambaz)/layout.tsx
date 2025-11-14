"use client";
import { ReactNode } from "react";
import Session from "./Account/Session";
import KambazNavigation from "./Navigation";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <Session>
      <div id="wd-kambaz" className="d-flex">
        <div>
          <KambazNavigation />
        </div>
        <div className="flex-fill ps-3 wd-main-content-offset">
          {children}
        </div>
      </div>
      </Session>
    </Provider>
  );
}

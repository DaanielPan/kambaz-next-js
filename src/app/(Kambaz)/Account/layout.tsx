import { ReactNode } from "react";
import AccountNavigation from "./Navigation";
import Session from "../Account/Session";  // <-- ADD THIS

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Session>   {/* <-- WRAP ALL CONTENT IN SESSION */}
      <div id="wd-kambaz">
        <table>
          <tbody>
            <tr>
              <td valign="top">
                <AccountNavigation />
              </td>
              <td valign="top" width="100%">
                {children}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Session>
  );
}

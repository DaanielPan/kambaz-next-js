"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();
  
  // Map link names to actual paths
  const getLinkPath = (link: string) => {
    if (link === "Signin") return "/Account/Signin";
    if (link === "Signup") return "/Account/Signup";
    if (link === "Profile") return "/Account/Profile";
    return `/Account/${link}`;
  };
 return (
   <Nav variant="pills">
     {links.map((link) => (
       <NavItem key={link}>
         <NavLink as={Link} href={getLinkPath(link)} active={pathname.includes(link)}>
           {link} </NavLink> </NavItem>
     ))}
     {currentUser && currentUser.role === "ADMIN" && (
       <NavItem>
         <NavLink as={Link} href={`/Account/Users`} active={pathname.endsWith('Users')}> Users </NavLink>
       </NavItem>
     )}
   </Nav>
);}

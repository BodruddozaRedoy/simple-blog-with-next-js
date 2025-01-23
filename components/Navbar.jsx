import React from "react";
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="flex justify-between items-center bg-slate-200 text-black px-10 py-5">
      <div>Simple Blog</div>
      <div className="flex gap-3 items-center list-none">
        <Link href={"/"}>Home</Link>
        {
          isUserAuthenticated ? (
            <Link href={'/profile'}>Profile</Link>
          ):(
            <LoginLink>Profile</LoginLink>
          )
        }
      </div>
      <div>
        {isUserAuthenticated ? (
          <LogoutLink>
            <button className="btn py-3 px-5 bg-blue-500 rounded-lg text-white font-semibold">
              Logout
            </button>
          </LogoutLink>
        ) : (
          <LoginLink>
            <button className="btn py-3 px-5 bg-blue-500 rounded-lg text-white font-semibold mr-5">
              Login
            </button>
          </LoginLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;

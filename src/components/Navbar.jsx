"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;
  // console.log(user?.name);

  //sign out
  const handleSignOut = async () => {
    await authClient.signOut();
  }

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/destinations", name: "Destinations" },
    { path: "/my-bookings", name: "My Bookings" },
    { path: "/add-destination", name: "Add Destination" },
  ];
  const navLinksLast = [
    // { path: "/profile", name: "Profile" },
    { path: "/login", name: "Login" },
    { path: "/signup", name: "Sign Up" },
  ];
  return (
    <nav className="bg-base-100 shadow-sm ">
      <div className="navbar max-w-[90%] mx-auto ">
        <div className="navbar-start hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-center ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              {navLinksLast.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={"/assets/Wanderlast.png"}
            height={150}
            width={150}
            alt="logo"
          ></Image>
        </div>

        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1 flex items-center ">
            {user ? (
              <>
                {" "}
                <li>
                  <Link href={"/profile"}>
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Avatar className="rounded-full">
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user?.name}
                      src={user?.image}
                    />
                    <Avatar.Fallback >{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </li>
                <li>
                  <Button variant="danger" onClick={handleSignOut}>Log Out</Button>
                </li>{" "}
              </>
            ) : (
              navLinksLast.map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/destination", name: "Destinations" },
    { path: "/my-booking", name: "My Bookings" },
  ];
  const navLinksLast = [
    { path: "/profile", name: "Profile" },
    { path: "/login", name: "Login" },
    { path: "/sign-up", name: "Sign Up" },
  ]
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
          <Image src={"/assets/Wanderlast.png"} height={150} width={150} alt="logo"></Image>
        </div>
        
         <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinksLast.map((link, index) => (
              <li key={index}>
                <Link href={link.path}>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
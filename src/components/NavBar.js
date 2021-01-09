import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to={"/"}
            exact
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white"
          >
            Danilo
          </NavLink>
          <NavLink
            to={"/post"}
            exact
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Post
          </NavLink>
          <NavLink
            to={"/project"}
            exact
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to={"/about"}
            exact
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 my-6">
          <SocialIcon
            url="https://twitter.com/darmo10"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 40, width: 40 }}
          ></SocialIcon>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

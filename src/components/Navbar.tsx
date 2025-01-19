"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  HomeFillIcon,
  HomeIcon,
  PlusSquareFillIcon,
  PlusSquareIcon,
  SearchFillIcon,
  SearchIcon,
} from "./ui/icons";
import { signIn, signOut, useSession } from "next-auth/react";
import ColorButton from "./ui/ColorButton";
import Image from "next/image";
import Avatar from "./Avatar";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
    alt: "home icon",
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
    alt: "search icon",
  },
  {
    href: "/new",
    icon: <PlusSquareIcon />,
    clickedIcon: <PlusSquareFillIcon />,
    alt: "new post icon",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-row items-center justify-between px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instagram</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-4 p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathname === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user?.username}`}>
                <Avatar image={user.image} />
              </Link>
            </li>
          )}

          {session ? (
            <ColorButton text="Sign out" onClick={() => signOut()} />
          ) : (
            <ColorButton text="Sign in" onClick={() => signIn()} />
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

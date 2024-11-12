"use client";
import React from "react";
import Image from "next/image";

import logo from "@/public/logo.png";
import Link from "next/link";
import CustomBtn from "./CustomBtn";
import { SignInForm } from "./SignInForm";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const DesktopNavbar = ({ categories }) => {
  return (
    <div className="hidden lg:flex justify-between items-center py-2 px-10">
      <div>
        <Link href={"/"}>
          <Image src={logo} width={150} height={150} alt="logo" />
        </Link>
        {/* <SignInForm /> */}
      </div>
      <div>
        <ul className="flex gap-10">
          <li className="hover:text-primary">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="hover:text-primary">
            <NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent className="px-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/branding`}
                          className="MenuLink hover:text-primary"
                        >
                          Branding
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/digital-marketing`}
                          className="MenuLink hover:text-primary"
                        >
                          Social Media Management
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/seo`}
                          className="MenuLink hover:text-primary"
                        >
                          Search Engine Optimization (SEO)
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/development`}
                          className="MenuLink hover:text-primary"
                        >
                          Web & App Development
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/production`}
                          className="MenuLink hover:text-primary"
                        >
                          Production & Animation
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </NavigationMenu>
          </li>
          <li className="hover:text-primary">
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="hover:text-primary">
            <Link href={"/admin"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <CustomBtn variant={"primary"} text={"Lets talk"} />
      </div>
    </div>
  );
};

export default DesktopNavbar;
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

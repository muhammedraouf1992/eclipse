import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const MobileNavbar = ({ categories }) => {
  return (
    <div className="lg:hidden flex justify-between px-4 py-2">
      <div>
        <Link href={"/"}>
          <Image src={logo} width={100} height={100} alt="logo" />
        </Link>
      </div>
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon width={30} height={30} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription asChild>
              <ul className="flex flex-col gap-5 items-start mt-20">
                <li className="">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="">
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={"mobileMenuItem !py-1 !gap-2"}
                      >
                        Solutions
                      </AccordionTrigger>
                      {categories.map((category) => (
                        <AccordionContent key={category.id} asChild>
                          <Link href={`/${category.slug}`}>
                            {category.title}
                          </Link>
                        </AccordionContent>
                      ))}
                    </AccordionItem>
                  </Accordion>
                </li>
                <li className="">
                  <Link href={"/blog"}>Blog</Link>
                </li>
                <li className="">
                  <Link href={"/admin"}>Contact Us</Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;

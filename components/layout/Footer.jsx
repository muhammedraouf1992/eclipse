import React from "react";
import CustomBtn from "./CustomBtn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer pt-40 px-2">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-6xl lg:text-[120px] leading-[1em] font-bold mb-1 lg:mb-0">
            Get started
          </h2>
          <div className="flex items-center gap-10">
            <h2 className="text-6xl lg:text-[120px] leading-[1em]">now</h2>
            <CustomBtn variant={"primary"} text={"Lets Contact"} />
          </div>
          <p className="text-xl lg:text-3xl text-white/40 my-10">
            If you would like to work with us or just want to get
            <br />
            in touch, we would love to hear from you!
          </p>
        </div>
        {/* address */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-10 py-10 border-b border-t border-white/30 mt-20">
          <div>
            <h6 className="text-2xl">Egypt, Cairo</h6>
          </div>
          <div>
            <h6 className="text-2xl">Saudi Arabia, Riyadh</h6>
          </div>
          <div>
            <h6 className="text-2xl">United Arab of Emirates, Abu Dhabi</h6>
          </div>
          <div>
            <h6 className="text-2xl">Italy, Milano City</h6>
          </div>
        </div>
        {/* copywrites */}
        <div className="py-10  flex flex-col-reverse lg:flex-row justify-between items-center ">
          <div className="mt-5 lg:my-0">
            <p className="text-center  text-white/40">
              © 2024 – 2025 | Alrights reserved by{" "}
              <span className="font-bold text-white">
                Eclipse Advertising Agency.
              </span>
            </p>
          </div>
          <div>
            <ul className="flex gap-10">
              <li className="hover:text-primary">
                <Link href={"#"}>About Us</Link>
              </li>

              <li className="hover:text-primary">
                <Link href={"#"}>Privacy Policy</Link>
              </li>

              <li className="hover:text-primary">
                <Link href={"#"}>Career</Link>
              </li>

              <li className="hover:text-primary">
                <Link href={"#"}>Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

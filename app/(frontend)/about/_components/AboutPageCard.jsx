import Link from "next/link";
import React from "react";

const AboutPageCard = () => {
  return (
    <section className="container mx-auto">
      <div className="aboutPageCard py-10 lg:py-[100px] flex justify-center flex-col items-center gap-10 lg:gap-20 rounded-lg">
        <h4 className="text-3xl lg:text-6xl lg:w-[700px] text-center">
          Start your experience with Eclipse
        </h4>
        <div>
          <Link
            href="#"
            className="wcf-btn-underline flex gap-2 items-center text-white flex-row-reverse uppercase text-sm font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="7"
              viewBox="0 0 21 7"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.726 0.366792C12.0758 -0.0606525 12.7058 -0.123655 13.1332 0.226073L20.8014 6.50003H1C0.447715 6.50003 0 6.05231 0 5.50003C0 4.94775 0.447715 4.50003 1 4.50003H15.1986L11.8668 1.77399C11.4393 1.42426 11.3763 0.794237 11.726 0.366792Z"
                fill="white"
              ></path>
            </svg>{" "}
            Lets get in touch{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPageCard;

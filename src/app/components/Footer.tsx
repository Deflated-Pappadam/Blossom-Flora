import React from "react";

function Footer() {
  return (
    <footer
      className="mt-10 w-full justify-end   bg-[#eeeeee] p-10 md:min-h-[200px]"
      id="contactUs"
    >
      <div className="flex flex-col justify-between md:flex-row">
        <div>
          <h2 className="font-medium text-black">Blossom Flora</h2>
          <p className="  text-gray-500">some great sayn by ritvik</p>
          <p className="mt-4  text-gray-500">Attingal, thiruvananthapuram</p>
        </div>

        <div className="flex w-full justify-between md:w-[50%] ">
          <div className="mt-10">
            <h4 className="font-medium text-black">Socials </h4>
            <a href="">
              <p className="duration-600 cursor-pointer  text-gray-500 transition-all hover:text-black">
                twitter: ddgsd
              </p>
            </a>

            <a href="">
              <p className="duration-600 cursor-pointer  text-gray-500 transition-all hover:text-black">
                Insta : dsgsd
              </p>
            </a>
            <a href="https://www.adithyakrishnan.com/">
              <p className="duration-600 cursor-pointer  text-gray-500 transition-all hover:text-black">
                Website : fdhfd
              </p>
            </a>
          </div>
          <div className="mt-10">
            <h4 className=" font-medium">Contact Us</h4>
            <a href="">
              <p className="duration-600 cursor-pointer  text-gray-500 transition-all hover:text-black">
                Phone:
              </p>
            </a>
            <a href="">
              <p className="duration-600 cursor-pointer text-gray-500 transition-all hover:text-black">
                Adress 1
              </p>
            </a>
            <a href="">
              <p className="duration-600 cursor-pointer text-gray-500 transition-all hover:text-black">
                adress 2
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

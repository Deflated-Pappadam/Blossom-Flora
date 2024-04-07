import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <footer
      id="contactUs"
      className="mt-[100px] flex w-full justify-between gap-5 bg-[#EBF1FA] p-5"
    >
      <div className="w-full">
        <iframe
          className="w-full"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15775.597913326641!2d76.8135155!3d8.7010956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e9f1e8f7f9b5%3A0x833776d2a40bd039!2sBlossom%20Flora!5e0!3m2!1sen!2sin!4v1712486255129!5m2!1sen!2sin"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p>Attingal, Near Town Hall, TVM</p>
      </div>
      <div className="flex flex-col">
        <div>
          <h4 className="mb-1 mt-5 font-semibold">Opening Hours</h4>
          <div className="flex w-[250px] justify-between">
            <p>Mon-Sat</p>
            <p>8:00 am - 7:00 pm</p>
          </div>
          <div className="flex w-[250px] justify-between">
            <p>Sun</p>
            <p>10:00 am - 2:00 pm</p>
          </div>
        </div>

        <div>
          <h4 className="mb-1 mt-5 font-semibold">Contact Us</h4>
          <a
            className="flex items-center gap-1"
            href="https://www.facebook.com/share/qt5hSVdMouLmbpDF/?mibextid=qi2Omg"
          >
            <FaFacebookF />
            <p>facebook</p>
          </a>
          <a
            className="flex items-center gap-1"
            href="https://www.instagram.com/blossomflora9?igsh=dHB6bHh1MXlxenVl"
          >
            <FaInstagram />
            <p>instagram</p>
          </a>
          <a
            className="flex items-center gap-1"
            href="mailto:blossomflora9@gmail.com"
          >
            <MdOutlineMail />
            <p>blossomflora9@gmail.com</p>
          </a>
          <a className="flex items-center gap-1" href="tel:+917592092057">
            <FaPhoneAlt />
            <p>+91 7592092057</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

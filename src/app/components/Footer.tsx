import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <footer id="#contactUs" className="bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <h3 className="mb-6 text-lg font-medium tracking-wider text-gray-900 uppercase">
              Visit Us
            </h3>
            <div className="overflow-hidden rounded-lg shadow-sm">
              <iframe
                className="h-64 w-full lg:h-80"
                title="Blossom Flora Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15775.597913326641!2d76.8135155!3d8.7010956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e9f1e8f7f9b5%3A0x833776d2a40bd039!2sBlossom%20Flora!5e0!3m2!1sen!2sin!4v1712486255129!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact & Hours Section */}
          <div className="order-1 space-y-10 lg:order-2">
            
            {/* Opening Hours */}
            <div>
              <h3 className="mb-6 text-lg font-medium tracking-wider text-gray-900 uppercase">
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-medium text-gray-900">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="mb-6 text-lg font-medium tracking-wider text-gray-900 uppercase">
                Get In Touch
              </h3>
              <div className="space-y-4">
                
                {/* Phone */}
                <a
                  href="tel:+917592092057"
                  className="group flex items-center space-x-4 rounded-lg p-3 transition-all duration-200 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors group-hover:bg-black group-hover:text-white">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 7592092057</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:blossomflora9@gmail.com"
                  className="group flex items-center space-x-4 rounded-lg p-3 transition-all duration-200 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors group-hover:bg-black group-hover:text-white">
                    <MdOutlineMail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">blossomflora9@gmail.com</p>
                  </div>
                </a>

                {/* Social Media */}
                <div className="pt-4">
                  <p className="mb-4 text-sm font-medium text-gray-900">Follow Us</p>
                  <div className="flex space-x-3">
                    
                    <a
                      href="https://www.facebook.com/share/qt5hSVdMouLmbpDF/?mibextid=qi2Omg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-black hover:text-white"
                    >
                      <FaFacebookF size={16} />
                    </a>

                    <a
                      href="https://www.instagram.com/blossomflora9?igsh=dHB6bHh1MXlxenVl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-200 hover:bg-black hover:from-purple-500 hover:to-pink-500 hover:text-white"
                    >
                      <FaInstagram size={16} />
                    </a>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-medium text-gray-900">Blossom Flora</h4>
              <p className="text-sm text-gray-600">Specialists in high-quality, stylish and unique flowers</p>
            </div>
            <div className="text-center text-sm text-gray-500 md:text-right">
              © {new Date().getFullYear()} Blossom Flora. All rights reserved.
            </div>
          </div>
        </div>
       
      </div>
       <div className="text-center my-5 text-sm">
         Designed & Developed by <a href="https://github.com/Deflated-Pappadam" className="hover:underline"> Deflated Pappadam</a> 
            </div>

    </footer>
  );
}

export default Footer;
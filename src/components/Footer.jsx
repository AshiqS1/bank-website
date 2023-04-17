import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/index.js";
import styles, { layout } from "../styles.js";

function Footer() {
    return (
        <footer className={`${styles.flexCenter} pt-6 mt-4 lg:mt-8 flex-col`}>

            {/* Footer - Logos, Links */}
            <div className={`${styles.flexCenter} w-full flex-col lg:flex-row mb-8 md:mb-10 lg:mb-11 lg:items-start lg:justify-between`}>

                {/* Logo */}
                <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start lg:flex-[0.5]">
                    <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" />
                    <p className={`${styles.paragraph} mt-4 max-w-[320px]`}>A new way to make your payments easy, reliable and secure.</p>
                </div>

                {/* Links */}
                <div className="flex w-full flex-row justify-between items-start flex-wrap mt-8 lg:mt-0 lg:w-fit lg:flex-[0.75]">
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px] text-left">
                            <h4 className="font-poppins font-medium text-white text-[18px] leading-[27px]">{footerLink.title}</h4>
                            <ul className="list-none mt-4">
                                {footerLink.links.map((link, idx) => (
                                    <li key={link.name} className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] cursor-pointer hover:text-secondary ${idx !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}>{link.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer - Bottom Copyright Bar, Social Media Icons */}
            <div className="w-full flex flex-col items-center justify-start md:flex-row md:justify-between md:items-center py-6 lg:py-8 border-t-[1px] border-t-[#3f3e45]">

                {/* Copyright Message */}
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[27px] text-center">Copyright &#169; 2023 HooBank. All Rights Reserved.</p>


                {/* Socials Icons */}
                <div className="flex flex-row mt-6 md:mt-0">
                    {socialMedia.map((social, idx) => (
                        <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${idx !== socialMedia.length - 1 ? "mr-4" : "mr-0"}`} />
                    ))}
                </div>

            </div>

        </footer>
    )
}

export default Footer;
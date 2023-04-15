import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/index.js";
import styles, { layout } from "../styles.js";

function Footer() {
    return (
        <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

            {/* Footer - Logos, Links */}
            <div className={`${styles.flexStart} w-full md:flex-row flex-col mb-8`}>

                <div className="flex flex-1 flex-col justify-start mr-10">
                    <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain" />
                    <p className={`${styles.paragraph} mt-4 max-w-[320px]`}>A new way to make your payments easy, reliable and secure.</p>
                </div>

                <div className="flex w-full flex-[1.5] flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
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
            <div className="w-full flex justify-between items-start flex-col md:flex-row pt-8 border-t-[1px] border-t-[#3f3e45]">

                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[27px] text-center">Copyright &#169; 2023 HooBank. All Rights Reserved.</p>

                <div className="flex flex-row md:mt-0 mt-6">
                    {socialMedia.map((social, idx) => (
                        <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${idx !== socialMedia.length - 1 ? "mr-4" : "mr-0"}`} />
                    ))}
                </div>

            </div>

        </footer>
    )
}

export default Footer;
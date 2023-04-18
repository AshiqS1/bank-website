import React from "react";
import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";
import styles from "../styles.js";

function Hero() {
    return (
        <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}
        >

            {/* Left Column (Text Content) */}
            <div className={`flex flex-1 ${styles.flexStart} flex-col px-6 md:pl-[6rem] md:pr-0 xl:px-0`}>

                {/* Discount Message */}
                <div className="flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-[10px]">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">20%</span>
                        {" "} DISCOUNT FOR {" "}
                        <span className="text-white">1 MONTH</span>
                        {" "} ACCOUNT
                    </p>
                </div>

                <div className="w-full flex flex-row justify-between items-center mt-6">
                    {/* Main Heading - Line(s) 1 & 2 */}
                    <h1 className="flex-1 font-poppins font-semibold text-white text-[48px] sm:text-[58px] lg:text-[68px] leading-[66px] sm:leading-[74px] lg:leading-[90px]">
                        The Next<br className="block" />{" "}
                        <span className="text-gradient">Generation</span>
                    </h1>

                    {/* Get Started Button */}
                    <div className="hidden ss:flex md:ml-12 md:mr-12 lg2:mr-[6em] xl:ml-0 xl:mr-[12em]">
                        <GetStarted />
                    </div>

                    {/* Gradient - Title (left, optional) */}
                    {/* <div className="absolute z-[0] -left-[50%] top-[20%] w-[50%] h-[50%] rounded-full white__gradient" /> */}
                </div>

                {/* Main Heading - Line 3 */}
                <h1 className="w-full font-poppins font-semibold text-white text-[48px] sm:text-[58px] lg:text-[68px] leading-[66px] sm:leading-[74px] lg:leading-[90px]">
                    Payment Method.
                </h1>

                {/* Main Subheading */}
                <p className={`${styles.paragraph} ss:max-w-[470px] mt-6`}>
                    Our team of experts use a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>

            {/* Right Column (Image Content) */}
            <div className={`flex-1 flex ${styles.flexCenter} pt-12 md:py-0 relative`}>
                {/* Robot Image */} {/* note: may adjust img fill -> object cover/contain */}
                <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] object-contain" />

                {/* Gradients - Image (right) */}
                <div className="absolute z-[0] w-[50%] h-[50%] right-[5rem] bottom-[5rem] blue__gradient" />
                <div className="absolute z-[0] w-[60%] h-[60%] rounded-full bottom-[10rem] white__gradient" />
                <div className="absolute z-[1] w-[40%] h-[35%] top-[0rem] pink__gradient" />

            </div>

            <div className={`${styles.flexCenter} ss:hidden py-4`}>
                <GetStarted />
            </div>

        </section>
    )
}

export default Hero;
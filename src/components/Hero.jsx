import React from "react";
import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";
import styles from "../styles.js";

function Hero() {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

            {/* Left Column (Text Content) */}
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                {/* Discount Message */}
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">20%</span>
                        {" "} DISCOUNT FOR {" "}
                        <span className="text-white">1 MONTH</span>
                        {" "} ACCOUNT
                    </p>
                </div>

                <div className="w-full flex flex-row justify-between items-center mt-2">
                    {/* Main Heading - Line(s) 1 & 2 */}
                    <h1 className="flex-1 font-poppins font-semibold text-[52px] ss:text-[72px]  text-white ss:leading-[100px] leading-[75px]">
                        The Next<br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Generation</span>
                    </h1>

                    {/* Get Started Button */}
                    <div className="hidden md:flex md:mr-4 mr-0 ml-4">
                        <GetStarted />
                    </div>
                </div>

                {/* Main Heading - Line 3 */}
                <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                    Payment Method.
                </h1>

                {/* Main Subheading */}
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                </p>
            </div>

            {/* Right Column (Image Content) */}
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                {/* Robot Image */}
                {/* object cover/contain */}
                <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] object-contain" />

                {/* Gradients */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>

            <div className={`md:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>

        </section>
    )
}

export default Hero;
import React from "react";
import Button from "./Button";
import styles, { layout } from "../styles.js";

function CTA() {
    return (
        <section className={`${styles.flexCenter} ${styles.padding} mt-6 mb-16 flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow relative z-[5]`}>

            {/* Heading and Text */}
            <div className="flex flex-1 flex-col">
                <h2 className={styles.heading2}>Let's try our service now!</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-3`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>

            {/* Button */}
            <div className="">
                <Button styles={`${styles.flexCenter} ml-0 sm:ml-10 mt-10 sm:mt-0`} />
            </div>

        </section>
    )
}

export default CTA;
import React from "react";
import { bill, apple, google } from "../assets";
import styles, { layout } from "../styles.js";

function Billing() {
    return (
        <section id="product" className={`${layout.sectionReverse} gap-x-[2em]`}>

            {/* Left Column - Bill Image */}
            <div className={`${layout.sectionImgReverse}`}>
                <img className="w-[100%] h-[100%] relative z-[5] object-contain" src={bill} alt="billing" />
            </div>

            {/* Right Column - Section Info */}
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>Easily control your <br className="hidden ss:block md:hidden lg:block" />billing & invoicing.</h2>
                <p className={`${styles.paragraph} mt-4 sm:mt-2 ss:max-w-[470px]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            </div>

        </section>
    )
}

export default Billing;
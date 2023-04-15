import React from "react";
import { bill, apple, google } from "../assets";
import styles, { layout } from "../styles.js";

function Billing() {
    return (
        <section id="product" className={layout.sectionReverse}>

            {/* Left Column - Bill Image */}
            <div className={layout.sectionImgReverse}>
                <img className="w-[100%] h-[100%] relative z-[5] object-contain" src={bill} alt="billing" />
            </div>

            {/* Right Column - Section Info */}
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" />billing & invoicing.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                    <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                    <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
                </div>
            </div>

        </section>
    )
}

export default Billing;
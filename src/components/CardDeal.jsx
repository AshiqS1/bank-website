import React from "react";
import Button from "./Button";
import { card } from "../assets";
import styles, { layout } from "../styles.js";

function CardDeal() {
    return (
        <section id="carddeal" className={layout.section}>

            {/* Left Column - Section Info */}
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" />in a few easy steps.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <Button styles="mt-10" />
            </div>

            {/* Right Column - FeatureCards */}
            <div className={`${layout.sectionImg} flex-col`}>
                <img className="w-[100%] h-[100%] relative z-[5] object-contain" src={card} alt="card-deal" />
            </div>

        </section>
    )
}

export default CardDeal;
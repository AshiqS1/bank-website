import React, { useState, useEffect } from "react";
import Button from "./Button";
import { features } from "../constants/index.js";
import styles, { layout } from "../styles.js";

function FeatureCard({ idx, icon, title, content }) {
    return (
        // Feature Card
        <div className={`flex items-start flex-row p-6 rounded-[20px] ${idx !== features.length - 1 ? "mb-6" : "mb-0"} w-full feature-card`}>

            {/* Icon */}
            <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter} mr-1`}>
                <img src={icon} alt={icon} className="w-[50%] h-[50%] object-contain" />
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col ml-3 ">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-1">{title}</h4>
                <p className={"font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 ss:max-w-[450px]"}>{content}</p>
            </div>
        </div>
    )
}

function Business() {
    return (
        <section id="features" className={`${layout.section} gap-x-[2em]`} >

            {/* Left Column - Section Info */}
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>You do the business, <br className="hidden xs:block md:hidden lg:block" />we'll handle the money.</h2>
                <p className={`${styles.paragraph} ss:max-w-[470px] mt-3 sm:mt-2`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button styles="mt-6" />
            </div>

            {/* Right Column - FeatureCards */}
            <div className={`${layout.sectionImg} flex-col mt-9 md:mt-0`}>
                {features.map((feature, idx) => (
                    <FeatureCard key={feature.id} idx={idx} icon={feature.icon} title={feature.title} content={feature.content} />
                ))}
            </div>

        </section>
    )
}

export default Business;
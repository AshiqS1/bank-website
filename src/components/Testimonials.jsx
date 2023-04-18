import React from "react";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";
import styles, { layout } from "../styles.js";

function Testimonials() {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative z-[5]`}>

            {/* Title and Subtitle */}
            <div className="w-full flex justify-between items-start flex-col mb-6 ss:mb-8 sm:flex-row sm:justify-center sm:items-center relative z-[5] gap-x-[2em]">
                <h2 className={`${styles.heading2} flex-1`}>What people are <br className="hidden xs:block" />saying about us.</h2>

                <div className="flex-1 mt-4 sm:mt-0">
                    <p className={`${styles.paragraph} text-left ss:max-w-[470px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
            </div>


            {/* Feedback Cards */}
            <div className="flex flex-col w-full justify-start items-center sm:flex-row sm:justify-center sm:items-center sm:flex-wrap md:justify-between feedback-container relative z-[5] gap-8">
                {feedback.map((card, idx) => (
                    <FeedbackCard key={card.id} idx={idx} content={card.content} name={card.name} title={card.title} img={card.img} />
                ))}
            </div>

            {/* Gradients */}
            <div className="absolute z-[1] -right-[50%] top-[0] w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[1] w-[50%] h-[50%] -right-[50%] bottom-[0] rounded-full pink__gradient" />

        </section>
    )
}

export default Testimonials;
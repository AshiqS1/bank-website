import React from "react";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";
import styles from "../styles.js";

function Testimonials() {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

            {/* Title and Subtitle */}
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={styles.heading2}>What people are <br className="sm:block hidden" />saying about us.</h2>

                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} max-w-[470px] text-left`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
            </div>

            {/* Feedback Cards */}
            <div className="flex flex-wrap w-full sm:justify-start justify-center feedback-container relative z-[1]">
                {feedback.map((card, idx) => (
                    <FeedbackCard key={card.id} idx={idx} content={card.content} name={card.name} title={card.title} img={card.img} />
                ))}
            </div>

        </section>
    )
}

export default Testimonials;
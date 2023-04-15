import React from "react";
import { stats } from "../constants/index.js";
import styles from "../styles.js";

function Stats() {
    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat, idx) => (
                <div key={stat.id} className={`flex-1 flex items-center flex-row m-3 
                ${idx === 0 ? "justify-start" : ""} 
                ${idx === stats.length - 1 ? "justify-end" : ""} 
                ${(idx !== 0 && idx !== stats.length - 1) ? "justify-center" : ""}`}>
                    <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[43px] leading-[43px] text-white">{stat.value}</h4>
                    <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
                </div>
            ))}
        </section>
    )
}

export default Stats;
import React from "react";
import { stats } from "../constants/index.js";
import styles from "../styles.js";

function Stats() {
    return (
        <section className={`flex flex-row flex-wrap items-center justify-center mb-4 md:mt-2 lg2:mt-0 lg:mb-6 gap-x-6 ss:justify-between md:flex-nowrap lg:gap-x-0`}>
            {stats.map((stat, idx) => (
                <>
                    <div key={stat.id} className={`flex ss:flex-1 sm:flex-none flex-row items-center justify-center my-2 relative`}>
                        <h4 className="font-poppins font-semibold text-white text-[30px] lg:text-[38px] leading-[40px] lg:leading-[44px]">
                            {stat.value}
                        </h4>

                        <p className="font-poppins font-normal ml-3 text-gradient uppercase text-[15px] lg:text-[20px] leading-[21px] lg:leading-26px]">
                            {stat.title}
                        </p>
                    </div>

                    <div className={`w-[1px] h-[20px] bg-dimWhite hidden md:flex ${idx === stats.length - 1 ? "md:hidden" : ""}`} />
                </>
            ))}

        </section>
    )
}

export default Stats;
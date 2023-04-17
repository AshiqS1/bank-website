import React from "react";
import { arrowUp } from "../assets";
import styles from "../styles.js";

function GetStarted() {
    return (
        <div className={`${styles.flexCenter} w-[130px] h-[130px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain relative z-[0] top-[1.5px]" />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    )
}

export default GetStarted;
import React from "react";
import { clients } from "../constants/index.js";
import styles, { layout } from "../styles.js";

function Clients() {
    return (
        <section id="clients" className={`${styles.flexCenter} pt-0 ss:pt-3 sm:pt-6 pb-6`}>

            {/* Client Logos */}
            <div className={`${styles.flexCenter} flex-wrap w-full gap-8`}>

                {clients.map((client, idx) => (
                    <div key={client.id} className={`${styles.flexCenter} flex-1 min-w-[192px] ${idx === 2 ? "ss:relative bottom-[7px]" : ""} ${idx === 3 ? "ss:relative bottom-[1px]" : ""}`}>
                        <img src={client.logo} alt={client.id} className={`w-[150px] sm:w-[192px] object-contain`} />
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Clients;
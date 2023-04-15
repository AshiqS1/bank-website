import React from "react";
import { clients } from "../constants/index.js";
import styles, { layout } from "../styles.js";

function Clients() {
    return (
        <section id="clients" className={`${styles.flexCenter}`}>

            {/* Client Logos */}
            <div className={`${styles.flexCenter} flex-wrap w-full`}>

                {clients.map((client, idx) => (
                    <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] ${idx === 2 ? "relative bottom-[7px]" : ""} ${idx === 3 ? "relative bottom-[1px]" : ""}  `}>
                        <img src={client.logo} alt={client.id} className={`sm:w-[192px] w-[100px] object-contain`}
                        />
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Clients;
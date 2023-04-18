import React, { useState, useEffect } from "react";

function ScrollTopButton() {

    const [scrollTopButton, setScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrollTopButton(true);
            } else {
                setScrollTopButton(false);
            }
        })
    }, []);

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {scrollTopButton ? (
                <button
                    className="flex justify-center items-center fixed bottom-[1rem] right-[1rem] md:bottom-[1.5rem] md:right-[1.5rem]  w-[50px] h-[50px] rounded-[10px] bg-discount-gradient font-poppins font-black text-[25px] outline-none z-[5]"
                    onClick={scrollTop}
                >
                    <p className="relative top-[2px] text-gradient">
                        &uarr;
                    </p>
                </button>
            ) : ""}
        </div>
    )
}

export default ScrollTopButton; 
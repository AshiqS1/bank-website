// Consists of TailwindCSS Styles - https://tailwindui.com/documentation

const styles = {
    boxWidth: "w-full xl:max-w-[1536px]",

    heading2: "font-poppins font-semibold w-full text-white text-[40px] lg:text-[44px] leading-[66px] lg:leading-[68px]",

    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "px-6 md:px-[6rem]",
    paddingY: "py-6",
    padding: "px-12 py-12",

    marginX: "mx-6",
    marginY: "my-6"
};

export default styles;

export const layout = {
    section: `flex flex-col md:flex-row ${styles.paddingY}`,
    sectionReverse: `flex flex-col-reverse md:flex-row ${styles.paddingY}`,

    sectionInfo: `flex flex-1 flex-col ${styles.flexStart}`,
    sectionImg: `flex-1 flex ${styles.flexCenter} relative`,
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} relative`,
};


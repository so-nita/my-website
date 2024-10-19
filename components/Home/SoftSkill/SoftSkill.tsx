import ArrowIcon from "../../Icons/ArrowIcon";

export default function SoftSkill() {
    return (
        <>
            <div
            id="SoftSkillSection"
            data-aos="fade-up"
            className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
            >
                {/* // ? Title */}
                <div className="flex flex-row items-center ">
                    <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
                    <div className="flex flex-row space-x-2 items-center">
                    <span className="text-AAsecondary font-sans text-sm  sm:text-base"> 4.</span>
                    <span className=" font-sans text-AAsecondary text-base">Soft Skills</span>
                    </div>
                </div>

                {/* Skills */}
                <div className="">

                </div>
            </div>
        </>
    );
};
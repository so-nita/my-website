import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TurboTech () {
    const tasks = [
        {
            text: "Implemented website design and enhanced interactivity.",
            keywords: ["HTML", "CSS", "Boostrap", "ASP.Net Framework", "C#", "SQL Server"],
        },
        {
            text: "Implemented website design and enhanced interactivity.",
            keywords: ["website design"],
        },
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        Back-End Developer <span className="text-AAsecondary">@ C#</span>
                    </span>
 
                    {/* Date */}
                    <span className="font-mono text-xs text-gray-400 pb-1">Nov 2023 - Present</span>
                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        style={{ fontSize: "0.8rem" }}
                        // set on click to open the website
                        //-- onClick={() => window.open("https://www.atech-it.com/", "_blank")}
                    >
                        www.turbotech.com   
                    </span>
                </div>

                <div className="flex flex-col space-y-4 sm:text-sm text-xs">
                    {/* Description */}
                    {tasks.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row space-x-1">
                                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                                <span
                                    className="text-gray-500 sm:text-sm text-xs"
                                    dangerouslySetInnerHTML={{
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                                    }}
                                ></span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
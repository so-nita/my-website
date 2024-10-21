import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ATech() {
    const tasks = [
        {
            text: "Implemented website design and enhanced interactivity.",
            keywords: ["HTML", "CSS", "Bootstrap", "C#", "ASP.Net Framework", "SQL Server"],
        },
        {
            text: "Developed backend services and APIs for seamless integration with the front end.",
            keywords: ["C#", "ASP.Net Core", "REST API", "Entity Framework", "SQL Server", "LINQ"],
        },
        {
            text: "Optimized database queries to improve application performance.",
            keywords: ["SQL Server", "Database Optimization", "Stored Procedures"],
        },
        {
            text: "Collaborated with cross-functional teams to deliver a responsive and user-friendly web application.",
            keywords: ["Team Collaboration", "Responsive Design", "JavaScript", "HTML", "CSS"],
        },
        {
            text: "Resolved critical bugs and implemented improvements based on user feedback.",
            keywords: ["Bug Fixing", "Code Optimization", "Debugging", "Git", "GitHub", "C#"],
        }
    ];
    

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        Web Developer <span className="text-AAsecondary">@ C#</span>
                    </span>

                    {/* Date */}
                    <span className="font-mono text-xs text-gray-300 pb-1">Date : <span className="font-mono text-xs text-gray-400 pb-1">Dec 2022 - Sep 2023</span></span>
                    
                    <span
                        className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                        style={{ fontSize: "0.8rem" }}
                        // set on click to open the website
                        onClick={() => window.open("https://www.atech-it.com/", "_blank")}
                    >
                        www.atech-it.com
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
};
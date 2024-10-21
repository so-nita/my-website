import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TurboTech () {
    const tasks = [
        {
            text: "Designed and developed RESTful APIs to facilitate communication between the frontend and backend services.",
            keywords: ["C#", "ASP.Net Core", "REST API", "JSON", "API Design"],
        },
        {
            text: "Implemented authentication and authorization for APIs using JWT (JSON Web Tokens) to secure user data.",
            keywords: ["C#", "ASP.Net Core", "JWT", "Security", "API Development"],
        },
        {
            text: "Developed Windows applications utilizing C# and WPF (Windows Presentation Foundation) to create user-friendly interfaces.",
            keywords: ["C#", "WPF", "Windows Applications", "UI Development", "Desktop Apps"],
        },
        {
            text: "Collaborated with frontend developers to integrate APIs and ensure seamless data exchange.",
            keywords: ["Team Collaboration", "API Integration", "Frontend Development", "Communication"],
        },
        {
            text: "Conducted performance testing and optimization of APIs to improve response times and scalability.",
            keywords: ["Performance Testing", "Optimization", "Load Testing", "C#", "API Performance"],
        },
        {
            text: "Utilized SQL Server for database management, ensuring data integrity and implementing stored procedures.",
            keywords: ["SQL Server", "Database Management", "Stored Procedures", "Data Integrity"],
        },
        {
            text: "Maintained and updated existing Windows applications, fixing bugs and enhancing functionality based on user feedback.",
            keywords: ["C#", "Bug Fixing", "Maintenance", "User Feedback", "Continuous Improvement"],
        },
        {
            text: "Documented API specifications and application features.",
            keywords: ["Documentation", "API Specifications", "Technical Writing", "Team Onboarding"],
        },
        {
            text: "Participated in code reviews and contributed to best practices for API development and Windows applications.",
            keywords: ["Code Review", "Best Practices", "Team Collaboration", "C#", "ASP.Net Core"],
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
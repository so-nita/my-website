import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../Icons/Img";

export default function SoftSkill() {
    return (
        <>
            <div
            id="SoftSkillSection"
            data-aos="fade-up"
            className="flex flex-col space-y-4 w-full h-auto items-center bg-AAprimary mb-32 lg:px-28 md:px-10 px-10"
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
                {/* <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                        </div>
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
                        </div>
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                        </div>
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                        </div>
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                        </div>
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                        </div>
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                        </div>
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                        </div>
                        <div>
                            <Img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                        </div>
                    </div>
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                    <div className="bg-white sm:row-span-2"> 
                        <Img className="h-auto max-w-full object-fill" src="https://img-b.udemycdn.com/course/240x135/707876_9e82_4.jpg" alt=""/> 
                    </div>
                    <div className="bg-white"> 
                        <Img className="h-auto max-w-full object-cover" src="https://smartthink.co.uk/wp-content/uploads/2017/02/photoshop-intro.jpg" alt=""/> 
                    </div>
                    <div className="bg-white"> 
                        <Img className="h-auto max-w-full object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthS4lBMkHvLFtpVqp4cljnbTnaGYZrSjImQ&s" alt=""/> 
                    </div>
                </div>
            </div>
            <div/>
        </>
    );
};
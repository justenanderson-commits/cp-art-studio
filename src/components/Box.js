import React from "react";

const Box = () => {
    return (
        <div className="w-[1140px] h-[1123px]">
            <div className="relative w-[1144px] h-[1123px] top-0 left-0">
                <div className="relative w-[1140px] h-[1123px] bg-[#a0bfb5]">
                    <p className="absolute w-[353px] top-[714px] left-[741px] [font-family:'Inter-Bold',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
                        <span className="font-bold">
                            Art Lessons for:
                            <br />
                        </span>
                        <span className="[font-family:'Inter-Regular',Helvetica]">
                            All Ages
                            <br />
                            Private Lessons
                            <br />
                            After School
                            <br />
                            Home School
                            <br />
                            Birthday Parties
                            <br />
                            Art Therapy
                            <br />
                            Meeting Special Needs
                        </span>
                    </p>
                    <p className="absolute w-[518px] top-[34px] left-[90px] [font-family:'Inter-Bold',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
                        <span className="font-bold">
                            Diverse Offerings Include:
                            <br />
                        </span>
                        <span className="[font-family:'Inter-Regular',Helvetica]">
                            Ceramics/Pottery
                            <br />
                            On-Site Ceramics Lab
                            <br />
                            Total ceramic sculpting process <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (not prefabricated)
                            <br />
                            Papier-Mache
                            <br />
                            Mixed Media
                            <br />
                            Metal Tooling
                            <br />
                            Paper Making
                            <br />
                            Plaster
                            <br />
                            Painting - All Types
                            <br />
                            Drawing
                            <br />
                            Print Making
                            <br />
                            Plein Air Experiences
                            <br />
                            Museum Tours
                            <br />
                            Batik
                            <br />
                            And More!
                        </span>
                    </p>
                    <img
                        className="absolute w-[464px] h-[599px] top-[45px] left-[629px] object-cover"
                        alt="Student with"
                        src="student-with-painting.png"
                    />
                    <img
                        className="absolute w-[606px] h-[338px] top-[749px] left-[34px]"
                        alt="Denver art museum"
                        src="denver-art-museum-group.png"
                    />
                </div>
            </div>
        </div>
    );
};


export default Box
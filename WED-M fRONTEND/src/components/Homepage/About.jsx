import React from "react";
import img1 from "./Ellipse 13.png";
import rect from "./Rectangle 72.png"
import img2 from "./image 15.png"
import rect2 from "./Rectangle 73.png"


const About = () => {
    return (
        <div className="w-full bg-[#FFFCF8]">
            <div className="first h-screen overflow-hidden cont">
                <div className="w-full xl:mt-5 h-[20vw] flex justify-center items-center font-montserrat">
                    <img className="relative xl:scale-[.7] 2xl:scale-[.8]" src={img1} alt="" srcset="" />
                    <div className="absolute uppercase flex flex-col justify-center items-center">
                        <h1 className="text-[#B16046] xl:text-3xl 2xl:text-3xl">
                            Make Your Wedding Invites Unforgettable
                        </h1>
                        <h1 className="xl:text-5xl 2xl:text-6xl mt-[2vw] text-[#6D564E]">
                            Your Dream Wedding Invitation,
                        </h1>
                        <h1 className="xl:text-5xl 2xl:text-6xl leading-[4vw] text-[#6D564E]">
                            Just a Click Away
                        </h1>
                    </div>
                </div>
                <div className="w-full xl:mt-8  h-[28vw] flex gap-[5vw] justify-center items-center">
                    <div className="2xl:w-[20vw] xl:w-[25vw] relative 2xl:h-[22vw] xl:h-[26vw] uppercase rounded-t-full bg-cover bg-center" style={{ backgroundImage: `url('./cop1.jpg')` }}>
                        <div className="lower flex px-[2vw] flex-col justify-center bg-[#EDE3D9] items-center absolute bottom-0 w-full xl:h-[12vw] 2xl:h-[10vw]">
                            <h1 className="text-[#4C5637] font-bold xl:text-2xl 2xl:text-3xl">Customizable</h1>
                            <h1 className="text-[#4C5637] font-bold xl:text-2xl 2xl:text-3xl">Templates</h1>
                            <h1 className="text-[#7C836C] mt-[1vw]">
                                Risus scelerisque a non turpis vitae
                            </h1>
                            <h1 className="text-[#7C836C]"> malesuada sed venenatis.</h1>
                        </div>
                    </div>
                    <div className="2xl:w-[20vw] xl:w-[25vw]  relative 2xl:h-[26vw] xl:h-[28vw] uppercase rounded-t-full bg-cover bg-center" style={{ backgroundImage: `url('./cop2.jpg')` }}>
                        <div className="lower flex uppercase flex-col justify-center bg-[#EDE3D9] items-center absolute bottom-0 w-full xl:h-[12vw] 2xl:h-[10vw]">
                            <h1 className="text-[#4C5637] font-bold xl:text-2xl 2xl:text-3xl">Image, PDF & Video</h1>
                            <h1 className="text-[#4C5637] font-bold xl:text-2xl 2xl:text-3xl">Formats</h1>
                            <h1 className="text-[#7C836C] mt-[1vw]">
                                Risus scelerisque a non turpis vitae
                            </h1>
                            <h1 className="text-[#7C836C]"> malesuada sed venenatis.</h1>
                        </div>
                    </div>
                    <div className="2xl:w-[20vw] xl:w-[25vw] relative 2xl:h-[22vw] xl:h-[26vw] uppercase rounded-t-full bg-cover bg-center" style={{ backgroundImage: `url('./cop3.jpg')` }}>
                        <div className="lower flex flex-col uppercase justify-center bg-[#EDE3D9] items-center absolute bottom-0 w-full xl:h-[12vw] 2xl:h-[10vw]">
                            <h1 className="text-[#4C5637] font-bold xl:text-2xl 2xl:text-3xl">Easy to Share</h1>
                            <h1 className="text-[#7C836C] mt-[1vw]">
                                Risus scelerisque a non turpis vitae
                            </h1>
                            <h1 className="text-[#7C836C]"> malesuada sed venenatis.</h1>
                        </div>{" "}
                    </div>
                </div>
            </div>
            <div className="secCont text-white mt-10 font-montserrat uppercase relative overflow-hidden w-full h-screen bg-[#D3A38C]">
                <div className="absolute 2xl:-right-24 2xl:-top-16 xl:-right-[15vw] xl:-top-24">
                    <img className="scale-[.8]" src={rect} alt="" srcset="" />
                </div>
                <div className="w-[70vw] absolute h-[20vw] xl:top-[7vw] 2xl:top-[5vw] left-[10vw]">
                    <h1 className="uppercase font-raleway text-2xl pl-2 text-[#F5E7BE]">How it works</h1>
                    <h1 className="font-montserrat tracking-tight text-white xl:leading-[4vw] 2xl:leading-[4vw] xl:text-5xl 2xl:text-6xl uppercase ">Design stunning wedding</h1>
                    <h1 className="font-montserrat tracking-tight text-white xl:leading-[4vw] 2xl:leading-[4vw] xl:text-5xl 2xl:text-6xl uppercase ">invites in image, PDF, and video</h1>
                    <h1 className="font-montserrat tracking-tight text-white xl:leading-[4vw] 2xl:leading-[4vw] xl:text-5xl 2xl:text-6xl uppercase ">formats.</h1>
                </div>
                <div className="w-full flex gap-[5vw] absolute justify-center items-center xl:h-[32vw] 2xl:h-[25vw] bottom-[4vw] left-[10vw] ">
                    <div className="w-[18vw] gap-[1vw] pt-[5vw] rounded-full h-[24vw] border-2 border-[#E9DAB0] flex flex-col justify-start items-center">
                        <h1 className="xl:text-7xl 2xl:text-9xl">01</h1>
                        <h1 className="xl:text-3xl 2xl:text-4xl">choose one</h1>
                        <h1 className="xl:text-sm">Choose your template</h1>
                    </div>
                    <div>
                        <img className="xl:scale-[.7] 2xl:scale-[.8]" src={img2} alt="" srcset="" />
                    </div>
                    <div className="w-[18vw] gap-[1vw] pt-[5vw] rounded-full h-[24vw] border-2 border-[#E9DAB0] flex flex-col justify-start items-center">
                        <h1 className="xl:text-7xl 2xl:text-9xl">02</h1>
                        <h1 className="xl:text-3xl 2xl:text-4xl">CUSTOMIZE</h1>
                        <h1 className="xl:text-sm">Customize your templete as</h1>
                        <h1 className="xl:text-sm">you desire</h1>
                    </div>
                    <div>
                        <img className="xl:scale-[.7] 2xl:scale-[.8]" src={img2} alt="" srcset="" />
                    </div>
                </div>
                <div className="absolute xl:-left-4 2xl:left-0 xl:-bottom-4 2xl:bottom-0">
                    <img className="" src={rect2} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default About;

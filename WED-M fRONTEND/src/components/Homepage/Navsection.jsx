import React from "react";
import img1 from "./image 29.png";
import z1 from "./z1.png";
import z2 from "./z2.png";
import z3 from "./z3.png";
import z4 from "./z4.png";
import y1 from "./y2.jpg";
import Larrow from "./R-arrow.png"
import Rarrow from "./L-arrow.png"
import logo from "./logo.png"
import y from "./y.png"
import i from "./i.png"
import t from "./t.png"
import f from "./f.png"



const Navsection = () => {
    return (
        <div className="">
            <div className="INVITITIONS w-full h-screen bg-[#FFFCF8]">
                <div className="w-full h-[30vw] relative bg-[#EDE3D9]">
                    <div className="w-full h-[10vw] flex-col  top-[2vw] flex justify-center items-center absolute">
                        <h1 className="absolute uppercase font-montserrat text-[#9D7336] font-semibold top-[1.5vw] tracking-wider left-[24.4vw]">
                            Love Stories Shared
                        </h1>
                        <h1 className="uppercase text-6xl font-montserrat text-[#6D564E]">
                            Invitations Created with Us
                        </h1>
                        <img
                            className="absolute scale-[.7] top-[6vw]"
                            src={img1}
                            alt=""
                            srcset=""
                        />
                        <div className="flex top-[25vw] absolute justify-center items-center gap-[2vw]">
                            <div className="w-[12vw] h-[12vw] object-cover object-center bg-black">
                                <img src={z1} alt="" srcset="" />
                            </div>
                            <div className="w-[12vw] h-[12vw] object-cover object-center bg-black">
                                <img src={z2} alt="" srcset="" />
                            </div>
                            <div className="w-[12vw] h-[12vw] object-cover object-center bg-black">
                                <img src={z3} alt="" srcset="" />
                            </div>
                            <div className="w-[12vw] h-[12vw] object-cover object-center bg-black">
                                <img src={z4} alt="" srcset="" />
                            </div>
                        </div>
                        <div className="flex top-[37vw] absolute justify-center items-center gap-[2vw]">
                            <div className="w-[12vw] flex-col h-[12vw] flex gap-[.2vw] justify-center items-center">
                                <h1 className="font-montserrat font-bold text-6xl text-[#B67D2C]">
                                    50+
                                </h1>
                                <h1 className="font-raleway tracking-widest text-[#4C5637] text-base">
                                    TEMPLATES
                                </h1>
                            </div>
                            <div className="w-[12vw] flex-col h-[12vw] flex gap-[.2vw] justify-center items-center">
                                <h1 className="font-montserrat font-bold text-6xl text-[#B67D2C]">
                                    529
                                </h1>
                                <h1 className="font-raleway tracking-widest text-[#4C5637] text-base">
                                    Happy Couples
                                </h1>
                            </div>
                            <div className="w-[12vw] flex-col h-[12vw] flex gap-[.2vw] justify-center items-center">
                                <h1 className="font-montserrat font-bold text-6xl text-[#B67D2C]">
                                    100%
                                </h1>
                                <h1 className="font-raleway tracking-widest text-[#4C5637] text-base">
                                    SATISFACTION
                                </h1>
                            </div>
                            <div className="w-[12vw] flex-col h-[12vw] flex gap-[.2vw] justify-center items-center">
                                <h1 className="font-montserrat font-bold text-6xl text-[#B67D2C]">
                                    49+
                                </h1>
                                <h1 className="font-raleway tracking-widest text-[#4C5637] text-base">
                                    VENDORS
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="BENIFITS w-full h-screen bg-[#FFFCF8]">
                <div className="VENDOR w-full h-[20vw] object-fill overflow-hidden object-center bg-black rounded-b-full">
                    <img
                        className="object-cover scale-[] opacity-40"
                        src={y1}
                        alt=""
                        srcset=""
                    />
                </div>
                <div className="flex justify-center font-bold tracking-widest font-raleway items-center w-full h-[8vw] text-[#9D7336]">
                    <h1>Key Benefits</h1>
                </div>
                <div className="w-full h-[20vw] flex gap-[2vw] justify-center items-center">
                    <div className="w-[14vw] relative gap-[1vw] h-[18vw] font-montserrat text-[#B16046] flex-col rounded-full bg-[#F8E3C399] flex justify-center items-center">
                        <h1 className="font-semibold text-[1vw]">Showcase Your Talent</h1>
                        <h1 className="px-[1vw] align-middle text-center">
                            Share your unique style and designs with a broad audience of
                            couples looking for custom wedding invitations.
                        </h1>
                        <div className="absolute text-8xl -top-[1vw] -left-[1vw] font-bold text-[#D3A38C]">
                            <h1>01</h1>
                        </div>
                    </div>
                    <div className="w-[14vw] relative gap-[1vw] h-[18vw] font-montserrat text-[#B16046] flex-col rounded-full bg-[#F8E3C399] flex justify-center items-center">
                        <h1 className="font-semibold text-[1vw]">Showcase Your Talent</h1>
                        <h1 className="px-[1vw] align-middle text-center">
                            Share your unique style and designs with a broad audience of
                            couples looking for custom wedding invitations.
                        </h1>
                        <div className="absolute text-8xl -top-[1vw] -left-[1vw] font-bold text-[#D3A38C]">
                            <h1>02</h1>
                        </div>
                    </div>{" "}
                    <div className="w-[14vw] relative gap-[1vw] h-[18vw] font-montserrat text-[#B16046] flex-col rounded-full bg-[#F8E3C399] flex justify-center items-center">
                        <h1 className="font-semibold text-[1vw]">Showcase Your Talent</h1>
                        <h1 className="px-[1vw] align-middle text-center">
                            Share your unique style and designs with a broad audience of
                            couples looking for custom wedding invitations.
                        </h1>
                        <div className="absolute text-8xl -top-[1vw] -left-[1vw] font-bold text-[#D3A38C]">
                            <h1>03</h1>
                        </div>
                    </div>{" "}
                    <div className="w-[14vw] relative gap-[1vw] h-[18vw] font-montserrat text-[#B16046] flex-col rounded-full bg-[#F8E3C399] flex justify-center items-center">
                        <h1 className="font-semibold text-[1vw]">Showcase Your Talent</h1>
                        <h1 className="px-[1vw] align-middle text-center">
                            Share your unique style and designs with a broad audience of
                            couples looking for custom wedding invitations.
                        </h1>
                        <div className="absolute text-8xl -top-[1vw] -left-[1vw] font-bold text-[#D3A38C]">
                            <h1>04</h1>
                        </div>
                    </div>{" "}
                    <div className="w-[14vw] relative gap-[1vw] h-[18vw] font-montserrat text-[#B16046] flex-col rounded-full bg-[#F8E3C399] flex justify-center items-center">
                        <h1 className="font-semibold text-[1vw]">Showcase Your Talent</h1>
                        <h1 className="px-[1vw] align-middle text-center">
                            Share your unique style and designs with a broad audience of
                            couples looking for custom wedding invitations.
                        </h1>
                        <div className="absolute text-8xl -top-[1vw] -left-[1vw] font-bold text-[#D3A38C]">
                            <h1>05</h1>
                        </div>
                    </div>{" "}
                </div>
            </div>
            <div className="FOOTER">
                <div className="w-full h-screen bg-[#FFFCF8]">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-montserrat text-5xl uppercase  text-[#6D564E] mt-[2vw]">Why Vendors Love Working with Us</h1>
                        <div className="cont w-full h-[20vw] justify-center items-center flex mt-[vw] gap-[2vw]">
                            <div className="button">
                                <button className="bg-[#FBF4EB] rounded-full w-[3vw] h-[3vw] flex justify-center items-center">
                                    <img src={Larrow} alt="" srcset="" />
                                </button>
                            </div>
                            <div className="left w-[18vw] bg-white flex px-2 flex-col gap-6 justify-center items-center h-[16vw] border-2 border-[#E9E1D9 ]">
                                <h1 className="text-center font-Cormorant text-lg px-4 font-semibold">Being a vendor here has allowed me to reach couples worldwide with my designs. It’s been a fulfilling journey!"</h1>
                                <h1 className="text-center uppercase font-Cormorant text-lg px-4 font-semibold">
                                    Emily R.,
                                    Wedding Invitation Designer
                                </h1>
                            </div>
                            <div className="Right w-[18vw] bg-white flex px-2 flex-col gap-6 justify-center items-center h-[16vw] border-2 border-[#E9E1D9 ]">
                                <h1 className="text-center font-Cormorant text-lg px-4 font-semibold">Being a vendor here has allowed me to reach couples worldwide with my designs. It’s been a fulfilling journey!"</h1>
                                <h1 className="text-center uppercase font-Cormorant text-lg px-4 font-semibold">
                                    Emily R.,
                                    Wedding Invitation Designer
                                </h1>
                            </div>
                            <div className="button">
                                <button className="bg-[#FBF4EB] rounded-full w-[3vw] h-[3vw] flex justify-center items-center">
                                    <img src={Rarrow} alt="" srcset="" />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="footer bg-[#B16046] mt-[5vw] w-full h-[20vw]">
                        <div className="cont flex font-Cormorant justify-center gap-[3vw] uppercase text-white items-center w-full h-[10vw]">
                            <button>HOME</button>
                            <button>TEMPLATE</button>
                            <button>
                                <img className="scale-[.6]" src={logo} alt="" srcset="" />
                            </button>
                            <button>VENDORS</button>
                            <button>CONTACT</button>
                        </div>
                        <div className="details w-full h-[8vw] flex flex-col text-center justify-center items-center ">
                            <h1 className="font-montserrat text-[#E9DAB0] text-2xl">For the moments that matter, make them memorable."</h1>
                            <h1 className="font-montserrat text-[#E9DAB0] ">Your wedding is a milestone filled with precious moments. Let us help you create invitations that <br /> capture the essence of your celebration and leave a lasting impression on your guests.</h1>
                            <div className="buttons flex gap-[2vw] mt-[2vw]">
                                <button>
                                    <img src={f} alt="" srcset="" />
                                </button>
                                <button>
                                    <img src={i} alt="" srcset="" />
                                </button>
                                <button>
                                    <img src={t} alt="" srcset="" />
                                </button> 
                                <button>
                                    <img src={y} alt="" srcset="" />
                                </button>

                            </div>
                            <h1 className="font-Cormorant mt-[1vw] text-[#E9DAB0]">Copyright 2024 All Rights Reserved</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navsection;

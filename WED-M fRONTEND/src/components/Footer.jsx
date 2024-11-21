import React from 'react'
import logo from "../assets/images/logo.png"
import y from "../assets/images/y.png"
import i from "../assets/images/i.png"
import t from "../assets/images/t.png"
import f from "../assets/images/f.png"
import bg2 from "../assets/images/bg-2.png"
import z1 from "../assets/images/z1.png"
import z2 from "../assets/images/z2.png"
import z3 from "../assets/images/z3.png"
import z4 from "../assets/images/z4.png"
import img from "../assets/images/image 29.png"



const Footer = () => {
    return (
        <div>
            <div className="w-full h-screen flex justify-center items-center bg-[#FFFCF8]">
                <div className='w-[80%] bg-center relative flex justify-center items-center overflow-hidden h-[65%]'>
                    <img className='object-fill absolute top-5 bg-cover scale-[1.2]' src={bg2} alt="" srcset="" />
                    <div className="w-[90%] h-[80%] absolute flex flex-col justify-center items-center bg-white bg-opacity-90">
                        <h1 className='font-montserrat text-7xl text-[#B16046]'>"Your Dream, Our Craft"</h1>
                        <p className='text-center px-[5vw] mt-[2vw] text-xl font-montserrat'>Our team is passionate about bringing your vision to life! From the first chat to the final design, we’re here to create a wedding invitation that reflects your unique style and story. Let us handle the details, so you can focus on the celebration.</p>
                        <div className='mt-[2vw] flex gap-[2vw]'>
                            <button className='w-[10vw] border-2 border-[#D6A663] h-[3vw] rounded-full '>Chat with us </button>
                            <button className='w-[10vw] border-2 border-[#D6A663] h-[3vw] rounded-full '>Chat with us </button>

                        </div>
                    </div>

                </div>
            </div>
            <div className="INVITITIONS  w-full h-screen bg-[#FFFCF8]">
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
                            src={img}
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
    )
}

export default Footer
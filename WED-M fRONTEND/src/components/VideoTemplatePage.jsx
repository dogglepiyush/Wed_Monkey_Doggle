import React from 'react';

import bg from "../assets/images/cop1.jpg";
import Ilogo from "../assets/images/I-logo.png";
import I1 from "../assets/images/I1.png";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";

import Footer from './Footer';
import NavBar from './NavBar';


const VideoTemplatePage = () => {
    return (
        <div className='w-full font-montserrat bg-[#FFFCF8]'>
            <NavBar />
            <div className='w-full relative flex justify-start overflow-hidden items-center h-[25vw]'>
                <img className='absolute -top-[1vw]' src={bg} alt="" />
                <div className='absolute'>
                    <h1 className='uppercase ml-[8vw] font-raleway font-medium tracking-tight text-[#E5CF9D] text-7xl'>
                        <span className='text-9xl'>Wedding</span> <br />
                        <span className='tracking-[1vw]'>VIDEO Cards</span>
                    </h1>
                </div>
            </div>
            <div className='w-full h-[18vw] flex flex-col items-center font-medium tracking-wider text-[#A15233]'>
                <h1 className='uppercase font-semibold text-xl font-montserrat mt-[2vw]'>Choose a theme</h1>
                <div className='flex mt-[2vw] gap-[2vw] justify-center items-center w-full h-[10vw]'>
                    {/* Theme cards */}
                    {['All', 'Hindu', 'Christian', 'Muslim', 'Marathi', 'South Indian', 'North Indian', 'Traditional'].map((theme, index) => (
                        <div key={index} className='w-[10vw] border-4 overflow-hidden border-[#EDE3D9] relative rounded-t-full h-[10vw] bg-fuchsia-200'>
                            <img className='scale-[1.3] absolute top-4' src={Ilogo} alt="" />
                            <div className='absolute bottom-0 w-full flex justify-center items-center h-[1.8vw] bg-[#EDE3D9]'>
                                <h1 className='mt-2'>{theme}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-[90%] left-[5%] absolute h-[1vw] border-b-2 border-[#E5CF9D] '></div>
            <div className='w-full px-[7vw] mt-[3vw] text-[#BBA085] h-[85vw]'>
                <div className='flex justify-between items-center'>
                    <div className='text-[#B16046] border-b-2 border-[#B16046]'>
                        <button>View Demo</button>
                    </div>
                    <div className='text-2xl text-[#B16046] font-medium'>
                        <h1>OUR MOST TRENDING TEMPLATES</h1>
                    </div>
                    <div className='flex gap-10'>
                        <button className='flex gap-5 justify-center items-center'>
                            Filter <img src={I1} alt="" />
                        </button>
                        <button className='flex gap-5 justify-center items-center'>
                            Sort <img src={I1} alt="" />
                        </button>
                    </div>
                </div>
                <div className="w-full mt-[5rem] h-[32vw] flex justify-center items-center gap-[4rem]">
                    <div className="w-[30vw] px-[4rem] h-full border border-[#E9DAB087] rounded-3xl flex flex-col justify-center items-center">
                        <div className="w-full h-[10vw] bg-red-300"></div>
                        <div className="w-full flex gap-2 h-[15vw] justify-center items-center">
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                        </div>
                        <div className='w-full px-[1rem] justify-start items-start'>
                            <h1 className='text-left'>Marathi Wedding Invitation</h1>
                        </div>
                        <div className="flex w-full h-[4rem] px-[1rem] justify-between items-center">
                            <h1 className='text-xl text-black font-medium'>₹569 <span className='text-sm ml-3'>60% off</span></h1>
                            <div className='w-[2vw] mt-2 mr-[4rem] relative h-[2vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                                <div className='absolute w-[7vw] bg-[#FFFCF8] text-sm left-[1.8rem]'>
                                    <button className='tracking-wider'>chat with us </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30vw] px-[4rem] h-full border border-[#E9DAB087] rounded-3xl flex flex-col justify-center items-center">
                        <div className="w-full h-[10vw] bg-red-300"></div>
                        <div className="w-full flex gap-2 h-[15vw] justify-center items-center">
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                        </div>
                        <div className='w-full px-[1rem] justify-start items-start'>
                            <h1 className='text-left'>Marathi Wedding Invitation</h1>
                        </div>
                        <div className="flex w-full h-[4rem] px-[1rem] justify-between items-center">
                            <h1 className='text-xl text-black font-medium'>₹569 <span className='text-sm ml-3'>60% off</span></h1>
                            <div className='w-[2vw] mt-2 mr-[4rem] relative h-[2vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                                <div className='absolute w-[7vw] bg-[#FFFCF8] text-sm left-[1.8rem]'>
                                    <button className='tracking-wider'>chat with us </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-[4rem] h-[32vw] flex justify-center items-center gap-[4rem]">
                    <div className="w-[30vw] px-[4rem] h-full border border-[#E9DAB087] rounded-3xl flex flex-col justify-center items-center">
                        <div className="w-full h-[10vw] bg-red-300"></div>
                        <div className="w-full flex gap-2 h-[15vw] justify-center items-center">
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                        </div>
                        <div className='w-full px-[1rem] justify-start items-start'>
                            <h1 className='text-left'>Marathi Wedding Invitation</h1>
                        </div>
                        <div className="flex w-full h-[4rem] px-[1rem] justify-between items-center">
                            <h1 className='text-xl text-black font-medium'>₹569 <span className='text-sm ml-3'>60% off</span></h1>
                            <div className='w-[2vw] mt-2 mr-[4rem] relative h-[2vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                                <div className='absolute w-[7vw] bg-[#FFFCF8] text-sm left-[1.8rem]'>
                                    <button className='tracking-wider'>chat with us </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30vw] px-[4rem] h-full border border-[#E9DAB087] rounded-3xl flex flex-col justify-center items-center">
                        <div className="w-full h-[10vw] bg-red-300"></div>
                        <div className="w-full flex gap-2 h-[15vw] justify-center items-center">
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                            <div className=" w-[33%] h-[10vw] bg-green-400"></div>
                        </div>
                        <div className='w-full px-[1rem] justify-start items-start'>
                            <h1 className='text-left'>Marathi Wedding Invitation</h1>
                        </div>
                        <div className="flex w-full h-[4rem] px-[1rem] justify-between items-center">
                            <h1 className='text-xl text-black font-medium'>₹569 <span className='text-sm ml-3'>60% off</span></h1>
                            <div className='w-[2vw] mt-2 mr-[4rem] relative h-[2vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                                <div className='absolute w-[7vw] bg-[#FFFCF8] text-sm left-[1.8rem]'>
                                    <button className='tracking-wider'>chat with us </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex gap-5 mt-[4vw] justify-center items-center'>
                    <div className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full border border-[#D6A663]">
                        <h1>1</h1>
                    </div>
                    <div className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full border border-[#D6A663]">
                        <h1>2</h1>
                    </div>
                    <div className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full border text-white bg-[#D6A663] border-[#D6A663]">
                        <h1>3</h1>
                    </div>
                    <div className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full border border-[#D6A663]">
                        <h1>4</h1>
                    </div>
                    <div className="w-[3vw] h-[3vw] flex justify-center items-center rounded-full border border-[#D6A663]">
                        <h1>5</h1>
                    </div>
                </div>
            </div>
            <div className="w-full h-[30vw] bg-[#D3A38C21]">
                <div className="flex justify-center font-bold tracking-widest font-raleway items-center w-full h-[8vw] text-[#9D7336]">
                    <h1 className='uppercase'>Key Benefits of using WEDmonkey</h1>
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

            <Footer />
        </div>
    );
};

export default VideoTemplatePage;

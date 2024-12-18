import React from 'react'
import NavBar from './NavBar'
import bg from "../assets/images/cop1.jpg";
import rect2 from "./VideoCards/Rectangle 73.png"
import rect from "./VideoCards/Rectangle 72.png"
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import Larrow from "../assets/images/R-arrow.png"
import Rarrow from "../assets/images/L-arrow.png"
import z1 from "../assets/images/z1.png"
import z2 from "../assets/images/z2.png"
import z3 from "../assets/images/z3.png"
import z4 from "../assets/images/z4.png"
import Footer from './Footer';

const VideoPage = () => {
    return (
        <div className='bg-[#FFFCF8] font-montserrat'>
            <NavBar />
            <div className='w-full relative flex justify-start overflow-hidden items-center h-[25vw]'>
                <img className='absolute -top-[1vw]' src={bg} alt="" />
                <div className='absolute'>
                    <h1 className='uppercase ml-[8vw] font-raleway font-medium tracking-tight text-[#E5CF9D] text-7xl'>
                        <span className='text-9xl'>Wedding</span> <br />
                        <span className='tracking-[1.1vw]'>Video Cards</span>
                    </h1>
                </div>
            </div>
            <div className="w-full justify-center mt-[3.5vw] flex flex-col items-center">
                <h1 className='text-[#B16046] uppercase text-5xl font-semibold'>"Professionally Designed Video Invitations”</h1>
                <h1 className='text-3xl font-medium font-raleway text-black mt-4'>"Create Yours in Just a Few Clicks and Share Your Love Story !"</h1>
                <div className=" flex gap-[8vw] mt-[2.5vw] mr-[4vw]">
                    <div>
                        <div className='w-[3vw] relative h-[3vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                            <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                            <div className='absolute w-[18vw] bg-[#FFFCF8] left-10'>
                                <button className='tracking-wider'>chat with us </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='w-[3vw] relative h-[3vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                            <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                            <div className='absolute w-[18vw] bg-[#FFFCF8] left-10'>
                                <button className='tracking-wider'>Start Designing</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[35vw] flex justify-center items-center">
                <div className='w-[60%] h-[80%] bg-[#D9D9D9]'>
                </div>
            </div>
            <div className="text text-[#B16046] h-[8vw] flex justify-center items-center font-raleway text-2xl font-medium px-[10vw]">
                <h1 className='text-center'>Our team is passionate about bringing your vision to life! From the first chat to the final design, we’re here to create a wedding invitation that reflects your unique style and story. Let us handle the details, so you can focus on the celebration.</h1>
            </div>
            <div className="secCont text-white mt-10 font-montserrat uppercase relative overflow-hidden w-full h-screen bg-[#D3A38C]">
                <div className="absolute 2xl:-right-24 2xl:-top-16 xl:-right-[15vw] xl:-top-24">
                    <img className="scale-[.8]" src={rect} alt="" srcset="" />
                </div>
                <div className="w-[70vw] absolute h-[20vw] xl:top-[7vw] 2xl:top-[5vw] left-[10vw]">
                    <h1 className="uppercase font-raleway text-2xl pl-2 text-[#F5E7BE]">How it works</h1>
                    <h1 className="font-montserrat tracking-tight text-white xl:leading-[4vw] 2xl:leading-[4vw] xl:text-5xl 2xl:text-6xl uppercase ">3 simple steps to order</h1>
                </div>
                <div className="w-full flex gap-[5vw]  absolute justify-center items-center xl:h-[32vw] 2xl:h-[25vw] bottom-[4vw] left-[vw] ">
                    <div className="w-[18vw] gap-[1vw] pt-[5vw] rounded-full h-[24vw] border-2 border-[#E9DAB0] flex flex-col justify-start items-center">
                        <h1 className="xl:text-7xl 2xl:text-9xl">01</h1>
                        <h1 className="xl:text-3xl 2xl:text-4xl text-center">Contact us on Whatsapp</h1>
                    </div>
                    <div className="w-[18vw] gap-[1vw] pt-[5vw] rounded-full h-[24vw] border-2 border-[#E9DAB0] flex flex-col justify-start items-center">
                        <h1 className="xl:text-7xl 2xl:text-9xl">02</h1>
                        <h1 className="xl:text-3xl 2xl:text-4xl text-center">Select the video invite</h1>
                    </div>
                    <div className="w-[18vw] gap-[1vw] pt-[5vw] rounded-full h-[24vw] border-2 border-[#E9DAB0] flex flex-col justify-start items-center">
                        <h1 className="xl:text-7xl 2xl:text-9xl">03</h1>
                        <h1 className="xl:text-3xl 2xl:text-4xl text-center">share us all the details</h1>
                    </div>
                </div>
                <div className="absolute xl:-left-4 2xl:left-0 xl:-bottom-4 2xl:bottom-0">
                    <img className="" src={rect2} alt="" srcset="" />
                </div>
            </div>
            <div className='w-full px-[7vw] mt-[7vw] text-[#BBA085] h-[35vw]'>
                <div className='flex w-full justify-center items-center'>
                    <h1 className='uppercase text-3xl tracking-widest text-[#B16046] font-regular'>Invitations Created with Us   <span className='text-base lowercase ml-[.5vw]'>(Love Stories Shared)</span> </h1>
                </div>
                <div className='flex w-full gap-[5vw] justify-center items-center h-[25vw]'>
                    {/* Image 1 */}
                    <div className='relative flex w-[15vw] border-2 border-[#E5CF9D] mt-[6vw] h-[20vw] overflow-hidden group'>
                        <img src={p1} alt="Punjabi" className="object-cover group-hover:opacity-40 h-[95%] scale-[.85] w-full" />

                        {/* Hidden by default, shown on hover */}
                        <div className="absolute inset-0 bg-[#EDE3D9cc] text-[#B16046] flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <h1 className="text-lg font-semibold">Punjabi</h1>
                            <p className="text-sm">North Indian</p>
                            <p className="text-sm">30% Off</p>
                            <p className="text-lg font-bold">₹699</p>
                            <button className="mt-2 py-1 px-3 bg-[#BBA085] text-white rounded-lg">View</button>
                        </div>
                    </div>


                    {/* Image 2 */}
                    <div className='relative flex w-[15vw] border-2 border-[#E5CF9D] mt-[6vw] h-[20vw] overflow-hidden group'>
                        <img src={p2} alt="Punjabi" className="object-cover group-hover:opacity-40 h-[95%] scale-[.85] w-full" />

                        {/* Hidden by default, shown on hover */}
                        <div className="absolute inset-0 bg-[#EDE3D9cc] text-[#B16046] flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <h1 className="text-lg font-semibold">Punjabi</h1>
                            <p className="text-sm">North Indian</p>
                            <p className="text-sm">30% Off</p>
                            <p className="text-lg font-bold">₹699</p>
                            <button className="mt-2 py-1 px-3 bg-[#BBA085] text-white rounded-lg">View</button>
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className='relative flex w-[15vw] border-2 border-[#E5CF9D] mt-[6vw] h-[20vw] overflow-hidden group'>
                        <img src={p3} alt="Punjabi" className="object-cover group-hover:opacity-40 h-[95%] scale-[.85] w-full" />

                        {/* Hidden by default, shown on hover */}
                        <div className="absolute inset-0 bg-[#EDE3D9cc] text-[#B16046] flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <h1 className="text-lg font-semibold">Punjabi</h1>
                            <p className="text-sm">North Indian</p>
                            <p className="text-sm">30% Off</p>
                            <p className="text-lg font-bold">₹699</p>
                            <button className="mt-2 py-1 px-3 bg-[#BBA085] text-white rounded-lg">View</button>
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className='relative flex w-[15vw] border-2 border-[#E5CF9D] mt-[6vw] h-[20vw] overflow-hidden group'>
                        <img src={p4} alt="Punjabi" className="object-cover group-hover:opacity-40 h-[95%] scale-[.85] w-full" />

                        {/* Hidden by default, shown on hover */}
                        <div className="absolute inset-0 bg-[#EDE3D9cc] text-[#B16046] flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                            <h1 className="text-lg font-semibold">Punjabi</h1>
                            <p className="text-sm">North Indian</p>
                            <p className="text-sm">30% Off</p>
                            <p className="text-lg font-bold">₹699</p>
                            <button className="mt-2 py-1 px-3 bg-[#BBA085] text-white rounded-lg">View</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full h-[30vw] relative flex justify-center items-center bg-[#EDE3D9]'>
                <div className="flex flex-col absolute top-10 justify-center items-center">
                    <h1 className="font-montserrat text-5xl uppercase font-regular text-[#6D564E] mt-[2vw]">Our Happy Clients</h1>
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
                {/* <div className='w-full h-[10vw]  flex-col  top-[2vw] flex justify-center items-center absolute'>
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
                    <div className="flex top-[35vw] absolute justify-center items-center gap-[2vw]">
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
                </div> */}
            </div>
            <div className="w-full h-screen bg-[#FFFCF8]">
                <div className="w-full h-[10vw] flex justify-center items-center">
                    <h1 className='text-[#B16046] text-5xl uppercase'>video templates</h1>
                </div>
                <div className="w-full h-[32vw] flex justify-center items-center gap-[4rem]">
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
                <div className="w-full flex justify-center items-center h-[8rem]">
                    <div className='w-[3vw] mt-2 mr-[4rem] relative h-[3vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                        <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                        <div className='absolute w-[7vw] bg-[#FFFCF8] text-lg left-[2.8rem]'>
                            <button className='tracking-wider'>chat with us </button>
                        </div>
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

    )
}

export default VideoPage
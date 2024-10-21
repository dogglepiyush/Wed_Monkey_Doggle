import React, { useState } from 'react'; // Import useState
import NavBar from './NavBar';
import img1 from '../assets/images/image 59.png';
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import Footer from './Footer';
import dance from '../assets/images/Rectangle 600.png';

const DetailPage = () => {
    const [showPopup, setShowPopup] = useState(false); // State to handle popup

    const togglePopup = () => {
        setShowPopup(!showPopup);  // Toggle popup visibility
    };

    return (
        <div className='bg-[#FFFCF8] font-montserrat'>
            {/* Full-Screen Popup */}
            {showPopup && (
                <div className="fixed top-10 left-0 w-full h-full bg-transparent z-50 flex justify-center items-center">
                    <div className="w-[40vw] relative h-[30vw] bg-[#FFFCF8] p-8 rounded-3xl flex flex-col justify-center items-center drop-shadow-2xl">
                        <img className='scale-[.8]' src={dance} alt="Dance" />
                        <h1 className="text-2xl mb-6 text-center mt-8">Do you wanna choose from <br /> existing card or create a new one?</h1>
                        <div className="flex w-[30vw] left-10 mt-[20vw] justify-center gap-[8vw] absolute">
                            <div className='w-[3vw] relative h-[3vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                                <div className='absolute w-[18vw] bg-[#FFFCF8] left-10'>
                                    <button onClick={togglePopup} className='tracking-wider'>Create new</button>
                                </div>
                            </div>
                            <div className='w-[3vw] relative h-[3vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                                <div className='absolute w-[8vw] bg-[#FFFCF8] left-10'>
                                    <button onClick={togglePopup} className='tracking-wider'>Choose existing</button>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <button onClick={togglePopup} className='tracking-wider border-2 px-8 py-2 rounded-full border-[#A15233] absolute top-10 right-[3vw] text-[#A15233]'>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-full h-full bg-[#FFFCF8]">
                <NavBar />
                <div className='w-full h-[41vw] text-[#B16046] flex justify-center items-center'>
                    <div className='w-[60vw] py-2 px-[4vw] flex flex-col mt- h-[39vw] border shadow-xl border-[#E9DAB061] rounded-3xl'>
                        <div className=''>
                            <div className="flex mt-[2vw] flex-col justify-center items-center">
                                <h1 className='text-2xl text-center font-medium tracking-widest'>"A Divine Union: Join Us Under Sacred Blessings"</h1>
                                <h1 className='mt-2 font-medium tracking-widest'>— Elegant Hindu Wedding Invitation Template —</h1>
                                <h1 className='mt-2 font-medium text-blue-300 tracking-widest'>*** Watermark will be removed after payment ***</h1>
                            </div>
                            <h1 className='font-semibold text-black ml-[8vw] mt-2 text-xl'>₹569 <span className='font-medium text-sm ml-[.5vw]'>60% off</span></h1>
                            <div className='border-b-2 mt-[1vw] border-[#E9DAB061]'></div>
                        </div>
                        <div className="cont flex h-[30vw] mt-[3vw] gap-[2vw] justify-start items-center">
                            <div className="left w-[40%] flex flex-col h-[27vw]">
                                <div className="imgcont w-[18vw] h-[60%] flex justify-end">
                                    <img className='scale-[]' src={img1} alt="" srcset="" />
                                </div>
                                <div className="flex px-[1vw] mt-[2vw] gap-[1vw] justify-end items-center w-full h-[40%]">
                                    <div className="h-full w-[4vw]">
                                        <img src={img1} alt="" srcset="" />
                                    </div>
                                    <div className="h-full w-[4vw]">
                                        <img src={img1} alt="" srcset="" />
                                    </div>
                                    <div className="h-full w-[4vw]">
                                        <img src={img1} alt="" srcset="" />
                                    </div>
                                </div>

                            </div>
                            <div className="Right w-[40%] h-[27vw]">
                                <div className="flex text-black justify-between px-2 items-center">
                                    <h1 className='tracking-wide'>Confirm your deatils</h1>
                                    <div className='flex gap-[1vw]'>
                                        <button className='underline'>Preview</button>
                                        <button className='underline'>Edit</button>
                                    </div>
                                </div>
                                <div className="w-full px-[3vw] flex flex-col h-[10vw] mt-5 bg-[#F9F3ED]">
                                    <div className="name mt-[1vw] text-base flex gap-[1vw]">
                                        <h1>Pallavi</h1>
                                        <h1>❤️</h1>
                                        <h1>Nanjunda</h1>
                                    </div>
                                    <div className="mt-[.8vw]">
                                        <h1>Saturday 9th march 2025</h1>
                                    </div>
                                    <div className="mt-[.8vw]">
                                        <h1>3:30pm</h1>
                                    </div>
                                    <div className="mt-[.8vw]">
                                        <h1>Vihar palace, Bangalore </h1>
                                    </div>
                                </div>
                                <div className='w-[3vw] relative h-[3vw] mt-[2vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                                    <div className='absolute w-[18vw] bg-[#FFFCF8] left-10'>
                                        <button onClick={togglePopup} className='tracking-wider'>Proceed to Payment</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' w-full flex mt-[2vw] justify-center items-center '>
                    <h1 className='text-xl italic tracking-widest text-[#B16046] text-center'>Create your invitation in minutes, and share the joy of your sacred union <br /> with those who matter most.</h1>
                </div>
                <div className='w-full px-[7vw] mt-[7vw] text-[#BBA085] h-[30vw]'>
                    <div className='flex w-full justify-center items-center'>
                        <h1 className='uppercase text-3xl tracking-widest text-[#B16046] font-regular'>Similar templates  <span className='text-base lowercase ml-[.5vw]'>(See all)</span> </h1>
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
                <Footer />
            </div>
        </div>
    )
}

export default DetailPage;

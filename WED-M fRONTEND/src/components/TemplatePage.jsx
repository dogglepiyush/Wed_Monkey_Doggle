import React, { useState } from 'react'; // Import useState
import NavBar from './NavBar';
import img1 from '../assets/images/image 59.png';
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import Footer from './Footer';
import dance from '../assets/images/Rectangle 600.png';

const TemplatePage = () => {
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
            <div className="w-full h-screen">
                <NavBar />
                <div className='SCREEN_1 flex w-full h-[37vw] px-[8vw] pt-[1vw] justify-center items-center gap-[2vw]'>
                    <div className="left w-[50%] flex justify-center items-center h-full">
                        <div className="w-full h-full flex justify-center items-center">
                            <img className='scale-[.75] ml-[8vw]' src={img1} alt="Invitation Template" />
                        </div>
                    </div>
                    <div className="Right w-[50%] pr-[8vw] py-[3vw] text-[#B16046] h-full">
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl text-center font-medium tracking-widest'>"A Divine Union: Join Us Under Sacred Blessings"</h1>
                            <h1 className='mt-2 font-medium tracking-widest'>— Elegant Hindu Wedding Invitation Template —</h1>
                        </div>
                        <div>
                            <div className="text-black mt-[3vw]">
                                <h1 className='font-semibold text-xl'>₹569 <span className='font-medium text-sm ml-[.5vw]'>60% off</span></h1>
                                <div className='tracking-wider mt-[2vw]'>
                                    <p>Celebrate a love as timeless as tradition with this beautifully crafted Hindu wedding invitation template.</p>
                                    <p className='mt-4'>Designed with rich, vibrant colors and adorned with intricate mandala patterns and sacred symbols, this template invites your guests to witness the beginning of a new chapter.</p>
                                    <p className='mt-4'>Personalize every element to reflect your story and share the details of your special day. With space for ceremonial details and traditional blessings, this template gracefully combines the warmth of cultural heritage with modern elegance.</p>
                                </div>
                                <div className='mt-[2vw]'>
                                    <div className='w-[3vw] relative h-[3vw] border-2 border-[#A15233] rounded-full flex justify-center items-center'>
                                        <div className="w-[10px] h-[10px] rounded-full bg-[#A15233] border-2 border-[#A15233]"></div>
                                        <div className='absolute w-[18vw] bg-[#FFFCF8] left-10'>
                                            <button onClick={togglePopup} className='tracking-wider'>Customize this template</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-center items-center '>
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

export default TemplatePage;

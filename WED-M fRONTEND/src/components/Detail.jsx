import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import TimePicker from 'react-time-picker';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css'; // Make sure to import Clock's CSS
import img1 from '../assets/images/image 59.png';
import img2 from '../assets/images/Rectangle 568.png';
import img3 from '../assets/images/Rectangle 567.png';
import img4 from '../assets/images/heart.png';
import Footer from './Footer';



const Detail = () => {
    const [weddingDate, setWeddingDate] = useState(new Date());
    const [weddingTime, setWeddingTime] = useState('10:00'); // TimePicker value (string)
    const [clockTime, setClockTime] = useState(new Date()); // Clock value (Date object)

    // Sync TimePicker and Clock whenever weddingTime changes
    useEffect(() => {
        const [hours, minutes] = weddingTime.split(':').map(Number);
        const newClockTime = new Date(clockTime);
        newClockTime.setHours(hours, minutes);
        setClockTime(newClockTime);
    }, [weddingTime]);

    // Handle Clock change and update TimePicker value
    const handleClockChange = (value) => {
        setClockTime(value);
        const hours = value.getHours();
        const minutes = value.getMinutes();
        setWeddingTime(`${hours}:${minutes < 10 ? '0' + minutes : minutes}`);
    };

    return (
        <div>
            <div className='font-montserrat text-[#B16046] bg-[#FFFCF8]'>
                <NavBar />
                <div className="font-montserrat flex-col text-center py-[2vw] flex justify-center items-center">
                    <h1 className='text-xl font-regular uppercase tracking-wider'>selected template</h1>
                    <button className='underline mt-2'>Back</button>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='w-[40vw] h-[10vw] flex justify-center items-center'>
                        <div className="left w-[40%]">
                            <img className='scale-[.5]' src={img1} alt="" srcset="" />
                        </div>
                        <div className="right  py-5 w-[70%] flex flex-col h-full">
                            <h1 className='font-medium'>"A Divine Union: Join Us Under Sacred Blessings"</h1>
                            <h1 className='mt-4 ml-4 text-sm'>— Elegant Hindu Wedding Invitation Template —</h1>
                            <div className='flex gap-[2vw] mt-8'>
                                <button className='underline text-[#D6A663] text-base'>Hindu</button>
                                <button className='underline text-[#D6A663] text-base'>Traditional</button>
                            </div>
                            <h1 className='text-black text-xl font-semibold mt-2'>₹569 <span className='text-base font-normal'>60% off</span></h1>
                        </div>
                    </div>
                </div>
                <div className='w-full flex mt-20 justify-center items-center'>
                    <div className='w-full flex px-[14vw] h-[135vw] '>
                        <div className="left ml-[5vw] w-[22%] gap-[2vw] border-2 rounded-l-3xl border-[#E9DAB061] px-8 py-6 flex flex-col bg-[#F8E3C33B] h-[50vw]">
                            <div className="w-full flex flex-col justify-center items-center rounded-3xl shadow-2xl h-[10vw] bg-[#F8E3C370]">
                                <h1 className='text-6xl text-[#D6A66399] font-bold'>01</h1>
                                <h1 className='text-black mt-4 font-medium'>Couple Names</h1>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center rounded-3xl shadow-2xl h-[10vw] bg-[#F8E3C370]">
                                <h1 className='text-6xl text-[#D6A66399] font-bold'>02</h1>
                                <h1 className='text-black mt-4 font-medium'>Parents Name</h1>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center rounded-3xl shadow-2xl h-[10vw] bg-[#F8E3C370]">
                                <h1 className='text-6xl text-[#D6A66399] font-bold'>03</h1>
                                <h1 className='text-black mt-4 font-medium'>Dates & Time</h1>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center rounded-3xl shadow-2xl h-[10vw] bg-[#F8E3C370]">
                                <h1 className='text-6xl text-[#D6A66399] font-bold'>04</h1>
                                <h1 className='text-black mt-4 font-medium'>Couple Names</h1>
                            </div>
                        </div>
                        <div className="right w-[70%] px-[4vw] py-[4vw] border-2 items-center  flex flex-col rounded-r-3xl border-[#E9DAB061] bg-[#FFFCF8] h-full">
                            <h1 className='text-xl uppercase tracking-widest'>Add Details</h1>
                            <div className='w-full flex rounded-3xl px-[4vw] mt-[4vw] h-[26vw] bg-[#EDE3D95E]'>
                                <div className="w-[40%] relative flex-col h-full flex justify-center items-center">
                                    <img className='scale-[.8] ' src={img3} alt="" srcset="" />
                                    <h1 className='bg-[#B16046] absolute top-[10vw] rounded-3xl py-[1vw] px-[5vw] text-[#E9DAB0]'>Bride </h1>
                                    <input className='bg-[#EDE3D966] rounded-xl mt-[5vw] py-3 pl-4 w-[13vw]' placeholder='First Name ' type="text" />
                                    <input className='bg-[#EDE3D966] rounded-xl mt-5 py-3 pl-4 w-[13vw]' placeholder='Last Name ' type="text" />
                                </div>
                                <div className="w-[20%] flex items-center justify-center h-full">
                                    {/* <img src={img4} alt="" /> */}
                                </div>
                                <div className="w-[40%] relative flex-col h-full flex justify-center items-center">
                                    <img className='scale-[.8] ' src={img2} alt="" srcset="" />
                                    <h1 className='bg-[#B16046] absolute top-[10vw] rounded-3xl py-[1vw] px-[5vw] text-[#E9DAB0]'>Groom </h1>
                                    <input className='bg-[#EDE3D966] rounded-xl mt-[3vw] py-3 pl-4 w-[13vw]' placeholder='First Name ' type="text" />
                                    <input className='bg-[#EDE3D966] rounded-xl mt-5 py-3 pl-4 w-[13vw]' placeholder='Last Name ' type="text" />
                                </div>
                            </div>
                            <div className='w-full flex rounded-3xl px-[4vw] mt-[4vw] h-[26vw] bg-[#EDE3D95E]'>
                                <div className="w-[40%] relative flex-col h-full flex justify-center items-center">
                                    <img className='scale-[.8] ' src={img3} alt="" srcset="" />
                                    <h1 className='bg-[#B16046] absolute top-[10vw] rounded-3xl py-[1vw] px-[5vw] text-[#E9DAB0]'>Bride </h1>
                                    <input className='bg-[#EDE3D966] rounded-xl mt-[5vw] py-3 pl-4 w-[13vw]' placeholder='Fathers Name ' type="text" />
                                    <input className='bg-[#EDE3D966] rounded-xl mt-5 py-3 pl-4 w-[13vw]' placeholder='Mothers Name ' type="text" />
                                </div>
                                <div className="w-[20%] flex items-center justify-center h-full">
                                    {/* <img src={img4} alt="" /> */}
                                </div>
                                <div className="w-[40%] relative flex-col h-full flex justify-center items-center">
                                    <img className='scale-[.8] ' src={img2} alt="" srcset="" />
                                    <h1 className='bg-[#B16046] absolute top-[10vw] rounded-3xl py-[1vw] px-[5vw] text-[#E9DAB0]'>Groom </h1>
                                    <input className='bg-[#EDE3D966] rounded-xl mt-[3vw] py-3 pl-4 w-[13vw]' placeholder='Fathers Name ' type="text" />
                                    <input className='bg-[#EDE3D966] rounded-xl mt-5 py-3 pl-4 w-[13vw]' placeholder='Mothers Name ' type="text" />
                                </div>
                            </div>
                            <div className='w-full flex flex-col rounded-3xl px-[4vw] mt-[4vw] h-[26vw] bg-[#EDE3D95E]'>
                                <div className='justify-center items-center flex flex-col w-full h-[6vw]'>
                                    <h1 className='text-black uppercase tracking-wider'>Wedding Date and Time</h1>
                                </div>

                                <div className='flex gap-[4vw] justify-center'>
                                    {/* Inline DatePicker */}
                                    <div className="w-[30%] flex flex-col items-center">
                                        <label className="block mb-[2vw] text-sm">Select Date:</label>
                                        <DatePicker
                                            selected={weddingDate}
                                            onChange={(date) => setWeddingDate(date)}
                                            dateFormat="MMMM d, yyyy"
                                            inline // This will keep the calendar constantly visible
                                            className="bg-[#EDE3D966] rounded-xl py-3 pl-4 w-[13vw] text-black"
                                        />
                                    </div>

                                    {/* Inline TimePicker */}
                                    <div className="w-[30%] h-full flex flex-col items-center ml-8">
                                        <label className="block mb-2 text-sm">Select Time:</label>

                                        {/* Always Visible Clock */}
                                        <Clock
                                            value={clockTime}
                                            onChange={handleClockChange}
                                            className="bg-[#EDE3D966] mt-[2vw] rounded-xl w-[15vw] h-[15vw]"
                                        />

                                        {/* Time Picker */}
                                        <TimePicker
                                            onChange={setWeddingTime} // Updates time string
                                            value={weddingTime}
                                            className="mt-4 bg-[#EDE3D966] rounded-xl py-3 pl-4 w-[13vw] text-black"
                                            disableClock={true} // Disabling the pop-up clock for TimePicker
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-center items-center rounded-3xl px-[4vw] mt-[4vw] h-[26vw] bg-[#EDE3D95E]'>
                                <div className="w-[full] flex-col h-full flex justify-center items-center">
                                    <h1 className='text-black uppercase tracking-wider'>Event details</h1>
                                    <input className='bg-[#EDE3D966] rounded-xl mt-[3vw] py-3 pl-4 w-[18vw]' placeholder='Event ' type="text" />
                                    <input className='bg-[#EDE3D966] rounded-xl mt-5 py-3 pl-4 w-[18vw]' placeholder='Date & Time' type="text" />
                                    <input className='bg-[#EDE3D966] rounded-xl mt-5 py-3 pl-4 w-[18vw]' placeholder='Venue' type="text" />

                                </div>
                            </div>
                            <button className='py-3 px-10 mt-[3vw] text-white rounded-full bg-[#B16046]'>Confirm Details</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Detail
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



const VideoTemplateDetail = () => {
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
                <Footer />
            </div>
        </div>
    )
}

export default VideoTemplateDetail
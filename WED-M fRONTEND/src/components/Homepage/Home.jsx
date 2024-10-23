import React from 'react'
import img1 from "./image 11.png"
import img2 from "./vector.png"
import img3 from "./Group.png"
import img4 from "./vector2.png"
import img5 from "./vector3.png"
import img6 from "./Line 58.png"
import img7 from "./vector1.png"

const Home = () => {
    return (
        <div className="lg:x-full xl:w-full object-cover xl:h-screen 2xl:h-screen">
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('./img1.jpg')` }}>
                <div className='navbar absolute flex flex-col gap-5 rounded-b-full items-center w-full 2xl:h-[8vw] lg:h-[10vw] bg-white bg-opacity-80'>
                    <div className="upper relative pt-[2vw] w-full px-[5vw] flex justify-center items-center">
                        <img className='w-[12vw] scale-[1.44]' src={img1} alt="" srcset="" />
                        <div className="icon absolute right-[6vw] flex justify-center items-center gap-[2vw]">
                            <button>
                                <img className='w-[1vw]' src={img2} alt="" srcset="" />
                            </button>
                            <img className='w-[.2vw]' src={img6} alt="" srcset="" />
                            <button>
                                <img className='w-[1vw]' src={img3} alt="" srcset="" />
                            </button>
                            <button>
                                <img className='w-[1vw]' src={img4} alt="" srcset="" />
                            </button>
                            <button>
                                <img className='w-[1vw]' src={img5} alt="" srcset="" />
                            </button>
                            <button>
                                <img className='w-[1vw]' src={img7} alt="" srcset="" />
                            </button>
                        </div>
                    </div>
                    <div className="lower uppercase flex gap-[3vw] text-[#A15233] font-semibold text-base font-montserrat">
                        <a href="/">Home</a>
                        <a href="/PDF-T">TEMpLATES</a>
                        <a href="">how it works</a>
                        <a href="">JOIN AS A VENDOR</a>
                        <a href="">Contact us</a>
                    </div>
                </div>
                <div className='detail mt-[12vw] font-montserrat uppercase  absolute top-[12vw] left-[5vw] 2xl:w-[70vw] h-[20vw]'>
                    <h1 className='text-4xl text-[#B16046] xl:leading-[3vw] font-semibold '>The Ultimate Wedding Card Designer</h1>
                    <h1 className='text-7xl text-white font-bold italic xl:leading-[5vw]'>Create Your Dream </h1>
                    <h1 className='text-7xl text-white font-bold italic'>Wedding Card in Minutes.</h1>
                    <div className=''>
                        <div className='absolute flex gap-[3vw]'>
                            <button className='w-[12vw] rounded-3xl text-white font-medium mt-10  h-[2.7vw] bg-[#B16046]'>Get Started</button>
                            <button className='w-[12vw] rounded-3xl text-[#B16046] font-medium mt-10  h-[2.7vw] bg-transparent border-2 border-[#B16046]'>Get Started</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
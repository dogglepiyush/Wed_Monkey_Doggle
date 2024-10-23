import React from 'react'
import { useNavigate } from 'react-router-dom';
import img1 from "./Homepage/image 11.png";
import img2 from "./Homepage/vector.png";
import img3 from "./Homepage/Group.png";
import img4 from "./Homepage/vector2.png";
import img5 from "./Homepage/vector3.png";
import img6 from "./Homepage/Line 58.png";
import img7 from "./Homepage/vector1.png";

const NavBar = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation
  return (
    <div>
        <div className='navbar pt-4 flex flex-col gap-5 items-center w-full xl:h-[9vw] 2xl:h-[7.1vw] bg-[#E5CF9D] bg-opacity-40'>
                <div className="upper relative pt-[1.5vw] w-full px-[5vw] flex justify-center items-center">
                    <img className='w-[8vw] scale-[1.8]' src={img1} alt="" />
                    <div className="icon absolute right-[6vw] flex justify-center items-center gap-[2vw]">
                        <button onClick={() => navigate('')}>
                            <img className='w-[1vw]' src={img2} alt="" />
                        </button>
                        <img className='w-[.2vw]' src={img6} alt="" />
                        <button>
                            <img className='w-[1vw]' src={img3} alt="" />
                        </button>
                        <button>
                            <img className='w-[1vw]' src={img4} alt="" />
                        </button>
                        <button>
                            <img className='w-[1vw]' src={img5} alt="" />
                        </button>
                        <button>
                            <img className='w-[1vw]' src={img7} alt="" />
                        </button>
                    </div>
                </div>
                <div className="lower uppercase flex gap-[3vw] text-[#A15233] font-semibold 2xl:text-sm xl:text-sm font-montserrat">
                    <a href="/">Home</a>
                    <a href="/PDF-T">Templates</a>
                    <a href="">How it works</a>
                    <a href="">Join as a Vendor</a>
                    <a href="">Contact us</a>
                </div>
            </div>
    </div>
  )
}

export default NavBar
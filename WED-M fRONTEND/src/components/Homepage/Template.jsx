import React from 'react'
import Ellipse from "./Ellipse 13.png"
import img1 from "./image 15.png"


const Template = () => {
  return (
    <div className=''>
        <div className='Gallery relative Section w-full overflow-hidden xl:h-screen 2xl:h-screen bg-[#FFFCF8]'>
            <div className="img absolute -top-[8vw] -right-[6vw]">
                <img src={Ellipse} alt="" srcset="" />
            </div>
            <div className='w-full h-[10vw] absolute top-[3vw] gap-[.5vw] flex flex-col justify-center items-center'>
                <h1 className='font-raleway font-medium tracking-wider text-[#B16046] xl:text-sm xl:text-base'>GALLARY</h1>
                <h1 className='font-montserrat uppercase text-[#6D564E] xl:text-4xl 2xl:text-5xl'>Template Gallery Section</h1>
            </div>
            <div className="bg-[#F2E0CF99] w-[50vw] xl:h-[32vw] 2xl:h-[35vw] absolute top-[13vw] rounded-br-[20vw] flex justify-center items-start">
                <div className='absolute top-[4vw]'>
                    <h1 className='font-montserrat uppercase text-[2vw] text-[#6D564E] '>Wedding Cards <span className='text-xl'>190 Items</span></h1>
                </div>
            </div>
            <div className='w-full flex justify-center items-center xl:h-[35vw] 2xl:h-[20vw] xl:gap-[.1vw] 2xl:gap-[8vw] absolute bottom-[4vw]'>
                  <img className='xl:scale-[.6] 2xl:scale-[.8]' src={img1} alt="" srcset="" />
                  <img className='xl:scale-[.8] 2xl:scale-[]' src={img1} alt="" srcset="" />
                  <div>
                      <img className='xl:scale-[.6] 2xl:scale-[.8]' src={img1} alt="" srcset="" />
                      <div>

                    </div>
                </div>
            </div>
            <div className="absolute w-[4vw] h-[4vw] rounded-full xl:right-[6vw] 2xl:right-[6vw] font-medium  xl:bottom-[14vw] 2xl:bottom-[6vw] border-2 border-[#D6A663]">
                <button className='uppercase absolute text-[#666F52] xl:text-sm 2xl:text-base font-montserrat top-[1.2vw] bg-white xl:-right-[3vw] 2xl:-right-[3vw]'>View All</button>
            </div>
        </div>
        <div className='Video relative Section w-full overflow-hidden xl:h-screen 2xl:h-screen bg-[#FFFCF8]'>
            <div className="img absolute top-[4vw] -left-[6vw]">
                <img src={Ellipse} alt="" srcset="" />
            </div>
            {/* <div className='w-full h-[10vw] absolute top-[3vw] gap-[.5vw] flex flex-col justify-center items-center'>
                <h1 className='font-raleway font-medium tracking-wider text-[#B16046]'>GALLARY</h1>
                <h1 className='font-montserrat uppercase text-[#6D564E] text-5xl'>Template Gallery Section</h1>
            </div> */}
            <div className="bg-[#F2E0CF99] w-[50vw] xl:h-[32vw] 2xl:h-[35vw] absolute xl:top-[8vw] 2xl:top-[8vw] right-0 rounded-bl-[20vw] flex justify-center items-start">
                <div className='absolute top-[4vw]'>
                    <h1 className='font-montserrat uppercase text-[2vw] text-[#6D564E] '>Video Cards <span className='text-xl'>190 Items</span></h1>
                </div>
            </div>
            <div className='w-full flex justify-center items-center xl:h-[40vw] 2xl:h-[20vw] xl:gap-[.1vw] 2xl:gap-[8vw] absolute xl:bottom-[7vw] 2xl:bottom-[4vw]'>
                  <img className='xl:scale-[.6] 2xl:scale-[.8]' src={img1} alt="" srcset="" />
                  <img className='xl:scale-[.8] 2xl:scale-[]' src={img1} alt="" srcset="" />
                  <div>
                      <img className='xl:scale-[.6] 2xl:scale-[.8]' src={img1} alt="" srcset="" />
                      <div>

                    </div>
                </div>
            </div>
            <div className="absolute w-[4vw] h-[4vw] rounded-full left-[6vw] xl:bottom-[15vw] 2xl:bottom-[10vw] border-2 border-[#D6A663]">
                <button className='uppercase absolute text-[#666F52] font-medium font-montserrat 2xl:top-[1.2vw] bg-white xl:top-[1vw] xl:-left-[3.5vw] 2xl:-left-[2vw]'>View All</button>
            </div>
        </div>
        <div className='Date relative Section w-full overflow-hidden h-screen bg-[#FFFCF8]'>
            <div className="img absolute 2xl:top-[4vw] xl:top-[8vw] xl:-right-[8vw] 2xl:-right-[6vw]">
                <img src={Ellipse} alt="" srcset="" />
            </div>
            {/* <div className='w-full h-[10vw] absolute top-[3vw] gap-[.5vw] flex flex-col justify-center items-center'>
                <h1 className='font-raleway font-medium tracking-wider text-[#B16046]'>GALLARY</h1>
                <h1 className='font-montserrat uppercase text-[#6D564E] text-5xl'>Template Gallery Section</h1>
            </div> */}
            <div className="bg-[#F2E0CF99] w-[50vw] xl:h-[38vw] 2xl:h-[35vw] absolute 2xl:top-[6vw] xl:top-[10vw] rounded-br-[20vw] flex justify-center items-start">
                <div className='absolute top-[4vw]'>
                    <h1 className='font-montserrat uppercase text-[2vw] text-[#6D564E] '>Save the date Cards <span className='text-xl'>190 Items</span></h1>
                </div>
            </div>
            <div className='w-full flex justify-center items-center xl:h-[35vw] 2xl:h-[20vw] xl:gap-[.1vw] 2xl:gap-[8vw] absolute bottom-[4vw]'>
                  <img className='xl:scale-[.6] 2xl:scale-[.8]' src={img1} alt="" srcset="" />
                  <img className='xl:scale-[.8] 2xl:scale-[]' src={img1} alt="" srcset="" />
                  <div>
                      <img className='xl:scale-[.6] 2xl:scale-[.8]' src={img1} alt="" srcset="" />
                      <div>

                    </div>
                </div>
            </div>
            <div className="absolute w-[4vw] h-[4vw] rounded-full xl:right-[6vw] 2xl:right-[6vw] font-medium  xl:bottom-[14vw] 2xl:bottom-[6vw] border-2 border-[#D6A663]">
                <button className='uppercase absolute text-[#666F52] xl:text-sm 2xl:text-base font-montserrat top-[1.2vw] bg-white xl:-right-[3vw] 2xl:-right-[3vw]'>View All</button>
            </div>
        </div>
    </div>
  )
}

export default Template
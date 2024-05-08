
import { useState } from 'react'
import { useEffect } from 'react'



export default function Section2({img,leftImg,heading,content,contentNumber}){
    // const [width,setWidth]=useState(null)
    // let width=200
    
    // useEffect(()=>{
    //     Aos.init()

    //     const handleResize=()=>{
    //         if(window.innerWidth<=991 && window.innerWidth>=767){
    //             console.log('md')
    //             setWidth(20)
    //         }else if(window.innerWidth<=766){
    //             console.log('sm')
    //             setWidth(10)
    //         }else{
    //             console.log('lg')
    //             setWidth(50)
    //         }
    //     }

    //     handleResize()

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // },[])

    return(
        <>
            { leftImg ?
            < >
                <div className=" w-[clamp(0vw,66.66667%,30vw)] mx-auto  
                    sm:w-[96%] md:w-[96%] sm:max-w-[500px] md:max-w-[500px] sm:mb-[60px] sm:mt-0 sm:px-[5vw]
                    md:px-[5vw] md:mt-0 md:mb-[60px]
                "
                data-aos="fade-up" 
                // data-aos-offset={`${(width-2)*`${parseInt(contentNumber.replace('0',''))}`}`}
        data-aos-duration="1000" >
                    <img className=" w-full " src={img} alt={`sect-2.${contentNumber}`} />
                </div>
                <div className=" relative  justify-center items-center text-white px-2 border-e-2 border-gray-300
                sm:w-[96%] md:w-[96%] sm:max-w-[500px] md:max-w-[500px] sm:mb-[60px] sm:mt-0 sm:me-[5vw] sm:px-[5vw]
                md:px-[5vw] md:mt-0 md:mb-[60px] 
                "
                data-aos="fade-up" 
                // data-aos-offset={`${width*`${parseInt(contentNumber.replace('0',''))}`}`}
        data-aos-duration="1000" >
                    <h1 className=" text-[clamp(18px,2.5vw,28px)] font-normal py-2">
                        {heading}
                    </h1>
                    <p className=" font-thin text-[clamp(10px,1.5vw,18px)] w-[30ch] sm:w-full md:w-full">
                        {content}
                    </p>
                    <h1 className=" absolute -right-2 -top-8">{contentNumber}</h1>
                </div>
                <h1 className=" absolute -left-32 top-0 text-red-100 opacity-50 text-[clamp(10px,1vw,14px)]
                " style={{rotate:'-90deg',transformOrigin:'100% 100%'}}
                data-aos="fade-right" 
                // data-aos-offset={`${(width+50)*`${parseInt(contentNumber.replace('0',''))}`}`}
                data-aos-duration="1000"
                >
                    PAYMENTS. VERIFICATION. FINANCE.
                </h1>
            </>
            :
            < >
                <div className=" relative  justify-center items-center text-white px-2 border-s-2 border-gray-300 
                sm:w-[96%] md:w-[96%] sm:max-w-[500px] md:max-w-[500px] sm:mb-[60px] sm:mt-0 sm:ms-[5vw] sm:px-[5vw]
                md:px-[5vw] md:mt-0 md:mb-[60px] 
                "
                    data-aos="fade-up" 
                            // data-aos-offset={`${width*`${parseInt(contentNumber.replace('0',''))}`}`}
                    data-aos-duration="1000" >
                    <h1 className=" text-[clamp(18px,2.5vw,28px)] font-normal py-2">
                        {heading}
                    </h1>
                    <p className=" font-thin text-[clamp(10px,1.5vw,18px)] w-[30ch] sm:w-full md:w-full">
                    {content}
                    </p>
                    <h1 className=" absolute -left-2 -top-8">{contentNumber}</h1>
                </div>
                <div className="  w-[clamp(0vw,66.66667%,30vw)]  mx-auto  
                sm:w-[96%] md:w-[96%] sm:max-w-[500px] md:max-w-[500px] sm:mb-[60px] sm:mt-0 sm:px-[5vw]
                md:px-[5vw] md:mt-0 md:mb-[60px]
                "
                data-aos="fade-up" 
                // data-aos-offset={`${(width-2)*`${parseInt(contentNumber.replace('0',''))}`}`}
                data-aos-duration="1000" >
                    <img className="w-full " src={img} alt={`sect-2.${contentNumber}`}/>
                </div>

                            <h1 className=" absolute -left-32 top-0 text-red-100 opacity-50 text-[clamp(10px,1vw,14px)]" style={{rotate:'-90deg',transformOrigin:'100% 100%'}}
                            data-aos="fade-right" data-aos-offset='-500'
                            data-aos-duration="1000"
                            >
                                PAYMENTS. VERIFICATION. FINANCE.
                            </h1>
            </> 
            }
        </>
    )
}
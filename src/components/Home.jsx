import { useEffect, useState } from "react";
import { detailsCard, section2, teamMembers, trustedCompanies, weServeTheWorld } from "../constants/Home-Constants";
import DetailCard from "./ui/DetailCard";
import Sect2Heading from "./ui/Sect2Heading";
import Section2 from "./ui/Section2";


export default function Home(){

    const [startInd,setStartInd]=useState(0)
    const [endInd,setEndInd]=useState(1)

    useEffect(()=>{

        const handleResize=()=>{
            if(window.innerWidth<=991 && window.innerWidth>=767){
                console.log('md')
                setStartInd(0)
                setEndInd(2)
            }else if(window.innerWidth<=766){
                console.log('sm')
                setStartInd(0)
                setEndInd(1)
            }else{
                console.log('lg')
                setStartInd(0)
                setEndInd(2)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    return(
        <div className=" w-full">

            {/* section-1 */}
            <section className=" relative w-full min-h-screen sm:min-h-[80vh] md:min-h-screen flex flex-col justify-start md:justify-center sm:justify-center items-center">
                <div className=" w-full h-3/4 sm:h-full md:h-full">
                    <video className=" w-full h-full -mt-[12vw] md:hidden sm:hidden block" muted autoPlay src=" "></video>
                    <img src="/images/m2p-header-mob.png" alt="header" className=" w-full sm:block md:block hidden" />
                </div>
                <div className=" w-full justify-center items-center gap-2 absolute sm:static md:static bottom-[11vw] sm:my-[8vw] md:my-[8vw] px-[2%]">
                    <h1 className=" font-semibold text-[4vw] sm:text-[4.5vw] md:text-[5vw] text-center">We Connect Rural India To Banking services </h1>
                    <p className=" font-normal text-lg text-center text-[1.5vw] sm:text-[2vw] md:text-[2.5vw]">
                    Punji Kendra is the Best B2B Platform for AEPS, DMT, Micro ATM, Recharge, BBPS, PAN Card Creation and 12+ More Fintech Services. We are a DIPP Recognized Technology Startup supported by Startup India. 
                    We are aiming to create the best fintech platform for empowerment of rural economy.
                    </p>
                </div>
            </section>

            {/* section-2 */}
            <section className=" bg-[#c35050] sect-2 relative pt-40 pb-14 sm:py-[5rem] md:py-[5rem]">
                <Sect2Heading/>
                <ul>
                    {
                        section2.map((item,ind)=>{
                            return(
                            <li key={item.heading}  className={` min-h-screen relative w-full flex flex-row  justify-center items-center py-[15vh] sm:px-0 md:px-0 
                            ${ind%2==0?'ps-[5%]':'ps-[15%]'} ${ind%2==0?'pe-[15%]':'pe-[5%]'}
                            ${ind%2==0?'sm:flex-col':'sm:flex-col-reverse'} ${ind%2==0?'md:flex-col':'md:flex-col-reverse'}
                            `}>
                                <Section2 keyProp={item.heading} heading={item.heading} content={item.content} img={item.img} contentNumber={`0${ind+1}`} leftImg={ind%2==0}/>
                            </li>
                        )
                        })
                    }
                </ul>
            </section>

            {/* section-3 */}
            <section className=" relative min-h-[34.313vw] h-full ">
                
                <div className=" absolute sm:static left-0 top-0 w-full sm:h-full h-1/2 flex flex-col justify-center items-center gap-5">
                    <div className=" flex sm:flex-col justify-center items-center gap-5">
                        {
                            detailsCard.slice(0,3).map((item,ind)=>{
                                return(
                                    <DetailCard text1={item.text1} text2={item.text2} delay={ind*100}/>
                                )
                            })
                        }
                    </div>
                    <div className=" flex sm:flex-col justify-center items-center gap-5">
                        {
                            detailsCard.slice(3,6).map((item,ind)=>{
                                return(
                                    <DetailCard text1={item.text1} text2={item.text2} delay={ind*100}/>
                                )
                            })
                        }
                    </div>
                </div>

                <div className=" absolute inset-0 w-full h-full object-cover -z-10">
                    <video muted autoPlay loop  className=" w-full h-full object-cover" src="/videos/counter-bg.mp4"></video>
                </div>

            </section>


            {/* section-4 */}
            <section className=" relative sect-4 pt-[5vw] pb-[8vw] w-full">
                <div className=" w-full sm:max-w-full  max-w-[74%] mx-auto">
                    <h1 className=" text-[clamp(2.5rem,5vw,3.5rem)]  font-semibold text-center w-full mb-[3vw]"
                    data-aos="fade-up" 
                    data-aos-duration="1000" 
                    >Why Punjikendra?</h1>

                    <div className=" flex justify-center items-start w-full sm:items-center md:items-center sm:flex-col md:flex-col">
                        <div className=" flex flex-col justify-center items-center px-[5rem] sm:px-[2.5vw]">
                            <div className=" mb-[5.208vw] sm:w-full sm:max-w-[490px] md:max-w-[490px]"
                            data-aos='fade-up' data-aos-duration='1000'
                            >
                                <video className=" w-full" src="/videos/Flexible.mp4" autoPlay muted loop></video>
                                <div className=" px-2 border-e-2 border-red-500">
                                    <h1 className=" font-normal text-2xl py-4 text-blue-500">Scalability</h1>
                                    <p className=" text-[clamp(12px,1.5vw,14px)] max-w-[35ch]">
                                    We don't just build. We co-create products. Our team understands your long-term goals and customize products that are secure, scalable and aligned to your business objectives.
                                    </p>
                                </div>
                            </div>

                            <div className=" mb-[5.208vw] sm:max-w-[490px] md:max-w-[490px]" 
                            data-aos="fade-up" 
                            data-aos-duration="1000" >
                                <video className=" w-full" src="/videos/Customisation.mp4" autoPlay muted loop></video>
                                <div className=" px-2 border-e-2 border-red-500">
                                    <h1 className=" font-normal text-2xl py-4 text-blue-500">100% Customizable</h1>
                                    <p className=" text-[clamp(12px,1.5vw,14px)] max-w-[35ch]">
                                    One size does not fit all! Our APIs are flexible, giving us the capability to build configurable products that meet your market requirement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className=" flex flex-col justify-center items-center mt-[11.719vw] sm:mt-0 md:mt-0 px-[5rem] sm:px-[5vw]">
                            <div className=" mb-[5.208vw] sm:max-w-[490px] md:max-w-[490px]" 
                            data-aos="fade-up" 
                            data-aos-duration="1000" >
                                <video className=" w-full" src="/videos/Faster.mp4" autoPlay muted loop></video>
                                <div className=" px-2 border-e-2 border-red-500">
                                    <h1 className=" font-normal text-2xl py-4 text-blue-500">3X Faster Growth</h1>
                                    <p className=" text-[clamp(12px,1.5vw,14px)] max-w-[35ch]">
                                    Our solutions are end-to-end, meaning we do all the heavy lifting, enabling you launch cards, programs, any fintech product in no time at all.
                                    </p>
                                </div>
                            </div>

                            <div className=" mb-[5.208vw] sm:max-w-[490px] md:max-w-[490px]" 
                            data-aos="fade-up" 
                            data-aos-duration="1000" >
                                <video className=" w-full" src="/videos/Protection.mp4" autoPlay muted loop></video>
                                <div className=" px-2 border-e-2 border-red-500">
                                    <h1 className=" font-normal text-2xl py-4 text-blue-500">Secure & Compliant</h1>
                                    <p className=" text-[clamp(12px,1.5vw,14px)] max-w-[35ch]">
                                    All products we build are benchmarked with the highest industry standards. Our products are up-to-date with the latest in security and compliance. If it is from us, it's good to go.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-5 */}
            <section className=" w-full relative  min-h-[34.313vw] md:min-h-[390px] sm:min-h-[445px]  overflow-hidden">
                <div className=" w-full h-full absolute inset-0 -z-10">
                    <video muted autoPlay loop className=" object-cover w-full h-full" src="/videos/Cubes_Update.mp4"></video>
                </div>

                <div className=" h-full w-full md:mt-[3vw] sm:mt-[0vw] mt-[5vw] max-w-[74%] md:max-w-full sm:max-w-[90%] md:px-[1.5rem] sm:h-full sm:py-[3.5rem] mx-auto flex justify-center items-start sm:hidden ">
                    {teamMembers.slice(startInd,endInd).map((item,ind)=>{
                        return(
                            <div className=" w-full h-full flex flex-col justify-center items-start gap-2 px-[2.604vw] md:px-[30px] sm:px-0 "
                            data-aos='fade-up' data-aos-duration='1000'
                            >
                                <img className=" sm:w-[15vw] sm:h-[15vw] w-[6vw] h-[6vw] object-cover rounded-full shadow-sm box-border border-[6px] border-[#636d72]" src={item.image} alt={ind} />
                                <div className="relative after:content-[''] after:bg-cover after:bg-no-repeat after:ml-[0.26vw] after:mt-[0.313vw] after:bg-[url(/images/quote-left.png)] after:absolute after:block after:w-[2.5vw] after:h-[2.24vw] after:left-[-3vw] after:-top-2">
                                    <div className=" text-gray-100 pb-[1vw]">
                                        <h2 className=" sm:text-[20px] text-[1.563vw] font-[400] md:text-[2.5vw]">{item.name}</h2>
                                        <h2 className=" text-[1.146vw] md:text-[2vw] sm:text-[14px]">{item.title}</h2>
                                    </div>
                                    <span className=" md:text-[1.75vw] sm:text-[16px] text-gray-50 text-[1.146vw] relative after:content-[''] after:bg-cover after:bg-no-repeat after:ml-[0.26vw] after:mt-[0.313vw] after:bg-[url(/images/quote-right.png)] after:absolute after:block after:w-[2.5vw] after:h-[2.24vw] after:right-[-2rem] after:-bottom-2">
                                        {item.content}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className=" h-full w-full md:mt-[3vw] sm:mt-[0vw] mt-[5vw] max-w-[74%] md:max-w-full sm:max-w-[90%] md:px-[1.5rem] sm:h-full sm:py-[3.5rem] mx-auto hidden justify-center items-start sm:flex ">
                    {teamMembers.slice(startInd,endInd).map((item,ind)=>{
                        return(
                            <div className=" w-full h-full flex flex-col justify-center items-start gap-2 px-[2.604vw] md:px-[30px] sm:px-0 "
                            data-aos='fade-up' data-aos-duration='1000'
                            >
                                <img className=" sm:w-[15vw] sm:h-[15vw] w-[6vw] h-[6vw] object-cover rounded-full shadow-sm box-border border-[6px] border-[#636d72]" src={item.image} alt={ind} />
                                <div className="relative after:content-[''] after:bg-cover after:bg-no-repeat after:ml-[0.26vw] after:mt-[0.313vw] after:bg-[url(/images/quote-left.png)] after:absolute after:block after:w-[2.5vw] after:h-[2.24vw] after:left-[-3vw] after:-top-2">
                                    <div className=" text-gray-100 pb-[1vw]">
                                        <h2 className=" sm:text-[20px] text-[1.563vw] font-[400] md:text-[2.5vw]">{item.name}</h2>
                                        <h2 className=" text-[1.146vw] md:text-[2vw] sm:text-[14px]">{item.title}</h2>
                                    </div>
                                    <span className=" md:text-[1.75vw] sm:text-[16px] text-gray-50 text-[1.146vw] relative after:content-[''] after:bg-cover after:bg-no-repeat after:ml-[0.26vw] after:mt-[0.313vw] after:bg-[url(/images/quote-right.png)] after:absolute after:block after:w-[2.5vw] after:h-[2.24vw] after:right-[-2rem] after:-bottom-2">
                                        {item.content}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className=" md:static sm:static sm:my-0 md:my-[3rem] absolute bottom-[2vw] w-full flex justify-center items-center gap-2">
                    <button onClick={()=>{
                        if(startInd==0){
                            setStartInd(teamMembers.length-2)
                        }else if(startInd>0){
                            console.log(startInd,endInd)
                            setStartInd(startInd-1)
                        }
                        if(endInd==2){
                            setEndInd(teamMembers.length)
                            // setStartInd(teamMembers.length-2)
                        }else if(endInd<=teamMembers.length){
                            console.log(startInd,endInd)
                            setEndInd(endInd-1)
                        }
                    }} className=" px-2 py-[9px] rounded-full bg-white">
                        <img className=" w-3.5" src="/images/slide-arrow-L.png" alt="" />
                    </button>
                    <button onClick={()=>{
                        if(startInd==teamMembers.length-1){
                            setStartInd(0)
                        }else if(startInd>=0){
                            setStartInd(startInd+1)
                        }
                        if(endInd==teamMembers.length){
                            console.log(endInd,startInd)
                            setStartInd(0)
                            setEndInd(2)
                        }else if(endInd<teamMembers.length){
                            setEndInd(endInd+1)
                        }
                    }} className=" px-2 py-[9px] rounded-full bg-white">                        
                        <img className=" w-3.5" src="/images/slide-arrow-R.png" alt="" />
                    </button>
                </div>
            </section>

            {/* section-6 */}
            <section className=" w-full pt-[7.292vw]">
                <div className=" w-full sm:px-[2vw]  md:px-[2vw]  pl-[12.865vw] flex flex-row justify-center items-center gap-5 sm:flex-col md:justify-between">

                    <div className=" w-[42%] sm:w-full flex flex-col justify-center items-center gap-3 flex-shrink-0 flex-grow-0 basis-auto"
                    data-aos="fade-up" 
                    data-aos-duration="1000" 
                    >
                        <h1 
                        className=" text-red-500 text-[3.5vw] font-light w-full text-center sm:text-[5.5vw] md:text-[3.5vw] ">
                            We serve India
                        </h1>
                        <ul className=" flex flex-wrap justify-center items-center gap-1">
                            {
                                weServeTheWorld.map((item,ind)=>{
                                    return(
                                    <li key={item} className=" flex justify-center items-center gap-1 px-2">
                                        <div className=" size-1 rounded-full bg-black"/>
                                        <h3 className="opacity-[0.7] sm:text-[2.5vw] text-[1.163vw]">{item}</h3>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className=" sm:w-full sm:max-w-full max-w-[49.479vw] w-[75%]"
                    data-aos="fade-up" 
                    data-aos-duration="1000" 
                    >
                        <img  className=" md:block sm:block hidden object-cover w-full" src="/images/world-img.png" alt="" />
                        <video className=" object-cover w-full sm:hidden md:hidden block" loop autoPlay muted src="/videos/globe.mp4"></video>
                    </div>
                </div>
            </section>

            {/* section-7 */}
            <section className=" sect-7 relative py-[4.948vw] bg-[#c35050] ">
                    <div className=" max-w-[74%] mx-auto flex flex-col justify-center items-start
                    sm:max-w-full md:max-w-full md:px-2 sm:px-2 ">
                        <h1 className=" text-white text-[3vw] w-2/3 md:w-full sm:w-full sm:text-[5vw]"
                        data-aos='fade-up' data-aos-duration='1000'
                        >
                        Trusted by the banks and businesses
                        </h1>
                        <div>
                            <ul className=" flex flex-wrap justify-start items-center py-[2vw]">
                                {
                                    trustedCompanies.map((item)=>{
                                        return(
                                            <div className=" max-w-[8.] px-[0.26vw] py-[1.302vw] md:px-1.5  md:py-3.5 w-[14.28%] md:w-[20%] sm:w-[20%]
                                            sm:py-3.5 sm:px-1.5
                                            ">
                                                <img className=" w-full max-w-[8.229vw] sm:max-w-20 md:max-w-[80px]" src={item} alt={item} 
                                                data-aos='fade-up' data-aos-duration='1000'
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                </div>
            </section>
        </div>
    )
}
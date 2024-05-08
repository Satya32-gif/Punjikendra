
export default function Sect2Heading(){
    return(
        <div className=" flex justify-end items-center sm:pb-5 md:pb-5"
        data-aos="fade-up" 
        data-aos-duration="1000" >
            <div className=" w-full flex sm:flex-row md:flex-row flex-col justify-end items-end sm:justify-center sm:items-center md:justify-center md:items-center gap-1">
                <h1 className=" px-[15vw] sm:px-0 md:px-0 font-semibold text-[clamp(1.5vw,2.5rem,4vw)] text-white">Payments. Verification.</h1>
                <h1 className=" px-[15vw] sm:px-0 md:px-0 font-semibold text-[clamp(1.5vw,2.5rem,4vw)] text-white">Finance.</h1>
            </div>
        </div>
    )
}
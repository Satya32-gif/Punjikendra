

export default function DetailCard({text1,text2,delay}){
    return(
        <div className='bg-white rounded-s-xl rounded-se-xl shadow-xl px-5 py-8 sm:w-[260px] sm:h-[137px] w-[clamp(15rem,25vw,20rem)] mx-auto'
        data-aos="fade-up"
        // data-aos-offset="1500"
        data-aos-easing="ease-in-out"
        data-aos-delay={`${delay}`}
        >
            <h1 className=" font-normal text-5xl text-center">{text1}</h1>
            <h3 className=" font-normal text-lg text-center py-1 min-h-14">{text2}</h3>
        </div>
    )
}
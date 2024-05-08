import { locationAroundWorld, otherLinks } from "../constants/Home-Constants";

export default function Footer(){
    return(
        <footer className=" w-full bg-[url('/images/footer-bg.png')] bg-cover pt-[13.021vw] mt-[-3.042vw] pb-[5.208vw] md:pb-[40px]" style={{backgroundAttachment:'fixed'}}>
            <div className=" footer-top mb-[6.51vw] w-full sm:max-w-[91%] max-w-[80%] mx-auto px-[0.625vw] md:mt-[30px]  mt-[-3.042vw] text-white flex justify-center items-start gap-2 sm:flex-col sm:gap-10 sm:mb-[30px]">
                <div className=" w-[41.66666667%] sm:w-full px-3 sm:px-0">
                    <h1 className=" text-[2.5vw] md:text-[3.5vw] sm:text-[6vw] font-light">
                        Why Wait ?
                    </h1>
                    <p className=" text-[1.563vw] md:text-[2vw] sm:text-[2.5vw] font-[300] opacity-[0.7]">Give Wing To Your Business And Join Us Today</p>
                    <div className=" flex flex-col justify-center items-start gap-8 w-full py-5 sm:text-[2vw]">
                        <input className=" w-full py-2 bg-transparent border-t-0 border-x-0 border-b-[1px] border-b-gray-300 placeholder:text-gray-300 placeholder:text-[1vw] placeholder:md:text-[2vw] placeholder:sm:text-[2vw] outline-none" placeholder="Name" type="text" name="" id="" />

                        <input className=" w-full py-2 bg-transparent border-t-0 border-x-0 border-b-[1px] border-b-gray-300 placeholder:text-gray-300 placeholder:text-[1vw] placeholder:md:text-[2vw] placeholder:sm:text-[2vw] outline-none" placeholder="Company" type="text" name="" id="" />

                        <input className=" w-full py-2 bg-transparent border-t-0 border-x-0 border-b-[1px] border-b-gray-300 placeholder:text-gray-300 placeholder:text-[1vw] placeholder:md:text-[2vw] placeholder:sm:text-[2vw] outline-none" placeholder="Email Id" type="text" name="" id="" />

                        <input className=" w-full py-2 bg-transparent border-t-0 border-x-0 border-b-[1px] border-b-gray-300 placeholder:text-gray-300 placeholder:text-[1vw] placeholder:md:text-[2vw] placeholder:sm:text-[2vw] outline-none" placeholder="How can we help?" type="text" name="" id="" />

                        <button className=" px-5 py-2 rounded-full bg-gray-300 text-black flex justify-center items-center gap-4">
                            <p className=" text-[1vw] md:text-[1.5vw] sm:text-[2vw]">Send</p>
                            <div className=" size-7 rounded-full shadow-sm bg-red-500 flex justify-center items-center p-1">
                                <img src="/images/btn-arrow.png" alt="bnt" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className=" w-[33.33333333%] sm:w-full sm:ml-0 md:ml-0 ml-[8.33333%] text-[1vw] sm:text-[2.25vw] md:text-[1.875vw] sm:px-0">
                    <ul className=" w-full flex flex-col justify-center items-start gap-5 ">
                        {
                            locationAroundWorld.map((item,ind)=>{
                                return(
                                <li key={item} className=" pb-5 border-b-[1px] border-b-gray-200 w-full">
                                    <button className=" opacity-[0.7]">{item}</button>
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="w-[16.66666667%] sm:w-full md:w-[25%] px-[0.625vw]] text-[1vw] sm:text-[2.25vw] md:text-[1.875vw] sm:px-0">
                    <ul className=" w-full pl-[1.283vw] sm:px-0 flex flex-col justify-start items-start gap-5">
                        {
                            otherLinks.map((text,ind)=>{
                                return(
                                    <li key={text} className=" opacity-[0.7] ">
                                        <a href="/#">
                                            {text}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className=" footer-bottom w-full max-w-[80%] sm:max-w-[91%] px-[0.625vw] mx-auto">
                <div className=" flex sm:justify-normal justify-center items-center gap-2">
                    <div className=" w-[42%] sm:hidden"/>
                    <div className=" ml-[8.33333%] md:ml-0 md:px-0 sm:px-0 sm:ml-0 w-[58%] pl-5 flex sm:flex-col justify-start items-start gap-14 sm:gap-10" >
                        <div className=" flex flex-col justify-start items-start gap-2">
                            <ul className=" flex justify-start items-center gap-2">
                                <li>
                                    <a href="/#">
                                        <img className=" w-5" src="/images/social-icon-1.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/#">
                                        <img className=" w-5" src="/images/twitter_x_filled.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/#">
                                        <img className=" w-5" src="/images/social-icon-3.png" alt="" />
                                    </a>
                                </li>

                                <li>
                                    <a href="/#">
                                        <img className=" w-5" src="/images/social-icon-4.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                            <div className=" text-white text-[14px]">
                                <h3>For any enquiry, Write us on :</h3>
                                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=VpCqJVFNXndGJKWxmBsqRZPBrGzRCDdWVFPBCqzGjDgwwJLwfFbHDkrvnTNgkTHsDVWhPxq">
                                    hello@punjikendra.in
                                </a>
                            </div>
                        </div>
                        <div className=" text-white text-[1.11vw] sm:text-[2.11vw] opacity-[0.7]">
                            © 2021 Punjikendra  |  All Rights Reserved. <br />
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
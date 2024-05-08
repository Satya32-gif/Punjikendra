
export default function Navbar(){
    return(
        <nav className=' z-10 flex justify-between items-center gap-3 px-10 py-4 sticky bg-white top-0 left-0 w-full sm:px-3'>
            <div>
                <img src="/images/m2p-logo.png" alt="M2P-Logo" className=" w-14 h-14 sm:size-[10vw]" />
            </div>
            <ul className="  sm:hidden flex justify-center items-center gap-[clamp(1rem,2vw,2rem)] text-[#212529]" >
                <li className=" w-full static product-nav ">
                    <a href="/#" className=" nav-btn relative  ">
                        <div className=" visible black-tag block">Products</div>
                        <div className=" red-tag invisible block">Products</div>
                    </a>
                    <div className=" max-w-[70.924vw] m-auto py-[1.464vw] px-[2.196vw] product-dropdown bg-white shadow-md rounded-md"> 
                        <ul className=" w-full flex justify-center items-start gap-0 text-[0.885vw]">
                            <li className=" w-1/4 ">
                                <div className=" w-full flex justify-start items-center gap-3 px-2 py-3 border-b border-gray-200">
                                    <img  className=" w-6 h-5 object-cover " src="/images/menu-icon-1.png" alt="1-img" />
                                    <h3 className=" text-[1.042vw]">Financial Inclusions</h3>
                                </div>
                                <div className=" w-full flex flex-col justify-center items-start gap-0 pt-2.5">
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">AEPS</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">DMT</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">mATM</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">Aadhaar Pay</button>
                                    
                                </div>
                            </li>
                            
                            <li className=" w-1/4 ">
                                <div className=" w-full flex justify-start items-center gap-3 px-2 py-3 border-b border-gray-200">
                                    <img  className=" w-6 h-5 object-cover " src="/images/menu-icon-2.png" alt="1-img" />
                                    <h3 className=" text-[1.042vw]">Verification Suits</h3>
                                </div>
                                <div className=" w-full flex flex-col justify-center items-start gap-0 pt-2.5">
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">Aadhaar</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">GST</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">Cibil</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">Bank A/C Verification</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">PAN</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">eKYC</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">vKYC</button>
                                </div>
                            </li>

                            <li className=" w-1/4 ">
                                <div className=" w-full flex justify-start items-center gap-3 px-2 py-3 border-b border-gray-200">
                                    <img  className=" w-6 h-5 object-cover " src="/images/menu-icon-3.png" alt="1-img" />
                                    <h3 className=" text-[1.042vw]">Payment Solutions</h3>
                                </div>
                                <div className=" w-full flex flex-col justify-center items-start gap-0 pt-2.5">
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">UPI </button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">Payout</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">mPOS</button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">Prepaid Cards</button>
                                </div>
                            </li>

                            <li className=" w-1/4 ">
                                <div className=" w-full flex justify-start items-center gap-3 px-2 py-3 border-b border-gray-200">
                                    <img  className=" w-6 h-5 object-cover " src="/images/menu-icon-4.png" alt="1-img" />
                                    <h3 className=" text-[1.042vw]">Other Solutions</h3>
                                </div>
                                <div className=" w-full flex flex-col justify-center items-start gap-0 pt-2.5">
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">CRM </button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">LMS </button>
                                    <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">eSigning</button>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </li>
                <li className=" w-full relative about-nav">
                    <a href="/#" className=" nav-btn relative ">
                        <div className=" visible black-tag">About</div>
                        <div className=" red-tag invisible">About</div>
                    </a>
                </li>
                <li className=" w-full relative resource-nav">
                    <a href="/#" className=" nav-btn relative ">
                        <div className=" visible black-tag">Resources</div>
                        <div className=" red-tag invisible">Resources</div>
                    </a>

                    <div className="w-[15vw] m-auto py-[1.33vw] px-[0.78vw] resource-dropdown bg-white shadow-md rounded-md">
                    <div className=" w-full flex flex-col justify-center items-start gap-0 pt-2.5 text-[0.885vw]">
                        <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">Blog</button>
                        <button type="button" className=" px-2.5 py-1.5 w-full text-left hover:bg-gray-100 rounded-md transition-all">News</button>
                    </div>
                    </div>
                </li>
                <li>
                    <a href="/#" className=" nav-btn relative ">
                        <div className=" visible black-tag">Event</div>
                        <div className=" red-tag invisible">Event</div>
                    </a>
                </li>
                <li>
                    <a href="/#" className=" nav-btn relative ">
                        <div className=" visible black-tag">Contact</div>
                        <div className=" red-tag invisible">Contact</div>
                    </a>
                </li>
            </ul>

            <div className=" flex justify-between items-center gap-10">
                <button type="button" className=" connect-btn bg-black flex justify-center items-center gap-3 ps-6 pe-1 py-2 rounded-3xl">
                    <h1 className=" text-gray-300 text-sm ">Let's connect</h1>
                    <div className=" overflow-hidden relative rounded-full py-2.5 px-1 bg-[#0476D0] " >
                        <img src="/images/btn-arrow.png" alt="arrow" className=" w-5 h-1.5 img-1 transition-all" />
                        <img src="/images/btn-arrow.png" alt="arrow" className=" w-5 h-1.5 absolute -translate-x-6  img-2 transition-transform" style={{top:'calc(50% - 3px)',left:'calc(50% - 10px)'}} />
                    </div>
                </button>
                <button className=" hidden sm:block">
                    <div className=" flex flex-col justify-center items-center gap-2.5">
                        <div className=" w-8 h-[1px] bg-black rounded-full"/>
                        <div className=" w-8 h-[1px] bg-black rounded-full"/>
                        <div className=" w-8 h-[1px] bg-black rounded-full"/>
                    </div>
                </button>
            </div>
        </nav>
    )
}
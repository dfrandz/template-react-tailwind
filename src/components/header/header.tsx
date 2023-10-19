import { FunctionComponent, useEffect } from "react"
import Logo from '../../assets/img/logo.png'
import Logo2 from '../../assets/img/LOGO DIGICOM 2.png'
import { Link , useLocation} from "react-router-dom"
const Header: FunctionComponent = () => {
    const location = useLocation();
    useEffect(()=>{
    })
    return (
        <>
            <div className="bg-[#FF7000] hidden md:flex items-center justify-around h-[38px]" data-aos="fade-down" data-aos-duration="1500">
                <div>
                    <p className="text-white">Urgent : Awesome Template for Charity & Non-profit Site</p>
                </div>
                <div>
                    <ul className="flex items-center justify-been gap-4">
                        <li className="">
                            <a href=""> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 17.8125 4.59375 22.6406 10.1719 23.4844V15.375H7.21875V12H10.1719V9.46875C10.1719 6.5625 11.9062 4.92188 14.5312 4.92188C15.8438 4.92188 17.1562 5.15625 17.1562 5.15625V8.01562H15.7031C14.25 8.01562 13.7812 8.90625 13.7812 9.84375V12H17.0156L16.5 15.375H13.7812V23.4844C19.3594 22.6406 23.625 17.8125 23.625 12Z" fill="white" />
                            </svg> </a>
                        </li>
                        <li>
                            <a href="">
                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li className=" ">
                            <a href="" className="flex items-center bg-black p-2">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.7344 2.85938C25.4531 1.73438 24.5625 0.84375 23.4844 0.5625C21.4688 0 13.5 0 13.5 0C13.5 0 5.48438 0 3.46875 0.5625C2.39062 0.84375 1.5 1.73438 1.21875 2.85938C0.65625 4.82812 0.65625 9.04688 0.65625 9.04688C0.65625 9.04688 0.65625 13.2188 1.21875 15.2344C1.5 16.3594 2.39062 17.2031 3.46875 17.4844C5.48438 18 13.5 18 13.5 18C13.5 18 21.4688 18 23.4844 17.4844C24.5625 17.2031 25.4531 16.3594 25.7344 15.2344C26.2969 13.2188 26.2969 9.04688 26.2969 9.04688C26.2969 9.04688 26.2969 4.82812 25.7344 2.85938ZM10.875 12.8438V5.25L17.5312 9.04688L10.875 12.8438Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#FFFFFF] hidden md:flex p-4 sm:flex justify-around" data-aos="fade-up" data-aos-duration="1500">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="flex items-center justify-been gap-4" >
                    <div className="flex items-center gap-2">
                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24.5" cy="24.5" r="24.5" fill="#F8F8F8" />
                            <path d="M36.4688 14.75H14.5312C13.1074 14.75 12 15.9102 12 17.2812V32.4688C12 33.8926 13.1074 35 14.5312 35H36.4688C37.8398 35 39 33.8926 39 32.4688V17.2812C39 15.9102 37.8398 14.75 36.4688 14.75ZM36.4688 17.2812V19.4434C35.2559 20.4453 33.3574 21.9219 29.3496 25.0859C28.4531 25.7715 26.7129 27.459 25.5 27.4062C24.2344 27.459 22.4941 25.7715 21.5977 25.0859C17.5898 21.9219 15.6914 20.4453 14.5312 19.4434V17.2812H36.4688ZM14.5312 32.4688V22.7129C15.6914 23.6621 17.4316 25.0332 20.0156 27.0898C21.1758 27.9863 23.2324 29.9902 25.5 29.9375C27.7148 29.9902 29.7188 27.9863 30.9316 27.0898C33.5156 25.0332 35.2559 23.6621 36.4688 22.7129V32.4688H14.5312Z" fill="#FF7000" />
                        </svg>
                        <span> <span className="font-bold">Mail:</span>  <br />info@ngoocharity.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24.5" cy="24.5" r="24.5" fill="#F8F8F8" />
                            <path d="M38.209 30.4648L32.3027 27.9336C32.1445 27.8809 31.9863 27.8281 31.7754 27.8281C31.4062 27.8281 31.0371 28.0391 30.8262 28.3027L28.1895 31.5195C24.0762 29.5684 20.8066 26.2988 18.8555 22.1855L22.0723 19.5488C22.3359 19.3379 22.5469 18.9688 22.5469 18.5469C22.5469 18.3887 22.4941 18.2305 22.4414 18.0723L19.9102 12.166C19.6992 11.6914 19.2246 11.375 18.6973 11.375C18.6445 11.375 18.5391 11.4277 18.4336 11.4277L12.9492 12.6934C12.3691 12.8516 12 13.3262 12 13.9062C12 27.459 22.916 38.375 36.4688 38.375C37.0488 38.375 37.5234 38.0059 37.6816 37.4258L38.9473 31.9414C38.9473 31.8359 38.9473 31.7305 38.9473 31.6777C38.9473 31.1504 38.6309 30.6758 38.209 30.4648Z" fill="#FF7000" />
                        </svg>
                        <span><span className="font-bold">Call Us:</span> <br />+62 7100 1234</span>
                    </div>
                    <div className="w-6/6">
                        <Link to='/contact'>
                            <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FF7000] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                Nous contacter
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <header className="sticky -top-px flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#333333] border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
                <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <a className="sm:hidden flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">
                            <img src={Logo2} alt="" />
                        </a>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row  justify-end sm:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
                            <ul className="flex flex-col sm:flex-row gap-4 justify-between sm:p-4">
                                <li className="flex items-center gap-3">
                                    <Link to='' className={location.pathname == '/' ? 'text-[#FF7000] text-lg font-bold' : 'text-[#FFFFFF] text-lg font-bold hover:text-[#FF7000] transition-all ease-in-out duration-300' } >
                                        Home
                                    </Link>
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#FF7000" />
                                        <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#FF7000" />
                                    </svg>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Link to='/about' className={location.pathname == '/about' ? 'text-[#FF7000] text-lg font-bold' : 'text-[#FFFFFF] text-lg font-bold hover:text-[#FF7000] transition-all ease-in-out duration-300' }>
                                        About
                                    </Link>
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#FF7000" />
                                        <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#FF7000" />
                                    </svg>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Link to='/service' className={location.pathname == '/service' ? 'text-[#FF7000] text-lg font-bold' : 'text-[#FFFFFF] text-lg font-bold hover:text-[#FF7000] transition-all ease-in-out duration-300' }>
                                        Service
                                    </Link>
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#FF7000" />
                                        <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#FF7000" />
                                    </svg>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Link to='/contact' className={location.pathname == '/contact' ? 'text-[#FF7000] text-lg font-bold' : 'text-[#FFFFFF] text-lg font-bold hover:text-[#FF7000] transition-all ease-in-out duration-300' }>
                                        Contact
                                    </Link>
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#FF7000" />
                                        <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#FF7000" />
                                    </svg>
                                </li>
                                
                                
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
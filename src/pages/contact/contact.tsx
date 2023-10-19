import { FunctionComponent, useEffect } from "react"
import Image1 from '../../assets/img/im1.png';
import Aos from "aos";
import 'aos/dist/aos.css';
const Contact: FunctionComponent = () => {
    useEffect(() => {
        Aos.init();

    }, []);
    return (
        <>
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <h1 className="sm:p-[90px] p-10 text-[#FFFFFF] text-center font-bold text-5xl font-mono">CONTACT</h1>
            </div>

            <section className="py-2">
                <div className="container mx-auto sm:p-10 p-4 sm:pl-[14rem] grid sm:grid-cols-2 grid-cols-1 justify-between gap-6">
                    <div className="w-2/2 flex flex-col gap-6" data-aos="zoom-in-right" data-aos-duration="1500">
                        <img src={Image1} alt="imag1" data-aos="fade-down" data-aos-duration="3000" />
                        <h1 className="text-[30px] font-bold font-serif">Send a <span className="text-[#FF7000]">Message</span></h1>
                        <div className="bg-[#FF7000] h-1 w-10"></div>
                        <p className="text-sm font-normal">
                            Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sit. <br />
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-sm">Name *</label>
                                    <input type="text" className="border p-1 border-[#D6D6D6]" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-sm">Email *</label>
                                    <input type="text" className="border p-1 border-[#D6D6D6]" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-sm">Name *</label>
                                    <input type="text" className="border p-1 border-[#D6D6D6]" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-sm">Email *</label>
                                    <input type="text" className="border p-1 border-[#D6D6D6]" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm">Your Message *</label>
                                <textarea className="border p-1 border-[#D6D6D6]" />
                            </div>
                        </div>
                        <div className="w-6/6">
                            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-[#FF7000] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                SEND MESSAGE
                            </button>
                        </div>
                        <p className="text-sm italic">Note: Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="sm:w-2/3  flex flex-col gap-3">
                        <h3 className="font-bold text-[#FF7000] text-lg">Contact Info</h3>
                        <div className="flex gap-4">
                            <div>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#FF7000" />
                                    <path d="M17 24.5312V40.75C17 41.3125 17.5156 41.6875 17.9844 41.4531L24.5 38.5V20.5L17.9375 23.125C17.375 23.3594 17 23.9219 17 24.5312ZM26 38.5L35 41.5V23.5L26 20.5V38.5ZM42.9688 20.5938L36.5 23.5V41.5L43.0156 38.9219C43.5781 38.6875 44 38.125 44 37.5156V21.2969C44 20.7344 43.4375 20.3594 42.9688 20.5938Z" fill="white" />
                                </svg>
                            </div>
                            <span>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</span>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#FF7000" />
                                    <path d="M42.0312 27.9531C40.9531 28.7969 39.5938 29.8281 34.8125 33.2969C33.875 34 32.1406 35.5469 30.5 35.5469C28.8125 35.5469 27.125 34 26.1406 33.2969C21.3594 29.8281 20 28.7969 18.9219 27.9531C18.7344 27.8125 18.5 27.9531 18.5 28.1875V37.75C18.5 39.0156 19.4844 40 20.75 40H40.25C41.4688 40 42.5 39.0156 42.5 37.75V28.1875C42.5 27.9531 42.2188 27.8125 42.0312 27.9531ZM30.5 34C31.5781 34.0469 33.125 32.6406 33.9219 32.0781C40.1562 27.5781 40.625 27.1562 42.0312 26.0312C42.3125 25.8438 42.5 25.5156 42.5 25.1406V24.25C42.5 23.0312 41.4688 22 40.25 22H20.75C19.4844 22 18.5 23.0312 18.5 24.25V25.1406C18.5 25.5156 18.6406 25.8438 18.9219 26.0312C20.3281 27.1562 20.7969 27.5781 27.0312 32.0781C27.8281 32.6406 29.375 34.0469 30.5 34Z" fill="white" />
                                </svg>

                            </div>
                            <span>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</span>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="30" fill="#FF7000" />
                                    <path d="M41.7969 35.9688L36.5469 33.7188C36.4062 33.6719 36.2656 33.625 36.0781 33.625C35.75 33.625 35.4219 33.8125 35.2344 34.0469L32.8906 36.9062C29.2344 35.1719 26.3281 32.2656 24.5938 28.6094L27.4531 26.2656C27.6875 26.0781 27.875 25.75 27.875 25.375C27.875 25.2344 27.8281 25.0938 27.7812 24.9531L25.5312 19.7031C25.3438 19.2812 24.9219 19 24.4531 19C24.4062 19 24.3125 19.0469 24.2188 19.0469L19.3438 20.1719C18.8281 20.3125 18.5 20.7344 18.5 21.25C18.5 33.2969 28.2031 43 40.25 43C40.7656 43 41.1875 42.6719 41.3281 42.1562L42.4531 37.2812C42.4531 37.1875 42.4531 37.0938 42.4531 37.0469C42.4531 36.5781 42.1719 36.1562 41.7969 35.9688Z" fill="white" />
                                </svg>

                            </div>
                            <span>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</span>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="3000" className="bg-[#FF7000]">
                            <div className="p-8 justify-center flex flex-col gap-8">
                                <div>
                                    <svg width="68" height="61" viewBox="0 0 68 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M67.5 28.625C67.5 25.9297 65.9766 23.4688 63.75 22.1797V4.36719C63.75 3.3125 62.9297 0.5 60 0.5C59.0625 0.5 58.2422 0.851562 57.6562 1.4375L47.5781 9.40625C42.6562 13.3906 36.3281 15.5 30 15.5H7.5C3.28125 15.5 0 18.8984 0 23V34.25C0 38.4688 3.28125 41.75 7.5 41.75H11.3672C11.25 43.0391 11.1328 44.3281 11.1328 45.5C11.1328 50.1875 12.1875 54.6406 14.1797 58.5078C14.7656 59.7969 16.0547 60.5 17.4609 60.5H26.1328C29.1797 60.5 31.0547 57.1016 29.1797 54.6406C27.3047 52.0625 26.1328 49.0156 26.1328 45.5C26.1328 44.2109 26.3672 43.0391 26.6016 41.75H30C36.3281 41.75 42.6562 43.9766 47.5781 47.9609L57.6562 55.9297C58.2422 56.5156 59.0625 56.75 59.8828 56.75C62.8125 56.75 63.6328 54.1719 63.6328 53V35.1875C65.9766 33.8984 67.5 31.4375 67.5 28.625ZM56.25 45.2656L52.2656 42.1016C45.9375 37.0625 38.0859 34.25 30 34.25V23C38.0859 23 45.9375 20.3047 52.2656 15.2656L56.25 12.1016V45.2656Z" fill="white" />
                                    </svg>
                                    <h3 className="text-[#FFFFFF] font-bold font-sans mt-2">Become a Volunteer</h3>
                                    <span className="text-[#FFFFFF]">We need you now for world</span>
                                </div>

                                <p className="text-justify text-[#FFFFFF]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                                <div className="w-6/6">
                                    <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2  font-semibold bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                        JOIN US NOW
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Contact

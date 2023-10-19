import { FunctionComponent, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';

import Image1 from '../../assets/img/im1.png';
import Image2 from '../../assets/img/im2.png';
import Part1 from '../../assets/img/part1.png'
import Part2 from '../../assets/img/part2.png'
import Part3 from '../../assets/img/part3.png'
import Map from '../../assets/img/hg.png'
import Aos from "aos";
import 'aos/dist/aos.css';
export const Home: FunctionComponent = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    const styleProgress = {
        width: "57%"
    };
    const progresValMax: number = 100
    const progresValMin: number = 0
    const progresVal: number = 57


    return (
        <>
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <nav className="relative mb-2">
                    <div className="relative h-96 w-full bg-gradient-to-tr ">
                        <img src="../assets/img/Rectangle 76.png" alt="" className="w-full  object-cover absolute mix-blend-overlay" />
                        <div className="md:lg:xl:block inset-0 p-[1rem] sm:pl-[9rem]">
                            <div className="h-full flex flex-col justify-between gap-4 ">
                                <div className="container sm:px-4 mx-auto md:lg:px-4 flex flex-col mb-20 mt-8 gap-2" data-aos="fade-down-right" data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <h1 className="text-3xl capitalize text-white mt-4 font-semibold"> <span className="text-[#FF7000]">#EndViolence</span> For <br /> Every Woman</h1>
                                    <p className="text-justify text-[#666666] font-serif">Excepteur sint occaecat cupidatat non proident sunt <br /> in culpa qui  officia deserunt mollit anim id est laborum.</p>
                                    <div className="w-6/6">


                                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FF7000] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                            DONATE NOW
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>



            <div className="flex justify-center sm:-mt-[6rem]">
                <div className="bg-[#FF7000] p-4 sm:w-[15.5rem] sm:h-[13rem]">
                    <div className="sm:flex flex-col items-center sm:py-14 text-[#FFFFFF]">
                        <span className="text-xs">View Our Cause</span>
                        <p className="text-lg ">Donate Now</p>
                    </div>
                </div>
                <div className="bg-[#333333] p-4 sm:w-[15.5rem]">
                    <div className="sm:flex flex-col items-center sm:py-14 text-[#FFFFFF]">
                        <span className="text-xs">View Our Cause</span>
                        <p className="text-lg ">Get Involved Now</p>
                    </div>
                </div>
                <div className="bg-[#FF7000] p-4 sm:w-[15.5rem]">
                    <div className="sm:flex flex-col items-center sm:py-14 text-[#FFFFFF]">
                        <span className="text-xs">View Our Cause</span>
                        <p className="text-lg ">Join Us Now</p>
                    </div>
                </div>
            </div>


            <div className="container p-10 sm:pl-[14rem] grid sm:grid-cols-2 grid-cols-1 justify-between gap-6">
                <div className="w-2/2 flex flex-col gap-6" data-aos="zoom-in-right" data-aos-duration="1500">
                    <h1 className="text-[30px] font-bold font-serif">Welcome <span className="text-[#FF7000]">To</span>  Ngoo</h1>
                    <div className="bg-[#FF7000] h-1 w-10"></div>
                    <p className="text-sm font-normal">
                        Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sit. <br />
                        <br />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus. Teritatis et quasi architecto.
                    </p>
                    <div className="w-6/6">


                        <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FF7000] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                            MEET OUR TEAMS
                        </button>

                    </div>
                </div>

                <div className="">
                    <img src={Image1} alt="imag1" data-aos="fade-down" data-aos-duration="3000" />
                    <img src={Image2} alt="imag2" className="sm:mt-[-6rem] sm:pl-[14rem]" data-aos="zoom-out-left" data-aos-duration="1500" />
                </div>
            </div>

            <section className=" bg-[#444444]">
                <div className="container p-14 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 sm:pl-[14rem] items-center">
                    <div>
                        <h2 className="font-bold text-4xl mb-5 text-[#FFFFFF]" data-aos="zoom-in" data-aos-duration="2000"> <span className="text-[#FF7000]" >Urgent</span> Cause</h2>
                        <div className="bg-[#FF7000] h-1 w-10 mb-5"></div>
                        <h3 className="text-[30px] font-bold font-serif text-[#FFFFFF]" data-aos="zoom-in" data-aos-duration="2000"><span className="text-[#FF7000]" >#School</span> for South <br /> Kampar's Students</h3>
                        <p className="text-sm font-normal text-[#666666]" data-aos="flip-left" data-aos-duration="1500">
                            Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sit. <br />
                            <br />
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus. Teritatis et quasi architecto.
                        </p>
                        <div className="flex justify-between mt-4" data-aos='fade-down-right' data-aos-duration="1500">
                            <span className="text-[#FF7000] font-bold">Donated</span>
                            <span className="text-[#FFFFFF] font-normal">80%</span>
                        </div>
                        <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-2 mb-2" data-aos='fade-down-right' data-aos-duration="1500">
                            <div className="flex flex-col justify-center overflow-hidden bg-[#FF7000]" role="progressbar" style={styleProgress} aria-valuenow={progresVal} aria-valuemin={progresValMin} aria-valuemax={progresValMax}>
                            </div>
                        </div>
                        <span className="text-[#FFFFFF] font-bold font-serif ">  <span className="text-[#FF7000]">$18,500 </span>Raised of <span className="text-[#FF7000]">$25,000 </span>Goal</span>
                    </div>

                    <div className="mt-[5rem] flex items-end">
                        <img src={Image1} alt="imag1" data-aos="fade-down" data-aos-duration="3000" />
                    </div>
                </div>

            </section>

            <section className="text-center container mt-8 sm:pl-[4rem] p-2" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <div className="flex flex-col items-center gap-5 mb-5">
                    <h3 className="font-bold text-3xl font-serif">We <span className="text-[#FF7000]">Need</span> Your Help</h3>
                    <p className="bg-[#FF7000] h-1 w-11"></p>
                </div>
                <p className="text-[#666666]">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center justify-center py-5 mt-5 mb-5">
                    <div className="flex flex-col bg-[#F8F8F8] text-justify">
                        <img src={Image1} alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-xl">EDUCATION FOR SYRIAN CHILD</span>
                            <p className="font-normal text-sm text-[#666666]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                            <div className="flex justify-between mt-4">
                                <span className="text-[#666666] font-bold"> <span className="text-[#FF7000]">$2,580</span> to go</span>
                                <span className="text-[#666666] font-normal">80%</span>
                            </div>
                            <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-2 mb-2">
                                <div className="flex flex-col justify-center overflow-hidden bg-[#FF7000]" role="progressbar" style={styleProgress} aria-valuenow={progresVal} aria-valuemin={progresValMin} aria-valuemax={progresValMax}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#F8F8F8] text-justify">
                        <img src={Image1} alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-xl">EDUCATION FOR SYRIAN CHILD</span>
                            <p className="font-normal text-sm text-[#666666]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                            <div className="flex justify-between mt-4">
                                <span className="text-[#666666] font-bold"> <span className="text-[#FF7000]">$2,580</span> to go</span>
                                <span className="text-[#666666] font-normal">80%</span>
                            </div>
                            <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-2 mb-2">
                                <div className="flex flex-col justify-center overflow-hidden bg-[#FF7000]" role="progressbar" style={styleProgress} aria-valuenow={progresVal} aria-valuemin={progresValMin} aria-valuemax={progresValMax}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#F8F8F8] text-justify">
                        <img src={Image1} alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-xl">EDUCATION FOR SYRIAN CHILD</span>
                            <p className="font-normal text-sm text-[#666666]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                            <div className="flex justify-between mt-4">
                                <span className="text-[#666666] font-bold"> <span className="text-[#FF7000]">$2,580</span> to go</span>
                                <span className="text-[#666666] font-normal">80%</span>
                            </div>
                            <div className="flex w-full h-3 bg-gray-200 rounded-full overflow-hidden mt-2 mb-2">
                                <div className="flex flex-col justify-center overflow-hidden bg-[#FF7000]" role="progressbar" style={styleProgress} aria-valuenow={progresVal} aria-valuemin={progresValMin} aria-valuemax={progresValMax}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-6/6">


                    <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FF7000] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        DONATE NOW
                    </button>

                </div>
            </section>

            <section className="sm:h-[28rem] relative text-center mt-[5.5rem] sm:pl-[4rem] p-2 bg-[#222222]">
                <div className="relative w-full">
                    <img src={Map} alt="" className="w-full object-cover absolute mix-blend-normal" />
                    <div className="flex flex-col items-center gap-5 mb-5">
                        <h3 className="font-bold text-2xl font-serif mt-10 text-[#FFFFFF]"> <span className="text-[#FF7000]">We Help Many</span> People</h3>
                        <p className="text-[#FF7000] text-base">Want to Become a Volunteer</p>
                    </div>
                    <p className="text-center sm:px-72 text-[#FFFFFF]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sit .</p>
                    <div className="mt-10 flex gap-4 justify-center items-center mb-9">
                        <div className="w-6/6">

                            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FF7000] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                DONATE NOW
                            </button>

                        </div>
                        <div className="w-6/6">


                            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#FFFFFF] text-[#FF7000] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                DONATE NOW
                            </button>

                        </div>
                    </div>
                </div>

            </section>

            <section className=" mt-8 p-2 bg-[#FFFFFF]">
                <div className="container sm:p-14 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 sm:pl-[14rem] items-center">
                    <div className="">
                        <div className=" flex items-end">
                            <img src={Image1} alt="imag1" data-aos="fade-down" data-aos-duration="3000" />
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-4xl mb-5 text-[#333333]">Upcoming <span className="text-[#FF7000]">Events</span></h2>
                        <div className="bg-[#FF7000] h-1 w-10 mb-5"></div>
                        <p className="text-sm font-normal text-[#666666]">
                            Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
                        </p>
                        <div className="flex gap-6 mt-4 sm:flex-row flex-col">
                            <div>
                                <div className="p-5 bg-[#FF7000] mt-4 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-bold text-[#FFFFFF]">10</span>
                                    <span className="text-[#FFFFFF]">AUG</span>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <h3 className="text-[#333333] text-lg font-bold">Gathering books for children</h3>
                                <div>
                                    <div className="flex items-center gap-6">

                                        <div className="flex items-center gap-2">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM8 14.25C4.53125 14.25 1.75 11.4688 1.75 8C1.75 4.5625 4.53125 1.75 8 1.75C11.4375 1.75 14.25 4.5625 14.25 8C14.25 11.4688 11.4375 14.25 8 14.25ZM9.90625 11C10.0938 11.125 10.3125 11.0938 10.4375 10.9062L11.0312 10.125C11.1562 9.9375 11.125 9.71875 10.9375 9.59375L8.875 8.0625V3.625C8.875 3.4375 8.6875 3.25 8.5 3.25H7.5C7.28125 3.25 7.125 3.4375 7.125 3.625V8.78125C7.125 8.875 7.15625 9 7.25 9.0625L9.90625 11Z" fill="#FF7000" />
                                            </svg>
                                            <span className="text-[#FF7000]">12:00 am - 5:00 pm</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 0C17.4375 0 17.375 0.03125 17.3125 0.0625L12 2L6.625 0.125C6.40625 0.0625 6.1875 0.03125 5.96875 0C5.78125 0 5.5625 0.0625 5.34375 0.125L0.625 1.75C0.25 1.90625 0 2.28125 0 2.6875V13.5C0 13.8125 0.21875 14 0.46875 14C0.53125 14 0.59375 14 0.65625 13.9688L6 12L11.375 13.9062C11.5625 13.9688 11.7812 14 12 14C12.2188 14 12.4062 13.9688 12.625 13.9062L17.3438 12.2812C17.7188 12.125 18 11.75 18 11.3438V0.53125C18 0.21875 17.75 0 17.5 0ZM7 1.84375L11 3.25V12.1875L7 10.7812V1.84375ZM1.5 12.0938V3.0625L5.5 1.65625V10.5938H5.46875L1.5 12.0938ZM16.5 10.9688L12.5 12.375V3.4375L16.5 1.9375V10.9688Z" fill="#FF7000" />
                                            </svg>

                                            <span className="text-[#FF7000]">12:00 am - 5:00 pm</span>
                                        </div>
                                    </div>
                                    <p className="mt-4">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                                </div>
                                <p></p>
                            </div>
                        </div>
                        <div className="flex gap-6 mt-4 sm:flex-row flex-col">
                            <div>
                                <div className="p-5 bg-[#FF7000] mt-4 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-bold text-[#FFFFFF]">24</span>
                                    <span className="text-[#FFFFFF]">AUG</span>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <h3 className="text-[#333333] text-lg font-bold">Meet & greet volunteer ny</h3>
                                <div>
                                    <div className="flex items-center gap-6">

                                        <div className="flex items-center gap-2">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM8 14.25C4.53125 14.25 1.75 11.4688 1.75 8C1.75 4.5625 4.53125 1.75 8 1.75C11.4375 1.75 14.25 4.5625 14.25 8C14.25 11.4688 11.4375 14.25 8 14.25ZM9.90625 11C10.0938 11.125 10.3125 11.0938 10.4375 10.9062L11.0312 10.125C11.1562 9.9375 11.125 9.71875 10.9375 9.59375L8.875 8.0625V3.625C8.875 3.4375 8.6875 3.25 8.5 3.25H7.5C7.28125 3.25 7.125 3.4375 7.125 3.625V8.78125C7.125 8.875 7.15625 9 7.25 9.0625L9.90625 11Z" fill="#FF7000" />
                                            </svg>
                                            <span className="text-[#FF7000]">12:00 am - 5:00 pm</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 0C17.4375 0 17.375 0.03125 17.3125 0.0625L12 2L6.625 0.125C6.40625 0.0625 6.1875 0.03125 5.96875 0C5.78125 0 5.5625 0.0625 5.34375 0.125L0.625 1.75C0.25 1.90625 0 2.28125 0 2.6875V13.5C0 13.8125 0.21875 14 0.46875 14C0.53125 14 0.59375 14 0.65625 13.9688L6 12L11.375 13.9062C11.5625 13.9688 11.7812 14 12 14C12.2188 14 12.4062 13.9688 12.625 13.9062L17.3438 12.2812C17.7188 12.125 18 11.75 18 11.3438V0.53125C18 0.21875 17.75 0 17.5 0ZM7 1.84375L11 3.25V12.1875L7 10.7812V1.84375ZM1.5 12.0938V3.0625L5.5 1.65625V10.5938H5.46875L1.5 12.0938ZM16.5 10.9688L12.5 12.375V3.4375L16.5 1.9375V10.9688Z" fill="#FF7000" />
                                            </svg>

                                            <span className="text-[#FF7000]">12:00 am - 5:00 pm</span>
                                        </div>
                                    </div>
                                    <p className="mt-4">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.</p>
                                </div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="text-center  mt-8 sm:pl-[4rem] p-2 bg-[#F1F1F1]">
                <div className="flex flex-col items-center gap-5 mb-5">
                    <h3 className="font-bold text-4xl font-serif ">Our <span className="text-[#FF7000]">Partners</span></h3>
                    <p className="bg-[#FF7000] h-1 w-11"></p>
                </div>
                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                {/* <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-1 gap-4 items-center justify-center py-5 mt-5 mb-5">

                    <div className="">
                        <img src={Part1} alt="" />
                    </div>
                    <div className=" ">
                        <img src={Part2} alt="" />
                    </div>
                    <div className=" ">
                        <img src={Part3} alt="" />
                    </div>
                    <div className=" ">
                        <img src={Part1} alt="" />
                    </div>
                    <div className=" ">
                        <img src={Part2} alt="" />
                    </div>
                    <div className=" ">
                        <img src={Part3} alt="" />
                    </div>
                </div> */}
                <Swiper className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-1 gap-1 items-center justify-center py-5 mt-5 mb-5"
                slidesPerView={4}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                    <SwiperSlide><img src={Part1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Part2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Part3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Part1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Part2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Part3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Part1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Part2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Part3} alt="" /></SwiperSlide>
                </Swiper>
            </section>



        </>


    );
};
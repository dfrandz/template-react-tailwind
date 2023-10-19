import { FunctionComponent, useEffect, useState } from "react"
import Aos from "aos";
import 'aos/dist/aos.css';
import Image1 from '../../assets/img/im1.png';
import Image2 from '../../assets/img/im2.png';
import Map from '../../assets/img/hg.png'
import { AccordionItems } from "../../models/accordion";
import AccordionItem from "../../components/accordion/AccordionItem";

const About: FunctionComponent = () => {
    const [accrodionData, setAccrodionData] = useState<any>([])
    const [open, setOpen] = useState<any>(false)

    const toggle = (index:any) =>{
       
        if(open === index){
            return setOpen(false)
        }
        setOpen(index)
    }

    useEffect(() => {
        Aos.init();
        setAccrodionData(AccordionItems)
    }, []);


    return (
        <>
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <h1 className="sm:p-[90px] p-10 text-[#FFFFFF] text-center font-bold text-5xl font-mono">About Us</h1>
            </div>

            <section className="py-2">
                <div className="container p-4 sm:p-10 sm:pl-[14rem] grid sm:grid-cols-2 grid-cols-1 justify-between gap-6">
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
                <div className="container gap-4 p-10 justify-center sm:pl-[14rem] grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                    <div className="flex items-center gap-3">
                        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="45" cy="45" r="45" fill="#FF7000" />
                            <path d="M45.0859 38.8594V43.6406C46.9141 44.0625 48.5312 44.7656 50.2188 45.2578V40.4766C48.3906 40.0547 46.7734 39.3516 45.0859 38.8594ZM60.7656 30.2109C58.375 31.3359 55.4219 32.4609 52.5391 32.4609C48.8125 32.4609 45.6484 30 40.9375 30C39.1797 30 37.6328 30.3516 36.1562 30.8438C36.3672 30.3516 36.4375 29.7891 36.3672 29.2266C36.2969 27.1875 34.6094 25.6406 32.6406 25.5C30.3906 25.4297 28.5625 27.2578 28.5625 29.4375C28.5625 30.7734 29.1953 31.9688 30.25 32.6719V59.8125C30.25 60.7969 30.9531 61.5 31.9375 61.5H33.0625C33.9766 61.5 34.75 60.7969 34.75 59.8125V53.2031C36.7188 52.3594 39.1797 51.6562 42.7656 51.6562C46.5625 51.6562 49.6562 54.1172 54.3672 54.1172C57.7422 54.1172 60.4844 52.9219 63.0156 51.2344C63.5781 50.8125 63.9297 50.1094 63.9297 49.3359V32.25C64 30.6328 62.2422 29.5781 60.7656 30.2109ZM39.8828 48.4219C38.0547 48.6328 36.3672 48.9844 34.75 49.6172V44.625C36.5781 43.9922 38.0547 43.5703 39.8828 43.4297V48.4219ZM60.625 38.9297C58.9375 39.6328 57.3203 40.3359 55.4219 40.6172V45.6094C57.1797 45.3984 59.0078 44.8359 60.625 43.7812V48.7734C58.7969 49.8984 57.1797 50.5312 55.4219 50.6719V45.6094C53.5234 45.8906 52.0469 45.75 50.2188 45.2578V49.9688C48.5312 49.4766 46.9141 48.8438 45.0859 48.4922V43.6406C43.6797 43.3594 42.2031 43.2188 39.8828 43.4297V38.5078C38.3359 38.7188 36.7891 39.2109 34.75 39.9844V34.9922C37.0703 34.1484 38.2656 33.5859 39.8828 33.4453V38.5078C41.7812 38.2266 43.3281 38.3672 45.0859 38.8594V34.1484C46.7031 34.6406 48.3906 35.3438 50.2188 35.625V40.4766C51.9062 40.8281 53.5938 40.9688 55.4219 40.6172V35.5547C57.3203 35.2734 59.0781 34.6406 60.625 34.0078V38.9297Z" fill="white" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="font-bold text-3xl">12,280</span>
                            <span>Complete</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="45" cy="45" r="45" fill="#FF7000" />
                            <path d="M30.75 41.25C33.2109 41.25 35.25 39.2812 35.25 36.75C35.25 34.2891 33.2109 32.25 30.75 32.25C28.2188 32.25 26.25 34.2891 26.25 36.75C26.25 39.2812 28.2188 41.25 30.75 41.25ZM62.25 41.25C64.7109 41.25 66.75 39.2812 66.75 36.75C66.75 34.2891 64.7109 32.25 62.25 32.25C59.7188 32.25 57.75 34.2891 57.75 36.75C57.75 39.2812 59.7188 41.25 62.25 41.25ZM64.5 43.5H60C58.7344 43.5 57.6094 44.0625 56.7656 44.8359C59.6484 46.3828 61.6172 49.1953 62.1094 52.5H66.75C67.9453 52.5 69 51.5156 69 50.25V48C69 45.5391 66.9609 43.5 64.5 43.5ZM46.5 43.5C50.7891 43.5 54.375 39.9844 54.375 35.625C54.375 31.3359 50.7891 27.75 46.5 27.75C42.1406 27.75 38.625 31.3359 38.625 35.625C38.625 39.9844 42.1406 43.5 46.5 43.5ZM51.8438 45.75H51.2812C49.8047 46.4531 48.1875 46.875 46.5 46.875C44.7422 46.875 43.125 46.4531 41.6484 45.75H41.0859C36.5859 45.75 33 49.4062 33 53.9062V55.875C33 57.7734 34.4766 59.25 36.375 59.25H56.625C58.4531 59.25 60 57.7734 60 55.875V53.9062C60 49.4062 56.3438 45.75 51.8438 45.75ZM36.1641 44.8359C35.3203 44.0625 34.1953 43.5 33 43.5H28.5C25.9688 43.5 24 45.5391 24 48V50.25C24 51.5156 24.9844 52.5 26.25 52.5H30.8203C31.3125 49.1953 33.2812 46.3828 36.1641 44.8359Z" fill="white" />
                        </svg>

                        <div className="flex flex-col">
                            <span className="font-bold text-3xl">12,280</span>
                            <span>Complete</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="45" cy="45" r="45" fill="#FF7000" />
                            <path d="M65.0625 30H57.75V27.1875C57.75 26.2734 56.9766 25.5 56.0625 25.5H36.9375C35.9531 25.5 35.25 26.2734 35.25 27.1875V30H27.9375C26.9531 30 26.25 30.7734 26.25 31.6875V35.625C26.25 38.1562 27.7969 40.7578 30.5391 42.7266C32.7891 44.3438 35.4609 45.3281 38.2734 45.6797C40.5234 49.3359 43.125 50.8125 43.125 50.8125V55.875H39.75C37.2188 55.875 35.25 57.3516 35.25 59.8125V60.6562C35.25 61.1484 35.6016 61.5 36.0938 61.5H56.9062C57.3281 61.5 57.75 61.1484 57.75 60.6562V59.8125C57.75 57.3516 55.7109 55.875 53.25 55.875H49.875V50.8125C49.875 50.8125 52.4062 49.3359 54.6562 45.6797C57.4688 45.3281 60.1406 44.3438 62.3906 42.7266C65.1328 40.7578 66.75 38.1562 66.75 35.625V31.6875C66.75 30.7734 65.9766 30 65.0625 30ZM33.2109 39.0703C31.4531 37.875 30.75 36.4688 30.75 35.625V34.5H35.25C35.3203 36.8203 35.6719 38.8594 36.1641 40.6172C35.0391 40.1953 34.0547 39.7031 33.2109 39.0703ZM62.25 35.625C62.25 36.8203 60.9844 38.2266 59.7188 39.0703C58.875 39.7031 57.8906 40.1953 56.7656 40.6172C57.2578 38.8594 57.6094 36.8203 57.6797 34.5H62.25V35.625Z" fill="white" />
                        </svg>

                        <div className="flex flex-col">
                            <span className="font-bold text-3xl">12,280</span>
                            <span>Complete</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="45" cy="45" r="45" fill="#FF7000" />
                            <path d="M46 43.5C50.9219 43.5 55 39.4922 55 34.5C55 29.5781 50.9219 25.5 46 25.5C41.0078 25.5 37 29.5781 37 34.5C37 39.4922 41.0078 43.5 46 43.5ZM52.6797 45.8203L49.375 59.25L47.125 49.6875L49.375 45.75H42.625L44.875 49.6875L42.625 59.25L39.25 45.8203C34.1875 46.0312 30.25 50.1797 30.25 55.2422V58.125C30.25 60.0234 31.7266 61.5 33.625 61.5H58.375C60.2031 61.5 61.75 60.0234 61.75 58.125V55.2422C61.75 50.1797 57.7422 46.0312 52.6797 45.8203Z" fill="white" />
                        </svg>

                        <div className="flex flex-col">
                            <span className="font-bold text-3xl">12,280</span>
                            <span>Complete</span>
                        </div>
                    </div>
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

            <section className="py-2">
                <div className="container p-10 sm:pl-[14rem] grid sm:grid-cols-2 grid-cols-1 justify-between gap-6">
                    <div className="w-2/2 flex flex-col gap-6" data-aos="zoom-in-right" data-aos-duration="1500">
                        <h1 className="text-[30px] font-bold font-serif">Welcome <span className="text-[#FF7000]">To</span>  Ngoo</h1>
                        <div className="bg-[#FF7000] h-1 w-10"></div>
                        <p className="text-sm font-normal">
                            Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sit. <br />
                            <br />
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Lorem ipsum dolor sit amet, onsectetur adipiscing cons ectetur nulla. Sed at ullamcorper risus. Teritatis et quasi architecto.
                        </p>

                        <img src={Image1} alt="imag1" data-aos="fade-down" data-aos-duration="3000" />
                        {/* <video data-aos="fade-down" data-aos-duration="3000"
    id="my-video"
    className="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    <source src="MY_VIDEO.mp4" type="video/mp4" />
    <source src="MY_VIDEO.webm" type="video/webm" />
    <p className="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
                        </video> */}
                    </div>
                    
                    <div className="mt-[5.5rem] gap-2 flex flex-col">
                        {accrodionData.map( (data:any, index:any) =>{
                            return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={()=>toggle(index)} />
                        } )}
                    </div>

                </div>

            </section>

            <section className="text-center  mt-8 sm:pl-[4rem] p-2 bg-[#F1F1F1]">
                <div className="flex flex-col items-center gap-5 mb-5">
                    <h3 className="font-bold text-4xl font-serif ">Our <span className="text-[#FF7000]">Volunteers</span> Says</h3>
                    <p className="bg-[#FF7000] h-1 w-11"></p>
                </div>
                <p className="text-[#666666]">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-14 items-center justify-center py-5 mt-5 mb-5">
                    <div className="flex gap-2">
                        <div>
                            <svg width="120" height="123" viewBox="0 0 120 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="3" width="120" height="120" rx="60" fill="#333333"/>
                                <path d="M97.75 11H94V8C94 6.35938 95.3125 5 97 5H97.375C97.9844 5 98.5 4.53125 98.5 3.875V1.625C98.5 1.01562 97.9844 0.5 97.375 0.5H97C92.8281 0.5 89.5 3.875 89.5 8V19.25C89.5 20.5156 90.4844 21.5 91.75 21.5H97.75C98.9688 21.5 100 20.5156 100 19.25V13.25C100 12.0312 98.9688 11 97.75 11ZM84.25 11H80.5V8C80.5 6.35938 81.8125 5 83.5 5H83.875C84.4844 5 85 4.53125 85 3.875V1.625C85 1.01562 84.4844 0.5 83.875 0.5H83.5C79.3281 0.5 76 3.875 76 8V19.25C76 20.5156 76.9844 21.5 78.25 21.5H84.25C85.4688 21.5 86.5 20.5156 86.5 19.25V13.25C86.5 12.0312 85.4688 11 84.25 11Z" fill="#FF7000"/>
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-justify px-8 text-[#666666]">
                                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
                            </p>
                            <span className="text-[#FF7000] text-justify px-8 font-bold">- John Doel</span>
                            <span className="text-[#666666] text-justify px-8">Businessman</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <svg width="120" height="123" viewBox="0 0 120 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="3" width="120" height="120" rx="60" fill="#333333"/>
                                <path d="M97.75 11H94V8C94 6.35938 95.3125 5 97 5H97.375C97.9844 5 98.5 4.53125 98.5 3.875V1.625C98.5 1.01562 97.9844 0.5 97.375 0.5H97C92.8281 0.5 89.5 3.875 89.5 8V19.25C89.5 20.5156 90.4844 21.5 91.75 21.5H97.75C98.9688 21.5 100 20.5156 100 19.25V13.25C100 12.0312 98.9688 11 97.75 11ZM84.25 11H80.5V8C80.5 6.35938 81.8125 5 83.5 5H83.875C84.4844 5 85 4.53125 85 3.875V1.625C85 1.01562 84.4844 0.5 83.875 0.5H83.5C79.3281 0.5 76 3.875 76 8V19.25C76 20.5156 76.9844 21.5 78.25 21.5H84.25C85.4688 21.5 86.5 20.5156 86.5 19.25V13.25C86.5 12.0312 85.4688 11 84.25 11Z" fill="#FF7000"/>
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-justify px-8 text-[#666666]">
                                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
                            </p>
                            <span className="text-[#FF7000] text-justify px-8 font-bold">- John Doel</span>
                            <span className="text-[#666666] text-justify px-8">Businessman</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <svg width="120" height="123" viewBox="0 0 120 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="3" width="120" height="120" rx="60" fill="#333333"/>
                                <path d="M97.75 11H94V8C94 6.35938 95.3125 5 97 5H97.375C97.9844 5 98.5 4.53125 98.5 3.875V1.625C98.5 1.01562 97.9844 0.5 97.375 0.5H97C92.8281 0.5 89.5 3.875 89.5 8V19.25C89.5 20.5156 90.4844 21.5 91.75 21.5H97.75C98.9688 21.5 100 20.5156 100 19.25V13.25C100 12.0312 98.9688 11 97.75 11ZM84.25 11H80.5V8C80.5 6.35938 81.8125 5 83.5 5H83.875C84.4844 5 85 4.53125 85 3.875V1.625C85 1.01562 84.4844 0.5 83.875 0.5H83.5C79.3281 0.5 76 3.875 76 8V19.25C76 20.5156 76.9844 21.5 78.25 21.5H84.25C85.4688 21.5 86.5 20.5156 86.5 19.25V13.25C86.5 12.0312 85.4688 11 84.25 11Z" fill="#FF7000"/>
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-justify px-8 text-[#666666]">
                                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
                            </p>
                            <span className="text-[#FF7000] text-justify px-8 font-bold">- John Doel</span>
                            <span className="text-[#666666] text-justify px-8">Businessman</span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <svg width="120" height="123" viewBox="0 0 120 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="3" width="120" height="120" rx="60" fill="#333333"/>
                                <path d="M97.75 11H94V8C94 6.35938 95.3125 5 97 5H97.375C97.9844 5 98.5 4.53125 98.5 3.875V1.625C98.5 1.01562 97.9844 0.5 97.375 0.5H97C92.8281 0.5 89.5 3.875 89.5 8V19.25C89.5 20.5156 90.4844 21.5 91.75 21.5H97.75C98.9688 21.5 100 20.5156 100 19.25V13.25C100 12.0312 98.9688 11 97.75 11ZM84.25 11H80.5V8C80.5 6.35938 81.8125 5 83.5 5H83.875C84.4844 5 85 4.53125 85 3.875V1.625C85 1.01562 84.4844 0.5 83.875 0.5H83.5C79.3281 0.5 76 3.875 76 8V19.25C76 20.5156 76.9844 21.5 78.25 21.5H84.25C85.4688 21.5 86.5 20.5156 86.5 19.25V13.25C86.5 12.0312 85.4688 11 84.25 11Z" fill="#FF7000"/>
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-justify px-8 text-[#666666]">
                                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.
                            </p>
                            <span className="text-[#FF7000] text-justify px-8 font-bold">- John Doel</span>
                            <span className="text-[#666666] text-justify px-8">Businessman</span>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About

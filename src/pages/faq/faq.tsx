import { FunctionComponent, useEffect, useState } from "react"
import Aos from "aos";
import 'aos/dist/aos.css';
import { AccordionItems } from "../../models/accordion";
import AccordionItem from "../../components/accordion/AccordionItem";

const Faq: FunctionComponent = () => {
  const [accrodionData, setAccrodionData] = useState<any>([])
    const [open, setOpen] = useState<any>(false)

    const toggle = (index:any) =>{
        if(open === index){
            return setOpen(false)
        }
        setOpen(index)
    }
  useEffect(() => {
    Aos.init()
    setAccrodionData(AccordionItems)
  }, [])
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 bg-[#000000]">
                <h1 className="sm:p-[90px] p-10 text-[#FFFFFF] text-center font-bold text-5xl font-mono">FAQ</h1>
      </div>
      <section className="py-2">
        <div className="container sm:p-10 p-4 sm:pl-[14rem] grid sm:grid-cols-2 grid-cols-1 justify-between gap-6">
          <div className="w-3/3 flex flex-col gap-6" data-aos="zoom-in-right" data-aos-duration="1500">
            <h1 className="text-[30px] font-bold font-serif">How To <span className="text-[#FF7000]">Help</span>  Us</h1>
            <div className="bg-[#FF7000] h-1 w-10"></div>
            <p className="text-sm font-normal">
              Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. <br />
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#FF7000" />
                    <path d="M23.6875 46C23.6875 46.9492 24.4258 47.6875 25.375 47.6875H33.8125V39.25H23.6875V46ZM37.1875 47.6875H45.625C46.5215 47.6875 47.3125 46.9492 47.3125 46V39.25H37.1875V47.6875ZM47.3125 30.8125H45.0449C45.4141 30.1797 45.625 29.4941 45.625 28.7031C45.625 26.1719 43.5156 24.0625 40.9844 24.0625C38.7695 24.0625 37.3457 25.2227 35.5527 27.7012C33.707 25.2227 32.2832 24.0625 30.1211 24.0625C27.5371 24.0625 25.4805 26.1719 25.4805 28.7031C25.4805 29.4941 25.6387 30.1797 26.0078 30.8125H23.6875C22.7383 30.8125 22 31.6035 22 32.5V36.7188C22 37.1934 22.3691 37.5625 22.8438 37.5625H48.1562C48.5781 37.5625 49 37.1934 49 36.7188V32.5C49 31.6035 48.209 30.8125 47.3125 30.8125ZM30.0684 30.8125C28.9082 30.8125 27.959 29.916 27.959 28.7031C27.959 27.543 28.9082 26.5938 30.0684 26.5938C31.123 26.5938 31.9141 26.8047 34.6562 30.8125H30.0684ZM40.9844 30.8125H36.3965C39.1387 26.8047 39.877 26.5938 40.9844 26.5938C42.1445 26.5938 43.0938 27.543 43.0938 28.7031C43.0938 29.916 42.1445 30.8125 40.9844 30.8125Z" fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 data-aos="fade-right" data-aos-duration="500" className="font-bold text-2xl font-sans">Send Donation</h3>
                  <p className="text-[14px]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore totam rem aperiam, eaque ipsa quae.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#FF7000" />
                    <path d="M23.6875 46C23.6875 46.9492 24.4258 47.6875 25.375 47.6875H33.8125V39.25H23.6875V46ZM37.1875 47.6875H45.625C46.5215 47.6875 47.3125 46.9492 47.3125 46V39.25H37.1875V47.6875ZM47.3125 30.8125H45.0449C45.4141 30.1797 45.625 29.4941 45.625 28.7031C45.625 26.1719 43.5156 24.0625 40.9844 24.0625C38.7695 24.0625 37.3457 25.2227 35.5527 27.7012C33.707 25.2227 32.2832 24.0625 30.1211 24.0625C27.5371 24.0625 25.4805 26.1719 25.4805 28.7031C25.4805 29.4941 25.6387 30.1797 26.0078 30.8125H23.6875C22.7383 30.8125 22 31.6035 22 32.5V36.7188C22 37.1934 22.3691 37.5625 22.8438 37.5625H48.1562C48.5781 37.5625 49 37.1934 49 36.7188V32.5C49 31.6035 48.209 30.8125 47.3125 30.8125ZM30.0684 30.8125C28.9082 30.8125 27.959 29.916 27.959 28.7031C27.959 27.543 28.9082 26.5938 30.0684 26.5938C31.123 26.5938 31.9141 26.8047 34.6562 30.8125H30.0684ZM40.9844 30.8125H36.3965C39.1387 26.8047 39.877 26.5938 40.9844 26.5938C42.1445 26.5938 43.0938 27.543 43.0938 28.7031C43.0938 29.916 42.1445 30.8125 40.9844 30.8125Z" fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 data-aos="fade-right" data-aos-duration="500" className="font-bold text-2xl font-sans">Become Volunteer</h3>
                  <p className="text-[14px]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore totam rem aperiam, eaque ipsa quae.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#FF7000" />
                    <path d="M23.6875 46C23.6875 46.9492 24.4258 47.6875 25.375 47.6875H33.8125V39.25H23.6875V46ZM37.1875 47.6875H45.625C46.5215 47.6875 47.3125 46.9492 47.3125 46V39.25H37.1875V47.6875ZM47.3125 30.8125H45.0449C45.4141 30.1797 45.625 29.4941 45.625 28.7031C45.625 26.1719 43.5156 24.0625 40.9844 24.0625C38.7695 24.0625 37.3457 25.2227 35.5527 27.7012C33.707 25.2227 32.2832 24.0625 30.1211 24.0625C27.5371 24.0625 25.4805 26.1719 25.4805 28.7031C25.4805 29.4941 25.6387 30.1797 26.0078 30.8125H23.6875C22.7383 30.8125 22 31.6035 22 32.5V36.7188C22 37.1934 22.3691 37.5625 22.8438 37.5625H48.1562C48.5781 37.5625 49 37.1934 49 36.7188V32.5C49 31.6035 48.209 30.8125 47.3125 30.8125ZM30.0684 30.8125C28.9082 30.8125 27.959 29.916 27.959 28.7031C27.959 27.543 28.9082 26.5938 30.0684 26.5938C31.123 26.5938 31.9141 26.8047 34.6562 30.8125H30.0684ZM40.9844 30.8125H36.3965C39.1387 26.8047 39.877 26.5938 40.9844 26.5938C42.1445 26.5938 43.0938 27.543 43.0938 28.7031C43.0938 29.916 42.1445 30.8125 40.9844 30.8125Z" fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3  className="font-bold text-2xl font-sans">Share Media</h3>
                  <p className="text-[14px]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore totam rem aperiam, eaque ipsa quae.</p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="sm:w-2/3 w-full flex flex-col gap-4">
            
            <div data-aos="fade-down" data-aos-duration="3000" className="bg-[#FF7000]">
                <div className="p-8 justify-center flex flex-col gap-8">
                  <div>
                    <svg width="68" height="61" viewBox="0 0 68 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M67.5 28.625C67.5 25.9297 65.9766 23.4688 63.75 22.1797V4.36719C63.75 3.3125 62.9297 0.5 60 0.5C59.0625 0.5 58.2422 0.851562 57.6562 1.4375L47.5781 9.40625C42.6562 13.3906 36.3281 15.5 30 15.5H7.5C3.28125 15.5 0 18.8984 0 23V34.25C0 38.4688 3.28125 41.75 7.5 41.75H11.3672C11.25 43.0391 11.1328 44.3281 11.1328 45.5C11.1328 50.1875 12.1875 54.6406 14.1797 58.5078C14.7656 59.7969 16.0547 60.5 17.4609 60.5H26.1328C29.1797 60.5 31.0547 57.1016 29.1797 54.6406C27.3047 52.0625 26.1328 49.0156 26.1328 45.5C26.1328 44.2109 26.3672 43.0391 26.6016 41.75H30C36.3281 41.75 42.6562 43.9766 47.5781 47.9609L57.6562 55.9297C58.2422 56.5156 59.0625 56.75 59.8828 56.75C62.8125 56.75 63.6328 54.1719 63.6328 53V35.1875C65.9766 33.8984 67.5 31.4375 67.5 28.625ZM56.25 45.2656L52.2656 42.1016C45.9375 37.0625 38.0859 34.25 30 34.25V23C38.0859 23 45.9375 20.3047 52.2656 15.2656L56.25 12.1016V45.2656Z" fill="white"/>
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
            <div className="bg-[#F1F1F1]">
                  <div className="p-8 justify-center flex items-center gap-4">
                    <div>
                      <h3 className="text-[#FF7000] font-bold font-sans">Download Brochure</h3>
                      <span>Click here to download .PDF</span>
                    </div>
                      <svg width="45" height="61" viewBox="0 0 45 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.2" d="M43.2422 11.9844L33.5156 2.14062C32.4609 1.08594 30.9375 0.5 29.5312 0.5H5.625C2.46094 0.5 0 3.07812 0 6.125V54.875C0 58.0391 2.46094 60.5 5.625 60.5H39.375C42.4219 60.5 45 58.0391 45 54.875V15.9688C45 14.5625 44.2969 13.0391 43.2422 11.9844ZM38.9062 15.5H30V6.59375L38.9062 15.5ZM5.625 54.875V6.125H24.375V18.3125C24.375 19.9531 25.5469 21.125 27.1875 21.125H39.375V54.875H5.625ZM34.9219 38.1172C33.5156 36.7109 29.4141 37.0625 27.3047 37.2969C25.3125 36.125 24.0234 34.3672 23.0859 31.9062C23.4375 30.0312 24.2578 27.1016 23.6719 25.3438C23.2031 22.2969 19.2188 22.5312 18.6328 24.6406C18.1641 26.5156 18.6328 29.2109 19.4531 32.4922C18.2812 35.3047 16.5234 39.0547 15.3516 41.2812C13.0078 42.4531 9.84375 44.3281 9.375 46.6719C9.02344 48.5469 12.4219 53.1172 18.2812 43.0391C20.8594 42.1016 23.7891 41.0469 26.25 40.5781C28.4766 41.8672 31.0547 42.5703 32.8125 42.5703C35.8594 42.5703 36.0938 39.2891 34.9219 38.1172ZM11.7188 47.2578C12.3047 45.6172 14.5312 43.7422 15.2344 43.1562C13.0078 46.6719 11.7188 47.2578 11.7188 47.2578ZM21.2109 24.875C22.1484 24.875 22.0312 28.625 21.4453 29.6797C20.9766 28.0391 20.9766 24.875 21.2109 24.875ZM18.3984 40.9297C19.5703 38.9375 20.5078 36.5938 21.3281 34.4844C22.2656 36.2422 23.4375 37.6484 24.8438 38.5859C22.3828 39.1719 20.2734 40.1094 18.3984 40.9297ZM33.75 40.3438C33.75 40.3438 33.1641 41.0469 29.4141 39.4062C33.5156 39.0547 34.2188 39.9922 33.75 40.3438Z" fill="#333333"/>
                      </svg>

                  </div>
                
            </div>
          </div>
        </div>
        
      </section>

      <section className="py-2">
                <div className="container sm:p-10 p-4 sm:pl-[14rem] grid sm:grid-cols-2 grid-cols-1 justify-between gap-6">
                    <div className="w-2/2 flex flex-col gap-6" data-aos="zoom-in-right" data-aos-duration="1500">
                    <h1 className="text-[30px] font-bold font-serif">General <span className="text-[#FF7000]">Questions</span></h1>
                        <div className="bg-[#FF7000] h-1 w-10"></div>
                        <p className="text-sm font-normal">
                            Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sit. <br />
                            <br />
                            
                        </p>
                      <div className=" gap-2 flex flex-col">
                          {accrodionData.map( (data:any, index:any) =>{
                              return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={()=>toggle(index)} />
                          } )}
                      </div>
                    </div>
                </div>
                
            </section>
    </>
  )
}

export default Faq

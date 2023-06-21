import stay from "../images/illustration-stay-productive.png";
import iarrow from "../images/icon-arrow.svg";



const Sec2Component = () => {
  return (
    <section className="flex flex-col items-center px-[1rem] py-[6rem]
                        xl:flex-row xl:px-[4rem] xl:py-[4rem]">
        <div className="w-[90%] xl:w-[50%]">
            <img src={stay} alt="stay" className="w-full"/>
        </div>
        <div className=" text-white pl-[1rem]  flex flex-col justify-center
                        xl:pl-[3rem]">
            <h1 className="h-sec2">Stay productive, wherever you are</h1>
            <p className="p-sec2"> Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                storage needs.
            </p>
            <p className="p-sec2"> Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                attachments required.
            </p>
            <a href="#">
              <span className="border-b pb-[0.5rem] opacity-80">See how Fylo works
              <img src={iarrow} alt="iarrow" className=" inline-block pl-[0.5rem]" />
              </span>
              
            </a>
        </div>
    </section>
  )
}

export default Sec2Component

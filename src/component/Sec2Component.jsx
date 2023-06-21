import stay from "../images/illustration-stay-productive.png";
import iarrow from "../images/icon-arrow.svg";



const Sec2Component = () => {
  return (
    <section className="flex px-[4rem]">
        <div className="w-[50%]">
            <img src={stay} alt="stay" />
        </div>
        <div className="w-50%">
            <h1>Stay productive, wherever you are</h1>
            <p> Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                storage needs.
            </p>
            <p> Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                attachments required.
            </p>
            <a href="#">
              <span>See how Fylo works</span>
              <img src={iarrow} alt="iarrow" />
            </a>
        </div>
    </section>
  )
}

export default Sec2Component

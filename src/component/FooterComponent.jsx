import logo from "../images/logo.svg";
import ilocation from "../images/icon-location.svg";
import iphone from "../images/icon-phone.svg";
import iemail from "../images/icon-email.svg";
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
const FooterComponent = () => {
  return (
    <footer className="bg-[#0b1523] pt-[14rem] pb-[3rem] pl-[2rem]
                        xl:px-[6rem] xl:pt-[10rem]">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>

      <div className="flex flex-col mt-[2rem]
                      xl:flex-row xl:justify-between xl:items-start">
        <section className="flex ">
            <div className="div-img-footer"><img src={ilocation} alt="ilocation" /></div>
            <p className="p-footer"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua
            </p>
        </section>
        <section>
           <section className="flex ">
              <div className="div-img-footer"><img src={iphone} alt="iphone" /></div>
              <p className="p-footer">+1-543-123-4567</p>
           </section>
           <section className="flex ">
              <div className="div-img-footer"><img src={iemail} alt="iemail" /></div>
              <p className="p-footer">example@fylo.com</p>
           </section>
        </section>
        <ul className="mt-[3rem] xl:mt-0">
          <li className="li-a-footer"><a href="#" className="a-footer">About Us</a></li>
          <li className="li-a-footer"><a href="#" className="a-footer">Jobs</a></li>
          <li className="li-a-footer"><a href="#" className="a-footer">Press</a></li>
          <li className="li-a-footer"><a href="#" className="a-footer">Blog</a></li>
        </ul>
        <ul  className="mt-[2rem] xl:mt-0">
          <li className="li-a-footer"><a href="#" className="a-footer">Contact Us</a></li>
          <li className="li-a-footer"><a href="#" className="a-footer">Terms</a></li>
          <li className="li-a-footer"><a href="#" className="a-footer">Privacy</a></li>
        </ul>
        <section className="flex justify-center mt-[2rem] xl:justify-normal xl:mt-0">
          <div className="i-footer"><FaFacebookF/></div>
          <div className="i-footer"><FaTwitter/></div>
          <div className="i-footer"><FaInstagram/></div>
        </section>
      </div>
      
      
     
    </footer>
  )
}

export default FooterComponent

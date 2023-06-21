import intro from "../images/illustration-intro.png";
import bgcuvy_desktop from "../images/bg-curvy-desktop.svg";
import bgcuvy_mobile from "../images/bg-curvy-mobile.svg";



const HeaderComponent = () => {
  return (
    <header className="bgc-intro-email flex flex-col items-center w-full relative">
        <div className="z-[2] w-[90%] text-center xl:pb-[11rem] flex flex-col items-center
                        xl:w-[50%]">
          <img src={intro} alt="intro" className=""/>
          <h1 className=" font-fontRaleway font-bold text-white text-[1.5rem]
                        xl:text-[2.5rem] my-[2rem]">All your files in one secure location, accessible anywhere.</h1>
          <p className=" font-fontRaleway text-white max-w-[496px]
                          mb-[2rem]"> Fylo stores all your most important files in one secure location. Access them wherever 
              you need, share and collaborate with friends family, and co-workers.
          </p>
          <button className="btn-header">Get Started</button>
        </div>
        <div className="z-[1] absolute w-full  bottom-0">
          <img src={bgcuvy_desktop} alt="bgcuvy_desktop" className="hidden xl:block w-full"/>
          <img src={bgcuvy_mobile} alt="bgcuvy_mobile" className="block w-full xl:hidden"/>
          <div className="bg-[#181f2a] w-full h-[15rem] xl:hidden">

          </div>
        </div>
    </header>
  )
}

export default HeaderComponent

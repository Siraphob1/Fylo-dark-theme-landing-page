import { useState } from "react";
import quote from "../images/bg-quotes.png";
import propfile1 from "../images/profile-1.jpg";
import propfile2 from "../images/profile-2.jpg";
import propfile3 from "../images/profile-3.jpg";



const Sec3Component = () => {
  const [email,setEmail] = useState('');
  const [loginsuccess,setLoginsuccess] = useState(true);

  
  
  const data = [
    {
      paragraph:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has      become a well-oiled collaboration machine.',
      profile:propfile1,
      name:'Satish Patel',
      position:'Founder & CEO, Huddle'
    },
    {
      paragraph:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has      become a well-oiled collaboration machine.',
      profile:propfile2,
      name:'Bruce McKenzie',
      position:'Founder & CEO, Huddle'
    },
    {
      paragraph:'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has      become a well-oiled collaboration machine.',
      profile:propfile3,
      name:'Iva Boyd',
      position:'Founder & CEO, Huddle'
    }
  ]

  const Validate=(event)=>{
    event.preventDefault()
      let mailformat = /\w+@\w{3,}\.com$/;
      
      if(mailformat.test(email)){
        setLoginsuccess(true);
        setEmail('');
        return;
      }      

      setLoginsuccess(false);
    
  }
  const ChangeInput =(e)=>{
    setEmail(e.target.value);
  }

  return (
    <section className="pt-[4rem] pb-[20rem] px-[2rem]  relative 
                        xl:px-[6rem]">
      <section className="flex flex-col items-center  relative
                          xl:flex-row xl:justify-between">
        {data.map((element,index)=>{
            return <section key={index} className={index === 0 ?"relative" :""}>
                      <img src={quote} alt="" className={index ===0 ?"z-[0] absolute w-[20px] h-auto -top-[1rem] left-[4px]  xl:w-[55px] xl:h-[45px]  xl:-top-[2rem] xl:-left-[0.5rem]" 
                                                                    :" hidden"}/>
                      <div className="card-sec3">
                          <p className=" font-fontOpenSans text-[11px] xl:text-[1rem]">{element.paragraph}</p>
                          <div className="mt-[2rem] flex items-center">
                            <img src={element.profile} alt={element.profile} className="profile-sec3"/>
                            <div className="flex flex-col ml-[1rem]">
                              <span className=" font-fontOpenSans font-bold text-[10px] xl:text-[14px]">{element.name}</span>
                              <span className=" font-fontRaleway text-[8px] xl:text-[10px]">{element.position}</span>
                            </div>
                          </div>
                      </div>
                  </section>
        })}
      </section>
      <section className="cardb-sec3">
          <h1 className="cardb-h-sec3">Get early access today</h1>
          <p className="cardb-p-sec3"> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
              questions, our support team would be happy to help you.
          </p>
        
          <form onSubmit={Validate} className="flex flex-col items-center xl:flex-row xl:justify-center">
            <div className=" relative">
              <input type="text" placeholder="email@example.com" className="cardb-input-sec3 " value={email} onChange={ChangeInput} />
              <div className={`${loginsuccess   ?'hidden '
                                                :'suggest-sec3'}`}>
                Please enter a valid email address
              </div>
            </div>
            <button type="submit" className="btn-header px-[4rem] py-[0.8rem] w-[280px] xl:w-auto">Get Started For Free</button>
          </form>
      </section>
    </section>
  )
}

export default Sec3Component

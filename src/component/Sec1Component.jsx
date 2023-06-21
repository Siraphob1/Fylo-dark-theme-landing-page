import iaccess from "../images/icon-access-anywhere.svg";
import isecurity from "../images/icon-security.svg";
import icollab from "../images/icon-collaboration.svg";
import iany from "../images/icon-any-file.svg";



const Sec1Component = () => {   

  return (
    <section className="
                        xl:px-[15rem]  ">
        <section className="sec-sec1">
            <section className="card-sec1">
                <img src={iaccess} alt="iaccess" />
                <h1 className="h-card-sec1">Access your files, anywhere</h1>
                <p className="p-card-sec1">The ability to use a smartphone, tablet, or computer to access your account means your            files follow you everywhere.
                </p>
            </section>
            <section className="card-sec1">
                <img src={isecurity} alt="isecurity" />
                <h1 className="h-card-sec1">Security you can trust</h1>
                <p className="p-card-sec1">2-factor authentication and user-controlled encryption are just a couple of the security            features we allow to help secure your files.
                </p>
            </section>
        </section>
        <section  className="sec-sec1">
            <section className="card-sec1">
                <img src={icollab} alt="icollab" />
                <h1 className="h-card-sec1">Real-time collaboration</h1>
                <p className="p-card-sec1">Securely share files and folders with friends, family and colleagues for live collaboration.            No email attachments required.
                </p>
            </section>
            <section className="card-sec1">
                <img src={iany}alt="iany" />
                <h1 className="h-card-sec1">Store any type of file</h1>
                <p className="p-card-sec1">Whether you&apos;re sharing holidays photos or work documents, Fylo has you covered allowing for all            file types to be securely stored and shared.
                </p>
            </section>
        </section>
    </section>
  )
}

export default Sec1Component

import MetaData from "../containers/MetaData"
import { FaTwitter } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



const HomePage = () => {
  return (
    <>
    <MetaData title="Pushpendra's Portfolio" />
    <div>
      <section className="h-[100vh] w-[100vw] flex flex-col justify-center items-center ">
        <h1 className="text-[5rem] font-kanit " >Hey, I&apos;m Pushpendra ;) </h1>
        <p className="mt-[1rem]">I&apos;m a software engineer with my passion in creating products and making scalable solutions</p>
        <div className="mt-[4rem] flex gap-[2rem] " >
          <a href="https://twitter.com/PushpendraPal_" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
          <a href="https://www.linkedin.com/in/pushpendra-pal100/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30} /></a>
          <a href="https://medium.com/@pushpendrapal_" target="_blank" rel="noopener noreferrer"><FaMediumM size={30} /></a>
          <a href="https://github.com/Pushpendra100" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        </div>
      </section>

    </div>
    </>
  )
}

export default HomePage

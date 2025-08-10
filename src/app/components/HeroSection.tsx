import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LuDownload } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="container mx-auto lg:px-4 mt-20">
      <div className=" md:grid md:grid-cols-2 md:items-center gap-[30px]">
        <div>
          <h3 className="text-center lg:text-left text-secondary-color text-xl md:text-2xl font-medium mb-2 text-gray-600 dark:text-gray-400">
            Hi, I am
            <span className="font-semibold text-blue-500 text-2xl border-b-4 border-gray-300 ml-2">Tomal Hossain</span>
          </h3>

          <h1 className=" text-center lg:text-left text-blue-600 dark:text-blue-400 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Full Stack Web <br />
            Developer
          </h1>

          <div className="flex md:hidden justify-center items-center my-[30px]">
            <div className="w-full max-w-md opacity-100">
              <div className="relative">
                {/* Gradient background with rotation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/20 to-gray/5 rounded-2xl rotate-[8.57718deg]" />

                {/* Main code card */}
                <div className="relative bg-background/60 border border-gray-200 p-6 rounded-2xl shadow-sm shadow-gray-200">
                  {/* Window controls */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-gray-500">developer.js</div>
                  </div>

                  {/* Code content */}
                  <div className="space-y-2 font-mono text-sm leading-relaxed">
                    <div className="text-gray-500">{"// Software Engineer & Full-Stack Developer"}</div>
                    <div>
                      <span className="text-pink-600">const</span>{' '}
                      <span className="text-blue-600">developer</span>{' '}
                      <span className="text-gray-500">=</span>{' '}
                      <span className="text-orange-500">{'{'}</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-purple-600">name</span><span className="text-gray-500">:</span>{' '}
                      <span className="text-green-600">'Tomal Hossain'</span><span className="text-gray-500">,</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-purple-600">location</span><span className="text-gray-500">:</span>{' '}
                      <span className="text-green-600">'Bangladesh'</span><span className="text-gray-500">,</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-purple-600">skills</span><span className="text-gray-500">:</span>{' '}
                      <span className="text-orange-500">[</span>
                      <span className="text-green-600">'React'</span><span className="text-gray-500">,</span>{' '}
                      <span className="text-green-600">'Next.js'</span><span className="text-gray-500">,</span>{' '}
                      <span className="text-green-600">'Node.js'</span><span className="text-gray-500">,</span>{' '}
                      <span className="text-green-600">'Tailwind'</span><span className="text-gray-500">,</span>{' '}
                      <span className="text-orange-500">]</span><span className="text-gray-500">,</span>
                    </div>



                    <div className="pl-6">
                      <span className="text-purple-600">focuses</span><span className="text-gray-500">:</span>{' '}
                      <span className="text-orange-500">[</span>
                      <span className="text-green-600">'Performance'</span><span className="text-gray-500">,</span>{' '}
                      <span className="text-green-600">'UI/UX'</span><span className="text-gray-500">,</span>{' '}
                      <span className="text-green-600">'SEO'</span>
                      <span className="text-orange-500">]</span><span className="text-gray-500">,</span>
                    </div>

                    <div className="pl-6">
                      <span className="text-purple-600">learning</span><span className="text-gray-500">:</span>{' '}
                      <span className="text-green-600">'AI Integration, DevOps'</span><span className="text-gray-500">,</span>
                    </div>



                    <div>
                      <span className="text-orange-500">{'}'}</span><span className="text-gray-500">;</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <p className="text-xl text-center lg:text-left  leading-[1.5] text-gray-600 font-medium  max-w-[540px]">
            I break down complex user experience problems to create
            integrity focussed solutions that connect billions of people
          </p>
          {/* action and social */}
          <div className="justify-center lg:justify-start flex items-center  gap-[30px] lg:gap-[25px] mt-5 flex-wrap lg:flex-nowrap md:mt-[30px] lg:mt-[50px]">
            <div>
              <a href="/cv.pdf" className="text-[15px] flex items-center justify-center font-bold text-primary-color hover:text-white capitalize py-[17px] px-[35px] bg-transparent hover:bg-blue-500 rounded-full leading-[1] border border-blue-500 text-nowrap tracking-[1px]">
                <span>Download CV</span>
                <LuDownload className="font-bold ml-0.5 text-[17px]" />

              </a>
            </div>
            <div>
              <ul className="flex gap-x-5">
                <li>
                  <a href="https://wa.me/+8801768447320" className="text-green-500 hover:text-white border border-blue-500 w-[35px] h-[35px] rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-green-500 hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full">
                    <IoLogoWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/smtomalhossain/" className="text-blue-500 hover:text-white border border-blue-500 w-[35px] h-[35px] rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-blue-500 hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/smtomalhossain/" className="text-blue-500 hover:text-white border border-blue-500 w-[35px] h-[35px] rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-blue-500 hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/smtomalhossain" className="text-black hover:text-white border border-blue-500 w-[35px] h-[35px] rounded-full flex items-center justify-center overflow-hidden relative z-0 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-full after:h-full after:scale-0 after:bg-black hover:after:scale-105 after:transition-all after:duration-300 after:z-[-1] after:rounded-full">
                    <BsGithub />

                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center relative after:absolute after:bottom-0 after:left-0 after:w-[220px] after:h-[220px] after:blur-[150px] after:rounded-[50%] after:bg-gradient-circle after:-z-[1] after:-mt-[5%] after:-mr-[5%]">
          <div className="w-full max-w-md opacity-100">
            <div className="relative">
              {/* Gradient background with rotation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/20 to-gray/5 rounded-2xl rotate-[8.57718deg]" />

              {/* Main code card */}
              <div className="relative bg-background/60 border border-gray-200 p-15 rounded-2xl shadow-sm shadow-gray-200">
                {/* Window controls */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-gray-500">developer.js</div>
                </div>

                {/* Code content */}
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-gray-500">{"// Software Engineer"}</div>
                  <div>
                    <span className="text-pink-600">const</span>{' '}
                    <span className="text-blue-600">developer</span>{' '}
                    <span className="text-gray-500">=</span>{' '}
                    <span className="text-orange-500">{'{'}</span>
                  </div>
                  <div className="pl-6 opacity-100">
                    <span className="text-purple-600">name</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-green-600">'Tomal Hossain'</span>
                    <span className="text-gray-500">,</span>
                  </div>
                  <div className="pl-6">
                    <span className="text-purple-600">location</span><span className="text-gray-500">:</span>{' '}
                    <span className="text-green-600">'Bangladesh'</span><span className="text-gray-500">,</span>
                  </div>
                  <div className="pl-6 opacity-100">
                    <span className="text-purple-600">skills</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-orange-500">[</span>
                    <span className="text-green-600">'React'</span>
                    <span className="text-gray-500">,</span>{' '}
                    <span className="text-green-600">'Next.js'</span>
                    <span className="text-gray-500">,</span>{' '}
                    <span className="text-green-600">'Node.js'</span>
                    <span className="text-gray-500">,</span>{' '}
                    <span className="text-green-600">'Tailwind'</span>
                    <span className="text-orange-500">]</span>
                    <span className="text-gray-500">,</span>
                  </div>
                  <div className="pl-6">
                    <span className="text-purple-600">focuses</span><span className="text-gray-500">:</span>{' '}
                    <span className="text-orange-500">[</span>
                    <span className="text-green-600">'Performance'</span><span className="text-gray-500">,</span>{' '}
                    <span className="text-green-600">'UI/UX'</span><span className="text-gray-500">,</span>{' '}
                    <span className="text-green-600">'SEO'</span>
                    <span className="text-orange-500">]</span><span className="text-gray-500">,</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-purple-600">learning</span><span className="text-gray-500">:</span>{' '}
                    <span className="text-green-600">'AI Integration, DevOps'</span><span className="text-gray-500">,</span>
                  </div>
                  <div>
                    <span className="text-orange-500">{'}'}</span>
                    <span className="text-gray-500">;</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
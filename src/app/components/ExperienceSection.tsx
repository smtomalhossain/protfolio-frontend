import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="mx-auto w-full px-3 mt-10 sm:px-3.75 
              max-w-[540px] 
              sm:max-w-[540px] 
              md:max-w-[720px] 
              lg:max-w-[960px] 
              xl:max-w-[1140px] 
              2xl:max-w-[1320px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-[30px] text-black">

        {/* Years of Experience */}
        <div className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-[15px]">
          <div className="number text-[45px] md:text-[55px] xl:text-[64px] font-medium">
            <span className="!font-sora font-bold tracking-[0.04em]">4+</span>
          </div>
          <div className="text text-center sm:text-left">
            Years of <br /> Experience
          </div>
        </div>

        {/* Project Completed */}
        <div className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-[15px]">
          <div className="number text-[45px] md:text-[55px] xl:text-[64px] font-medium">
            <span className="!font-sora font-bold tracking-[0.04em]">10+</span>
          </div>
          <div className="text text-center sm:text-left">
            Project <br /> Completed
          </div>
        </div>

        {/* Happy Clients */}
        <div className="funfact-item flex flex-wrap  sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-[15px]">
          <div className="number text-[45px] md:text-[55px] xl:text-[64px] font-medium">
            <span className="!font-sora font-bold tracking-[0.04em]">99%</span>
          </div>
          <div className="text text-center sm:text-left">
            Happy <br /> Clients
          </div>
        </div>

        {/* Awards or other stat */}
        <div className="funfact-item flex flex-wrap sm:flex-nowrap flex-col sm:flex-row justify-center lg:justify-start items-center gap-[15px]">
          <div className="number text-[45px] md:text-[55px] xl:text-[64px] font-medium">
            <span className="!font-sora font-bold tracking-[0.04em]">2</span>
          </div>
          <div className="text text-center sm:text-left">
            Awards <br /> Received
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceSection;

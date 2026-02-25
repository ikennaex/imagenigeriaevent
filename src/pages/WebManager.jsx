import React from "react";

const WebManager = () => {
  return (
    <section className="bg-white py-20 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* CEO Image */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <div className="overflow-hidden shadow-2xl">
            <img
              src="/images/web-manager.jpeg"
              alt="Ini Williams Brown"
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* CEO Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">
            Ini Williams Brown
          </h2>
          <p className="text-xl text-gray-600 italic font-medium">
            Social Media Strategist and Website Manager
          </p>

          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Ini Williams Brown is the Social Media Strategist and Website
              Manager for NTIAC 2026, where he leads digital strategy, online
              engagement, and content coordination across platforms.  
            </p>
            <p>
              He is
              responsible for shaping the initiative’s digital presence and
              ensuring effective communication with tertiary art students
              nationwide. He is a graduate of the University of Nigeria, holding
              a degree in Mechanical Engineering.
            </p>
            <p>
              His technical background
              informs his structured and analytical approach to digital systems
              and strategy execution. With experience in art curation and
              creative enterprise management, Ini combines technical precision
              with creative insight to strengthen NTIAC’s national visibility
              and outreach.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebManager;

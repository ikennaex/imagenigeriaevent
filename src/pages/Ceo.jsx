import React from "react";

const Ceo = () => {
  return (
    <section className="bg-white py-20 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        
        {/* CEO Image */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <div className="overflow-hidden shadow-2xl">
            <img
              src="/images/ceo.jpeg"
              alt="Benjamin Peters"
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* CEO Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">
            Benjamin Peters
          </h2>
          <p className="text-xl text-gray-600 italic font-medium">
            MD / CEO, IMAGE NIGERIA EVENT
          </p>

          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Benjamin Peters is the MD/CEO of IMAGE NIGERIA EVENT, an event
              consultant and promoter with decades of experience creating,
              developing, and organizing strategic events of national and
              international relevance. His work projects and celebrates Nigeria
              not just as a country but as a brand.
            </p>
            <p>
              He holds a B.Sc. in Sociology and Anthropology from the University
              of Nigeria, Nsukka (UNN), and an M.Sc. in Advertising and Public
              Relations. Over the past two decades, he has worked in television,
              radio broadcasting, and electronic media marketing.
            </p>
            <p>
              Formerly the General Manager of DBN Television for five years and
              a media consultant to several private radio and TV stations across
              Nigeria, Benjamin is a strategic creative thinker and a prominent
              player in Nigeria’s Creative Economy. He currently serves as CEO of
              Nigeria’s indigenous multi-channel online TV station, TV NIGERIA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;
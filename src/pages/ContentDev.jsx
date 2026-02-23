import React from "react";

const ContentDev = () => {
  return (
    <section className="bg-white py-20 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <div className="overflow-hidden shadow-2xl">
            <img
              src="/images/content-developer.jpeg"
              alt="Babafunsho Adekunle - Marketing / Media Content Developer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-10">

          {/* Header */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">
              Babafunsho Adekunle
            </h2>
            <p className="text-xl text-gray-600 italic mt-3">
              Marketing / Media Content Developer
            </p>
          </div>

          {/* Profile Summary */}
          <div className="space-y-3">
            {/* <h3 className="text-2xl font-bold text-black">Profile</h3> */}
            <p className="text-gray-700 leading-relaxed">
              Babafunsho Adekunle is a Marketing / Media Content Developer with
              experience that spans over two decades.
            </p>
          </div>

          {/* Career Experience */}
          <div className="space-y-3">
            {/* <h3 className="text-2xl font-bold text-black">Career Experience</h3> */}
            <p className="text-gray-700 leading-relaxed">
              He was privileged to be under the tutelage of veteran ace broadcaster 
              and speech communicationist Mr. Soni Irabor of the popular television 
              talk show "Soni Irabor Live" (SIL) on Africa Independent Television (AIT) 
              in the early 2000s.
            </p>
            <p className="text-gray-700 leading-relaxed">
              He worked as a Media / Research Executive and was symbolic in the 
              successful merger between Standard Trust Bank and United Bank for Africa in 2005.
            </p>
            <p className="text-gray-700 leading-relaxed">
              He has worked both in the print and electronic media in Lagos, Kaduna, 
              and the Federal Capital Territory, Abuja.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            {/* <h3 className="text-2xl font-bold text-black">Education & Certification</h3> */}
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>B.Sc in Mathematics – University of Jos</li>
              <li>Workshop Certificate in Branding & Public Relations – Lagos Business School</li>
            </ul>
          </div>

          {/* Current Role */}
          <div className="space-y-3">
            {/* <h3 className="text-2xl font-bold text-black">Current Role</h3> */}
            <p className="text-gray-700 leading-relaxed">
              Currently serves as a Media Marketing Consultant with Image Nigeria Event.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentDev;
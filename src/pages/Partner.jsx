import React from "react";

const Partner = () => {
  return (
    <section className="bg-white py-20 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* CEO Image */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <div className="overflow-hidden shadow-2xl">
            <img
              src="/images/strategic.jpeg"
              alt="Adeola Balogun, Ph.D"
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* CEO Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">
            Adeola Balogun, Ph.D
          </h2>
          <p className="text-xl text-gray-600 italic font-medium">
            STRATEGIC CONSULTANT NTIAC PROJECT
          </p>

          <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
            <p>
              Adeola Balogun, Ph.D., is a Nigerian sculptor and scholar whose
              practice seamlessly integrates an active studio career with
              teaching at Nigeria's premier tertiary institution, Yaba College
              of Technology.
            </p>
            <p>
              He trained initially at Yaba College of Technology, specializing
              in Sculpture, and later earned a Master of Fine Art (MFA) in
              Sculpture from the University of Benin, Benin City, Edo State. He
              obtained his Ph.D. in Sculpture (Studio Practice) from Delta State
              University, Abraka, Delta State.
            </p>
            <p>
              Balogun's artistic practice transcends the conventional boundaries
              of sculpture, extending into broader territories of the visual
              arts. Central to his work is an uncanny ability to transform
              mundane and discarded materials—objects that have seemingly
              exhausted their utilitarian value—into works of compelling
              aesthetic presence and layered symbolic meaning. Through this
              process of transformation, his works invite contemplation on
              consumerism, memory, and human existence.
            </p>
            <p>
              Adeola Balogun has held fourteen solo exhibitions, participated in
              numerous group exhibitions, and received several awards. He has
              also taken part in conferences and art residencies within and
              outside Nigeria, often interrogating materials and discards
              peculiar to his host communities during such residencies. He has
              executed major public and institutionally based monuments in
              Nigerian and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;

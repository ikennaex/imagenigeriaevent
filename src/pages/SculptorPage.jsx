import React from "react";

const SculptorPage = () => {
  return (
    <section className="bg-white py-20 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <div className="overflow-hidden shadow-2xl">
            <img
              src="/images/sculptor.png"
              alt="Adenle John Oyewole"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-10">

          {/* Header */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black">
              Adenle John Oyewole
            </h2>
            <p className="text-xl text-gray-600 italic mt-3">
              Sculpture, Art Education, Fellow of Art in Medicine
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-black">Education</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>BA.Ed. (1994) – Adeyemi College of Education, Ondo (OAU) – Sculpture</li>
              <li>MA (2007) – Art Education, University of Nigeria, Nsukka</li>
              <li>PhD (2014) – Art Education, University of Nigeria, Nsukka</li>
            </ul>
          </div>

          {/* Career */}
          <div className="space-y-3">
            {/* <h3 className="text-2xl font-bold text-black">Career</h3> */}
            <p className="text-gray-700 leading-relaxed">
              Began teaching career in 1986 as an elementary school teacher.
              Lectured at the Department of Fine and Applied Arts, Federal College of Education, Osiele, Abeokuta (1996–2016).
              Joined the University of Lagos in 2016 and is currently the Head, Department of Fine and Applied Arts, University of Lagos, Akoka.
            </p>
          </div>

          {/* Artistic Practice */}
          <div className="space-y-3">
            {/* <h3 className="text-2xl font-bold text-black">Artistic Practice</h3> */}
            <p className="text-gray-700 leading-relaxed">
              A sculptor and multimedia artist who embraces GOING-GREEN, researching solid wastes (degradable and non-degradable).
              Masters reusing, recycling, and redirecting waste materials to reduce environmental hazards.
              Works with plastic, wood, and metal. A leading plastic waste upcycling artist in Nigeria.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a Traditional Artist, creates realistic aesthetic works.
              As an Egalitarian Artist, addresses social justice, mental health, and socio-political themes.
              As a Progressive Artist, pushes boundaries of experimentation and recycling.
            </p>
          </div>

          {/* Leadership & Membership */}
          <div className="space-y-3">
            {/* <h3 className="text-2xl font-bold text-black">Leadership & Membership</h3> */}
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Vice President, Africa Art Association (AfrAA)</li>
              <li>Member, Society of Nigerian Artists (SNA)</li>
              <li>Member, Sculptors’ Association of Nigeria (ScAN)</li>
              <li>Chairman, Origami Society Nigeria</li>
              <li>Fellow, Arts in Medicine (AIMF)</li>
            </ul>
          </div>

          {/* Research & Mental Health Work */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-black">Research & Mental Health Engagement</h3>
            <p className="text-gray-700 leading-relaxed">
              Doctoral research focused on the facilitatory roles of art in mental health.
              Engages patients in hospitals, hospices, and orphanages through creative activities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Active in Origami Therapy initiatives, including World Mental Health Day challenges and workshops for patients and caregivers.
              Research includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Origami Therapy Challenge: Impact on Children and Youths During Covid-19</li>
              <li>The Artists in Pandemic: Artistic Responses to Covid-19 in Nigeria</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Leads creative engagement programs for elderly care, dementia support,
              caregiver training, and brain health equity using origami, performing arts, and digital technology including Virtual Reality.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-black">Contact</h3>
            <p className="text-gray-700">
              Email: adenlejohn2022gmail.com, jadenle@unilag.edu.ng
              <br />
              Phone: 08033184235, 08150769028
              <br />
              Links: https://www.artwanted.com  http://dekingsarts.blogspot.com  http://johnadenle.blogspot.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SculptorPage;
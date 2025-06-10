import AboutIntro from "@/components/pages/about-us/AboutIntro";
import AboutUsBanner from "@/components/pages/about-us/AboutUsBanner";
import OurMission from "@/components/pages/about-us/OurMission";
import OurValues from "@/components/pages/about-us/OurValues";
import Image from "next/image";
import React from "react";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Dr. Nay Nyi Nyi Lwin",
      role: "Managing Director",
      image: "/profile/dr_nyi.jpg",
      bio: "Michael oversees all charitable programs with expertise in community development.",
    },
    {
      name: "Dr. Kaung Myat Sithu",
      role: "General Manager",
      image: "/profile/dr_kaung.png",
      bio: "With over 15 years in nonprofit leadership, Sarah founded Charities in 2010 to create systemic change.",
    },

    {
      name: "Dr. Thandar Phyo",
      role: "Specialist Medical Officer",
      image: "/profile/dr_thandar.png",
      bio: "Aisha manages our 1,200+ volunteers and community partnerships.",
    },
    {
      name: "Dr. Win Naing",
      role: "Medical Officer",
      image: "/profile/dr_win.png",
      bio: "David ensures financial transparency and maximizes donor impact.",
    },
  ];

  const values = [
    {
      title: "Sustainability",
      icon: "❤️",
      description:
        "We build a sustainable healthcare model that ensures long-term well-being through responsible resource management and strategic partnerships.",
    },
    {
      title: "Learning",
      icon: "🔒",
      description:
        "We foster a culture of continuous learning, empowering our team to stay at the forefront of medical advancements for better patient care.",
    },
    {
      title: "Innovation",
      icon: "✨",
      description:
        "We measure success by lives changed, not just dollars spent.",
    },
    {
      title: "Leadership",
      icon: "👥",
      description:
        "We lead with integrity, setting high standards and inspiring excellence through transparency, vision, and decisive action.",
    },
    {
      title: "Collaboration/ Teamwork",
      icon: "💡",
      description:
        "We work seamlessly across teams, partners, and communities, leveraging collective expertise to deliver impactful healthcare solutions.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutUsBanner />

      <section className=" bg-primary py-6 md:py-10">
        <div className="container">
          <Image
            src={"/source/logo_white.png"}
            alt="Logo"
            width={300}
            height={300}
            priority={true}
            className="mx-auto w-[200px] h-auto md:w-[300px]"
          />
        </div>
      </section>

      <AboutIntro />

      <section className=" bg-white md:py-10 shadow">
        <div className=" container mx-auto flex justify-center items-center gap-5">
          <div>
            <Image
              src="/source/mm_logo.png"
              width={400}
              height={400}
              alt="logo"
              className=""
            />
          </div>
          <div>
            <Image
              src="/source/UCLA.png"
              width={500}
              height={400}
              alt="logo"
              className=""
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the leading self-sustainable healthcare social enterprise
                in Myanmar, transforming lives through innovative and
                comprehensive healthcare solutions
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To empower underserved communities through sustainable programs
                in education, nutrition, and economic development while
                fostering a culture of service and philanthropy.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* our vision */}
      <section className=" py-16">
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className=" text-primary">Vision</span>
          </h2>
        </div>
        <div className=" container grid grid-cols-1 xl:grid-cols-2">
          <div className=" bg-primary text-white p-7">
            <h3 className="text-3xl font-semibold italic">
              " Providing Quality Healthcare with Affordable Solutions "
            </h3>
          </div>
          <div className=" p-7">
            <p className=" text-xl font-medium">
              To be the leading{" "}
              <span className=" text-3xl text-primary">self-sustainable</span>{" "}
              healthcare social enterprise in Myanmar, transforming lives
              through <span className=" text-3xl text-primary">innovative</span>{" "}
              and <span className=" text-3xl text-primary">comprehensive</span>{" "}
              healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* our mission  */}
      <OurMission />

      {/* Values */}
      <OurValues />

      {/* Team */}
      <section className="py-16 bg-gray-50" id="our-team">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet The <span className=" text-primary">Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-secondary font-medium my-2">
                    {member.role}
                  </p>
                  {/* <p className="text-gray-600">{member.bio}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether through volunteering, donating, or spreading awareness—your
            support makes our work possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold">
              Volunteer With Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-semibold">
              Meet Our Partners
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "EcoSnap has revolutionized how our school manages waste. The students are more engaged than ever!",
    author: "Jane Doe, Principal at Green Valley High",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "As a student, it’s empowering to see my direct impact on the environment. The rewards system is a great motivator!",
    author: "John Smith, Student Eco-Warrior",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    role: "Founder & CEO",
    bio: "A passionate environmental scientist dedicated to leveraging technology for a sustainable future.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mark Chen",
    role: "Lead Developer",
    bio: "The architect behind EcoSnap’s seamless user experience and powerful features.",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

export default function AboutUs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/2149895783/vector/waste-management-concept-a-man-carrying-trash-bags-with-a-smartphone-and-recycle-bin-graphic.jpg?s=612x612&w=0&k=20&c=z7Q77uOxgnqfktO65d13XRoJH4S7IATv1eIYWgusxbk=)",
        }}
      >
        <div className="text-center p-8 bg-black bg-opacity-50 rounded-xl">
          <h1 className="text-5xl font-extrabold mb-4">Why We Do What We Do</h1>
          <p className="text-xl italic">“One Snap at a Time, One Planet Forever”</p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4 text-center content-hover">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          EcoSnap is more than just a tool — it's a movement. We empower students, communities, and eco-warriors to make sustainable choices by identifying waste, tracking impact, and turning small actions into collective change. We believe that with the right tools, anyone can become an EcoHero.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-5xl mb-2">♻️</p>
            <p className="text-3xl font-bold text-green-600">10,000+</p>
            <p>Items Tracked</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-5xl mb-2">👩‍🏫</p>
            <p className="text-3xl font-bold text-green-600">800+</p>
            <p>Users Educated</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-5xl mb-2">🌎</p>
            <p className="text-3xl font-bold text-green-600">15</p>
            <p>Countries Reached</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white content-hover">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Our Journey</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: "50%"}}></div>
          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-green-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Concept & Ideation</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">The idea for EcoSnap was born out of a desire to make environmental action accessible to everyone.</p>
            </div>
          </div>

          {/* left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Prototype & Development</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Our team of passionate developers and designers brought the vision to life, building a robust and user-friendly app.</p>
            </div>
          </div>
          
          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-green-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Launch & Community Growth</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">EcoSnap launched, and our community of EcoHeroes has been growing ever since, making a real-world impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 content-hover">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group perspective">
              <div className="relative preserve-3d group-hover:rotate-y-180 w-64 h-80 duration-500">
                <div className="absolute backface-hidden w-full h-full">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-green-700 text-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-lg italic text-green-200">{member.role}</p>
                  <p className="mt-4 text-center">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-green-700 text-white content-hover">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="max-w-2xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center px-8">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white" />
                <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center content-hover">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Join Our Mission</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">Become an EcoHero today and start making a tangible difference. Your journey to a greener planet starts with a single snap.</p>
        <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
          Become an EcoHero
        </button>
      </section>
    </div>
  );
}

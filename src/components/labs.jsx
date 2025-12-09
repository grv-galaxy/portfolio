import React from 'react';

// Dummy data for the reviews/testimonials
const reviews = [
  {
    quote:
      "Good professional and good person, I would definitely recommend working with Chris. We worked together on building the frontend of Chatty, and it was a great experience.",
    author: 'Axel Gualda',
    title: 'CEO & Founder at Chatty Analytics',
    avatar: 'https://i.pravatar.cc/150?img=68', // Dummy avatar 1
  },
  {
    quote:
      'Chris captured exactly what we needed for Ambar – a clean, modern landing that reflects our product\'s precision and trust. The process was smooth and professional from start to finish.',
    author: 'Ezequiel Russotto',
    title: 'Founder at Ambar',
    avatar: 'https://i.pravatar.cc/150?img=12', // Dummy avatar 2
  },
  {
    quote:
      'The dedication to detail and commitment to quality were evident throughout the entire project. Highly responsive and delivered above expectations. A true professional.',
    author: 'Sarah Chen',
    title: 'Product Manager at Innovate Corp',
    avatar: 'https://i.pravatar.cc/150?img=4', // Dummy avatar 3
  },
];

// Component for a single review card
const ReviewCard = ({ quote, author, title, avatar }) => {
  return (
    <div className="
      p-8 m-4 w-full max-w-lg min-h-[300px] 
      bg-black/20 text-white 
      rounded-3xl border border-gray-700/50 
      shadow-xl 
      flex flex-col justify-between
      backdrop-blur-sm
    ">
      {/* Review Quote */}
      <blockquote className="text-xl italic mb-10 text-gray-200">
        “{quote}”
      </blockquote>

      {/* Author and Title */}
      <div className="pt-6 border-t border-gray-800/80 flex items-center">
        <img
          src={avatar}
          alt={`Avatar of ${author}`}
          className="w-12 h-12 rounded-full mr-4 border-2 border-gray-600 object-cover"
        />
        <div>
          <p className="text-lg font-semibold">{author}</p>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};


const Labs = () => {
  return (
    // Main Section: Dark Background with some space/padding
    <section className=" min-h-screen py-32 px-4 sm:px-10 lg:px-20 relative overflow-hidden">
      
      {/* Optional: Add subtle background noise/texture similar to the image */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Top Button */}
        <div className="flex justify-center mb-24">
          <a
            href="/explore" // Placeholder link
            className="
              px-8 py-3 text-base font-medium 
              text-white border border-white 
              rounded-full 
              uppercase tracking-widest 
              hover:bg-white hover:text-black 
              transition duration-300 
              flex items-center space-x-2
            "
          >
            <span>Explore Labs</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="flex flex-wrap justify-center -m-4">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              quote={review.quote}
              author={review.author}
              title={review.title}
              avatar={review.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Labs;
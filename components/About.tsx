import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
      <h2 className="text-3xl font-bold text-light mb-8 flex items-center">
        <span className="text-accent font-mono text-2xl mr-4">01.</span> About Me
        <span className="h-px bg-gray-700 flex-grow ml-6"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 text-lg space-y-4">
          <p>
            I am a Full Stack Developer with a strong passion 
            for building scalable, efficient, aand user-friendly web 
            applications. I have hands-on experience in  Laravel 11, 
            PHP, JavaScript, React, SQL databases, and agile 
            development methodologies including Scrum, Trello, 
            and Azure DevOps.
          </p>
          <p>
            My focus is on delivering high-quality software solutions 
            that solve real-world problems. I enjoy working on complex 
            backend systems, responsive front-end designs, and 
            integrating tools for data management and automation.
          </p>
          <p>
            When I'm not coding, you can find me exploring new hiking trails, trying out new
            games, or getting lost in a good book.
          </p>
        </div>
        <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
          <div className="absolute -inset-0.5 bg-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <img
              className="rounded-lg w-full h-auto aspect-square object-cover"
              src={new URL('../img/profileimage.jpg', import.meta.url).href}
              alt="Kevin Porras"
            />
            <div className="absolute inset-0 bg-primary/50 group-hover:bg-transparent transition duration-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
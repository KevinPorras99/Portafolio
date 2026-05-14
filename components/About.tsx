import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
      <h2 className="text-3xl font-bold text-light mb-12 flex items-center gap-6">
        <span className="text-accent font-mono text-xl">01.</span>
        About Me
        <span className="h-px bg-tertiary flex-grow"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 text-dark text-base leading-relaxed space-y-4">
          <p>
            I'm a Full Stack / Backend Developer with hands-on experience building and
            shipping production-ready web applications using <span className="text-accent">Laravel 11</span>,{' '}
            <span className="text-accent">PHP 8</span>, and modern JavaScript frameworks.
          </p>
          <p>
            I'm proficient in backend architecture, relational database design, RESTful
            API development, and authentication systems — including{' '}
            <span className="text-accent">Clerk Auth</span>, JWT, and Laravel Sanctum.
            I've integrated third-party services such as{' '}
            <span className="text-accent">Stripe</span> for payments and{' '}
            <span className="text-accent">Supabase</span> as a real-time backend.
          </p>
          <p>
            I'm also comfortable leveraging AI tools — Claude, ChatGPT, and Gemini —
            to accelerate development workflows and prototype solutions faster.
          </p>
          <p>
            When I'm not coding, you can find me on a hiking trail, exploring a new
            game, or getting lost in a good book.
          </p>
        </div>

        <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
          {/* Offset accent border */}
          <div className="absolute inset-0 border-2 border-accent rounded-md translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 z-0"></div>
          <div className="relative z-10">
            <img
              className="rounded-md w-full h-auto aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              src={new URL('../img/profileimage.jpg', import.meta.url).href}
              alt="Kevin Porras"
            />
            <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

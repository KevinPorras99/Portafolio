
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
      <h2 className="text-2xl font-mono text-accent mb-4">05. What's Next?</h2>
      <h3 className="text-4xl md:text-5xl font-bold text-light mb-4">Get In Touch</h3>
      <p className="max-w-2xl mx-auto mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an
        amazing team. My inbox is always open, whether you have a question or just want to say hi, I'll
        do my best to get back to you!
      </p>
      <a href="mailto:kevinporras9906@gmail.com" className="bg-transparent text-accent border border-accent rounded-md px-12 py-4 hover:bg-accent/10 transition-colors duration-300 font-medium text-lg">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;

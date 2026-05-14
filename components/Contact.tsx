import React from 'react';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-32 text-center animate-fade-in-up"
      style={{ animationDelay: '500ms' }}
    >
      <p className="text-accent font-mono mb-4">06. What's Next?</p>
      <h3 className="text-4xl md:text-5xl font-bold text-light mb-6">Get In Touch</h3>
      <p className="max-w-md mx-auto text-dark leading-relaxed mb-10">
        I'm currently open to new opportunities. Whether you have a project idea, a
        question, or just want to say hi — my inbox is always open!
      </p>
      <a
        href="mailto:kevinporras9906@gmail.com"
        className="inline-block px-12 py-4 text-accent border border-accent rounded font-mono text-sm hover:bg-accent/10 transition-colors duration-300"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;

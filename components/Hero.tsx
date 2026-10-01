import { profile } from '../data/profile';

export default function Hero() {
  return <>
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy-wrap">
        <p className="eyebrow">Junior web & full-stack developer</p>
        <h1 id="hero-title">Kevin Porras<span>From interface<br />to database.</span></h1>
        <p className="hero-copy">I build web applications with React, Laravel, and SQL — from managing student grades to tracking shipments.</p>
        <div className="actions">
          <a className="button button-primary" href="#projects">Explore my projects <span aria-hidden="true">↗</span></a>
          <a className="button" href="#contact">Get in touch</a>
          <a className="button" href={profile.resumeUrl} download={profile.resumeFilename}>Download CV (PDF) <span aria-hidden="true">↓</span></a>
        </div>
        <div className="social-links"><a href={profile.github}>GitHub ↗</a><a href={profile.linkedin}>LinkedIn ↗</a></div>
      </div>
      <figure className="portrait"><img src={new URL('../img/profileimage.jpg', import.meta.url).href} alt="Kevin Porras" width="400" height="400" fetchPriority="high" /><figcaption>Kevin Porras <span>Web development</span></figcaption></figure>
    </section>
    <div className="hero-foot"><span>REACT / TYPESCRIPT</span><span>LARAVEL / PHP</span><span>FASTAPI / PYTHON</span><span>MYSQL / POSTGRESQL</span></div>
  </>;
}

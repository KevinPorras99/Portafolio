import { useRef, useState } from 'react';
import { profile } from '../data/profile';

const gmailUrl = 'https://mail.google.com/mail/?' + new URLSearchParams({
  view: 'cm',
  fs: '1',
  to: profile.email,
}).toString();

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  const emailField = useRef<HTMLInputElement>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('Email address copied.');
    } catch {
      emailField.current?.focus();
      emailField.current?.select();
      setCopyStatus('Copy was unavailable. The email address is selected so you can copy it manually.');
    }
  }

  return (
    <section id="contact" tabIndex={-1} className="contact" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">06 / Contact</p>
        <h2 id="contact-title">Let's build something useful.</h2>
        <p>Have a junior web or full-stack opportunity?<br />I'd like to hear about your team.</p>
      </div>
      <div className="contact-options">
        <label className="contact-label" htmlFor="contact-email">Email address</label>
        <input ref={emailField} id="contact-email" className="contact-email" value={profile.email} readOnly />
        <div className="actions contact-actions">
          <a className="button button-primary" href={gmailUrl} target="_blank" rel="noopener noreferrer">Open Gmail <span aria-hidden="true">↗</span><span className="visually-hidden"> (opens in a new tab)</span></a>
          <button className="button" type="button" onClick={copyEmail}>Copy email</button>
        </div>
        <p className="contact-help">Gmail opens in your browser and may ask you to sign in. You can also <a href={'mailto:' + profile.email}>open your email app</a>.</p>
        <p className="copy-status" role="status" aria-live="polite">{copyStatus}</p>
        <div className="social-links">
          <a href={profile.github}>GitHub ↗</a>
          <a href={profile.linkedin}>LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}

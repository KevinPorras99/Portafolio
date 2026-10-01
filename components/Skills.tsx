const groups = [
  { title: 'Frontend', text: 'React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS', context: 'Component-based interfaces in Zentrox and Planet Express.' },
  { title: 'Backend', text: 'PHP, Laravel, Python, FastAPI', context: 'Grade management in Registro Docente and shipment APIs in Planet Express.' },
  { title: 'Databases', text: 'MySQL, PostgreSQL, Supabase', context: 'Relational data for students, shipments, and clinic workflows.' },
  { title: 'Tools', text: 'Git, GitHub, Vite, Azure DevOps', context: 'Version control, frontend builds, and team collaboration.' },
];
export default function Skills() {
  return <section id="skills" tabIndex={-1} className="section" aria-labelledby="skills-title"><div className="section-heading"><div><p className="eyebrow">03 / Toolkit</p><h2 id="skills-title">The tools behind the work.</h2></div></div><div className="skill-grid">{groups.map(group => <article className="skill-group" key={group.title}><h3>{group.title}</h3><p>{group.text}</p><p>{group.context}</p></article>)}</div></section>;
}

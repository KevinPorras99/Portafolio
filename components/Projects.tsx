import { projects } from '../data/projects';
import type { Project } from '../types';

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card" aria-labelledby={project.id + '-title'}>
    {project.image ? <div className="project-visual"><img
      src={import.meta.env.BASE_URL + 'img/optimized/' + project.image}
      alt={project.imageAlt ?? project.title}
      width="960" height="600" loading="lazy" decoding="async"
    /></div> : <div className="project-visual project-art" aria-label="Zentrox typographic illustration">
      <strong aria-hidden="true">&lt; ZENTROX /&gt;</strong><span>Frontend · Retro arcade identity</span>
    </div>}
    <div className="project-body">
      <p className="eyebrow">{project.category}</p>
      <h3 id={project.id + '-title'}>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      <details>
        <summary>Explore {project.title}</summary>
        {project.contribution && <><h4>My contribution</h4><p>{project.contribution}</p></>}
        <h4>Features</h4><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <h4>Architecture</h4><p>{project.architecture}</p>
        <h4>Technical choices</h4><p>{project.decisions}</p>
        <h4>Current limits</h4><p>{project.limitations}</p>
        <h4>Sources</h4><p>{project.evidence}</p>
      </details>
      {(project.repoUrl || project.liveUrl) && <div className="project-links">
        {project.repoUrl && <a href={project.repoUrl} aria-label={'View ' + project.title + ' source code'}>Source code ↗</a>}
        {project.liveUrl && <a href={project.liveUrl} aria-label={'Open ' + project.title + ' demo'}>Live demo ↗</a>}
      </div>}
    </div>
  </article>;
}

export default function Projects() {
  return <section id="projects" tabIndex={-1} className="section" aria-labelledby="projects-title">
    <div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="projects-title">A closer look at what I build.</h2></div><p>Backend workflows, full-stack applications, and interfaces. Explore the code and the choices behind each project.</p></div>
    <div className="project-grid">{projects.filter(project => project.featured).map(project => <ProjectCard key={project.id} project={project} />)}</div>
    <h3 className="more-projects">More work & ongoing projects</h3>
    <div className="project-grid">{projects.filter(project => !project.featured).map(project => <ProjectCard key={project.id} project={project} />)}</div>
  </section>;
}

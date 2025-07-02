import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/ProjectDetail.css';
import registrodocente from '../img/Registrodocente.webp';
import demoImage1 from '../img/registrodocente/Agregarexamen.png';
import demoImage2 from '../img/registrodocente/Asignarestudiantes-cursos.png';
import demoImage3 from '../img/registrodocente/asistencia.png';
import demoImage4 from '../img/registrodocente/Calificacionesparaexamenes.png';
import demoImage5 from '../img/registrodocente/Calificacionesparatrabajocotidiano.png';
import demoImage6 from '../img/registrodocente/conducta.png';

import demoImage7 from '../img/muniticket/Login.png';
import demoImage8 from '../img/muniticket/Registro.png';
import demoImage9 from '../img/muniticket/Crearticket.png';
import demoImage10 from '../img/muniticket/Vertickets.png';
import demoImage11 from '../img/muniticket/reportes.png';
import demoImage12 from '../img/muniticket/perfil.png';

import demoImage13 from '../img/lakersweb/Team.png';
import demoImage14 from '../img/lakersweb/Inicio.png';
import demoImage15 from '../img/lakersweb/Gimnacio.png';
import demoImage16 from '../img/lakersweb/Formulario.png';

import demoImage17 from '../img/pokedex/dashboard.png';
import demoImage18 from '../img/pokedex/details.png';
import demoImage19 from '../img/pokedex/filters.png';
import demoImage20 from '../img/pokedex/filter-active.png';


const projects = [
  {
    id: '1',
    title: 'Registro Docente',
    description: `
      Project Description
Registro Docente is a web application built with Laravel 11 to help teachers manage educational information. This system is focused on providing an intuitive and efficient experience, allowing educators to maintain organized records of student grades, attendance, assignments, and behavior.

The main objective of this project is to offer a flexible solution for both public and private schools, even in environments with limited connectivity.

Key Features
Student Management:

-Register students by grade, section, and institution.
-View, edit, and delete student data through an intuitive interface.

Course Module:

-Register and manage courses.
-Assign students to specific courses.

Student Module:

Centralized registration and management of student information across all academic modules.

Daily Work Module:

-Assign and grade daily classwork tasks.
-Track continuous assessment performance.

Assignments Module:

-Assign and evaluate homework or extra-class activities.
-Manage assignment submissions and grades.

Grades Module:

-View a detailed breakdown of all student grades across categories.
-Generate and deliver grade reports efficiently.

Attendance Module:

-Quick and efficient daily attendance tracking.
-View attendance history by date or student.

Behavior Module:

-Monitor and record student behavior and performance indicators.
-Add comments or conduct notes linked to each student.

Bulk Data Handling:

-Import and export student and academic data via Excel files for streamlined management.

Offline Accessibility:

-Includes a desktop installer allowing the system to be used without internet access.


Technologies Used
This project was developed using modern tools to ensure performance and scalability:

Backend: Laravel 11 (PHP)

Frontend: Bootstrap, HTML, JavaScript, Tailwind, and Blade Templates

Database: MariaDB and MySQL

Other Tools: Bootstrap Studio, Visual Studio Code, XAMPP, and Maatwebsite Excel for file handling

My Role in the Project
As the lead developer, I was responsible for the entire development process — from designing and implementing the database architecture to building the backend logic, frontend interface, and user experience. I handled the full development cycle, ensuring the system was functional, user-friendly, and ready for deployment.
    `,
    image: registrodocente,
    link: 'https://linkproyecto1.com',
    demoImages: [demoImage1, demoImage2, demoImage3, demoImage4, demoImage5, demoImage6]
  },
  {
    id: '2',
    title: 'Muniticket',
    description: `
      Project Description
Muniticket – Technical Support Ticketing System is a web application built with Laravel 11 to optimize the management of technical support requests at the Municipality of San Isidro de Heredia. The main goal of this system is to provide an efficient and centralized solution for handling, tracking, and resolving incidents reported by the various departments within the municipality.

The system is designed to adapt to the specific needs of the institution, enabling organized and transparent ticket management, improving productivity, and reducing response times.

Key Features
Ticket Management:

Ticket creation by users from different departments.

Assignment of tickets to specific technicians based on the type of issue.

Viewing, updating, and closing tickets through a user-friendly interface.

Functional Modules:

Incident Tracking: Logging progress and resolving technical issues.

Custom Categories: Organizing tickets by type of incident (hardware, software, network, etc.).

Notifications: Automated email alerts about changes in ticket status.

Reports and Statistics:

Generation of detailed reports on ticket statuses.

Performance statistics to evaluate response times and the efficiency of the technical team.

Bulk Data Handling:

Import and export of data via Excel files to quickly register and analyze tickets.

Offline Accessibility:

Includes a desktop installer so the system can be used on municipal computers even without an internet connection.

Technologies Used
This project was developed with modern tools to ensure optimal performance, scalability, and maintainability:

Backend: Laravel 11 (PHP)

Frontend: Bootstrap, HTML, JavaScript, Tailwind, and Blade Templates

Database: MariaDB and MySQL

Other Tools: Bootstrap Studio, Visual Studio Code, XAMPP

This project has been completed and is currently in production for the Municipality of San Isidro de Heredia on a local server.
    `,
    image: demoImage7,
    link: 'https://linkproyecto2.com',
    demoImages: [demoImage7, demoImage8, demoImage9, demoImage10, demoImage11, demoImage12]
  },
  {
    id: '3',
    title: 'Lakers Fan Page',
    description: `
      Descripción del proyecto
     Project Description
Lakers Fan Page is a website focused on fans of the Los Angeles Lakers basketball team. This project was developed using HTML5, CSS3, and JavaScript, with the goal of providing up-to-date information about the team, its players, its stadium, and includes a contact form at the bottom of the page for reaching out to the fan community.

My Role in the Project
As the sole developer, I was responsible for the complete design and development of the website. My responsibilities included:

Structuring and coding the layout using semantic HTML5.

Designing and styling the interface with CSS3, ensuring responsive behavior across devices.

Adding interactivity with JavaScript, such as dynamic content updates and form validation.

Creating intuitive navigation and organizing sections for players, stadium information, and team updates.

Implementing a functional contact form to connect users with the Lakers fan group.

This project showcases my ability to develop static yet interactive websites from scratch using core web technologies.
    `,
    image: demoImage13,
    link: 'https://linkproyecto2.com',
    demoImages: [demoImage13, demoImage14, demoImage15, demoImage16]
  },
  {
    id: '4',
    title: 'Pokedex',
    description: `
     Project Description
Pokédex is a web application built with React and powered by Vite, 
designed to provide a complete and interactive experience for exploring all existing Pokémon. 
The project fetches data from a public API PokeAPI to display detailed information about 
every creature in the Pokémon universe.

⚙️ Technologies Used:
React: Core library for building the user interface.

Vite: Build tool for fast development and optimized performance.

JavaScript / JSX: Component logic and DOM management.

CSS / Tailwind / Styled Components (depending on your setup): For component styling.

PokeAPI: Data source for Pokémon information.

Axios or Fetch: To handle HTTP requests.

🎮 Features:
✅ Display a full list of all Pokémon.

🔍 Search by name or Pokédex number.

🧩 Filter by type (water, fire, grass, etc.).

📄 Detailed view for each Pokémon:

Official image.

Type(s).

Abilities.

Base stats.

🌐 Asynchronous data loading with loading and error states.

📱 Responsive design for mobile and desktop.

🚀 Objective:
Deliver a smooth and visually appealing experience for Pokémon fans and developers 
interested in learning how to consume APIs and manage data in modern React applications.
    `,
    link: 'https://kevinporras99.github.io/pokedex-react-app', // Actualizado con el enlace correcto
    demoImages: [demoImage17, demoImage18, demoImage19, demoImage20],
    button: {
        text: 'Visit Pokedex',
        url: 'https://kevinporras99.github.io/pokedex-react-app'
    }
    
}

 
];


const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-images">
        <h3 className="project-title">{project.title}</h3>
        <div className="demo-images">
          {project.demoImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Demo ${index + 1}`}
              className="demo-image"
            />
          ))}
        </div>
      </div>
      <div className="project-content">
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
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


const projects = [
  {
    id: '1',
    title: 'Registro Docente',
    description: `
      Descripción del proyecto

      El Registro Docente es una aplicación web diseñada en Laravel 11 para facilitar a los profesores la administración de información educativa. Este sistema está enfocado en brindar una experiencia intuitiva y eficiente, permitiendo a los docentes llevar un control organizado de calificaciones, asistencia, tareas y comportamiento de los estudiantes.

      El objetivo principal de este proyecto es ofrecer una solución adaptable tanto para escuelas públicas como privadas, incluso en entornos con conectividad limitada.

      Características principales

      Gestión de estudiantes:
      - Registro de estudiantes por grado, sección e institución.
      - Visualización, edición y eliminación de datos directamente desde una interfaz intuitiva.

      Módulos funcionales:
      - Calificaciones: Control de evaluaciones en categorías como trabajo cotidiano, pruebas y tareas.
      - Asistencia: Registro rápido de la asistencia diaria.
      - Conducta: Seguimiento del desempeño y comportamiento de los estudiantes.

      Cargas masivas:
      - Importación y exportación de datos mediante archivos Excel para agilizar la gestión.

      Accesibilidad sin conexión:
      - Implementación de un instalador para que el sistema pueda ser utilizado en computadoras sin acceso a internet.

      Tecnologías utilizadas

      Este proyecto se desarrolló con herramientas modernas para garantizar su rendimiento y escalabilidad:
      - Backend: Laravel 11 (PHP)
      - Frontend: Bootstrap, HTML, JavaScript, Tailwind y Blade Templates
      - Base de datos: MariaDB y MySQL
      - Otras herramientas: Bootstrap Studio, Visual Studio Code, Xampp y Maatwebsite Excel para manejo de archivos.

      Este proyecto continua en desarrollo para Team Steam S.R.L. 
    `,
    image: registrodocente,
    link: 'https://linkproyecto1.com',
    demoImages: [demoImage1, demoImage2, demoImage3, demoImage4, demoImage5, demoImage6]
  },
  {
    id: '2',
    title: 'Muniticket',
    description: `
      Descripción del proyecto

      Muniticket el Sistema de Tickets de Soporte Técnico es una aplicación web diseñada en Laravel 11 para optimizar la gestión de solicitudes de soporte técnico en la Municipalidad de San Isidro de Heredia. Este sistema tiene como objetivo principal brindar una solución eficiente y centralizada para el manejo, seguimiento y resolución de incidencias reportadas por los diferentes departamentos de la municipalidad.

      El sistema está diseñado para adaptarse a las necesidades específicas de la institución, permitiendo una gestión organizada y transparente de los tickets, mejorando así la productividad y reduciendo los tiempos de respuesta.

      Características principales

      Gestión de tickets:
      - Creación de tickets por parte de los usuarios de los diferentes departamentos.
      - Asignación de tickets a técnicos específicos según el tipo de incidencia.
      - Visualización, actualización y cierre de tickets directamente desde una interfaz amigable.

      Módulos funcionales:
      - Seguimiento de incidencias: Registro de avances y resolución de problemas.
      - Categorías personalizadas: Organización de tickets por tipo de incidencia (hardware, software, red, entre otros).
      - Notificaciones: Alertas automáticas por correo electrónico sobre cambios en el estado de los tickets.

      Reportes y estadísticas:
      - Generación de reportes detallados sobre el estado de los tickets.
      - Estadísticas de rendimiento para evaluar tiempos de respuesta y eficiencia del equipo técnico.

      Cargas masivas:
      - Importación y exportación de datos mediante archivos Excel para registrar y analizar tickets rápidamente.

      Accesibilidad sin conexión:
      - Implementación de un instalador para que el sistema pueda ser utilizado en computadoras de la municipalidad, incluso en ausencia de conexión a internet.

      Tecnologías utilizadas

      Este proyecto se desarrolló con herramientas modernas para garantizar un rendimiento óptimo, escalabilidad y facilidad de mantenimiento:
      - Backend: Laravel 11 (PHP)
      - Frontend: Bootstrap, HTML, JavaScript, Tailwind y Blade Templates
      - Base de datos: MariaDB y MySQL
      - Otras herramientas: Bootstrap Studio, Visual Studio Code, Xampp.

      Este proyecto se finalizó y se encuentra en producción para la Municipalidad de San Isidro de Heredia en un servidor local.
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
      Lakers fan page es una página web enfocada en los fanáticos del equipo de baloncesto Los Angeles Lakers. Este proyecto fue desarrollado en HTML5 y CSS3, con el objetivo de brindar información actualizada sobre el equipo, sus jugadores, su estadio y un contacto mediante un formulario al final de la página para contactar con el grupo de fans.
    `,
    image: demoImage13,
    link: 'https://linkproyecto2.com',
    demoImages: [demoImage13, demoImage14, demoImage15, demoImage16]
  },
  // Añade más proyectos aquí
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
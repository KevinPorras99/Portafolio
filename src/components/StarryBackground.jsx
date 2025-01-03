import React, { useEffect, useRef } from 'react';


const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Ajustar tamaño del canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      // 80% de probabilidad de ser blanco
      if (Math.random() < 0.9) {
        return '#FFFFFF';
      }
      // 20% de probabilidad de ser un color aleatorio
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1, // Incrementa el tamaño del radio
      speed: Math.random() * 0.3 + 0.1,
      color: getRandomColor(),
      opacity: Math.random(),
      flickerSpeed: Math.random() * 0.005 + 0.0002, // Ajusta la velocidad de parpadeo para que sea más lenta
    }));

    let shootingStars = [];
    let spaceship = null;

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 10 + 6,
        color: '#FFFFFF',
        angle: Math.random() * Math.PI / 4 + Math.PI / 8,
      });
    };

    const createSpaceship = () => {
      spaceship = {
        x: -100,
        y: Math.random() * canvas.height * 0.5,
        width: 50,
        height: 30,
        speed: Math.random() * 5 + 2,
      };
    };

    const drawShootingStars = () => {
      shootingStars.forEach((shootingStar, index) => {
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x - shootingStar.length * Math.cos(shootingStar.angle),
          shootingStar.y - shootingStar.length * Math.sin(shootingStar.angle)
        );
        ctx.strokeStyle = shootingStar.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        shootingStar.x += shootingStar.speed * Math.cos(shootingStar.angle);
        shootingStar.y += shootingStar.speed * Math.sin(shootingStar.angle);

        if (
          shootingStar.x > canvas.width ||
          shootingStar.y > canvas.height ||
          shootingStar.x < 0 ||
          shootingStar.y < 0
        ) {
          shootingStars.splice(index, 1);
        }
      });
    };

    const drawSpaceship = () => {
      if (!spaceship) return;

      const spaceshipImage = new Image();
      spaceshipImage.src = 'src/img/spaceship.jpg'; 
      spaceshipImage.onload = () => {
        ctx.drawImage(spaceshipImage, spaceship.x, spaceship.y, spaceship.width, spaceship.height);
      };

      spaceship.x += spaceship.speed;

      if (spaceship.x > canvas.width) {
        spaceship = null;
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.fill();
        star.x -= star.speed;

        // Parpadeo de estrellas
        star.opacity += star.flickerSpeed;
        if (star.opacity > 1 || star.opacity < 0) {
          star.flickerSpeed = -star.flickerSpeed;
        }

        // Si la estrella sale de la pantalla, reaparece en el otro extremo
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });

      drawShootingStars();
      drawSpaceship();
    };

    const animate = () => {
      drawStars();
      requestAnimationFrame(animate);
    };

    animate();

    // Crear una estrella fugaz ocasionalmente
    setInterval(() => {
      if (shootingStars.length < 3) {
        createShootingStar();
      }
    }, 3000); // Cada 5 segundos

    // Crear una nave espacial ocasionalmente
    setInterval(() => {
      if (!spaceship) {
        createSpaceship();
      }
    }, 5000); // Cada 15 segundos

    // Ajustar el tamaño del canvas si cambia el tamaño de la ventana
    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: '#000',
      }}
    />
  );
};

export default StarryBackground;
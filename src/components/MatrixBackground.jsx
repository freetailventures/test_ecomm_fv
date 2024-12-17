import React, { useEffect, useRef } from 'react';

    const MatrixBackground = () => {
      const canvasRef = useRef(null);

      useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = [];
        for (let i = 0; i < columns; i++) {
          drops[i] = 1;
        }

        const draw = () => {
          context.fillStyle = 'rgba(0, 0, 0, 0.05)';
          context.fillRect(0, 0, canvas.width, canvas.height);

          context.fillStyle = '#00ff00';
          context.font = `${fontSize}px monospace`;

          for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.random() * 128);
            context.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
              drops[i] = 0;
            }
            drops[i]++;
          }
        };

        const interval = setInterval(draw, 33);
        return () => clearInterval(interval);
      }, []);

      return <canvas ref={canvasRef} className="matrix-background" />;
    };

    export default MatrixBackground;

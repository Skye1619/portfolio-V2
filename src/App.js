import "./App.css";
import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Home from './components/Home';

function App() {

  /* useEffect(() => {
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });
    document.addEventListener('keydown', function(event) {
      if (event.key === 'F12') {
        event.preventDefault();
      }
    })
  }, []) */

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div className="portfolioRoot">
      <Particles
        id="tsparticles"
        className="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ee3f37",
            },
            links: {
              color: "#fbaf41",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

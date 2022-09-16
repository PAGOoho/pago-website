import { createContext, useState } from 'react';
import Matter from 'matter-js';

const PhysicsContext = createContext();

// Global Values
const STATIC_DENSITY = 15;
const PARTICLE_SIZE_MIN = (window.innerWidth + window.innerHeight) / 2 / 24;
const PARTICLE_SIZE_MAX = (window.innerWidth + window.innerHeight) / 2 / 14;
const PARTICLE_SIDES = 6;
const PARTICLE_BOUNCYNESS = 0.1;
const PARTICLE_DENSITY = 0.2;
const PARTICLE_QUANTITY_MIN = 2;
const PARTICLE_QUANTITY_MAX = 4;
let CANVAS_BACKGROUND = 'transparent';

export const PhysicsProvider = ({ children }) => {
  // Mattter variables
  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Mouse = Matter.Mouse;
  const MouseConstraint = Matter.MouseConstraint;

  // States
  const [constraints, setContraints] = useState(null);
  const [scene, setScene] = useState();
  const [loading, setLoading] = useState(true);

  const initialConstraints = () => {
    if (!constraints) {
      // Set Constraints initially after render to make sure the button is included
      setContraints({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  };

  const createWorld = (canvasRef) => {
    if (constraints) {
      const engine = Engine.create({});
      const canvas = canvasRef;

      const render = Render.create({
        engine: engine,
        canvas: canvas,
        options: {
          background: CANVAS_BACKGROUND,
          wireframes: false,
        },
      });

      const { width, height } = constraints;

      // Dynamically update canvas and bounds
      render.bounds.max.x = width;
      render.bounds.max.y = height;
      render.canvas.width = width;
      render.canvas.height = height;

      const barriers = [
        Bodies.rectangle(width / 2, height, width, 1, {
          isStatic: true,
          render: {
            fillStyle: '#222',
          },
        }),
        Bodies.rectangle(0, height / 2, 1, height, {
          isStatic: true,
        }),
        Bodies.rectangle(width, height / 2, 1, height, {
          isStatic: true,
        }),
      ];

      World.add(engine.world, barriers);

      Body.setVertices(engine.world.bodies[0], [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY },
      ]);

      let mouse = Mouse.create(canvas);
      mouse.pixelRatio = window.devicePixelRatio;

      const mConstraint = MouseConstraint.create(engine, {
        constraint: {
          render: {
            visible: false,
          },
        },
      });

      World.add(engine.world, mConstraint);

      Engine.run(engine);
      Render.run(render);

      setScene(render); // Use state to have render gloabal
      setLoading(false);
    }
  };

  const resizeWorld = () => {
    let resizeStop;

    function handleResize() {
      if (!loading) {
        // Timeout-Function to prevent overloading matter-rendering
        clearTimeout(resizeStop);
        resizeStop = setTimeout(() => {
          setLoading(true);
          setContraints({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }, 50);
      }
    }
    window.addEventListener('resize', handleResize);
  };

  const addBall = () => {
    if (scene) {
      const { width } = constraints;
      const colorArray = ['#D53A33', '#E79C10', '#1d9099'];
      const randomQuantity = Math.floor(
        Math.random() * (PARTICLE_QUANTITY_MAX - PARTICLE_QUANTITY_MIN) +
          PARTICLE_QUANTITY_MIN
      );
      for (let i = 0; i < randomQuantity; i++) {
        const randomX = Math.floor(Math.random() * -width) + width;
        const randomPs = Math.floor(
          Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) +
            PARTICLE_SIZE_MIN
        );
        const randomDegree = Math.floor(Math.random() * 360);
        //const randomGrey = String(Math.floor(Math.random() * (9 - 5 + 1) + 5));

        World.add(
          scene.engine.world,
          Bodies.polygon(randomX, -randomPs, PARTICLE_SIDES, randomPs, {
            restitution: PARTICLE_BOUNCYNESS,
            density: PARTICLE_DENSITY,
            angle: randomDegree,
            render: {
              fillStyle: colorArray[Math.floor(Math.random() * 3)],
            },
          })
        );
      }
    }
  };

  return (
    <PhysicsContext.Provider
      value={{
        Bodies,
        World,
        constraints,
        initialConstraints,
        createWorld,
        resizeWorld,
        addBall,
      }}
    >
      {children}
    </PhysicsContext.Provider>
  );
};

export default PhysicsContext;

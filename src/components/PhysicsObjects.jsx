import React, { useEffect, useRef, useContext } from 'react';

import PhysicsContext from '../context/PhysicsContext';

function PhysicsObjects() {
  const {
    Bodies,
    World,
    constraints,
    initialConstraints,
    createWorld,
    resizeWorld,
    addBall,
  } = useContext(PhysicsContext);

  const canvasRef = useRef(null);

  useEffect(() => {
    initialConstraints();
  }, [initialConstraints]);

  /* eslint-disable */
  // dependecies have to exclusive. "createWorld" will bring in all which causes loop. (useState issues)
  useEffect(() => {
    createWorld(canvasRef.current);
  }, [Bodies, World, constraints]);
  /* eslint-enable */

  useEffect(() => {
    resizeWorld();
  }, [resizeWorld]);

  useEffect(() => {
    addBall();
  }, [addBall]);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
}

export default PhysicsObjects;

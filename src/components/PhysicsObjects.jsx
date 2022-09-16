import React, { useEffect, useRef, useContext, useState } from 'react';

import PhysicsContext from '../context/PhysicsContext';
import LanguageContext from '../context/LanguageContext';

function PhysicsObjects() {
  const {
    Bodies,
    World,
    constraints,
    loading,
    canvasBg,
    triggerObject,
    initialConstraints,
    createWorld,
    resizeWorld,
    addBall,
    changeCanvasBg,
  } = useContext(PhysicsContext);

  const { Add, randomLang } = useContext(LanguageContext);

  const [btntxt, setBtntxt] = useState({ english: 'add' });

  const canvasRef = useRef(null);

  const addObject = () => {
    triggerObject();
  };

  const changeBg = () => {
    changeCanvasBg();
    createWorld(canvasRef.current);
  };

  useEffect(() => {
    // Change Add-Button every 5 Seconds
    setInterval(function () {
      setBtntxt(randomLang(Add));
    }, 5000);
  }, [randomLang, Add]);

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

  // save for use later
  const buttons = (
    <div className="btnwrap">
      <button className="btn big noselect" onClick={addObject}>
        {Object.entries(btntxt)[0][1]}
        <p>({Object.entries(btntxt)[0][0]})</p>
      </button>
      <button className="btn noselect" onClick={changeBg}>
        {canvasBg === 'transparent' ? 'cheat' : 'reset'}
      </button>
    </div>
  );

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
}

export default PhysicsObjects;

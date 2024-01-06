import React from 'react';
import './Canvas.scss';

const Canvas = () => {
  return (
    <div>
      {/* Render cam elements */}
      <div className="cam-container">
        {[...Array(361)].map((_, c) => (
          <div className="cam" key={`cam${c}`}></div>
        ))}
      </div>

      {/* Render photo inputs */}
      <div className="photo-inputs">
        <input type="radio" name="photo" id="f1" checked />
        {[...Array(9)].map((_, i) => (
          <input type="radio" name="photo" id={`f${i + 2}`} key={`f${i + 2}`} />
        ))}
      </div>

      {/* Render surface inputs */}
      <div className="surface-inputs">
        <input type="radio" name="surface" id="canvas" checked />
        <input type="radio" name="surface" id="ratan" />
        <input type="radio" name="surface" id="quilt" />
        <input type="radio" name="surface" id="mesh" />
        <input type="radio" name="surface" id="none" />
        <input type="checkbox" id="view" />
      </div>

      {/* Render photos */}
      <div className="photos">
        {[...Array(9)].map((_, l) => (
          <label key={`label${l}`} htmlFor={`f${l + 1}`}></label>
        ))}
      </div>

      {/* Render options */}
      <div className="options">
        <a className="reload" href="https://codepen.io/josetxu/pen/RweVeBZ" target="_top"></a>
        <label htmlFor="canvas"></label>
        <label htmlFor="ratan"></label>
        <label htmlFor="quilt"></label>
        <label htmlFor="mesh"></label>
        <label htmlFor="none"></label>
        <label htmlFor="view"></label>
      </div>

      {/* Render content */}
      <div className="content">
        <div className="zoom">
          <div className="art" id="art">
            {[...Array(6)].map((_, s) => (
              <div className="side" key={`side${s}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;

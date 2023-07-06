import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [imageState, setImageState] = useState({
    originalFilter: 'none',
    originalOpacity: 1,
    currentFilter: 'none',
    currentOpacity: 1,
    history: [],
    future: [],
  });

  const imageRef = useRef(null);

  // Function to update the image state and history
  const updateImageState = (newFilter, newOpacity) => {
    setImageState((prevState) => ({
      originalFilter: prevState.originalFilter || newFilter,
      originalOpacity: prevState.originalOpacity || newOpacity,
      currentFilter: newFilter,
      currentOpacity: newOpacity,
      history: [...prevState.history, { filter: prevState.currentFilter, opacity: prevState.currentOpacity }],
      future: [],
    }));
  };

  // Function to apply the color invert filter to the image
  const handleColorInvert = () => {
    const newImage = imageRef.current;
    newImage.style.filter = 'invert(100%)';
    updateImageState(newImage.style.filter, newImage.style.opacity);
  };

  // Function to apply the transparency filter to the image
  const handleTransparency = () => {
    const newImage = imageRef.current;
    newImage.style.opacity = '0.5';
    updateImageState(newImage.style.filter, newImage.style.opacity);
  };

  // Function to undo the last image update
  const handleUndo = () => {
    if (imageState.history.length > 0) {
      const previousState = imageState.history.pop();
      setImageState((prevState) => ({
        ...prevState,
        currentFilter: previousState.filter,
        currentOpacity: previousState.opacity,
        history: prevState.history,
        future: [{ filter: prevState.currentFilter, opacity: prevState.currentOpacity }, ...prevState.future],
      }));
      if (imageRef.current) {
        imageRef.current.style.filter = previousState.filter;
        imageRef.current.style.opacity = previousState.opacity;
      }
    }
  };

  // Function to redo the last undone image update
  const handleRedo = () => {
    if (imageState.future.length > 0) {
      const nextState = imageState.future.shift();
      setImageState((prevState) => ({
        ...prevState,
        currentFilter: nextState.filter,
        currentOpacity: nextState.opacity,
        history: [...prevState.history, { filter: prevState.currentFilter, opacity: prevState.currentOpacity }],
        future: prevState.future,
      }));
      if (imageRef.current) {
        imageRef.current.style.filter = nextState.filter;
        imageRef.current.style.opacity = nextState.opacity;
      }
    }
  };
  // Function to reset the image to its original state
  const handleReset = () => {
    setImageState((prevState) => ({
      originalImage: prevState.originalImage,
      currentImage: prevState.originalImage,
      history: [],
      future: [],
    }));
    if (imageRef.current) {
      imageRef.current.style.filter = 'none';
      imageRef.current.style.opacity = '1';
    }
  };

  // Disable undo button if there's no history
  const disableUndo = imageState.history.length === 0;

  // Disable redo button if there's no future
  const disableRedo = imageState.future.length === 0;

  // Disable Reset button if there's no History
  const disableReset = imageState.history.length === 0;

  return (
    <div>
      <h1>Photo Shop App</h1>
      <div className="app-container">
        <div className="image-container">
          <img
            className="image"
            ref={imageRef}
            src="https://source.unsplash.com/random"
            alt="your-image"
          />
        </div>
        <div className="sidebar-container">
          <button className="optBtn" onClick={handleColorInvert}>
            Color Inversion
          </button>
          <button className="optBtn" onClick={handleTransparency}>
            Transparency
          </button>
          <br />
          <button className="menBtn" onClick={handleUndo} disabled={disableUndo}>
            Undo
          </button>
          <button className="menBtn" onClick={handleRedo} disabled={disableRedo}>Redo</button>
          <br></br>
          <button className="yewBtn" onClick={handleReset} disabled={disableReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
export default App;
import React, { useState } from 'react';
import './App.css';
import Slider from './Slider';
import SidebarItem from './SidebarItem';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
  {
    name: 'Invert',
    property: 'invert',
    value: 0,
    range: {
      min: 0,
      max: 1,
    },
    unit: '',
  },
  {
    name: 'Opacity',
    property: 'opacity',
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
];

function Photoshop() {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [undoHistory, setUndoHistory] = useState([DEFAULT_OPTIONS]);
  const [redoHistory, setRedoHistory] = useState([]);
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({ target }) {
    const newOptions = options.map((option, index) => {
      if (index !== selectedOptionIndex) return option;
      return { ...option, value: target.value };
    });
    // Store previous options before updating the options
    const previousOptions = options;
    setOptions(newOptions);
    // First, set the redo history
    setRedoHistory([]);
    setUndoHistory(prevHistory => [...prevHistory, previousOptions]);
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(' ') };
  }

  function handleUndo() {
    if (undoHistory.length > 1) { // disable undo button if there is only one element in undoHistory
      const newUndoHistory = [...undoHistory];
      const lastUndo = newUndoHistory.pop();
      setRedoHistory(prevRedoHistory => [...prevRedoHistory, options]);
      setUndoHistory(newUndoHistory);
      setOptions(lastUndo);
    }
  }
  
  function handleRedo() {
    if (redoHistory.length > 0) {
      const newRedoHistory = [...redoHistory];
      const lastRedo = newRedoHistory.pop();
      setUndoHistory(prevUndoHistory => [...prevUndoHistory, options]);
      setRedoHistory(newRedoHistory);
      setOptions(lastRedo);
    }
  }

  function handleReset() {
    setOptions(DEFAULT_OPTIONS);
    setUndoHistory([DEFAULT_OPTIONS]);
    setRedoHistory([]);
  }

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()} />
      <div className="sidebar">
        {options.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
            />
          );
        })}
        <button className='sidebar-item' onClick={handleUndo} disabled={undoHistory.length === 1}>Undo</button>
        <button className='sidebar-item' onClick={handleRedo} disabled={redoHistory.length === 0}>Redo</button>
        <button className='sidebar-item' onClick={handleReset}>Reset</button>
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />

    </div>
  );
}

export default Photoshop;
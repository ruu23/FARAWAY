import React, {useState} from 'react';
import './App.css';

function Counter(){
  const [count, setCount] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
    setCurrentStep(Math.min(currentStep + 1, 3)); // Limit step to 3
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setCurrentStep(Math.max(currentStep - 1, 1)); // Limit step to 1
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };

  return (
    <div className="counter-container">
      <button className="toggle-button" onClick={handleToggleVisibility}>
        {isVisible ? 'X' : 'Open'}
      </button>
      {isVisible && (
        <div className="message-box">
          <div className="step-indicator">
            <div className={`step ${currentStep === 1 ? 'active' : ''}`}>1</div>
            <div className={`step ${currentStep === 2 ? 'active' : ''}`}>2</div>
            <div className={`step ${currentStep === 3 ? 'active' : ''}`}>3</div>
          </div>
          <p className="message">This is my message</p>
          <p className="count">{count}</p>
          <div className="navigation">
            <button className="nav-button" onClick={handleDecrement} disabled={currentStep === 1}>
              Previous
            </button>
            <button className="nav-button" onClick={handleIncrement} disabled={currentStep === 3}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );

  
}



export default Counter;

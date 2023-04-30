import { useState } from "react";
import "./App.scss";

function App() {
  const [isChecked, setIsChacked] = useState(false);

  return (
    <div className="App">
      <div className="style-changer">
        <div className={`style-changer__filter ${isChecked ? 'full' : ''}`}></div>
        <div className={`style-changer__wrapper ${isChecked ? 'dark' : 'light'}`}>
          <input type="checkbox" id="checker" onChange={() => setIsChacked(!isChecked)} />
          <label htmlFor="checker" className="checker-label">
            <div className="checker-label__internal"></div>
          </label>
          <div className="clouds-stars">
            <div className="clouds-stars__item"></div>
            <div className="clouds-stars__item"></div>
            <div className="clouds-stars__item"></div>
            <div className="clouds-stars__item"></div>
            <div className="clouds-stars__item"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

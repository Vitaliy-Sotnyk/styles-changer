import { useEffect, useState } from "react";
import "./checker.scss";

function Checker() {
    const [isChecked, setIsChacked] = useState(false);

    return (
        <div className="App-checker">
            <div className={`color-filter ${isChecked? 'dark' : 'light'}`}></div>
            <div className={`wrapper ${isChecked ? 'dark' : 'light'}`}>
                <input type="checkbox" id="checker" onChange={() => setIsChacked(!isChecked)} />
                <label htmlFor="checker" className="checker-div">
                    <div></div>
                </label>
                <div className="clouds">
                    <div className="clouds-1"></div>
                    <div className="clouds-2"></div>
                    <div className="clouds-3"></div>
                    <div className="clouds-4"></div>
                    <div className="clouds-5"></div>
                    <div className="clouds-6"></div>
                    <div className="clouds-7"></div>
                </div>
            </div>

        </div>
    )
}

export default Checker;

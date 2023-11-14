import { PHRAZES } from './phrazes-mock.js';
import { useState } from 'react';
import './daily.css';
function Phraze() {
    let date = new Date();

    const [phraze, setPhraze] = useState(PHRAZES[0]);
        const randPhrazeIndex = Math.floor(Math.random() * PHRAZES.length);
        console.log(randPhrazeIndex);
        const generateNew =()=> setPhraze(PHRAZES[Math.floor(Math.random() * PHRAZES.length)]);
        const clear=()=>setPhraze(PHRAZES[0]);
        const fullClear = () => {
            const element = document.querySelector(".phraze-container");
            element.classList.add("clearClass");
        }
    return (
        <div className="phraze-container">
            <h3>Date {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</h3>
            <h5>Phraze : </h5>
            <p>[{phraze.id}] - {phraze.phraze} - {phraze.author}</p>
            <button onClick={generateNew}> Generate new phraze</button>
            <button onClick={fullClear}> Clear</button>
            <button onClick={clear}>Set Default</button>
        </div>
    );
}

export default Phraze;

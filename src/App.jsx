import "./styles.css";
import { useState } from "react";
import array from "./data";
import { FaCaretRight } from "react-icons/fa";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count, 10);
    setText(array.slice(0, amount));
  };

  return (
    <section className="section1">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      {/* <main className="center"> */}
        <form onSubmit={handlesubmit} className="activity">
          <label htmlFor="number">Paragraphs:</label>
          <input
            type="number"
            placeholder="Enter the value"
            min="0"
            max="8"
            id="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
         
        </form>
        <article className="text-center">
          {text.map((e, index) => {
            return (
              <p class="text-center" key={index}>
                
                {e}
              </p>
            
            );
          })}
        </article>
     
    </section>
  );
}

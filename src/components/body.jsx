import { useEffect, useState } from "preact/hooks";
import "./body.css";
const MyBody = () => {
  const [text, setText] = useState([]);
  const addItems = (value) => {
    setText([...text, value]);
  };
  return (
    <div class="myBody">
      <div className="totalContainer">
        <div className="listContainer">
          <div className="heading">Todo List</div>
          <div className="myItems">
            {text.map((item, index) => {
              return (
                <div>
                  {index + 1}. {item} <br />
                </div>
              );
            })}
          </div>
        </div>
        <div className="listInput"></div>
        <input
          type="text"
          id="input"
          placeholder="Type here"
          onKeyDown={(e) => e.key === "Enter"?addItems(document.getElementById("input").value) : 0}
        />
        <div
          className="myInputButton"
          onClick={() => {
            let inputValue = document.getElementById("input").value;
            addItems(inputValue);
            
          }}
        >
          Add
        </div>
      </div>
    </div>
  );
};

export default MyBody;

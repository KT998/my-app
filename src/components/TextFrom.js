import React, { useState } from "react";

export default function TextFrom(props) {
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    };
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    };
    const handleClearClick = () => {
        setText("");
        props.showAlert("Cleared Text","success");
    }
    return (
        <>
            <div className="form-group container" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h1>{props.heading}</h1>
                <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#064d99' ,
                color: props.mode === 'light' ? 'black' : 'white'}}
                    className="form-control my-3"
                    id="exampleFormControlTextarea1"
                    value={text}
                    onChange={handleOnChange}
                    rows="8"
                ></textarea>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length===0 } onClick={handleLowClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length===0 } onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>
            <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chars</p>
                <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Nothing to preview"}</p>
            </div>

        </>
    );
}

import React,{useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked"+ text);
      let newText=text.toLowerCase();
      setText(newText)
  }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }


    const [text, setText]=useState("Enter text here");
    //text="new text";//wrong way to change the state
    //setText("new text");//Correct way to change the state
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
<div class="mb-3">

  <textarea className="form-control bg-warning "  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-dark mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3 text-dark">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 *  text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

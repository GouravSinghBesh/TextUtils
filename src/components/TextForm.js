import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleUpChange = ()=>{
        const newText = text.toUpperCase();
        // console.log("button was clicked");
        settext(newText);
    }
    const handleLoChange = ()=>{
        const newText = text.toLowerCase();
        // console.log("button was clicked");
        settext(newText);
    }
    const handleClearChange = ()=>{
        const newText = "";
        // console.log("button was clicked");
        settext(newText);
    }
    const handleOnChange = (event)=>{
        settext(event.target.value);
        // console.log("onchange")
    }
const [text, settext] = useState('')
    return (
        <>
        <h2 style={{color : props.mode==="light"?'black':'white'}} >{props.heading}</h2>
        <div className="form-floating " >
            <textarea className="form-control" onChange={handleOnChange} placeholder="Leave a comment here" value={text} id="floatingTextarea"  style={{height : "300px",backgroundColor:props.mode==="light"?'white':'grey',color:props.mode==='light'?'black':'white'}} ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpChange}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoChange}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearChange}>Clear Text</button>
        
        <div className="container" style={{color:props.mode==="light"?'black':'white'}}>
            <h2>Your Text Summary :</h2>
            <p>{text.length>0? text.split(" ").filter((element)=>{return element.length !==0}).length:"0 " } words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0
            ?text:'Nothing to Preview'}</p>


        </div>

        </>
    )
}

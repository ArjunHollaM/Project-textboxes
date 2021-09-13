import React, {useState} from "react";



const Editor = (props) =>  {
    const [isOpen,setOpen] = useState(true);
    const handleToggle = () => {
        setOpen(!isOpen);
    }
    return (
        <div className = 'AllEditors'>
            <div className = "titles">{props.editorTitle}<button onClick = {handleToggle}>{isOpen? "[x]":"[+}"}</button></div>
            <textarea className = {isOpen ? "opened" : "closed"} row = "7" id = {props.id} placeholder = {props.placeholder}></textarea>
        </div>
    );
}
export default Editor;

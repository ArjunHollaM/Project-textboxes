import React  from "react";



const Editor = (props) =>  {
    
    return (
        <div>
            <textarea className = "AllEditors" row = "7" id = {props.id} placeholder = {props.placeholder}></textarea>
        </div>
    );
}
export default Editor;
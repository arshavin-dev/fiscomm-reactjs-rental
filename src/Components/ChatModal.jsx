import React from "react";
import "./ChatModal.scss";

function ChatModal({ closeModal }){
    return(

            <div className="chatModalContainer">

                   <button className="button-close" onClick={()=>{closeModal(false)}}>Close!!</button>

            </div>

    )
}

export default ChatModal;

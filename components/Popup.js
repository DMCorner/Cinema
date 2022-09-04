import React from 'react'

function Popup(props) {
    return(props.trigger) ? (
        <div className='popup'>
            <div className='pop-inner'>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
import React, {useState} from 'react';
import "../css/Card.css"

const Card = ({title,content, image}) => {
    const [state, setState] = useState(false)
    return (
        <div className="card"
            onClick={() => setState(!state)}>
            <div  className={`inner ${(state) ? "ifFlipper" : ""}`} >
                <div className="face face-front" >
                    <h2>{title}</h2>
                </div>
                <div className="face face-back">
                    <div >
                        <div className="card-header">
                            <img
                                src={image}
                                alt="image"
                                className="pp"
                            />
                            <h2>{title}</h2>
                        </div>
                        <div className="card-body"
                            >
                            <h3>JavaScript Wizard</h3>
                            <p>
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
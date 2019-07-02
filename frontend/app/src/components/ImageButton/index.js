import React from 'react';
import './style.scss';
import Image from '../Image';

const ImageButton = props => {
    console.log(props.image);
    return (
        <div className="ImageButton">
            <button className="ImageButton--Button">
                <Image
                    image={props.image}
                    className="ImageButton--Button-img"
                />
                <a href={props.link} />
            </button>
        </div>
    );
};

export default ImageButton;

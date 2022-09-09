import React from 'react';

export default function Bar(props) {
    // creating this as state of bar as it has no relation with our sorting. it is just for spreading the bars horizontally according to the widow width.
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    // const [color, setColor] = React.useState('green');

    return (
        <div
            className="bar--"
            key={props.bar.id}
            id={props.bar.id}
            style={{
                height: `${props.bar.number}px`,
                width: `${windowWidth / props.size}px`,
                backgroundColor: `${props.bar.color}`
            }}
        >{props.bar.number}{props.bar.color}</div>
    );
}
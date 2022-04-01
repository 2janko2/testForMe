import React from "react";

const About = (props) => {
    let value;

    const trackTextareaValue = (e) => {
        value = e.currentTarget.value;
        return value;
    };

    const clickHandler = () => {
        props.changeClick(value);
    };

    return (
        <>
            <div>
                {props.about.map((item) => (
                    <>
                        <div> {item.title} </div>
                        <div> {item.description} </div>
                        <div> {item.icon} </div>
                    </>
                ))}
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    onChange={(e) => trackTextareaValue(e)}
                ></textarea>
                <button onClick={clickHandler}>Click</button>
            </div>
        </>
    );
};

export default About;

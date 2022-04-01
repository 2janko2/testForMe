import React from "react";

const Profile = (props) => {
    let reference = React.createRef();

    const onClickHandler = () => {
        props.showAlert(reference?.current?.value);
    };

    return (
        <div>
            <div>
                "Hello!"
                {props.profile.map((item) => (
                    <div>{item.description}</div>
                ))}
            </div>
            <div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    ref={reference}
                ></textarea>
                <button onClick={onClickHandler}> click</button>
            </div>
        </div>
    );
};

export default Profile;

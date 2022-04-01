import React from "react";

const Friends = (props) => {
    let reference = React.createRef();

    const clickHandler = () => {
        props.changeClick(reference?.current?.value);
    };

    return (
        <>
            <div className="">
                <div>
                    <div>
                        {props.friends.friendsBlock.map((friend) => {
                            return (
                                <>
                                    <div> {friend.name} </div>
                                </>
                            );
                        })}
                        {props.friends.friendsString}
                    </div>

                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        ref={reference}
                    ></textarea>

                    <button onClick={clickHandler}> Click</button>
                </div>
            </div>
        </>
    );
};

export default Friends;

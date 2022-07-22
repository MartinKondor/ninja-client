import React, { useState, useEffect } from "react";
import Alert from "../components/Alert";
import PropTypes from 'prop-types';
import { URL } from "../Utils";
import { Link } from "react-router-dom";


export default function FriendCard({ friend }) {
    const name = friend.first_name + " " + friend.last_name;
    
    function deleteFriend(id) {
        alert(id);
    }

    return (
        <div className="text-left friend-card mb-3 mt-3">
            <div className="container text-left">

                <div className="row">
                    <div className="col-sm-3">
                        <img className="profile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB2CAMAAACKyj2IAAAAM1BMVEXMzMzPz8/IyMiRkZHS0tLDw8OUlJSkpKSYmJiOjo68vLy3t7efn5/AwMCcnJyoqKiwsLDIwtTBAAADhklEQVR4nO2b63LjIAyFkTAYhLm8/9OuhHGadrbZ3T91duZ87aRYgYyOdTGdIc4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgL+AiJ4vfmN8ueZj+Ic1PwfVMfjh1SjnXxnyYgmXIcv/p5l1lLcQRXv22cvyL+R9jlrOuX27pOiKnIKNOenMxDbcH8Z7oZLTGLHxebn7Kan7XnY/vlnDMY7S80HngqKzLb75UON+f5hCS4FI8sw3KimaTzV2rYs9Xrf8yrF1NXwhRz3r26LzdaaGieOh83qud6j4hPhhnrYy/U0jmaSRg/pc81UkMvMyyApln4lWczEJNlNa0GS0jwhx3B6m6f26/zQSW5S0vDa7zn3Z91lrx1UoezO7KiaX4ubW2mgfxMdxtyT1nqSPOv3QW7xNSa2Zo9SO5W+Nza0wPBZuPWu2aRWVUaxhnqFz/dum8mO0JNq+4iylEd2U5NLUQke6QtBVTvNPioL0qD0h5LLn7DXv3J7OmYl/XMMXUvNdRvLVGrjQKSn2KWm/sspq/1Phaw35pqENvqWh6o4rG99BUtP2YB1PW9yhji1J+ynpipI1ubg/LwtSYmSVpKWoTULvyBtJyuaCVU+JMiWZ8UviaZhalI8t0HyRPLbqZ9Vp/qmWab1fEh35yrGeupJaL5eWdDyiJNFKZyHnvkGFB9/P3ji2pWW/vT1oUcx8URHdGyn6vozq6CMwqbV41VJIs7lz0/Q8U5RV0ojWNlXn3U3cFXu6WDMm2gz1kdRo24PiLxG2XwhnjhmHlQ3Np+pu4nVTVSnYM9u2IbdLCqmFTet7bRTO9qBG3uxlTeKUWJ9gdXnbY6HNHXZd9MF0zqSU9IOOfHcpnb2sJX8VyilJb3s84uPRqomoww+JnHw7LEGdbVvTmilRO7q/fz+kjJTjY8+9HXOoWyPdoF9GLZBpayuUVA/9N2JMgbyrkqmdSnv6oJv5ba68SiByzI/3P0bPQwAAAAAAAAAAAAAAAAAAAAAAAAAAAMC/E9jRPGU5T27rT2AO58kpdhyCC2pZE9mu3v7IDo0SClf1XfS3ipPBPISVEKjWQbteBjsrG1iEuxtv8KWNl1AvhUMZpY5SaKhAlSOhFnGsFifbGGKSKrsauI5R7/+Cw2uobhYlDU8NlULlKuxEXKnETMFVEmfhqyzVFdF48rtH6QuPU5jy6SAizrz9l/wCYRscrl/G7o8AAAAASUVORK5CYII=" alt="profile-img" />
                    </div>
                    <div className="col-sm-8 mt-2">
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                {name}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12">
                                <p className="text-muted small">
                                    .........
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 non-mobile">
                        <i onClick={() => deleteFriend(friend._id)} className="fa-solid fa-xmark delete-friend"></i>
                    </div>
                </div>

            </div>
        </div>
    );
}



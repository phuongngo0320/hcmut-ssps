import React from "react";
import { Link } from "react-router-dom";
import "./../styles/button.css";

export default function Button(props) {

    function handleClick() {
        console.log("Do not call me");
    }

    return (
        <Link
            to={props.link || "#"}
            state={props.state || undefined}
            replace={props.replace || false}
            onClick={props.action || handleClick}
            className={"navbutton " + props.className}
        >
            {props.children}
        </Link>
    );
}
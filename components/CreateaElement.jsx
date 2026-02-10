import { createElement } from "react";

export default function Element(){
    return createElement(
        "button",
        {className:"bg-black text-white"},
        "Hello hello we are created element from the createElement"
    )
}
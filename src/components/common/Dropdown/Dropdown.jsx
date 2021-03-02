import React, { useEffect, useRef } from "react";

const Dropdown = ({ children, open, toggle, ...rest }) => {
    const node = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (node.current && !node.current.contains(e.target) && e.target.id !== toggle) {
                if (open) document.getElementById(toggle).click();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [node, open, toggle]);

    return (
        <div ref={node} open={open} toggle={toggle} {...rest}>
            {children}
        </div>
    );
};

export default Dropdown;

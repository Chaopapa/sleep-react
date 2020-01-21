
import React from "react";
interface IconType{
    type:any,
    className?:string,
    size?:string,
    [propsName:string]:any

}

const CustomIcon:React.FC<IconType> = ({ type, className = '', size = 'md', ...restProps }:IconType) => (
    <svg
        className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
        {...restProps}
    >
        <use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}
        {/* <use xlinkHref={#${type.default.id}} /> */} {/* svg-sprite-loader@latest */}
    </svg>
);
export default CustomIcon;
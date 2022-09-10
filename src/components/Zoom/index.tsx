import React, { CSSProperties, useState } from "react";
import { useMemo, useRef } from "react";

export interface CountProps {
    className?: string;
    height?: number;
    width?: number;
    maxwidth?: number;
    repeat?: string;
    position?: string;
    bgsize?: string;
    cursor?: string;
    color?: string;
    bordercolor?: string;
    size?: number;
    url?: string;
    borderpixel?: number;
    style?: CSSProperties;
}

const DEFAULT = {
    height: 400,
    width: 100,
    maxwidth: 400,
    repeat: "no-repeat",
    position: "center",
    size: 100,
    bgsize: "cover",
    cursor: "zoom-in",
    borderpixel: 1,
    color: "#ddd",
    bordercolor: "#ddd",
    url: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1661524006/icons/merowallpaper_dg3kzr.png"
};

export const Zoom: React.FC<CountProps> = (props) => {
    const { className, height, borderpixel, color, bordercolor, maxwidth, width, repeat, position, size, bgsize, cursor, url } = useMemo(() => ({ ...DEFAULT, ...props }), [props]);

    const customstlyes = props.style ?? null;

    const divref = useRef<any>();
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [pos, setPos] = useState<string>("");

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | any) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setPos(`${x}% ${y}%`);
    };

    const handleMouseOut = (e: React.MouseEvent) => {
        divref.current.style.backgroundPosition = "center";
        handleMouseLeave();
    };

    const styles = {
        backgroundImage: `url(${url})`,
        height: `${height}px`,
        maxWidth: `${maxwidth}px`,
        width: `${width}%`,
        backgroundRepeat: `${repeat}`,
        backgroundColor: `${color}`,
        cursor: `${cursor}`,
        backgroundPosition: isHovering ? `${pos}` : `${position}`,
        backgroundSize: isHovering ? `${size}%` : `${bgsize}`,
        border: `${borderpixel}px solid ${bordercolor}`
    };

    return <div ref={divref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} onMouseMove={handleMouseMove} className={className} style={{ ...styles, ...customstlyes }} />;
};
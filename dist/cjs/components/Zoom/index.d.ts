import React, { CSSProperties } from "react";
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
export declare const Zoom: React.FC<CountProps>;
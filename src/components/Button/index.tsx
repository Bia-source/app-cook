import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as style from "./style";

type Props = TouchableOpacityProps & {
    title: string;
    opacity: number;
}

export function Button({title, opacity, ...rest}: Props){
    return (
        <style.Container opacityNumber={opacity} {...rest}>
            <style.TitleButton>{title}</style.TitleButton>
        </style.Container>
    )
}
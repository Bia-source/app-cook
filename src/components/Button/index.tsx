import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as style from "./style";

type Props = TouchableOpacityProps & {
    title: string;
}

export function Button({title, ...rest}: Props){
    return (
        <style.Container {...rest}>
            <style.TitleButton>{title}</style.TitleButton>
        </style.Container>
    )
}
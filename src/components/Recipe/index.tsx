import { TouchableOpacityProps } from "react-native";
import * as style from "./style";
import { services } from "@/services";
import { useEffect } from "react";

type Props = TouchableOpacityProps & {
    recipe: {
        name: string;
        image: string;
        minutes: number;
    }
}

export function Recipe({ recipe, ...rest }: Props) {
   
    return (
        <style.Container {...rest}>
            <style.ImageBackground source={{ uri: `${recipe.image}`}}>
                <style.Linear colors={["rgba(0,0,0,0.5)", "#000"]}>
                    <style.Title> {recipe.name} </style.Title>
                    <style.Minute> {recipe.minutes} minutos </style.Minute>
                </style.Linear>
            </style.ImageBackground>
        </style.Container>
    )
}
import { TouchableOpacityProps } from "react-native";
import * as style from "./style";

type Props = TouchableOpacityProps & {
    opacityNumber: number;
    recipe: {
        name: string;
        image: string;
        minutes: number;
    }
}

export function Recipe({ recipe, opacityNumber, ...rest }: Props) {
    return (
        <style.Container {...rest} opacity={opacityNumber}>
            <style.ImageBackground source={recipe.image}>
                <style.Linear colors={["rgba(0,0,0,0.5)", "#000"]}>
                    <style.Title> {recipe.name} </style.Title>
                    <style.Minute> {recipe.minutes} </style.Minute>
                </style.Linear>
            </style.ImageBackground>
        </style.Container>
    )
}
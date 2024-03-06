import { TouchableOpacityProps } from "react-native";
import icon from "../../../assets/icons/apple.png";
import * as style from "./style"

export type IngredientsProps = {
    name: string;
    image: string;
    selected?: boolean;
}

export default function Ingredient({name, image, selected = false, ...rest}: IngredientsProps & TouchableOpacityProps){
    return (
       <style.Container {...rest} selected={selected}>
        <style.ImgButton source={icon}/>
        <style.TextButton> Maca </style.TextButton>
       </style.Container> 
    )
}
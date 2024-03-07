import { TouchableOpacityProps } from "react-native";
import * as style from "./style"
import { services } from "@/services";

export type IngredientsProps = {
    name: string;
    image: string;
    selected?: boolean;
}

export default function Ingredient({name, image, selected = false, ...rest}: IngredientsProps & TouchableOpacityProps){
    return (
       <style.Container {...rest} selected={selected}>
        <style.ImgButton source={{ uri: `${services.storage.imagePath}/${image}`}}/>
        <style.TextButton> {name} </style.TextButton>
       </style.Container> 
    )
}
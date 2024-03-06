import * as style from "./style";
import icon from "./icon.png";

export default function Ingredient(){
    return (
       <style.Container>
        <style.ImgButton source={icon}/>
        <style.TextButton> Maca</style.TextButton>
       </style.Container> 
    )
}
import * as style from "./style";
import Ingredient from "../ingredient";

export default function Ingredients() {
    return (
        <style.Container>
            <style.SubContainer>               
                <Ingredient />
                <Ingredient />
                <Ingredient />
            </style.SubContainer>
        </style.Container>
    )
}
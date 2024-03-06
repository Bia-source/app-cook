import * as style from "./style";
import Ingredient from "../ingredient";
import { useState } from "react";

export default function Ingredients() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value));
        }
        setSelected((state) => [...state, value]);
        console.log(selected);
    }

    return (
        <style.Container>
            <style.SubContainer>
                {Array.from({ length: 100 }).map((item, index) => (
                    <Ingredient
                        key={index}
                        name="maca"
                        image="./icon.png"
                        selected={selected.includes(String(index))}
                        onPress={() => handleToggleSelected(String(index))}
                    />
                ))}

            </style.SubContainer>
        </style.Container>
    )
}
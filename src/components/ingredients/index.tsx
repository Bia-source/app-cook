import * as style from "./style";
import Ingredient from "../Ingredient";
import { useState } from "react";
import { Selected } from "../Selected/index";
import { Alert } from "react-native";
import { FadeAnimation } from "../FadeAnimation";

export default function Ingredients() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value));
        }
        setSelected((state) => [...state, value]);
        console.log(selected);
    }

    function handleClearSelected() {
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => setSelected([]) }
        ])
    }

    return (
        <style.Container>
            <style.ContainerScroll>
                <style.SubContainer>
                    {Array.from({ length: 3 }).map((item, index) => (
                        <Ingredient
                            key={index}
                            name="maca"
                            image="./icon.png"
                            selected={selected.includes(String(index))}
                            onPress={() => handleToggleSelected(String(index))}
                        />
                    ))}

                </style.SubContainer>
            </style.ContainerScroll>
            {
                selected.length > 0 && (
                    <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={() => { }} />

                    // <FadeAnimation direction="fade-in-x">
                    //     <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={() => { }} />
                    // </FadeAnimation>
                )}
        </style.Container>

    )
}
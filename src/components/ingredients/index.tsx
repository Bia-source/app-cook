import * as style from "./style";
import Ingredient from "../Ingredient";
import { useState } from "react";
import { Selected } from "../Selected/index";
import { Alert } from "react-native";
import { router } from "expo-router";

export default function Ingredients() {
    const [selected, setSelected] = useState<string[]>([]);

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

    function handleSearch(){
       router.navigate("/recipes/");
    }

    return (
        <style.Container>
            <style.ContainerScroll>
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
            </style.ContainerScroll>
           
            {
                selected.length > 0 && (
                    <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={handleSearch}/>
                )}
        </style.Container>

    )
}
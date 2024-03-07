import * as style from "./style";
import Ingredient, { IngredientsProps } from "../Ingredient";
import { useState } from "react";
import { Selected } from "../Selected/index";
import { Alert } from "react-native";
import { router } from "expo-router";


type Props ={
    ingredients: IngredientResponse[];
}

export default function Ingredients({ingredients}: Props) {
    const [selected, setSelected] = useState<string[]>([]);

    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value));
        }
        setSelected((state) => [...state, value]);
    }

    function handleClearSelected() {
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => setSelected([]) }
        ])
    }

    function handleSearch(){
       router.navigate("/recipes/" + selected);
    }

    return (
        <style.Container>
            <style.ContainerScroll>
                <style.SubContainer>
                    {ingredients.map((item) => (
                        <Ingredient
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            selected={selected.includes(item.id)}
                            onPress={() => handleToggleSelected(item.id)}
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
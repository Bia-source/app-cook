import { router, useLocalSearchParams } from "expo-router";
import * as style from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Recipe } from "@/components/Recipe";
import omelete from "./omelete.png";
import { services } from "@/services";
import { useEffect, useState } from "react";
import Ingredient from "@/components/Ingredient";


export default function Recipes() {
    const [recipes, setRecipe] = useState<IngredientResponse[]>();
    const [ingredient, setIngredient] = useState<IngredientResponse[]>();
    const params = useLocalSearchParams<{ ingredientsIds: string}>();
    const ingredientsIds = params.ingredientsIds.split(",")

    useEffect(()=> {
        services.ingredients.findByIds(ingredientsIds).then(setIngredient);
    })

    return (
        <style.Container>
            <style.Header>
                <MaterialIcons 
                    name="arrow-back"
                    size={33}
                    onPress={() => router.back()}
                />

            <style.Title>Ingredientes</style.Title>
            {ingredient.map((item) => (
                        <Ingredient
                            key={item.id}
                            name={item.name}
                            image={item.image}
                        />
                    ))}
            </style.Header>

            <FlatList 
             data={["1"]}
             keyExtractor={item => item}
             renderItem={()=> <Recipe recipe={{ name: "Omelete", image: omelete, minutes: 10 }} opacityNumber={0.7}/>}
            />
        </style.Container>
    )
}
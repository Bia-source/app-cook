import { router, useLocalSearchParams } from "expo-router";
import * as style from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Recipe } from "@/components/Recipe";
import { services } from "@/services";
import { useEffect, useState } from "react";
import Ingredients from "@/components/Ingredients";


export default function Recipes() {
    const [recipes, setRecipe] = useState<RecipeResponse[]>([]);
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
    const params = useLocalSearchParams<{ ingredientsIds: string }>();
    const ingredientsIds = params.ingredientsIds.split(",")

    useEffect(() => {
        services.ingredients.findByIds(ingredientsIds).then(setIngredients);
        services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipe);
    }, [])

    return (
        <style.Container>
            <style.Header>
                <MaterialIcons
                    name="arrow-back"
                    size={33}
                    onPress={() => router.back()}
                />

                <style.Title>Ingredientes</style.Title>

            </style.Header>

            <style.Main>
                <Ingredients ingredients={ingredients} />
             
                <FlatList
                    data={recipes}
                    keyExtractor={item => item.id}
                    renderItem={(recipe) => (
                        <Recipe recipe={{ name: recipe.item.name, image: recipe.item.image, minutes: recipe.item.minutes }} />
                    )}
                />
            </style.Main>

        </style.Container>
    )
}
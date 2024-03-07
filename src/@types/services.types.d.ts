type IngredientResponse = {
    id: string;
    name: string;
    image: string;
}

type RecipeResponse = {
    id: string
    name: string
    image: string
    minutes: number
}

type PreparationsResponse = {
    id: string
    recipe_id: string
    description: string
    step: number
}
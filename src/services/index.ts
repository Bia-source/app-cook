import * as ingredients from "./ingredients.service";
import * as recipes from "./recipes.service";

export const services = {
    ingredients,
    recipes,

    storage: {
        imagePath: "https://jenszhyobsfpkepfmgtr.supabase.co/storage/v1/object/public/ingredients"
    }
}
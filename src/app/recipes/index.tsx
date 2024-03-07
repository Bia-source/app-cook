import { router } from "expo-router";
import * as style from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { Recipe } from "@/components/Recipe";
import omelete from "./omelete.png";
import Ingredients from "@/components/Ingredients";

export default function Recipes() {
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

            <FlatList 
             data={["1"]}
             keyExtractor={item => item}
             renderItem={()=> <Recipe recipe={{ name: "Omelete", image: omelete, minutes: 10 }} opacityNumber={0.7}/>}
            />
        </style.Container>
    )
}
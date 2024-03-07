
import { useEffect, useState } from "react"
import * as style from "./style"
import Ingredients from "@/components/Ingredients"
import { services } from "@/services";

export default function Home() {
   const [ingredients, setIngredients] = useState<IngredientResponse[] >([]);

   useEffect(()=> {
      services.ingredients.findAll().then(setIngredients)
   },[])

    return (
        <style.Container>
            <style.Title> Escolha</style.Title>
            <style.SubTitle> os produtos </style.SubTitle>
            <style.Message> Descubra receitas baseadas nos {"\n"} produtos que você escolheu </style.Message>
            <Ingredients ingredients={ingredients}/>
        </style.Container>
    )
}

import { Button } from "@/components/Button"
import * as style from "./style"
import Ingredients from "@/components/Ingredients"
import { Loading } from "@/components/Loading"

export default function Home() {
    return (
        <style.Container>
            <style.Title> Escolha</style.Title>
            <style.SubTitle> os produtos </style.SubTitle>
            <style.Message> Descubra receitas baseadas nos {"\n"} produtos que você escolheu </style.Message>
            <Ingredients/>
        </style.Container>
    )
}
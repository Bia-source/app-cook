import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import * as style from "./style";
import { DirectionType, FadeAnimation } from "../FadeAnimation";
import { useEffect, useState } from "react";


type Props = {
    quantity: number;
    onClear: () => void;
    onSearch: () => void;
}

export function Selected({ quantity, onClear, onSearch }: Props) {

    return (
        <FadeAnimation direction="fade-in-y">
            <style.Container>
                <style.Header>
                    <style.TextQuantity>
                        {quantity} Ingredientes selecionados
                    </style.TextQuantity>
                    <MaterialIcons
                        name="close"
                        size={24}
                        onPress={onClear}
                        color={theme.colors.gray_400}
                    />
                </style.Header>
            </style.Container>
        </FadeAnimation>



    )
}
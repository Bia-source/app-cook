import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { SlideInDown, BounceOut } from "react-native-reanimated";
import * as style from "./style";
import { styleSheet } from "./style"
import { Button } from "../Button";


type Props = {
    quantity: number;
    onClear: () => void;
    onSearch: () => void;
}

export function Selected({ quantity, onClear, onSearch }: Props) {

    return (
        <Animated.View style={styleSheet.container} entering={SlideInDown} exiting={BounceOut}>
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
            <Button  title="Econtrar" onPress={onSearch}/>
        </Animated.View>

    )
}
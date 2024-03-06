import { theme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import * as style from "./style";

type Props = {
    quantity: number;
    onClear: () => void;
    onSearch: () => void;
}

export function Selected({ quantity, onClear, onSearch }: Props) {
    
    return (
        <Animated.View style={style.styleSheet.container}>
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
        </Animated.View>
    )
}
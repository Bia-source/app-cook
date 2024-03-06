import styled from "styled-components/native";
// import { MaterialIcons } from "@expo/vector-icons";
// import Animated  from "react-native-reanimated";
import { theme } from "@/theme";
import { StyleSheet } from "react-native";


export type Teste = {
    type?: boolean;
}

export const styleSheet = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.black,
        padding: 24,
        borderRadius: theme.borderRadius.lg,
        position: "absolute",
        // bottom: -22,
        top: "60%",
        width: "100%",
        alignSelf: "center",
    }
})


export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 34px;
`

export const TextQuantity = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.body.sm}px;
  font-family: ${theme.fonts.family.regular};
`

// export const Icon = styled(MaterialIcons).attrs(()=> ({
//     size: 24
// }))
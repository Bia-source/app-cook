import styled from "styled-components/native";
// import { MaterialIcons } from "@expo/vector-icons";
// import Animated  from "react-native-reanimated";
import { theme } from "@/theme";

export type Teste = {
    type?: boolean;
}


export const Container = styled.View`
   background-color: ${theme.colors.black};
   padding: 24px;
   border-radius: ${theme.borderRadius.lg}px;
   position: absolute;
   top: 450px;
   width: 375px;
   left: -5px;
   align-self: center;
`

export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 34px;
   background-color: ${theme.colors.black};
`

export const TextQuantity = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.body.sm}px;
  font-family: ${theme.fonts.family.regular};
`

// export const Icon = styled(MaterialIcons).attrs(()=> ({
//     size: 24
// }))
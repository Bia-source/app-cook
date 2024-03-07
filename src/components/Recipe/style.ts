import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient"
import { theme } from "@/theme";

type PropsStyleRecipe = {
    opacity: number;
}

export const Container = styled.TouchableOpacity<PropsStyleRecipe>`
   opacity: ${({ opacity })=> opacity ? opacity : 1}px;
   height: 192px;
   border-radius: ${theme.borderRadius.lg}px;
   overflow: hidden;
`

export const ImageBackground = styled.ImageBackground`
    flex: 1;
`

export const Title = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.body.sm}px;
  font-family: ${theme.fonts.family.bold};
` 

export const Minute = styled.Text`
  color: ${theme.colors.yellow_500};
  font-size: ${theme.fonts.size.body.xs}px;
  font-family: ${theme.fonts.family.regular};
` 

export const Linear = styled(LinearGradient).attrs(()=> ({
    flex: 1,
    padding: 12,
    justifyContent: "flex-end"
}))``


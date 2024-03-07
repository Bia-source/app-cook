import { theme } from "@/theme";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
   height: 48px;
   width: 100%;
   background-color: ${theme.colors.green_600};
   align-items: center;
   justify-content: center;
   border-radius: ${theme.borderRadius.sm}px;
`

export const TitleButton = styled.Text`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.body.sm}px;
    font-family: ${theme.fonts.family.medium};
`
import { theme } from "@/theme";
import styled from "styled-components/native";

export type PropsStyleButton = {
    opacityNumber: number;
}

export const Container = styled.TouchableOpacity<PropsStyleButton>`
   opacity: ${({ opacityNumber }) => opacityNumber ? opacityNumber : 1};
   height: 48px;
   width: 100%;
   background-color: ${theme.colors.green_600};
   align-items: center;
   justify-content: center;
   border-radius: ${theme.borderRadius.sm}px;
`

export const TitleButton = styled.Text`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.body.sm};
    font-family: ${theme.fonts.family.medium};
`
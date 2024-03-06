import { theme } from "@/theme";
import styled from "styled-components/native";


export const Container = styled.View`
   flex-direction: row;
   align-items: center;
   gap: 22px;
`
export const Step = styled.Text`
    font-size: ${theme.fonts.size.body.sm}px;
    font-family: ${theme.fonts.family.bold};
    color: ${theme.colors.black};
`

export const Description = styled.Text`
    font-size: ${theme.fonts.size.body.sm}px;
    font-family: ${theme.fonts.family.regular};
    color: ${theme.colors.gray_400};
`
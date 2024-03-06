import { theme } from "@/theme";
import styled, {css} from "styled-components/native";

export type TypeTitleBold = {
  bold?: boolean
}

export const Container = styled.View`
  flex:1;
  padding: 24px;
`;

export const Title = styled.Text`
   font-size: ${theme.fonts.size.heading.xl}px;
   font-family: ${theme.fonts.family.bold};
   line-height: 44px;
   margin-top: 42px;
`;

export const SubTitle = styled.Text`
   font-size: ${theme.fonts.size.heading.xl}px;
   font-family: ${theme.fonts.family.regular};
`;

export const SubTitleDescription = styled.Text`
   font-family: ${theme.fonts.family.regular};
`;

export const Message = styled.Text`
    font-size: ${theme.fonts.size.body.md}px;
    font-family: ${theme.fonts.family.regular};
    margin-top: 12px;
    margin-bottom: 3px;
    color: ${theme.colors.gray_400};
`

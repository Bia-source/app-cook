import { theme } from "@/theme";
import styled from "styled-components/native";

export type IngredientsPropsStyle = {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity<IngredientsPropsStyle>`
    border-width: 2px;
    border-color: ${theme.colors.gray_200};
    border-radius: ${theme.borderRadius.full}px;
    padding-left: 7px;
    padding-right: 25px;
    height: 42px;
    align-items: center;
    flex-direction: row;
    gap: 1px;
    margin-left: 6px;
    border-color: ${({ selected }) => selected === true ? theme.colors.green_600 : theme.colors.gray_200};
    background-color: ${({ selected }) => selected === true ? theme.colors.green_100 : 0};
`;

export const ImgButton = styled.Image`
  width: 16px;
  height: 16px;
`;

export const TextButton = styled.Text`
 font-size: ${theme.fonts.size.body.sm}px;
 font-family: ${theme.fonts.family.medium};
`;

export const SelectedIngredient = styled.View`
    border-width: 2px;
    border-color: ${theme.colors.green_600};
    background-color: ${theme.colors.green_100};
`
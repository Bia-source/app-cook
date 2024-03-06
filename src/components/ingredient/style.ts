import { theme } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    border-width: 2px;
    border-color: ${theme.colors.gray_200};
    border-radius: ${theme.borderRadius.full}px;
    padding-left: 7px;
    padding-right: 10px;
    height: 42px;
    align-items: center;
    flex-direction: row;
    gap: 1px;
    margin-left: 6px;
`;

export const ImgButton = styled.Image`
  width: 50px;
  height: 30px;
`;

export const TextButton = styled.Text`
 margin-left: -6px;
`;
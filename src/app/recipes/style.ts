import { theme } from "@/theme";
import styled from "styled-components/native";

export const Container = styled.View`
 flex: 1;
`;

export const Header = styled.View`
  padding: 32px;
  padding-top: 62px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
 color: ${theme.colors.black};
 font-size: ${theme.fonts.size.heading.md}px;
 font-family: ${theme.fonts.family.bold};
 margin-top: 22px;
`

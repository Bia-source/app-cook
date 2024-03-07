import styled from "styled-components/native";

export const Container = styled.View``;
export const ContainerScroll = styled.ScrollView.attrs(()=> ({
   showsVerticalScrollIndicator: false
}))`
  
`;

export const SubContainer = styled.View`
   flex-wrap: wrap;
   flex-direction: row;
   padding-bottom: 200px;
   gap: 12px;
`;





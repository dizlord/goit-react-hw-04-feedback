import styled from "@emotion/styled";

export const FeedBackButton = styled.button`
  min-width: ${p => p.theme.sizes[1]}px;
  min-height: ${p => p.theme.sizes[0]}px;
  margin-right: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.img};;
`;
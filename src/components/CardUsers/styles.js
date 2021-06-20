import { Card } from "@material-ui/core";
import styled from "styled-components";

export const CardUsers = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  color: "#1480FB";
`;

export const InnerCard = styled(Card)`
  width: 320px;
  height: fit-content;
  background-color: "#E5E4E4";
  color: "blue";
`;

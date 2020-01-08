import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  height: "100%",
  width: "100%"
});

export const Sidebar = styled.div({
  display: "flex",
  width: "20%",
  backgroundColor: "red"
});

export const Section = styled.div({
  display: "flex",
  width: "80%",
  flexDirection: "column"
  //backgroundColor: "green"
});

export const MiddleContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  width: "100%"
  //backgroundColor: "yellow"
});

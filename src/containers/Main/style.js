import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  minHeight: "820px",
  height: "100%",
  width: "100%"
});

export const Side = styled.div({
  display: "flex",
  width: "22%",
  minWidth: "160px",
  backgroundColor: "#573694",
  boxShadow: "2px 2px 2px 2px rgba(207,207,207,1)"
});

export const Section = styled.div({
  display: "flex",
  width: "78%",
  flexDirection: "column",
  alignItems: "flex-end"
});

export const MiddleContainer = styled.div({
  display: "flex",
  minWidth: "700px",
  justifyContent: "center",
  height: "100%",
  width: "100%"
});

export const AddButton = styled.button({
  width: "180px",
  height: "50px",
  backgroundColor: "white",
  borderColor: "#57369469",
  margin: "20px 100px",
  fontSize: "18px",
  color: "#757272c2",
  borderRadius: "0.5em",
  borderWidth: "3px"
});

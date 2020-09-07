import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Header = styled.h3({
  height: "35px",
  color: "#7827b0ad",
  fontSize: "30px",
  marginBottom: "100px",
});

export const Search = styled.div({
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",
});

export const Image = styled.img({
  height: "30px",
  width: "30px",
});

export const Text = styled.h3({
  height: "20px",
  fontSize: "18px",
  color: "#7827b0ad",
  margin: "6px 6px 6px 0px",
});

export const Select = styled.select({
  marginTop: "30px",
  height: "40px",
  fontSize: "18px",
  color: "#7827b0ad",
  width: "130px",
  backgroundColor: "#eae9e93b",
});

export const SearchBtn = styled.button({
  marginTop: "30px",
  height: "40px",
  fontSize: "18px",
  width: "80px",
  color: "#7827b0ad",
  backgroundColor: "#7827b029",
  borderColor: "#7827b029",
});

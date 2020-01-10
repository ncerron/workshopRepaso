import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
});

export const Header = styled.h3({
  height: "30px",
  color: "white",
  fontSize: "25px",
  marginBottom: "100px"
});

export const Search = styled.div({
  marginTop: "20px",
  display: "flex",
  flexDirection: "row"
});

export const Image = styled.img({
  height: "30px",
  width: "30px"
});

export const Text = styled.h3({
  height: "20px",
  fontSize: "18px",
  color: "White",
  margin: "6px 6px 6px 0px"
});

export const Select = styled.select({
  marginTop: "30px",
  height: "40px",
  fontSize: "18px",
  color: "#f5f5f5",
  width: "150px",
  backgroundColor: "#eae9e93b",
});

export const SearchBtn = styled.button({
  marginTop: "30px",
  height: "40px",
  fontSize: "18px",
  width: "80px",
  color: "#f5f5f5",
  backgroundColor: "#eae9e93b",
  borderColor: "#eae9e93b"
});

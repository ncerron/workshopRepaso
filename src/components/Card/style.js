import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  height: "400px",
  width: "700px",
  backgroundColor: "grey",
  margin: "30px"
});

export const Title = styled.h3({
  fontSize: "20px",
  marginLeft: "10px",
  color: "black",
  fontStyle: "black",
  letterSpacing: "0.25px"
});

export const Image = styled.img({
  margin: "auto"
});

export const ColumnContainer = styled.div(
  {
    flex: "50%",
    padding: "20px"
  },
  props => ({
    marginTop: props.marginTop
  })
);

export const DescriptionContainer = styled.div(
  {
    height: "30px",
    display: "flex",
    flexDirection: "row"
  },
  props => ({
    marginTop: props.marginTop
  })
);

export const Text = styled.h3(
  {
    marginLeft: "2px",
    fontSize: "18px",
    color: "#2b2b2b",
    letterSpacing: "0.25px"
  },
  props => ({
    color: props.color
  })
);

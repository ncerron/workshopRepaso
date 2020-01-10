import styled from "@emotion/styled";

export const ModalContainer = styled.div({
  display: "flex",
  position: "fixed",
  zIndex: "10",
  height: "400px",
  width: "700px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "#a8a8a866",
  boxShadow:
    "0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 15px 8px rgba(0, 0, 0, 0.12), 0 12px 15px 3px rgba(0, 0, 0, 0.14)",
  backgroundColor: "white"
});

export const Container = styled.div({
  display: "flex",
  height: "400px",
  width: "700px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "#a8a8a866",
  margin: "30px",
  boxShadow: "10px 10px 5px -4px rgba(0, 0, 0, 0.12)"
});

export const Title = styled.h3({
  fontSize: "20px",
  marginLeft: "10px",
  color: "black",
  fontStyle: "black",
  letterSpacing: "0.25px"
});

export const Image = styled.img(
  {
    margin: "auto"
  },
  props => ({
    width: props.width,
    height: props.height,
    marginTop: props.marginTop
  })
);

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
    alignItems: "baseline",
    flexDirection: "row"
  },
  props => ({
    marginTop: props.marginTop,
    // flexDirection: props.flexDirection
    justifyContent: props.justifyContent
  })
);

export const Text = styled.p(
  {
    height: "20px",
    marginLeft: "4px",
    fontSize: "18px",
    color: "#757272",
    letterSpacing: "0.25px"
  },
  props => ({
    color: props.color
  })
);

export const Input = styled.input(
  {
    height: "20px",
    marginLeft: "4px",
    fontSize: "18px",
    color: "#757272",
    letterSpacing: "0.25px"
  },
  props => ({
    marginLeft: props.marginLeft
  })
);

export const CloseModal = styled.button({
  width: "50px",
  height: "50px",
  fontSize: "20px",
  alignSelf: "right",
  backgroundColor: "#f8f4f400",
  border: "none"
});

export const Save = styled.button({
  width: "100px",
  height: "50px",
  backgroundColor: "white",
  borderColor: "#57369469",
  margin: "20px",
  fontSize: "18px",
  color: "#757272c2",
  borderRadius: "0.5em",
  borderWidth: "3px"
});

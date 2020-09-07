import styled from "@emotion/styled";

export const Background = styled.div({
  display: "flex",
});

export const ModalContainer = styled.div({
  zIndex: "10",
  height: "400px",
  width: "700px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "#a8a8a866",
  marginTop: "100px",
  backgroundColor: "white",
  boxShadow: "10px 10px 5px -4px rgba(0, 0, 0, 0.12)",
});

export const Container = styled.div({
  display: "flex",
  height: "400px",
  width: "700px",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "#a8a8a866",
  backgroundColor: "white",
  margin: "30px",
  ":hover": {
    boxShadow: "10px 10px 5px -4px rgba(0, 0, 0, 0.12)",
  },
});

export const Title = styled.h3({
  fontSize: "20px",
  marginLeft: "10px",
  color: "black",
  fontStyle: "black",
  letterSpacing: "0.25px",
});

export const Image = styled.img(
  {
    margin: "auto",
    width: "360px",
    height: "266px",
  },
  (props) => ({
    width: props.width,
    height: props.height,
    marginTop: props.marginTop,
  })
);

export const ColumnContainer = styled.div(
  {
    flex: "50%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  (props) => ({
    marginTop: props.marginTop,
  })
);

export const DescriptionContainer = styled.div(
  {
    height: "30px",
    display: "flex",
    alignItems: "baseline",
    flexDirection: "row",
  },
  (props) => ({
    marginTop: props.marginTop,
    // flexDirection: props.flexDirection
    justifyContent: props.justifyContent,
  })
);

export const Text = styled.p(
  {
    height: "20px",
    marginLeft: "4px",
    fontSize: "18px",
    color: "#757272",
    letterSpacing: "0.25px",
  },
  (props) => ({
    color: props.color,
  })
);

export const Input = styled.input(
  {
    height: "20px",
    marginLeft: "4px",
    fontSize: "18px",
    color: "#757272",
    letterSpacing: "0.25px",
  },
  (props) => ({
    marginLeft: props.marginLeft,
    marginTop: props.marginTop,
    width: props.width,
  })
);

export const CloseModal = styled.button({
  margin: "0px",
  width: "50px",
  height: "50px",
  fontSize: "20px",
  alignSelf: "right",
  backgroundColor: "#f8f4f400",
  border: "none",
});

export const Button = styled.button({
  width: "90px",
  height: "45px",
  backgroundColor: "white",
  borderColor: "#57369469",
  fontSize: "18px",
  color: "#757272c2",
  borderRadius: "0.5em",
  borderWidth: "3px",
  margin: "5px",
});

export const Label = styled.label(
  {
    margin: "auto",
  },
  (props) => ({
    marginTop: props.marginTop,
  })
);

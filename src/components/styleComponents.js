import styled from "styled-components";

const Row = styled.div`
  margin: 10px 0px;

`
const Column = styled.div`
  float: left;
  width: 25%;
  padding: 0 10px;
  margin-bottom: 20px;
`
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
`
const Container = styled.div`
  margin: auto;
  width: 60%;
  padding: 10px;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer
`;
export { Row, Column, Card, Container, Input, Button }
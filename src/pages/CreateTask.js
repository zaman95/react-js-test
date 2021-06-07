import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Input, Button } from "../components/styleComponents";

class CreateTask extends Component { 

  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
      listsData: []
    }
  }
  
  componentDidMount(){
    let data = localStorage.getItem("listData");
    if(data){
      this.setState({ listsData: JSON.parse(data) })
    }
  }

  saveItem() {
    let { inputValue, listsData } = this.state;

    listsData.push({"id": new Date().getTime(), "name": inputValue})
    localStorage.setItem("listData", JSON.stringify(listsData));
    this.props.history.push("/list-tasks");
    console.log("-----item: ", inputValue, listsData);

  }

  render() {
    
    return(
      <>
        <Container>
          <h1>Create List</h1>
          <p>Please fill in this field to create a list.</p>

          <Input type="text" onChange={(e) => this.setState({ inputValue: e.target.value })}/>

          <Button onClick={() => this.saveItem()}>Normal</Button>
        </Container>
      
      </>
    )
  }
}

export default withRouter(CreateTask);

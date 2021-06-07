import React, { Component } from "react";
import styled from "styled-components";
import { Row, Column, Card } from "../components/styleComponents";

class TasksList extends Component { 

  constructor(props){
    super(props)
    this.state = {
      listsData: []
    }
  }

  componentDidMount(){
    let data = localStorage.getItem("listData");
    if(data){
      this.setState({ listsData: JSON.parse(data) })
    }
  }

  render() {
    let { listsData } = this.state;

    return(
      <>
        <Row>
          {listsData.map((item, index) => {
            return(
              <Column key={item.id}>
                <Card>
                  <h3>{item.name}</h3>
                </Card>
              </Column>
            )
          })}
          
        </Row>

      </>
    )
  }
}

export default TasksList;

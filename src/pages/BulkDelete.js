import React, { Component } from "react";
import styled from "styled-components";
import { Row, Column, Card, Input, Button } from "../components/styleComponents";

class BulkDelete extends Component { 

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

  checkItemtoggle(item){
    let { listsData } = this.state;

    let index = listsData.findIndex(e => e.id === item.id);
    if(index !== -1){
      listsData[index]["checked"] = listsData[index]["checked"] ? !listsData[index]["checked"] : true;
    }
  }

  deleteSelected(){
    let { listsData } = this.state;

    let newList = listsData.filter(e => !e["checked"]);
    console.log("--------newlist: ", newList);

    localStorage.setItem("listData", JSON.stringify(newList));
    this.setState({ listsData: newList });
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
                  <Input type="checkbox" onClick={() => this.checkItemtoggle(item)}/>
                  <h3>{item.name}</h3>
                </Card>
              </Column>
            )
          })}

          <Button onClick={() => this.deleteSelected()}>Delete</Button>
        </Row>

      </>
    )
  }
}

export default BulkDelete;

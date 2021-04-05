import React, {Component} from 'react';
import styled from 'styled-components'

const DropAreaStyled = styled.div`
  height: 20px;
  margin-top: -10px;
  margin-bottom: -10px;
  width: 100%;
  background: rgba(0xe9, 0xff, 0xcf, 0.3);
  z-index: 1;

  &.active {
    height: 30px;
    margin-bottom: 0;
    background: #ffff00;
  }
`;


export default class DropArea extends Component {
    state = {active: false}
    onDragOver = (e) => {
        const intersection = e.dataTransfer.types.filter(x => this.props.token.includes(x));
        if(intersection.length>0) {
            e.preventDefault()
        }
    }
    onDragEnter = (e) => {
        //const data = e.dataTransfer.getData("text/plain");
        console.log("onDragEnter",this.props.token)
        const intersection = e.dataTransfer.types.filter(x => this.props.token.includes(x));
        if(intersection.length>0) {
            e.preventDefault();
            this.setState({active: true})
        }
    }
    onDragLeave = (e) => {
        e.preventDefault();
        this.setState({active: false})
    }
    onDrop = (e) => {
        e.preventDefault();
        e.persist();
        this.setState({active: false}, ()=>{
            if(e.dataTransfer.getData("category")){
                this.props.actions.addCategory( this.props.path )
            }else if(e.dataTransfer.getData("contenttext")){
                this.props.actions.addContent( this.props.path, 'text' )
            }else if(e.dataTransfer.getData("contentpicture")){
                this.props.actions.addContent( this.props.path, 'picture' )
            }
        })
    }
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <DropAreaStyled className={(s.active ? 'active':'') + ' '+ p.path}
                            onDragOver={this.onDragOver}
                            onDrop={this.onDrop}
                            onDragEnter={this.onDragEnter}
                            onDragLeave={this.onDragLeave}>
            </DropAreaStyled>
        )
    }
}
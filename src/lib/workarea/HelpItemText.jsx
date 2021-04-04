import React, {Component} from 'react';
import styled from 'styled-components'
import EditableText from "../components/EditableText";
import HelpItemRemoveButton from "./HelpItemRemoveButton";

const HelpItemTextStyled = styled.div`
  position: relative;      
  background: #faebd7;
  margin-left: 15px;
  padding: 0 15px 5px;
  margin-bottom: 5px;
  >div{
    min-height: 18px;
    width: calc(100% - 20px);
  }
  .hit-delete{
    top: 2px;
  }
  .fa-undo{
    top: -3px!important;
  }

`;


export default class HelpItemText extends Component {
    onInput = (e) => {
        console.log(e.target.innerHTML, e.target.innerText)
    }
    onBlur = (e) => {
        const p = this.props;
        p.actions.editBundleParam(p.path,'text', e.target.innerHTML)
    }
    render() {
        const p = this.props;
        const s = this.state;
        const i = p.item;
        return (
            <HelpItemTextStyled>
                <EditableText item={i} name="text" actions={p.actions} path={p.path}/>
                <HelpItemRemoveButton className="hit-delete" path={p.path} onRemove={p.actions.removeEntity}/>
            </HelpItemTextStyled>
        )
    }
}
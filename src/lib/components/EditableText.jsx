import React, {Component} from 'react';
import styled from 'styled-components'

const EditableTextStyled = styled.div`
  position: relative;
  .et-content {
    min-height: 24px;
    line-height: 24px;
    padding-right: 25px;
    padding-top: 4px;
  }
  i.fa-undo{
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 5px;
    font-size: 13px;  
  }
`;


export default class EditableText extends Component {
    onInput = (e) => {
        //console.log(e.target.innerHTML, e.target.innerText)
    }
    onBlur = (e) => {
        const p = this.props;
        const newContent = e.target.innerHTML;
        if(newContent !== p.item.options[p.name]) {
            p.actions.editBundleParam(p.path, p.name, newContent)
        }
    }
    onUndo = (content) => {
        const p = this.props;
        p.actions.editBundleParam(p.path, p.name, p.item.options[p.name+'Initial'])
    }
    render() {
        const p = this.props;
        const s = this.state;
        const canUndo = p.item.options[p.name]
            && p.item.options[p.name + 'Initial']
            && p.item.options[p.name] !== p.item.options[p.name+'Initial']
        return (
            <EditableTextStyled className={p.className}>
                <div contentEditable={true} className="et-content"
                     suppressContentEditableWarning={true}
                     onInput={this.onInput} onBlur={this.onBlur}
                     dangerouslySetInnerHTML={{__html: p.item.options[p.name]}}/>
                    {canUndo && <i className="fas fa-undo" onClick={this.onUndo}/> }
            </EditableTextStyled>
        )
    }
}
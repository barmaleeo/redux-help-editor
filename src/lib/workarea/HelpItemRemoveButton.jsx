import React, {Component} from 'react';
import styled from 'styled-components'

const HelpItemRemoveButtonStyled = styled.button`
  position: absolute;
  right: 2px;
  top: 0;   
`;


export default class HelpItemRemoveButton extends Component {
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <HelpItemRemoveButtonStyled className={p.className}
                                        onClick={p.onRemove.bind(this, p.path)}>
                <i className="fas fa-trash-alt"/>
            </HelpItemRemoveButtonStyled>
        )
    }
}
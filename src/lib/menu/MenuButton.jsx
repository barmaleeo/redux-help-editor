import React, {PureComponent} from 'react';
import styled from 'styled-components'

const MenuButtonStyled = styled.button`
    //font-size: 20px;
  margin-right: 2px;
  width: 30px;
  &:disabled{
    cursor: not-allowed;
    opacity: 0.65;
    box-shadow: none;
  }
`;


export default class MenuButton extends PureComponent {
    onDragStart = (e) => {
        e.dataTransfer.setData(this.props.draggable, true);
    }
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <MenuButtonStyled className="" draggable={!!p.draggable}
                              disabled={p.disabled}
                              onClick={p.onClick}
                              onDragStart={this.onDragStart}>
                <i className={p.icon}/>
            </MenuButtonStyled>
        )
    }
}
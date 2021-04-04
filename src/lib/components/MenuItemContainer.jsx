import React, {Component} from 'react';
import styled from 'styled-components'

const MenuItemContainerStyled = styled.div`
    display: flex;
    align-items: center;
    height: 23px;
    border: 1px solid #ccc;
    border-radius: 4px;
    .mic-ruler{
      margin-right: 2px;
      height: 100%;
      width: 10px;
      background: #ddd;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
`;


export default class MenuItemContainer extends Component {
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <MenuItemContainerStyled className="">
                <div className="mic-ruler">

                </div>
                {p.children}
            </MenuItemContainerStyled>
        )
    }
}
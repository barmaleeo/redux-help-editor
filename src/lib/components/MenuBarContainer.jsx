import React, {PureComponent} from 'react';
import styled from 'styled-components'

const MenuBarContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  :not(:first-child){
    margin-left: 20px;
  }
`;


export default class MenuBarContainer extends PureComponent {
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <MenuBarContainerStyled className="">
                {p.children}
            </MenuBarContainerStyled>
        )
    }
}
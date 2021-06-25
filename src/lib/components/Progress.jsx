import React, {Component} from 'react';
import styled from 'styled-components'

const ProgressStyled = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.2);
  z-index: 1000000;
`;


export default class Progress extends Component {
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <ProgressStyled className="">
                {p.content ?? 'МИНУТОЧКУ...'}
            </ProgressStyled>
        )
    }
}
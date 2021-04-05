import React, {PureComponent} from 'react';
import styled from 'styled-components'
import MenuBarContainer from "./components/MenuBarContainer";
import MenuItemBundles from "./menu/MenuItemBundles";
import WorkArea from "./workarea/WorkArea";
import SaveControl from "./menu/SaveControl";
import MenuItemAdd from "./menu/MenuItemAdd";

const ReactHelpEditorStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
    font-size: 18px;
  *{
    box-sizing: border-box;
  }
  button{
    font-size: 13px;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid #777;
  }

`;


export default class ReactHelpEditor extends PureComponent {
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <ReactHelpEditorStyled className="">
                <MenuBarContainer>
                    <MenuItemBundles bundle={p.bundle} init={p.init} onSelect={p.actions.selectBundle}/>
                    <SaveControl bundle={p.bundle} init={p.init} actions={p.actions}/>
                    <MenuItemAdd bundle={p.bundle} init={p.init} actions={p.actions}/>
                </MenuBarContainer>
                <WorkArea bundle={p.bundle} init={p.init} actions={p.actions}/>
            </ReactHelpEditorStyled>
        )
    }
}
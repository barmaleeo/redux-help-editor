import React, {PureComponent} from 'react';
import styled from 'styled-components'
import MenuItemContainer from "../components/MenuItemContainer";

const MenuItemBundlesStyled = styled.select`
  background: #ddf5ff;
  min-width: 50px;
  
`;


export default class MenuItemBundles extends PureComponent {
    render() {
        const p = this.props;
        //const s = this.state;
        return (
            <MenuItemContainer>
                <MenuItemBundlesStyled className={p.className} value={p.bundle.id}
                                       onChange={e=> {p.onSelect(e.target.value)}}>
                    {!(p.bundle.id > 0) && <option key={0} value={0}>Не выбрано</option>}
                    {p.init.bundles.map(i => (
                        <option key={i.id} value={i.id}>{i.options.name}</option>
                    ))}
                </MenuItemBundlesStyled>
            </MenuItemContainer>
        )
    }
}
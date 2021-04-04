import React, {PureComponent} from 'react';
import MenuItemContainer from "../components/MenuItemContainer";
import MenuButton from "./MenuButton";

//import './MenuItemAddStyle';

export default class MenuItemAdd extends PureComponent {
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <MenuItemContainer className="">
                <MenuButton icon="fas fa-folder-plus" draggable="category"/>
                <MenuButton icon="fas fa-file-alt" draggable="contentText"/>
                <MenuButton icon="fas fa-image" draggable="contentPicture"/>
            </MenuItemContainer>
        )
    }
}
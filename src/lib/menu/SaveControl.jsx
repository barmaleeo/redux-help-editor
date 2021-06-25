import React, {Component} from 'react';
import MenuItemContainer from "../components/MenuItemContainer";
import MenuButton from "./MenuButton";


export default class SaveControl extends Component {
    render() {
        const p = this.props;
        const s = this.state;
        const b = p.bundle;
        const h = b.history;
        
        return (
            <MenuItemContainer>

                <MenuButton icon="fas fa-file"/>
                <MenuButton icon="fas fa-undo" disabled={b.historyPoint < 0} onClick={p.actions.undo}/>
                <MenuButton icon="fas fa-redo" disabled={h.length <= b.historyPoint+1} onClick={p.actions.redo}/>
                <MenuButton icon="fas fa-save" onClick={p.actions.saveBundle.bind(this, p.bundle)}
                            disabled={!(p.bundle.id>0)}/>

            </MenuItemContainer>
        )
    }
}
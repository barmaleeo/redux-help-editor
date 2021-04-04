import React, {Component} from 'react';
import HelpItemText from "./HelpItemText";
import HelpItemPicture from "./HelpItemPicture";


export default class HelpItem extends Component {
    render() {
        const p = this.props;
        const i = p.item;
        switch (+i.type){
            case 1:
                return (
                    <HelpItemPicture {...p}/>
                )
            default:
                return (
                    <HelpItemText {...p}/>
                )
        }
    }
}
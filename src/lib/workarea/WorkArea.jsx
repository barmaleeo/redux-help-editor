import React, {PureComponent} from 'react';
import styled from 'styled-components'
import HelpCategory from "./HelpCategory";
import EditableText from "../components/EditableText";
import DropArea from "../components/DropArea";

const WorkAreaStyled = styled.div`
    background: beige;
    width: 100%;
    height: 100%;
    padding: 5px 15px;
`;


export default class WorkArea extends PureComponent {
    onBlur = (e) => {
        const p = this.props;
        p.actions.editBundleParam(null, 'name', e.target.innerHTML)
    }
    render() {
        const p = this.props;
        const s = this.state;
        const b = p.bundle;
        const items = [{delimiter: true,}];
        let id = 1;
        for(const i of b.children ?? []){
            items.push(i);
            items.push({delimiter: true,})
        }

        let catN = 0;
        return (
            <WorkAreaStyled className="">
                <EditableText item={b} name="name" actions={p.actions}/>
                {items.map((i, k) => (i.delimiter ?
                   <DropArea key={k} token={['category']} path={'children.+' + catN}  actions={p.actions}/>:
                    <HelpCategory key={k} path={"children."+(catN++)} category={i} init={p.init} actions={p.actions}/>
                ))}

            </WorkAreaStyled>
        )
    }
}
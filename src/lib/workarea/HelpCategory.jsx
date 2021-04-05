import React, {Component} from 'react';
import styled from 'styled-components'
import HelpItem from "./HelpItem";
import EditableText from "../components/EditableText";
import DropArea from "../components/DropArea";

const HelpCategoryStyled = styled.div`
  //padding:5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: #e6f5ff;
  margin-left: 15px;
  width: calc(100% - 20px);
  .hc-name-container{
    background: #eee;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #ccc;
    .hc-n-name{
      flex: 1;
      margin-left: 15px;
      min-height: 30px;
      line-height: 30px;
      padding-right: 15px;
      border-right: 1px solid #ccc;
    }
    .hc-n-buttons{
      padding-left: 5px;
      line-height: 28px;
      button{
        display: inline-block;
        margin-right: 5px;
        i.rotated{
          transform: rotate(180deg);
        }
      }
    }
  }
  .hc-items-container{
    padding-bottom: 10px;
  }
  .hc-inner-container{
    padding-bottom: 10px;
  }
`;


export default class HelpCategory extends Component {
    onBlur = (e) => {
        const p = this.props;
        p.actions.editBundleParam(p.path, 'name', e.target.innerHTML)
    }
    render() {
        const p = this.props;
        const s = this.state;
        const c = p.category;
        const cats = [{delimiter: true,}];
        const items = [{delimiter: true,}];
        if(!c.hide) {
            for (const i of c.children ?? []) {
                cats.push(i);
                cats.push({delimiter: true,})
            }
            for (const i of c.items ?? []) {
                items.push(i);
                items.push({delimiter: true,})
            }
        }
        let catN = 0;
        let itemN = 0;
        return (
            <HelpCategoryStyled className="">
                <div className="hc-name-container">
                    <EditableText className="hc-n-name" item={c} name="name"
                                  actions={p.actions} path={p.path}/>
                    <div className="hc-n-buttons">
                        <button onClick={p.actions.removeEntity.bind(this, p.path)}>
                            <i className="fas fa-trash-alt"/>
                        </button>
                        <button onClick={p.actions.hideCategory.bind(this, p.path, !c.hide)}>
                            <i className={'fas fa-chevron-down' +(c.hide ? ' rotated':'')}/>
                        </button>
                    </div>
                </div>
                <div className="hc-inner-container">
                    {cats.map((i,k) => (i.delimiter ?
                        <DropArea key={k} path={p.path+'.children.+' + catN}
                                  token={['category']} actions={p.actions}/>:
                        <HelpCategory key={k} path={p.path+'.children.'+(catN++)}
                                      category={i} ihit={p.init} actions={p.actions}/>
                    ))}
                </div>
                <div className="hc-items-container">
                    {items.map((i,k) => (i.delimiter ?
                        <DropArea key={k} path={p.path+'.items.+' + itemN}
                                  token={['contenttext', 'contentpicture']} actions={p.actions}/>:
                        <HelpItem key={k} path={p.path+'.items.'+ (itemN++)}
                                  item={i} ihit={p.init} actions={p.actions}/>
                    ))}
                </div>
            </HelpCategoryStyled>
        )
    }
}
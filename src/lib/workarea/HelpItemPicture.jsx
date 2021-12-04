import React, {Component} from 'react';
import styled from 'styled-components'
import EditableText from "../components/EditableText";
import HelpItemRemoveButton from "./HelpItemRemoveButton";
//import picture from '../resources/picture.svg'

const HelpItemPictureStyled = styled.div`
  position: relative;
  margin-left: 15px;
  width: calc(100% - 20px);
  margin-bottom: 5px;

  .hlp-inner {
    width: 300px;

    .hip-picture {
      position: relative;
      width: 100%;
      height: 200px;
      background-color: #d2e4b7;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      display: flex;
      align-items: center;
      justify-content: center;

      .hip-p-suggest {
        text-align: center;
        max-width: 60%;
      }

      &.active {
        background-color: yellow;

        .hip-p-suggest {
          display: none;
        }
      }

      .hip-p-instruments {
        position: absolute;
        top: 3px;
        right: 3px;
        display: flex;
        color: #ffffff9f;
        i{
          cursor: pointer;
          margin-left: 3px;
        }
      }
    }

    .hlp-descr {
      font-style: italic;
    }
  }
`


export default class HelpItemPicture extends Component {
    state = {}
    onDragOver = (e) => {
        if(e.dataTransfer.types.includes('Files')) {
            e.preventDefault()
        }
    }
    onDragEnter = (e) => {
        if(e.dataTransfer.types.includes('Files')) {
            //console.log(e.dataTransfer.types)
            e.preventDefault()
            this.setState({active: true})
        }
    }
    onDragLeave = (e) => {
        if(e.dataTransfer.types.includes('Files')) {
            e.preventDefault()
            this.setState({active: false})
        }
    }
    onDrop = (e) => {
        if(e.dataTransfer.types.includes('Files')) {
            e.preventDefault()
            e.persist();
            this.setState({active: false}, ()=>{
                const files = e.dataTransfer.files;
                //console.log('drop', e.dataTransfer.files);
                if(files.length > 0) {
                    const p = this.props;
                    const fileRader = new FileReader();
                    fileRader.onload = (e) => {
                        p.actions.addItemImage(p.path, files[0], e.target.result)
                        // self.props.onAddImage(self.props.data.token,
                        //     {file: files[0], name: files[0].name, src: e.target.result});
                    };
                    fileRader.readAsDataURL(files[0])
                }
            })
        }
    }
    onFullScreen = (e) => {
        e.target.parentElement.parentElement.requestFullscreen();
    }
    onRemoveImage = (e) => {
        this.props.actions.removeItemImage(this.props.path)
    }
    render() {
        const p = this.props;
        const s = this.state;
        const i = p.item;
        let url;
        if(typeof i.options.unsaved === 'object'){
            url = i.options.unsaved.content;
        }else {
            url = '/' +p.init.imageUrl + '/' + i.id
        }
        return (
            <HelpItemPictureStyled className="">
                <div className="hlp-inner">
                    <div className={'hip-picture' + (s.active ? ' active':'') + (url ? ' visible': '')}
                         onDragEnter={this.onDragEnter}
                         onDragOver={this.onDragOver}
                         onDragLeave={this.onDragLeave}
                         onDrop={this.onDrop}
                         style={{backgroundImage: "url("+url+")"}}>
                        {!url &&
                            <div className="hip-p-suggest">перетащите сюда изображение</div>
                        }
                        {url &&
                            <div className="hip-p-instruments">
                                <i className="fas fa-trash-alt" onClick={this.onRemoveImage}/>
                                <i className="fas fa-expand-arrows-alt"
                                   onClick={this.onFullScreen}/>
                            </div>
                        }

                    </div>
                    <EditableText className="hlp-descr" item={i} name="descr"
                                  path={p.path} actions={p.actions}/>
                </div>
                <HelpItemRemoveButton path={p.path} onRemove={p.actions.removeEntity}/>
            </HelpItemPictureStyled>
        )
    }
}
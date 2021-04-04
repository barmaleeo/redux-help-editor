import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ReactHelpEditor from "./ReactHelpEditor";
import * as reactHelpEditorActions from './reactHelpEditorActions';

//import './HelpEditorAppStyle';


class ReactHelpEditorApp extends Component {
    render() {
        const p = this.props;
        const s = this.state;
        return (
            <ReactHelpEditor bundle={p.bundle} init={p.init} actions={p.actions}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        init:   state.init,
        bundle: state.bundle,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(reactHelpEditorActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactHelpEditorApp)
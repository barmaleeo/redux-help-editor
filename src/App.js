
import './App.css';
import ReactHelpEditorApp from "./lib/ReactHelpEditorApp";
import {Provider} from "react-redux";
import configureStoreDev from "./lib/configureStoreDev";
import DevTools from "./lib/components/DevTools";

const bundles = [
    {id: 1, options: {name: "FAQ мобильного приложения курьера"}},
    {id: 2, options: {name: "FAQ сайта - курьеры"}},
];

const bundleDeails = [
    {
        id: 1,
        options: {name: "FAQ мобильного приложения курьера"},
        children: [{
            id: 1,
            options: {name: "Регистрация Курьера"},
            children: [
                {
                    id: 2,
                    options: {name: 'Где скачать приложение'},
                    items: [{
                        id: 1,
                        type: 0,
                        options: {
                            text: 'Lorem <a href="#type1">Ссылка</a>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        }
                    },
                    {
                        id: 2,
                        type: 1,
                        options: {}
                    }]
                }
            ]
        }]
    },
    {
        id: 2,
        options: {name: "FAQ сайта - курьеры"},
        children: [{
            id: 3,
            options: {name: "Работа с приложением курьера"},
            children: [
                {
                    id: 4,
                    options: {name: 'Просмотр доступных заказов'},
                    items: [{
                        id: 2,
                        type: 0,
                        options: {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        }
                    }]
                }
            ]
        }]
    }
]

window.$ = {
    get: (path, params, onSuccess)=>{
        let response;
        if(typeof onSuccess === 'function'){
            if(path === '/help-editor/save-bundle/') {
                response = {
                    status: 'error',
                    msg: 'Debug Error',
                }
            }else if(path === '/help-editor/init/') {
                response = {
                    status:'ok',
                    imageUrl: '/help-item/',
                    bundles: bundles,
                }
            }else if(path === '/help-editor/select-bundle/'){
                for(const bd of bundleDeails){
                    if(+bd.id === +params.id ){
                        response = {
                            status: 'ok',
                            bundle: bd,
                        }
                        break;
                    }
                }
            }
        }

        if(response){
            setTimeout(() => {onSuccess(response)}, 500)
        }
        return {fail: () => {},always: () => {}, }
    },
    post: (url, params) => {
        return {
            fail: () => { return {messageText: 'Mock ajax port fail on'+ url} }
        }
    },
    ajax: async (config)=> {
        let response;
        if(typeof config.success === 'function'){
            if(config.url === 'help-editor/save-bundle') {

                const object = Array.from(config.data).reduce((o, [k, v]) => {
                    let a = v,
                        b, i,
                        m = k.split('['),
                        n = m[0],
                        l = m.length;
                    if (l > 1) {
                        a = b = o[n] || [];
                        for (i = 1; i < l; i++) {
                            m[i] = (m[i].split(']')[0] || b.length);
                            b = b[m[i]] = ((i + 1) === +l) ? v : b[m[i]] || [];
                        }
                    }
                    return { ...o, [n]: a };
                }, {});
                const files = object.files ?? [];
                const filesWaiting = []
                const bundle = {id: object.id, options: object.options, children: object.children};
                function iterateObject(obj){
                    for(let key in obj) {
                        if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
                            iterateObject(obj[key])
                        }else if(key === 'fileName'){
                            for(const file of files){
                                if(file.name === obj[key]){
                                    filesWaiting.push(file.name)
                                    const reader = new FileReader()
                                    reader.onload = (e)=>{
                                        for(let n in filesWaiting){
                                            if(filesWaiting[n] === file.name){
                                                filesWaiting.splice(n, 1);
                                                break;
                                            }
                                        }
                                        obj.url = e.target.result;
                                        obj[key] = undefined;
                                    }
                                    reader.readAsDataURL(file)
                                }
                            }
                        }
                    }
                }
                iterateObject(bundle)
                const sleep = function (ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                while(filesWaiting.length > 0){
                    await sleep(100)
                }

                for(const b of bundles){
                    if(+b.id === +bundle.id){
                        b.options = bundle.options;
                        b.children = bundle.children;
                    }
                }

                response = {
                    status: 'ok',
                    bundle: bundle,
                }

            }
        }
        if(response){
            setTimeout(() => {config.success(response)}, 500)
        }
        return {fail: () => {},always: () => {}, }
    }
}

function App() {

    return (
        <Provider store={configureStoreDev()}>
            <div id="provider-root">
                <ReactHelpEditorApp/>
                <DevTools/>
            </div>
        </Provider>
    );
}

export default App;

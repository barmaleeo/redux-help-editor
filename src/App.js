
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
        "id": 1,
        "options": {
            "name": "FAQ приложения"
        },
        "children": [
            {
                "id": "12",
                "parent_id": null,
                "options": {
                    "name": "Вы оплачиваете проезд?"
                },
                "disabled": "0",
                "items": [],
                "children": []
            },
            {
                "id": "13",
                "parent_id": null,
                "options": {
                    "name": "Вы оплачиваете телефонную связь?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 11,
                        "type": 0,
                        "options": {
                            "text": "Мы не оплачиваем телефонную связь, но для связи с офисом в Приложении есть кнопка \"Вызов оператора\". Советуем пользоваться ей по любому вопросу. Оператор Вам перезвонит сам."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "14",
                "parent_id": null,
                "options": {
                    "name": "Когда можно приехать на собеседование?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 12,
                        "type": 0,
                        "options": {
                            "text": "Собеседование проводится по вторникам и четвергам в 16:00.&nbsp;"
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "15",
                "parent_id": null,
                "options": {
                    "name": "Какие документы надо предоставить для работы?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 32,
                        "type": 0,
                        "options": {
                            "text": "Необходимо взять с собой на собеседование паспорт, СНИЛС, ИНН."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "16",
                "parent_id": null,
                "options": {
                    "name": "Где проходит собеседование?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 13,
                        "type": 0,
                        "options": {
                            "text": "Мы проводим собеседование в нашем офисе вблизи станции метро \"Достоевская\" по адресу: 3-ий Самотечный переулок, 11с1."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "17",
                "parent_id": null,
                "options": {
                    "name": "Какой график работы?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 14,
                        "type": 0,
                        "options": {
                            "text": "График свободный. Вы сами выбираете когда и сколько работать."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "19",
                "parent_id": null,
                "options": {
                    "name": "Сколько можно заработать в месяц?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 15,
                        "type": 0,
                        "options": {
                            "text": "Все зависит от того, насколько активно Вы будете работать. Можно заработать около 45 тысяч рублей."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "20",
                "parent_id": null,
                "options": {
                    "name": "Есть приложение для Айфона?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 16,
                        "type": 0,
                        "options": {
                            "text": "На данный момент Приложения для Айфона нет, но в ближайшее время наши разработчики начнут заниматься этим."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "21",
                "parent_id": null,
                "options": {
                    "name": "У вас официальное трудоустройство?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 31,
                        "type": 0,
                        "options": {
                            "text": "Мы принимаем на работу только самозанятых курьеров."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "22",
                "parent_id": null,
                "options": {
                    "name": "Я могу отказаться от заказа?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 23,
                        "type": 0,
                        "options": {
                            "text": "Да, от заказа можно отказаться без штрафных санкций, но не позднее, чем за два часа до начала его исполнения."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "23",
                "parent_id": null,
                "options": {
                    "name": "Какие есть штрафные санкции?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 24,
                        "type": 0,
                        "options": {
                            "text": "Штраф будет наложен, если Вы: опоздаете к клиенту более, чем на 30 минут; если не приедете по заказу; если откажетесь от выполнения менее, чем за 2 часа до начала исполнения; за нанесение ущерба репутации компании; за повреждение или утрату груза; за введение в заблуждение сотрудников компании."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "24",
                "parent_id": null,
                "options": {
                    "name": "Почему изменилось вознаграждение по заявке?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 29,
                        "type": 0,
                        "options": {
                            "text": "Вознаграждение складывается из нескольких параметров. Учитывается: время в пути; вес груза; вечернее время доставки (после 20:00); ожидание на точке свыше 15 минут. Если вознаграждение изменилось, то, вероятнее всего, изменился какой-то из параметров."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "25",
                "parent_id": null,
                "options": {
                    "name": "Что такое овердрафт?"
                },
                "disabled": "0",
                "items": [],
                "children": []
            },
            {
                "id": "26",
                "parent_id": null,
                "options": {
                    "name": "Что делать, если отправителя/получателя нет на месте?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 25,
                        "type": 0,
                        "options": {
                            "text": "Закажите обратный звонок через кнопку \"Вызов оператора\". Наш сотрудник свяжется с Вами и объяснит как действовать в этой ситуации."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "27",
                "parent_id": null,
                "options": {
                    "name": "Какое максимальное ожидание отправителя/получателя на точке?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 17,
                        "type": 0,
                        "options": {
                            "text": "Максимальное ожидание на точке 30 минут, если иное не указано в заявке. При этом за ожидание свыше 15 минут курьер получает надбавку к вознаграждению."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "28",
                "parent_id": null,
                "options": {
                    "name": "Что такое пакетированная заявка?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 26,
                        "type": 0,
                        "options": {
                            "text": "Пакетированнная заявка содержит в себе три и более точек на маршруте. Например, надо забрать документы в точке А, отвезти для подписания на точку В и вернуть документы на точку А. Такая заявка содержит в себе два отрезка пути и называется пакетированной."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "29",
                "parent_id": null,
                "options": {
                    "name": "Какой график работы офиса?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 22,
                        "type": 0,
                        "options": {
                            "text": "В настоящее время офис работает по вторникам и четвергам с 9:30 до 18:00"
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "30",
                "parent_id": null,
                "options": {
                    "name": "Какой график работы контакт-центра?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 21,
                        "type": 0,
                        "options": {
                            "text": "Операторы контакт-центра на связи ежедневно с 9:30 до 21:00"
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "31",
                "parent_id": null,
                "options": {
                    "name": "Кто виноват и Что делать?&nbsp;"
                },
                "disabled": "0",
                "items": [],
                "children": []
            },
            {
                "id": "32",
                "parent_id": null,
                "options": {
                    "name": "Почему не приходят уведомления об активных заявках?"
                },
                "disabled": "0",
                "items": [],
                "children": []
            },
            {
                "id": "33",
                "parent_id": null,
                "options": {
                    "name": "Почему Приложение не дает закрепить заказ?"
                },
                "disabled": "0",
                "items": [],
                "children": []
            },
            {
                "id": "34",
                "parent_id": null,
                "options": {
                    "name": "Почему уменьшилась сумма на моем счете?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 30,
                        "type": 0,
                        "options": {
                            "text": "Скорее всего Вы приняли наличные денежные средства от Отправителя или Получателя. В этом случае принятая сумма вычетается с Вашего счета."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "35",
                "parent_id": null,
                "options": {
                    "name": "Что делать, если изменился номер телефона?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 18,
                        "type": 0,
                        "options": {
                            "text": "О смене номера телефона необходимо сообщить в офис."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "36",
                "parent_id": null,
                "options": {
                    "name": "Важно ли своевременно менять статусы по заявке?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 27,
                        "type": 0,
                        "options": {
                            "text": "Да, это очень важно и является обязательным условием. Во-первых, если ожидание на точке будет больше 15 минут, Вы получите надбавку. Во-вторых, мы несем ответственность перед клиентом за точность доставки. В-третьих, наша компания должна располагать достоверными сведениями по заявке, если у Заказчика возникнут вопросы."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "37",
                "parent_id": null,
                "options": {
                    "name": "В каких случаях оформляется Ложный вызов?"
                },
                "disabled": "0",
                "items": [],
                "children": []
            },
            {
                "id": "38",
                "parent_id": null,
                "options": {
                    "name": "Что такое Ложный вызов?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 28,
                        "type": 0,
                        "options": {
                            "text": "Этот статус присваивается заявке, если ее невозможно выполнить по вине Заказчика/Отправителя/Получателя. Например, курьер прибыл на точку А, но Отправителя нет на месте в указанное в заявке время и он не выходит на связь."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "39",
                "parent_id": null,
                "options": {
                    "name": "Что делать, если груз не соответствует описанию в заявке?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 20,
                        "type": 0,
                        "options": {
                            "text": "О несоответствии груза описанию необходимо сразу сообщить в офис."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "40",
                "parent_id": null,
                "options": {
                    "name": "Как связаться с офисом?"
                },
                "disabled": "0",
                "items": [
                    {
                        "id": 19,
                        "type": 0,
                        "options": {
                            "text": "Можно заказать обратный звонок, нажав в Приложении на кнопку \"Вызов оператора\". Мы Вам перезвоним."
                        }
                    }
                ],
                "children": []
            },
            {
                "id": "41",
                "parent_id": null,
                "options": {
                    "name": "Что надо сделать перед собеседованием?"
                },
                "disabled": "0",
                "items": [],
                "children": []
            }
        ]
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
            if(config.url === '/help-editor/save-bundle/') {

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

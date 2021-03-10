import {createState} from "solid-js"

export const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const 
    DEF_HEADER = "Заголовок",
    DEF_BODY = "Тело письма";

function getMailHeader(index){
    return DEF_HEADER + " " + index ?? "" + " " + LOREM_IPSUM.slice(0, index ?? 10);
}

function getMailBody(repeatCount){
    return DEF_BODY + " "  + (repeatCount ?? "") + " " + LOREM_IPSUM.repeat(repeatCount ?? 100);
}

export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

export function genMailList(count){
    let a = [];
    for (let i = 0; i < count; i++) {
        a.push({id:i, header: getMailHeader(i), body: getMailBody(getRandomIntInclusive(0, i))})
    }
    return a;
}

const createDefault = () => ({
    mails: genMailList(11),
    activeMail: {},
});

export const createStore = () => {
    const [state, setState] = createState(createDefault())

    return {
        state,
        reset: () => setState(createDefault()),
        setMails: ml => setState("mails", ml),
        setActiveMail: m => setState("activeMail", m)
    }
}
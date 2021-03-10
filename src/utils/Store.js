import {createState} from "solid-js"

export const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const 
    DEF_HEADER = "Заголовок",
    DEF_BODY = "Тело письма";

function getMailHeader(){
    return DEF_HEADER + " " + LOREM_IPSUM.slice(0, 10);
}

function getMailBody(){
    return DEF_BODY + " " + LOREM_IPSUM.repeat(100);
}

const createDefault = () => ({header: getMailHeader(), body: getMailBody()});

export const createStore = () => {
    const [state, setState] = createState(createDefault())

    return {
        state,
        reset: () => setState(createDefault()),
        setHeader: h => setState("header", h),
        setBody: b => setState("body", b)
    }
}
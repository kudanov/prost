import { createState } from "solid-js"
import { genMailList } from "./GenMailFn";

const 
    INBOX_NAME = "Inbox",
    OUTBOX_NAME = "Sent"


const createDefault = () => ({
    mails: genMailList(11),
    activeMail: {},
    mailBox: INBOX_NAME
});

export const createStore = () => {
    const [state, setState] = createState(createDefault())

    return {
        state,
        reset: () => setState(createDefault()),
        setMails: ml => setState("mails", ml),
        setActiveMail: m => setState("activeMail", m),
        setInboxActive: () => setState("mailBox", INBOX_NAME),
        setOutboxActive: () => setState("mailBox", OUTBOX_NAME)
    }
}
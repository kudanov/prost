import {createComputed, createState} from 'solid-js'

const BTN_TEXT = "Create";
const MIN_BTN_TEXT = "+";

const SearchPanel = () => {
    const [state, setState] = createState({
        isSearchActive: false,
        btnText: BTN_TEXT
    })

    createComputed(() => {setState("btnText", state.isSearchActive ? MIN_BTN_TEXT : BTN_TEXT)})

    return (
        <>
            <button>{state.btnText}</button>
            <input class="placeholder-gray-600 focus:placeholder-gray-400" type="text" placeholder="Find"
                onfocus={() => setState({isSearchActive: true})} 
                onblur={() => setState({isSearchActive: false})} />
        </>
    );
};

export default SearchPanel;
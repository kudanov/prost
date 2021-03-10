import {createSignal} from 'solid-js'

const BTN_TEXT = "Create";
const MIN_BTN_TEXT = "+";

const SearchPanel = () => {
    const [isActive, setActive] = createSignal(false);

    return (
        <>
            <button>{isActive() ? MIN_BTN_TEXT : BTN_TEXT}</button>
            <input class="placeholder-gray-600 focus:placeholder-gray-400" type="text" placeholder="Find"
                onfocus={() => setActive(true)} 
                onblur={() => setActive(false)} />
        </>
    );
};

export default SearchPanel;
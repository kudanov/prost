import {createSignal} from 'solid-js'

const BTN_TEXT = "Create";
const MIN_BTN_TEXT = "+";

const SearchPanel = ({ store }) => {
    const [isActive, setActive] = createSignal(false);

    return (
        <div class="flex flex-col bg-white pt-4">
            <div class="flex flex-row text-sm leading-7">
                <button class="bg-gray-700 px-2 text-gray-100 hover:bg-gray-800 rounded">
                    {isActive() ? MIN_BTN_TEXT : BTN_TEXT}
                </button>
                <input class="placeholder-gray-400 bg-gray-100 ml-2 w-full rounded px-2" 
                    type="text" placeholder="Find"
                    onfocus={() => setActive(true)} 
                    onblur={(e) => setActive(e.target.value)} />
            </div>
            <div class="text-xl my-2">{store.state.mailBox}</div>
        </div>
    );
};

export default SearchPanel;
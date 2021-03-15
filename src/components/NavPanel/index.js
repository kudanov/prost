import style from './style.css'
import SvgButton from '../SvgButton';

const NavPanel = ({store}) => (
    <>
        <style>{style}</style>
        <div class="bg-gray-800 flex flex-col min-h-full relative">
            <ul>
                <li>
                    <SvgButton path="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" 
                        onClick={() => store.setInboxActive()}/>
                </li>
                <li>
                    <SvgButton path="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                        onClick={() => store.setOutboxActive()} />    
                </li>
            </ul>
            <div class="absolute bottom-0">
                <SvgButton path={[
                        "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                        "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ]} />
            </div>
        </div>
    </>
);
  
export default NavPanel;

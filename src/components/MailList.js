import SearchPanel from './SearchPanel';
import defaultAva from '../assets/ava-default.jpg'

const MailListItem = ({mail, store}) => {
  return (
    <div class="flex flex-row h-16 hover:bg-yellow-100 cursor-pointer" 
          onclick={() => store.setActiveMail(mail)}>
      <img alt="Ava" src={defaultAva} class="w-16 rounded-full" />
      <div class="flex flex-col">
        <div class="text-xl overflow-ellipsis">{mail.header}</div>
        <div class="text-sm overflow-ellipsis overflow-hidden">{mail.body}</div>
      </div>
    </div>
  );
}

const MailList = ({store}) => (
  <div class="bg-yellow-200 w-80 overflow-auto">
    <div class="bg-yellow-300 h-12 sticky top-0">
      <SearchPanel />
    </div>
    <ul>
        <For each={store.state.mails} fallback={<div>No Mails</div>}>
          {mail => (
            <li>
              <MailListItem mail={mail} store={store} />
            </li>
          )}
        </For>
    </ul>
  </div>
);

export default MailList;
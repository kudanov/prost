import SearchPanel from './SearchPanel';
import defaultAva from '../assets/ava-default.jpg'

const MailListItem = ({mail, store}) => {
  return (
    <div class="flex flex-row hover:bg-yellow-100 cursor-pointer" 
          onclick={() => store.setActiveMail(mail)}>
      <img alt="Ava" src={defaultAva} class="w-10 h-10 rounded-full" />
      <div class="flex flex-col overflow-x-hidden">
        <div class="truncate">{mail.header}</div>
        <div class="truncate">{mail.body}</div>
      </div>
    </div>
  );
}

const MailList = ({store}) => (
  <div class="bg-yellow-200 w-96 px-6 overflow-y-auto">
    <div class="bg-yellow-300 sticky top-0">
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
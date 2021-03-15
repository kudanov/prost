import SearchPanel from './SearchPanel';
import defaultAva from '../assets/ava-default.jpg'

const MailListItem = ({mail, store}) => {
  return (
    <div class="flex flex-row hover:bg-gray-100 cursor-pointer py-2" 
          onclick={() => store.setActiveMail(mail)}>
      <img alt="Ava" src={defaultAva} class="w-10 h-10 rounded-full" />
      <div class="flex flex-col overflow-x-hidden text-sm w-full border-b">
        <div class="truncate">{mail.header}</div>
        <div class="truncate">{mail.body}</div>
      </div>
    </div>
  );
}

const MailList = ({store}) => (
  <div class="w-96 px-6 pt-4 overflow-y-auto border-gray-200">
    <div class="sticky top-0 border-b">
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
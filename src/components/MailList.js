import SearchPanel from './SearchPanel';
import defaultAva from '../assets/ava-default.jpg'

const MailListItem = ({mail, store}) => {
  return (
    <div class="flex flex-row hover:bg-gray-100 cursor-pointer pt-2" 
          onclick={() => store.setActiveMail(mail)}>
      <img alt="Ava" src={defaultAva} class="w-10 h-10 rounded-full" />
      <div class="flex flex-col overflow-x-hidden text-sm w-full border-b pb-2 pl-2">
        <div class="truncate">{mail.header && mail.header.substring(0, 50)}</div>
        <div class="truncate">{mail.body && mail.body.substring(0, 50)}</div>
      </div>
    </div>
  );
}

const MailList = ({store}) => (
  <div class="w-2/5 px-6 overflow-y-auto border-gray-200">
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
import SearchPanel from "./SearchPanel";

const MailList = () => (
  <div class="bg-yellow-200 w-80">
    <div class="bg-yellow-300 h-12 sticky top-0">
      <SearchPanel />
    </div>
    <p>List of mails</p>
  </div>
);

export default MailList;
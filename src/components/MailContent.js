import MailBar from "./MailBar";

const MailContent = ({activeMail}) => {
  return (
    <div class="w-full flex flex-col relative px-6 pt-4">
      <MailBar />
      <div class="overflow-auto mt-2">
        <div class="sticky top-0 bg-white truncate text-xl pb-2 border-b border-gray-200">{activeMail.header}</div>
        <p>{activeMail.body}</p>
      </div>
    </div>
  );
};

export default MailContent;
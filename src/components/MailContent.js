const MailContent = ({activeMail}) => {
  return (
    <div class="w-full flex flex-col relative px-6">
      <div class="overflow-auto">
        <div class="sticky top-0 bg-white truncate text-xl pt-8 pb-4 border-b border-gray-200">{activeMail.header}</div>
        <p>{activeMail.body}</p>
      </div>
    </div>
  );
};

export default MailContent;
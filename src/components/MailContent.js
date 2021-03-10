const MailContent = ({activeMail}) => {
  return (
    <div class="bg-red-200 w-full flex flex-col relative">
      <div class="overflow-auto">
      <div class="h-12 sticky top-0 bg-red-300">{activeMail.header}</div>
      <p>{activeMail.body}</p>
      </div>
    </div>
  );
};

export default MailContent;
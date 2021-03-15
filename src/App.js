import logo from './assets/logo.svg';
import './App.css';
import NavPanel from './components/NavPanel';
import MailList from './components/MailList';
import MailContent from './components/MailContent';
import {createStore, genMailList, getRandomIntInclusive} from './utils/Store'

const store = createStore()
// setInterval(() => store.setMails(genMailList(getRandomIntInclusive(0, 100))), 3000)
// setInterval(() => store.setActiveMail(store.state.mails[1]), 3000)

function App() {
  return (
    <div class="h-screen bg-gray-100 p-3 flex flex-row">
      <NavPanel />
      <MailList store = {store}/>
      <MailContent activeMail = {store.state.activeMail} />
    </div>
  );
}

export default App;

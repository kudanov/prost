import logo from './assets/logo.svg';
import './App.css';
import NavPanel from './components/NavPanel';
import MailList from './components/MailList';
import MailContent from './components/MailContent';
import {createStore} from './utils/Store'

const store = createStore()
// setInterval(() => store.setMails(genMailList(getRandomIntInclusive(0, 100))), 3000)
// setInterval(() => store.setActiveMail(store.state.mails[1]), 3000)

function App() {
  return (
    <div class="flex flex-row h-screen">
      <NavPanel store = {store} />
      <MailList store = {store} />
      <MailContent activeMail = {store.state.activeMail} />
    </div>
  );
}

export default App;

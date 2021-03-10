import logo from './logo.svg';
import './App.css';
import NavPanel from './components/NavPanel';
import MailList from './components/MailList';
import MailContent from './components/MailContent';
import {createStore} from './utils/Store'

const store = createStore()
setInterval(()=>store.setHeader("Заголовок с секундами " + (new Date()).getSeconds()), 1000)

function App() {
  return (
    <div class="h-screen bg-gray-100 p-3 flex flex-row">
      <NavPanel />
      <MailList />
      <MailContent state = {store.state} />
    </div>
  );
}

export default App;

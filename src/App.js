
import './App.css';
import ContactList from './components/contacts/ContactList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>IronContacts</h1>
      </header>
      <section>
        <ContactList/>
      </section>
    </div>
  );
}

export default App;

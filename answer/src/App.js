import './App.css';

import Form from './components/Form'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>
           Descubra o quão Machista opressor você é >:()
        </p>
      </header>

      <Form
        title="Pedro Julgamentos >:("
        description="Ele irá julgar o seu machismo"
      >

      </Form>

      <footer className="app-footer">
        <p>
          Equipe - | Samuel Ricardo | Milena Fernanda | Claudson |
        </p>
      </footer>
    </div>
  );
}

export default App;

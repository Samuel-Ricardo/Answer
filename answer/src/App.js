import './App.css';

import Form from './components/Form';
import Question from './components/Question';
import MultipleChoice from './components/MultipleChoice';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p>
           Descubra o quão Machista opressor você é >:()
        </p>
      </header>

      <Form
        title="):< Pedro Julgamentos >:("
        description="Ele irá julgar o seu machismo"
      >

        <Question
          title="Quel seue genere?"
          description=">:"
        >

          <MultipleChoice>
            
          </MultipleChoice>

        </Question>

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



/*

"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },

*/

import './App.css';

import Form from './components/Form';
import Question from './components/Question';

import MultipleChoice from './components/MultipleChoice';
import Choice from './components/Choice';
import { useState } from 'react';

function App() {

  const [choice1, setChoice1] = useState("");

console.log(choice1)
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

          <MultipleChoice
            choice={setChoice1}
          >
            <Choice
              text="Homi >:("
              image="https://i.kym-cdn.com/photos/images/newsfeed/001/370/937/834.png"
            />
            <Choice
              text="Femea :D"
              image="https://i.pinimg.com/564x/a3/51/62/a35162a94264bbcfd1fb1f8068a64459.jpg"
            />
            <Choice
              text="Slá mano, Paraguaio >:|"
              image="https://i.ytimg.com/vi/k7fYDhXO3Mo/maxresdefault.jpg"
            />
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

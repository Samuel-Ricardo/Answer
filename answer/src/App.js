import './App.css';

import Form from './components/Form';
import Question from './components/Question';

import pedro from './images/pedro_1.jpeg'

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
              text="Indio emo bombado <:()"
              image="https://www.shitpostbot.com/img/sourceimages/afro-hulk-5a654cfa67b17.jpeg"
            />
            <Choice
              text="Slá mano, Paraguaio >:|"
              image="https://i.ytimg.com/vi/k7fYDhXO3Mo/maxresdefault.jpg"
            />
          </MultipleChoice>

        </Question>

        <Question title="Qual o Lugar de Mulher?"
          image = {pedro}
        >

          <Choice text="Na Cozinha <:()" image="http://images7.memedroid.com/images/UPLOADED130/549f106e01c15.jpeg"/>

          <Choice
            text="No ambiente divino >:| |"
            image="https://i.pinimg.com/originals/a4/0f/65/a40f65859d4e03b8c21c50577ec5be10.jpg" />

          <Choice
            text="Qualquer lugar < : | |"
            image="https://i.kym-cdn.com/entries/icons/facebook/000/032/239/cover3.jpg"
          />
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

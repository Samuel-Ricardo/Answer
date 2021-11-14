import './App.css';

import Form from './components/Form';
import Result from './components/Result';
import Question from './components/Question';
import Button from './components/Button';

import pedro from './images/pedro_1.jpeg'
import bela from './images/bela.jpeg'
import lino from './images/lino.jpeg'
import pedro2 from './images/pedro_2.jpeg'
import pedro3 from './images/pedro_3.jpeg'

import MultipleChoice from './components/MultipleChoice';
import Choice from './components/Choice';
import { useState } from 'react';

function App() {

  const [choice1, setChoice1] = useState(0);
  const [choice2, setChoice2] = useState(0);
  const [choice3, setChoice3] = useState(0);

  const [result, setResult] = useState(1234567890)

  const onClick = () => {

    setResult(choice1 + choice2 + choice3);

  }

  console.log(choice1)
  console.log(choice2)
  console.log(choice3)
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
              value={100}
              text="Homi >:("
              image="https://i.kym-cdn.com/photos/images/newsfeed/001/370/937/834.png"
            />
            <Choice
              value={-1000}
              text="Femea :D"
              image="https://i.pinimg.com/564x/a3/51/62/a35162a94264bbcfd1fb1f8068a64459.jpg"
            />
            <Choice
              value={10}
              text="Indio emo bombado <:()"
              image="https://www.shitpostbot.com/img/sourceimages/afro-hulk-5a654cfa67b17.jpeg"
            />
            <Choice
              value={0}
              text="Slá mano, Paraguaio >:|"
              image="https://i.ytimg.com/vi/k7fYDhXO3Mo/maxresdefault.jpg"
            />
          </MultipleChoice>

        </Question>

        <Question
          title="Qual o Lugar de Mulher?"
          image={pedro3}
          choice={setChoice1}
        >

          <Choice
            value={100}
            text="Na Cozinha <:()"
            image="http://images7.memedroid.com/images/UPLOADED130/549f106e01c15.jpeg" />

          <Choice
            value={10}
            text="No ambiente divino >:| |"
            image="https://i.pinimg.com/originals/a4/0f/65/a40f65859d4e03b8c21c50577ec5be10.jpg" />

          <Choice
            value={0}
            text="No Ambiente escolar < : | - |"
            image={bela}
          />

          <Choice
            value={-10}
            text="Qualquer lugar < : | |"
            image="https://i.kym-cdn.com/entries/icons/facebook/000/032/239/cover3.jpg"
          />
        </Question>

        <Question
          title="COMO VC É NO TWIITER >:("
          image={pedro2}
          choice={setChoice1}
        >

          <Choice value={-110} text="Respeitador de Mulheres official :()" image={lino}/>

          <Choice
            value={100}
            text="Macho Escroto >:()"
            image="https://i.ytimg.com/vi/rOxeklTtH9c/sddefault.jpg" />

          <Choice
            value={0}
            text="Zoro sola < : | |"
            image="https://i.imgur.com/IBIwoEp.jpg"
          />
        </Question>

        <Button text="Descubrir Agora <:()" onClick={onClick} />

        {result != 1234567890
            ?
          <Result result={result} choices={[choice1, choice2, choice3]} />
            :
          <></>
        }
      </Form>

      <footer className="app-footer">
        <p>
          | - | Samuel Ricardo | Milena Fernanda | Claudson | - |
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

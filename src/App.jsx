import React, { useState } from 'react';
import './kalkulator.css';

function App() {
  const [showbutton, setShowButton] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [earned, setEarned] = useState(0);
  const [wybranaOpcja, setWybranaOpcja] = useState("");
  const [zapamietane0, setZapamietane0] = useState("");
  const [zapamietane1, setZapamietane1] = useState("");
  const [zapamietane2, setZapamietane2] = useState("");
  const [zapamietane3, setZapamietane3] = useState("");
  const [zapamietane4, setZapamietane4] = useState("");
  const [zapamietane5, setZapamietane5] = useState("");
  const [zapamietane6, setZapamietane6] = useState("");
  const [zapamietane7, setZapamietane7] = useState("");
  const [wartoscZapamietane0, setWartoscZapamietane0] = useState(0);
  const [wartoscZapamietane1, setWartoscZapamietane1] = useState(0);
  const [wartoscZapamietane2, setWartoscZapamietane2] = useState(0);
  const [wartoscZapamietane3, setWartoscZapamietane3] = useState(0);
  const [wartoscZapamietane4, setWartoscZapamietane4] = useState(0);
  const [wartoscZapamietane5, setWartoscZapamietane5] = useState(0);
  const [wartoscZapamietane6, setWartoscZapamietane6] = useState(0);
  const [wartoscZapamietane7, setWartoscZapamietane7] = useState(0);
  var tablica = [];
  var a, zmienna = 0

  function pamiec(wybrano, text) {
    wybrano = 1;
    if (wybrano = 1) {
      setWybranaOpcja(text)
    }
  }
  const pointOn = (wartosc) => {
    if (score == 0) {
      setScore(wartosc)
    }
    else {
      setScore(wartosc)
    }
  }
  function pointOff(index) {
    return (
      setSelectedOption(index),
      setShowButton(true)
    )
  }

  function dodawanie(text) {

    if (currentQuestion == 0) {
      setZapamietane0(wybranaOpcja + zapamietane0)
      setWartoscZapamietane0(score + wartoscZapamietane0)
    }
    else if (currentQuestion == 1) {
      setZapamietane1(wybranaOpcja + zapamietane1)
      setWartoscZapamietane1(score + wartoscZapamietane1)
    }
    else if (currentQuestion == 2) {
      setZapamietane2(wybranaOpcja + zapamietane2)
      setWartoscZapamietane2(score + wartoscZapamietane2)
    }
    else if (currentQuestion == 3) {
      setZapamietane3(wybranaOpcja + zapamietane3)
      setWartoscZapamietane3(score + wartoscZapamietane3)
    }
    else if (currentQuestion == 4) {
      setZapamietane4(wybranaOpcja + zapamietane4)
      setWartoscZapamietane4(score + wartoscZapamietane4)
    }
    else if (currentQuestion == 5) {
      setZapamietane5(wybranaOpcja + zapamietane5)
      setWartoscZapamietane5(score + wartoscZapamietane5)
    }
    else if (currentQuestion == 6) {
      setZapamietane6(wybranaOpcja + zapamietane6)
      setWartoscZapamietane6(score + wartoscZapamietane6)
    }
    else if (currentQuestion == 7) {
      setZapamietane7(wybranaOpcja + zapamietane7)
      setWartoscZapamietane7(score + wartoscZapamietane7)
    }
  }

  const wstecz = () => {
    if (currentQuestion < 0) { }
    else {
      setSelectedOption(null);
      setShowButton(false);
      setScore(0); {
        if (currentQuestion == 0) {

        }
        else if (currentQuestion == 1) {
          setZapamietane1(null)
          setWartoscZapamietane1(0)
          setCurrentQuestion(currentQuestion - 1)
          setEarned(0)
          console.log("earned =", earned)

        }
        else if (currentQuestion == 2) {
          setZapamietane2(null)
          setWartoscZapamietane2(earned - wartoscZapamietane2)
          setCurrentQuestion(currentQuestion - 1)
        }
        else if (currentQuestion == 3) {
          setZapamietane3(null)
          setWartoscZapamietane3(earned - wartoscZapamietane3)
          setCurrentQuestion(currentQuestion - 1)
        }
        else if (currentQuestion == 4) {
          setZapamietane4(null)
          setWartoscZapamietane4(earned - wartoscZapamietane4)
          setCurrentQuestion(currentQuestion - 1)
        }
        else if (currentQuestion == 5) {
          setZapamietane5(null)
          setWartoscZapamietane5(earned - wartoscZapamietane5)
          setCurrentQuestion(currentQuestion - 1)
        }
        else if (currentQuestion == 6) {
          setZapamietane6(null)
          setWartoscZapamietane6(earned - wartoscZapamietane6)
          setCurrentQuestion(currentQuestion - 1)
        }
        else if (currentQuestion == 7) {
          setZapamietane7(null)
          setWartoscZapamietane7(earned - wartoscZapamietane7)
          setCurrentQuestion(currentQuestion - 1)
        }
      }
    }
  }

  const nastepny = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setEarned(score + earned)
      setShowButton(false)
      setScore(0);
      console.log("po nastepny earned = ", earned)


    }
    else {
      setShowResults(true);
    }

  }
  const restartKalkulatora = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setEarned(0)
    setSelectedOption(null)
    setShowButton(false)
    setWartoscZapamietane0(0)
    setWartoscZapamietane1(0)
    setWartoscZapamietane2(0)
    setWartoscZapamietane3(0)
    setWartoscZapamietane4(0)
    setWartoscZapamietane5(0)
    setWartoscZapamietane6(0)
    setWartoscZapamietane7(0)
    setZapamietane0("")
    setZapamietane1("")
    setZapamietane2("")
    setZapamietane3("")
    setZapamietane4("")
    setZapamietane5("")
    setZapamietane6("")
    setZapamietane7("")
  };

  const questions = [
    {
      text: "1. Jaka jest Twoja znajomość języka niemieckiego?",
      options: [
        { id: 0, text: "A1- Potrafię formułować krótkie zdania z obszaru opieki, np.: Pomogę pani wstać. Umyjemy ręce. Znam podstawowe słownictwo, np.: śniadanie, obiad, mydło, ręcznik itd.", wartosc: 1150, opcjanr: 1 },
        { id: 1, text: "A2- Prawidłowo reaguję na różne sytuacje w opiece np.: potrafię opisać stan zdrowia osoby podopiecznej, określić jego potrzeby. Umiem powiedzieć o sobie, opisać miejsce zamieszkania, porozmawiać o pogodzie…", wartosc: 1250, opcjanr: 2 },
        { id: 2, text: "B1- Moja znajomość języka niemieckiego pozwala mi na zachowanie jasnej i zrozumiałej komunikacji z osobą zależną. Potrafię porozmawiać z podopiecznymi na wiele tematów, choć mam jeszcze trudności i ograniczenia w słownictwie oraz gramatyce.", wartosc: 1350, opcjanr: 3 },
        { id: 3, text: "B2- Potrafię porozmawiać z osobą zależną na wiele tematów np.: o polityce, książkach, programach w telewizji, zdarzeniach w ciągu dnia…Znam czas przeszły i nim się posługuję. Moje słownictwo jest rozbudowane a zdania są zasadniczo poprawne pod kątem gramatycznym.", wartosc: 1450, opcjanr: 4 },
      ],
    },
    {
      text: "2. Czy posiadasz referencje / kartkę urodzinową / świąteczną od rodziny?",
      options: [
        { id: 0, text: "nie", wartosc: 0 },
        { id: 1, text: "tak - 1 referencja / kartka urodzinowa / kartka świąteczna", wartosc: 20 },
        { id: 2, text: "tak - 2 lub więcej referencji / kartek urodzinowych / kartek świątecznych", wartosc: 40 },
      ],
    },
    {
      text: "3. Czy posiadasz prawo jazdy?",
      options: [
        { id: 0, text: "Tak", wartosc: 50 },
        { id: 1, text: "Nie", wartosc: 0 },
      ],
    },
    {
      text: "4. Czy jesteś osobą palącą?",
      options: [
        { id: 0, text: "Tak", wartosc: 0 },
        { id: 1, text: "Nie", wartosc: 10 },
      ],
    },
    {
      text: "5. Iloma osobami chcesz się opiekować?",
      options: [
        { id: 0, text: "1 osobą", wartosc: 0 },
        { id: 1, text: "2 osobami wymagającymi opieki", wartosc: 200 },
        { id: 2, text: "2 osobami z czego jedna osoba wymaga opieki, a druga osoba jest zdrowa", wartosc: 50 }
      ]
    },
    {
      text: "6. Czy możesz pomóc osobie zależnej wstać/usiąść?",
      options: [
        { id: 0, text: "Tak - mogę pomóc osobie zależnej wstać/usiąść", wartosc: 100 },
        { id: 1, text: "Nie", wartosc: 0 },

      ],
    },
    {
      text: "7. Czy pomożesz osobie zależnej przy toalecie nocnej?",
      options: [
        { id: 0, text: "Tak - sporadycznie raz w nocy", wartosc: 20 },
        { id: 1, text: "Tak - częściej niż raz w nocy", wartosc: 50 },
        { id: 2, text: "Nie pomagam w nocy ", wartosc: 0 },
      ],
    },

    {
      text: "8. Czy chcesz pomagać osobie zależnej cierpiącej na demencję? ",
      options: [
        { id: 0, text: "Tak - przy początkach demencji", wartosc: 20 },
        { id: 1, text: "Tak - przy średniej lub zaawansowanej demencji", wartosc: 50 },
        { id: 2, text: "Nie", wartosc: 0 },

      ],
    },
    {
      text: "podsumowanie - wylicz moje wynagrodzenie za okres 30 dni w firmie Berlin Opieka",
      options: [
        { id: 0, text: "Oblicz moje wynagrodzenie", wartosc: 0 },
      ]
    }
  ]





  return (
    <div className="App">
      {/* 1. Header*/}



      {showResults ? (
        /* 4. Final Results */
        <div className="background">
          <div className='final-results1'>
            <h1> OSOBISTY KALKULATOR WYNAGRODZENIA I OFERT! </h1>
            <h2> Oto wynagrodzenie miesięczne jakie możesz zarabiać współpracując z nami! :  </h2>
            <div className="wynikkwoty">
              <div className='wynikwynagrodzenia'>
                <h2> {earned} €</h2> </div>
              <div className='wynikwynagrodzenia'>
                <h2> {Math.round(earned * 4.77)} zł</h2>
              </div>
            </div>
            <div className="restart" onClick={() => restartKalkulatora()}>Restart</div>
            <h2>   </h2>
            <h1> Podsumowanie:  </h1>
            <div className="questions-full1">
              <h3 className="question-text1">{questions[0].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane0}</div>
                <div className="answerd1">{wartoscZapamietane0} €</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[1].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane1}</div>
                <div className="answerd1">{wartoscZapamietane1} €</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[2].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane2}</div>
                <div className="answerd1">{wartoscZapamietane2} €</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[3].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane3}</div>
                <div className="answerd1">{wartoscZapamietane3} €</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[4].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane4}</div>
                <div className="answerd1">{wartoscZapamietane4} €</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[5].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane5}</div>
                <div className="answerd1">{wartoscZapamietane5} €</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[6].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane6}</div>
                <div className="answerd1">{wartoscZapamietane6} €</div>
              </div>
            </div>
            <div className="questions-full">
              <h3 className="question-text1">{questions[7].text}</h3>
              <div className="questions-answer-full">
                <div className="answerd">{zapamietane7}</div>
                <div className="answerd1">{wartoscZapamietane7} €</div>
              </div>
            </div>
            <h2>   </h2>
          </div>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="pytanie">
          <h1> OSOBISTY KALKULATOR WYNAGRODZENIA I OFERT! </h1>
          <h2> Pytania:</h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <div className="options">
            {a = questions[currentQuestion].options.map((option, index) => {
              return (
                <div className={index === selectedOption ? ("option active") : "option"}
                  key={option.id}
                  onClick={() => { pointOn(option.wartosc) || pointOff(index) || pamiec(option.wybrano, option.text) }}

                >
                  {option.text}
                </div>

              )
            }
            )
            }



          </div>
          <div className="przyciski">
            {showbutton ? (
              <div className={"nastepny"} onClick={() => nastepny() || dodawanie(questions[currentQuestion].options.text)}>
                Następny</div>) : (<h2></h2>)
            }

          </div>
          <div className="final-results">
            <h1> Suma części składowych wynagrodzenia: </h1>
            <h3> {score} €   </h3>
          </div>
        </div>
      )
      }

    </div>
  )
}

export default App;

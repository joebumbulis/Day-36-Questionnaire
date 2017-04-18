import { createStore } from 'redux'
import store from '../store.js'
import answerQuestion from '../actions/answerQuestion.js'


const initialState = {
      questions: [
        { questionNumber: 1, question: "What is my top priority?"},
        { questionNumber: 2, question: "What is the hardest part I can start now?"},
        { questionNumber: 3, question: "What should I delegate?"},
        { questionNumber: 4, question: "What are the anticipated roadblocks?"},
        { questionNumber: 5, question: "Who is my customer for this?"},
        { questionNumber: 6, question: "How will this create value?"},
        { questionNumber: 7, question: "What should I skip?"},
        { questionNumber: 8, question: "Where should I spent the majority of my time today?"},
        { questionNumber: 9, question: "Who needs to be updated on my progress?"},
        { questionNumber: 10, question: "Who can I ask for help?"}
      ],
      answers: [],
  };

export default function AppReducer (state, action) {
  console.log(createStore(function(state = [], action) {
        return state;
    }));

  if (state === undefined) {
    return initialState;
  }

  switch(action.type){
      case "ANSWER_QUESTION":
      console.log('I answered the question!');
              var newState =({
                id: action.id,
                answer: action.answer
              })
                  return Object.assign({}, state, newState)


  default:
    console.debug("Unhandled Action!", action.type);
    return state;
  }
}

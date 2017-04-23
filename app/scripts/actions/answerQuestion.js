export default function answerQuestion(answer, id) {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return dispatch => {
    //Before ajax call dispatch any needed actions
    dispatch({ type: "ANSWER_QUESTION", id: id, answer: answer });
    return $.ajax({
      type: "POST",
      dataType: "json",
      url: "https://api.backendless.com/v1/data/markdown",
      headers: {
        "application-id": "85577861-2A70-62E0-FFC7-B56EDDAFC300",
        "secret-key": "71A87D8E-1294-CD5F-FFF6-C9311CC4CD00",
        "Content-Type": "application/json",
        "application-type": "REST"
      },

      data: JSON.stringify({
        notes: note
      })
    }).then((data, response) => {
      console.log(response);
      dispatch({ type: "CLEAR" });

      console.log(data, response);
    });
  };
}

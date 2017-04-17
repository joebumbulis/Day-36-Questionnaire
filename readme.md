
## Day 36, Week 8: Questionnaire
* Building a multipage application with react-router and redux.

* Time to build a survey taking application.

### Explorer Mode

* Using React components, create a Start page, a Question page and a Results page. There will be a minimum of 10 questions, hard coded into the application.
* Your Start page should welcome the user, tell them how many questions there are as well as link to each question, there should also be a 'start' button on the page that takes them to question one.
* Your Question page should include the question being asked an input field for writing in your answer, a previous question button, and a next button.
* The Results page should show the user all of the questions and their answers in a tabular format. If they got to the results page without answering a question it should be highlighted in css.
* The app should be fully styled.
* Once the user hits submit, their answers should be stored in backendless under a 'results' table.
* Your app will have at least the following Routes:
    * /
    * /start
    * /question/1
    * /question/2
    *  #...
    * /results

### WHAT TO SUBMIT
A link to a repository that should include:
A README.md explaining your project
In the Notes section, include a link to your project live on the internet
As always, in the Notes section, include your confidence (1-5) and if you are anything below 5, briefly explain why.

### Adventurer Mode

- Add a NavLink to the top of every page to allow the user to navigate around quickly and see what question they are on.
- Move all of your hard coded questions to backendless and load the questions when the page first loads.
- After the user submits their answers, redirect them to a new URL that displays their results. They can use that URL to view their answers again in the future.

### Epic Mode

Only allow logged in users (using backendless) to take the quiz. Any attempts to view the pages inthe application besides the / (root) should redirect to a login page.
Store all the answers the users submit under their own name as they page through the application, so at the end they've already submitted everything.

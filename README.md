# React + Vite
## Installation
To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
# Project Structure:


Create a navbar component with links for Home, My Quiz, and Play Quiz.
Use React Router to handle navigation between different pages.
# Home Page:

Design the Home Page with three cards: Create New Quiz, My Quizzes, and Play Quiz.
Add event handlers to navigate to the respective pages when clicking on each card.
# Create Quiz Page:

Implement the Create Quiz page with a modal for selecting the question type.
Based on the selected question type, show the corresponding form for creating questions (e.g., MCQ single correct).
Allow users to add multiple questions and options, choose the correct answer, and save all questions to local storage.
# My Quiz Page:

Design the My Quiz page to display all questions created by the user.
Fetch data from local storage and populate a table with question details.
Implement functionality to edit, delete, and change the status of questions (active/inactive).
# Play Quiz Page:

Create a form page where users can enter their full name to start playing quizzes.
Upon clicking the Start Quiz button, navigate to the Quiz page.
# Quiz Page:

Implement the Quiz page to display questions one by one with options.
Allow users to select their answers and navigate to the next question.
Keep track of the question count and display progress accordingly.
# Result Quiz Page:

After completing all questions, show the Result page with the quiz score and details.
Provide an option to review the answers and navigate back to the Home page.
# Styling and Responsiveness:

 all pages are responsive and work well on different screen sizes.

#  Form Validation:

Implement form validation for creating quiz questions (e.g., validate title length, question length, minimum two options required).
Local Storage Management:

# Manage storing and retrieving question data in local storage.
Handle adding, editing, and deleting questions while updating the local storage accordingly.

## Technologies Used
-html
-css
-javascript
-Tailwindcss
- React.js
- React Router
- Redux
- Local Storage
- boostrap
- context API

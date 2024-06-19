B. Exercice Frontend

Creating a simple application with React
Via NPM : $ npm create vite@latest
or Yarn : $ yarn create vite

The application
Based on the following apis => https://jsonplaceholder.typicode.com/ create a react application that
displays:

User list page : A table listing users with the following columns
username : clickable brings up the user file
email
website : clickable opens in another tab / windows
compagny.name
nb_todos : the number of todos of the user
nb_albums : number of user’s albums

User profile page : A presentation of user data
name
username
email
list of the user’s albums : each album is clickable and leads to the album page
A link takes you back to the user list

Presentation of a photo album page : The album page features:
album title
the thumbs of the photos contained in the album in question in the form of a mosaic
A link takes you back to the user’s file.
Examples of API usage :
https://jsonplaceholder.typicode.com/todos?userId=1&completed=true
https://jsonplaceholder.typicode.com/photos?albumId=1
https://jsonplaceholder.typicode.com/albums/1
https://jsonplaceholder.typicode.com/users/1
https://jsonplaceholder.typicode.com/users/1/albums
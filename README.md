# Project Description
This project is a React application that fetches a list of users from a node server and displays them in a table. The project user can filter and sort the table by different fields, and also edit, delete and add new users. It is implemented using mostly React and Typescript.

## Components

### App
This is the main component and renders the UsersList component.

### UsersList
This component fetches a list of users from the server using Axios and displays them in a table. It also handles:

* Filtering and sorting the table by different fields.
* Editing and deleting individual users.
* Adding new users.

### ListFilters
This component displays the filter and sort options for the table and communicates with it to show the correct users list. This component passes the search and sort values to the UsersList component.

### UsersListItem
This component displays an individual user in the table, rendering the details of a single user, including their ID, avatar, username, email, city, and employment status. It also provides a button for deleting the user, and by clicking on the user information, it opens the Dialog component from the @headlessui/react package to display and edit additional details about the user.

### UsersDetails
This component is responsible for displaying and editing additional details of a user. 

### NewUser
This component is responsible for collecting the data and add a new user to the list. 

## Libraries and Dependencies
This project uses the following libraries and dependencies:

### Dependencies
* @headlessui/react (^1.7.13)
* axios (^1.3.4)
* react (^18.2.0)
* react-dom (^18.2.0)
* react-router-dom ("^6.9.0)

### DevDependencies
* @testing-library/jest-dom (^5.16.5)
* @testing-library/react (^14.0.0)
* @types/react (^18.0.28)
* @types/react-dom (^18.0.11)
* @types/react-router-dom (^5.3.3)
* @vitejs/plugin-react (^3.1.0)
* jsdom (^21.1.1)
* typescript (^4.9.3)
* vite (^4.2.0)
* vitest (^0.29.3) 

## How to Run the Project
To run this project, follow these steps:

* Clone the repository from Github: https://github.com/tiagoneto7/users-management
* Open the terminal and navigate to the project directory.
* Install the dependencies: npm install.
* Start the development server: npm run dev.
* Run tests: npm run test.






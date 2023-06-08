# Invoice generator for sole proprietorship (enkeltpersonforetak)

# Purpose

I recently started free lancing in Bergen as a lighting technician. Since I don`t have an employer that pays taxes for me each month I must expect a larger tax collection in May. In order to keep track of my expected costs related to tax and added taxes I wanted to create something that could automatically track this while sending invoices to my customers.

The app is preety simple but it fit my needs and I have focused on creating the MVP that will save me time and calculate my expected taxes accurately. 

To summarize the app keeps track of my total profits, revenue, added taxes and total taxes. Furthermore I can store and edit hires, and lastly I can create pdf invoices to send to my customers.

The stack consists of:
- Frontend: React and Bootstrap
- Backend API: Express and Node
- DB: MongoDB

There are still many features that can be added which would be fun to look at!

This project took about 3-4 days to set up.


# Features 

Current features:
- **Total revenue, added tax costs (MVA) and tax costs**

![Alt Text](/img/Nokkeltall.PNG)


- **Creating and editing hires**

![Alt Text](/img/Oppdrag.PNG)

- **Creating invoice pdf**

![Alt Text](/img/Faktura.PNG)

## Areas of improvement:
- Editing company information 
- filter on year and date
- Searching in hires
- Adding functionality checking if customer has paid - api with your bank
- Sending emails from the react frontend
- Adding multiple rows in invoice
- Exporting pdf as vector and not png format
- User can change the expected taxrate (30% -> ?%)

# In order to run app

Everything is ran locally on PC.

In main folder run npm install to install all dependencies for react app.

In backend folder run npm install to install all dependencies for backend server.

Initalize the following on three different command lines:
- For running frontend react app - in the project directory: npm start
- For running backend API - in the backend directory: node index.js
- For running database - download mongoDB and run command: mongod

# React APP - Frontend

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


# React

Install react on your laptop

# MongoDB

Install for free from mongodb.com


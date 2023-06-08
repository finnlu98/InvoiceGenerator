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

This project took about 3-4 days to set up. The code could also use some refactoring to keep each component to follow single responsibility.


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

Everything is ran locally on PC and data is fetched from local DB.

In main folder run npm install to install all dependencies for react app.

In backend folder run npm install to install all dependencies for backend server.

Initalize the following on three different command lines:
- For running frontend react app - in the project directory: npm start
- For running backend API - in the backend directory: node index.js
- For running database - download mongoDB and run command: mongod


# React

Install react on your laptop

# MongoDB

Install for free from mongodb.com


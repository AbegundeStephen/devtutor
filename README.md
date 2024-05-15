# Devtutor

## Description

Devtutor is an online learning platform that offers a wide range of courses designed to empower learners to achieve their personal and professional goals. Our courses cover various topics, including web development, digital marketing, yoga, photography, blockchain technology, and creative writing.Note that this is a demo version and not the final project,as all features are yet to be implemented.


## Installation


This project requires you to have  MYSQL server running on you local machine. Also,locate the dbconfig file in the "devtutorbackend" diretory and edit the connection configuration file.
To set up Devtutor on your local machine, follow these steps:

```bash

git clone https://github.com/yourusername/devtutor.git
cd devtutorbackend
npm install

cd devtutorfrontend
npm install

```
### Usage
After installation, you can start the project api locally by running the following scripts respectively:
```bash
cd devtutorbackend
npm run createdb
npm run createtables
npm start

```


```bash
cd devtutorfrontend
npm start
Navigate to http://localhost:3000 to view the app.
```

## Features
Slightly Responsive design for optimal user experience.
Interactive course listings with descriptions and enrollment button.
User authentication with jwt and signup processes.
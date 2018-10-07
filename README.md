# [AlgoSearch](https://github.com/jaimemendozadev/algo-search.git)

A mock-up App Store that uses the Algolia search-as-a-service API for fast search results


## Table of contents

- Initial Setup
- Create a `.env` File
- Starting the App
- Future +Plus Features
- Created By

## Initial Setup

Open up your terminal and clone the repo locally to your computer by running the following command at the target destination: `$ git clone https://github.com/jaimemendozadev/algo-search.git`

## Create a `.env` File

Fire up your terminal and create a new `.env` by simply running `$ touch .env.`

After creating the `.env` file, use your text editor to enter all the necessary credentials, urls, and app variables (like the Server Port) into separate lines inside the `.env` file. 


There should be no spacing between the lines and do not end the line with punctuation or spacing. The `.env` should appear like the following snippet:

```
PORT = ENTER_VALUE_HERE

```

After creating the `.env` and you fire up the app, the key value pairs in the file will correspond to any line of code that references `process.env`.

## Starting the App
This project uses the [Yarn package manager](https://yarnpkg.com/en/). Go to the Yarn website to learn more about how to install the package manger on your computer.

In the root of the app, use your terminal to run `$ yarn install` to install all the app dependencies. Wait until everything finishes loading.

In the same terminal window, run `$ yarn run dev:build` to build all the dependencies. Wait until everything finishes building.

Finally in another opened terminal tab, run the command `$ yarn run dev:start` to start the app.

Go to `http://localhost:3000` in your favorite browser to view the website. 

Remember, you can always stop the server from running by typing `Control + z` in the terminal window you used to start the app.


## Future +Plus Features



## Created By

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)
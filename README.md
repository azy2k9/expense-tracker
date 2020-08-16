# Expense Tracker

## To set up this project you must

- `git clone git@github.com:azy2k9/expense-tracker.git`
- `cd` into the project directory and then `cd client` and run `npm install`
- create a `.env` file in the `server` root directory. You will need to add the following keys:

```
HOST=http://localhost
PORT=5000
```

- `cd ../server` and then run `npm install` to install the server dependancies
- create a `.env` file in the `server` root directory. You will need to add the following keys:

```
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb://localhost/expenses
```

## To run this project you must

This project has been setup using `concurrently`. That means it can be started with ease by simply running `npm start`. This command will start up the server and client.

## Improvements to be made

Time on this application was very limited (due to having to work overtime at work and eid all falling over this weekend). There are a number of improvements i would like to make to this over time.

- Keep a track on the Total Income
- Keep a track of the Total Expenses
- Keep a track of the Running Total (Balance)
- Add a date field to the `Expense` entity so you know which date you made a purchase or received some income
- Add re-occuring monthly expenses to help visualise how many of your monthly payments you have made so far in the month and how many more expenses are due in the current month
- Add a Notification Snackbar that triggers with messages from the server (Green with a success message when an expense is added, Red when there's an error)

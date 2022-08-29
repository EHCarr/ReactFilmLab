<img src="https://i.imgur.com/vUOu9NW.jpg">


# Express Lab
# My Dev Skills - Part 1
---

## Intro

You've now seen how we can generate a skeleton Express application and implement the **index** & **show** functionality for a **resource** (To Dos).

Now it's time to practice by doing the very same thing, but for a different data resource - _developer skills_.

##### This lab, combined with Part 2, is a Deliverable

## Exercises

The goal of the lab is to put in a rep doing everything that you did during the Express lesson:

- Create a new app/folder named `express-dev-skills` inside of your bootcamp folder by running the commands learned in class.

- Your `express-dev-skills` folder should contain `server.js`, `package.json` and all other associated files as mentioned in lecture.

- Add route handlers to the root route and send back a response of "Hello World" to make sure the server is working correctly.

- Be sure to create an array of "fake" data representing some of your awesome developer skills. Store this data file inside of a models directory. This model directory should live in the same folder as your `server.js`. With regards to the data itself, the specific properties describing a skill object is up to you! 

- Implement **index** (`/skills` route) functionality to display all of your skills from the `skills` resource

- Implement **show** (`/skills/:id` route) functionality to display only a single skill from the `skills` resource

## Hints

- Keep the data resource name short and simple - something like `skills`.

- It is strongly recommended you use best-practice routing and MVC, which will result in the following modules for the `skills` resource:

	- **routes/skills.js**
	- **models/skill.js**
	- **views/skills**
	- **controllers/skills.js**

- This MVC best practice was not shown in lecture. All of the code written during the lecture was inside of `server.js`, but if you'd like to know how to structure this code, contact the TAs!

- Use [RESTful routes](https://gist.github.com/jim-clark/17908763db7bd3c403e6)


## Bonuses

- Use EJS partial views to make your templates more DRY (see link in Reference section of the lesson) and/or [this link](https://www.npmjs.com/package/ejs#includes).

- Add styling or use a CSS framework to make the app look better :)

### This lab is not a deliverable, however, Part 2, which builds upon this lab, is a deliverable.



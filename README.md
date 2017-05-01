# Message Board - Latinx Coder Network
#### _Epicodus Friday Project, 4-28-2017_
This Latinx Coder Network message board is a web app in the vein of [Stack Overflow](http://stackoverflow.com/) or [Ask Reddit](https://www.reddit.com/r/AskReddit/). Users will have the ability to enter a question for other users to answer. Questions are listed on the home page in most to least recent. Users can comment on existing questions by navigating to that specific question's page.

**The goal of having a a latinx specific programming question and answer website is to make tech and programming more visible and accessible to Latinx people.**

![alt text](http://swarthmorephoenix.com/wp-content/uploads/2015/11/300773.jpg)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* Clone this repository
* Make sure to navigate to the 'message-board' file in your terminal
* Run the command `npm install`
*  Run the command `bower install`

## Running / Development

* Type `ember serve` into your terminal
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

## Planning

###### Configuration/Dependencies

  * Ember default dependencies. Defined in package.json


###### Specifications

| Behavior | Input |  Output |
| -------- | ------: | -------: |
| Application will save user input  as a question object with the parameters of 'title', 'user', and 'body'.| "What is ember?", "user1", "I'm not sure what it is" | title: "What is ember?", user: "user1", body: "I'm not sure what it is"|
| Application will assign a timestamp to the user input | "What is ember?", "user1", "I'm not sure what it is" | timestamp: Fri April 28 2017 01:17:07 |
| Application will assign an ID to the user input | "What is ember?", "user1", "I'm not sure what it is" | Id: 0 |
| Application will save user input comments in a one-to-many relationship with the ID of the corresponding question being a parameter of the comment | "A javascript framework" | question ID: 0 |

###### Configuration

  * Template/html page for index.
  * Template/html page each question.
  * A list of all question displayed on index.
  * Comments for corresponding question displayed on that questions individual page.

###### UX/UI

  * Include bootstrap
  * Each question and comment in individual centered well
  * Navbar on each page with links to home and page with form for new question.

###### Polish

  * Revisit README to revise and add any needed clarification.
  * add full CRUD to questions and comments.
  * Display questions and comments form most to least recent.
  * Add up/down vote functionality to comments.
  * Add option to sort by other criteria.

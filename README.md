# Message Board

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd message-board`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

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

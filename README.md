# Indtekina Todo App

A simple browser-based Todo application built while learning JavaScript, HTML, and CSS.

This project allows users to create, organize, complete, and delete tasks across different categories while storing all data locally in the browser using Local Storage.

## Features

* Add new todos
* Organize tasks into:

  * Daily
  * Weekly
  * Monthly
* Mark tasks as completed
* Delete tasks
* Persistent storage using Local Storage
* Responsive layout for desktop and mobile devices
* Dynamic rendering using JavaScript

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Browser Local Storage API

### show.js

Handles UI rendering:

* Render individual todo cards
* Render all saved todos
* Delete todo cards from the DOM

### internal.js

Handles application logic:

* Adding todos
* Updating progress
* Saving data
* Loading data from Local Storage
* Event handling

## Data Structure

Each todo is stored as an object:

```javascript
{
    todo: "Learn JavaScript",
    type: "daily",
    id: 123456789,
    progress: "in-progress"
}
```

## Current Features

### In Progress Task

* Displays task text
* Complete button (✅)
* Delete button (❌)

### Completed Task

* Highlighted with different styling
* Strikethrough effect
* Delete button (❌)

## What I Learned While Building This

* DOM Manipulation
* Event Delegation
* Dynamic Element Creation
* Arrays and Objects
* Local Storage
* JSON Parsing and Stringifying
* Project Organization Across Multiple JavaScript Files

## Future Improvements

* Search functionality
* Edit existing todos
* Drag and drop task management
* Due dates
* Task priorities
* Better animations
* No-page-reload updates
* Dark/Light mode
* Statistics dashboard

## Author

Built by Indtekina while learning Web Development and JavaScript.

## The Internet - Heroku App

Automation project using Cypress

### Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)

### Project Description

Project to practice automation of basic auth functionaly testing, sortable tables testing and dropdowns testing.
System under test: http://the-internet.herokuapp.com/

### Features

- Basic Auth testing
- Sortable Tables testing
- Dropdowns testing
- Mochawesome reporting
- Environment-based execution

### Getting Started

1. Install node.js latest version, make sure to install npm

   - run the npm install in the root of the project ( 'npm install')

2. Install Prettier

   - run the npm install command using the command line: npm install prettier --save-dev

3. Install Mochawesome

   - run the npm install command using the command line: npm install mochawesome --save-dev

### Usage

Useful commands:

- "cy:stg-open" : runs the test execution on staging environment
- "cy:dev-open" : runs the test execution on dev environment
- "cy:local-open" : runs the test execution on local environment
- "cy:stg-report" : runs the test execution in headless mode on staging environment and generates an html report

Note: environment URLs and credentials are configured in ./config

### Contact Information (Optional)

- Email: josmenag@gmail.com
- Linkedin: https://www.linkedin.com/in/jose-mendez-489446ba/

# Cypress---Cucumber-Task-4

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#running-test">Running test</a></li>
    <li><a href="#writing-tests">Writing tests</a></li>
    <li><a href="#test-reports">Test reports</a></li>
    <li><a href="Github page">Github page</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the project

This repository contains an example project that combines Cypress, Cucumber, and TypeScript to facilitate efficient end-to-end testing for your web applications. This README provides essential information on setting up, running tests, and maintaining the project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting started

### Prerequisites

Before running the tests, make sure you have the following dependencies installed:

Node.js: Install Node.js from https://nodejs.org/en

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/nikdesu/Cypress---Cucumber-Task-4/tree/cypress-cucumber-report
   ```
2. Installing Cypress
   ```bash
   npm install cypress --save-dev
   ```
3. Installing Cucumber
   ```bash
   npm install @badeball/cypress-cucumber-preprocessor
   ```
4. Installing bahmutov/cypress-esbuild-preprocessor
   ```bash
   npm install -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
   ```
. Install the project dependencies:
   ```bash
   npm install
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- USAGE EXAMPLES -->
## Running test

To run the test suite, execute the following command:

```bash
npm run test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- WRITING TESTS -->

## Writing tests

You can start writing your own tests in the tests directory. Follow the Cypress and Cucumber API documentations to interact with your web application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TEST REPORTS -->

## Test reports

This will create a .html test report

```bash
node ./cucumber-html-report.ts
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GITHUB PAGE -->

## Github page

You can look at test reports using this link https://nikdesu.github.io/Cypress---Cucumber-Task-4/
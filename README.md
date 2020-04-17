# This is the repo for an Angular 8 App that shows the latest stories from the Hacker News API.

## Assumptions:
1. Implement the latest stories feature of Hacker News. This is done using the /v0/newstories endpoint of the hacker news API. https://github.com/HackerNews/API
2. There is no need to implement any features other than displaying the latest stories, like the 'new' featre on https://news.ycombinator.com/

## Deployment
I have my solution hosted on an S3 Bucket on AWS here: http://cmurph41-genesys-angular-app.s3-website-us-east-1.amazonaws.com/index.html
 

## Dependencies: 
In order to get this app running you will need Node and npm. 
The versions I have used and tested with are:
Node: 10.16.0
Npm: 6.14.4

## Steps to run locally: 
1. Clone this repository
2. run 'npm install'
3. Choose a script version: 
    'ng serve'
    This will serve the app, and will use static assets rather than the live api. This is to aid development and testing

    'ng-serve --prod'
    This will serve the app in production mode, and will use the live api.

    'ng test' 
    This will run the Jasmine unit tests and will open the results in a browser window.

    'ng e2e'
    This will run the Protractor end to end tests. This requires the latest version of chrome to run.  
4. Open on http://localhost:4200/

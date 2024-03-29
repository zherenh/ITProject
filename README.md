ITProject
==============

## Team 030

## Web App Name
LabelsHouse

## Description
* This is a Web App which allows user to store links of web pages. 
* Users can also add labels to each link, but the maximum number of labels is five. 
* Through this Web App, users can access all the links they add, and support fuzzy search.
* Users are also free to delete or update added links. 
* This Web App also includes a label library where the user can search the label he wants.

## Catalog
* [Progess](#Progess)
* [Developers](#Developers)
* [Supervisor](#Supervisor)
* [Client](#Client)
* [Running](#Running)
    * For Mac & Linux
    * For Windows
* [Tools](#Tools)

## Progess 
Backend and server are still in developing. The project only can run on the local browser. 

## Developers
* Zheren Huang - zherenh@student.unimelb.edu.au 
* Yijun Zhou - yijuzhou@student.unimelb.edu.au 
* Zhiwei Liu - zhiliu4@student.unimelb.edu.au
* Chaowen Zeng - chaowenz@student.unimelb.edu.au 
* Qianying Wang - qianying1@student.unimelb.edu.au 

## Supervisor
Alex Xiang - alexx@unimelb.edu.au 

## Client
Xiang guo - xiaguo2@student.unimelb.edu.au

## Running

    open Terminal
    
    java -jar project_backend-0.0.1-SNAPSHOT.jar
    
    Then the backend server has been listening

### For Mac & Linux: 
    
    open Terminal

    cd project
    
    npm install
    
    npm start

### For Windows: 

    open Terminal
    
    cd project 
    
    npm install
    
    npm run start 

Then you will run a react app on your computer browser.

## Deployment

We use Tencent cloud server as our project deployment server.

http://81.68.222.89

If want to use own server:

-Downloap the code

-Go to frontend file, npm build, update everything in the 'build' folder up your server

-Go to backend, package all of the code as a jar file, and update the file to your server

-Connect your own database

-Finish

Database detail:
address: 81.68.222.89
port:3306
password:12345678


## Testing

After running the backend server, use the link below

http://127.0.0.1:8080/swagger-ui/index.html

## Tools
* Repository - Github 
* Front End - React.js 
* BackEnd - Java
* Database - SQL
* Deployment - Heroku 
* Project Management - Trello 
* Communication - Wechat 


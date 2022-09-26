# Aurora

![Screenshot from 2022-09-26 17-22-56](https://user-images.githubusercontent.com/88943189/192320771-6e9cf39e-49a7-46ff-ae20-f67b5aa96a05.png)

Aurora is a Car-Sharing Web Application with the idea of having users with different
privileges. On the user side, there are 2 roles, the renter, and the host. 
A user is able to create a rent account to be able to rent the hosts available car, and upgrade the account to be able the hosts his cars. 
The available cars are shown on a map and their profiles (also users) can be checked with their specified
data. 
Hosts' profile also contains their available cars and reviews. 

Technologies used for this project

- Java Spring
- Spring MVC
- Spring Security
- React
- Docker
- Postgresql database
- Maven
- Git Version Control System
- IntelliJ IDEA / Visual Studio Code

To run this file you will have to do the following steps:

## Preparation before initialization
1) Clone the repository from Github to your local computer
2) To run the application you will need a few things. A working React installed (for React you will have to install node.js too), a database like PostgreSQL, and a programming environment to handle Java Spring.
3) To make React up to date for this project, you will have to download the dependencies. Just type <code>npm install</code> in the terminal. Note! You have to be in the aurora folder to be able to run the React script.
4) Then you have to run the <code>initalize.sql</code>. You can only do it if you are in the folder named "resources". There are two options.
    - To use <code>createdb aurora --> psql aurora < initalize.sql</code>
    - Or use <code>psql --> CREATE DATABASE aurora WITH OWNER youruser --> \connect aurora --> \i initalize.sql</code>
5) Then you have to connect to that database. If you can see the tables you are good to go further.
6) If <code>Maven</code> could build your project successfully there is no error for Java files. Another case rebuild your project and download sources.
4) Hurray everything is now set!

## Start your project
1) Type in terminal (folder: aurora) <code>npm start</code> to start your application to start your frontend - on server localhost:3000
2) <code>Start CarngoApplication</code> (src/main/java/com/codecool/carngo/CarngoApplication.java) to start your database and backend - on server localhost:8080
3) If everything is successfull your page is now on and starting! You can see the main page as it start automatically. 

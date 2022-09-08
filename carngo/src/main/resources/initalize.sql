DROP TABLE IF EXISTS car_availability;
DROP TABLE IF EXISTS car_images;
DROP TABLE IF EXISTS car_feedback;
DROP TABLE IF EXISTS user_feedback;
DROP TABLE IF EXISTS car_reservation;
DROP TABLE IF EXISTS vehicles;
DROP TABLE IF EXISTS hosts;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
                       id int,
                       name varchar(255),
                       email varchar(255),
                       password varchar(255),
                       image_source varchar(255),
                       profile_description varchar(511),
                       number_of_cars int,
                       PRIMARY KEY (id)
);

CREATE TABLE hosts (
                       id int,
                       bank_account_number varchar(255),
                       bank_account_name varchar(255),
                       user_id int,
                       PRIMARY KEY (id),
                       FOREIGN KEY (user_id)
                           REFERENCES users(id)
);


CREATE TABLE vehicles (
                      id int,
                      description varchar(255),
                      car_type varchar(255),
                      color varchar(255),
                      brand varchar(255),
                      model varchar(255),
                      fuel varchar(255),
                      image_source varchar(255),
                      vintage int,
                      num_of_seats int,
                      trunk_capacity int,
                      price_per_day int,
                      num_of_reservations int,
                      owner_id int,
                      PRIMARY KEY (id),
                      FOREIGN KEY (owner_id)
                          REFERENCES hosts(id)
);

CREATE TABLE car_availability (
                      id int,
                      vehicle_id int,
                      from_date date,
                      to_date date,
                      PRIMARY KEY (id),
                      FOREIGN KEY (vehicle_id)
                          REFERENCES vehicles(id)
);

CREATE TABLE car_reservation (
                     id int,
                     from_date date,
                     to_date date,
                     renter_user_id int,
                     vehicle_id int,
                     PRIMARY KEY (id),
                     FOREIGN KEY (vehicle_id)
                         REFERENCES vehicles(id),
                     FOREIGN KEY (renter_user_id)
                         REFERENCES  users(id)
);

CREATE TABLE car_feedback (
                      id int,
                      cleanness int,
                      experience int,
                      condition int,
                      message varchar(255),
                      user_id int,
                      date date,
                      vehicle_id int,
                      PRIMARY KEY (id),
                      FOREIGN KEY (vehicle_id)
                          REFERENCES vehicles(id),
                      FOREIGN KEY (user_id)
                          REFERENCES users(id)
);

CREATE TABLE user_feedback (
                       id int,
                       star_rating int,
                       message varchar(255),
                       user_id int,
                       host_id int,
                       date date,
                       PRIMARY KEY (id),
                       FOREIGN KEY (user_id)
                           REFERENCES users(id),
                       FOREIGN KEY (host_id)
                           REFERENCES hosts(id)
);

CREATE TABLE car_images (
                       id int,
                       image_source varchar(255),
                       vehicle_id int,
                       PRIMARY KEY (id),
                       FOREIGN KEY (vehicle_id)
                            REFERENCES vehicles(id)

);


/*USERS*/
INSERT INTO users (id, name, email, password, image_source, profile_description, number_of_cars)
VALUES (1, 'Donát Alpár', 'alpardonat02@gmail.com', '1234', 'AlparDonat.jpg', 'A Young And Enthusiastic Software Developer With Critical Thinking, Problem-Solving, Negotiation, Outstanding In Both Oral And Written Communication, And Easily Adaptable Interpersonal Skills. Moreover, Working In A Team Means No Difficulties Due To My Emotional Intelligence And Social Collaboration, Also Rather An Exciting Journey For Me.', 1);

INSERT INTO users (id, name, email, password, image_source, profile_description, number_of_cars)
VALUES (2, 'Barbara Huszár', 'szabo.huszar.barbara@gmail.com', '1234', 'BarbaraHuszar.jpg', 'Solution-Focused Mind With A Creative Touch. Eager To Learn. Her Easy Going Personality Makes It Easy To Make A Good Fit In Any Team.', 1);

INSERT INTO users (id, name, email, password, image_source, profile_description, number_of_cars)
VALUES (3, 'Roland Márton', 'roland111187@gmail.com', '1234', 'RolandMarton.jpeg', 'A Young And Enthusiastic Software Developer With Critical Thinking, Problem-Solving, Negotiation, Outstanding In Both Oral And Written Communication, And Easily Adaptable Interpersonal Skills. Moreover, Working In A Team Means No Difficulties Due To My Emotional Intelligence And Social Collaboration, Also Rather An Exciting Journey For Me. I''m Still Enthusiastic About Grabbing Onto Any Other Programming Languages, Frameworks, And Principles I Can Integrate Into The Coding Web In My Head.', 1);

INSERT INTO users (id, name, email, password, image_source, profile_description, number_of_cars)
VALUES (4, 'Zsolt Pintér', 'zsol.pz@gmail.com', '1234', 'ZsoltPinter.jpg', 'An Ambitious And Aspiring Fullstack Software Developer From Codecool Academy With Excellent Hard Skills To Work On The Most Difficult Projects, Problems. Moreover, Distinguished Soft Capabilities To Work In A Team As A Leader Or Member Either. I''m Still Enthusiastic About Grabbing Onto Any Other Programming Languages, Frameworks.', 1);

INSERT INTO users (id, name, email, password, image_source, profile_description, number_of_cars)
VALUES (5, 'Tom B. Erichsen', 'Erichsen@gmail.com', 'Password123', 'defaultProfile.jpg','This profile has not got any description.', 1);

INSERT INTO users (id, name, email, password, image_source, profile_description, number_of_cars)
VALUES (6, 'Ashlynn', 'Ashlynn@gmail.com', '987654321', 'defaultProfile.jpg', 'This profile has not got any description.', 0);

INSERT INTO users (id, name, email, password, image_source, profile_description, number_of_cars)
VALUES (7, 'Brandon', 'brandon@gmail.com', '987651321', 'defaultProfile.jpg', 'This profile has not got any description.', 1);


/*HOSTS*/
INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (1, 404307462, 'Doni', 1);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (2, 404307462, 'Barbi', 2);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (3, 404307462, 'Roli', 3);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (4, 404307462, 'Zsolti', 4);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (5, 404307469, 'Erichsen', 5);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (7, 404307462, 'Brandon', 7);


/*VEHICLES*/
INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (100, 'Trustworthy car for extreme terrain.', 'sedan', 'grey', 'Toyota', 'Tacoma','hybrid', 'travis-essingerSquare.jpg', 2020, 5, 500, 79, 3, 1);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (200, 'Do not want an Audi? Yes you do...', 'sedan', 'gold', 'Audi', 'RS','petrol', 'Audi-RSSquare.jpg', 2021, 5, 300, 121, 4, 2);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (300, 'You know Flash? I just overtook him.', 'sedan', 'red', 'Ferrari', 'F40','petrol', 'ferrariSquare.jpg', 2004, 5, 100, 160, 5, 3);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (400, 'You were not really driving if you were not going above 400km/h', 'sedan', 'grey', 'Bugatti', 'Chiron','petrol', 'bugattiSquare.jpeg', 2022, 5, 100, 205, 5, 4);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (500, 'Do not even look at it.', 'sedan', 'yellow', 'Mercedes', 'AMG GT','petrol', 'mercedesSquare.jpeg', 2018, 5, 200, 140, 4, 5);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (600, 'It is grey. I think.', 'sedan', 'blue', 'McLaren', '720S','petrol', 'mclarenSquare.jpg', 2021, 5, 200, 210, 5, 7);



/*CAR_AVAILABILITY*/
INSERT INTO car_availability (id, vehicle_id, from_date, to_date)
VALUES (10, 100, '2022-09-30', '2022-10-01');



/*CAR_RESERVATION*/
INSERT INTO car_reservation (id, from_date, to_date, renter_user_id, vehicle_id)
VALUES (1, '2022-09-27', '2022-09-28', 2,100);



/*USER_FEEDBACK*/
INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (1, 3.9, 'the host was really kind', 7, 1, '2022-09-28');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (2, 2.8, 'He was drunk as hell.', 6, 1, '2022-09-24');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (3, 4.2, 'This car is awesome!!', 5, 1, '2022-09-22');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (4, 4.8, 'Hell yeah, baby!!!', 4, 2, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (5, 5, 'Precise, trustworthy, excellent!', 3, 2, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (6, 5, 'It was fun', 1, 2, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (7, 5, 'He has the best car ever!', 2, 3, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (8, 5, 'Precise, trustworthy, excellent!', 7, 3, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (9, 5, 'It was fun', 6, 3, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (10, 5, 'He has the best car ever!', 5, 4, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (11, 5, 'Precise, trustworthy, excellent!', 3, 4, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (12, 5, 'It was fun', 2, 5, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (13, 5, 'He has the best car ever!', 1, 5, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (14, 5, 'Precise, trustworthy, excellent!', 6, 7, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (15, 5, 'It was fun', 5, 7, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (16, 5, 'He has the best car ever!', 4, 7, '2022-09-21');



/*CAR_FEEDBACK*/
INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (1, 'Precise description.', 7, '2022-09-28',100,3,2,4);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (2, 'Had fun.', 6, '2022-09-28',100,4,2,1);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (3, 'Did not meet my expectations.', 5, '2022-09-28',100,5,2,3);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (4, 'Good car and host', 4, '2022-09-28',100,1,4,2);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (5, 'Precise description.', 7, '2022-09-28',200,4,2,3);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (6, 'Had fun.', 6, '2022-09-28',200,5,2,3);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (7, 'Did not meet my expectations.', 5, '2022-09-28',200,2,3,1);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (8, 'Good car and host', 4, '2022-09-28',200,4,2,3);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (9, 'Precise description.', 7, '2022-09-28',300,1,2,3);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (10, 'Had fun.', 1, '2022-09-28',300,5,4,5);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (11, 'Did not meet my expectations.', 5, '2022-09-28',300,5,4,3);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (12, 'Good car and host', 4, '2022-09-28',300,3,2,3);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (13, 'Precise description.', 2, '2022-09-28',400,4,2,4);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (14, 'Had fun.', 6, '2022-09-28',400,5,3,4);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (15, 'Did not meet my expectations.', 5, '2022-09-28',400,4,3,4);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (16, 'Good car and host', 1, '2022-09-28',400,2,3,4);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (17, 'Precise description.', 7, '2022-09-28',500,5,3,3);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (18, 'Had fun.', 6, '2022-09-28',500,2,3,4);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (19, 'Did not meet my expectations.', 3, '2022-09-28',500,3,4,2);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (20, 'Good car and host', 4, '2022-09-28',500,2,4,3);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (21, 'Precise description.', 7, '2022-09-28',600,4,4,4);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (22, 'Had fun.', 5, '2022-09-28',600,5,5,5);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (23, 'Did not meet my expectations.', 1, '2022-09-28',600,5,4,5);

INSERT INTO car_feedback (id, message, user_id, date, vehicle_id, cleanness, experience, condition)
VALUES (24, 'Good car and host', 4, '2022-09-28',600,2,3,2);



/*CAR_IMAGES*/
INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(1, 'f40-1.jpg', 300);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(2, 'f40-2.jpg', 300);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(3, 'f40-3.jpg', 300);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(4, 'ferrariSquare.jpg', 300);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(5, 'mgt-5.jpeg', 500);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(6, 'mgt-2.jpg', 500);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(7, 'mgt-3.jpeg', 500);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(8, 'mgt-4.jpeg', 500);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(9, 'mercedesSquare.jpeg', 500);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(10, 'travis-essingerSquare.jpg', 100);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(11, 'Audi-RSSquare.jpg', 200);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(12, 'bugattiSquare.jpeg', 400);

INSERT INTO car_images(id, image_source, vehicle_id)
VALUES(13, 'mclarenSquare.jpg', 600);
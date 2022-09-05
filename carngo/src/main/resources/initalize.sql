DROP TABLE IF EXISTS car_availability;
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
                       PRIMARY KEY (id)
);

CREATE TABLE hosts (
                       id int,
                       bank_account_number int,
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
                              star_rating int,
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


/* TEST DATA */
INSERT INTO users (id, name, email, password, image_source)
VALUES (7, 'Alpár Donát', 'alpardonat02@gmail.com', '1234', 'AlparDonat.jpg');

INSERT INTO users (id, name, email, password, image_source)
VALUES (6, 'Barbara Huszár', 'szabo.huszar.barbara@gmail.com', '1234', 'BarbaraHuszar.jpg');

INSERT INTO users (id, name, email, password, image_source)
VALUES (5, 'Roland Márton', 'roland111187@gmail.com', '1234', 'RolandMarton.jpeg');

INSERT INTO users (id, name, email, password, image_source)
VALUES (4, 'Zsolt Pintér', 'zsol.pz@gmail.com', '1234', 'ZsoltPinter.jpg');

INSERT INTO users (id, name, email, password, image_source)
VALUES (1, 'Tom B. Erichsen', 'Erichsen@gmail.com', 'Password123', 'defaultProfile.jpg');

INSERT INTO users (id, name, email, password, image_source)
VALUES (2, 'Ashlynn', 'Ashlynn@gmail.com', '987654321', 'defaultProfile.jpg');

INSERT INTO users (id, name, email, password, image_source)
VALUES (3, 'Brandon', 'brandon@gmail.com', '987651321', 'defaultProfile.jpg');

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (1, 404307469, 'Erichsen', 1);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (2, 404307462, 'Brandon', 3);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (3, 404307462, 'Barbi', 6);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (4, 404307462, 'Zsolti', 4);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (5, 404307462, 'Roli', 5);

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (6, 404307462, 'Doni', 7);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (100, 'noi tulajdonostol alig hasznalt', 'sedan', 'grey', 'Toyota', 'Tacoma','hybrid', 'travis-essingerSquare.jpg', 2020, 5, 500, 79, 3, 1);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (200, 'noi tulajdonostol alig hasznalt', 'sedan', 'gold', 'Audi', 'RS','petrol', 'Audi-RSSquare.jpg', 2021, 5, 300, 121, 4, 1);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (300, 'noi tulajdonostol alig hasznalt', 'sedan', 'red', 'Ferrari', 'F40','petrol', 'ferrariSquare.jpg', 2004, 5, 100, 160, 5, 3);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (400, 'noi tulajdonostol alig hasznalt', 'sedan', 'grey', 'Bugatti', 'Chiron','petrol', 'bugattiSquare.jpeg', 2022, 5, 100, 205, 5, 6);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (500, 'noi tulajdonostol alig hasznalt', 'sedan', 'yellow', 'Mercedes', 'AMG GT','petrol', 'mercedesSquare.jpeg', 2018, 5, 200, 140, 4, 4);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (600, 'noi tulajdonostol alig hasznalt', 'sedan', 'blue', 'McLaren', '720S','petrol', 'mclarenSquare.jpg', 2021, 5, 200, 210, 5, 5);

INSERT INTO car_availability (id, vehicle_id, from_date, to_date)
VALUES (10, 100, '2022-09-30', '2022-10-01');

INSERT INTO car_reservation (id, from_date, to_date, renter_user_id, vehicle_id)
VALUES (1, '2022-09-27', '2022-09-28', 2,100);

INSERT INTO car_feedback (id, star_rating, message, user_id, date, vehicle_id)
VALUES (1, 3.9, 'i like the ride', 2, '2022-09-28',100);

/*that's actually a host feedback*/
INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (1, 3.9, 'the host was really kind', 1, 2, '2022-09-28');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (2, 2.8, 'He was drunk as hell.', 2, 2, '2022-09-24');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (3, 4.2, 'This car is awesome!!', 2, 1, '2022-09-22');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (4, 4.8, 'Hell yeah, baby!!!', 3, 1, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (5, 5, 'Precise, trustworthy, excellent!', 5, 6, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (6, 5, 'I kinda like him :)', 6, 6, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (7, 5, 'He has the best car ever!', 4, 6, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (8, 5, 'Precise, trustworthy, excellent!', 7, 5, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (9, 5, 'I kinda like him :)', 6, 5, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (10, 5, 'He has the best car ever!', 4, 5, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (11, 5, 'Precise, trustworthy, excellent!', 7, 4, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (12, 5, 'I kinda like him :)', 6, 4, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (13, 5, 'He has the best car ever!', 5, 4, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (14, 5, 'Precise, trustworthy, excellent!', 7, 3, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (15, 5, 'I kinda like him :)', 5, 3, '2022-09-21');

INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (16, 5, 'He has the best car ever!', 4, 3, '2022-09-21');
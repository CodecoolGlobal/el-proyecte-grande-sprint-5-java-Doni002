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
    "from" date,
    "to" date,
    status boolean,
    PRIMARY KEY (id),
    FOREIGN KEY (vehicle_id)
    REFERENCES vehicles(id)
);

CREATE TABLE car_reservation (
    id int,
    "from" date,
    "to" date,
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

INSERT INTO users (id, name, email, password)
VALUES (100, 'Tom B. Erichsen', 'Erichsen@gmail.com', 'Password123');

INSERT INTO users (id, name, email, password)
VALUES (200, 'Ashlynn', 'Ashlynn@gmail.com', '987654321');

INSERT INTO hosts (id, bank_account_number, bank_account_name, user_id)
VALUES (2, 404307469, 'Erichsen', 100);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (100, 'noi tulajdonostol alig hasznalt', 'sedan', 'red', 'Toyota', 'Tacoma','petrol', '/travis-essingerSquare.jpg', 2022, 5, 500, 79000, 19, 2);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (200, 'noi tulajdonostol alig hasznalt', 'sedan', 'red', 'Audi', 'RS','petrol', '/Audi-RSSquare.jpg', 2022, 5, 500, 79000, 19, 2);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (300, 'noi tulajdonostol alig hasznalt', 'sedan', 'red', 'Ferrari', 'F40','petrol', '/ferrariSquare.jpg', 2022, 5, 500, 79000, 19, 2);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (400, 'noi tulajdonostol alig hasznalt', 'sedan', 'red', 'Bugatti', 'Chiron','petrol', '/bugattiSquare.jpeg', 2022, 5, 500, 79000, 19, 2);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (500, 'noi tulajdonostol alig hasznalt', 'sedan', 'red', 'Mercedes', 'AMG GT','petrol', '/mercedesSquare.jpeg', 2022, 5, 500, 79000, 19, 2);

INSERT INTO vehicles (id, description, car_type, color, brand, model, fuel, image_source, vintage, num_of_seats, trunk_capacity, price_per_day, num_of_reservations, owner_id)
VALUES (600, 'noi tulajdonostol alig hasznalt', 'sedan', 'red', 'McLaren', '720S','petrol', '/mclarenSquare.jpg', 2022, 5, 500, 79000, 19, 2);

INSERT INTO car_availability (id, vehicle_id, "from", "to", status)
VALUES (1, 100, '2022-09-30', '2022-10-01', true);

INSERT INTO car_reservation (id, "from", "to", renter_user_id, vehicle_id)
VALUES (1, '2022-09-27', '2022-09-28', 200,100);

INSERT INTO car_feedback (id, star_rating, message, user_id, date, vehicle_id)
VALUES (1, 3.9, 'i like the ride', 200, '2022-09-28',100);

            /*that's actually a host feedback*/
INSERT INTO user_feedback (id, star_rating, message, user_id, host_id, date)
VALUES (1, 3.9, 'the host was really kind', 200, 2, '2022-09-28');



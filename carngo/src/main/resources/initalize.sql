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
    car_id int,
    "from" int,
    "to" int,
    status boolean,
    FOREIGN KEY (car_id)
    REFERENCES vehicles(id)
);

CREATE TABLE car_reservation (
    id int,
    "from" date,
    "to" date,
    renter_user_id int,
    car_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (car_id)
    REFERENCES vehicles(id),
    FOREIGN KEY (renter_user_id)
    REFERENCES  users(id)
);

CREATE TABLE car_feedback (
    id int,
    star_rating int,
    message varchar(255),
    reserve_id int,
    vehicle_id int,
    user_id int,
    date date,
    PRIMARY KEY (id),
    FOREIGN KEY (reserve_id)
    REFERENCES car_reservation(id),
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




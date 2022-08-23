DROP TABLE IF EXISTS vehicles;

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
                         PRIMARY KEY (id)
);
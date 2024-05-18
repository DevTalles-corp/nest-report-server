CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    work_time TIME NOT NULL,
    hours_per_day INT NOT NULL,
    work_schedule VARCHAR(50) NOT NULL
);

INSERT INTO employees (name, position, start_date, work_time, hours_per_day, work_schedule)
VALUES
('Juan Pérez', 'Desarrollador', '2021-01-15', '09:00', 8, 'Lunes a Viernes, 9am - 5pm'),
('Ana Gómez', 'Diseñadora', '2020-03-22', '10:00', 6, 'Lunes a Viernes, 10am - 4pm'),
('Carlos Sánchez', 'Gerente', '2018-11-05', '08:00', 9, 'Lunes a Viernes, 8am - 5pm'),
('María López', 'Analista', '2019-07-11', '09:30', 7, 'Lunes a Viernes, 9:30am - 4:30pm'),
('Pedro Rodríguez', 'Programador', '2021-09-14', '11:00', 6, 'Lunes a Viernes, 11am - 5pm'),
('Lucía Fernández', 'Administrativa', '2020-12-01', '08:30', 8, 'Lunes a Viernes, 8:30am - 4:30pm'),
('José Martínez', 'Contador', '2017-05-19', '09:00', 8, 'Lunes a Viernes, 9am - 5pm'),
('Laura Ramírez', 'Desarrolladora', '2018-06-07', '10:00', 7, 'Lunes a Viernes, 10am - 5pm'),
('Miguel Torres', 'Soporte Técnico', '2021-03-16', '09:00', 8, 'Lunes a Viernes, 9am - 5pm'),
('Sara Morales', 'Recursos Humanos', '2019-09-23', '08:00', 7, 'Lunes a Viernes, 8am - 3pm'),
('David Vega', 'Desarrollador', '2022-02-14', '09:30', 7, 'Lunes a Viernes, 9:30am - 4:30pm'),
('Elena Ortiz', 'Diseñadora', '2021-11-10', '10:30', 6, 'Lunes a Viernes, 10:30am - 4:30pm'),
('Jorge Herrera', 'Gerente', '2016-04-18', '08:00', 9, 'Lunes a Viernes, 8am - 5pm'),
('Isabel Domínguez', 'Analista', '2019-02-05', '09:00', 8, 'Lunes a Viernes, 9am - 5pm'),
('Ricardo Ruiz', 'Programador', '2020-10-22', '10:00', 7, 'Lunes a Viernes, 10am - 5pm'),
('Patricia Flores', 'Administrativa', '2018-08-30', '08:30', 8, 'Lunes a Viernes, 8:30am - 4:30pm'),
('Roberto Castillo', 'Contador', '2017-12-12', '09:00', 8, 'Lunes a Viernes, 9am - 5pm'),
('Adriana Reyes', 'Desarrolladora', '2021-06-25', '09:30', 7, 'Lunes a Viernes, 9:30am - 4:30pm'),
('Santiago García', 'Soporte Técnico', '2020-01-13', '08:00', 8, 'Lunes a Viernes, 8am - 4pm'),
('Verónica Ríos', 'Recursos Humanos', '2019-04-17', '09:00', 7, 'Lunes a Viernes, 9am - 4pm');

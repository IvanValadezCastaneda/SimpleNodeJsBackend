INSERT INTO Usuarios (id, name, surname, position, phones, emails) VALUES 
(1, 'John', 'Doe', 'Manager', '{"(123) 456-7890", "(234) 567-8901"}', '{"johndoe@example.com"}'),
(2, 'Jane', 'Doe', 'Assistant Manager', '{"(345) 678-9012", "(456) 789-0123"}', '{"janedoe@example.com"}'),
(3, 'Bob', 'Smith', 'Developer', '{"(567) 890-1234", "(678) 901-2345"}', '{"bobsmith@example.com"}'),
(4, 'Mary', 'Johnson', 'QA Tester', '{"(789) 012-3456", "(890) 123-4567"}', '{"maryjohnson@example.com"}'),
(5, 'Michael', 'Brown', 'Designer', '{"(901) 234-5678", "(012) 345-6789"}', '{"michaelbrown@example.com"}'),
(6, 'Emily', 'Davis', 'Project Manager', '{"(234) 567-8901", "(345) 678-9012"}', '{"emilydavis@example.com"}'),
(7, 'David', 'Garcia', 'Software Engineer', '{"(456) 789-0123", "(567) 890-1234"}', '{"davidgarcia@example.com"}'),
(8, 'Jessica', 'Wilson', 'Product Manager', '{"(678) 901-2345", "(789) 012-3456"}', '{"jessicawilson@example.com"}'),
(9, 'Ryan', 'Lee', 'Data Analyst', '{"(890) 123-4567", "(901) 234-5678"}', '{"ryanlee@example.com"}'),
(10, 'Kimberly', 'Chen', 'Database Administrator', '{"(012) 345-6789", "(123) 456-7890"}', '{"kimberlychen@example.com"}');

INSERT INTO Catalogo VALUES
(1, 'Super Express Train', 'TrainCo', 2500, 120, 'TX001', '3 days', '20 lbs', '3 ft x 1 ft x 1 ft'),
(2, 'Railway Cargo Car', 'CargoMovers', 1000, 50, 'RM002', '2 days', '10 lbs', '2 ft x 1 ft x 1 ft'),
(3, 'Passenger Train Set', 'TrainCo', 5000, 240, 'TX002', '4 days', '30 lbs', '4 ft x 2 ft x 1 ft'),
(4, 'Locomotive Engine', 'TrainCo', 3500, 170, 'TX003', '3 days', '25 lbs', '3 ft x 1 ft x 1.5 ft'),
(5, 'Freight Train Car', 'CargoMovers', 1200, 60, 'RM003', '2 days', '15 lbs', '2.5 ft x 1 ft x 1.5 ft'),
(6, 'Railway Passenger Car', 'PassengerMovers', 2000, 100, 'PM001', '3 days', '18 lbs', '3 ft x 1.5 ft x 1.5 ft'),
(7, 'Railway Track Set', 'TrainCo', 800, 40, 'TX004', '1 day', '10 lbs', '2.5 ft x 1 ft x 1 ft'),
(8, 'Railway Signal Station', 'TrainCo', 1500, 70, 'TX005', '2 days', '12 lbs', '2 ft x 1 ft x 1.5 ft'),
(9, 'Railway Maintenance Car', 'MaintenanceMovers', 1800, 85, 'MM001', '2 days', '12 lbs', '2 ft x 1 ft x 1.5 ft');

INSERT INTO Plantas (name, location) VALUES 
('Planta A', 'Mexico City'),
('Planta B', 'Monterrey'),
('Planta C', 'Guadalajara');

INSERT INTO Requisiciones (proyecto, plant_id, employee_id, plant_name, item_id, item_name, brand, price_MXN, price_USD, SKU, shipping_time) VALUES 
  ('Proyecto 1', 3, 1, 'Plant C', 1, 'Super Express Train', 'TrainCo', 2500, 120, 'TX001', '3 days'),
  ('Proyecto 1', 1, 10, 'Planta B', 4, 'Locomotive Engine', 'TrainCo', 3500, 170, 'TX003', '3 days'),
  ('Proyecto 2', 1, 3, 'Planta A', 5, 'Freight Train Car', 'CargoMovers', 1200, 60, 'RM003', '2 days'),
  ('Proyecto 2', 2, 4, 'Planta B', 8, 'Railway Signal Station', 'TrainCo', 1500, 70, 'TX005', '2 days'),
  ('Proyecto 3', 1, 10, 'Planta A', 8, 'Railway Signal Station', 'TrainCo', 1500, 70, 'TX005', '2 days');

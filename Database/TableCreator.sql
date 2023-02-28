CREATE TABLE Usuarios (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    phones VARCHAR(255)[] NOT NULL,
    emails VARCHAR(255)[] NOT NULL
);

CREATE TABLE Catalogo (
  item_id INT PRIMARY KEY,
  item_name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  price_MXN DECIMAL(10, 2) NOT NULL,
  price_USD DECIMAL(10, 2) NOT NULL,
  SKU VARCHAR(255) NOT NULL,
  shipping_time VARCHAR(255) NOT NULL,
  weight VARCHAR(255) NOT NULL,
  size VARCHAR(255) NOT NULL
);

CREATE TABLE Plantas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL
);

CREATE TABLE Requisiciones (
  id SERIAL PRIMARY KEY,
  proyecto VARCHAR(255) NOT NULL,
  plant_id INT NOT NULL,
  plant_name VARCHAR(255) NOT NULL,
  employee_id INT NOT NULL,
  item_id INT NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL,
  price_MXN DECIMAL(10, 2) NOT NULL,
  price_USD DECIMAL(10, 2) NOT NULL,
  SKU VARCHAR(255) NOT NULL,
  shipping_time VARCHAR(255) NOT NULL,
  CONSTRAINT fk_employee
    FOREIGN KEY (employee_id)
    REFERENCES Usuarios(id),
  CONSTRAINT fk_plant
    FOREIGN KEY (plant_id)
    REFERENCES Plantas(id),
  CONSTRAINT fk_catalogo
    FOREIGN KEY (item_id)
    REFERENCES Catalogo(item_id)
);


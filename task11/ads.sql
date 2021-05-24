CREATE DATABASE IF NOT EXISTS Ads;
USE Ads;

CREATE TABLE User (
    Id int NOT NULL,
    Name varchar(45) NOT NULL,
    Role varchar(45) NOT NULL,
    PRIMARY KEY (Id)
);

CREATE TABLE Ads (
    Id int NOT NULL,
    UserId int NOT NULL,
    ShoesName varchar(45) NOT NULL,
    Description varchar(250) NOT NULL,
    CreatedAt date NOT NULL,
    VendorId int NOT NULL,
    PhotoLink varchar(250) DEFAULT NULL,
    Discount int NOT NULL,
    ValidUntil date NOT NULL,
    Rating double DEFAULT NULL,
    ReviewId int DEFAULT NULL,
    PRIMARY KEY (Id),
    FOREIGN KEY (UserId) REFERENCES User (Id),
    FOREIGN KEY (VendorId) REFERENCES Vendor (Id)
);

CREATE TABLE Review (
    Id int NOT NULL,
    AdId int NOT NULL,
    UserId int NOT NULL,
    CreatedAt date NOT NULL,
    Text varchar(1000) NOT NULL,
    Rating int DEFAULT NULL,
    PRIMARY KEY (UserId, AdId),
    FOREIGN KEY (AdId) REFERENCES Ad (Id),
    FOREIGN KEY (UserId) REFERENCES User (Id)
);

CREATE TABLE Vendor (
    Id int NOT NULL,
    Name varchar(45) NOT NULL,
    PRIMARY KEY (Id)
);

INSERT INTO User(Id, Name, Role) VALUES
(1, 'Maria', 'Customer'),
(2, 'Sasha', 'Customer'),
(3, 'Pete', 'Admin'),
(4, 'Alina', 'Customer'),
(5, 'Maksim', 'Admin'),
(6, 'Pasha', 'Customer'),
(7, 'Frosya', 'Customer'),
(8, 'Kostya', 'Admin'),
(9, 'Matvey', 'Customer'),
(10, 'Luba', 'Admin'),
(11, 'Katya', 'Customer'),
(12, 'Lena', 'Admin'),
(13, 'Vitalya', 'Admin');

INSERT INTO Ads(Id, UserId, ShoesName, Description, CreatedAt, VendorId, PhotoLink, Discount, ValidUntil, Rating, ReviewId) VALUES
(1, 2,'Leather Autumn Boots', 'A versatile model for spring and early fall.', '2021-05-02 23:50:00', 1, 'https://drive.google.com/file/d/1c0qDMjCXkfUeIgrG4hlFbw15lJzfiVPf/view?usp=sharing', 15, '2021-06-01 23:00:00', 3, 1),
(2, 3,'Women Boots (Eco-leather)', 'The model of autumn boots made of eco-leather is complemented with bright red laces.', '2021-07-25 19:45:00', 2, 'https://drive.google.com/file/d/1DdLsCsafPKUABXC_qXey5_hp7_Xw2t0Q/view?usp=sharing', 50, '2021-05-20 20:00:00', 4, 5),
(3, 5,'Boots Autumn Suede', 'High-quality suede shoes of an unusual color will accentuate any look.', '2021-05-07 12:58:34', 3, 'https://drive.google.com/file/d/1ml5fDCIWjxIS5xCFhBJ_jcVQOZoLgadB/view?usp=sharing', 30, '2021-08-20 21:00:00', 4, 2),
(4, 1,'Chelsea Genuine Leather', 'Chelsea boots are perfect for any autumn look, the boots stretch well on the shins.', '2021-05-07 12:58:34', 4, 'https://drive.google.com/file/d/1y0i-DU1sJGNy-4GQFkGl-XGOFDzRc2ud/view?usp=sharing', 20, '2021-05-10 10:30:00', 5, 8),
(5, 7,'Ankle Boots', 'A feminine and sophisticated pair of genuine leather ankle boots that will add style to any outfit.', '2021-05-01 14:37:00', 5, 'https://drive.google.com/file/d/1UfSmBS-Qq_f65jyxyEeYedsiAcvz1Gk4/view?usp=sharing', 10, '2021-03-15 09:49:20', 4.2, 4),
(6, 8,'Winter Boots',  'Unusual design with front zip and interesting details.', '2021-04-10 10:00:00', 6, 'https://drive.google.com/file/d/12ILOLLBaTWUaRQZNKs9jBbkVTJDQdja-/view?usp=sharing', 90, '2021-07-10 20:30:00', 2.5, 2),
(7, 4,'Autumn Boots Faux Leather', 'High tractor outsole and leather belt look stylish.', '2021-05-07 12:58:34', 7, 'https://drive.google.com/file/d/1LU39YLcL9T0BrSTDVQC_m2MA2I84Z_z1/view?usp=sharing', 10, '2021-05-07 20:40:00', 3, 6),
(8, 7,'Winter Boots', 'The all-brown, gradient-fitting model is a good choice for winter.', '2020-05-15 00:00:00', 8, 'https://drive.google.com/file/d/1R8Y6SDnKGYxS9BBJE1Wwpx0-21sFlyJX/view?usp=sharing', 15, '2021-10-15 15:30:00', 4, 3),
(9, 6,'Autumn Sneakers', 'Lightweight casual sneakers with genuine and suede leather inserts.', '2021-03-05 14:29:43', 9, 'https://drive.google.com/file/d/1Ld65KCJT5h2XxiDRJbAUjord5qy9rT8n/view?usp=sharing', 30, '2021-04-13 17:50:00', 4.1, 7),
(10, 1,'Women Boots Suede', 'A versatile model for spring and early fall.', '2021-04-01 10:09:14', 10, 'https://drive.google.com/file/d/1DdLsCsafPKUABXC_qXey5_hp7_Xw2t0Q/view?usp=sharing', 15, '2021-05-06 22:20:00', 2, 9);

INSERT INTO Review(Id, AdId, UserId, CreatedAt, Text, Rating) VALUES
(1, 2, 3, '2021-04-01 23:00:00', 'The quality is good, thanks!', 2),
(2, 1, 4, '2021-05-10 13:15:00', 'The quality is good, thanks!', 3),
(3, 6, 7, '2021-03-20 18:30:45', 'Very convenient!', 5),
(4, 3, 5, '2021-02-07 19:20:45', 'The quality is good, thanks!', 2),
(5, 1, 3, '2021-07-11 14:20:00', 'Very convenient!', 3),
(6, 7, 4, '2021-02-02 16:35:00', 'Very convenient!', 5),
(7, 5, 5, '2021-05-14 10:00:00', 'The quality is good, thanks!', 4),
(8, 6, 3, '2021-09-09 19:48:00', 'Very convenient!', 3),
(9, 8, 3, '2021-05-05 23:30:00', 'The quality is good, thanks!2', 5),
(10, 2, 2, '2021-05-12 11:00:05', 'Very convenient!', 4);

INSERT INTO Vendor(Id, Name) VALUES
(1,'Marsel'),
(2,'Studio 27'),
(3,'MODESCO'),
(4,'MEXX'),
(5,'BRULLOFF'),
(6,'BERG'),
(7,'Marsel'),
(8,'ASICS'),
(9,'Studio 27'),
(10,'BERG');
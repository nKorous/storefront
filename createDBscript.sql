create database storefront

create table products (
	productKey int PRIMARY KEY IDENTITY(1,1),
	productName nvarchar(100) not null,
	productDescription nvarchar(300) null,
	active bit not null DEFAULT 1,
)

insert into products (productName, productDescription)
values ('Lightsaber', 'A Freakin Lightsaber from Star Wars'),
('Jedi Holocron', 'A holocron of the Jedi probably talking about peace and stuff'),
('Sith Holocron', 'A holocron talking about how awesome the Sith are'),
('Phaser', 'A phaser from Star Trek that someone misplaced so we are going to sell it'),
('Wil Wheaton Action Figure', 'An action figure of our loveable redshirt, Wil Wheaton')

# Car-sharing
Minimal web api service. It supports Get, Post, Put and Delete methods for manipulating with car sharing service data.

Database -> MySQL

In order to use this service:
 ---
    1. Create mysql database
    2. In file .env fill in fields DB_NAME, DB_USER, DB_PASSWORD 
    3. Run app `npm run dev`

## Postman documentation: 
https://documenter.getpostman.com/view/19207805/UzBqpkbZ

## Task Requirements:

Use Express for creating web api that can accept requests.

1. Create MySQL or PostgreSQL database car-sharing that contains car, credit card, driver, run and booking history tables.
Tables:

* car table:
  * VIN (Vehicle identification number)
  * Registration number
  * Brand
  * Model
  * Production date
  * Status (Free, Reserved, In use, Unavailable, In Service, ...)
  * Fuel level (litres, percents or part of full)
  * Mileage (km)
  * Current run (refers to the run table)
  * Geo latitude
  * Geo longitude

* credit card table:
  * Card number
  * Card holder (First name and Last name)
  * Card valid date

* driver table:
  * License number
  * First name
  * Last name
  * Credit card (refers to the credit card table)

* run table:
  * Start date
  * Driver (refers to the driver table)
  * Start fuel level
  * Start mileage (km)

* booking table:
  * Car (refers to the car table)
  * Run (refers to the run table)
  * Finish fuel level
  * Finish mileage (km)


2. Add at least 5 various records(use different values from enumerations for populating fields) for each table. Keep in mind that some of the fields could be nullable, other must have default values.

3. Init and configure Node.js project, install Sequelize NPM package. Create models for every table using schemas that describes table structure (Set field types, default values if needed).

4. Create simple web api service that can accept next requests (and answer with appropriate responses):
   * Get http request to obtain list of cars that are currently in use and fuel level less than 1/4 of full tank
   * Get http request to obtain all cars that has been reserved, but driver credit/debit card hasn't been authorized. Return VIN, location, driver first/last name and driver license number.
   * Post http request to add new car in the car sharing park.
   * Put http request to update any car produced before '01/01/2017' or has mileage greater than 100000 km by setting Status to In Service.
   * Put http request to update any car that has been booked more than 2 times and aren't In use or Reserved by setting location coordinates to { latitude: 53.8882836, longitude: 27.5442615}
   * Delete http request to remove car by VIN

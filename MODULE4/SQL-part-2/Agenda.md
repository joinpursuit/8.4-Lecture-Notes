# SQL - Part 2: SQL: The Sequel
# Agenda
- SQL Review
- Joins 

## Previously, on SQL.
- SQL Review
    - What is a Database?
    - How do we Create one?
    - How do we Delete one?
      - DROP DATABASE <nameofdatabase>
    - How do we add Data to a DB?
      - INSERT INTO <db> (col1, col2, etc.....) VALUES (val1, val2, etc....);
    - How do we READ Data from a DB?
      - SELECT * FROM <table>;
    - How do we UPDATE data from a DB?
      - UPDATE <table> SET col val WHERE <condition>; 
    - How do we DELETE data from a DB?
      - DELETE FROM <table> WHERE <condition>
## JOINS 
- Joins discussion
    - What is a JOIN?
      - Joining two tables together
    - Why do we need to know this?
      - Increases efficiency and allows for data cleanliness and easier consumption
      - This is called data normalization
    - What is a PRIMARY KEY?
      - Unique resource entity. Everytime we create a resource it will have a unique way to identify it.
    - What is a FOREIGN KEY?
      - Represents information located on another table that the given resource has a relationship with
    - ACTIVITY!

## SQL Walkthrough
We will be working with two data tables in this lecture `Hotels` and `Rooms` based on the following data Models.  This is what is known as a `One To Many Relationship` as Each hotel has MANY rooms but each room only has ONE hotel.

- Hotel
  - name - string
  - city - string
  - state - string
  - rating - integer
  - pets - boolean

|       name       |    city    |   state    | rating | pets |
| :--------------: | :--------: | :--------: | :----: | :--: |
| Hotel California |  Unknown   | California |   4    | true |
|  Great Northern  | Twin Peaks | Washington |   3    | true |

- Room
  - type - string
  - price - integer
  - number - integer
  - vacant - boolean

|   name    | price | room_num | vacant | hotel_id |
| :-------: | :---: | :------: | :----: | :------: |
|   Queen   | 1200  |   202    |  true  |    1     |
| Penthouse | 10000 |   303    |  true  |    1     |
|   Twin    |  600  |   101    | false  |    1     |

## [Lab time](https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/full-stack-express/intro-to-sql-part-2/README2.md#lab-time)
Today we work SOLO.



1. Abubakar Adnan Adams & John Prado
2. Jorge Carrera & Jimmy Ayivor
3. Kalilah Clarke & Jede Brahma
4. Kenya Mighty & Jamal Ruiz
5. Kenyetta Griffin & Dan-ell Morales
6. Khaleed Uddin & Christine Taylor
7. Luke Kinoshi & Ametzayin Maldonado
8. Mason Mei & Ziqian Pan 
9. Michael Kleemoff &  AC Kleemoff
10. Olayinka Fakanbi & Victor Lopez
11. Sabrina Escobar Flores & Tom LaTulipe
12. Samantha Figueroa & Thierry Ankoue
13. Zane Ahmed & Taji Fuller
14. Soma Majumder & Spencer Simon
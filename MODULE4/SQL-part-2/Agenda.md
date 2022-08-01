# SQL - Part 2: SQL: The Sequel
# Agenda
- SQL Review
- Joins 

## Previously, on SQL.
- SQL Review
    - What is a Database?
    - How do we Create one?
    - How do we Delete one?
    - How do we add Data to a DB?
    - How do we READ Data from a DB?
    - How do we UPDATE data from a DB?
    - How do we DELETE data from a DB?
## JOINS 
- Joins discussion
    - What is a JOIN?
    - Why do we need to know this?
    - What is a PRIMARY KEY?
    - What is a FOREIGN KEY?
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
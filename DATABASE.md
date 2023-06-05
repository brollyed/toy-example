# Database Schema

### Students
- StudentID int
- FirstName varchar(100)
- LastName varchar(100)
- SchoolID int

### Users
- UserID int
- FirstName varchar(100)
- LastName varchar(100)

### Sessions
- UserID int
- StudentID int
- Date date
- Minutes int

### Schools
- SchoolID int
- Name varchar(100)



1. Write a query that returns the number of students

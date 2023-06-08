# Database

## Schema

```
# Students                                                        # Users
----------                                                        -------
- StudentID int                                                   - UserID int
- FirstName varchar(100)                                          - FirstName varchar(100)
- LastName varchar(100)                                           - LastName varchar(100)
- SchoolID int
```

### Sessions
- UserID int
- StudentID int
- Date date
- Minutes int

### Schools
- SchoolID int
- Name varchar(100)

## Queries

Write a query that:
1. Returns the total number of students
2. Returns each school name and the number of students in that school
3. Returns each users first name, last name, and the number of session minutes they have logged this week
4. Returns the number of session minutes on each date of this year
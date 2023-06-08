# Database

## Schema
```
# Students                                                        # Users
----------                                                        -------
- StudentID int                                                   - UserID int
- FirstName varchar(100)                                          - FirstName varchar(100)
- LastName varchar(100)                                           - LastName varchar(100)
- SchoolID int

# Sessions                                                        # Schools
----------                                                        ---------
- UserID int                                                      - SchoolID int
- StudentID int                                                   - Name varchar(100)
- Date date
- Minutes int
```

## Queries

Write a query that:
1. Returns the total number of students
2. Returns each school name and the number of students in that school
3. Returns each users first name, last name, and the number of session minutes they have logged this week
4. Returns the number of session minutes on each date of this year
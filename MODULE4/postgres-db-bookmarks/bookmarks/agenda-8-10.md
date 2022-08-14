# Agenda - One to Many Front End
  Today we finish building our front end to add CRUD functionality to our ONE TO MANY relationship
## Review
    - What is `One To Many`
        one resource that connects to another resource but has many of those resources.

    - What is a `Foreign Key` - why is this important?
        The key within a table that connects it to its parent
        This is how we connect our tables


    - What is our Foreign Key for our `Reviews` table;
        "bookmark_id" - connects reviews to a bookmark

    - What does ON CASCADE DELETE do?
        if a record in the parent table is deleted all corresponding records in the child table will automatically be deleted. -Dan 

        if we lose a record we have no need for the information referencing that records

    - What happens if we forget to add `RETURNING *` to our Update query?
        Pg promise sends back a 'query error'  - thanks Adnan!
        The record was also UPDATED! even though the record was - Dan

    - What does `express.Router( { mergeParams:true } )` mean?
        we pass  { mergeParams: true } to the child router so we can access its params on the parent router - Jimmy


## Starter Code Walkthrough

    Reviews.js  - handles our Index of reviews for each bookmark and crud functionality;
        Will render a ReviewForm to create a new review;

    Review.js - Renders a single review and functionality to update and delete;
        Will render a ReviewForm to edit a reivew;

    ReviewForm.js - We will render two versions of this component - one iteration will use our update 
        functionality and another our new;
    

## Building Crud 
    -CREATE
    -DELETE
    -UPDATE


## Reusing ReviewForm
    

## [Lab Time: Finish up To Part 4 on TUNER](https://github.com/joinpursuit/tuner-full-stack-app/blob/main/README-FE.md)


# Client-Side Routing in React
- Up to this point you've learned how to build single page applications with React  - single pages with a lot of functionality. You may have noticed, however, that as we've been building React Apps we can't use the URL or forward/back buttons in the browser. All of our app's functionality has been based on some conditional logic.
- In modern web applications we are able to change what we see on our webpages by navigating to different urls that change which components get rendered to our page.
- The collection of components rendered as a page at a given url is often referred to as a **view**
- React's ability to render the appropriate information on the DOM using its component structure is called **client-side routing**
- In React we can use a library called **React Router DOM** that will allow us to bring in the functionality of a multi-page application to our React apps.

# Component Structure
- Routing in applications, like many things we have learned up to this point, has strong conventions about how we should organize our webpages
    - Home page, always found at /
    - Static pages, descriptive like /about, /contact that are easy to understand what they link to.
    - Index pages, they will be plural and descriptive based on what they are showing:
        - /shoes
        - /cars
        - /blog-posts
    - Show pages will be nested from their index page and have a unique identifier. GitHub used repository and file names, but another common pattern is to use ids. An id is a unique identifying number or string for some data (a user, a product, etc.). Ids are used to be able to look up a specific piece of data, even if the data changes. For example someone's email may change, so it could be a problem to choose that as a unique identifier. Names, phone numbers and addresses also may not be unique. If you think about cars, there are many cars that have the same model, color and year, but all have their own unique id (VIN number). Some examples of show pages:
        - /shoes/1234
        - /cars/sedans/2022/hLm88324

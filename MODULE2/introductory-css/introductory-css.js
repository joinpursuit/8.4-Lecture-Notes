// # Introductory CSS

// ## Learning Objectives

// By the end of this lesson you should be able to:

// - Describe what CSS is and what it means that it cascades.
// - Differentiate between CSS rules, selectors, declarations, properties, and values.
// - Add inline styles to specific elements on an HTML page.
// - Add styles to an HTML page’s elements using the `style` element.
// - Add styles to an HTML page’s elements by connecting an external style sheet.

// ---

// ## Guiding Questions

// - What does CSS stand for?
//  Cascading Style Sheet
//  page is like an onion - 
//  Cascading Style Sheet 
//  CSS is like makeup!  HTML is the structure

// If a web page is a house - HTML is like the bones and CSS is the paint, wallpaper, etc.
// 

// - Define the parts of the following CSS rule:

//   Selector : - h1 - selects ALL h1's
//   Declaration block is the backets {}
//   Declarations are the actual key value pairs
//   Properties that point to values

//   h1 {
//     color: purple;
//     font-size: 36px;
//   }
//   

// - How does a declaration block differ from a declaration?
//  The block is whats between the `{}`
//  The declarations are the key-value, properites - the actual CSS rules we right

// - Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

// h2 === selector
//   h2 {  < ----- declaration block
//   property --- >  border-bottom: 3px solid red; <----values
//   }
  

// - Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

//   
//   p {
//     color: green;
//     font-family: Helvetica, serif;
//   }
  

// - Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

//   
//   p {
//     background: yellow;
//     height: 200px;
//     overflow: scroll;
//   }
//   

// - Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

//   
//   h1 {
//     color: red;
//     font-size: 10px;
//   }

//   h1 {
//     font-size: 40px;
//     font-weight: bold;
//   }
//   

// - What are the three ways you can connect CSS to an HTML page?

// Inline styling  - style an element directly
//    avoid!  Only styles one element AND takes precedence over others

// <style> tag!  This lets us write CSS directly in HTML.  
    //  HTML tag that lets browser know the content between is CSS;

//     

// - What attributes are required in creating a `link` element?
// 'href' - the hyperllink reference and the 'rel' - the relation as to what the link is

// - Why is creating an external stylesheet preferred to the other two methods?
    // Seperation of Concerns!  - Keep style and content seperate - easier to read and edit
    // Keeping seperate files helps us maintain a large srylsheet;
    // Reusability!  We can reuse the file in multiple places;
    // Single Source of Truth!  Keep all rules in one place
    // We are engineering for ourselves in the future or OTHER PEOPLE - not just us right now;

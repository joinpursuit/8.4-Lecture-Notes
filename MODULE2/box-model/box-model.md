## Guiding questions

- What is the box model?
    - The design and layout principle in CSS that every element has a box around it, and understanding these boxes is key to being able to create layouts with CSS, or to align items with other items. 

- What parts make up the box model?
    - content (inner width and height)
    - padding
    - border
    - margin
    - display
    - position

- What are some of the different values for the `display` property?
    - block
    - inline
    - inline-block
    - none
    - flex
    - grid


- What are the default `display` values for the following common elements?

  - `p` - block -> cannot put elements horizontally without changing this display property
  - `img` - inline ->  for elements that go inside a text tag to keep it in line with the parent element. Height and width properties have no effect on this display type.
  - `button` - like inline however height and width properties are applicable here

- What is the effect of the CSS declaration `margin: 0 auto;`?
    - the top/bottom margin is 0, and the left/right margin is auto, Where auto means that the left and right margin are automatically set by the browser based on the container, to make element centered.

- Using technical language, describe how the following CSS would affect an HTML page. Feel free to look up the properties and values.

  ```html
  <section>
    <article>
      <p>Very informative. So article</p>
      <p><a>here</a> click</p>
    </article>

    <article>
      <img src="./doge.png" alt="An image of the 'Doge' meme" />
      <p>What ever happened to <span>Doge</span>?</p>
    </article>
  </section>
  ```

  ```css
  section {
    width: 80%;
    margin: 16px auto;
  }
  ```

- Using the same HTML from above, describe how the following CSS would modify the HTML. Then, answer the questions that follow.

  ```css
  article {
    display: inline-block;
    width: 50%;
    padding: 10px;
    margin: 4px;
    border: 5px solid purple;
  }

  p span {
    color: peachpuff;
  }
  ```

  - Do the articles appear next to each other or does one appear below the other? Why?

  - What would the total width of one article be if the width of the `section` is 1000px?

  - How could you constrain the width of the articles to be exactly `500px`, regardless of margin or padding properties?

- By default does the anchor tag (i.e. `a`) have a `display` value of `inline`, `inline-block` or `block`? Describe how an anchor tag would look if the `display` value was set to any of the previously mentioned values.

- If you wanted to make the anchor tag appear as a big button, could you style it with CSS, or would you need to use a `button` tag?

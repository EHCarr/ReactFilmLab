# JS DOM Manipulation Labs

# LAB # 1 : About Me and The Book List - 30 Mins

## About Me

Every webpage needs an "About Me" section.

Start with this HTML and save it as "aboutme.html":

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>More DOM Manipulation</title>
  </head>

  <body>
    <h1>About Me</h1>

    <div class="profilePicture"></div>

    <ul>
      <li>Nickname: <span id="nickname"></span></li>
      <li>Favorite Animal: <span id="favorite"></span></li>
      <li>Hometown: <span id="hometown"></span></li>
    </ul>

    <div class="favoriteBooks"></div>
  </body>
</html>
```

- Create a JavaScript file, and link it up
- Using JavaScript:

  - Change the font-family of the page to `"Arial, sans-serif"`
  - Replace each of the `span` tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
  - Give each `li` the class of `"listitem"`
  - Change each `li`'s text color to `"rebeccapurple"`
  - Create a new `img` element and set its `src` attribute to a picture of you. Put that new `img` element in the div with the class of `"profilePicture"`

## The Book List

Keep track of which books you read and which books you want to read!

Copy this data into your JavaScript file:

```js
var books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    alreadyRead: true,
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    alreadyRead: true,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    alreadyRead: true,
  },
];
```

- In your JavaScript file:
  - Create an `h1` with the text of "My Book List", and put it inside `div.favoriteBooks`
  - Iterate through the array of books. For each book, create a `p` tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page

### Bonus

- Turn the books into an unordered list filled with list items
- Add a property to each book with a URL of the book cover image. For each book, add an `img` element for each book on the page
- Change the style of the book depending on whether you have read it or not (e.g. make the text color red if you have read it)

<hr>
<br>
<br>


# LAB 2 - Creating Random Images - 30 Mins

Start of with the following HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div>
      <label>
        Width:
        <input type="number" class="width" />
      </label>
      <label>
        Height:
        <input type="number" class="height" />
      </label>
      <button id="randomize">Get random image!</button>
    </div>

    <div class="image"></div>
  </body>
</html>
```

- Create and link a JavaScript file
- When someone clicks `button#randomize`:
  - Create an `img` element
  - Create a URL based on [this documentation](https://source.unsplash.com/)
    - e.g. It might look something like this: `https://source.unsplash.com/1600x900`

## Bonuses

### Bonus 1

Allow the user to select the width and the height!

### Bonus 2

Allow the user to select where their image comes from using a dropdown

Suggested options:

- [Picsum](https://picsum.photos/)
- [Fill Murray](http://www.fillmurray.com/)
- [Place Cage](http://www.placecage.com/)
- [Lorem Flickr](https://loremflickr.com/)

<hr>
<br>
<br>


# LAB 3 - Animation - 50 Mins

## The Cat Walk

Who needs Milan when you have JavaScript?

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <img src="http://www.anniemation.com/clip_art/images/cat-walk.gif" />
  </body>
</html>
```

- Create a new JavaScript file and link to it with a script tag at the bottom
- Create a variable to store a reference to the img
- Change the style of the `img`
  - Set `position` to `absolute`
  - Set `left` to `0px`
- Create a function called `catWalk()` that moves the cat 10 pixels to the right of where it started, by changing the `left` style property
- Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

## Bonuses

### Bonus 1

When the cat reaches the right-hand side of the screen, move the cat back to the left-hand side ("0px"). So that cat should keep walking from left to right across the screen, forever and ever.

### Bonus 2

When the cat reaches the right-hand of the screen, make them move backwards towards the left instead (try flipping the cat around with CSS, too). The cat should keep walking back and forth forever and ever.

### Bonus 3

When the cat reaches the middle of the screen, replace the img with an image of a cat dancing. Keep it dancing for 10 seconds, and then replace the img with the original image and have it continue to walk.

### Bonus 4

Go crazy! Do whatever you want. Add music, more images, animations - whatever you'd like!

## Some Inspiration

- [Example 1](http://reenarajani.github.io/myGitPages/CatProgram/)
- [Example 2](http://harrisdm.github.io/Dancing_Cat/)
- [Example 3](http://rodneyss.github.io/walkcat/)
- [Example 4](http://charliegerard.github.io/dancingcats/)

<hr>
<br>
<br>


# LAB 4 - Optional LAB: Calculator - (30 Mins)

Start with this webpage, which has inputs and buttons for things to calculate:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Calculator</title>
  </head>

  <body>
    <div class="half">
      <label>
        Half this number:
        <input type="number" id="half-input" size="2" />
      </label>
      <button id="half-button">Calculate</button>
    </div>

    <div class="percent">
      <label>
        Fraction:
        <input type="number" id="percent1-input" size="2" />
      </label>
      <label>
        Whole:
        <input type="number" id="percent2-input" size="2" />
      </label>
      <button id="percent-button">Calculate</button>
    </div>

    <div class="area">
      <label>
        Calculate area of circle with radius:
        <input type="number" id="area-input" size="2" />
      </label>
      <button id="area-button">Calculate</button>
    </div>

    <div id="solution"></div>
  </body>
</html>
```

- Create a new JavaScript file, link it by adding a script tag at the bottom of the body tag
- For each operation, create an event listener for the button, and whenever it is clicked:

  - Find the value of the appropriate inputs
  - Show the result of the calculation in `div#solution`

- Bonus: respond to key presses so that the user doesn't have to click the button.

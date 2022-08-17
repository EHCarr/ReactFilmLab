[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Objects

Exercising the JavaScript Reference Types.

## Objectives

By the end of this, developers should be able to:

- Store, access, and update data values in objects
- Iterate through an object and operate on its elements
- Define and use methods
- Use `this` keyword to reference object
- Model real world entities with JavaScript


## Introduction

Let’s create a person in JavaScript.  We could use a variable and a string...

```js
const person = "John Doe"
```

To print our person’s name we could do...

```js
const person = "John Doe"
console.log(person)
```

Well a person has more than a name so let’s add an age and eye color.  

```js
const person = "John Doe"
const age = 50
const eyeColor = "Blue"
```

That data isn't grouped very well, they are all independent variables.  We could use an array...

```js
const person = ["John Doe", 50, "Blue"]
```

To print our person’s name, age, and eye color we could do...

```js
const person = ["John Doe", 150, "Blue"]

console.log(person[0]) // John Doe

console.log(person[1]) // 150

console.log(person[2]) // Blue
```

Ok, now lets print a sentence with our person in it like we might do on a webpage, maybe a profile.

```js
const person = ["John Doe", 150, "Blue"]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old.")
```

There are other qualities we might want to add to describe our person like maybe species, number of legs, and number of arms.  We could do…

```js
const person = ["John Doe", 150, "Blue", "Human", 2, 2]
 ```

Ok, now lets print a sentence with our person in it like we might do on a webpage again.

```js
const person = ["John Doe", 150, "Blue", "Human", 2, 2]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old. A " + person[3] + "with " + person[4) + "legs and " + person[5] + " arms.")
```

Yikes, that doesn’t look very readable.  It seems like we should use an object to organize our data better.  Let’s create a person object and we might as well also separate the first and last name too.

```js
const person = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue"
};
```

What if we want two different people.  We could do

```js
const person2 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Jane",
     lastName: "Doe",
     age: 120,
     eyeColor: "Green"
};

```

Now when we write our sentence again, it is much easier to read!

```js
const person = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue"
};

console.log("The great" + person.firstName + " " + person.lastName + ", with striking " + person.eyeColor + " eyes, was a spry " + person.age + " years old. A " + person.species + "with " + person.legs + "legs and " + person.arms + " arms.")
```

## Objects

```js
const dictionary = {}
```

### Demo: Objects

In JavaScript to represent a dictionary of data with key/value pairs, we can use
an [Object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics).

```js
// Create an empty object literal
const emptyDictionary = {}

// Create an object literal with values
const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1999
}

// Read value from an Object, use key
car['make'] // 'Ford'
car.make // 'Ford'

// Update value in an Object, use key
car.make = 'Toyota'
car // { make: 'Toyota', model: 'Mustang', year: 1999 }

// Add value to an Object, use key
car.topSpeed = 120
car // { make: 'Toyota', model: 'Mustang', year: 1999, topSpeed: 120 }
```

### Code Along: Iterating through an Object

```js
const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1999
}

// Individually print message for each property of object
console.log(car.make)
console.log(car.model)
console.log(car['year'])

// Loop through object using key
for (const key in car){
  console.log(car[key])
}
```


### Lab1 - 20 mins: 
- Create a new file lab.js in your files of the lecture.
- Copy and paste the object below into your code.
- Access the values of object properties and console.log the following:

- 1. Product's image id
- 2. Tweet's user friends count
- 3. Display the display URL of user entities of tweets.
- 4. Tweet's media sizes

```js
var product = {
    "product": {
      "id": 632910392,
      "title": "New product title",
      "body_html": "<p>It's the small iPod with one very big idea: Video. Now the world's most popular music player, available in 4GB and 8GB models, lets you enjoy TV shows, movies, video podcasts, and more. The larger, brighter display means amazing picture quality. In six eye-catching colors, iPod nano is stunning all around. And with models starting at just $149, little speaks volumes.</p>",
      "vendor": "Apple",
      "product_type": "Cult Products",
      "created_at": "2019-05-01T15:21:27-04:00",
      "handle": "ipod-nano",
      "updated_at": "2019-05-01T15:22:04-04:00",
      "published_at": "2007-12-31T19:00:00-05:00",
      "template_suffix": null,
      "tags": "Emotive, Flash Memory, MP3, Music",
      "published_scope": "web",
      "admin_graphql_api_id": "gid://shopify/Product/632910392",
      "variant": {
          "id": 808950810,
          "product_id": 632910392,
          "title": "Pink",
          "price": "199.00",
          "sku": "IPOD2008PINK",
          "position": 1,
          "inventory_policy": "continue",
          "compare_at_price": null,
          "fulfillment_service": "manual",
          "inventory_management": "shopify",
          "option1": "Pink",
          "option2": null,
          "option3": null,
          "created_at": "2019-05-01T15:21:27-04:00",
          "updated_at": "2019-05-01T15:21:27-04:00",
          "taxable": true,
          "barcode": "1234_pink",
          "grams": 567,
          "image_id": 562641783,
          "weight": 1.25,
          "weight_unit": "lb",
          "inventory_item_id": 808950810,
          "inventory_quantity": 10,
          "old_inventory_quantity": 10,
          "requires_shipping": true,
          "admin_graphql_api_id": "gid://shopify/ProductVariant/808950810",
          "presentment_price": {
              "price": {
                "currency_code": "USD",
                "amount": "199.00"
              },
              "compare_at_price": null
          }
      },
      "option": {
          "id": 594680422,
          "product_id": 632910392,
          "name": "Color",
          "position": 1
      },
      "image": {
        "id": 850703190,
        "product_id": 632910392,
        "position": 1,
        "created_at": "2019-05-01T15:21:27-04:00",
        "updated_at": "2019-05-01T15:21:27-04:00",
        "alt": null,
        "width": 123,
        "height": 456,
        "src": "https://cdn.shopify.com/s/files/1/0006/9093/3842/products/ipod-nano.png?v=1556738487",
        "admin_graphql_api_id": "gid://shopify/ProductImage/850703190"
      }
    }
  };
var tweet = {
        "created_at":"Mon Apr 30 23:08:44 +0000 2018",
        "id":991092016195911700,
        "id_str":"991092016195911680",
        "text":"Eli with the drip https://t.co/FlNgliReGv",
        "truncated":false,
        "entity":{
            "media": {
                "id":991091953990189000,
                "id_str":"991091953990189057",
                "index":18,
                "media_url":"http://pbs.twimg.com/ext_tw_video_thumb/991091953990189057/pu/img/h2QqkBL3Wbayj-i4.jpg",
                "media_url_https":"https://pbs.twimg.com/ext_tw_video_thumb/991091953990189057/pu/img/h2QqkBL3Wbayj-i4.jpg",
                "url":"https://t.co/FlNgliReGv",
                "display_url":"pic.twitter.com/FlNgliReGv",
                "expanded_url":"https://twitter.com/kanyewest/status/991092016195911680/video/1",
                "type":"photo",
                "sizes":{
                    "thumb":{
                        "w":150,
                        "h":150,
                        "resize":"crop"
                    },
                    "small":{
                        "w":383,
                        "h":680,
                        "resize":"fit"
                    },
                    "large":{
                        "w":720,
                        "h":1280,
                        "resize":"fit"
                    },
                    "medium":{
                        "w":675,
                        "h":1200,
                        "resize":"fit"
                    }
                }
            }
    },
    "extended_entities":{
        "media":  {
            "id":991091953990189000,
            "id_str":"991091953990189057",
            "index":18,
            "media_url":"http://pbs.twimg.com/ext_tw_video_thumb/991091953990189057/pu/img/h2QqkBL3Wbayj-i4.jpg",
            "media_url_https":"https://pbs.twimg.com/ext_tw_video_thumb/991091953990189057/pu/img/h2QqkBL3Wbayj-i4.jpg",
            "url":"https://t.co/FlNgliReGv",
            "display_url":"pic.twitter.com/FlNgliReGv",
            "expanded_url":"https://twitter.com/kanyewest/status/991092016195911680/video/1",
            "type":"video",
            "sizes":{
                "thumb":{
                    "w":150,
                    "h":150,
                    "resize":"crop"
                },
                "small":{
                    "w":383,
                    "h":680,
                    "resize":"fit"
                },
                "large":{
                    "w":720,
                    "h":1280,
                    "resize":"fit"
                },
                "medium":{
                    "w":675,
                    "h":1200,
                    "resize":"fit"
                }
            },
            "video_info":{
                "aspect_ratio":9,
                "duration_millis":8598,
                "variant":  {
                        "bitrate":2176000,
                        "content_type":"video/mp4",
                        "url":"https://video.twimg.com/ext_tw_video/991091953990189057/pu/vid/720x1280/TweYmUcpyHh74BqM.mp4?tag=3"
                }
            },
            "additional_media_info":{
                "monetizable":false
            }
        }
    },
    "source":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
    "in_reply_to_status_id":null,
    "in_reply_to_status_id_str":null,
    "in_reply_to_user_id":null,
    "in_reply_to_user_id_str":null,
    "in_reply_to_screen_name":null,
    "user":{
        "id":169686021,
        "id_str":"169686021",
        "name":"KANYE WEST",
        "screen_name":"kanyewest",
        "location":"",
        "description":"",
        "url":"http://t.co/ZdywsugSWD",
        "entities":{
            "url":{
                "url":"http://t.co/ZdywsugSWD",
                "expanded_url":"http://KANYEWEST.COM",
                "display_url":"KANYEWEST.COM",
                "index":0
            },
            "description":{
            }
        },
        "protected":false,
        "followers_count":28134561,
        "friends_count":3,
        "listed_count":49854,
        "created_at":"Thu Jul 22 23:00:05 +0000 2010",
        "favourites_count":2,
        "utc_offset":-36000,
        "time_zone":"Hawaii",
        "geo_enabled":false,
        "verified":true,
        "statuses_count":330,
        "lang":"en",
        "contributors_enabled":false,
        "is_translator":false,
        "is_translation_enabled":false,
        "profile_background_color":"C0DEED",
        "profile_background_image_url":"http://pbs.twimg.com/profile_background_images/390200267/Screen_Shot_2011-12-27_at_11.53.35_PM.png",
        "profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/390200267/Screen_Shot_2011-12-27_at_11.53.35_PM.png",
        "profile_background_tile":true,
        "profile_image_url":"http://pbs.twimg.com/profile_images/585565077207678977/N_eNSBXi_normal.jpg",
        "profile_image_url_https":"https://pbs.twimg.com/profile_images/585565077207678977/N_eNSBXi_normal.jpg",
        "profile_banner_url":"https://pbs.twimg.com/profile_banners/169686021/1428444619",
        "profile_link_color":"0084B4",
        "profile_sidebar_border_color":"C0DEED",
        "profile_sidebar_fill_color":"DDEEF6",
        "profile_text_color":"333333",
        "profile_use_background_image":true,
        "has_extended_profile":false,
        "default_profile":false,
        "default_profile_image":false,
        "following":true,
        "follow_request_sent":false,
        "notifications":false,
        "translator_type":"none"
    },
    "geo":null,
    "coordinates":null,
    "place":null,
    "contributors":null,
    "is_quote_status":false,
    "retweet_count":956,
    "favorite_count":9051,
    "favorited":false,
    "retweeted":false,
    "possibly_sensitive":false,
    "lang":"en"
};

```


### Lab2: The Movie Database - 20 mins

- It's like IMDB, but much much smaller!

- Create an array of objects to store the following information about your two favorite movies: title (a string), duration (a number), and stars (an array of strings).

- Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


### Lab3: The Reading List - 30 mins

- Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


## Object Methods

Keys of an object can also point to functions.  We call those functions, methods!

```js
const car = {
  make: 'Ford',
  model: 'Mustang',
  year: 1999,
  drive: function(distance) {
    return "Vroooom! We drove " + distance + " miles";
  }
}

car.make // 'Ford'
car.drive(20) // 'Vroooom! We drove 20 miles"
```

## Abstraction and Modeling

The world is full of complex systems. Take weather, for example.

![Weather Forecast](https://upload.wikimedia.org/wikipedia/commons/c/c0/NOAA_Wavewatch_III_Sample_Forecast.gif)

There's a ton of information we could record about the weather. Yet, when you
read the weather report in the morning, all of that information is distilled
down to a handful of numbers: 34 degrees fahrenheit, 20% chance of
precipitation, 4 degree windchill...

Why do you think that might be?

When you take something complex and then hide that complexity under a more
simple interface, you are using a technique called **abstraction**.

From [Wikipedia](https://en.wikipedia.org/wiki/Abstraction_(software_engineering)):
> In software engineering and computer science,
> abstraction is a technique for arranging complexity of computer systems. It
> works by establishing a level of complexity on which a person interacts with the
> system, suppressing the more complex details below the current level.

<!-- Think-Pair-Share -->

<details>
  <summary>How might abstraction be relevant as software developers? Take a
  minute and discuss this with your team.</summary>

  We can use abstraction to represent real-world entities when we write software.
  This allows us to hide complex systems underneath easy to grasp objects and
  models.
</details>
<br />

Think about the weather report that you are given by the weather person. They give
you the temperature in your city, if it's going to rain or snow, level of
precipitation, and the wind speed. This model of the weather system hides the
complexity that is behind these measurements.

A **model** is a simplified or partial representation of the real thing. Models
are based on a real entity, and are used to represent the real entity in a
system. Modeling is great for planning, designing, discussing, and understanding
a system.

### Discussion

Let's take a look at a specific example: a Laptop. Suppose that we need to
represent a laptop in an application. What attributes are most important to
include in our model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might pick attributes like sale price, brand, amount of RAM, disc
space, and processor speed. However, if the application is for factories, e.g.
tracking laptops as they're being manufactured, things like sale price are
irrelevant; instead, we might want our model to include the production line
where the laptop was assembled, or the laptop's current stage of completion.

In order to decide what attributes we need to model, we use user stories, which
we'll talk about in more depth as we introduce the first project.


## Demo: Modeling in JavaScript

Let's think about how might we construct a model in JavaScript as part of an
application. Models can be as simple as a single number -- for instance, a day's
weather can be modeled as 'temperature' or  'inches of snow expected'. Other
things, such as lists of similar items, are typically modeled by arrays; since
the items are all similar, an index is sufficient to distinguish them.

```js
const crayons = ['blue', 'green', 'orange', 'yellow']
```

- Note that we're also abstracting away each crayon as a String - at the
  moment, we're only interested in their colors.

Most of the time, though, what we want to model has **multiple attributes**,
often of different types: for instance, a car might have a make (String), model
(String), a release year (Number), and a mileage (Number). Because these
attributes are different, we also probably want to refer to them using
descriptive names. For this kind of use case, an Object is the best fit, since
its _properties_ are key-value pairs with String keys. Objects can also have
properties that hold functions, called _methods_, and these can stand in neatly
for any behaviors that we might want our model to have.

Suppose we needed to model a single crayon in JavaScript. We might come up with
something like this:

```js
const crayon = {
  color: 'blue',
  lengthInCM: 8,
  getUsedUp: function () {
    crayon.lengthInCM -= 0.5
  }
}
```

As you can see, `crayon` has two ordinary traits, (which we call properties),
(`color` and `lengthInCM`); these map to attributes of the crayon that
(presumably) are relevant to our application. In addition, it also has a method
called `getUsedUp`, which corresponds with a behavior that real crayons exhibit:
getting shorter as they get used.

- Let's do a quick refresher on object dot notation:

  <details>
    <summary>What do we write if we want to access a crayon's `color`
    property?</summary>
    `crayon.color`
  </details>
  <br />
  <details>
    <summary>Similarly, if we want to access the _function stored inside_
    the <code>getUsedUp</code> property, what can we write? </summary>
    `crayon.getUsedUp`
  </details>
  <br />
  <details>
    <summary>Lastly, if we want to
    treat that function as a method and invoke it from the object, what can we write?</summary>
    `crayon.getUsedUp()`
  </details>
  <br />

Back to our car example. We have a method, `addMileage`, which adjusts the
`mileage` property of our `car` object.

```js
const car = {
  make: 'Toyota',
  model: '4Runner',
  releaseYear: 1992,
  mileage: 78062,
  addMileage: function () {
    car.mileage += 50
  }
}
```


## Object Constructor

Objects of the same type are created by calling the constructor function with the new keyword.


```js
var yaris = new Car("Toyota", "Yaris", "2000", "100");
```

## LABS
- Convert both the labs solution (which you have done with object literal) into JS object constructor.
- For more detalied instruction, read below:

### Lab4: The Movie Database - 20 mins

- It's like IMDB, but much much smaller!

-  Create an JS object constructor to store the following information about your favorite movies: title (a string), duration (a number), and stars (an array of strings).

- Create 2 different instances of the object constructor

- Print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


### Lab5: The Reading List - 30 mins

- Keep track of which books you read and which books you want to read!

- Create a JS object constructor, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

- Create 3 different instances of the object constructor

- For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

    
## Additional Resources

### Objects

- [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Objects JS Info](https://javascript.info/object)
- [MDN `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Understand JavaScript's `this` with Clarity](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
- [`this` in JavaScript](https://john-dugan.com/this-in-javascript/)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

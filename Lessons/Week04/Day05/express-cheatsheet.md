## My Interpretation of the Flow of Express

**Step 1) User makes a request (GET, POST, PUT, DELETE) from the front-end.**
        
 - **`Example 1:`**
    An example of a request could be I type in ```http://localhost:4000/skills```, which is a GET request to ```'/skills'```


 - **`Example 2:`**
    Say the user as a form with empty fields, fills in information in that form and hits submit. Let's say the action on the form is ```'/skills'```. The user has now made a POST request to ```'/skills'```.


**Step 2) Server tries to locate a route that not only matches that type of request, but the path itself.**


 - **`Example 1:`**
    So in our example, the server finds a router.get (get request) and the path (```'/skills'```) in our skillsRouter file.


 - **`Example 2:`**
    So in this example, the server finds a router.post (post request) and the path (```'/skills'```) in our skillsRouter file.


**Step 3) Server executes the callback function (which in this case is located in a controller file)**

 - **`Example 1:`**
    So in our example, the server locates the ```router.get('/skills', skillsCtrl.index)``` route-handler and executes the index function that is exported from the skillsCtrl file!
        
 - **`Example 2:`**
    In this example, the server locates the ```router.post('/skills', skillsCtrl.create)``` route-handler and executes the create function that is exported from the skillsCtrl file!


**Step 4) The callback function may grab data from our models file when executed. It could also delete data, update data or create new data depending on request type!**

 - **`Example 1:`**
    Since our example is doing a GET request to ```'/skills'```, my ```skillsCtrl.index``` is probably going to grab all my skills data from the skills database (skills array inside model file).

 - **`Example 2:`**
    Instead of grabbing the data from the skills database, I'm making a POST request so I'm adding data (maybe using push) to the database.

**Step 5) The callback function will send a response depending on the type of request.**

 - **`Example 1:`**
    Since I'm sending a get request, I'm probably going to render an html file (ejs template) to the user with the data passed down! I'd pass my skills data that I grabbed from the database by writing something like ```res.render('index', { skills })```

 - **`Example 2:`**
    This time, instead of rendering an html, I'd probably just redirect to the index page.
    I'd write something like ```res.redirect('/skills')``` to redirect me back to the index page.


### Summary of Flow:

User Request → server → routers  → controllers  → models  → controllers  → views (what user sees)



# How I Usually Build Express Apps

Step 1) Create a server file. Mount a single router. To mount, you need to require it and run an app.use command.

Step 2) Create a router file that matches the “require” path in server.js. Inside the router file, write a route handler with a path and callback function. The callback function must point to a specific function defined in a controller file somewhere. So you'll need to require a controller file.

Step 3) Create a controller file and export a function that matches the name you used in your router file.

Step 4) Inside the controller function be sure to send a response back like res.render. If you're using res.render you need to pass in a filename and maybe data depending on what you want.
- (**Do only once**) If you are passing data, add a model file that stores your data (or Schema if connected to MongoDB via Mongoose)
- (**Do only once**) Require the model into your controller file.

Step 5) Create the views file with the same name you passed inside the controller function. Make sure your code is working correctly.

Step 6) Repeat (Steps 1 to 5) for other app functionality.

# What to do when 

**You get 404 or Cannot GET**
   - You likely have a router issue. Did you create a route handler for the path you typed in? Does your path and route handler match?

**You get undefined**
   - You may have a controller-related issue. Were you able to fetch your data correctly? Console log your data to be sure!
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)


# Express CRUD - MongoDB

## Initial Setup

- In this lecture, we will be creating a blog app from scratch.
- Initialize your application

```
npm init
```
- Create server.js file
```
touch server.js
```
- Install dependencies
```
npm i express mongoose
```
- Your package.json should look like this:
```
"dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.12.3"
  }
```
- App should be able to listen to incomming HTTP requests
```
app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
```

## Database Connection

- Connect your express application with MongoDB
```
mongoose.connect("mongodb://localhost:27017/YOUR_DATABASE_NAME");
```

## Create Operation
- At this point, you should know that how to implement the structure for routes and controllers.
- Hint is provided to you for using API/Route to create a new resource.
```
exports.article_create_post = (req, res) => {
  let article = new Article(req.body);

  article
    .save()
    .then(() => {
      res.redirect("/article/index");
    })
    .catch((err) => {
      res.send("Error!!!!!");
    });
};

```


## Read Operation
- For read operation, first of all, select all the records and then render EJS file with the updated information.
```
   exports.article_index_get = (req, res) => {
    Article.find()
    .then(articles => {
        res.render("article/index", { articles: articles});
    })
    .catch(err => {
      console.log(err);
    });
  };
```

## Delete Operation
- API/ Route for deleting a resource

```
  exports.article_delete_get = (req, res) => {
    Article.findByIdAndDelete(req.query.id)
    .then(()=>{
        res.redirect("/article/index");
    })
    .catch(err => {
        console.log(err);
    })
};
```

## Update Operation
- For updating of a record, select that specific record by id and then update it using the API/Route.

```
exports.article_update_put = (req, res) => {
  console.log(req.body.id);
  Article.findByIdAndUpdate(req.body.id, req.body).then(() => {
    res.redirect("/article/index");
  });
};
```

<br>

# Lab/ Homework - Part 01 (Deliverable)

- Repeat all the steps that was shown to you during todays code along session with a different idea.
- Make a Recipe web application.
- Treat article as your recipe.
- Treat author as your ingredient (You can enter one ingredient for now).

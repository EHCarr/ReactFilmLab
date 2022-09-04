
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Authenticaton with Passport JS

## User Model
- Create a new user model in your models folder.

```
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    // Make fields for lastName, emailAddress and password
},
{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

## Auth Controller
- Create a new file auth.js in controller folder
```
exports.auth_signup_get =  (req, res) => {
  res.render("auth/signup");
}

exports.auth_signin_get =  (req, res) => {
  res.render("auth/signin");
}
```

## Auth Router
- Create a new file auth.js in routes folder
```
router.get("/auth/signup", authCntrl.auth_signup_get);
router.get("/auth/signin", authCntrl.auth_signin_get);

```

## Auth Views

- Create a new file signup.ejs in auth folder in views folder.

```
<h1>Create a new account</h1>

<form method="POST" action="/auth/signup">
<div>
    <label>First Name</label>
    <input name="firstName" type="text"/>
</div>

<div class="form-group">
    <label>Last Name</label>
    <input name="lastName" type="text"/>
    </div>

    <div class="form-group">
    <label>Email Address</label>
    <input name="emailAddress" type="email"/>
    </div>

    <div class="form-group">
    <label>Password</label>
    <input name="password" type="password"/>
    </div>


<br>
<div>
<button type="submit">Sign Up</button>
</div>
</form>
```

## Signup Post Route
```
exports.auth_signup_post = (req, res) => {
  let user = new User(req.body);

  user
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.send("ERROR!!!");
    });
};
```

## Adding Encryption with bcrypt
- bcrypt is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher and presented at USENIX in 1999.

```
let hash = bcrypt.hashSync(req.body.password, salt);
```

## Passport Local Strategy
- Passport strategy for authenticating with a username and password.
- This module lets you authenticate using a username and password in your Node.js applications. By plugging into Passport, local authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.

```
npm install passport-local
```

## Usage
## Configure Strategy
The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user.

```
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
```

## Serialize User 
```
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
```

## Deserialize User 
```
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
```

## Signin Post Route
```
exports.auth_signin_post =
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/signin",
  })
```


# Lab
- Add authentication and authorization to your Recipe web app (or the one you started with your own idea), as explained in todays lecture.
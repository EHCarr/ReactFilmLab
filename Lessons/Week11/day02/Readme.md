# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React.js Frontend Blog App

---

![react-logo](./images/react-white-logo.png)

---

- Run your backend application (Blog App - Node.js)
- Create a new react app with the command

```
npx create-react-app blogapp-fe
```

## Read an Author
- You need to update your backend application to send the data in json format instead of sending the plain text or rendering an HTML page.

```
res.json({authors: authors}) 
```

- In your frontend application, you first need to display all the authors from the blogapp. Here is the code snippet that will help you out for fetching the authors list from database.

```
loadAuthorList = () => {
  Axios.get("http://localhost:4000/author/index")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
```

- You will be needing to loop over the authors list in your AuthorList component. Take this code and it will give you the iterations of the list with making a new list.

```
this.state.authors.map((author, index) =>
<div  key={index}>
<Author/>
</div>)
```

Make a new Author component to display author information.

```
<td>{this.props.name}</td> 
<td>{this.props.emailAddress}</td> 
```

- You can create a table sturcture to display the data in a tabular form.
```
return <div>
<h1>Authors List</h1>
<div>
      <table>
      <tbody>
          <tr>
              <th>Name</th>
              <th>Email Address</th>
          </tr>

      {allAuthors}
      </tbody>
      </table>
  </div>
</div>;
```
<hr><br>

## Create an Author

- Create a new component AuthorCreateForm.js
- Create a form for inputs
- Handle inputs

```
handleChange= (event) =>{
  const attribute = event.target.name
  const Value = event.target.value

  const author = {...<state_to_copy>}
  author[attribute] = Value
  // Assign to your state
}
```

- Call an API to create the new author in the database.

<hr><br>

## Edit an Author

- Create a new component AuthorEditForm.js
- Create a form for inputs
- Handle inputs

```
handleChange= (event) =>{
  const attribute = event.target.name
  const Value = event.target.value

  const author = {...<state_to_copy>}
  author[attribute] = Value
  // Assign to your state
}
```

- Call an API to first load the author data.
- Display author data in the form.
- Call update API to update the author information in the database.

<hr><br>

## Delete an Author

- Call the delete API
- Make sure you are using delete HTTP method, if backend is accepting that method.

```
  Axios.delete(`author/delete?id=${id}`)
      .then(response =>{
          this.loadAuthorList();
      })
      .catch(error =>{
          console.log("Error Deleting Author!")
          console.log(error)
      })
```

- After delete, display updated authors list on the webpage.

<hr><br>

## You Do -Practice
- Display articles information from each author object.
- Your primary focus should be only to display the articles, leave styles for later.

## Bonus Part
- Once you are done with displaying articles. apply styles.


## LAB (Deliverable)
- Separate your frontend by creating a new React Application for your Recipe web app (or the one you have completed with your own idea as a deliverable in unit 2), as explained in todays lecture.



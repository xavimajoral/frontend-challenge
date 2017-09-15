# Front-end Test Spec

## User Story
As a user, I would like to find relevant information about movies. Therefore, I expect a form, that helps me to search for a movie and provides relevant information in a result list.

Sometimes I search for a movie, but I do not know the correct name and only remember some parts of the title or the author etc.


## Requirements
- You use [this open and public movie API](https://sbot-fe-test.herokuapp.com/)
- You decide which information is shown in the result list
- There should be a page showing all the details for a specific movie (should be shown when the user clicks on a movie in the list)
- You **have to use react** and can use any other library of your choice that best fits the needs for these requirements
- You decide about the look and appearance
- You hand over a component (dependency) diagram

*(Optional: users want to be excited; which features, that go beyond the original scope of the challenge, can you imagine?
If possible, pick 1 or 2 of them and implement it as well)*

## Just more Techinal requirements
Our api provides an endpoint to list the movies by query:

**GET https://sbot-fe-test.herokuapp.com/api/v1/movies?query=whatever**

Making a call to this endpoint brings a response with a **listening_token** in the body.
You should use this token to listen on a specific **socket.io channel**, like:

```javascript
socket.on(`movies.${listening_token}`, (data) => {
  //...
});
```


## And how?
- Fork the project
- Implement your solution
- Open a Pull-Request to our Repository

*Any question, please email us: leonardo.gomesdasilva@finleap.com*

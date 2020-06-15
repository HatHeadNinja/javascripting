/*
 * Programming Quiz: Facebook Friends (7-5)
 */

const newLocal = "You've got mail!";
/*
 * QUIZ REQUIREMENTS
 x - Your code should have an object `facebookProfile`
 x - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 x - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method -----> postMessage(); addFriend();
// - addition at a specific index is done using splice() method 
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method ----> deleteMessage();removeFriend;

// your code goes here

let facebookProfile = {
  //properties
  name:'Doug',
  friends: 10,
  messages: ["Message 1", "Message 2", "Message 3", "Message 4"],

  //methods
  //addFriend
  addFriend: function beFriend(){
    facebookProfile.friends = facebookProfile.friends + 1;
  },
  //removeFriend
  removeFriend: function unFriend(){
    //check there's a value
    if(facebookProfile.friends>0){
      facebookProfile.friends = facebookProfile.friends - 1;
    }
  },
  //postMessage
  //- add to the end of array
  postMessage: function newPost(message){
    facebookProfile.messages.push(message);
  },

  //deleteMessage
  //- find the message in the array
  //- slice it out
  deleteMessage: function deletePost(i){
    facebookProfile.messages.splice(i, 1);
  }
}

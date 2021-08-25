const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost';
const client = new MongoClient(url);

// Database Name
const dbName = 'characters';
const db = client.db(dbName);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
 



  db.createCollection("looneytunes");
  db.createCollection("starwars");
  db.createCollection("simpsons");
  db.createCollection("looneytunez");


  const looneytunes = db.collection('looneytunes');
  const starwars = db.collection("starwars");
  const simpsons = db.collection("simpsons")
  
  
  try {
   await  starwars.insertMany([
        {"name":"Luke Skywalker","role":"Jedi","best_character":false,"first_appearance":"Star Wars:A New Hope"},
        {"name":"Darth Vader","role":"Sith Lord","best_character":false,"first_appearance":"Star Wars:A New Hope"},
        {"name":"Jean Luke Picard","role":"Captain","best_character":false,"first_appearance":""},
        {"name":"Han Solo","role":"Smuggler","best_character":false, "first_appearance":"Star Wars:A New Hope"},
        {"name":"C-3PO","role":"","best_character":true,"first_appearance":"Star Wars:A New Hope"},
        {"name":"Spock","role":"Lieutenant","best_character":false,"first_appearance":""},
        {"name":"Yoda","role":"Jedi Master","best_character":false,"first_appearance":"Star Wars: The Empire Strikes Back"},
        {"name":"Boba Fett","role":"Bounty Hunter","best_character":false,"first_appearance":"The Star Wars Holiday Special"},
        {"name":"Luke Skywalker","role":"Jedi","best_character":false}])
        
        
    await simpsons.insertMany([
        {"first_name":"Homer","last_name":"Simson","height_cm":177},
        {"first_name":"Bart","last_name":"Simson","height_cm":"4ft"},
        {"first_name":"Marge","last_name":"Simson","height_cm":259},
        {"first_name":"Peter","last_name":"Griffin","height_cm":182},
        {"first_name":"Lisa","last_name":"Simson","height_cm":137},
        {"first_name":"Maggie","last_name":"Simson","height_cm":74}])
        
        
    await looneytunes.insertMany([
        {"name":"Bugs Bunny","quote":"What's up doc?"},
        {"name":"Porky Pig", "quote":"That's all, folks!"},
        {"name":"Elmer Fudd","quote":"Sssshh… Be vewwy quiet"},
        {"name":"Donald Duck", "quote":"You're despicable."},
        {"name":"Yosemite Sam", "quote":"YOU RACKIN' FRACKIN' VARMINT!"},
        {"name":"Tweety", "quote":"I tawt I taw a Puddy tat"},
        {"name":"Sylvester","quote":"Thufferin' Thuccotash!"}
        ])
   
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`); 
    }
    throw error; 
  }
  return 'done.';
}

db.MongoClient
main()
  .then()
  .catch(console.error)
  .finally(() => client.close());
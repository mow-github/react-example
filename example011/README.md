```

Firebase v3 methods - syntax

firebase.database().ref("todo/id")  // connect to the DB and "table" todo/id
firebase.database()
    .ref("todo")
    .push("do this")                // connect to the DB and "table" todo and add "do this"-string

.push()                             // Post
.set()                              // Update
.remove()                           // Delete

.on()                               // realtime GET
.once()                             // GET once (trad.)


NOTE: .on() and .once() uses a callback with a "snapshot" arg

.on("value", function(snapshot){
    console.log( snapshot.val() )
})

.once("value")
.then( (snapshot) => {
    console.log( snapshot.val() )
})


```
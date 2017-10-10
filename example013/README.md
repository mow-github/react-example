

#### Firebase v3 part 3 - Auth



###### Firebase v3 methods - syntax ( part 3 )

```



```









###### Firebase v3 methods - syntax ( part 2 )

```

firebase.database()
    .ref("todos")
    .on('value', (snapshot) => {

    // listen on everything
    // snapshot.val()
})


//---------------------------------

// 3x listeners that replaces .on('value',...
// child_added, child_removed, child_changed ( extra work BUT less overhead / faster )

.on('child_added', (snapshot) => {
    // listen when obj. is ADDED to the DB
})

.on('child_removed', (snapshot) => {
    // listen when obj. is REMOVED from the DB
})

.on('child_changed', (snapshot) => {
    // listen when obj. is UPDATED in the DB
})

//---------------------------------

//--------------------------------- Sort and filter --------------

// with JS built in methods:

.map()
.filter()
.reduce()
.sort()

// with Firebase ( Note: firebase sorting is not perfect, use JS )

firebase.database()
    .ref("todos")

    .orderByChild("date")
    .limitToFirst(5)            //
    .startAt("2016-01-01")      //
    .endAt("2016-01-01")        //
    .equalTo("2016-01-01")      //

        .on('value', (snapshot) => {
            console.log(snapshot.val())
})




```












###### Firebase v3 methods - syntax ( part 1 )

```

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
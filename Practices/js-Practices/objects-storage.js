//nested objects
let media={
    username:"Panda",
    post:17,
    count:{
        views:1000,
        likes:100,
    }
}
console.log(media.count);
//JSON
//changing javascript to JSON
console.log(JSON.stringify(media));
//changing JSON to javascript

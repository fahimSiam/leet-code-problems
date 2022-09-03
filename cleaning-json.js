/* (function() {
    var a = b = 5;
  })();
  
  console.log(b);
  {
    book(
      ISBN: "0743273567"
      ) {
      title
      author
      published
      publisher
      pages
      genres
      reviews(limit: 1) {
        author
        date
        content
      }
    }
  } */
  const https = require('https');

function clean(object) {

  Object.keys(object).forEach(key=>{
      if(object[key]==="N/A" || object[key] === "" || object[key] === "-"){
        delete object[key];
      }
      else if(Array.isArray(object[key])) {
        let n = object[key].length;
        let arr = [];
        for (let i = 0; i < n; i++) {
          if (object[key][i] === "" || object[key][i] === "-" || object[key][i] === "N/A")
            continue;
          let p = [object[key][i]];
          
          if (typeof(p[0]) === 'object') {
            p[0] = clean(p[0]);
          }
          
          arr = arr.concat(p);
        }
        object[key] = arr;
      }
      else if (typeof(object[key]) === 'object') {
        object[key] = clean(object[key]);
      }
  })

  return object;
}

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  resp.on("data",(res)=>{
    let object=(JSON.parse(res.toString()));
    object = clean(object);
    console.log(JSON.stringify(object))
  })
});

console.log("practice");

// Write a function called 'average' that accepts a list of
// numbers and returns the average. The average
// of an empty list should be considered zero.

function average() {
  let average = (arr) => {
    if (arr.length === 0) {
      return undefined;
    }
    let sum = 0
    for (let i = 0; arr.length; i++) {
      sum += arr[i]
    }
    avg = sum / arr.length
    return avg
  }
  console.log(average([1, 2, 3]))
  console.log(average([]))

// Write a function called `biggest` that returns the
// biggest number in an array. If there is no biggest
// number the function should return undefined.
function biggest() {
  return undefined;


  function biggest(arr) {

    if (arr.length === 0) {
      return undefined;
    } else {

      let biggest = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > biggest) {
          biggest = arr[i];
        }
      }
      return biggest;
    }

  }
  console.log(biggest([12, 3, 4, 567, 8]))
  console.log(biggest([]))


// Write a function called `urlParams` that accepts a
// string representing a URL and returns an object with
// key, value pairs for each parameter in the url string.
// If there are no URL parameters your function should
// return an empty object.
//
// Use the string methods split() to target parts of the
// string to turn into an array
// 
// URLs are strings like this:
//
// http://google.com/
// {}
// http://google.com/?q=cats
// {q: 'cats'}
// http://google.com/?q=cats&type=images
// {q: 'cats', type: 'images'}
// http://google.com/?q=cats&type=images&format=gif
// {q: 'cats', type: 'images', format: 'gif'}

function urlParams(query) {
  return undefined;
  let url = query.split('?');
  if(url.length ===1){
    return {}
  }
  let params = url[1].split('&')
  let obj = {}
  for(let i = 0; i<params.length; i++){
    let keyVal = params[i].split('=')
    obj[keyVal[0]]=keyVal[1]
  }
  return obj;
}

console.log(urlParams("http://google.com/"))
console.log(urlParams("http://google.com/?q=cats"))
console.log(urlParams("http://google.com/?q=cats&type=images"))
console.log(urlParams("http://google.com/?q=cats&type=images&format=gif"))


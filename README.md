# phai.js
Simple http client based on fetch



## How to use:

__GET__
```js
  phai.get('/api/get', function (result) {
      console.log(result);
      //do something with result
  });
```

__POST__
  ```js
  phai.post('/api/post', data, function (result) { 
      console.log(result);
      //do something with result
  });
  ```
  
  ____
  
  You can set loader object with start() and stop() methods, which start loading when get or post request is sending
  

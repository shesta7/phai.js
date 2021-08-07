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
  ```js
  phai.get('/api/get', (r) => myResultHandler(r) );
  ```

__POST__
  ```js
  phai.post('/api/post', data, function (result) { 
      console.log(result);
      //do something with result
  });
  ```
  
  ```js
  phai.post('/api/post', data, (r) => myResultHandler(r));
  ```
  ____
  ### Error handling
  
  When response contains isSuccess === false you can handle error by passing errorHandler callback function:
  ```js
  phai.get('/api/get', (r) => myResultHandler(r), (e) => myErrorHandler(e));
  ```
  ____
  
  You can set loader object with start() and stop() methods, which start loading when get or post request is sending
  
```js
  phai.loader = mySuperLoader
```


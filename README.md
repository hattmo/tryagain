# TRYAGAIN

## About

Retrys code that can throw an exception N number of times.

## How to

```javascript
import tryagain from "../src/index";

tryagain(5, (attempt) => {
  //will run 5 times before actually throwing
  potentialThrowingFunction("Bad Input");
  if(attempt>2){ //contains the current attempt number
    trysomethingelse("Good Input");
  }
},(error, attempt)=>{
  console.log(`Attempt number ${attempt} had the following error: ${error}`);
});
```

## Author

Designed and maintained by [Matthew Howard](https://www.linkedin.com/in/matthew-howard-4013ba87/).

Support me with a [donation](https://www.paypal.me/hattmo)!

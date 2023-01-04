const multiplyWithDelay = (a, b, waitMillis) => {
    return new Promise(resolve => setTimeout(() => resolve(a*b), waitMillis));
  }
  
  const a = 33;
  const b = 10;
  const waitMillis = 5000;
  
  const startTime = new Date();
  console.log("Calling the function");
  const multiplyPromise = multiplyWithDelay(a, b, waitMillis);
  
  multiplyPromise.then(result => {
    const endTime = new Date();
    console.log(`Multiplied with wait after ${endTime - startTime}ms. Result: ${a} * ${b} = ${result}`);
  });

/**
 * 
 * EXERCISE 1
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
  /* IMPLEMENT ME! */
  const promise1 = Promise.resolve(3);
  return promise1;
}

/**
 * 
 * EXERCISE 2
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
  /* IMPLEMENT ME! */
  const rejected = Promise.reject('Boo!');
  return rejected;
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    /* If itShouldResolve is true, call resolve */
    if (itShouldResolve) {
      resolve();
    } 
    else reject();
    /* If itShouldResolve is false, call reject */
  });
}

/**
 * 
 * EXERCISE 4
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
  /* Return a promise that resolves with the value after delayInMs */
  const delayed = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayInMs);
  });
  return delayed;
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};
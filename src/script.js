var users = [{
  id: '1',
  name: 'Alex'
}, {
  id: '2',
  name: 'John'
}];


function getUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {

      if (typeof id !== 'string') reject('id must be string');

      var matched = {};
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === id) {
          matched = users[i];
          break;
        }
      }
      resolve(matched);
    }, 2000);
  })
}


var p1 = getUserById('2'),
  p2 = getUserById('1');
Promise.all([p1, p2])
  .then((data) => {
    console.log(data);
    return getUserById(3);
  })
  .catch(err => {
    console.log(err);
  });


var sum = ((x, y = 10, z) => x + y + z);


console.log(sum(...[1, 2, 4]));
console.log(sum(...[1, , 4]));

console.log('use iterator to compute fibonacci numbers');

function fibonacci() {
  let _fibonacci = {
    [Symbol.iterator]() {
      let pre = 0,
        cur = 1;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return {
            done: false,
            value: cur
          }
        }
      }
    }
  }
  return _fibonacci;
}

let fibs = [];
var fib = fibonacci();
for (let n of fib) {
  if (n > 100) break;
  fibs.push(n);
}
console.log(fibs);


console.log('use iterator to compute prime numbers');
let prime = {
  [Symbol.iterator]() {
    let cur = 1;
    return {
      next() {
        for (let i = cur + 1; ; i++) {
          let isPrime = true;
          for (let j = 2; j < i; j++) {
            if (i % j === 0) {
              isPrime = false;
              break;
            }
          }
          if (isPrime) {
            cur = i;
            return {
              done: false,
              value: cur
            }
          }
        }

      }
    }
  }
};

let primes = [];
for (let n of prime) {
  if (n > 20) break;
  primes.push(n);
}
console.log(primes);

import {
  sum2, pi, product
}  from "./lib/math";
console.log("2π = " + sum2(pi, pi));
console.log(product(3, 4))

import * as foo from './lib/foo'
console.log('TEN_FOO=' + foo.TEN)

import * as bar from './lib/bar'
console.log(bar.TEN);

import {isTestable} from './baz';

@isTestable(true)
class MyClass {
  constructor(flag) {
    this.flag = flag;
  }

  static instance() {

    if(MyClass.isTestable) {
        // console.log('isTestable=true')
        return new MyClass(MyClass.isTestable)
    } else {
        //console.log('isTestable=false')
        return new MyClass(MyClass.isTestable)
    }
  }

}



console.log(MyClass.instance())
// 

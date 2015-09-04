require("babel/polyfill");

var users = [{
    id: '1',
    name: 'Alex'
}, {
    id: '2',
    name: 'John'
}];

function getUserById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {

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



var sum = (x, y = 10, z) => x + y + z


console.log(sum(...[1, 2, 4]))
console.log(sum(...[1, , 4]))

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

var fib = fibonacci();
for (let n of fib) {
    if (n > 100) break;
    console.log(n);
}

console.log('use iterator to compute prime numbers');
let prime = {
    [Symbol.iterator]() {
        let cur = 1;
        return {
            next() {
                for (let i = cur + 1;; i++) {
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
}

for (let n of prime) {
    if (n > 20) break;
    console.log(n);
}

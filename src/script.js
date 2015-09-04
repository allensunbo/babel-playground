var users = [{id:'1', name:'Alex'}, {id:'2', name:'John'}];
function getUserById(id) {
  return new Promise((resolve,reject)=>{
      setTimeout(function(){
        var matched={};
        for(var i=0;i<users.length;i++) {
          if(users[i].id===id) {
            matched =users[i];
            break;
          }
        }
        resolve(matched);
      }, 2000);
})
}

var p1 = getUserById('2'), p2= getUserById('1');
Promise.all([p1,p2])
  .then((data)=>console.log(data))
.catch(err=>{
  console.log(err);
})


function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}

// Stack overflow in most implementations today,
// but safe on arbitrary inputs in ES2015
console.log(factorial(1000));


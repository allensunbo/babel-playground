var users = [{id: '1', name: 'Alex'}, {id: '2', name: 'John'}];

function getUserById(id) {
  return new Promise((resolve, reject)=> {
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

var p1 = getUserById('2'), p2 = getUserById('1');
Promise.all([p1, p2])
  .then((data)=> {
    console.log(data);
    return getUserById(3);
  })
  .catch(err=> {
    console.log(err);
  });





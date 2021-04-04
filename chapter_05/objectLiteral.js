// object literals

let user = {
    name: 'Chris',
    age: 34,
    email: 'chris@gmail.com',
    location: 'Cincinnati',
    blogs: ['the world', 'my travels']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['email']);
user['name'] = 'Steve';
console.log(user['name']);

console.log(typeof user);
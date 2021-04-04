// Adding Methods

const blogs = [
    { title: 'The World', likes: 30 },
    { title: 'My Travels', likes: 50 }
];

console.log(blogs);

let user = {
    name: 'Chris',
    age: 34,
    email: 'chris@gmail.com',
    location: 'Cincinnati',
    blogs: [
        { title: 'The World', likes: 30 },
        { title: 'My Travels', likes: 50 }
    ],
    login(){
        console.log('The user logged in');
    },
    logout(){
        console.log('The user logged out');
    },
    logBlogs(){
        //this.blogs
        console.log('This user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

user.logBlogs();
// console.log(this);

// user.login();
// user.logout();

// const names = 'Mario';
// names.toUpperCase();
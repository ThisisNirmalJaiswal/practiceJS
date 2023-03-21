function getUser(id) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation to retrieve a user by ID
        setTimeout(() => {
            const user = { id: id, name: 'John Doe' };
            resolve(user);
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation to retrieve a user's posts
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            resolve({ user: user, posts: posts });
        }, 1000);
    });
}

getUser(123)
    .then(user => getUserPosts(user))
    .then(result => console.log(result))
    .catch(error => console.error(error));

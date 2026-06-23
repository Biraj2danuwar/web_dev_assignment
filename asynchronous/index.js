// Understanding Callbacks
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Biraj" });
  }, 2000);
}

getUser(1, function (user) {
  console.log("User Name:", user.name);
});

// Callback Hell
function getUser(callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: 10, name: "Biraj" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback(["post1", "post2"]);
  }, 1000);
}

function getComments(post, callback) {
  setTimeout(() => {
    console.log("Comments fetched");
    callback(["nice", "good"]);
  }, 1000);
}

getUser(function (user) {
  getPosts(user.id, function (posts) {
    getComments(posts[0], function (comments) {
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});

//Convert to Promises
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 10, name: "Biraj" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Comments fetched");
      resolve(["nice", "good"]);
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log("User:", user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//Async / Await Version
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 11, name: "Biraj" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getComments(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Comments fetched");
      resolve(["nice", "good"]);
    }, 1000);
  });
}

async function showData() {
  try {
    const user = await getUser();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0]);

    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  } catch (error) {
    console.log("Error:", error);
  }
}

showData();

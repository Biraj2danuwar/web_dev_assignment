const tasks = document.getElementById("list");
const loading = document.getElementById("paragraph");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {

        loading.style.display = "none";

        posts.forEach(post => {

            const li = document.createElement("li");

            li.textContent = post.title;

            tasks.appendChild(li);

        });

    })
    .catch(() => {

        loading.textContent = "Failed to load data";

    });
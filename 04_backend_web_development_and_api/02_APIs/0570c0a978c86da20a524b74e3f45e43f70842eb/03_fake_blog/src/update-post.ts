import request from "@fewlines-education/request";
import "dotenv/config";

function updatePostTitle(id: string, newTitle: string): void {
  const body = { title: newTitle };

  //const params = new URLSearchParams();
  //params.append(id, newTitle);

  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

updatePostTitle("5", "myNewTitle");

function updatePostAuthor(id: string, newAuthor: string): void {
  const body = { author: newAuthor };

  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

updatePostAuthor("6", "myNewAuthor");

function updatePost(id: string, newTitle2: string, newAuthor: string): void {
  const body = { id: id, title: newTitle2, author: newAuthor };

  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

updatePost("7", "C'est un titre", "Bob l'éponge");

export { updatePost, updatePostAuthor, updatePostTitle };

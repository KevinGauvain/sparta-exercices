import request from "@fewlines-education/request";
import "dotenv/config";

function createPost(param1: string, param2: string): void {
  const body = { title: param1, author: param2 };

  request(
    `http://${process.env.HOST}/posts`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

createPost("title", "test");

export { createPost };

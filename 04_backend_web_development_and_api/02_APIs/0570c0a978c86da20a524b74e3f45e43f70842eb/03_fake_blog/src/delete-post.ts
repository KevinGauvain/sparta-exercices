import request from "@fewlines-education/request";
import "dotenv/config";

function deletePost(id: string): void {
  let body; // const body = {};
  request(
    `http://${process.env.HOST}/posts/${id}`,
    {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      const data = JSON.parse(body);
      console.log(data);
    },
  );
}

deletePost("2");

export { deletePost };

const url = "https://example.com/profile";
const data = { username: "example" };

fetch(url, {
  method: "POST",
  body: JSON.stringify({
    username: "example",
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((response) => console.log("Success:", JSON.stringify(response)))
  .catch((error) => console.error("Error:", error));

import axios from "axios";
import fs from "fs";

const ada =
  "https://lh3.googleusercontent.com/iXmJ9aWblkGDpg-_jpcqaY10KmA8HthjZ7F15U7mJ9PQK6vZEStMlathz1FfQQWV5XeeF-A1tZ0UpDjx3q6vEm2BWZn5k1btVSuBk9ad=s660";

axios({
  method: "get",
  url: ada,
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});

import axios from "axios";

export async function sendRequestToBack(payload: any) {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/email"
      : "https://react-email-indol.vercel.app/api/email";
  console.log("URL: ", url);
  const response = await axios.post(url, payload);

  console.log("RESPONSE: ", response);

  return response.data;
}

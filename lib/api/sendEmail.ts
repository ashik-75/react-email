import axios from "axios";

export async function sendRequestToBack(payload: any) {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/email"
      : "https://react-email-c54f.vercel.app/api/email";
  const response = await axios.post(url, payload);

  return response.data;
}

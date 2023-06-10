import axios from "axios";

export async function sendRequestToBack(payload: any) {
  const response = await axios.post("http://localhost:3000/api/email", payload);

  return response.data;
}

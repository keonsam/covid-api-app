import { IncomingMessage, ServerResponse } from "http";
import createCountry from "../countries/createCountry";

export default async function countries(
  req: IncomingMessage,
  res: ServerResponse
) {
  switch (req.method) {
    case "GET":
      break;
    case "POST":
      let data = "";
      req.on("data", chuck => {
        data += chuck.toString();
      });
      req.on("end", async () => {
        const countryData = JSON.parse(data);
        console.log(countryData);
        const country = await createCountry(countryData);
        res.end(country);
      });
      break;
    case "UPDATE":
      break;
    case "DELETE":
      break;
    default:
      res.end(`Unhandled method $${req.method}`);
      break;
  }
}

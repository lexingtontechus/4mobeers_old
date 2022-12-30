import { supabase } from "../../utils/supabase-clients";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;

    const { data,error } = await supabase.from("whitelist").insert({
      firstname :firstName,
      lastname: lastName,
      email: emailAddress
    });

    if (!error) {
      res.status(200).json(data);
    } else {
      res.status(500).json(error);
    }
  }
}
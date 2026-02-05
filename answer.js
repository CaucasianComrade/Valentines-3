export default function handler(req, res) {
  if (req.method === "POST") {
    const { answer } = req.body;
    console.log("Valentine answer:", answer);
    res.status(200).json({ ok: true });
  } else {
    res.status(405).end();
  }
}
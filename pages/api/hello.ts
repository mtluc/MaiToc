// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";
// const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://tienluc0811:UlPQGb34u11jlKXz@cluster0.dpevir0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    return await client.db("MaiToc").collection("Member").find();
  } catch (err) {
    return err as any;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const _run = await run();
  res.status(200).json({ name: _run });
}

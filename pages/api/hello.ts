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

interface IMember {
  _id: any;
  name: string;
}

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const list = await client
      .db("MaiToc")
      .collection<IMember>("Member")
      .find({})
      .toArray();

    return list;
  } catch (err) {
    throw err;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMember[]>
) {
  res.status(200).json(await run());
}

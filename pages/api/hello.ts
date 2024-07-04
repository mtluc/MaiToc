// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";
// const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://tienluc0811:UlPQGb34u11jlKXz@cluster0.dpevir0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
    
  },
  minPoolSize: 1,
});

interface IMember {
  _id: any;
  name: string;
}

async function run() {
  try {
    // Send a ping to confirm a successful connection
    console.log(new Date())
    const list = await client
      .db("MaiToc")
      .collection<IMember>("Member")
      .find({})
      .toArray();

    return list;
  } catch (err) {
    throw err;
  } finally {
    console.log(new Date())
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMember[]>
) {
  res.status(200).json(await run());
}

import { MongoClient } from "mongodb";

const uri = "mongodb+srv://nhutanh1805:nguyennhutanh18@cluster0.dmbudkc.mongodb.net/?retryWrites=true&w=majority";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

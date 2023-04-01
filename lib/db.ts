import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://sa:kZ6qNXw5hJM75rfu@cluster0.1poyex2.mongodb.net/oauth?retryWrites=true&w=majority"
  );
  return client;
}

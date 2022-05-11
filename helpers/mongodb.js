import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    // connexion à MongoDB
    const client = await MongoClient.connect(
        'mongodb+srv://Bless:W7lt0FuKcpTJFiOc@cluster0.kh93b.mongodb.net/portfolio?retryWrites=true&w=majority'
    );

    return client;
}

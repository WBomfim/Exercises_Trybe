import 'dotenv/config';
import { connect } from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://root:example@localhost:27017/Glasses_Store?authSource=admin',
) => connect(mongoDatabaseURI);

export default connectToDatabase;

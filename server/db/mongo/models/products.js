/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    id: String,
    title: String,
    image: String,
    description: String
}, { id: false });

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Product' collection in the MongoDB database
export default mongoose.model('Product', ProductSchema);


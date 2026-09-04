const mongoose = require("mongoose");
const { listingSchema } = require("../schema");
const Schema = mongoose.Schema;
const Review = require("./review.js")

let ListingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,

    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    }
    },

    price: {
    type: Number,
    required: true
    },
    location: String,
    country: String,
    reviews: [
        {
        type: Schema.Types.ObjectId,
        ref: "Review",
        }
    ]
});

ListingSchema.post("findOneAndDelete", async(listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
    
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
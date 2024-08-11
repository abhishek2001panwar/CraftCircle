import mongoose from 'mongoose';


//resume schema

const ResumeSchema = new  mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedin: { type: String },
    github: { type: String },
    description: { type: String },
    skills: { type: String },
    image : { type: String},
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
});

 export const Resume = mongoose.model('Resume', ResumeSchema);


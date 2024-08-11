import { Resume } from "../models/resume.model.js";
import cloudinary from "../config/cloudinary.js";
import { User } from "../models/user.model.js";


//Creating a resume
export const resumeController = async (req, res) => {
  const { name, email, phone, linkedin, github, description, skills } =
    req.body;
  const image = req.file;
  try {
    if (!image) {
      throw new Error("No image file provided");
    }

    // Upload image to Cloudinary
    const cloudinaryUpload = await cloudinary.uploader.upload(image.path);
    const user = await User.findById(req.user._id);
    const newResume = new Resume({
      name,
      email,
      phone,
      linkedin,
      github,
      description,
      skills,
      image: cloudinaryUpload.secure_url,
      creator: req.user._id,
    });
    await newResume.save();
    user.resumes.push(newResume._id);
    await user.save();
    res.status(201).json({ msg: "Resume created", resume: newResume });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

//Getting all resumes

export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ creator: req.user.id }).populate(
      "creator"
    );
    res.send({
      resumes: resumes,
      message: " all resume fetched successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

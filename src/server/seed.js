import mongoose from "mongoose";
import dotenv from "dotenv";
import { Job } from "./models/job.model.js";
import { Application } from "./models/application.model.js";
import { User } from "./models/user.model.js";

dotenv.config();

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");

    // Clear old data
    await Promise.all([
      Job.deleteMany(),
      Application.deleteMany(),
      User.deleteMany(),
    ]);
    console.log("🧹 Cleared old collections");

    // Create users
    const company = await User.create({
      fullName: "Demo Company",
      email: "company@demo.com",
      phoneNumber: "123456789",
      password: "hashed-password",
      role: "company",
    });

    const student = await User.create({
      fullName: "John Doe",
      email: "student@demo.com",
      phoneNumber: "987654321",
      password: "hashed-password",
      role: "student",
    });

    // Create jobs
    const jobs = await Job.insertMany([
      { title: "Frontend Developer", company: company._id, location: "Rotterdam" },
      { title: "Backend Developer", company: company._id, location: "Amsterdam" },
      { title: "Data Analyst", company: company._id, location: "Utrecht" },
      { title: "UX Designer", company: company._id, location: "The Hague" },
    ]);

    // Create applications with varying statuses & dates
    const statuses = ["pending", "accepted", "rejected"];
    const applications = [];

    for (let i = 0; i < 20; i++) {
      const job = jobs[Math.floor(Math.random() * jobs.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const createdAt = new Date();
      createdAt.setDate(createdAt.getDate() - Math.floor(Math.random() * 30)); // last 30 days

      applications.push({
        job: job._id,
        applicant: student._id,
        status,
        createdAt,
      });
    }

    await Application.insertMany(applications);

    console.log("🌱 Demo data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seed();

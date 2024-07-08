import mongoose from 'mongoose'

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://sumanth58:%23shubhanth58@cluster0.ao3ax5b.mongodb.net/hungry-hub').then(()=> console.log('DB Connected'))
}
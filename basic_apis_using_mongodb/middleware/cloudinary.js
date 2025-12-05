const cloudinary = require('cloudinary').v2
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const dotenv = require('dotenv')
dotenv.config()


cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key :  process.env.CLOUDINARY_API,
    api_secret : process.env.CLOUDINARY_SECRET_KEY
})

const store = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : {
        folder : "first_file_upload",
        allowed_formats : ['jpg','jpeg','png']
    }
})
console.log(store)
const upload = multer({ store })

module.exports = upload;
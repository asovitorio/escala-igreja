import path from "path";
import multer   from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join('src','uploads','img'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      
      cb(null, (String(req.body.name).toLowerCase().replace(" ","") + '-' + uniqueSuffix +'.'+ file.originalname.split('.').pop()));
    }
  })
  
  export const upload = multer({ storage: storage })

  



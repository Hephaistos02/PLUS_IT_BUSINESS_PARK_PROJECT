const express = require ('express')
const router = express.Router()    //allows us to use router inside routes folder
const cors = require ("cors")
const {test,registerUser,loginUser,getProfile } = require ("../controllers/authController.jsx")


//middelware

router.use(
    cors({
        credentials:true,
        origin: "http://localhost:5173"
    })
)


router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',getProfile)

module.exports = router
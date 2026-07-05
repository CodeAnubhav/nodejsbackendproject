import { Router } from "express";
import { changeCurrentPassword, getCurrentUser, getUserChannelProfile, getWatchhistory, loginUser, logoutUser, refreshAccessToken, registerUser, udpateAccountDetails } from "../controllers/user.controller.js";
import { upload } from '../middlewares/multer.middleware.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()


router.route("/register").post(
    upload.fields([
        {
            name: 'avatar',
            maxCount: 1
        },
        {
            name: 'coverImage',
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

// protected routes
router.route("/logout").post(verifyJWT, logoutUser)

router.route("refresh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT , changeCurrentPassword)

router.route("/current-user").get(verifyJWT , getCurrentUser)

router.route("/update-account").path(verifyJWT , udpateAccountDetails)

router.route("/update-avatar").path(verifyJWT , upload.single(avatar) , udpateUserAvatar )
router.route("/update-coverimage").path(verifyJWT , upload.single(coverImage) , udpateUserAvatar )

router.route("/c/:username").get(verifyJWT , getUserChannelProfile)
router.route("/history").get(verifyJWT , getWatchhistory)


export default router
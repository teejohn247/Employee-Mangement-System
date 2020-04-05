import express from 'express';
import admin from '../controller/admin';
import adminAuth from '../middleware/adminAuth';
import userRegister from '../controller/userRegister';
import adminLogin from '../controller/adminLogin';
import login from '../controller/signin';
import clockOut from '../controller/updateClockOut';
import records from '../controller/adminRecords';
import updateAdminRecords from '../controller/updateAdminRecords';
import adminView from '../controller/adminView';
import userHistory from '../controller/userHistory';
// import getSpecific from '../controller/getSpecific';
// import exp from '../controller/addExperience';
// import edu from '../controller/addEducation';
// import delEdu from '../controller/deleteEducation';
// import delExp from '../controller/deleteExperience';
// import post from '../controller/post';
// import getPosts from '../controller/getPosts';
// import getPost from '../controller/getPost';
// import like from '../controller/likes';
// import unlike from '../controller/unlike';
// import comment from '../controller/comment';
// import delComment from '../controller/delComment';

import auth from '../middleware/auth'

const router = express.Router();

router.post('/admin/signup', admin);
router.post('/user/signin', login);
router.post('/register', userRegister);
router.post('/admin', adminLogin);
router.post('/records',auth, records);
router.get('/view/all',[auth, adminAuth], adminView);
router.get('/history',auth, userHistory);
// router.patch('/logout', auth, clockOut);
router.patch('/update', auth, updateAdminRecords);

// router.get('/logout', function(req,res){
//     req.logout();
//     console.log('logged out')
// });
// router.post('/profile', auth, profiles);
// router.get('/profile/me', auth, getProfile);
// router.get('/all', getAll);
// router.delete('/del', auth, del);
// router.delete('/del/post/:id', auth, delPost);
// router.get('/specific/:id', auth, getSpecific);
// router.post('/exp', auth, exp);
// router.delete('/exp/del/:exp_id', auth, delExp);
// router.delete('/edu/del/:edu_id', auth, delEdu);
// router.post('/edu', auth, edu);
// router.post('/post', auth, post);
// router.post('/post/like/:post_id', auth, like);
// router.get('/allposts', auth, getPosts);
// router.get('/allposts/:id', auth, getPost);
// router.post('/comment/:post_id', auth, comment);
// router.delete('/post/unlike/:id', auth, unlike);
// router.delete('/comment/:id/:comment_id', auth, delComment);


export default router;
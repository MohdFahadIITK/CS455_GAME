import express from 'express';
import {signup, signin} from "./auth";
import {getSessionScore, getTop10Scores, saveSessionScore} from "./score";


const router = express.Router();

router.post('/signup', async (req: express.Request, res: express.Response) => {
    await signup(req, res);
});

router.post('/signin', async (req: express.Request, res: express.Response) => {
     await signin(req, res);
});

router.post('/get-current-score', async (req: express.Request, res: express.Response)=>{
    await getSessionScore(req,res);
})

router.post('/save-current-score', async (req: express.Request, res: express.Response)=>{
    await saveSessionScore(req,res);
})

router.get('/get-top-scores',async (req: express.Request, res: express.Response)=>{
    await getTop10Scores(req,res);
})



export default router;
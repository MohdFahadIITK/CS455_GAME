import express from "express";
import {saveScore, getCurrentScore, getTopScores} from './Repository/scoreRepository';


export const saveSessionScore = async (req: express.Request, res: express.Response) => {

    console.log(req.body);

    const { user_auth_token, score, name } = req.body;

    if (!user_auth_token || !name) {
        return res.status(400).json({ error: 'Missing auth token' });
    }

    try {
        const result = await saveScore(user_auth_token, score, name);
        console.log(result);
        if (result.success) {
            return res.status(200).json({ message: "Score saved successfully" });
        } else {
            return res.status(500).json({ message: "Unable to save score" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Unable to save score due to internal error" });
    }
};

export const getSessionScore = async (req: express.Request, res: express.Response) => {
    const { user_auth_token } = req.body;

    if (!user_auth_token) {
        return res.status(400).json({ error: 'Missing auth token' });
    }

    try {
        const score = await getCurrentScore(user_auth_token); // Now returning the score directly

        return res.status(200).json({ "score" : score });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Unable to fetch score due to internal error" });
    }
};

export const getTop10Scores = async (req: express.Request, res: express.Response) => {
    try {
        const topScores = await getTopScores();

        return res.status(200).json({
            success: true,
            data: topScores
        });
    } catch (err) {
        console.error('Error fetching top scores:', err);
        return res.status(500).json({
            success: false,
            error: 'Error fetching top scores: ' + err
        });
    }
};


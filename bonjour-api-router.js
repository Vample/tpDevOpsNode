import express from 'express';
import back from './back-bonjour.js';

const apiRouter = express.Router();

apiRouter.route('/')
    .get(function (req, res, next) {
        var nom = req.params.name;
        res.setHeader('Content-Type', 'application/json');
        res.send(nom);
    });

apiRouter.route('/')
    .post(function (req, res, next) {
        var name = req.body.name;
        let retour = back.retournerMessage(name);
        res.send(retour);
    });

    export default { apiRouter };
import express from 'express';
import retournerMessage from './back-bonjour.js';

apiRouter.route('/')
    .get(function (req, res, next) {
        var name = req.params.name;
        res.setHeader('Content-Type', 'application/json');
        res.send(name);
    });

apiRouter.route('/calcul')
    .post(function (req, res, next) {
        var name = req.body;
        retournerMessage(name);

        res.send(retour);
    });

    export default { apiRouter };
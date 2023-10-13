import User from "../models/User.js";

export function inscription(req, res, next) {
    User.create(req.body)
        .then((newUser) => res.status(201).json({
            userName: newUser.userName,
            password: newUser.password,
            wallet: newUser.wallet
        }))

        .catch((err) => res.status(500).json({ errorMessage: err }));
    next()
}

export function inscriptionssss(req, res) {
    User.create(req.body)
        .then((newUser) => res.status(201).json({
            userName: newUser.userName,
            password: newUser.password,
            wallet: newUser.wallet
        }))
        .catch((err) => res.status(500).json({ errorMessage: err }));
}

export function signin(req, res) {
    User
        .findOne({ "username": req.body.username, "password": req.body.password })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function putOnce(req, res) {
    User
        .findByIdAndUpdate(req.params.id, req.body)
        .then(doc1 => {
            User.findById(req.params.id)
                .then((doc2) => {
                    res.status(200).json(doc2);
                })
                .catch((err) => {
                    res.status(500).json({ error: err });
                });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}



import User from "../models/User.js";

export function inscription(req, res) {
    User.create(req.body)
        .then((newUser) => res.status(201).json({
            userName: newUser.userName,
            password: newUser.password,
            wallet: newUser.wallet
        }))
        .catch((err) => res.status(500).json({ errorMessage: err }));
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

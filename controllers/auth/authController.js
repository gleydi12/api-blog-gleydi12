import {queryLogin} from '../../db/auth/authQueries.js';

/**
 * Login
 */
const loginController = async (req, res) => {
    try {
        const token = await login(req.body);

        res.json({ token });

    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    loginController
}

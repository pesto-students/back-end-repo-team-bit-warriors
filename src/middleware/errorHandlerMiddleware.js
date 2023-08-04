const errorHandlerMiddleware = (fn) => {
    return async (req, res) => {
        try {
            await fn(req, res);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred.' });
        }
    };
}

module.exports = errorHandlerMiddleware;

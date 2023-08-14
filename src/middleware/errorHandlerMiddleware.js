const errorHandlerMiddleware = (fn) => {
    return async (req, res) => {
        try {
            await fn(req, res);
        } catch (error) {
            console.log({ error: 'An error occurred.' });

            // Send an error response to the client
            res.status(500).json({ error: 'An error occurred.' });
        }
    };
}

module.exports = errorHandlerMiddleware;

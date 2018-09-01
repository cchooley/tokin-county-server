const express = require('express');
const router = express.Router();

const queries = require('../queries/strain');

router.get("/", (request, response, next) => {
    queries.list()
        .then(strain => {
            response.json({ strain });
        })
        .catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
        .then(strain => {
            strain
                ? response.json({ strain })
                : response.status(404).json({ strain: 'Not found' })
        })
        .catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body)
        .then(strain => {
            response.status(201).json({ strain });
        })
        .catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id)
        .then(() => {
            response.status(204).json({ deleted: true });
        })
        .catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body)
        .then(strain => {
            response.json({ strain });
        })
        .catch(next);
});

module.exports = router;
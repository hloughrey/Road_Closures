function getRoads(req, res) {
    console.log(req.params);
    console.log(req.query);

    res.send(200).json({
        msg: 'Success',
    });
}

export { getRoads };

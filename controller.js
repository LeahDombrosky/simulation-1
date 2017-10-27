






module.exports = {
    getBins: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.getAll([req.params.shelf]).then( products => res.status(200).json( products ) )
        .catch( () => res.status(500).send());
    },
    getItem: (req, res, next) => {
        const dbInstance = req.app.get('db');
        

        dbInstance.getBin([req.query.l,req.query.n]).then( products => res.status(200).json( products ) )
        .catch( () => res.status(500).send());
    }
}
function checkReadScope(req, res, next){
    if(req.authInfo.checkLocalScope('read')){
        next();
    }else{
        console.error('Missing the expected scope');
        res.status(403).end('Forbidden');
    }
}

module.exports = checkReadScope;
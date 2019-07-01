function errorHandler(err, req, res, next) {
    console.log("Masuk error boss");
    // console.log(err);
    
    if (err.code === 404) {
        console.log('error 404 llllllllllll');

        res.status(404).json({
            message: "Not Found"
        })
    } else if (err.name === 'ValidationError') {
        console.log('error validasi');
        // console.log(err);
        
        
        let errorArr = []
        for (let listErr in err.errors) {
            errorArr.push({
                message: err.errors[listErr].message,
                path: err.errors[listErr].path
            })
        }
        console.log(errorArr[0].message);
        
        res.status(400).json({
            message : errorArr[0].message
        })
    }  else {
        console.log('error else');
        console.log(err.message);
        
        
        let code = err.code || 500
        let messageerr = err.message || "Internal Servel Error"
        res.status(code).json({
            message: messageerr
        })
    }
}

module.exports = errorHandler
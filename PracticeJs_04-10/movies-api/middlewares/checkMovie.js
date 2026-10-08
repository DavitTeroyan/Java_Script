export const checkMovie = (req,res,next) => {
    const { title, year } = req.body || {} ;
    if(!title || !year){
        return res.status(400).json({ ok: false, message: 'title and year are required' });
    }
    
    if (typeof year !== "number") {
        return res.status(400).json({
            ok: false,
            message: "year must be a number"
        });
    }

    next();
}

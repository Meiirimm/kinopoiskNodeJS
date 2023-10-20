const Rate = require('./Rates')
const Film = require('../Films/Film')

const saveRate = async(req,res) => {
    if(req.body.authorId && req.body.filmId && req.body.rate){
        await new Rate({
            rate: req.body.rate,
            text: req.body.text,
            authorId: req.body.authorId,
            filmId: req.body.filmId,
            date: Date.now()
        }).save()
    }
    res.status(200).send(true)
}

const editRate = async(req, res) => {
    if(req.body.text.length > 0){
            const rate = await Rate.findById(req.body.id)
            const film = await Film.findById(req.body.userId)
            rate.text = req.body.text;
            rate.rate =  req.body.rate;
            // rate.authorId = req.body.authorId;
            rate.save()
           res.redirect(`/detail/${film._id}`)
    }else{
        const film = await Film.findById(req.body.userId)
        res.redirect(`/detail/${film._id}?error=1`)
    }
}


const deleteRate = async(req, res) => {
    const rate = await Rate.findById(req.params.id)
    console.log(rate);
    if(rate){
        await Rate.deleteOne({_id: req.params.id})
        res.status(200).send('ok')    
    }else{
        res.status(404).send('Not found')
    }
}


module.exports = {
    saveRate,
    editRate,
    deleteRate
}
const User = require('../auth/User')

const deleteUser = async(req, res) => {
    const user = await User.findById(req.params.id)
    // console.log(user);
    if(user){
        await User.deleteOne({_id: req.params.id})
        res.status(200).send('Вы хотите удалить аккаунт?')
    }else{
        res.status(404).send('Not found')
    }
}

const editUser = async(req, res) => {
    if(req.body.email.length > 0 && req.body.full_name.length > 0){
            const user = await User.findById(req.body.id)
            user.email = req.body.email;
            user.full_name = req.body.full_name;
            user.save()
            if(req.user.isAdmin){
                res.redirect('/admin/' + req.user._id)
            }else{
                res.redirect('/profile/' + req.user._id)
            }
    }else{
        res.redirect(`/edit/${req.body.id}?error=1`)
    }
}


const saveToWatch = (req, res) => {
    console.log(req.body);
}

module.exports = {
    saveToWatch,
    deleteUser,
    editUser
}
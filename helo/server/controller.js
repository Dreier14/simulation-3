module.exports ={
    newUser: (req, res, next) => {
        const db = req.app.get('db')
        const {username, password, profile_pic} = req.body

        db.create_new_user([username, password, profile_pic]).then(user => {
            req.session.userid = user[0].id
            res.status(200).send(user)
        })
    },
    login: (req, res, next) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        db.find_user([username, password]).then(user => {
            
            req.session.userid = user[0].id
            
            res.status(200).send(user)
        })
    },
    allPosts: (req, res, next) => {
        const db = req.app.get('db')

        db.get_all_posts().then(posts => {
            res.status(200).send(posts)
        })
    },
    refresh: (req, res, next) => {
        const db = req.app.get('db')
        console.log("refresh", req.session.userid);
        
        db.refresh([req.session.userid]).then(user => {
            console.log('user', user);
            
            res.status(200).send(user[0])
        })
    },
    logout: (req, res, next) => {
        req.session.destroy()
    }
}
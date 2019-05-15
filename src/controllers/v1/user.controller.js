import { models } from '../../models'

const get = async(req, res, next) => {
    try {
        const users = await models.User.findAll() //동기방식으로 가져온다

        return res.json(users)
    } catch (e) {
        next(e)
    }
}

export {
    get
}
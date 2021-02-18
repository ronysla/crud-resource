const Resource = require('../models/Resource')
const { validate } = require('../libs/validateSinc')

exports.create = async ({ body }, res, next) => {
    try {
        const resourceExits = await Resource.findOne({ source: body.source })
        if (!resourceExits) {
            const resource = new Resource(body)
            let result = validate(resource)
            if (result)
                return res.status(400).json({ info: result, success: false })
            const newresource = await resource.save()
            if (!newresource || !newresource._id)
                return res.status(400).json({ info: 'Error when creating the note', success: false })

            return res.status(200).json({ info: "Data successfully saved", success: true })

        } else {
            return res.status(400).json({ info: 'The source already exists', success: false })
        }
    } catch (error) {
        next(error)
    }
}
exports.list = async (req, res, next) => {
    try {
        const resources = await Resource.find({})
        return res.status(200).json({ info: "List successfully", success: true, data: resources })
    } catch (error) {
        next(error)
    }
}
exports.update = async ({ body, params }, res, next) => {
    try {
        const { id } = params
        const resource = await Resource.findByIdAndUpdate(id, body, { new: true })
        if (!resource || !resource._id)
            return res.status(400).json({ info: 'Error when Updating the note', success: false })
        return res.status(200).json({ info: 'Successfull update', success: true })
    } catch (error) {
        next(error)
    }
}
exports.remove = async ({ params }, res, next) => {
    try {
        const { id } = params
        const resouce = await Resource.findByIdAndRemove(id)
        if (!resouce || !resouce._id)
            return res.status(400).json({ info: 'Error when removing the note', success: false })
        return res.status(200).json({ info: 'Successfull remove', success: true })
    } catch (error) {
        next(error)
    }
}
exports.details = async ({ params }, res, next) => {
    try {
        const { id } = params
        const resource = await Resource.findById(id)
        if (!resource || !resource._id)
            return res.status(400).json({ info: 'Error when details the note', success: false })
        return res.status(200).json({ info: 'Successfull details', success: true, data: resource })
    } catch (error) {
        next(error)
    }
}
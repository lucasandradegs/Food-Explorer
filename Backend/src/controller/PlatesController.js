const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class PlatesController {
    async create(req, res) {
        const { image, name, category, ingredients, price, description } = req.body
        const { user_id } = req.params

        const [plate_id] = await knex("plates").insert({
            image,
            name,
            price,
            description,
            user_id
        })

        const insertIntoCategory = category.map(name => {
            return {
                plate_id,
                name,
                user_id
            }
        })

        await knex("category").insert(insertIntoCategory)

        const insertIntoIngredients = ingredients.map(name => {
            return {
                plate_id,
                name,
                user_id
            }
        })

        await knex("ingredients").insert(insertIntoIngredients)

        return res.status(201).json(`Prato criado com sucesso!`)
    }

    async update(req, res) {
        const { image, name, price, description } = req.body
        const { id } = req.params

        const plate = await knex("plates").where({ id }).first()

        if (!plate) {
            throw new AppError(`Prato não encontrado no sistema.`)
        }
        
        plate.image = image ?? plate.image
        plate.name = name ?? plate.name
        plate.price = price ?? plate.price
        plate.description = description ?? plate.description

        await knex("plates").update({ image, name, price, description }).where({ id })

        return res.status(201).json(`Prato atualizado com sucesso!`)
    }

    async show(req, res) {
        const { id } = req.params
        
        const plate = await knex("plates").where({ id }).first()
        const category = await knex("category").where({ plate_id: id})
        const ingredients = await knex("ingredients").where({ plate_id: id}).orderBy("name")
        
        return res.status(201).json({
            ...plate,
            category,
            ingredients
        })
    }

}

module.exports = PlatesController;
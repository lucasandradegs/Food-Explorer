const knex = require("../database/knex")
const DiskStorage = require("../providers/DiskStorage")
const AppError = require("../utils/AppError");

class PlatesController {
    async create(req, res) {
        const { name, category, ingredients, price, description } = req.body
        const imageFilename = req.file.filename

        const diskStorage = new DiskStorage()
        const filename = await diskStorage.saveFile(imageFilename)

        const [plate_id] = await knex("plates").insert({
            image: filename,
            name,
            price,
            category,
            description,
        })

        const insertIntoIngredients = ingredients.map(ingredient => {
            return {
                ingredient,
                plate_id
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
        const category = await knex("category").where({ plate_id: id })
        const ingredients = await knex("ingredients").where({ plate_id: id }).orderBy("ingredient")

        if (!plate) {
            throw new AppError(`Este prato não existe`)
        }

        return res.status(201).json({
            ...plate,
            category,
            ingredients
        })
    }

    async delete(req, res) {
        const { id } = req.params

        const plate = await knex("plates").where({ id }).delete()

        if (!plate) {
            throw new AppError(`O prato não existe.`)
        }

        return res.status(201).json(`O prato foi deletado com sucesso!`)
    }

    async index(req, res) {
        const { name, ingredients } = req.query

        let plates;

        if (ingredients) {
            const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim())

            plates = await knex("ingredients").select([
                "plates.id",
                "plates.name",
                "plates.user_id",
            ])
            .whereLike("plates.name", `%${name}%`)
            .whereIn("ingredient", filterIngredients)
            .innerJoin("plates", "plates.id", "ingredients.plate_id")
        } else {

            plates = await knex("plates").orderBy("name").whereLike("name", `%${name}%`)

        }

        const plateIngredients = await knex("ingredients")
        const platesWithIngredients = plates.map(plate => {
            const plateIngredient = plateIngredients.filter(ingredient => ingredient.plate_id === plate.id)

            return {
                ...plate,
                ingredients: plateIngredient
            }
        })


        return res.status(201).json(platesWithIngredients)
    }

}

module.exports = PlatesController;
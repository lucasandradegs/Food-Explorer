const knex = require("../database/knex")
const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError")

class UsersController {
    async create(req, res) {
        const { name, email, password } = req.body

        const checkIfUserExists = await knex("users").where({ email })

        if (checkIfUserExists.length > 0) {
            throw new AppError(`Endereço de e-mail já está cadastrado.`)
        }

        const hashedPassword = await hash(password, 8)

        await knex("users").insert({ name, email, password: hashedPassword })

        return res.status(201).json({ name, email, password })
    }

    async update(req, res) {
        const { name, email } = req.body
        const { id } = req.params

        const user = await knex("users").where({ id }).first()
    
        if (!user) {
            throw new AppError(`Usuário não encontrado no sistema.`)
        }

        const userWithUpdatedEmail = await knex("users").where({ email }).first()
    
        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== id ) {
            throw new AppError(`Endereço de e-mail já está em uso.`)
        }

        user.name = name ?? user.name
        user.email = email ?? user.email

        await knex("users").update({ name, email, updated_at: knex.fn.now() }).where({ id })
    
        return res.status(201).json(`Usuário atualizado com sucesso!`)
    }

}

module.exports = UsersController;
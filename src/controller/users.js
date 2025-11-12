import ServiceUser from "../service/users.js"

class ControllerUser {

    FindAll(_, res) {
        try {

            const nome = ServiceUser.FindAll()
            res.status(200).send({ nome })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async FindOne(req, res) {
        try {
            console.log(req.headers.user)
            const id = req.params.id

            const user = await ServiceUser.FindOne(id)
            res.status(200).send({ user })

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async Create(req, res) {
        try {

            const { nome, email, senha, ativo } = req.body
            await ServiceUser.Create(nome, email, senha, ativo, 1)
            res.status(201).send("Usuario criado com sucesso")

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }
    async Update(req, res) {
        try {
            const id = req.params.id
            const { nome, email, senha, ativo } = req.body
            ServiceUser.Update(id, nome, email, senha, ativo)
            res.status(200).send()

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }
    async Delete(req, res) {
        try {
            const id = req.params.id
            await ServiceUser.Delete(id)
            res.status(204).send("usuario deletado com sucesso")

        } catch (error) {
            res.status(500).send({ error: error.message })
        }

    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body
           // console.log(email,senha)
            const token = await ServiceUser.Login(email, senha)
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ error: error.message })

        }



    }

}

export default new ControllerUser()
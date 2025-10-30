import User from '../model/users.js'

class ServiceUser {

    FindAll() {
        return User.FindAll()
    }
    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error("Usuario não encontrado")
        }
        // verificar se o id é valido
        return user
    }
    async Create(nome, email, senha, ativo) {
        if (!nome || !email || !senha) {
            throw new Error("favor preencher todos os campos")

        }
        await User.create({
            nome, email, senha, ativo
        })
    }
    Update(id, nome) {
        // verificar se o id e nome é valido
        return User.Update(id, nome)
    }
    Delete(id) {
        return User.Delete(id)
    }
}

export default new ServiceUser()
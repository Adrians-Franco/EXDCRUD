import User from "../model/users.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SEGREDO = "Guears"
const SALT = 10 //12

class ServiceUsers {

    async FindAll() {
        return User.findAll()
        
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("favor informar o ID")
        }

        const user = await User.findByPk(id)

        if (!user) {
            throw new Error(`usuario ${id} não enontrado`)
        }

        return user
    }

    async Create(nome, email, senha, ativo, permissao) {
        if (!nome || !email || !senha) {
            throw new Error("Favor preencher todos os campos")
        }
        const senhaCriptografada = await bcrypt.hash(String(senha), SALT)

        await User.create({
            nome,
            email,
            senha: senhaCriptografada,
            ativo,
            permissao
        })
    }

    async Update(id, nome, email, senha, ativos) {
        const oldUser = User.findByPk(id)
        oldUser.senha = senha
            ? await bcrypt.hash(String(senha), SALT)
            : oldUser.senha
        // if (!id | !nome | !email | !senha) {
        //     throw new Error("Favor preencher todos campos")
        // }

        // const user = await User.findByPk(id)

        // if (!user) {
        //     throw new Error(`usuário ${id} não foi encontrado`)
        // }

        // user.nome = nome
        // user.email = email
        // user.senha = senha
        // user.ativo = ativos

        // await user.save()
    }

    async Delete(id) {
        //     if (!id) {
        //         throw new Error("Informar ID valido")
        //     }

        //     const user = await User.findByPk(id)

        //     if (!user) {
        //         throw new Error(`usuário ${id} não foi encontrado`)
        //     }

        //     await user.destroy()
    }

    async Login(email, senha) {
        // console.log(email,senha)
        if (!email || !senha) {
            throw new Error("Email ou senha Invalidos")
        }
        // creiar o token
        // se o email ou senha for invalido eu não gero o token

        const user = await User.findOne({ where: { email } })
        // console.log(user)

        if (!user
            || !(await bcrypt.compare(String(senha), user.senha))
        ) {
            throw new Error("Email ou senha Invalidos")
        }

        return jwt.sign({ id: user.id, nome: user.nome, permissao: user.permissao },
            JWT_SEGREDO, { expiresIn: 60 * 60 })

    }
}

export default new ServiceUsers()
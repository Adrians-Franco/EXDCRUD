import ServiceUser from '../service/users.js'

class ControllerUser {

  FindAll(_, res) {
    try {
      const nomes = ServiceUser.FindAll()
      res.status(200).send({ nomes })
    
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


  FindOne(req, res) {
    try {
      const index = req.params.index
      const nome = ServiceUser.FindOne(index)
      res.status(200).send({ nome })
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


  Create(req, res) {
    try {
      const nome =req.body.nome
      ServiceUser.Create(nome)
      res.status(201)
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


  Update(req, res) {
    try {
      const index = req.params.index
      const nome =req.body.nome
       ServiceUser.Update(index, nome)
      res.status(200).send()
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


  Delete(req, res) {
    try {
      const index = req.params.index
       ServiceUser.Delete(index)
      res.status(204).send()
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


}

export default new ControllerUser()
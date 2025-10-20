import ServiceUser from '../service/users.js'

class ControllerUser {

  FindAll(req, res) {
    try {
      const resultado = ServiceUser.FindAll()
      res.send(resultado)
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


  FindOne(req, res) {
    try {
      const resultado = ServiceUser.FindAll()
      res.send(resultado)
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


  Create(req, res) {
    try {
      const resultado = ServiceUser.FindAll()
      res.send(resultado)
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


  Update(req, res) {
    try {
      const resultado = ServiceUser.FindAll()
      res.send(resultado)
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


  Delete(req, res) {
    try {
      const resultado = ServiceUser.FindAll()
      res.send(resultado)
    } catch (error) {
      res.status(500).send({ error: error.message })
    }
    //chamar o serviço
  }


}

export default new ControllerUser()
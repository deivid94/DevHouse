//metodos index, show, update, store, destroy

/*
    index: listagem de sessoes
    store: Criar uma sessao ( quando o usuario faz login)
    show: quando queremos listas uma Unica sessao
    update: atualizar dados de um usuario
    destroy: excluir um usuario

*/

import User from '../models/User'

class SessionController{
    async store(req, res){
        const { email } = req.body

        let user = await User.findOne({ email })
        if (!user){
            let user = await User.create({ email })
        }
        

      

        return res.json(user)
    }



}

export default new SessionController();
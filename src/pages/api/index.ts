import { NextApiRequest, NextApiResponse } from "next"

/**FERRAMENTAS DE AUTENTICAÇÃO
 * JWT salvo no Storage
 * Next Auth (Social)
 * Cognito, Auth0 (Outros métodos)
 */

export default (req: NextApiRequest, res: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Diego'},
        { id: 2, name: 'Henry'},
        { id: 3, name: 'Tamara'},
    ]

    return res.json(users)
}
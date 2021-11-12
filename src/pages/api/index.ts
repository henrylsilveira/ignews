import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Diego'},
        { id: 2, name: 'Henry'},
        { id: 3, name: 'Tamara'},
    ]

    return res.json(users)
}
import { NextApiRequest, NextApiResponse } from "next"

export default function handler(request: NextApiRequest, response: NextApiResponse) {
	const nome = "ARTHUR BRAGA GRIMALDI"
	
	return response.json({
		nome: "ARTHUR BRAGA GRIMALDI"
	})
}
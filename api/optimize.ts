// api/optimize.ts
// api/optimize.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async (req: VercelRequest, res: VercelResponse) => {
	console.log("API Request Received");
	const data = req.body; // You'll need to pass the request body as needed
	console.log("Data received from the front-end:", req.body); // Log the data received
	try {
		const apiResponse = await fetch('https://test-api-python-vercel.vercel.app/optimize/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-Key': 'poneychoucroute',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(data)
		});
		console.log("Optimization completed")
		const json = await apiResponse.json();
		console.log(json)
		if (apiResponse.ok) {
			res.status(200).json(json);
			console.log("reponse ok")
		} else {
			res.status(apiResponse.status).json(json);
		}
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

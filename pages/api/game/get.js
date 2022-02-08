import mongoose from 'mongoose';
import axios from 'axios';
export default async function handler(req, res) {
    const { id } = req.body;
    if (req.method == 'GET') {
        const data = require('../../../database.json')['applist']['apps']
        const paths = data.map((e) => {
            return e['appid']
        })
        res.status(200).json(paths)
        return
    }
    else if (req.method == 'POST') {
        const url = `https://store.steampowered.com/api/appdetails?appids=${id}`
        const result = await axios.get(url).then(async (res) => await res.data)
        res.json({ data: result })
    }

}
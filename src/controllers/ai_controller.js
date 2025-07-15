const aiService = require('../services/ai_service')

async function getReview(req, res){
    const code = req.body.code;

    if (!code) return res.status(400).send('No response generated!')
    
    const ans = await aiService(code)
    res.send(ans)

}

module.exports = getReview
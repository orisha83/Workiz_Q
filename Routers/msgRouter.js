const express = require('express');
const router = express.Router();
const msgBL = require('../BLs/msgBL')

router.route('/:id')
    .get( function(req,resp)
    {
        console.log('route - get')
        let msg = msgBL.getNextMsg(req.params.id)
        console.log(msg)
        return resp.json(msg);
    })

router.route('/:id')
    .post(function(req,resp)
    {
        let obj = req.body;
        let res = msgBL.addMsg(req.params.id, obj)
        return resp.json(res);
    })

module.exports = router;
const redisDAL = require('../DALs/redisDAL');

const getNextMsg = function(id)
{
    console.log('getNextMsg')
    let resOfGet = redisDAL.getMsg(id)
    return resOfGet
}

const addMsg = function(id, obj)
{
    console.log('addMsg')
    let resOfSend = redisDAL.sendMsg(id, obj)
    return resOfSend
}

module.exports = {getNextMsg, addMsg}
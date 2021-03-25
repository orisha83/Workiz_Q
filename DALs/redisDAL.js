const PQDS = require('../DataSource/PQ')

const sendMsg = function(q_id, msg)
{
  console.log('sendMsg')
  if(PQDS.qObject[q_id])
  {
    let q = PQDS.qObject[q_id]
    q.push(msg.msg)
    PQDS.qObject[q_id] = q
  }
  else
  {
    PQDS.qObject[q_id] = [msg.msg]
  }
  console.log(PQDS.qObject)
  return "msg sent"
}

const getMsg = function(q_id)
{
  console.log('getMsg')
  let lastMsg = PQDS.qObject[q_id]
  console.log(lastMsg)
  popedMsg = lastMsg.pop()
  return popedMsg
}

module.exports  =  {sendMsg, getMsg}
const EventEmitter = require('events');

const customEmitter = new EventEmitter();


// On - listen for an event
// Emit - Emit an event

customEmitter.on('response',(name , id) =>
{
    console.log(`Data recieved for user ${name} for id: ${id}`)
})

customEmitter.on('response',(name , id) =>
{
    console.log(`Some other logic here : ${name}`)
})

customEmitter.emit('response','john',23)
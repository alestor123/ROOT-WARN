module.exports = (message) => {
        if(process.getuid && process.getuid() === 0) {
            console.log(message)
            return true
        }   
    else return false
}
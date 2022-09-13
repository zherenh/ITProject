function renderStatus(url){
    let arr = ["","/home", "/search"]
    return arr.includes(url)?200:404;
}

module.exports = renderStatus;
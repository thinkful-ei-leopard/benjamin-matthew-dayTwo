function findById(items, idNum){
    for(let i = 0; i < items.length; i++){
        if(items[i].id === idNum){
            return items[i]
        }
    }
     return {}
    
}
console.log(findById([{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}], 1))
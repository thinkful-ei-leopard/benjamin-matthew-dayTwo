function  updateObject(obj){
    obj.foo = 'foo'
    obj.bar = 'bar'
    obj.bizz = 'bizz'
    obj.bang = 'bang'
    return obj
}
console.log(updateObject({foo:"too", bar:"boo", bizz:"biss"}))
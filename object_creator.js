function createMyObject(){
    return{
        foo: 'bar',
        answerToUniverse: 42,
        "olly olly": 'oxen free',
        sayHello(){
            return "hello"
        }
    }
}
console.log(createMyObject())
let check = createMyObject()
console.log(check.sayHello())
function makeStudentsReport(data){
    let report = []
    for(let i = 0; i < data.length; i++){
        let stu = data[i]
       report.push(`${stu.name}: ${stu.grade}`) 
    }


    return report
}
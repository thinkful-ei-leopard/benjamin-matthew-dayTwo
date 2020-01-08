let jobs = [
    {
        name: 'Robert',
        jobTitle: 'Production Supervisor',
        boss: 'Andrea'
    },
    {
        name: 'Andrew',
        jobTitle: 'Ski Instructor',
        boss: 'Andrea'
    },
    {
        name: 'Stephen',
        jobTitle: 'Facilities Worker',
        boss: 'Andrea'
    },  
    {
        name: 'Andrea',
        jobTitle: 'Thinkful Instructor',
       boss: "Andrea doesn't report to anybody"
    }
]

for(let i = 0; i < jobs.length; i++) {
    let obj = jobs[i];
    console.log(`${obj.name}: ${obj.jobTitle} reports to ${obj.boss}`)
}
const allIssueUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues"
const singleIssueUrl ="https://phi-lab-server.vercel.app/api/v1/lab/issue/33"
const searchIssueUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications"

fetch(allIssueUrl).then(promice => promice.json()).then(datas => loadData(datas));


function loadData(datas){
    datas.data.forEach(element => {
        console.log(element)

        // add card 




    });
}
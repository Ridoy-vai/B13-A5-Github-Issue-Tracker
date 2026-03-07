const openTab = []
const closeTab = []
console.log(closeTab)

const allIssueUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
const dataBox = document.getElementById("data-Box");
const allData = document.getElementById("data-count")
const openStatus = document.getElementById("open-status")
const closeStatus = document.getElementById("close-status")





fetch(allIssueUrl)
  .then(res => res.json())
  .then(datas => loadData(datas))

function loadData(datas) {

  datas.data.forEach(element => {

    let card = document.createElement("div");
    card.innerHTML = `
    <div class="card">
        <div class="card-header">
            <div class="icon-circle">
                <img src="" alt="">
            </div>

            <div class="priority-badge">${element.priority}</div>
        </div>

        <div class="card-body">
            <h2 class="card-title">${element.title}</h2>
            <p class="card-desc">${element.description}</p>

            <div>
                <div class="tag-enhancement">
                    <span class="sparkle-icon">${element.labels[0] ?? ""}</span>
                </div>
                <div class="tag-enhancement">
                    <span class="sparkle-icon">${element.labels[1] ?? ""}</span>
                </div>
            </div>
        </div>

        <div class="card-footer">
            <p class="footer-text">${element.id} ${element.author}</p>
            <p class="footer-date">${element.updatedAt}</p>
        </div>
    </div>
    `;

    dataBox.append(card);

    const innerCard = card.querySelector(".card");
    const priorityBadge = card.querySelector(".priority-badge");
    const statusIcon = card.querySelector(".icon-circle img");

    /* -------- Status -------- */

    if (element.status === "open") {
      innerCard.classList.add("open-border");
      statusIcon.src = "assets/Open-Status.png";
      openTab.push(element)
    } else {
      innerCard.classList.add("close-border");
      statusIcon.src = "assets/Closed-Status.png";
      closeTab.push(element)
    }

    /* -------- Priority -------- */

    if (element.priority === "high") {
      priorityBadge.classList.add("priority_high");
    }
    else if (element.priority === "medium") {
      priorityBadge.classList.add("priority_medium");
    }
    else if (element.priority === "low") {
      priorityBadge.classList.add("priority_low");
    }

  }); // loop end

  allData.innerText = dataBox.children.length;

};


 openStatus.addEventListener("click", () => {
  dataBox.innerHTML = ""; // clear previous cards

  openTab.forEach(openData => {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="card">
        <div class="card-header">
            <div class="icon-circle">
                <img src="" alt="">
            </div>
            <div class="priority-badge">${openData.priority}</div>
        </div>
        <div class="card-body">
            <h2 class="card-title">${openData.title}</h2>
            <p class="card-desc">${openData.description}</p>
            <div>
                <div class="tag-enhancement">
                    <span class="sparkle-icon">${openData.labels[0] ?? ""}</span>
                </div>
                <div class="tag-enhancement">
                    <span class="sparkle-icon">${openData.labels[1] ?? ""}</span>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <p class="footer-text">${openData.id} ${openData.author}</p>
            <p class="footer-date">${openData.updatedAt}</p>
        </div>
    </div>
    `;

    dataBox.append(card);

    const innerCard = card.querySelector(".card");
    const priorityBadge = card.querySelector(".priority-badge");
    const statusIcon = card.querySelector(".icon-circle img");

    if (openData.status === "open") {
      innerCard.classList.add("open-border");
      statusIcon.src = "assets/Open-Status.png";
    } else {
      innerCard.classList.add("close-border");
      statusIcon.src = "assets/Closed-Status.png";
    }

    if (openData.priority === "high") priorityBadge.classList.add("priority_high");
    else if (openData.priority === "medium") priorityBadge.classList.add("priority_medium");
    else if (openData.priority === "low") priorityBadge.classList.add("priority_low");
  });

  allData.innerText = openTab.length;
});


 closeStatus.addEventListener("click", () => {
  dataBox.innerHTML = ""; // clear previous cards

  closeTab.forEach(closeData => {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="card">
        <div class="card-header">
            <div class="icon-circle">
                <img src="" alt="">
            </div>
            <div class="priority-badge">${closeData.priority}</div>
        </div>
        <div class="card-body">
            <h2 class="card-title">${closeData.title}</h2>
            <p class="card-desc">${closeData.description}</p>
            <div>
                <div class="tag-enhancement">
                    <span class="sparkle-icon">${closeData.labels[0] ?? ""}</span>
                </div>
                <div class="tag-enhancement">
                    <span class="sparkle-icon">${closeData.labels[1] ?? ""}</span>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <p class="footer-text">${closeData.id} ${closeData.author}</p>
            <p class="footer-date">${closeData.updatedAt}</p>
        </div>
    </div>
    `;

    dataBox.append(card);

    const innerCard = card.querySelector(".card");
    const priorityBadge = card.querySelector(".priority-badge");
    const statusIcon = card.querySelector(".icon-circle img");

    if (closeData.status === "open") {
      innerCard.classList.add("open-border");
      statusIcon.src = "assets/Open-Status.png";
    } else {
      innerCard.classList.add("close-border");
      statusIcon.src = "assets/Closed-Status.png";
    }

    if (closeData.priority === "high") {
        priorityBadge.classList.add("priority_high");
    }
    else if (closeData.priority === "medium"){ 
        priorityBadge.classList.add("priority_medium");
    }
    else if (closeData.priority === "low") {
        priorityBadge.classList.add("priority_low");
    }
  });

  allData.innerText = closeTab.length;
});
    




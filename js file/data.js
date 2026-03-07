const openTab = []
const closeTab = []
const allTab = [] 

const allIssueUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
const dataBox = document.getElementById("data-Box");
const allData = document.getElementById("data-count")
const allStatus = document.getElementById("all-status")
const openStatus = document.getElementById("open-status")
const closeStatus = document.getElementById("close-status")

fetch(allIssueUrl)
  .then(res => res.json())
  .then(datas => loadData(datas))

function loadData(datas) {
  datas.data.forEach(element => {
    allTab.push(element); // ২. সব ডাটা এই অ্যারেতে জমা হচ্ছে
const card = document.createElement("div");
card.innerHTML = `
  <div class="card" onclick="showModalDetails(${element.id})">
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
        <div class="tag-enhancement tag-enhancement-one">
          <span class="sparkle-icon lable-one">${element.labels[0] || ""}</span>
        </div>
        <div class="tag-enhancement tag-enhancement-two">
          <span class="sparkle-icon lable-two">${element.labels[1] || ""}</span>
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
const lableOne = card.querySelector(".lable-one");
const lableTwo = card.querySelector(".lable-two");
const tagEnhancementOne = card.querySelector(".tag-enhancement-one");
const tagEnhancementTwo = card.querySelector(".tag-enhancement-two");

// Open/Close status
if (element.status === "open") {
  innerCard.classList.add("open-border");
  statusIcon.src = "assets/Open-Status.png";
  openTab.push(element);
} else {
  innerCard.classList.add("close-border");
  statusIcon.src = "assets/Closed-Status.png";
  closeTab.push(element);
}
if (lableTwo.innerText  === undefined|| lableTwo.innerText === "") {
        tagEnhancementTwo.classList.add("hidden");
         }

if(lableOne.innerText === undefined || lableOne.innerText === "") {
        tagEnhancementOne.classList.add("hidden");
         }

if (element.priority === "high") priorityBadge.classList.add("priority_high");
else if (element.priority === "medium") priorityBadge.classList.add("priority_medium");
else if (element.priority === "low") priorityBadge.classList.add("priority_low");



  
    });

 
  
  allData.innerText = dataBox.children.length;  
};


allStatus.addEventListener("click", () => {
  dataBox.innerHTML = ""; 

  allTab.forEach(element => {
    const card = document.createElement("div");
card.innerHTML = `
  <div class="card" onclick="showModalDetails(${element.id})">
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
        <div class="tag-enhancement tag-enhancement-one">
          <span class="sparkle-icon lable-one">${element.labels[0] || ""}</span>
        </div>
        <div class="tag-enhancement tag-enhancement-two">
          <span class="sparkle-icon lable-two">${element.labels[1] || ""}</span>
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
const lableOne = card.querySelector(".lable-one");
const lableTwo = card.querySelector(".lable-two");
const tagEnhancementOne = card.querySelector(".tag-enhancement-one");
const tagEnhancementTwo = card.querySelector(".tag-enhancement-two");

// Open/Close status
if (element.status === "open") {
  innerCard.classList.add("open-border");
  statusIcon.src = "assets/Open-Status.png";
  // openTab.push(element);
} else {
  innerCard.classList.add("close-border");
  statusIcon.src = "assets/Closed-Status.png";
  // closeTab.push(element);
}
if (lableTwo.innerText  === undefined|| lableTwo.innerText === "") {
        tagEnhancementTwo.classList.add("hidden");
         }

if(lableOne.innerText === undefined || lableOne.innerText === "") {
        tagEnhancementOne.classList.add("hidden");
         }

if (element.priority === "high") priorityBadge.classList.add("priority_high");
else if (element.priority === "medium") priorityBadge.classList.add("priority_medium");
else if (element.priority === "low") priorityBadge.classList.add("priority_low");



  
    });

 
  
  allData.innerText = dataBox.children.length;  
})


 openStatus.addEventListener("click", () => {
  dataBox.innerHTML = ""; // clear previous cards

  openTab.forEach(openData => {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="card" onclick="showModalDetails(${openData.id})">
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
                <div class="tag-enhancement tag-enhancement-one">
                    <span class="sparkle-icon lable-one">${openData.labels[0] ?? ""}</span>
                </div>
                <div class="tag-enhancement tag-enhancement-two">
                    <span class="sparkle-icon lable-two">${openData.labels[1] ?? ""}</span>
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
    const lableOne = card.querySelector(".lable-one");
const lableTwo = card.querySelector(".lable-two");
const tagEnhancementOne = card.querySelector(".tag-enhancement-one");
const tagEnhancementTwo = card.querySelector(".tag-enhancement-two");
if (lableTwo.innerText  === undefined|| lableTwo.innerText === "") {
        tagEnhancementTwo.classList.add("hidden");
         }

if(lableOne.innerText === undefined || lableOne.innerText === "") {
        tagEnhancementOne.classList.add("hidden");
         }


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
    <div class="card" onclick="showModalDetails(${closeData.id})">
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
                <div class="tag-enhancement tag-enhancement-one">
                    <span class="sparkle-icon lable-one">${closeData.labels[0] ?? ""}</span>
                </div>
                <div class="tag-enhancement tag-enhancement-two">
                    <span class="sparkle-icon lable-two">${closeData.labels[1] ?? ""}</span>
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
    const lableOne = card.querySelector(".lable-one");
const lableTwo = card.querySelector(".lable-two");
const tagEnhancementOne = card.querySelector(".tag-enhancement-one");
const tagEnhancementTwo = card.querySelector(".tag-enhancement-two");

    if (lableTwo.innerText  === undefined|| lableTwo.innerText === "") {
        tagEnhancementTwo.classList.add("hidden");
         }

if(lableOne.innerText === undefined || lableOne.innerText === "") {
        tagEnhancementOne.classList.add("hidden");
         }
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
    
function showModalDetails(id) {
  const ModalUrl = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

  fetch(ModalUrl)
    .then(res => res.json())
    .then(data => modalDisplay(data))
    .catch(err => console.error("Failed to load modal details:", err));
}

function modalDisplay(payload) {
  const modal = payload?.data ?? payload;
  if (!modal) return;

  const detailBox = document.getElementById("detail-container");
  const labels = Array.isArray(modal.labels) ? modal.labels : [];

  detailBox.innerHTML = `
  <div class="card p-10px w-auto">
    <div class="card-header">
      <div class="icon-circle">
        <img src="" alt="">
      </div>
      <div class="priority-badge">${modal.priority}</div>
    </div>

    <div class="card-body">
      <h2 class="card-title">${modal.title}</h2>
      <p class="card-desc">${modal.description}</p>

      <div>
        <div class="tag-enhancement tag-enhancement-one">
          <span class="sparkle-icon lable-one">${labels[0] || ""}</span>
        </div>

        <div class="tag-enhancement tag-enhancement-two">
          <span class="sparkle-icon lable-two">${labels[1] || ""}</span>
        </div>
      </div>
    </div>

    <div class="card-footer">
      <p class="footer-text">${modal.id} ${modal.author}</p>
      <p class="footer-date">${modal.updatedAt}</p>
    </div>
    
  </div>

  `;

  const innerCard = detailBox.querySelector(".card");
  const priorityBadge = detailBox.querySelector(".priority-badge");
  const statusIcon = detailBox.querySelector(".icon-circle img");
  const lableOne = detailBox.querySelector(".lable-one");
  const lableTwo = detailBox.querySelector(".lable-two");
  const tagEnhancementOne = detailBox.querySelector(".tag-enhancement-one");
  const tagEnhancementTwo = detailBox.querySelector(".tag-enhancement-two");

  // Open / Close status
  if (modal.status === "open") {
    innerCard.classList.add("open-border");
    statusIcon.src = "assets/Open-Status.png";
  } else {
    innerCard.classList.add("close-border");
    statusIcon.src = "assets/Closed-Status.png";
  }

  // Label hide
  if (!lableOne.innerText) {
    tagEnhancementOne.classList.add("hidden");
  }

  if (!lableTwo.innerText) {
    tagEnhancementTwo.classList.add("hidden");
  }

  // Priority style
  if (modal.priority === "high") {
    priorityBadge.classList.add("priority_high");
  } else if (modal.priority === "medium") {
    priorityBadge.classList.add("priority_medium");
  } else if (modal.priority === "low") {
    priorityBadge.classList.add("priority_low");
  }

  document.getElementById("my_modal_1").showModal();
}

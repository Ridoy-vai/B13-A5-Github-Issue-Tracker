const allTab = [] 
const openTab = []
const closeTab = []
console.log(openTab.length)

const allIssueUrl = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
const dataBox = document.getElementById("data-Box");
const allData = document.getElementById("data-count")
const allStatus = document.getElementById("all-status")
const openStatus = document.getElementById("open-status")
const closeStatus = document.getElementById("close-status")
const search = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")

fetch(allIssueUrl).then(res => res.json()).then(datas => loadData(datas))

function loadData(datas) {
    datas.data.forEach(element => {
    allTab.push(element);
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
if(lableOne.innerText === "bug" ) {
  tagEnhancementOne.classList.add("tag-enhancement-bug");
}else if( lableTwo.innerText === "bug"){
  tagEnhancementTwo.classList.add("tag-enhancement-bug");
}
if(lableOne.innerText === "help wanted") {
  tagEnhancementOne.classList.add("tag-enhancement-help");
}
else if(lableTwo.innerText === "help wanted"){
  tagEnhancementTwo.classList.add("tag-enhancement-help")
}
if(lableOne.innerText === "enhancement"){
  tagEnhancementOne.classList.add("tag-enhancement-inhance")
}else if(lableTwo.innerText === "enhancement"){
  tagEnhancementTwo.classList.add("tag-enhancement-inhance")
}

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
    if(lableOne.innerText === "bug" ) {
      tagEnhancementOne.classList.add("tag-enhancement-bug");
    }else if( lableTwo.innerText === "bug"){
      tagEnhancementTwo.classList.add("tag-enhancement-bug");
    }
    if(lableOne.innerText === "help wanted") {
      tagEnhancementOne.classList.add("tag-enhancement-help");
    }
    else if(lableTwo.innerText === "help wanted"){
      tagEnhancementTwo.classList.add("tag-enhancement-help")
    }
    if(lableOne.innerText === "enhancement"){
      tagEnhancementOne.classList.add("tag-enhancement-inhance")
    }else if(lableTwo.innerText === "enhancement"){
      tagEnhancementTwo.classList.add("tag-enhancement-inhance")
    }
    if (element.status === "open") {innerCard.classList.add("open-border");statusIcon.src = "assets/Open-Status.png";} 
    else { innerCard.classList.add("close-border"); statusIcon.src = "assets/Closed-Status.png";}
    if (lableTwo.innerText  === undefined|| lableTwo.innerText === "") {tagEnhancementTwo.classList.add("hidden");}
    if(lableOne.innerText === undefined || lableOne.innerText === "") {tagEnhancementOne.classList.add("hidden");}
    if (element.priority === "high") priorityBadge.classList.add("priority_high");
    else if (element.priority === "medium") priorityBadge.classList.add("priority_medium");
    else if (element.priority === "low") priorityBadge.classList.add("priority_low");

  });

    allData.innerText = dataBox.children.length;

});


openStatus.addEventListener("click", () => {
  dataBox.innerHTML = "";

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

    if(lableOne.innerText === "bug" ) {
      tagEnhancementOne.classList.add("tag-enhancement-bug");
    }else if( lableTwo.innerText === "bug"){
      tagEnhancementTwo.classList.add("tag-enhancement-bug");
    }
    if(lableOne.innerText === "help wanted") {
      tagEnhancementOne.classList.add("tag-enhancement-help");
    }
    else if(lableTwo.innerText === "help wanted"){
      tagEnhancementTwo.classList.add("tag-enhancement-help")
    }
    if(lableOne.innerText === "enhancement"){
      tagEnhancementOne.classList.add("tag-enhancement-inhance")
    }else if(lableTwo.innerText === "enhancement"){
      tagEnhancementTwo.classList.add("tag-enhancement-inhance")
    }
    if (lableTwo.innerText  === undefined|| lableTwo.innerText === "") {tagEnhancementTwo.classList.add("hidden");}
    if(lableOne.innerText === undefined || lableOne.innerText === "") {tagEnhancementOne.classList.add("hidden");}
    if (openData.status === "open") {innerCard.classList.add("open-border");statusIcon.src = "assets/Open-Status.png";}
    else {innerCard.classList.add("close-border");statusIcon.src = "assets/Closed-Status.png";}
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

    if(lableOne.innerText === "bug" ) {
      tagEnhancementOne.classList.add("tag-enhancement-bug");
    }else if( lableTwo.innerText === "bug"){
      tagEnhancementTwo.classList.add("tag-enhancement-bug");
    }
    if(lableOne.innerText === "help wanted") {
      tagEnhancementOne.classList.add("tag-enhancement-help");
    }
    else if(lableTwo.innerText === "help wanted"){
      tagEnhancementTwo.classList.add("tag-enhancement-help")
    }
    if(lableOne.innerText === "enhancement"){
      tagEnhancementOne.classList.add("tag-enhancement-inhance")
    }else if(lableTwo.innerText === "enhancement"){
      tagEnhancementTwo.classList.add("tag-enhancement-inhance")
    }
    if (lableTwo.innerText  === undefined|| lableTwo.innerText === "") {tagEnhancementTwo.classList.add("hidden");}
    if(lableOne.innerText === undefined || lableOne.innerText === "") {tagEnhancementOne.classList.add("hidden");}
    if (closeData.status === "open") {innerCard.classList.add("open-border");statusIcon.src = "assets/Open-Status.png";} 
    else {innerCard.classList.add("close-border");statusIcon.src = "assets/Closed-Status.png";}
    if (closeData.priority === "high") {priorityBadge.classList.add("priority_high");}
    else if (closeData.priority === "medium"){ priorityBadge.classList.add("priority_medium");}
    else if (closeData.priority === "low") {priorityBadge.classList.add("priority_low");}
  });

  allData.innerText = closeTab.length;
});


searchButton.addEventListener("click", () =>{
    dataBox.innerHTML = ""; 
    const searchUrl = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${search.value}`;
    fetch(searchUrl).then(Promise => Promise.json()).then(searchData => loadSearchData(searchData.data));

  function loadSearchData(searchData){

    searchData.forEach(element => {
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

      if(lableOne.innerText === "bug" ) {
         tagEnhancementOne.classList.add("tag-enhancement-bug");
      }else if( lableTwo.innerText === "bug"){
        tagEnhancementTwo.classList.add("tag-enhancement-bug");
      }
      if(lableOne.innerText === "help wanted") {
        tagEnhancementOne.classList.add("tag-enhancement-help");
      }
      else if(lableTwo.innerText === "help wanted"){
        tagEnhancementTwo.classList.add("tag-enhancement-help")
      }
      if(lableOne.innerText === "enhancement"){
        tagEnhancementOne.classList.add("tag-enhancement-inhance")
      }else if(lableTwo.innerText === "enhancement"){
        tagEnhancementTwo.classList.add("tag-enhancement-inhance")
      }
      // Open/Close status
      if (element.status === "open") {innerCard.classList.add("open-border");statusIcon.src = "assets/Open-Status.png";} 
      else {innerCard.classList.add("close-border");statusIcon.src = "assets/Closed-Status.png";}
      if (lableTwo.innerText  === undefined|| lableTwo.innerText === "") {tagEnhancementTwo.classList.add("hidden");}    
      if(lableOne.innerText === undefined || lableOne.innerText === "") {tagEnhancementOne.classList.add("hidden");}    
      if (element.priority === "high") priorityBadge.classList.add("priority_high");
      else if (element.priority === "medium") priorityBadge.classList.add("priority_medium");
      else if (element.priority === "low") priorityBadge.classList.add("priority_low");
    
      allData.innerText = dataBox.children.length;      
      search.value = ""
  
    });

  }

})


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
  
  // Date formatting
  const formattedDate = modal.updatedAt ? new Date(modal.updatedAt).toLocaleDateString('en-GB') : "22/02/2026";

  detailBox.innerHTML = `
      <div>
        <!-- Title -->
        <h1 class="text-3xl font-extrabold text-[#1E293B] mb-3">${modal.title}</h1>
        
        <!-- Status and Meta Info -->
        <div class="flex items-center gap-2 text-gray-400 text-sm mb-6">
          <span class="bg-[#00BA88] text-white px-3 py-1 rounded-full text-xs font-bold capitalize">
            ${modal.status === 'open' ? 'Opened' : modal.status}
          </span>
          <span>•</span>
          <span>Opened by <span class="text-gray-500 font-medium">${modal.author}</span></span>
          <span>•</span>
          <span>${formattedDate}</span>
        </div>

        <!-- Labels/Tags -->
        <div class="flex gap-3 mb-8">
           ${modal.labels.map(label => {
             let styleClass = "";
             let icon = "";
             if(label.toLowerCase() === 'bug') {
                styleClass = "bg-[#FEECEC] text-[#EF4444] border-[#FECACA]";
                icon = "🐞";
             } else if(label.toLowerCase() === 'help wanted') {
                styleClass = "bg-[#FFF6D1] text-[#F59E0B] border-[#FFF8DB]";
                icon = "🟡";
             } else {
                styleClass = "bg-[#DEFCE8] text-[#00A96E] border-[#BBF7D0]";
                icon = "✨";
             }
             return `<span class="flex items-center gap-1 border px-3 py-1 rounded-full text-xs font-bold uppercase ${styleClass}">
                <span>${icon}</span> ${label}
             </span>`;
           }).join('')}
        </div>

        <!-- Description -->
        <p class="text-[#64748B] text-lg leading-relaxed mb-10">
          ${modal.description}
        </p>

        <!-- Assignee and Priority Box -->
        <div class="bg-[#F8FAFC] rounded-2xl p-6 flex justify-between items-center mb-4">
          <div>
            <p class="text-gray-400 text-sm mb-1">Assignee:</p>
            <p class="text-[#1E293B] font-bold text-lg">${modal.author}</p>
          </div>
          <div class="text-left pr-[150px]">
            <p class="text-gray-400 text-sm mb-1">Priority:</p>
            <span class="priority-pill px-6 py-2 rounded-full text-white font-bold text-xs uppercase ${getPriorityClass(modal.priority)}">
              ${modal.priority}
            </span>
          </div>
        </div>
      </div>
    `;

  document.getElementById("my_modal_5").showModal();
}

// Helper function for priority colors
function getPriorityClass(priority) {
  if (priority.toLowerCase() === 'high') return 'bg-[#EF4444]';
  if (priority.toLowerCase() === 'medium') return 'bg-[#F59E0B]';
  return 'bg-[#9CA3AF]';
}

 
  
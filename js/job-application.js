// interview and rejected array
let interviewList = [];
let rejectedList = [];

let currentStatus = "all";

// header count select
let totalCount = document.getElementById("totalCount");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

// filtered section select
const filteredSection = document.getElementById("filtered-section");

// job cards select
const jobCardsSection = document.getElementById("job-cards-section");

// no job card select
const noJobCard = document.getElementById("no-job-card");

// toggle buttons select
const allToggleBtn = document.getElementById("all-toggle-btn");
const interviewToggleBtn = document.getElementById("interview-toggle-btn");
const rejectedToggleBtn = document.getElementById("rejected-toggle-btn");

// available job counts select
const availableJobCounts = document.getElementById("available-job-counts");

// main section select
const main = document.getElementById("main");

// calculate the counts
function calculateCount() {
  totalCount.innerText = jobCardsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// available job count for all
// available jobs counts
const availableCount = document.createElement("p");
availableCount.className = "text-[#64748B] text-base font-medium";
availableCount.innerHTML = `${jobCardsSection.children.length} jobs`;
availableJobCounts.appendChild(availableCount);

// toggle button
function toggleBtn(id) {
  // remove bluish color from all the id
  allToggleBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewToggleBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedToggleBtn.classList.remove("bg-[#3B82F6]", "text-white");

  // add grayish color to all the id
  allToggleBtn.classList.add("bg-white", "text-[#64748B]", "border-[#F1F2F4]");
  interviewToggleBtn.classList.add(
    "bg-white",
    "text-[#64748B]",
    "border-[#F1F2F4]",
  );
  rejectedToggleBtn.classList.add(
    "bg-white",
    "text-[#64748B]",
    "border-[#F1F2F4]",
  );

  // add bluish color and remove grayish color from the selected id
  const selected = document.getElementById(id);
  selected.classList.remove("bg-white", "text-[#64748B]", "border-[#F1F2F4]");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  currentStatus = id;

  // show card for specific tab
  if (id == "all-toggle-btn") {
    jobCardsSection.classList.remove("hidden");
    noJobCard.classList.add("hidden");
    filteredSection.classList.add("hidden");

    // available jobs counts
    availableCount.className = "text-[#64748B] text-base font-medium";
    availableCount.innerHTML = `${jobCardsSection.children.length} jobs`;
    availableJobCounts.appendChild(availableCount);
  } else if (id == "interview-toggle-btn") {
    jobCardsSection.classList.add("hidden");
    noJobCard.classList.remove("hidden");
    filteredSection.classList.remove("hidden");

    // available jobs counts
    availableCount.className = "text-[#64748B] text-base font-medium";
    availableCount.innerHTML = `${interviewList.length} of ${jobCardsSection.children.length} jobs`;
    availableJobCounts.appendChild(availableCount);

    renderInterview();
  } else if (id == "rejected-toggle-btn") {
    jobCardsSection.classList.add("hidden");
    noJobCard.classList.remove("hidden");
    filteredSection.classList.remove("hidden");

    // available jobs counts
    availableCount.className = "text-[#64748B] text-base font-medium";
    availableCount.innerHTML = `${rejectedList.length} of ${jobCardsSection.children.length} jobs`;
    availableJobCounts.appendChild(availableCount);

    renderRejected();
  }
}

// add event listener to main section
// interview button
main.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobPosition = parentNode.querySelector(".job-position").innerText;
    const jobLocation = parentNode.querySelector(".job-location").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobDesc = parentNode.querySelector(".job-desc").innerText;

    parentNode.querySelector(".job-status").innerText = "Interview";

    const cardInfo = {
      companyName,
      jobPosition,
      jobLocation,
      jobStatus: "Interview",
      jobDesc,
    };

    const jobExist = interviewList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "rejected-toggle-btn") {
      renderRejected();
    }
    calculateCount();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobPosition = parentNode.querySelector(".job-position").innerText;
    const jobLocation = parentNode.querySelector(".job-location").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobDesc = parentNode.querySelector(".job-desc").innerText;

    parentNode.querySelector(".job-status").innerText = "Rejected";

    const cardInfo = {
      companyName,
      jobPosition,
      jobLocation,
      jobStatus: "Rejected",
      jobDesc,
    };

    const jobExist = rejectedList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "interview-toggle-btn") {
      renderInterview();
    }

    calculateCount();
  }
});

// render interview
function renderInterview() {
  filteredSection.innerText = "";

  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className = "job-cards space-y-4 pb-4";
    div.innerHTML = `
    <div class="card bg-white shadow-sm">
          <div class="flex justify-between">
            <div class="card-body space-y-4">
              <div>
                <h2
                  class="company-name card-title text-[#002C5C] text-lg font-semibold pb-2"
                >
                  ${interview.companyName}
                </h2>
                <p class="job-position text-[#64748B] text-base">${interview.jobPosition}</p>
              </div>
              <p class="job-location text-[#64748B] text-sm">
                ${interview.jobLocation}
              </p>
              <button
                class="job-status text-[#002C5C] bg-[#EEF4FF] text-sm font-medium rounded-sm px-4 py-2 cursor-pointer w-[12%]"
              >
                ${interview.jobStatus}
              </button>
              <p class="job-desc text-[#323B49] text-sm leading-5">
                ${interview.jobDesc}
              </p>
              <div class="flex gap-2">
                <button
                  class="interview-btn text-[#10B981] bg-white border border-[#10B981] text-sm font-semibold rounded-sm px-4 py-2 cursor-pointer hover:bg-[#10B981] hover:text-white transition-all duration-200"
                >
                  INTERVIEW
                </button>
                <button
                  class="rejected-btn text-[#EF4444] bg-white border border-[#EF4444] text-sm font-semibold rounded-sm px-4 py-2 cursor-pointer hover:bg-[#EF4444] hover:text-white transition-all duration-200"
                >
                  REJECTED
                </button>
              </div>
            </div>
            <div>
              <button
                class="cursor-pointer border border-[#64748b46] text-[#64748B] w-8 h-8 rounded-full mr-6 mt-8"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>    
    `;

    filteredSection.appendChild(div);
  }
}

// render reject
function renderRejected() {
  filteredSection.innerText = "";

  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.className = "job-cards space-y-4 pb-4";
    div.innerHTML = `
    <div class="card bg-white shadow-sm">
          <div class="flex justify-between">
            <div class="card-body space-y-4">
              <div>
                <h2
                  class="company-name card-title text-[#002C5C] text-lg font-semibold pb-2"
                >
                  ${rejected.companyName}
                </h2>
                <p class="job-position text-[#64748B] text-base">${rejected.jobPosition}</p>
              </div>
              <p class="job-location text-[#64748B] text-sm">
                ${rejected.jobLocation}
              </p>
              <button
                class="job-status text-[#002C5C] bg-[#EEF4FF] text-sm font-medium rounded-sm px-4 py-2 cursor-pointer w-[12%]"
              >
                ${rejected.jobStatus}
              </button>
              <p class="job-desc text-[#323B49] text-sm leading-5">
                ${rejected.jobDesc}
              </p>
              <div class="flex gap-2">
                <button
                  class="interview-btn text-[#10B981] bg-white border border-[#10B981] text-sm font-semibold rounded-sm px-4 py-2 cursor-pointer hover:bg-[#10B981] hover:text-white transition-all duration-200"
                >
                  INTERVIEW
                </button>
                <button
                  class="rejected-btn text-[#EF4444] bg-white border border-[#EF4444] text-sm font-semibold rounded-sm px-4 py-2 cursor-pointer hover:bg-[#EF4444] hover:text-white transition-all duration-200"
                >
                  REJECTED
                </button>
              </div>
            </div>
            <div>
              <button
                class="cursor-pointer border border-[#64748b46] text-[#64748B] w-8 h-8 rounded-full mr-6 mt-8"
              >
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>    
    `;
    filteredSection.appendChild(div);
  }
}

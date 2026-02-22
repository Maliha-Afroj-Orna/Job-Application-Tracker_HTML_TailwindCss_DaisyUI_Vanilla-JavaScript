
// header count select
let totalCount = document.getElementById('totalCount');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// job cards select
const jobCardsSection = document.getElementById('job-cards-section');

// no job card select
const noJobCard = document.getElementById('no-job-card');

// toggle buttons select
const allToggleBtn = document.getElementById('all-toggle-btn');
const interviewToggleBtn = document.getElementById('interview-toggle-btn');
const rejectedToggleBtn = document.getElementById('rejected-toggle-btn');

// main section select
const main = document.getElementById('main');


// calculate the counts
function calculateCount() {
    totalCount.innerText = jobCardsSection.children.length;
}
calculateCount();

// toggle button
function toggleBtn(id) {
    // remove bluish color from all the id
    allToggleBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewToggleBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedToggleBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    // add grayish color to all the id
    allToggleBtn.classList.add('bg-white', 'text-[#64748B]', 'border-[#F1F2F4]');
    interviewToggleBtn.classList.add('bg-white', 'text-[#64748B]', 'border-[#F1F2F4]');
    rejectedToggleBtn.classList.add('bg-white', 'text-[#64748B]', 'border-[#F1F2F4]');

    // add bluish color and remove grayish color from the selected id
    const selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-[#64748B]', 'border-[#F1F2F4]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');

    // show card for specific tab
    if (id == 'all-toggle-btn') {
        jobCardsSection.classList.remove('hidden');
        noJobCard.classList.add('hidden');
    }
    else if(id == 'interview-toggle-btn') {
        jobCardsSection.classList.add('hidden');
        noJobCard.classList.remove('hidden');
    }
    else if(id == 'rejected-toggle-btn') {
        jobCardsSection.classList.add('hidden');
        noJobCard.classList.remove('hidden');
    }
}

// add event listener to main section
// 
main.addEventListener('click', function(event) {
    console.log(event.target.parentNode);
})
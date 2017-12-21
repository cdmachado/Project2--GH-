
const ulList = document.querySelector('ul');
const studentList2 = ulList.querySelectorAll('li');
const studentList = Array.from(studentList2);
let numPage;
const parent1 = document.querySelector('div.pagination');
let matchedList = [];



// Hides the list of students
function hiddeItems() {
  for ( i = 0; i < studentList.length; i++ ) {
      studentList[i].style.display = 'none';
  }
}

// Creates the elements for the dynamic Search of students
function searchElements() {
  let parentDiv = document.querySelector('div.page-header');
  let searchDiv = document.createElement('div');
  parentDiv.appendChild(searchDiv);
  searchDiv.className = 'student-search';
  let searchInp = document.createElement('input');
  searchInp.type = 'text';
  searchDiv.appendChild(searchInp);
  searchInp.placeholder = 'Search for students...';
  let searchBut = document.createElement('button');
  searchBut.className = 'search-button';
  searchBut.innerHTML = 'Search';
  searchDiv.appendChild(searchBut);

}

//Displays the list of students correspoding
// to the page number that was clicked
function showPage(numPage, list2) {
  hiddeItems();
  let numPage10 = 10*numPage;
  for ( i = 0; i < list2.length; i++) {
    let index = list2[i];
    let indexStu = list2.indexOf(index);
    if (indexStu >= numPage10-10 && indexStu < numPage10) {
        list2[i].style.display = 'block';
    }
  }
}

// Creates the pagination links depending
// on the number of students on the list
function appendPageLinks(stuList) {
  let nPages = Math.ceil(stuList.length/10);
  const ulCreated = document.createElement('ul');
  parent1.appendChild(ulCreated);
  for (i = 0; i < nPages; i++) {
    if (i < nPages) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.textContent = i + 1;
      ulCreated.appendChild(li);
      li.appendChild(a);
      $('a').attr('href', '#');
    }
  }
  let clicked = ulCreated.getElementsByTagName('a')[0];
  clicked.className = 'active';
}

//Searches between the students list for matches,
//calls the ShowPage function with the matched students,
//and calls the appendPageLinks function to create the
//pagination links
function searchList() {
  debugger;
  matchedList = [];
  let input = document.querySelector('input');
  let userSearch = input.value;
  if (userSearch == '') {
    kickStart();
  }
  let numUl = document.getElementsByTagName('ul');
  if (numUl.length > 1) {
    const remov = parent1.querySelector('ul');
    parent1.removeChild(remov);
  }
  for (i =0; i < studentList.length; i++) {
    let stuLi = studentList[i];
    let stuDiv = stuLi.querySelector('div');
    let stuH3 = stuDiv.querySelector('h3');
    let stuSpan = stuDiv.querySelector('span');
    let name = stuH3.innerHTML;
    let email = stuSpan.innerHTML;
    if (name.includes(userSearch) == true || email.includes(userSearch) == true) {
      matchedList.push(studentList[i]);
    }
  }
  if ( matchedList == '') {
      alert("No student's found");
  } else if ( matchedList.length > 10 ) {
    if (numUl.length == 1) {
      appendPageLinks(matchedList);
    }
  }
  showPage(1, matchedList);
  input.value = '';
}

//Starts pagination with the first 10 students
//from the list
function kickStart() {
  hiddeItems();
  for ( i = 0; i < 10; i++) {
    studentList[i].style.display = 'block';
  }
  let indexSearchDiv = document.getElementsByTagName('div')[2];
  if (indexSearchDiv.className !== 'student-search') {
    searchElements();
  }
  appendPageLinks(studentList);
}

kickStart();

$('.pagination').on('click', 'a', (event) => {
  $('.pagination a').removeClass('active');
  event.target.className = 'active';
  numPage = event.target.innerHTML;
  showPage(numPage, studentList)
});

$('button').on('click', () => {
    searchList();
});

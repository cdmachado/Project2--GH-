
const ulList = document.querySelector('ul');
const studentList2 = ulList.querySelectorAll('li');
const studentList = Array.from(studentList2);
let numPage;
const parent1 = document.querySelector('div.pagination');
let matchedList = [];




function hiddeItems() {
  for ( i = 0; i < studentList.length; i++ ) {
      studentList[i].style.display = 'none';
  }
}

function searchElements() {
  let searchBut = document.createElement('button');
  searchBut.className = 'student-search';
  searchBut.innerHTML = 'Search';
  let parentDiv = document.querySelector('div.page-header');
  parentDiv.appendChild(searchBut);
  let searchInp = document.createElement('input');
  searchInp.type = 'text';
  searchInp.className = 'student-search';
  parentDiv.appendChild(searchInp);
}

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

function kickStart() {
  hiddeItems();
  for ( i = 0; i < 10; i++) {
    studentList[i].style.display = 'block';
  }
  searchElements();

  appendPageLinks(studentList);
}

function appendPageLinks(stuList) {
  let nPages = Math.ceil(stuList.length/10);
  const ulCreated = document.createElement('ul');
  parent1.appendChild(ulCreated);

  for (i = 0; i < nPages; i++) {
    if (i < nPages) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      $('a').attr('href', '#');
      a.textContent = i + 1;
      ulCreated.appendChild(li);
      li.appendChild(a);

    }

  }
  let clicked = ulCreated.getElementsByTagName('a')[0];
  clicked.className = 'active';
}

function searchList() {
  matchedList = [];
  let input = document.querySelector('input');
  let userSearch = input.value;
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

    appendPageLinks(matchedList);
  }

  showPage(1, matchedList);
}


kickStart();

$('.pagination a').on('click', (event) => {
  $('.pagination a').removeClass('active');
  event.target.className = 'active';
  numPage = event.target.innerHTML;
  showPage(numPage, studentList)
});

$('button').on('click', () => {
    debugger;
    searchList();
});

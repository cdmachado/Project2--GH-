
const ulList = document.querySelector('ul');
const studentList2 = ulList.querySelectorAll('li');
const studentList = Array.from(studentList2);
let numPage;


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

function showPage(numPage, studentList) {
  hiddeItems();
  let numPage10 = 10*numPage;
  for ( i = 0; i < studentList.length; i++) {
    let index = studentList[i];
    let indexStu = studentList.indexOf(index);
    if (indexStu >= numPage10-10 && indexStu < numPage10) {
        studentList[i].style.display = 'block';
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

function appendPageLinks(studentList) {
  let nPages = Math.ceil(studentList.length/10);
  const parent1 = document.querySelector('div.pagination');
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
  let userSearch = input.value;
}

debugger;
kickStart();

$('.pagination a').on('click', (event) => {
  $('.pagination a').removeClass('active');
  event.target.className = 'active';
  numPage = event.target.innerHTML;
  showPage(numPage, studentList)
});

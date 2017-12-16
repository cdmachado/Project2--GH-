
const studentList = document.getElementsByClassName('.student-item cf');
const newList;



for ( let i = 0; i < studentList.length; i++) {
  if ( studentList[i] == studentList.index) {

  }
}


$('.pagination').on('click', function showPage(event) {
    studentList.display = 'none';
    for (let i = 0; i < studentList.length; i++ ) {
        if ( studentList[i] == event.target[i] ) {
          newList += studentLis[i]
        }
    }

 });

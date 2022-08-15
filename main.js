

function fetchCourses() {
new Promise((resolve, reject) => { 
    fetch('https://cec33b7f-2f49-4905-a61b-2e272125acf0.mock.pstmn.io//api/WEB Course/Internship_slide/project_phase1')
   
    .then((response) => response.json())

    .then((jsonData) => resolve(jsonData))
    .catch((error) => reject(error));
       
    })
}

function createCourseCardElement(course) {
	const IMG = course.image;
	const TITLE = course.title;
	const AUTHOR = course.author;
	const COURSE_LIST = document.createElement('div');
	COURSE_LIST.classList.add('course-list');
	COURSE_LIST.innerHTML = `
      <img class="course-img" src="${IMG}" />
      <span class="course-title">${TITLE}</span>
      <span class="course-subtitle">${AUTHOR}</span>
  `;
	return COURSE_LIST;
}


document.addEventListener('click', function (event) {
	
});






// let courseData ;
// let tab = 'Python';

// fetch('https://cec33b7f-2f49-4905-a61b-2e272125acf0.mock.pstmn.io//api/WEB Course/Internship_slide/project_phase1')
// .then(Response => Response.json())
// .then(data => {
//     courseData=data;
//      load_courses(tab);
// })



﻿function Course(title,instructor,image){
    this.title=title;
    this.instructor=instructor;
    this.image=image;
    
    
}
// UI ctor
function UI(){
}
UI.prototype.addCourseToList=function(course){
    const list= document.getElementById('course-list');
    console.log(list);
    
    console.log(course.image);

    let html = `
     <tr>
        <td><img src="img/${course.image}"></td>
        <td>${course.title}</td>
        <td>${course.instructor}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
    </tr>
     `;
    
    console.log(html);
    list.innerHTML+=html;
    
}
UI.prototype.clearControls=function(){
    const title=document.getElementById("title").value="";
    const instructor=document.getElementById("instructor").value="";
    const image=document.getElementById("image").value="";
}

UI.prototype.deleteCourse=function(item){
    if(item.classList.contains('delete')){
        item.parentElement.parentElement.remove();
    }
}

document.getElementById("new-course").addEventListener("submit", function(e){
    
    const title=document.getElementById("title").value;
    const instructor=document.getElementById("instructor").value;
    const image=document.getElementById("image").value;
    console.log(`${title}${instructor}${image}`);
    // create course object
    const course= new Course(title,instructor,image);
    console.log(course);
    // create UI
    const ui= new UI();
    
    console.log(ui);
    // add course to list
    ui.addCourseToList(course);
    
    // clear controls
    ui.clearControls();
    e.preventDefault();
});


document.getElementById('course-list').addEventListener('click',function(e){
    console.log(e.target);
    
    const ui= new UI();
    
    ui.deleteCourse(e.target);
    
})
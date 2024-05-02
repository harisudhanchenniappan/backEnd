1. To create a mentor, the end point is   
'/createMentor' 

the schema is:          
mentorName:{type:String},     
students:{type:Array}        

2. To create a mentor, the end point is   
'/createStudent'    

the schema is:          
    studentName:{type:String},   
    mentor:{type:String},      
    previousMentor:{type:String}            

3. To list all the mentor,the end point is   
'/mentors'      
     
4. To list all the students,the end point is   
'/students'       
   
5. To add students to a mentor, the end point is '/addStudents'   
the body should contain:      
{      
    name:'mentor-name',      
    students:[array of students]         
}      
   
6. To add mentor to a student, the end point is '/addMentor'      
the body should contain:      
{   
    name:'student-name',   
    mentor:'mentor-name'        
}   

7. To list all students of a particular mentor, the end point is '/studentsOfMentor'   
the body should contain:   
{   
    name:'mentor-name'   
}
   
8. To get the previous mentor of a student, the endpoint is '/previousMentor'   
the body should contain:   
{   
    name:'student-name'   
}

   

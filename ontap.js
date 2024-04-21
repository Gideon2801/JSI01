//Bài 1
const student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03", "mindX 05"]
    }
    ]
    
// Lấy ra được tuổi của bạn có tên là NVB
// console.log(student[1].age);

// 1.a
// let findAge = prompt("Độ tuổi cần tìm?")

// let findStudent = []
// for (let index = 0; index < student.length; index++) {
//     const HS = student[index];
    
//     if (findAge == HS.age) findStudent.push(HS)  
// }

// findStudent.length == 0 ? alert("Không có học sinh trong độ tuổi cần tìm") : console.log(findStudent);


// 1.b
// let findCourse = prompt('Khóa học cần tìm?')

// let studentName = []
// for (let index = 0; index < student.length; index++) {
//     const HS = student[index];

//     for (let i = 0; i < HS.course.length; i++){
//         let item = HS.course[i]

//         if (findCourse == item) studentName.push(HS.name) 
//     }
// }

// console.log(studentName);


// ES6

// 1.a
// let findAge = prompt("Độ tuổi cần tìm?")

// let findStudent = student.filter(item => findAge == item.age)

// findStudent.length == 0 ? alert("Không có học sinh trong độ tuổi cần tìm") : console.log(findStudent);




// 1.b
let findCourse = prompt('Khóa học cần tìm?')

let studentName = student.filter(HS => {
    let khoaHoc = HS.course.filter(item => item == findCourse)

    khoaHoc.length == 0 ? false : true

})

console.log(studentName.map(hs => hs.name));
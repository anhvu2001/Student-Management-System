function loadClasses(obj) {
    fetch('/api/update', {
        method: 'put',
        body: JSON.stringify({
            'name': obj.value.slice(9, 11)
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        let lop = document.getElementById('lop-hoc')
        lop.innerHTML = ''
        for (let i = 0; i < data.size; i++) {
            lop.innerHTML += `
                <option>[${data.list[i+1].id}] ${data.list[i+1].name}</option>
            `
        }
    })
}


window.onload = function() {
    fetch ('/api/load-students', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        let list = data.list
        let size = data.size

        let students = document.getElementById('students')

        for (let i = 0; i < size; i++) {
            students.innerHTML += `
                <option>[${list[i+1].id}] Tên HS: ${list[i+1].name}, Ngày sinh: ${list[i+1].day_of_birth}</option>
            `
        }
    })

    fetch('/api/update-class', {
        method: 'put',
        body: JSON.stringify({
            'name': '10'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        let lop = document.getElementById('lop-hoc')
        lop.innerHTML = ''
        for (let i = 0; i < data.size; i++) {
            lop.innerHTML += `
                <option>[${data.list[i+1].id}] ${data.list[i+1].name}</option>
            `
        }
    })
}

function addStudentToClass() {
    fetch('/api/add-student-to-class', {
        method: 'post',
        body: JSON.stringify({
            'student_id': parseInt(document.getElementById('students').value.slice(1,2)),
            'class_id': parseInt(document.getElementById('lop-hoc').value.slice(1,2))
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        let msg = document.getElementById('msg')
        msg.innerHTML = data.msg
    })
}


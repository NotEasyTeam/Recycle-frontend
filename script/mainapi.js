/* POST 요청 ajax 코드 */
function uploadRecycle() {
    // 고유 id let 함수로 정의
    let today = new Date().toISOString()
    let image = $('#chooseFile')[0].files[0]
    let form_data = new FormData()


    form_data.append("image_give", image)
    form_data.append("date_give", today)

    $.ajax({
        type: "POST",
        url: "/upload",
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
    })
}




function getuserpaper() {
    $.ajax({
        type: 'GET',
        url: '/getuserpaper',
        data: {},
        success: function (response) {
            let rows = response['user_paper']
            for (let i = 0; i < rows.length; i++) {
                let image = rows[i]['image']
                let temp_html = `<div class="griditem" > 
                                    <img src = "${image}">                    
                                 </div>`
                $('#papergrid').append(temp_html)
            }
        }
    })
}

function getusermetal() {
    $.ajax({
        type: 'GET',
        url: '/getusermetal',
        data: {},
        success: function (response) {
            let rows = response['user_metal']
            for (let i = 0; i < rows.length; i++) {
                let image = rows[i]['image']
                let temp_html = `<div class="griditem" > 
                                    <img src = "${image}">                    
                                 </div>`
                $('#metalgrid').append(temp_html)
            }
        }
    })
}

function getuserplastic() {
    $.ajax({
        type: 'GET',
        url: '/getuserplastic',
        data: {},
        success: function (response) {
            let rows = response['user_plastic']
            for (let i = 0; i < rows.length; i++) {
                let image = rows[i]['image']
                let temp_html = `<div class="griditem" > 
                                    <img src = "${image}">                    
                                 </div>`
                $('#plasticgrid').append(temp_html)
            }
        }
    })
}

function getuserglass() {
    $.ajax({
        type: 'GET',
        url: '/getuserglass',
        data: {},
        success: function (response) {
            let rows = response['user_glass']
            for (let i = 0; i < rows.length; i++) {
                let image = rows[i]['image']
                let temp_html = `<div class="griditem" > 
                                    <img src = "${image}">                    
                                 </div>`
                $('#glassgrid').append(temp_html)
            }
        }
    })
}


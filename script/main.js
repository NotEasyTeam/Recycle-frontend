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
    }
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
    }
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
    }
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
    }
}


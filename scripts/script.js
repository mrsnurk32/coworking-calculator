let locationclicked = false;
let staffclicked = false;


const locationClick = (input_field) => {

    if (locationclicked === false){

        let location_wrapper = document.getElementById('location-querry');

        input_field.style.background = '#F0F0F0';

        let location_label = location_wrapper.querySelector('.location-label');
        location_label.style.top = '0';

        let choices = location_wrapper.querySelector('.choices');
        choices.style.transform = 'translateY(-50px)';
        
        
        locationclicked = true;
    } else {
        return;
    }
}


function picker(e){

    let field = document.getElementById('location_field');
    field.value = e.innerHTML

    let result_location = document.querySelector('.location-result-name')
    result_location.innerHTML = e.innerHTML


    let form_wrapper = document.querySelector('.calc-form');
    form_wrapper.style.transform = 'translateX(-100vw)'


}

const staffClick = (input_field) => {

    if (staffclicked === false){

        let location_wrapper = document.getElementById('staff-querry');

        input_field.style.background = '#F0F0F0';

        let location_label = location_wrapper.querySelector('.staff-label');
        location_label.style.top = '0';

        let choices = location_wrapper.querySelector('.choices');
        choices.style.transform = 'translateY(-50px)';

                
        // locationclicked = true;
    } else {
        return;
    }
}


function staffpicker(e){

    let field = document.getElementById('staff_field');
    field.value = e.innerHTML
    evaluation()
    let form_wrapper = document.querySelector('.calc-form');
    form_wrapper.style.transform = 'translateX(-200vw)'

    let result_location = document.querySelector('.staff-amount')
    result_location.innerHTML = e.innerHTML

}

document.getElementById('staff_field').addEventListener('keyup',function(){

    let btn = document.querySelector('.staff-next')
    btn.style.display = 'block'
    
    let field = document.getElementById('staff_field')
    if (field.value === ''){
        btn.style.display='none'
    }

})

function nextSlide(){
    evaluation()
    let form_wrapper = document.querySelector('.calc-form');
    form_wrapper.style.transform = 'translateX(-200vw)'
    let result_location = document.querySelector('.staff-amount')
    result_location.innerHTML = staff_field.value

}



class Calculator{
    constructor(location,employees){
        this.location = location;
        this.employees = employees;
        this.price_list = {
            'Охотный Ряд':300,
            'Тульская':450,
        }
    }

    office_price(){
        let total_p = this.employees * 4 * this.price_list[this.location]
        total_price.innerHTML = total_p + ' Р.'
        unit_price.innerHTML = this.price_list[this.location] + ' Р.'
    }

    office_area(){
        let total_a = this.employees * 4;
        total_area.innerHTML = total_a + ' М2'
    }

    table(){

        let rows = []
        let counter = 1
        let total_price_annual = 0;
        for (let i = 0; i < 4;i++){

            let annual_price = (this.employees * 4 * this.price_list[this.location] * 12) * ( 1.014 ** i)
            total_price_annual += annual_price
            
            rows.push({'Год':counter,'Стоимость':Math.round(annual_price * 100)/100});
            counter++;

        }
        rows.push({'Год':"Итого:",'Стоимость':Math.round(total_price_annual * 100)/100});
        console.log(rows)
        let thead = price_table.createTHead();
        let row = thead.insertRow();


        let data = Object.keys(rows[0]);

        for (let key of data) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);
            th.appendChild(text);
            row.appendChild(th);
        }


        for (let element of rows) {
            let row = price_table.insertRow();
            for (let key in element) {
                let cell = row.insertCell();
                let text = document.createTextNode(element[key]);
            cell.appendChild(text);
            }
        
        }

    }


}



function evaluation(){
    let location = location_field.value
    let employees = staff_field.value
    var Result = new Calculator(location, employees)

    Result.office_area()    
    Result.office_price()
    Result.table()
}

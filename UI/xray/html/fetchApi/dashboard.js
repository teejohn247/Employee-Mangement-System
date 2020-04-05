const is_loggedin = localStorage.getItem('is_loggedin');
const profile_picture = document.querySelector('.user-profile');
const prof = document.querySelector('.user_name');
const department = document.querySelector('.department');
const clock_in_time = document.querySelector('.clock-in');
const top_nav = document.querySelector('.top_nav');
const top_im = document.querySelector('.top_im');
const top_nam = document.querySelector('.top_nam');






// const token = localStorage.getItem('authToken');


window.onload = () => {
  if (!is_loggedin) {
    window.location.href = '../html/userSignin.html';
    }   
        const token = JSON.parse(localStorage.getItem('authToken'));
    fetch(
     "https://ems-employee-management-system.herokuapp.com/api/v1/history", {
      method: 'GET',
      headers: {
          "Authorization": token
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const div = document.createElement('div');
        const profile = localStorage.getItem('avatar');
        const h3 = document.createElement('h3');
        const clock_in_h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const top_img = document.createElement('img');
        const profile_name = localStorage.getItem('name');
        const depart = localStorage.getItem('department');
        const clock_in = localStorage.getItem('clock_in_time');

        // top_img.innerHTML = `<img src="${profile}" class="img-fluid rounded mr-3" alt="user"
        // style="width:100%">`
        top_im.setAttribute('src', `${profile}`);
        top_nam.textContent = `${profile_name}` ;


        // profile_picture.appendChild('img');
        div.innerHTML =`<div class="mySlides2">
        <img src="${profile}" alt="Nature" class="responsive" style="display:flex; justify-content:'center';
        margin-left:'auto'; margin-right:'auto'; border-radius:100px;">
        </div>`
        h4.innerHTML = `<b>${profile_name}</b>`;
        h3.innerHTML = `${depart}`;
        clock_in_h3.innerHTML = `${clock_in}`;
        // console.log(`${clock_in}`.toLocaleDateString())

        prof.appendChild(h4);
        profile_picture.appendChild(div);
        department.appendChild(h3);
        clock_in_time.appendChild(clock_in_h3);

        if (data.length > 0) {
            data.map((table) => {
            table.clock_out_time == undefined || 'undefined' ? "Not Available":clock_out_time;
            console.log(table.clock_out_time)

            const {
              name,email,mac_address,department,date,clock_in_time, clock_out_time
            } = table;
            const tr = document.querySelector('#history');
            const table_row = document.createElement('tr')
            const user_name =document.createElement('td');
            const user_email =document.createElement('td');
            const user_mac =document.createElement('td');
            const user_department =document.createElement('td');
            const user_date=document.createElement('td');
            const user_clock_in=document.createElement('td');
            const user_clock_out=document.createElement('td');

            console.log(name);
            user_name.innerHTML= name;
            user_email.innerHTML= email;
            user_mac.innerHTML= mac_address;
            user_department.innerHTML= department;
            user_date.innerHTML= date;
            user_clock_in.innerHTML= clock_in_time;
            user_clock_out.innerHTML = clock_out_time == undefined || 'undefined' ? '------':clock_out_time;
            

            table_row.append(user_email,user_mac, user_department, user_clock_in, user_clock_out, user_date);
            tr.appendChild(table_row)
        })
    }

            })
        .catch(error => console.log(error.message));
    event.preventDefault();
}


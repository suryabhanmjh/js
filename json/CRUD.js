let fetchData = async () => {
    let url = "http://localhost:3000/user";
  
    let res = await fetch(url, { method: "GET" });
    let data = await res.json();
  
    //data jo db.json pr h usko table format me front screen pr show krne k liye use array of object => map
    let dataShow = document.querySelector("#datashow");
  
    data.map((e) => {
      dataShow.innerHTML += `
      <tr>
        <td>${e.Name}</td>
        <td>${e.Age}</td>
        <td>${e.Check_in}</td>
        <td>${e.Check_out}</td>
        <td>${e.Person}</td>
        <td>${e.City}</td>
        <td>${e.Price * e.Person}</td>
        <td><button onclick="Del('${e.id}')">Delete</button></td>
        <td><button onclick="Formopen('${e.id}')">Update</button></td>
      </tr>
    `;
    
    });
  };
  
  // person se price multiply hoga jo hamne price bhra h niche
  
  fetchData();
  
  //How to delete data by particular id ---->>>
  let Del = (id) => {
    // alert (id);
    let url = `http://localhost:3000/user/${id}`;
    fetch(url, { method: "DELETE" }); //url ko fetch kiye or DELETE method lgaya , or ye json se bhi data delete kr dega
    fetchData();
  };
  
  //how to send data in local storage --->
  
  let Book = () => {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let checkin = document.querySelector("#checkin").value;
    let checkout = document.querySelector("#checkout").value;
    let City = document.querySelector("#city").value;
    let person = document.querySelector("#person").value;
  
    let url = "http://localhost:3000/user";
    fetch(url, {
      method: "POST", //  postmethod me 3 chije bhejte h ===>>   method, header, string format me data
  
      headers: {
        "content-type": "application/json",
      },
  
      body: JSON.stringify({
        Name: name, //NAME (jo json me key h uski jgh vo value aajaye jo ham fomr me dalenge jo ki name h jo value utha rha h )
        Age: age,
        Check_in: checkin,
        Check_out: checkout,
        City: City,
        Person: person,
        Price: 500,
      }),
    });
    
    fetchData()
    location.href = "CRUD.html";
    return false;
  };
  
  //Put method
  let Formopen = async (id) => {
    let url = `http://localhost:3000/user/${id}`;
  
    let res = await fetch(url, { method: "GET" });
    let data = await res.json();
  
    //form dikhana h update pr click krne pr -->
    let Update = document.querySelector("#Updateform");
    Update.innerHTML = `
      Enter Name: <input type="text" id="upname" value="${data.Name}" /><br /><br />
      Enter Age: <input type="text" id="upage" value="${data.Age}" /><br /><br />
      Enter Check in Date: <input type="date" id="upcheckin" value="${data.Check_in}" /><br /><br />
      Enter Check out Date: <input type="date" id="upcheckout" value="${data.Check_out}" /><br /><br />
      Select City:
      <select id="upcity">
        <option value="Bhopal">Bhopal</option>
        <option value="Delhi">Delhi</option>
        <option value="Indore">Indore</option>
        <option value="Noida">Noida</option>
      </select><br /><br />
      Enter Person: <input type="text" id="upperson" value="${data.Person}" /><br /><br />
      <button onclick="return UpdateData('${data.id}')">Update Data</button>
    `;
    
  };
  
  let Update = (id) => {
    let url = `http://localhost:3000/user/${id}`;
  
    let name = document.querySelector("#upname").value;
    let age = document.querySelector("#upage").value;
    let checkin = document.querySelector("#upcheckin").value;
    let checkout = document.querySelector("#upcheckout").value;
    let City = document.querySelector("#upcity").value;
    let person = document.querySelector("#upperson").value;
  
    fetch(url, {
      method: "PUT", //  postmethod me 3 chije bhejte h ===>>   method, header, string format me data
  
      headers: {
        "content-type": "application/json",
      },
  
      body: JSON.stringify({
        Name: name, //NAME (jo json me key h uski jgh vo value aajaye jo ham fomr me dalenge jo ki name h jo value utha rha h )
        Age: age,
        Check_in: checkin,
        Check_out: checkout,
        City: City,
        Person: person,
        Price: 500,
      }),
    });
  
    return false;
  };
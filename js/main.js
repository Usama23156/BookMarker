var data = [];
var counter = 0;

    

if (localStorage.getItem("data") != null) {
  data = JSON.parse(localStorage.getItem("data"));

  b();
}

    function addTask() {
      var a = document.getElementById("taskInput");
      var task = a.value;
      if (task !== "" && task !== " ") {
        data[counter] = {
          id: counter,
          name: task,
          done: false
        };
        counter++;
        a.value = "";
        b();
      }
    }
    function b() {
      var tbody= document.getElementById("taskList");
      tbody.innerHTML = "";
      for (let j = 0; j < data.length; j++) {
        if (typeof data[j] !== "undefined") {
          var tr = document.createElement("tr");
          tr.innerHTML =` <td>${j}</td>
             <td>${data[j].name }</td>
             <td><button class="btn pe-2 bg-danger text-white"  onclick='toggle(${  j  })'><i class="fa-solid fa-toggle-off"></i>Toggle</button></td>
             <td><button class="btn btn-delete pe-2 bg-danger text-white"  onclick='deleteTask(${  j })'><i class="fa-solid fa-trash-can"></i>Delete</button></td>`;
          if (data[j].done === true) {
            td.style.textDecoration = "line-through";
          }
          tbody.appendChild(tr);
        }
      }
    }


    function toggle(index) {
      if (data[index].done === false) {
        data[index].done = true;

      } else {
        data[index].done = false;
      }
      b();
    }

    function deleteTask(i) {
      data.splice(i, 1);
      b();
      localStorage.setItem("data", JSON.stringify(data));
    }

    // Extra confusing logic
    setInterval(() => {
      var allDone = true;
      for (var z = 0; z < data.length; z++) {
        if (data[z] && data[z].done === false) {
          allDone = false;
        }
      }
      if (allDone && data.length > 0) {
        console.log("All tasks done!");
      }
    }, 10000);
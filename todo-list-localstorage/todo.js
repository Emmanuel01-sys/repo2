let list = document.getElementById("list");
let activities;

if(!localStorage.todo) localStorage.setItem("todo", "");
activities = localStorage.todo.split("/++/");//unique separator

for(let i = 0; i < activities.length-1; i++) {
    let x = document.createElement("li");
    x.innerHTML = `<span>${activities[i]}</span>` + `<button class="edit">Edit</button>
                                <button class="delete">Delete</button>`;
    list.appendChild(x);
}

//add item
document.getElementsByClassName("add-item")[0].addEventListener("click",()=>{
    let activity = document.getElementsByName("activity")[0].value;
    if(activity.length) {
        localStorage.todo += activity+"/++/";//unique separator
        location.reload();
    }
});

//delete item
let deleteButtons = document.getElementsByClassName("delete");
for(let i = 0; i < deleteButtons.length; i++) {
    deleteButtons.item(i).addEventListener("click", ()=>{
        activities.splice(i,1);
        localStorage.todo = activities.join("/++/");
        location.reload();
    });
}

//edit item
let editButtons = document.getElementsByClassName("edit");
for(let i = 0; i < editButtons.length; i++) {
    editButtons.item(i).addEventListener("click", ()=>{
        let element = editButtons.item(i).parentNode.children[0];
        let oldText = element.innerText;

        element.setAttribute("contenteditable", true);
        element.focus();
        
        element.addEventListener("focusout", ()=>{
            let newText = element.innerText;
            element.setAttribute("contenteditable", false);
            activities.splice(activities.indexOf(oldText), 1, newText);
            localStorage.todo = activities.join("/++/");
            location.reload();
        });
    });
}
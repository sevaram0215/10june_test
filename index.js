let form=document.getElementById("form")
let arr=JSON.parse(localStorage.getItem("user")) ||[]
 let btn=document.getElementById("btn")
 btn.addEventListener("click",getvalue)
 function getvalue(ele){
    ele.preventDefault()
    let obj={
        name:document.getElementById("name").value,
        mobile:document.getElementById("mobile").value,
        father_name:document.getElementById("father_name").value,
        dob:document.getElementById("date_of_birth").value,
        Course:document.getElementById("select").value

    }

    arr.push(obj)
    localStorage.setItem("user",JSON.stringify(arr));
    displaydata(arr);
    alert("Thanks for Submit")
    form.reset();

 }

 function displaydata(user){
    let disply_table =document.getElementById("disply_table")
    let h2=document.createElement("h2")
    h2.innerText="Student information"
    // disply_table.append(h1)
    let table =document.createElement("table")
    let thead=document.createElement("thead")
    let tbody=document.createElement("tbody")
    let table_row =document.createElement("tr")
    let th1=document.createElement("th")
    th1.innerHTML=("S.no")
    let th2=document.createElement("th")
    th2.innerHTML=("name")
    let th3=document.createElement("th")
    th3.innerHTML=("mobile")
    let th4=document.createElement("th")
    th4.innerHTML=("Father name")
    let th5=document.createElement("th")
    th5.innerHTML=("Date of birth")
    let th6=document.createElement("th")
    th6.innerHTML=("Course")
    let th7=document.createElement("th")
    th7.innerHTML=("Action")
    table_row.append(th1,th2,th3,th4,th5,th6,th7)
    thead.append(table_row)
    disply_table.innerHTML=null
    user.forEach((element,index)=> {
        
        let tr1=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerHTML=index+1
        let td2=document.createElement("td")
        td2.innerText=element.name
        let td3=document.createElement("td")
        td3.innerText=element.mobile
        let td4=document.createElement("td")
        td4.innerText=element.father_name
        let td5=document.createElement("td")
        td5.innerText=element.dob
        let td6=document.createElement("td")
        td6.innerText=element.Course

        let td7=document.createElement("td")
        let add=document.createElement("button")
        add.innerHTML="Add to cart"
        add.addEventListener("click", ()=>{
addValue('favData',element)
alert("data add to fav")
        });
        let del=document.createElement("button")
        del.innerHTML="Delete"
        del.addEventListener("click",()=>{
            deleteData(arr, index)  
 displaydata(arr)
            alert("delete data successfully")           
        });
td7.append(add,del)
        tr1.append(td1,td2,td3,td4,td5,td6,td7)
        tbody.append(tr1)
        table.append(thead,tbody);
        disply_table.append(h2,table)

    })

 }
//  ***********Add Function***************
function addValue(key, value){
    let newArr = JSON.parse(localStorage.getItem('favData')) || [];
    newArr.push(value);
    localStorage.setItem('favData', JSON.stringify(newArr));
}
// ***********delete function*********************
function deleteData(seva, index){
    seva.splice(index, 1)
    localStorage.setItem('user', JSON.stringify(seva));
}

 displaydata(arr)
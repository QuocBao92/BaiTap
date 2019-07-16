let arr = ["Sony Xperia","Samsung Galaxy","Nokia 6","Xiaomi Redmi Note4","Apple Iphone 6s","Oppo A71"];
let index = 0;
function showProduct(){
    let result = "";       
    result += "<table>"
        + "<tr>"
        + "<th>Product Name</th>"
        + "<th></th>"
        + "<th></th>"
        + "</tr>";

    for (let i = 0; i<arr.length; i++)
    {
        result+= "<tr>";     
            result+= "<td>"+ arr[i] + "</td>" 
            
                + "<td><input type='button' id='editProductName' value='Edit' onclick='showEditProductName("+ i +")'></td>"
                
                + "<td><input type='button' id='deleteProductName' value='Delete' onclick='deleteProduct("+ i +")'></td>";
        
        result += "</tr>";
    }
    result +="</table>";
    document.getElementById('listProduct').innerHTML=result;
    reset();
}

showProduct();

function showEditProductName(id) {
    document.getElementById('editProduct').placeholder = arr[id];
    index = id;
    console.log(arr[id]);
}

function editProduct() {
    
    arr[index]=document.getElementById('editProduct').value;
    showProduct();
    console.log(arr);
}

function reset()
{
    index=0;
    document.getElementById('editProduct').value = "";
}

function deleteProduct(id){
    index = id;
    console.log(index);
    
    if (confirm('Are You sure!'))
    {
        arr.splice(index,1);   
    }
    else alert('Maybe later');
    console.log(arr);
    showProduct();
}

function addProduct(){
    let newProduct = document.getElementById('newProduct').value;
    arr.push(newProduct)
    showProduct();
    console.log(arr);
}
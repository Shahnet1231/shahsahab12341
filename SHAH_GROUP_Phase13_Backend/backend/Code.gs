
// SHAH GROUP Backend Foundation

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    status:true,
    app:"SHAH GROUP API"
  })).setMimeType(ContentService.MimeType.JSON);
}

function addProduct(data){
  return {status:true,message:"Product Added"};
}

function getProducts(){
  return [];
}

function addCustomer(data){
  return {status:true,message:"Customer Added"};
}

function addSupplier(data){
  return {status:true,message:"Supplier Added"};
}

function createSale(data){
  return {status:true,message:"Sale Created"};
}

function createPurchase(data){
  return {status:true,message:"Purchase Created"};
}

$(function(){
  // 表示対象の年月を取得
  var now_date  = new Date();
  var now_month = now_date.getFullYear()+ '/' +(now_date.getMonth()+1);
  $("#target_month").append(now_month);

 
});
 


//商品名と価格をとってくる。追加ボタン押下で表示//
  $("#add").on("click", function(){
    let product_name = $("#product_name").val();
    let product_price = $("#product_price").val();
    console.log(product_name,"データ入れて");
    console.log(product_price,"データ入れて");

 //ローカルストレージに保存//   
  localStorage.setItem(product_name,product_price)

  const html = `
       <tr>
          <th>${product_name}</th>
          <td>${product_price}</td>
       </tr> 
  `;
 //HTML上に表示//
  $("#product").append(html);
  });









 //クリアボタン押下でローカルストレージから削除、HTML上も削除//
   $("#clear").on("click", function(){
     localStorage.clear();
     $("#list").empty();
   });

  
//リロードしても、ローカルストレージから繰返し読込続ける//
   for(let i = 0; i < localStorage.length; i++){
    const product_name = localStorage.key(i);
    const product_price = localStorage.getItem(product_name);
    const html = `
 <tr>
   <th>${product_name}</th>
   <td>${product_price}</td>
 </tr>  
    `;
 $("#list").append(html);
 }










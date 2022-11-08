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
          <td>${date}</td>
          <td>${product_name}</td>
          <td>${product_price}</td>
       </tr> 
 `;
 //HTML上に表示//   //削除ボタン作成//
  $("#list").append(html);


  /////////////削除ボタン表示させる//////////
  // <input type="button" id="delete" value="削除"></input>



  });


 //クリアボタン押下でローカルストレージから削除、HTML上も削除//
   $("#clear").on("click", function(){
     localStorage.clear();
     $("#list").empty();
   });;

  

//リロードしても、ローカルストレージから繰返し読込続ける//
let total = 0;
for (let i = 0; i < localStorage.length; i++) {
  const product_name = localStorage.key(i);
  const product_price = localStorage.getItem(product_name);
  console.log(product_price);
  const html = `
 <tr>
   <td>${date}</td>
   <td>${product_name}</td>
   <td>${product_price}</td>
 </tr>
    `;
  total += Number(product_price);
  $(".sum_price").text("合計：" + total + "円");
  $("#list").append(html);
}










  
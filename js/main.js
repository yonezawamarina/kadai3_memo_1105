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
 //HTML上に表示//
  $("#list").append(html);
  });


 //クリアボタン押下でローカルストレージから削除、HTML上も削除//
   $("#clear").on("click", function(){
     localStorage.clear();
     $("#list").empty();
   });;

  
//リロードしても、ローカルストレージから繰返し読込続ける//
   for(let i = 0; i < localStorage.length; i++){
    const product_name = localStorage.key(i);
    const product_price = localStorage.getItem(product_name);
    const html = `
 <tr>
   <td>${date}</td>
   <td>${product_name}</td>
   <td>${product_price}</td>
 </tr>  
    `;
 $("#list").append(html);
 }



  // 合計値を求めたい①/////////////////////////////////////////
  function sum(){
    // 表の金額を取得する
    var pricelist = $("table th[class=price]").map(function(index, val){
      var price = parseInt($(val).text());
      if(price >= 0) {
        return price;
      } else {
        return null;
      }
    });
    // 価格の合計を求める
    var total = 0;
    pricelist.each(function(index, val){
      total = total + val;
    });
    $(".sum_price").text("合計："+total+"円");
  }

/////////////////////////////////////////////////////////




//合計出したい②//////////////////////////////////////////////////
  function sum () {
    var tableElem = document.getElementById('list');
    var rowElems = tableElem.rows;
    var price = 0;
    for (i = 0, len = rowElems.length - 1; i < len; i++) {
        price += parseInt(rowElems[i].cells[3].innerText);
    }
    document.getElementById('sum_price').innerText = price;
}
/////////////////////////////////////////////////////////

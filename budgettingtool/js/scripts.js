

function calculate(){
    var totalIncome = 0.00;
    $("#income-table .rightinput").each(function() {
        if(this.value){
            totalIncome = totalIncome + parseFloat(this.value);
        }
    });
    console.log('income: ' + totalIncome);

    var totalExpenses = 0.00;
    $("#expenses-table .rightinput").each(function() {
        if(this.value){
            totalExpenses = totalExpenses + parseFloat(this.value);
        }
    });
    console.log('expenses: ' + totalExpenses);

    var balance = 0.00
    balance = totalIncome - totalExpenses

    balance = numeral(balance).format('0,0.00');

    $('#balance').text(balance);

    if(balance < 0){
        $('.saldo').css('box-shadow','10px 6px 40px 0px rgba(255, 22, 22, 0.57)')
    }else{
        $('.saldo').css('box-shadow','10px 10px 74px 2px rgba(0, 155, 46, 0.38)')
    }
}

function addTableRow(button){
  var table = $(button).parent().parent().find('table');
  table.append(
    '<tr>' + 
        '<td class="tg-0lax leftcell"><i class="fa fa-trash-alt" id="delete-icon" onclick="deleteTableRow(this);calculate();"></i><input type="text" id="label" placeholder="Beschrijving" class="leftinput" /></td>' +
        '<td class="tg-0lax rightcell"><i class="fas fa-euro-sign" id="euro-icon"></i><input type="text" class="rightinput" /></td>' +
    '</tr>'
  );

  $(".rightinput").change(function () {
    calculate();
  });

}

function deleteTableRow(button){
    $(button).closest('tr').remove();
}

$( document ).ready(function() {
    $('#date').text(moment().format('MMMM YYYY'));

    $(".rightinput").change(function () {
        calculate();
    });  

});

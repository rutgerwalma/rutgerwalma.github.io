
function calculate(){
    var formatter = new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
        });

    var totalIncome = 0.00;

    $("#income-table .rightinput").each(function() {
        if(this.value){
            let value = parseFloat(this.value.toString().replace(",", "."))
            totalIncome = totalIncome +value;
        }
    });

    var totalExpenses = 0.00;
    $("#expenses-table .rightinput").each(function() {
        if(this.value){
            let value = parseFloat(this.value.toString().replace(",", "."))
            totalExpenses = totalExpenses +value;
        }
    });

    var balance = 0.00

    balance = totalIncome - totalExpenses
    balance =  formatter.format(balance);

    $('#balance').text(balance);

    // if(balance > 0.00){
    //     $('.saldo').css('box-shadow','10px 6px 40px 0px rgba(255, 22, 22, 0.57)')
    // }else{
    //     $('.saldo').css('box-shadow','10px 10px 74px 2px rgba(0, 155, 46, 0.38)')

    // }
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
    numbro.setLanguage('nl-NL');

    $('#date').text(moment().format('MMMM YYYY'));

    $(".rightinput").change(function () {
        calculate();
    });  

});

function checkKeyCode(e) {
    var $this = $(this);
    if ((event.which != 44 || $this.val().indexOf(',') != -1) &&
       ((event.which < 48 || event.which > 57) &&
       (event.which != 0 && event.which != 8))) {
           event.preventDefault();
    }

    var text = $(this).val();
    if ((event.which == 44) && (text.indexOf(',') == -1)) {
        setTimeout(function() {
            if ($this.val().substring($this.val().indexOf(',')).length > 3) {
                $this.val($this.val().substring(0, $this.val().indexOf(',') + 3));
            }
        }, 1);
    }

    if ((text.indexOf(',') != -1) &&
        (text.substring(text.indexOf(',')).length > 2) &&
        (event.which != 0 && event.which != 8) &&
        ($(this)[0].selectionStart >= text.length - 2)) {
            event.preventDefault();
    }     
};
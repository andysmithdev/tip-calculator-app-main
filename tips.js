$(function() {
    $("#reset-button").click(function(){
        $("#amount").val('').change();
        $('#people').val('').change();
        $('input[name=tip]:checked').prop('checked', false);
        $('#result-tip').html('$0.00');
        $('#result-total').html('$0.00');
    });

    $('#custom').focus(function(){
        $('#custom-radio').click();
    });

    $('input').change(function(){
        const amount = $('#amount').val();
        const people = $('#people').val();
        var tip=$('input[name=tip]:checked').val();
        
        if (tip == 'custom') {
            tip = $('#custom').val();
        }
        if ((amount > 0) && (people > 0) && (tip > 0)) {
            const tipamt = amount * (tip/100);
            const total = parseInt(amount) + parseInt(tipamt);
            const tippp = (tipamt / people).toFixed(2);
            const totalpp = (total / people).toFixed(2);
            $('#result-tip').html('$' + tippp.toString());
            $('#result-total').html('$' + totalpp.toString());
        };
    });

    $('#people').change(function() {
        var input=$(this);

	    if ((input.val() != '') && (input.val() == 0)) {
            input.addClass("invalid").removeClass("valid");
            $('#people-error').css('visibility', 'visible');
        }
	    else {
            input.removeClass("invalid").addClass("valid");
            $('#people-error').css('visibility', 'hidden');
        }
    });
});
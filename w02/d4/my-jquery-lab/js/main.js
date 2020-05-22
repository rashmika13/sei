



$('#addskills').on('click', function(){
    let textEntered = $('#textEntered').val();
console.log(textEntered);
 var newText = `<div class="one">
                <button class="remove" type="button">X</button>
                <p>${textEntered}</p>
                </div>`;
 $('#list').append(newText);
 $('#textEntered').val('');
});


$('.main').on('click','.remove', function(){
    console.log('check');
    $(this).closest('div').remove();
    
})



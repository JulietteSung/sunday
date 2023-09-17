/*
입력양식
input, select, textarea, button->val()로 제어
일반요소 -> html(), text()로 바꾼다
html은 ()안에 태그쓸 때 사용
*/


/*
파싱이 끝났을때, 버튼클릭하면 alert창 띄워라
여기서 (document).ready는 생략가능
$(document).ready(function(){ 
$('.ex1 button').click(function(){
    alert('클릭')
})
})

*/

$(function(){
$('.ex1 button').click(function(){
    var text1 = $('.ex1 input1').val()
    $('.ex1 .span2').html()
})
})

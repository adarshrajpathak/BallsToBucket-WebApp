const colorSpec=['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick','crimson'];

$("#addBall").on('click',function(event){
    const ranIndex=Math.floor((Math.random()*100)%15);
    const ranColor=colorSpec[ranIndex];
    // console.log(ranIndex);
    // console.log(ranColor);
    element=document.createElement('div');
    // element.classList.add(ranColor);
    $(element).addClass('ball').css({'backgroundColor':ranColor});
    // console.log(element);
    // $("#bucket").appendChild(element);
    $("#bucket").append(element);
})
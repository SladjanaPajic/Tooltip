(function(){

Array.from(document.getElementsByClassName('tooltipLink')).forEach(item => {

  if(item.title !== ''){

       item.className += ' tooltipWrap'
       item.addEventListener('mouseover',createTip)
       item.addEventListener('mouseout',cancelTip)

     }
})


  function createTip(e){
 
    var title = this.title;
    this.setAttribute('tooltip', title)
 
    var tooltipWrap = document.createElement('span')
    tooltipWrap.className = 'tooltip'
    tooltipWrap.appendChild(document.createTextNode(title))

    console.log(tooltipWrap)
    e.target.appendChild(tooltipWrap)

  }

  function cancelTip(e){

    document.querySelector('.tooltip').remove(); 

  }

})()
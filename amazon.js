
    var images=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']
    i=0
    function slide()
    {
        document.getElementById("slideshow").src=images[i]
        if(i<images.length-1)
        i++
        else
        i=0
    }
    setInterval(slide,1500)

function laoding(){
    let tl  = gsap.timeline()
tl.to(".yellow1",{
    top:"-100%",
    duration:0.9,
    ease:"expo.out",
    delay:1
})
tl.from(".yellow2",{
    top:"100%",
    duration:0.5
},"same")
tl.to(".loader h1 ",{
    color:"black",
    duration:0.3
},"same")

tl.to(".loader",{
    opacity:0
})
}
laoding()
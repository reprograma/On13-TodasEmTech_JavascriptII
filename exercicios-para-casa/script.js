image.addEventListener("mouseover", imageGonnaBeLargeWhenMouseOver)
image.addEventListener("mouseout", imageNormalSize)

function imageGonnaBeLargeWhenMouseOver() {
    image.style.width = "800px";
}
function imageNormalSize() {
    image.style.width = "464px"
}
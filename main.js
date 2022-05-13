function preload() {

}

function setup() {
    canvas = createCanvas(600, 480);
    canvas.position(120, 260);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw() {
    image(video, 0, 0, 600, 480);
    tint(tintColor);
}

function take_snapshot() {
    save("filtered_picture.png");
}

function filter_color() {
    tintColor = document.getElementById("color_name").value;
}
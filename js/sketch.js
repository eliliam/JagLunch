function setup() {
    let windowHt = $(document).height();
    let windowWd = $(document).width();
    let cnvHt = windowHt*0.75;
    let cnvWd = windowWd;
    let cnv = createCanvas(cnvWd, cnvHt);
    cnv.position((windowWd-cnvWd)/2, (windowHt-cnvHt));
    background(65, 130, 244);
}

function draw() {
    let windowHt = $(document).height();
    let windowWd = $(document).width();
    let h = windowHt*0.75;
    let w = windowWd;
    // First petal

    fill(244, 65, 65);
    noStroke();
    beginShape();
    curveVertex(w / 2, h / 2);
    curveVertex(w * 0.55, h * 0.4);
    curveVertex(w / 2, h * 0.2);
    curveVertex(w * 0.45, h * 0.4);
    curveVertex(w / 2, h / 2);
    endShape();

    // Center of flower
    fill(244, 232, 66);
    noStroke();
    ellipse(w / 2, h / 2, w * 0.2);

}
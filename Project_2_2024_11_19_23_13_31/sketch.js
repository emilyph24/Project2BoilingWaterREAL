var graphicImage = false;

let facts = [
  "Though climate change will be hugely destructive, civilization will not be destroyed",
  "Climate change could increase exstistential threats from other sources",
  "Your personal carbon footprint is much less important than what you do for work",
  "Some ways of making a difference on climate change are likely to be much more effective than others",
  "Use your career to help develop technology, advocate for policy that would reduce our current emissions, or research technology that could remove carbon from the atmosphere in the future",
  "Overall, climate change is far less neglected than other issues we prioritise",
  "There is clear evidence on how to move ahead",
  "We could theoretically see very extreme temperature rises through a runaway greenhouse effect.",
  "Some of our permafrost is already melting, releasing greenhouse gases.",
  "Climate change could make parts of the planet uninhabitable for significant portions of the year.",
];

let imgArray = [];
let seaY;
let originalSeaY;
let factIndex = 0;
let showText = false;

function preload() {
  font = loadFont("assets/font.ttf");
  imgArray[0] = loadImage("assets/graphic.png");
  imgArray[1] = loadImage("assets/sea.png");
  imgArray[2] = loadImage("assets/cloud.png");
}

function setup() {
  ellipseMode(CENTER);

  seaY = height * 3;
  originalSeaY = seaY;
  
  var canvas = createCanvas(500, 500);
  canvas.parent("sketch-holder");

  var button1 = createButton("Learn More");
  button1.parent("button-holder");
  button1.mousePressed(seaUp);

  var button2 = createButton("Graphic");
  button2.parent("button-holder");
  button2.mousePressed(graphicDraw);

  var button3 = createButton("Source 1");
  button3.parent("button-holder");
  button3.mousePressed(goToLink);
  
  var button4 = createButton("Source 2");
  button4.parent("button-holder");
  button4.mousePressed(goToOtherLink);

}

function draw() {
  background("#82C8E5");
  image(imgArray[2], width * 0.02, height * 0.02, width * 0.5, height * 0.5);
  fill("#ffdc00");
  noStroke();
  ellipse(width, 0, width * 0.4, height * 0.4);
  
   if (showText) {
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  textFont(font)
  text(facts[factIndex], 0, height * 0.3, width);
  }
  
  image(imgArray[1], 0, seaY, width, height);
  
  if (graphicImage) {
    background(0);
    image(imgArray[0], 0, height * 0.25, width * 1, height * 0.6);
  
  }
}
  
function seaUp() {
  if (seaY > 0) {
    seaY -= 30;
    factIndex++;
    if (factIndex >= facts.length) {
      factIndex = 0;  
    }
    
    showText = true;
  }

  if (seaY <= 0) {
    seaY = originalSeaY;
    showText = false;
  }
}

function graphicDraw() {
  if (!graphicImage) {
    graphicImage = true;
  } else if (graphicImage) {
    //fill("#ffdc00");
    //noStroke();
    //ellipse(width, 0, width * 0.4, height * 0.4);
    //image(imgArray[1], 0, seaY, width, height);
    graphicImage = false;
  }
}
    
    
function goToLink() {
  window.open(   "https://www.wunderground.com/history/monthly/us/va/blacksburg/KBCB/date/2004-10"
  );
}

function goToOtherLink() {
  window.open(
    "https://80000hours.org/problem-profiles/climate-change/?utm_source=google&utm_medium=cpc&utm_campaign=80KMAR-GrantsClimateChangeBroad&utm_content=63198432370&utm_term=climate%20change%20facts&gad_source=1&gclid=CjwKCAiA3Na5BhAZEiwAzrfagIyw6ZqkY_mOthVpSdeBS6uaYXgcuoXp5S3_BdbGw6Pq9T_3WS8OwRoCBwsQAvD_BwE"
  );
}
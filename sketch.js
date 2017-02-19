function setup() {
  createCanvas(800, 600)
  background(200)
}

function draw() {
 
 c0 = color(0)
 c1 = color(100)
 c2 = color(255)
 c3 = color(220)
 c4 = color(0,0,255,160)
 c5 = color(0,255,0)
 
 
 
 stroke(0)

 line(width/2,380,width/2,250)
 line(width/2+12,380,width/2+12,250)
 line(width/2+24,380,width/2+24,250)
    line(width/2-32,120,width/2+12,250)
    line(width/2+60,120,width/2+12,250)
       
       line(width/2+100,470,width/2+12,450)
       line(width/2-100,470,width/2-12,450)
       
 noStroke()
 fill(c4)
 ellipse(width/2,520,80,80)
 fill(c5)
 ellipse(width/2,520,40,40)
  
 fill(c5)
 rectMode(CENTER)
 rect(width/2,450,110,140)
  
 fill(c4)
 rect(width/2,405,110,6)
  
 fill(c5)
 ellipse(width/2+12,250,120,90)
  
 fill(c2)
 ellipse(width/2+27,245,35,35)
  
 fill(c3)
 ellipse(width/2+27,245,7,7)
  
 fill(c2)
 ellipse(width/2+38,220,10,10,100)
 ellipse(width/2+50,260,5,5)
 ellipse(width/2-5,240,14,14)
  

}
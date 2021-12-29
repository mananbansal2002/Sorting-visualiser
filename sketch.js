let array=[];
let w=20;
let states=[];



function setup() {
  createCanvas(innerWidth,innerHeight);


   slider = createSlider(0, 200,10);
  slider.position(10, 10);
   slider.style('width', '80px');

  array= new Array(floor(width/w));
  for(let i=0;i<array.length;i++)
    array[i]=random(height) , states[i]=-1;
   selectionSort(array,0,array.length);
}

async function  selectionSort(arr,s, e){
  
    for( let i=0;i<e-1;i++){
     let temp=arr[i];
      let tempi=i;
      states[tempi]=1;
      for(let j=i+1;j<e;j++)
        {
          if(arr[j]<temp)
            states[j]=1 ,temp=arr[j] ,tempi=j ,states[tempi]=2 ;  
            
        }
      await swap(arr,i,tempi);
      states[i]=0
    }
  return arr;
}

async function swap(arr,a,b)
{
  await sleep(200-slider.value());
  var temp=arr[a];
  arr[a]=arr[b];
  arr[b]=temp;
}
async function sleep(milisec)
{
  return new Promise(resolve=>setTimeout(resolve,milisec));
}


function draw() {
            background(200);
            fill(0);
            textSize(20);
            text('Speed', 100, 25);
            
            for(let i = 0; i < array.length; i++) {
                stroke(200);
                fill(0);
                  
                if(states[i] == 0) {
                    
                    fill(0, 200, 0);
                }
                else if (states[i] == 1) {
                      
                    fill(200,0,200);
                }
                else {
                    fill(0);
                }
                rect(i*w, height - array[i], w, array[i]);
            }
        }
           
       



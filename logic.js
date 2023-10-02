let player = 1;
let fulled = [];
for (let i = 0; i < 9; i++)
{
    fulled.push(false);
}
let places = ['#img1', '#img2', '#img3', '#img4', '#img5', '#img6', '#img7', '#img8', '#img9']

function fill(place_number){
    if(player == 2)
        player = 0;

    if(player == 0)
        document.querySelector('#player').innerHTML = 'Player 1';
    else
        document.querySelector('#player').innerHTML = 'Player 2';
    if(player == 0)
    {
        if(!fulled[place_number])
        {
            document.querySelector(places[place_number]).src = 'images/blue_X.png';
            fulled[place_number] = true;
            player++;
        }
        else
            alert('Wrong field');
    }
    else if(player == 1)
    {
        if(!fulled[place_number])
        {
            document.querySelector(places[place_number]).src = 'images/red_O.png';
            fulled[place_number] = true;
            player++;
        }
        else
            alert('Wrong field');
        
    }

    
}
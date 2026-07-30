const INPUT = document.querySelector('.INPUT');
const OUTPUT = document.querySelector('#OUTPUT');


function main()
{
    console.log(`Button Printed : ${INPUT.value}` )
    let i = 0;
    for(i = 1 ; i < INPUT.value ; i++)
    {
        <li>{i}</li>
    }
    
    INPUT.value = ""
}
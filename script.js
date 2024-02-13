
function calculateAreaOfTriangle() {
    const base = getValueById('triangle-base');
    const height = getValueById('triangle-height');

   const area = 0.5 * base * height;

   setAreaInsideSpan(document.getElementById('area-container'),area);
   
}

function getValueById(idname) {

    const innerValueLocation = document.getElementById(idname);

    const value = innerValueLocation.value;

    const mainValue = parseFloat(value);
    
    return mainValue;

}

function setAreaInsideSpan(idName , areaValue)
{
    idName.innerText = areaValue;
}

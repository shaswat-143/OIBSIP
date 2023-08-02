const resetButton = document.querySelector('.resetButton');
const reset = () => {
    result.innerHTML = '';
}
const calculateTemp = () => {
    const inputTemp = document.getElementById('ip_temp').value;
    const iptempSelected = document.getElementById('temp_sel');
    const ipvalueTemp = temp_sel.options[iptempSelected.selectedIndex].value;
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(2);
        return fahrenheit;
    }

    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(2);
        return celsius;
    }

    if (ipvalueTemp == 'ip_cel') {
        document.getElementById("result").innerHTML = inputTemp + " degree celcius is equals to " + celToFah(inputTemp) + " degree fahrenheit";
    }
    else if (ipvalueTemp == 'ip_fah') {
        document.getElementById("result").innerHTML = inputTemp + " degree fahrenheit is equals to " + fahToCel(inputTemp) + " degree celcius";
    }
    else if (ipvalueTemp == 'ip_cel') {
        document.getElementById("result").innerHTML = "Please select different option to convert";
    }
}
resetButton.addEventListener('click', reset);
Footer
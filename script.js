const NumberofCharRange = document.getElementById("NumberOfCharaterRange");
const NumberofCharAmount = document.getElementById("NumberOfCharaterAmount");
const uppercaseid = document.getElementById("IncludeUppercase");
const symbolid = document.getElementById("IncludeSymbols");
const numberid = document.getElementById("IncludeNumbers");
const passwordDisplay = document.getElementById("passwordDisplay");
const submit = document.getElementById("btnid");
submit.addEventListener("click", e => {
    e.preventDefault();
    const IncludeNumberofChar = NumberofCharAmount.value;
    const  IncludeUppercase = uppercaseid.checked;
    const IncludeSymbol = symbolid.checked;
    const IncludeNumbers = numberid.checked;
    const password = generatePassword(IncludeNumberofChar,IncludeUppercase,IncludeSymbol,IncludeNumbers)
    passwordDisplay.value  = password
    submit.style.backgroundColor = "transparent"
     
})
NumberofCharAmount.addEventListener("input",SyncRangeAmount);
NumberofCharRange.addEventListener("input",SyncRangeAmount);
function SyncRangeAmount(e){
    const val  = e.target.value;
    NumberofCharAmount.value = val;
    NumberofCharRange.value = val;
}
const UPPERCASE_Array = ArrayFromLowToHigh(65,90);
const lowercase_Array = ArrayFromLowToHigh(97,122);
const Number_Array = ArrayFromLowToHigh(48,57);
const Symbol_Array = ArrayFromLowToHigh(33,47).concat(
    ArrayFromLowToHigh(58,95)
).concat( 
    ArrayFromLowToHigh(123,125)
)

function generatePassword(IncludeNumberofChar,IncludeUppercase,IncludeSymbol,IncludeNumbers){
  let CharCodes = lowercase_Array
  if(IncludeUppercase) CharCodes = CharCodes.concat(UPPERCASE_Array)
  if(IncludeNumbers) CharCodes = CharCodes.concat(Number_Array)
  if(IncludeSymbol) CharCodes = CharCodes.concat(Symbol_Array)
   const password_array = []
  for(let j=0;j<=IncludeNumberofChar;j++){ 
      let character = CharCodes[Math.floor(Math.random() * CharCodes.length)]
      password_array.push(String.fromCharCode(character));
  }
return password_array.join('');
}
function ArrayFromLowToHigh(low,High){
    arr = []
    for(let i=low; i <= High; i++){
        arr.push(i)
    }
    return arr;
}

copyelement = document.getElementById("copyid");
copyelement.addEventListener("click", e => {
        const CopyText = passwordDisplay;
        if(CopyText.value == "Display"){
             CopyText.value = "Click on  Generate Password Button" }
             else if (CopyText.value == "Click on  Generate Password Button") {
                submit.style.backgroundColor = "Red"
             } 
             else {
            CopyText.select();
            CopyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            CopyText.value = "Password Copied"
        }
})
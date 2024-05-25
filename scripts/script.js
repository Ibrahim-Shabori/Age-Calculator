const updateResaultSection = (str)=>{
    let resultParagraph = document.querySelector("section p.result");
    resultParagraph.textContent = str;
}
// -------------
const calculateButton = document.querySelector("main form button");
calculateButton.addEventListener("click", (evn)=>{
    evn.preventDefault();
    let year = document.querySelector("main form input").value;
    let month = document.querySelector("main form select").value;
    let yearNum = parseInt(year);
    let monthNum = parseInt(month);
    let date = new Date();
    let nowYear = date.getFullYear();
    let nowMonth = date.getMonth() + 1;
    
    console.log({yearNum, monthNum, date, dateYear: date.getFullYear(),dateMonth: date.getMonth()+1})

    if(!yearNum)
    {
        updateResaultSection("You nead to enter the year of birth plz.")
    }
    else if(!monthNum)
    {
        updateResaultSection("You need to select the month of birth plz.")
    }
    else if(yearNum < 0) //
    {
        updateResaultSection("We did not expect that people born before the birth of Christ would use the application.")
    }
    else if(yearNum > date.getFullYear() ||  (yearNum == nowYear && nowMonth < monthNum))
    {
        updateResaultSection("To be honest with you, I live in the past, and calculating your age in terms of the time period I live in would result in a negative value, which is an unnatural number for calculating the age of an existing person.");
    }
    else
    {
        let ageInYear = (monthNum > nowMonth) ? (nowYear - (yearNum + 1)) : nowYear - yearNum;
        let ageInMonth = (monthNum > nowMonth) ? 12 + (nowMonth - monthNum) : nowMonth - monthNum;
        updateResaultSection(`Your age: ${ageInYear} year(s) & ${ageInMonth} month(s)`);
    }
})
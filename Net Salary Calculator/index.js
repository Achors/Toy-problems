let basicSalary = parseInt(prompt("What is your basic salary:"));
// let benefits = parseInt(prompt("Enter your benefits:"));
let personalRelief = 2400;
let insuranceRelief = 2400;
let pensionFund = 2400;
let housingRelief = 2400;
function grossSalary () {
    let totalSalary = parseInt(personalRelief + insuranceRelief + housingRelief + basicSalary + pensionFund);
    return (totalSalary);
}
function rateOfTax (){
    if (basicSalary <= 24000){
        return ((basicSalary)* (10/100));
    } else if (basicSalary > 24000 && basicSalary <= 32333){
        return ((basicSalary)* (25/100));
    } else if (basicSalary > 32333 && basicSalary <= 500000){
        return ((basicSalary)* (30/100));
    } else if (basicSalary > 500000 && basicSalary <= 800000){
        return ((basicSalary)* (32.5/100));
    } else if (basicSalary > 800000){
        return ((basicSalary)* (35/100));
    }
}
function nhif (){
    if (basicSalary <= 5999){
        return ((grossSalary()) - 150);
    } else if (basicSalary >= 6000 && basicSalary < 8000) {
        return ((grossSalary()) - 300);
    
    } else if (basicSalary >= 8000 && basicSalary < 12000) {
        return ((grossSalary()) - 400);
    
    } else if (basicSalary >= 12000 && basicSalary < 15000) {
        return ((grossSalary()) - 500);
    
    } else if (basicSalary >= 15000 && basicSalary < 20000) {
        return ((grossSalary()) - 600);
    
    } else if (basicSalary >= 20000 && basicSalary < 25000) {
        return ((grossSalary()) - 750);
    
    } else if (basicSalary >= 25000 && basicSalary < 30000) {
        return ((grossSalary()) - 850);
    
    } else if (basicSalary >= 30000 && basicSalary < 35000) {
        return ((grossSalary()) - 900);
    
    } else if (basicSalary >= 35000 && basicSalary < 40000) {
        return ((grossSalary()) - 950);
    
    } else if (basicSalary >= 40000 && basicSalary < 45000) {
        return ((grossSalary()) - 1000);
    
    } else if (basicSalary >= 45000 && basicSalary < 50000) {
        return ((grossSalary()) - 1100);
    
    } else if (basicSalary >= 50000 && basicSalary < 60000) {
        return ((grossSalary()) - 1200);
    
    } else if (basicSalary >= 60000 && basicSalary < 70000) {
        return ((grossSalary()) - 1300);
    
    } else if (basicSalary >= 70000 && basicSalary < 80000) {
        return ((grossSalary()) - 1400);
    
    } else if (basicSalary >= 80000 && basicSalary < 90000) {
        return ((grossSalary()) - 1500);
    
    } else if (basicSalary >= 90000  && basicSalary < 100000) {
        return ((grossSalary()) - 1600);
    
    } else if (basicSalary >= 100000) {
        return ((grossSalary()) - 1700);
    }
};
function netSalary (){
    let salary = parseInt(nhif() - rateOfTax());
    return (salary);
}
console.log(`Your salary is ${basicSalary}`);
console.log(`Gross Salary:`+ grossSalary());
console.log(`Your Tax rate:`+ rateOfTax());
console.log(`Net Salary:`+ netSalary());
let basicSalary = parseInt(prompt("What is your basic salary:"));
// let benefits = parseInt(prompt("Enter your benefits:"));
let personalRelief = 2400;
let insuranceRelief = 2400;
let pensionFund = 2400;
let housingRelief = 2400;
let totalDeductions = parseInt(nhif() + tax() + pensionFund);

function grossSalary () {
    let totalSalary = parseInt(personalRelief + insuranceRelief + housingRelief + basicSalary);
    return (totalSalary);
}
function tax (){
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
        return (150);
    } else if (basicSalary >= 6000 && basicSalary < 8000) {
        return (300);
    
    } else if (basicSalary >= 8000 && basicSalary < 12000) {
        return (400);
    
    } else if (basicSalary >= 12000 && basicSalary < 15000) {
        return (500);
    
    } else if (basicSalary >= 15000 && basicSalary < 20000) {
        return (600);
    
    } else if (basicSalary >= 20000 && basicSalary < 25000) {
        return (750);
    
    } else if (basicSalary >= 25000 && basicSalary < 30000) {
        return (850);
    
    } else if (basicSalary >= 30000 && basicSalary < 35000) {
        return (900);
    
    } else if (basicSalary >= 35000 && basicSalary < 40000) {
        return (950);
    
    } else if (basicSalary >= 40000 && basicSalary < 45000) {
        return (1000);
    
    } else if (basicSalary >= 45000 && basicSalary < 50000) {
        return (1100);
    
    } else if (basicSalary >= 50000 && basicSalary < 60000) {
        return (1200);
    
    } else if (basicSalary >= 60000 && basicSalary < 70000) {
        return (1300);
    
    } else if (basicSalary >= 70000 && basicSalary < 80000) {
        return (1400);
    
    } else if (basicSalary >= 80000 && basicSalary < 90000) {
        return (1500);
    
    } else if (basicSalary >= 90000  && basicSalary < 100000) {
        return (1600);
    
    } else if (basicSalary >= 100000) {
        return (1700);
    }
};
let nssfAmount = parseInt(basicSalary * (6/100));
function nssfRate () {
    if (basicSalary <= 100000) {
        return (nssfAmount);
    } else if (basicSalary > 100000 && nssfAmount < 18000) {
        return (nssfAmount);
    } else if (basicSalary > 100000 && nssfAmount >= 18000) {
        return (18000);    
}
}
function netSalary (){
    let salary = parseInt(grossSalary() - totalDeductions);
    return (salary);
}

console.log(`Basic salary: Ksh ${basicSalary}`);
console.log(`NHIF contribution: Ksh `+ nhif());
console.log(`NSSF contribution: ksh ` + nssfRate());
console.log(`Total Tax: Ksh `+ tax());
console.log(`Gross Salary: Ksh `+ grossSalary());
console.log(`Total Deductions: Ksh ${totalDeductions}`);
console.log(`Net Salary: Ksh`+ netSalary());
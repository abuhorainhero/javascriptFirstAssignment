// feet থেকে mile এ convert করার function.
function feetToMile (feet) {
    if (0 <= feet) {
        var mile = (feet / 5280);
        return mile;
    }
    else {
        return "Please Enter the positive Value."
    }
}


// কাঠের হিসাব করার function.
function woodCalculator (chair, table, bed) {
    if (0 <= chair) {
        var chairWood = (chair * 1);
        if (0 <= table){
            var tableWood = (table * 3);
            if (0 <= bed){
                var bedWood = (bed * 5);
                var total = (chairWood + tableWood + bedWood);
                return total;
            }
            else {
                return "Please Enter the positive Value."
            }
        }
        else {
            return "Please Enter the positive Value."
        }
    }
    else {
        return "Please Enter the positive Value."
    }
}


// ইটের হিসাব করার জন্য function.
function brickCalculator (building) {
    var feetBricks = 1000;
    if (building >= 0 && building <= 10) {
        var totalFeet = (building * 15);
        var totalBricks = (totalFeet * feetBricks); 
        return totalBricks;
    }
    else if (building >= 0 && building <= 20) {
        var extraDownTenBuildingBricks = 30000;
        var totalFeet = (building * 12);
        var totalBricks = ((totalFeet * feetBricks) + extraDownTenBuildingBricks);
        return totalBricks;
    }    
    else if (building >= 0 && building >= 21) {
        var extraDownTenBuildingBricks = 50000;
        var extraDownElevenToTwentyBricks = 20000;
        var totalFeet = (building * 10);
        var extraTotalBricks = (extraDownTenBuildingBricks + extraDownElevenToTwentyBricks);
        var totalBricks = ((totalFeet * feetBricks) + extraTotalBricks);
        return totalBricks;
    }
    else {
        return "Please enter the positive value."
    }
}


// সবচেয়ে ছোট নাম বাহির করার function.
function tinyFriend (nameArray) {
    var smallName = nameArray[0];
    for (var i = 0; i < nameArray.length; i++) {
        var element = nameArray[i];
        if (element.length < smallName.length) {
            smallName = element;
        }
    }
    return smallName;  
}

// console.log("feet to mile : " , feetToMile(5000));
// console.log("wood calculator : ", woodCalculator(30, 15, 12));
// console.log("Brick calculator : ", brickCalculator(120));
// console.log("friend array : ", tinyFriend(["rumi", "abu horain", "tusar", "abu"]));
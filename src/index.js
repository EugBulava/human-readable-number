module.exports = function toReadable (number) {
    
    var first_name_numbers = ['zero', 'one', 'two', 'three','four','five','six', 'seven','eight','nine','ten','eleven','twelve','thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen'];
    var second_name_numbers = ['twenty', 'thirty', 'forty', 'fifty','sixty','seventy','eighty', 'ninety'];

    var result = '';

    if(number<=19){
        result = first_name_numbers[number];
    }else if(number>19 && number<=99){
        var a = String(number).split("");
        if(first_name_numbers[a[1]] == 'zero'){
            result = second_name_numbers[a[0]-2]
        }else{
            result = second_name_numbers[a[0]-2] + " " + first_name_numbers[a[1]];
        }
    }else if(number>99 && number<=999){
        var a = String(number).split("");
        if(first_name_numbers[a[1]] == 'zero' && first_name_numbers[a[2]] !== 'zero'){
            result = first_name_numbers[a[0]] + " hundred "  +  first_name_numbers[a[2]];
        }else if(first_name_numbers[a[1]] == 'one'){
            result = first_name_numbers[a[0]] + " hundred " + first_name_numbers[a[1]+a[2]];
        }else if(first_name_numbers[a[2]] == 'zero' && first_name_numbers[a[1]] !== 'zero') {
            result = first_name_numbers[a[0]] + " hundred " + second_name_numbers[a[1]-2];
        }else if(first_name_numbers[a[1]] == 'zero' && first_name_numbers[a[2]] == 'zero'){
            result = first_name_numbers[a[0]] + " hundred";
        }else if(first_name_numbers[a[1]] !== 'zero' && first_name_numbers[a[2]] !== 'zero'){
            result = first_name_numbers[a[0]] + " hundred " + second_name_numbers[a[1]-2] + " " + first_name_numbers[a[2]];
        }
    }
    return result;
}

//console.log(toReadable (200));

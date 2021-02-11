import { isString } from "util";

function abbreviateString(str) {
    if(str==null || parseInt(str)>=0 || str.length<=0 || str.includes('[') || str.includes('{'))
    {
        console.log('invalid parameters')
    }
    else{
        var returnString="";
        var splitStr = str.split(' ');
        returnString=splitStr[0]+" "+splitStr[splitStr.length-1].charAt(0)+".";
        console.log(returnString);
    }
}

export { abbreviateString };

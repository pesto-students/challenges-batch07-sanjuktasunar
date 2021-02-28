import { isString } from "util";

function abbreviateString(str) {
    var returnString="";
    if(str==null || parseInt(str)>=0 || str.length<=0 || str.includes('[') || str.includes('{'))
    {
        returnString='invalid parameters';
    }
    else{
        
        var splitStr = str.split(' ');
        returnString=splitStr[0]+" "+splitStr[splitStr.length-1].charAt(0)+".";
    }
    return returnString
}


export { abbreviateString };

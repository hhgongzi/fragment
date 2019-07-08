import f from "../addZero";
Date.prototype.form = function (all) {
    var o = {
        "y": this.getFullYear(),//年
        "M": this.getMonth() + 1,                 //月份   
        "d": this.getDate(),                    //日   
        "h": this.getHours(),                   //小时   
        "m": this.getMinutes(),                 //分   
        "s": this.getSeconds(),                 //秒   
        "q": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds()             //毫秒   
    };
    return all ? o : '' + o.y + f(o.M, 2) + f(o.d, 2);
};
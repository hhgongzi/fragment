import l from "../limitType";
export function cacuDays(begin, end) {
    var days = 0;
    if (l([begin, end], ["date"], true)) {
        var msec = end.getTime() - begin.getTime();   //时间差的毫秒数 
        days = Math.floor(msec / (24 * 3600 * 1000));
    }
    return Math.abs(days);
}
export default cacuDays;
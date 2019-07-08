import l from "../limitType";
export function OtoS(params) {
    var strR = "";
    if (l([params], ['object'], true)) {
        for (var i in params) {
            if (!params.hasOwnProperty(i)) continue;
            strR += (i + "=" + params[i] + "&")
        };
    }
    return strR.slice(0, -1);
};
export default OtoS;
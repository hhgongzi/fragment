import l from "../limitType";
export function StoO(params) {
    var O = {};
    if (l([params], ['string'], true) && params.indexOf("=") !== -1) {
        var vars = params.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            O[pair[0]] = pair[1]
        }
    }
    return O;
};
export default StoO;
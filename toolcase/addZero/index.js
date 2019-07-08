import l from "../limitType";
export function addZero(data, num) {
    if (l([data], ['number',"string"], true)) {
        data += '';
        for (let index = 0; index < num; index++) {
            if (data.length >= num) break;
            data = "0" + data;
        };
    };
    return data;

};
export default addZero;
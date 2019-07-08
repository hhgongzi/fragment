import T from "../$type";
import "../AND";
export function limitType(dataArr, TypesArr, boolean) {
    var R = [];
    for (var j = 0; j < dataArr.length; j++) {
        R[j] = !boolean;
        for (var i = 0; i < TypesArr.length; i++) {
            if (boolean) {
                R[j] = R[j] || T(dataArr[j]) === TypesArr[i]

            } else {
                R[j] = R[j] && T(dataArr[j]) !== TypesArr[i]
            }
        };
    }

    return R.AND();
}
export default limitType;
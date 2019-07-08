import turn from "../StoO";
export function getParam(key){
    return turn(window.location.search.substring(1))[key]
}
export default getParam;
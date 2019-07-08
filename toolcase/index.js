export * from "./$extend";
export * from "./$isPlainObject";
export * from "./$isWindow";
export * from "./$type";
export * from "./addZero";
// export * from "./AND";//prorotype
export * from "./cacuDays";
// export * from "./copy";//prorotype
// export * from "./delete";//prorotype
// export * from "./formDate";//prorotype
// export * from "./getKey";//prototype
export * from "./getParam";
// export * from "./isJSON";//prototype
export * from "./isNullUndefined";
export * from "./limitType";
// export * from "./OR";//prototype
export * from "./OtoS";
export * from "./StoO";


export default {
    addZero: "addAero('3',2) =>'03'",
    AND: "[true,true,false].AND()=>false",
    cacuDays: "cacuDays(new Date('2019.6.30'),new Date('2019.7.1')=>1",
    copy: "var a=[1,2].copy(); var b={a:1,b:2}.copy()",
    delete: "[1,2,3].delete(2)=>[1,3];{a:1,b:2}.delete(1)=>{b:2}",
    formDate: "new Date().formDate()=> 20190701",
    getKey: "[1,2,3,2].getKey(2)=>[1,3];{a:1,b:2}.getKey(1)=>['a']",
    isJSON: "同'jq'的$isPlainObject",
    isNullUndefined: "isNullUndefined('')=>false;  isNullUndefined(null)=>true;",
    limitType: "limitType([arg1,arg2],[type1,type2],boolean),limitType([1,'2'],['number','string'],true)=>true",
    "tip$": "带有'$'使用方法同jq",
    "tip!": "prototype 上方法有副作用 tree-shaking 无法shake掉"
}
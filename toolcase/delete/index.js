Array.prototype.delete=function(v){
    for (var i=0;i<this.length;i++){
        if(this[i]  == v) {
            this.splice(i,1);
            break;
        }
    }
}
Object.prototype.delete=function(v){
    for(var i in this){
        if(this[i]===v){
            delete this[i]
        }
    }
}
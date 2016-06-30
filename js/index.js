/**
 * Created by heyong on 16/6/30.
 */
(function(root){
    function Ninja(){}
    Ninja.prototype={
        constructor:Ninja,
        /*为对象添加重载方法*/
        addMethod:function(object,name,fn){
            var old=object[name];
            object[name]=function(){
                if(arguments.length==fn.length){
                    return fn.apply(this,arguments);
                }
                else if(typeof old =='function'){
                    return old.apply(this,arguments);
                }
            }
        }
    };
    root.Ninja=Ninja;
})(window);

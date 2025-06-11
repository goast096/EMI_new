/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function(global,factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
    return factory(w);};}else{factory(global);}})(typeof window!=="undefined"?window:this,function(window,noGlobal){"use strict";var arr=[];var getProto=Object.getPrototypeOf;var slice=arr.slice;var flat=arr.flat?function(array){return arr.flat.call(array);}:function(array){return arr.concat.apply([],array);};var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){return typeof obj==="function"&&typeof obj.nodeType!=="number"&&typeof obj.item!=="function";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var document=window.document;var preservedScriptAttributes={type:true,src:true,nonce:true,noModule:true};function DOMEval(code,node,doc){doc=doc||document;var i,val,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){val=node[i]||node.getAttribute&&node.getAttribute(i);if(val){script.setAttribute(i,val);}}}
    doc.head.appendChild(script).parentNode.removeChild(script);}
    function toType(obj){if(obj==null){return obj+"";}
        return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}
    var
        version="3.6.0",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,length:0,toArray:function(){return slice.call(this);},get:function(num){if(num==null){return slice.call(this);}
            return num<0?this[num+this.length]:this[num];},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},even:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return(i+1)%2;}));},odd:function(){return this.pushStack(jQuery.grep(this,function(_elem,i){return i%2;}));},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
        if(typeof target!=="object"&&!isFunction(target)){target={};}
        if(i===length){target=this;i--;}
        for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){copy=options[name];if(name==="__proto__"||target===copy){continue;}
            if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){src=target[name];if(copyIsArray&&!Array.isArray(src)){clone=[];}else if(!copyIsArray&&!jQuery.isPlainObject(src)){clone={};}else{clone=src;}
                copyIsArray=false;target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
        return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isPlainObject:function(obj){var proto,Ctor;if(!obj||toString.call(obj)!=="[object Object]"){return false;}
            proto=getProto(obj);if(!proto){return true;}
            Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
            return true;},globalEval:function(code,options,doc){DOMEval(code,{nonce:options&&options.nonce},doc);},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
            return obj;},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
            return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
            first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
            return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
            return flat(ret);},guid:1,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(_i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length"in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}
        return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
    var Sizzle=
        /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
        (function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),nonnativeSelectorCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
            return 0;},hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,pushNative=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
            return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|"+"ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+"*([*^$|!~]?=)"+whitespace+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+
            whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+".*"+")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+
            whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rdescend=new RegExp(whitespace+"|>"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+
                whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+
                whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rhtml=/HTML$/i,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,runescape=new RegExp("\\\\[\\da-fA-F]{1,6}"+whitespace+"?|\\\\([^\\r\\n\\f])","g"),funescape=function(escape,nonHex){var high="0x"+escape.slice(1)-0x10000;return nonHex?nonHex:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD";}
            return ch.slice(0,-1)+"\\"+
                ch.charCodeAt(ch.length-1).toString(16)+" ";}
            return"\\"+ch;},unloadHandler=function(){setDocument();},inDisabledFieldset=addCombinator(function(elem){return elem.disabled===true&&elem.nodeName.toLowerCase()==="fieldset";},{dir:"parentNode",next:"legend"});try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){pushNative.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
                target.length=j-1;}};}
            function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
                if(!seed){setDocument(context);context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
                    if(support.qsa&&!nonnativeSelectorCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))&&(nodeType!==1||context.nodeName.toLowerCase()!=="object")){newSelector=selector;newContext=context;if(nodeType===1&&(rdescend.test(selector)||rcombinators.test(selector))){newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;if(newContext!==context||!support.scope){if((nid=context.getAttribute("id"))){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",(nid=expando));}}
                        groups=tokenize(selector);i=groups.length;while(i--){groups[i]=(nid?"#"+nid:":scope")+" "+
                            toSelector(groups[i]);}
                        newSelector=groups.join(",");}
                        try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){nonnativeSelectorCache(selector,true);}finally{if(nid===expando){context.removeAttribute("id");}}}}}
                return select(selector.replace(rtrim,"$1"),context,results,seed);}
            function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
                return(cache[key+" "]=value);}
                return cache;}
            function markFunction(fn){fn[expando]=true;return fn;}
            function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{if(el.parentNode){el.parentNode.removeChild(el);}
                el=null;}}
            function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
            function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;if(diff){return diff;}
                if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
                return a?1:-1;}
            function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
            function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
            function createDisabledPseudo(disabled){return function(elem){if("form"in elem){if(elem.parentNode&&elem.disabled===false){if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}
                return elem.isDisabled===disabled||elem.isDisabled!==!disabled&&inDisabledFieldset(elem)===disabled;}
                return elem.disabled===disabled;}else if("label"in elem){return elem.disabled===disabled;}
                return false;};}
            function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
            function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
            support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var namespace=elem&&elem.namespaceURI,docElem=elem&&(elem.ownerDocument||elem).documentElement;return!rhtml.test(namespace||docElem&&docElem.nodeName||"HTML");};setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;if(doc==document||doc.nodeType!==9||!doc.documentElement){return document;}
                document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if(preferredDoc!=document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}
                support.scope=assert(function(el){docElem.appendChild(el).appendChild(document.createElement("div"));return typeof el.querySelectorAll!=="undefined"&&!el.querySelectorAll(":scope fieldset div").length;});support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}
                    elems=context.getElementsByName(id);i=0;while((elem=elems[i++])){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}
                    return[];}};}
                Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
                    return tmp;}
                    return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(el){var input;docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
                    if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
                    if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
                    input=document.createElement("input");input.setAttribute("name","");el.appendChild(input);if(!el.querySelectorAll("[name='']").length){rbuggyQSA.push("\\["+whitespace+"*name"+whitespace+"*="+
                        whitespace+"*(?:''|\"\")");}
                    if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
                    if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}
                    el.querySelectorAll("\\\f");rbuggyQSA.push("[\\r\\n\\f]");});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
                    if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
                    docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
                    el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
                if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(el){support.disconnectedMatch=matches.call(el,"*");matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
                rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
                    return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
                    var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
                    compare=(a.ownerDocument||a)==(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a==document||a.ownerDocument==preferredDoc&&contains(preferredDoc,a)){return-1;}
                        if(b==document||b.ownerDocument==preferredDoc&&contains(preferredDoc,b)){return 1;}
                        return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
                    return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
                    var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a==document?-1:b==document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
                    cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
                    cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
                    while(ap[i]===bp[i]){i++;}
                    return i?siblingCheck(ap[i],bp[i]):ap[i]==preferredDoc?-1:bp[i]==preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){setDocument(elem);if(support.matchesSelector&&documentIsHTML&&!nonnativeSelectorCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){nonnativeSelectorCache(expr,true);}}
                return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!=document){setDocument(context);}
                return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!=document){setDocument(elem);}
                var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
                while(j--){results.splice(duplicates[j],1);}}
                sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
                return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
                        return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
                        match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
                        return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
                        if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
                        return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
                        if(!operator){return true;}
                        result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,_argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,_context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
                        start=dir=type==="only"&&!start&&"nextSibling";}
                        return true;}
                        start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
                            if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}
                                if(node===elem){break;}}}}}
                        diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
                        if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
                        return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,_context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,_context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
                        lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
                        return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
                        return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(_matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(_matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
                        return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
                        return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument>length?length:argument;for(;--i>=0;){matchIndexes.push(i);}
                        return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
                        return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
            for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
            function setFilters(){}
            setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
                soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
                    groups.push((tokens=[]));}
                    matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
                    for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
                    if(!matched){break;}}
                return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
                return selector;}
            function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}
                return false;}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{uniqueCache[key]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}
                return false;};}
            function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
                return true;}:matchers[0];}
            function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
                return results;}
            function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
                return newUnmatched;}
            function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
                if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
                return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
                    if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
                    if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
                        postFinder(null,(matcherOut=[]),temp,xml);}
                        i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
            function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
                return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
                matchers.push(matcher);}}
                return elementMatcher(matchers);}
            function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context==document||context||outermost;}
                for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!=document){setDocument(elem);xml=!documentIsHTML;}
                    while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break;}}
                    if(outermost){dirruns=dirrunsUnique;}}
                    if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
                        if(seed){unmatched.push(elem);}}}
                matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
                    if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
                        setMatched=condense(setMatched);}
                    push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
                if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
                return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
            compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
                i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
                cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
                return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
                selector=selector.slice(tokens.shift().value.length);}
                i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
                    if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
                        break;}}}}
                (compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(el){return el.compareDocumentPosition(document.createElement("fieldset"))&1;});if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
            if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,_name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
            if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
            return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
        matched.push(elem);}}
        return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
        return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();}
    var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
        if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
        if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not;});}
        return jQuery.filter(qualifier,elements,not);}
    jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
        if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}
        return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
            ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
            return len>1?jQuery.uniqueSort(ret):ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
        root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
            if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
                return this;}else{elem=document.getElementById(match[2]);if(elem){this[0]=elem;this.length=1;}
                return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this[0]=selector;this.length=1;return this;}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery);}
        return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(targets?targets.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}
            return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
            if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}
            return indexOf.call(this,elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
        return cur;}
    jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,_i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,_i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,_i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){if(elem.contentDocument!=null&&getProto(elem.contentDocument)){return elem.contentDocument;}
            if(nodeName(elem,"template")){elem=elem.content||elem;}
            return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
        if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
        if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}
            if(rparentsprev.test(name)){matched.reverse();}}
        return this.pushStack(matched);};});var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}
    jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
        firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=locked||options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
            if(!options.memory){memory=false;}
            firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
                (function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
                return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
                return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=queue=[];if(!memory&&!firing){list=memory="";}
                return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
                return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};function Identity(v){return v;}
    function Thrower(ex){throw ex;}
    function adoptValue(value,resolve,reject,noValue){var method;try{if(value&&isFunction((method=value.promise))){method.call(value).done(resolve).fail(reject);}else if(value&&isFunction((method=value.then))){method.call(value,resolve,reject);}else{resolve.apply(undefined,[value].slice(noValue));}}catch(value){reject.apply(undefined,[value]);}}
    jQuery.extend({Deferred:function(func){var tuples=[["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},"catch":function(fn){return promise.then(null,fn);},pipe:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(_i,tuple){var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;if(depth<maxDepth){return;}
                returned=handler.apply(that,args);if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}
                then=returned&&(typeof returned==="object"||typeof returned==="function")&&returned.then;if(isFunction(then)){if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));}else{maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}}else{if(handler!==Identity){that=undefined;args=[returned];}
                    (special||deferred.resolveWith)(that,args);}},process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}
                if(depth+1>=maxDepth){if(handler!==Thrower){that=undefined;args=[e];}
                    deferred.rejectWith(that,args);}}};if(depth){process();}else{if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}
                window.setTimeout(process);}};}
                return jQuery.Deferred(function(newDefer){tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[3-i][2].disable,tuples[3-i][3].disable,tuples[0][2].lock,tuples[0][3].lock);}
            list.add(tuple[3].fire);deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
            return deferred;},when:function(singleValue){var
            remaining=arguments.length,i=remaining,resolveContexts=Array(i),resolveValues=slice.call(arguments),primary=jQuery.Deferred(),updateFunc=function(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(!(--remaining)){primary.resolveWith(resolveContexts,resolveValues);}};};if(remaining<=1){adoptValue(singleValue,primary.done(updateFunc(i)).resolve,primary.reject,!remaining);if(primary.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return primary.then();}}
            while(i--){adoptValue(resolveValues[i],updateFunc(i),primary.reject);}
            return primary.promise();}});var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn).catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({isReady:false,readyWait:1,ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
            jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
            readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}
    if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}
    var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}
        if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,_key,value){return bulk.call(jQuery(elem),value);};}}
        if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
        if(chainable){return elems;}
        if(bulk){return fn.call(elems);}
        return len?fn(elems[0],key):emptyGet;};var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;function fcamelCase(_all,letter){return letter.toUpperCase();}
    function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}
    var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){this.expando=jQuery.expando+Data.uid++;}
    Data.uid=1;Data.prototype={cache:function(owner){var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}
            return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[camelCase(data)]=value;}else{for(prop in data){cache[camelCase(prop)]=data[prop];}}
            return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function(owner,key,value){if(key===undefined||((key&&typeof key==="string")&&value===undefined)){return this.get(owner,key);}
            this.set(owner,key,value);return value!==undefined?value:key;},remove:function(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}
            if(key!==undefined){if(Array.isArray(key)){key=key.map(camelCase);}else{key=camelCase(key);key=key in cache?[key]:(key.match(rnothtmlwhite)||[]);}
                i=key.length;while(i--){delete cache[key[i]];}}
            if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}
        if(data==="false"){return false;}
        if(data==="null"){return null;}
        if(data===+data+""){return+data;}
        if(rbrace.test(data)){return JSON.parse(data);}
        return data;}
    function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}
        dataUser.set(elem,key,data);}else{data=undefined;}}
        return data;}
    jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
            dataPriv.set(elem,"hasDataAttrs",true);}}
            return data;}
            if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}
            return access(this,function(value){var data;if(elem&&value===undefined){data=dataUser.get(elem,key);if(data!==undefined){return data;}
                data=dataAttr(elem,key);if(data!==undefined){return data;}
                return;}
                this.each(function(){dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
            return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
            if(fn){if(type==="fx"){queue.unshift("inprogress");}
                delete hooks.stop;fn.call(elem,next,hooks);}
            if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
            if(arguments.length<setter){return jQuery.queue(this[0],type);}
            return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
            type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
            resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var documentElement=document.documentElement;var isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem);},composed={composed:true};if(documentElement.getRootNode){isAttached=function(elem){return jQuery.contains(elem.ownerDocument,elem)||elem.getRootNode(composed)===elem.ownerDocument;};}
    var isHiddenWithinTree=function(elem,el){elem=el||elem;return elem.style.display==="none"||elem.style.display===""&&isAttached(elem)&&jQuery.css(elem,"display")==="none";};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=elem.nodeType&&(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){initial=initial/2;unit=unit||initialInUnit[3];initialInUnit=+initial||1;while(maxIterations--){jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}
        initialInUnit=initialInUnit/scale;}
        initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);valueParts=valueParts||[];}
        if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
        return adjusted;}
    var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}
        temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}
        defaultDisplayMap[nodeName]=display;return display;}
    function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
        display=elem.style.display;if(show){if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}
            if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";dataPriv.set(elem,"display",display);}}}
        for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}
        return elements;}
    jQuery.fn.extend({show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
            return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);var rscriptType=(/^$|^module$|\/(?:java|ecma)script/i);(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;div.innerHTML="<option></option>";support.option=!!div.lastChild;})();var wrapMap={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!support.option){wrapMap.optgroup=wrapMap.option=[1,"<select multiple='multiple'>","</select>"];}
    function getAll(context,tag){var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}
        if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}
        return ret;}
    function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}
    var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,attached,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(toType(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
        jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent="";}}}
        fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
            continue;}
            attached=isAttached(elem);tmp=getAll(fragment.appendChild(elem),"script");if(attached){setGlobalEval(tmp);}
            if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
        return fragment;}
    var rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
    function returnFalse(){return false;}
    function expectSync(elem,type){return(elem===safeActiveElement())===(type==="focus");}
    function safeActiveElement(){try{return document.activeElement;}catch(err){}}
    function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
        for(type in types){on(elem,type,selector,data,types[type],one);}
        return elem;}
        if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
        if(fn===false){fn=returnFalse;}else if(!fn){return elem;}
        if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
        return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
    jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!acceptData(elem)){return;}
            if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
            if(selector){jQuery.find.matchesSelector(documentElement,selector);}
            if(!handler.guid){handler.guid=jQuery.guid++;}
            if(!(events=elemData.events)){events=elemData.events=Object.create(null);}
            if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}
            types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
                special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}
                if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
                if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
                jQuery.event.global[type]=true;}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}
            types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
                continue;}
                special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
                    if(special.remove){special.remove.call(elem,handleObj);}}}
                if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
                    delete events[type];}}
            if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(nativeEvent){var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),event=jQuery.event.fix(nativeEvent),handlers=(dataPriv.get(this,"events")||Object.create(null))[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}
            event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
            handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||handleObj.namespace===false||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
            if(special.postDispatch){special.postDispatch.call(this,event);}
            return event.result;},handlers:function(event,handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
            if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}
            if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}
            cur=this;if(delegateCount<handlers.length){handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});}
            return handlerQueue;},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{noBubble:true},click:{setup:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click",returnTrue);}
                    return false;},trigger:function(data){var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,"input")){leverageNative(el,"click");}
                    return true;},_default:function(event){var target=event.target;return rcheckableType.test(target.type)&&target.click&&nodeName(target,"input")&&dataPriv.get(target,"click")||nodeName(target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};function leverageNative(el,type,expectSync){if(!expectSync){if(dataPriv.get(el,type)===undefined){jQuery.event.add(el,type,returnTrue);}
        return;}
        dataPriv.set(el,type,false);jQuery.event.add(el,type,{namespace:false,handler:function(event){var notAsync,result,saved=dataPriv.get(this,type);if((event.isTrigger&1)&&this[type]){if(!saved.length){saved=slice.call(arguments);dataPriv.set(this,type,saved);notAsync=expectSync(this,type);this[type]();result=dataPriv.get(this,type);if(saved!==result||notAsync){dataPriv.set(this,type,false);}else{result={};}
                if(saved!==result){event.stopImmediatePropagation();event.preventDefault();return result&&result.value;}}else if((jQuery.event.special[type]||{}).delegateType){event.stopPropagation();}}else if(saved.length){dataPriv.set(this,type,{value:jQuery.event.trigger(jQuery.extend(saved[0],jQuery.Event.prototype),saved.slice(1),this)});event.stopImmediatePropagation();}}});}
    jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
        if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;this.target=(src.target&&src.target.nodeType===3)?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;}else{this.type=src;}
        if(props){jQuery.extend(this,props);}
        this.timeStamp=src&&src.timeStamp||Date.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}
            this.stopPropagation();}};jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,code:true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:true},jQuery.event.addProp);jQuery.each({focus:"focusin",blur:"focusout"},function(type,delegateType){jQuery.event.special[type]={setup:function(){leverageNative(this,type,expectSync);return false;},trigger:function(){leverageNative(this,type);return true;},_default:function(){return true;},delegateType:delegateType};});jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
            return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
            if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
                return this;}
            if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
            if(fn===false){fn=returnFalse;}
            return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var
        rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}
        return elem;}
    function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
    function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}
        return elem;}
    function cloneCopyEvent(src,dest){var i,l,type,pdataOld,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
        if(dataPriv.hasData(src)){pdataOld=dataPriv.get(src);events=pdataOld.events;if(events){dataPriv.remove(dest,"handle events");for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}
        if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}
    function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
    function domManip(collection,args,callback,ignored){args=flat(args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);if(valueIsFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}
        domManip(self,args,callback,ignored);});}
        if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
            if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
                callback.call(collection[i],node,i);}
                if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){if(jQuery._evalUrl&&!node.noModule){jQuery._evalUrl(node.src,{nonce:node.nonce||node.getAttribute("nonce")},doc);}}else{DOMEval(node.textContent.replace(rcleanScript,""),node,doc);}}}}}}
        return collection;}
    function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
        if(node.parentNode){if(keepData&&isAttached(node)){setGlobalEval(getAll(node,"script"));}
            node.parentNode.removeChild(node);}}
        return elem;}
    jQuery.extend({htmlPrefilter:function(html){return html;},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=isAttached(elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}
            if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
            destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
            return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
            elem[dataPriv.expando]=undefined;}
            if(elem[dataUser.expando]){elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent="";}}
            return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}
            if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
                elem=0;}catch(e){}}
            if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
        return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}
        return view.getComputedStyle(elem);};var swap=function(elem,options,callback){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
        ret=callback.call(elem);for(name in options){elem.style[name]=old[name];}
        return ret;};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){function computeStyleTests(){if(!div){return;}
        container.style.cssText="position:absolute;left:-11111px;width:60px;"+"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+"margin:auto;border:1px;padding:1px;"+"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;div.style.position="absolute";scrollboxSizeVal=roundPixelMeasures(div.offsetWidth/3)===12;documentElement.removeChild(container);div=null;}
        function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}
        var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableTrDimensionsVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
        div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function(){computeStyleTests();return scrollboxSizeVal;},reliableTrDimensions:function(){var table,tr,trChild,trStyle;if(reliableTrDimensionsVal==null){table=document.createElement("table");tr=document.createElement("tr");trChild=document.createElement("div");table.style.cssText="position:absolute;left:-11111px;border-collapse:separate";tr.style.cssText="border:1px solid";tr.style.height="1px";trChild.style.height="9px";trChild.style.display="block";documentElement.appendChild(table).appendChild(tr).appendChild(trChild);trStyle=window.getComputedStyle(tr);reliableTrDimensionsVal=(parseInt(trStyle.height,10)+
                parseInt(trStyle.borderTopWidth,10)+
                parseInt(trStyle.borderBottomWidth,10))===tr.offsetHeight;documentElement.removeChild(table);}
                return reliableTrDimensionsVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!isAttached(elem)){ret=jQuery.style(elem,name);}
        if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
        return ret!==undefined?ret+"":ret;}
    function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
            return(this.get=hookFn).apply(this,arguments);}};}
    var cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style,vendorProps={};function vendorPropName(name){var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
    function finalPropName(name){var final=jQuery.cssProps[name]||vendorProps[name];if(final){return final;}
        if(name in emptyStyle){return name;}
        return vendorProps[name]=vendorPropName(name)||name;}
    var
        rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"};function setPositiveNumber(_elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}
    function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0;if(box===(isBorderBox?"border":"content")){return 0;}
        for(;i<4;i+=2){if(box==="margin"){delta+=jQuery.css(elem,box+cssExpand[i],true,styles);}
            if(!isBorderBox){delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
                if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
        if(!isBorderBox&&computedVal>=0){delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
            computedVal-
            delta-
            extra-
            0.5))||0;}
        return delta;}
    function getWidthOrHeight(elem,dimension,extra){var styles=getStyles(elem),boxSizingNeeded=!support.boxSizingReliable()||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox,val=curCSS(elem,dimension,styles),offsetProp="offset"+dimension[0].toUpperCase()+dimension.slice(1);if(rnumnonpx.test(val)){if(!extra){return val;}
        val="auto";}
        if((!support.boxSizingReliable()&&isBorderBox||!support.reliableTrDimensions()&&nodeName(elem,"tr")||val==="auto"||!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline")&&elem.getClientRects().length){isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";valueIsBorderBox=offsetProp in elem;if(valueIsBorderBox){val=elem[offsetProp];}}
        val=parseFloat(val)||0;return(val+
            boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,val))+"px";}
    jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"gridArea":true,"gridColumn":true,"gridColumnEnd":true,"gridColumnStart":true,"gridRow":true,"gridRowEnd":true,"gridRowStart":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
            var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;if(!isCustomProp){name=finalPropName(origName);}
            hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
                if(value==null||value!==value){return;}
                if(type==="number"&&!isCustomProp){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
                if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
                if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
                return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);if(!isCustomProp){name=finalPropName(origName);}
            hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
            if(val===undefined){val=curCSS(elem,name,styles);}
            if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
            if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
            return val;}});jQuery.each(["height","width"],function(_i,dimension){jQuery.cssHooks[dimension]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function(elem,value,extra){var matches,styles=getStyles(elem),scrollboxSizeBuggy=!support.scrollboxSize()&&styles.position==="absolute",boxSizingNeeded=scrollboxSizeBuggy||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra?boxModelAdjustment(elem,dimension,extra,isBorderBox,styles):0;if(isBorderBox&&scrollboxSizeBuggy){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
            parseFloat(styles[dimension])-
            boxModelAdjustment(elem,dimension,"border",false,styles)-
            0.5);}
            if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}
            return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-
        swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
            return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
            return map;}
            return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
    jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
            this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
            if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
            return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
                result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(jQuery.cssHooks[tween.prop]||tween.elem.style[finalPropName(tween.prop)]!=null)){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
        fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}
        jQuery.fx.tick();}}
    function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=Date.now());}
    function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
        if(includeWidth){attrs.opacity=attrs.width=type;}
        return attrs;}
    function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
    function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
        hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
        for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
            orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}
        propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}
        if(isBox&&elem.nodeType===1){opts.overflow=[style.overflow,style.overflowX,style.overflowY];restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}
            display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}
            if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}
                style.display="inline-block";}}}
        if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}
        propTween=false;for(prop in orig){if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}
            if(toggle){dataShow.hidden=!hidden;}
            if(hidden){showHide([elem],true);}
            anim.done(function(){if(!hidden){showHide([elem]);}
                dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}
            propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}
    function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}
        if(index!==name){props[name]=value;delete props[index];}
        hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
    function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
        var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
        deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}
        if(!length){deferred.notifyWith(elem,[animation,1,0]);}
        deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
            stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
            if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
            return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}
        return result;}}
        jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
        animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}
    jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}
            var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}
        if(opt.queue==null||opt.queue===true){opt.queue="fx";}
        opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}
            if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHiddenWithinTree).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
            if(clearQueue){this.queue(type||"fx",[]);}
            return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
                for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
                if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
            return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
                for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
                for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
                delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(_i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
        if(!timers.length){jQuery.fx.stop();}
        fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}
        inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
            if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
            if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}
            if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
                if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
                elem.setAttribute(name,value+"");return value;}
            if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
            ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
                    return value;}}}},removeAttr:function(elem,value){var name,i=0,attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){elem.removeAttribute(name);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
            return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(_i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}
        return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
            if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
            if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
                return(elem[name]=value);}
            if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
            return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}
                    if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}
                    return-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
            return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}
    jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}
    function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}
    function classesToArray(value){if(Array.isArray(value)){return value;}
        if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}
        return[];}
    jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
            classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
                finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
            return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
            if(!arguments.length){return this.attr("class","");}
            classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}
                finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
            return this;},toggleClass:function(value,stateVal){var type=typeof value,isValidValue=type==="string"||Array.isArray(value);if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}
            if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
            return this.each(function(){var className,i,self,classNames;if(isValidValue){i=0;self=jQuery(this);classNames=classesToArray(value);while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className);}
                if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}
            return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
            ret=elem.value;if(typeof ret==="string"){return ret.replace(rreturn,"");}
            return ret==null?"":ret;}
            return;}
            valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
                if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
                if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
                hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:stripAndCollapse(jQuery.text(elem));}},select:{get:function(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}
                    for(;i<max;i++){option=options[i];if((option.selected||i===index)&&!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
                        values.push(value);}}
                    return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}
                    if(!optionSet){elem.selectedIndex=-1;}
                    return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(Array.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});support.focusin="onfocusin"in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
            if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
            if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
            ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
            data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
            if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
                for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
                if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
            i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||Object.create(null))[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}
                handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
            event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&isFunction(elem[type])&&!isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
                jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}
                elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}
                jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
            return event.result;},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this.document||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
            dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this.document||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}
    var location=window.location;var nonce={guid:Date.now()};var rquery=(/\?/);jQuery.parseXML=function(data){var xml,parserErrorElem;if(!data||typeof data!=="string"){return null;}
        try{xml=(new window.DOMParser()).parseFromString(data,"text/xml");}catch(e){}
        parserErrorElem=xml&&xml.getElementsByTagName("parsererror")[0];if(!xml||parserErrorElem){jQuery.error("Invalid XML: "+(parserErrorElem?jQuery.map(parserErrorElem.childNodes,function(el){return el.textContent;}).join("\n"):data));}
        return xml;};var
        rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
    jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+
        encodeURIComponent(value==null?"":value);};if(a==null){return"";}
        if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
        return s.join("&");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(_i,elem){var val=jQuery(this).val();if(val==null){return null;}
            if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}
            return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var
        r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
        var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
    function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
        return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
    function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
        if(deep){jQuery.extend(true,target,deep);}
        return target;}
    function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
        if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
        if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
            if(!firstDataType){firstDataType=type;}}
            finalDataType=finalDataType||firstDataType;}
        if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
            return responses[finalDataType];}}
    function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
        current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
            if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
            prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
                break;}}}}
                if(conv!==true){if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
        return{state:"success",data:response};}
    jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":JSON.parse,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
            options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,completed,fireGlobals,i,uncached,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()+" "]=(responseHeaders[match[1].toLowerCase()+" "]||[]).concat(match[2]);}}
                    match=responseHeaders[key.toLowerCase()+" "];}
                    return match==null?null:match.join(", ");},getAllResponseHeaders:function(){return completed?responseHeadersString:null;},setRequestHeader:function(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}
                    return this;},overrideMimeType:function(type){if(completed==null){s.mimeType=type;}
                    return this;},statusCode:function(map){var code;if(map){if(completed){jqXHR.always(map[jqXHR.status]);}else{for(code in map){statusCode[code]=[statusCode[code],map[code]];}}}
                    return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
                    done(0,finalText);return this;}};deferred.promise(jqXHR);s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){s.crossDomain=true;}}
            if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
            inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(completed){return jqXHR;}
            fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
            s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url.replace(rhash,"");if(!s.hasContent){uncached=s.url.slice(cacheURL.length);if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;delete s.data;}
                if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce.guid++)+
                    uncached;}
                s.url=cacheURL+uncached;}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}
            if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
                if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
            if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
            jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
                (s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
            if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){return jqXHR.abort();}
            strAbort="abort";completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
                if(completed){return jqXHR;}
                if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
                try{completed=false;transport.send(requestHeaders,done);}catch(e){if(completed){throw e;}
                    done(-1,e);}}
            function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(completed){return;}
                completed=true;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
                transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
                if(!isSuccess&&jQuery.inArray("script",s.dataTypes)>-1&&jQuery.inArray("json",s.dataTypes)<0){s.converters["text script"]=function(){};}
                response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
                    modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
                    if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
                jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
                jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
                completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
            return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(_i,method){jQuery[method]=function(url,data,callback,type){if(isFunction(data)){type=type||callback;callback=data;data=undefined;}
        return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery.ajaxPrefilter(function(s){var i;for(i in s.headers){if(i.toLowerCase()==="content-type"){s.contentType=s.headers[i]||"";}}});jQuery._evalUrl=function(url,options,doc){return jQuery.ajax({url:url,type:"GET",dataType:"script",cache:true,async:false,global:false,converters:{"text script":function(){}},dataFilter:function(response){jQuery.globalEval(response,options,doc);}});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}
            wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
            wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
                return elem;}).append(this);}
            return this;},wrapInner:function(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
            return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
            if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
            if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
            for(i in headers){xhr.setRequestHeader(i,headers[i]);}
            callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback();}});}};}
            callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
        if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var script,callback;return{send:function(_,complete){script=jQuery("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce.guid++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
        s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
            return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
            if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
            if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}
            responseContainer=overwritten=undefined;});return"script";}});support.createHTMLDocument=(function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;})();jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}
        if(typeof context==="boolean"){keepScripts=context;context=false;}
        var base,parsed,scripts;if(!context){if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}
        parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
        parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
        return jQuery.merge([],parsed.childNodes);};jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}
        if(isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
        if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}
        return this;};jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
            curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
            if(isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
            if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
            if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
            if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
            var rect,win,elem=this[0];if(!elem){return;}
            if(!elem.getClientRects().length){return{top:0,left:0};}
            rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},position:function(){if(!this[0]){return;}
            var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offset=this.offset();doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}
                if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}
            return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}
            return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}
        if(val===undefined){return win?win[prop]:elem[method];}
        if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});jQuery.each(["top","left"],function(_i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}
        if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
        return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(_i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(_i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});var rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
        if(!isFunction(fn)){return undefined;}
        args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){var type=jQuery.type(obj);return(type==="number"||type==="string")&&!isNaN(obj-parseFloat(obj));};jQuery.trim=function(text){return text==null?"":(text+"").replace(rtrim,"");};if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
    var
        _jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
        if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
        return jQuery;};if(typeof noGlobal==="undefined"){window.jQuery=window.$=jQuery;}
    return jQuery;});"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+n[a]>+o[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.0";var t=Object.create(null),o=(s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion)),{});function i(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return i(n,o),r},set:function(e){i(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&i(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function u(e,t,r,n,o){if(!o)throw new Error("No warning message provided");a(e,t,r,n,o)}function d(e,t,r,n){a(e,t,r,n)}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&i("quirks","jQuery is not compatible with Quirks Mode");var c,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(c in d(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(i("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,d(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),i("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){i("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,c)&&(s.find[c]=y[c]);u(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),u(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),u(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),u(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&u(s,"trim",function(e){return null==e?"":(e+"").replace(v,"")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(u(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),u(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(u(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),u(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),u(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),u(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,d(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(u(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),u(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),u(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&i("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function Q(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}d(s.fn,"removeAttr",function(e){var r=this;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&(i("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),d(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(i("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var x,A=!1,R=/^[a-z]/,T=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return A=!0,e=r.apply(this,arguments),A=!1,e})}),d(s,"swap",function(e,t,r,n){var o,a={};for(o in A||i("swap","jQuery.swap() is undocumented and deprecated"),t)a[o]=e.style[o],e.style[o]=t[o];for(o in r=r.apply(e,n||[]),t)e.style[o]=a[o];return r},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return i("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")&&"undefined"!=typeof Proxy&&(s.cssNumber=new Proxy({animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},{get:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}})),x=s.fn.css,d(s.fn,"css",function(e,t){var r,n=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(n,e,t)}),this):("number"==typeof t&&(t=Q(e),r=t,R.test(r)&&T.test(r[0].toUpperCase()+r.slice(1))||s.cssNumber[t]||i("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),x.apply(this,arguments))},"css-number");function C(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var S,N,P,k,H,E,M,q=s.data,D=(d(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&q.call(this,e),o={},t)a!==Q(a)?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return q.call(this,e,o),t}return t&&"string"==typeof t&&t!==Q(t)&&(n=s.hasData(e)&&q.call(this,e))&&t in n?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):q.apply(this,arguments)},"data-camelCase"),s.fx&&(P=s.Tween.prototype.run,k=function(e){return e},d(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(i("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=k),P.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,N="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||i("fx-interval",N),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){i("fx-interval",N),S=e}})),s.fn.load),F=s.event.add,W=s.event.fix,O=(s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),d(s.event,"fix",function(e){var t=e.type,r=this.fixHooks[t],n=s.event.props;if(n.length){i("event-old-patch","jQuery.event.props are deprecated and removed: "+n.join());while(n.length)s.event.addProp(n.pop())}if(r&&!r._migrated_&&(r._migrated_=!0,i("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+t),(n=r.props)&&n.length))while(n.length)s.event.addProp(n.pop());return t=W.call(this,e),r&&r.filter?r.filter(t,e):t},"event-old-patch"),d(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&i("load-after-event","jQuery(window).on('load'...) called after load event occurred"),F.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){d(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?D.apply(this,e):(i("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){u(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&i("ready-event","'ready' event is deprecated")}},u(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),u(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),u(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),u(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),u(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated"),/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),_=(s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},d(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(O,"<$1></$2>"))!==t&&C(t)!==C(r)&&i("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(O,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags"),s.fn.offset);return d(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(i("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(H=s.param,d(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(i("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),H.call(this,e,t)},"param-ajax-traditional")),u(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(E=s.Deferred,M=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],d(s,"Deferred",function(e){var a=E(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(M,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return u(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),u(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=E.exceptionHook),s});
/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}})(function($){"use strict";$.ui=$.ui||{};var version=$.ui.version="1.13.2";
    /*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var widgetUuid=0;var widgetHasOwnProperty=Array.prototype.hasOwnProperty;var widgetSlice=Array.prototype.slice;$.cleanData=(function(orig){return function(elems){var events,elem,i;for(i=0;(elem=elems[i])!=null;i++){events=$._data(elem,"events");if(events&&events.remove){$(elem).triggerHandler("remove");}}
        orig(elems);};})($.cleanData);$.widget=function(name,base,prototype){var existingConstructor,constructor,basePrototype;var proxiedPrototype={};var namespace=name.split(".")[0];name=name.split(".")[1];var fullName=namespace+"-"+name;if(!prototype){prototype=base;base=$.Widget;}
        if(Array.isArray(prototype)){prototype=$.extend.apply(null,[{}].concat(prototype));}
        $.expr.pseudos[fullName.toLowerCase()]=function(elem){return!!$.data(elem,fullName);};$[namespace]=$[namespace]||{};existingConstructor=$[namespace][name];constructor=$[namespace][name]=function(options,element){if(!this||!this._createWidget){return new constructor(options,element);}
            if(arguments.length){this._createWidget(options,element);}};$.extend(constructor,existingConstructor,{version:prototype.version,_proto:$.extend({},prototype),_childConstructors:[]});basePrototype=new base();basePrototype.options=$.widget.extend({},basePrototype.options);$.each(prototype,function(prop,value){if(typeof value!=="function"){proxiedPrototype[prop]=value;return;}
            proxiedPrototype[prop]=(function(){function _super(){return base.prototype[prop].apply(this,arguments);}
                function _superApply(args){return base.prototype[prop].apply(this,args);}
                return function(){var __super=this._super;var __superApply=this._superApply;var returnValue;this._super=_super;this._superApply=_superApply;returnValue=value.apply(this,arguments);this._super=__super;this._superApply=__superApply;return returnValue;};})();});constructor.prototype=$.widget.extend(basePrototype,{widgetEventPrefix:existingConstructor?(basePrototype.widgetEventPrefix||name):name},proxiedPrototype,{constructor:constructor,namespace:namespace,widgetName:name,widgetFullName:fullName});if(existingConstructor){$.each(existingConstructor._childConstructors,function(i,child){var childPrototype=child.prototype;$.widget(childPrototype.namespace+"."+childPrototype.widgetName,constructor,child._proto);});delete existingConstructor._childConstructors;}else{base._childConstructors.push(constructor);}
        $.widget.bridge(name,constructor);return constructor;};$.widget.extend=function(target){var input=widgetSlice.call(arguments,1);var inputIndex=0;var inputLength=input.length;var key;var value;for(;inputIndex<inputLength;inputIndex++){for(key in input[inputIndex]){value=input[inputIndex][key];if(widgetHasOwnProperty.call(input[inputIndex],key)&&value!==undefined){if($.isPlainObject(value)){target[key]=$.isPlainObject(target[key])?$.widget.extend({},target[key],value):$.widget.extend({},value);}else{target[key]=value;}}}}
        return target;};$.widget.bridge=function(name,object){var fullName=object.prototype.widgetFullName||name;$.fn[name]=function(options){var isMethodCall=typeof options==="string";var args=widgetSlice.call(arguments,1);var returnValue=this;if(isMethodCall){if(!this.length&&options==="instance"){returnValue=undefined;}else{this.each(function(){var methodValue;var instance=$.data(this,fullName);if(options==="instance"){returnValue=instance;return false;}
        if(!instance){return $.error("cannot call methods on "+name+" prior to initialization; "+"attempted to call method '"+options+"'");}
        if(typeof instance[options]!=="function"||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for "+name+" widget instance");}
        methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}}else{if(args.length){options=$.widget.extend.apply(null,[options].concat(args));}
        this.each(function(){var instance=$.data(this,fullName);if(instance){instance.option(options||{});if(instance._init){instance._init();}}else{$.data(this,fullName,new object(options,this));}});}
        return returnValue;};};$.Widget=function(){};$.Widget._childConstructors=[];$.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:false,create:null},_createWidget:function(options,element){element=$(element||this.defaultElement||this)[0];this.element=$(element);this.uuid=widgetUuid++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=$();this.hoverable=$();this.focusable=$();this.classesElementLookup={};if(element!==this){$.data(element,this.widgetFullName,this);this._on(true,this.element,{remove:function(event){if(event.target===element){this.destroy();}}});this.document=$(element.style?element.ownerDocument:element.document||element);this.window=$(this.document[0].defaultView||this.document[0].parentWindow);}
            this.options=$.widget.extend({},this.options,this._getCreateOptions(),options);this._create();if(this.options.disabled){this._setOptionDisabled(this.options.disabled);}
            this._trigger("create",null,this._getCreateEventData());this._init();},_getCreateOptions:function(){return{};},_getCreateEventData:$.noop,_create:$.noop,_init:$.noop,destroy:function(){var that=this;this._destroy();$.each(this.classesElementLookup,function(key,value){that._removeClass(value,key);});this.element.off(this.eventNamespace).removeData(this.widgetFullName);this.widget().off(this.eventNamespace).removeAttr("aria-disabled");this.bindings.off(this.eventNamespace);},_destroy:$.noop,widget:function(){return this.element;},option:function(key,value){var options=key;var parts;var curOption;var i;if(arguments.length===0){return $.widget.extend({},this.options);}
            if(typeof key==="string"){options={};parts=key.split(".");key=parts.shift();if(parts.length){curOption=options[key]=$.widget.extend({},this.options[key]);for(i=0;i<parts.length-1;i++){curOption[parts[i]]=curOption[parts[i]]||{};curOption=curOption[parts[i]];}
                key=parts.pop();if(arguments.length===1){return curOption[key]===undefined?null:curOption[key];}
                curOption[key]=value;}else{if(arguments.length===1){return this.options[key]===undefined?null:this.options[key];}
                options[key]=value;}}
            this._setOptions(options);return this;},_setOptions:function(options){var key;for(key in options){this._setOption(key,options[key]);}
            return this;},_setOption:function(key,value){if(key==="classes"){this._setOptionClasses(value);}
            this.options[key]=value;if(key==="disabled"){this._setOptionDisabled(value);}
            return this;},_setOptionClasses:function(value){var classKey,elements,currentElements;for(classKey in value){currentElements=this.classesElementLookup[classKey];if(value[classKey]===this.options.classes[classKey]||!currentElements||!currentElements.length){continue;}
            elements=$(currentElements.get());this._removeClass(currentElements,classKey);elements.addClass(this._classes({element:elements,keys:classKey,classes:value,add:true}));}},_setOptionDisabled:function(value){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!value);if(value){this._removeClass(this.hoverable,null,"ui-state-hover");this._removeClass(this.focusable,null,"ui-state-focus");}},enable:function(){return this._setOptions({disabled:false});},disable:function(){return this._setOptions({disabled:true});},_classes:function(options){var full=[];var that=this;options=$.extend({element:this.element,classes:this.options.classes||{}},options);function bindRemoveEvent(){var nodesToBind=[];options.element.each(function(_,element){var isTracked=$.map(that.classesElementLookup,function(elements){return elements;}).some(function(elements){return elements.is(element);});if(!isTracked){nodesToBind.push(element);}});that._on($(nodesToBind),{remove:"_untrackClassesElement"});}
            function processClassString(classes,checkOption){var current,i;for(i=0;i<classes.length;i++){current=that.classesElementLookup[classes[i]]||$();if(options.add){bindRemoveEvent();current=$($.uniqueSort(current.get().concat(options.element.get())));}else{current=$(current.not(options.element).get());}
                that.classesElementLookup[classes[i]]=current;full.push(classes[i]);if(checkOption&&options.classes[classes[i]]){full.push(options.classes[classes[i]]);}}}
            if(options.keys){processClassString(options.keys.match(/\S+/g)||[],true);}
            if(options.extra){processClassString(options.extra.match(/\S+/g)||[]);}
            return full.join(" ");},_untrackClassesElement:function(event){var that=this;$.each(that.classesElementLookup,function(key,value){if($.inArray(event.target,value)!==-1){that.classesElementLookup[key]=$(value.not(event.target).get());}});this._off($(event.target));},_removeClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,false);},_addClass:function(element,keys,extra){return this._toggleClass(element,keys,extra,true);},_toggleClass:function(element,keys,extra,add){add=(typeof add==="boolean")?add:extra;var shift=(typeof element==="string"||element===null),options={extra:shift?keys:extra,keys:shift?element:keys,element:shift?this.element:element,add:add};options.element.toggleClass(this._classes(options),add);return this;},_on:function(suppressDisabledCheck,element,handlers){var delegateElement;var instance=this;if(typeof suppressDisabledCheck!=="boolean"){handlers=element;element=suppressDisabledCheck;suppressDisabledCheck=false;}
            if(!handlers){handlers=element;element=this.element;delegateElement=this.widget();}else{element=delegateElement=$(element);this.bindings=this.bindings.add(element);}
            $.each(handlers,function(event,handler){function handlerProxy(){if(!suppressDisabledCheck&&(instance.options.disabled===true||$(this).hasClass("ui-state-disabled"))){return;}
                return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
                if(typeof handler!=="string"){handlerProxy.guid=handler.guid=handler.guid||handlerProxy.guid||$.guid++;}
                var match=event.match(/^([\w:-]*)\s*(.*)$/);var eventName=match[1]+instance.eventNamespace;var selector=match[2];if(selector){delegateElement.on(eventName,selector,handlerProxy);}else{element.on(eventName,handlerProxy);}});},_off:function(element,eventName){eventName=(eventName||"").split(" ").join(this.eventNamespace+" ")+
            this.eventNamespace;element.off(eventName);this.bindings=$(this.bindings.not(element).get());this.focusable=$(this.focusable.not(element).get());this.hoverable=$(this.hoverable.not(element).get());},_delay:function(handler,delay){function handlerProxy(){return(typeof handler==="string"?instance[handler]:handler).apply(instance,arguments);}
            var instance=this;return setTimeout(handlerProxy,delay||0);},_hoverable:function(element){this.hoverable=this.hoverable.add(element);this._on(element,{mouseenter:function(event){this._addClass($(event.currentTarget),null,"ui-state-hover");},mouseleave:function(event){this._removeClass($(event.currentTarget),null,"ui-state-hover");}});},_focusable:function(element){this.focusable=this.focusable.add(element);this._on(element,{focusin:function(event){this._addClass($(event.currentTarget),null,"ui-state-focus");},focusout:function(event){this._removeClass($(event.currentTarget),null,"ui-state-focus");}});},_trigger:function(type,event,data){var prop,orig;var callback=this.options[type];data=data||{};event=$.Event(event);event.type=(type===this.widgetEventPrefix?type:this.widgetEventPrefix+type).toLowerCase();event.target=this.element[0];orig=event.originalEvent;if(orig){for(prop in orig){if(!(prop in event)){event[prop]=orig[prop];}}}
            this.element.trigger(event,data);return!(typeof callback==="function"&&callback.apply(this.element[0],[event].concat(data))===false||event.isDefaultPrevented());}};$.each({show:"fadeIn",hide:"fadeOut"},function(method,defaultEffect){$.Widget.prototype["_"+method]=function(element,options,callback){if(typeof options==="string"){options={effect:options};}
        var hasOptions;var effectName=!options?method:options===true||typeof options==="number"?defaultEffect:options.effect||defaultEffect;options=options||{};if(typeof options==="number"){options={duration:options};}else if(options===true){options={};}
        hasOptions=!$.isEmptyObject(options);options.complete=callback;if(options.delay){element.delay(options.delay);}
        if(hasOptions&&$.effects&&$.effects.effect[effectName]){element[method](options);}else if(effectName!==method&&element[effectName]){element[effectName](options.duration,options.easing,callback);}else{element.queue(function(next){$(this)[method]();if(callback){callback.call(element[0]);}
            next();});}};});var widget=$.widget;
    /*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
    (function(){var cachedScrollbarWidth,max=Math.max,abs=Math.abs,rhorizontal=/left|center|right/,rvertical=/top|center|bottom/,roffset=/[\+\-]\d+(\.[\d]+)?%?/,rposition=/^\w+/,rpercent=/%$/,_position=$.fn.position;function getOffsets(offsets,width,height){return[parseFloat(offsets[0])*(rpercent.test(offsets[0])?width/100:1),parseFloat(offsets[1])*(rpercent.test(offsets[1])?height/100:1)];}
        function parseCss(element,property){return parseInt($.css(element,property),10)||0;}
        function isWindow(obj){return obj!=null&&obj===obj.window;}
        function getDimensions(elem){var raw=elem[0];if(raw.nodeType===9){return{width:elem.width(),height:elem.height(),offset:{top:0,left:0}};}
            if(isWindow(raw)){return{width:elem.width(),height:elem.height(),offset:{top:elem.scrollTop(),left:elem.scrollLeft()}};}
            if(raw.preventDefault){return{width:0,height:0,offset:{top:raw.pageY,left:raw.pageX}};}
            return{width:elem.outerWidth(),height:elem.outerHeight(),offset:elem.offset()};}
        $.position={scrollbarWidth:function(){if(cachedScrollbarWidth!==undefined){return cachedScrollbarWidth;}
                var w1,w2,div=$("<div style="+"'display:block;position:absolute;width:200px;height:200px;overflow:hidden;'>"+"<div style='height:300px;width:auto;'></div></div>"),innerDiv=div.children()[0];$("body").append(div);w1=innerDiv.offsetWidth;div.css("overflow","scroll");w2=innerDiv.offsetWidth;if(w1===w2){w2=div[0].clientWidth;}
                div.remove();return(cachedScrollbarWidth=w1-w2);},getScrollInfo:function(within){var overflowX=within.isWindow||within.isDocument?"":within.element.css("overflow-x"),overflowY=within.isWindow||within.isDocument?"":within.element.css("overflow-y"),hasOverflowX=overflowX==="scroll"||(overflowX==="auto"&&within.width<within.element[0].scrollWidth),hasOverflowY=overflowY==="scroll"||(overflowY==="auto"&&within.height<within.element[0].scrollHeight);return{width:hasOverflowY?$.position.scrollbarWidth():0,height:hasOverflowX?$.position.scrollbarWidth():0};},getWithinInfo:function(element){var withinElement=$(element||window),isElemWindow=isWindow(withinElement[0]),isDocument=!!withinElement[0]&&withinElement[0].nodeType===9,hasOffset=!isElemWindow&&!isDocument;return{element:withinElement,isWindow:isElemWindow,isDocument:isDocument,offset:hasOffset?$(element).offset():{left:0,top:0},scrollLeft:withinElement.scrollLeft(),scrollTop:withinElement.scrollTop(),width:withinElement.outerWidth(),height:withinElement.outerHeight()};}};$.fn.position=function(options){if(!options||!options.of){return _position.apply(this,arguments);}
            options=$.extend({},options);var atOffset,targetWidth,targetHeight,targetOffset,basePosition,dimensions,target=typeof options.of==="string"?$(document).find(options.of):$(options.of),within=$.position.getWithinInfo(options.within),scrollInfo=$.position.getScrollInfo(within),collision=(options.collision||"flip").split(" "),offsets={};dimensions=getDimensions(target);if(target[0].preventDefault){options.at="left top";}
            targetWidth=dimensions.width;targetHeight=dimensions.height;targetOffset=dimensions.offset;basePosition=$.extend({},targetOffset);$.each(["my","at"],function(){var pos=(options[this]||"").split(" "),horizontalOffset,verticalOffset;if(pos.length===1){pos=rhorizontal.test(pos[0])?pos.concat(["center"]):rvertical.test(pos[0])?["center"].concat(pos):["center","center"];}
                pos[0]=rhorizontal.test(pos[0])?pos[0]:"center";pos[1]=rvertical.test(pos[1])?pos[1]:"center";horizontalOffset=roffset.exec(pos[0]);verticalOffset=roffset.exec(pos[1]);offsets[this]=[horizontalOffset?horizontalOffset[0]:0,verticalOffset?verticalOffset[0]:0];options[this]=[rposition.exec(pos[0])[0],rposition.exec(pos[1])[0]];});if(collision.length===1){collision[1]=collision[0];}
            if(options.at[0]==="right"){basePosition.left+=targetWidth;}else if(options.at[0]==="center"){basePosition.left+=targetWidth/2;}
            if(options.at[1]==="bottom"){basePosition.top+=targetHeight;}else if(options.at[1]==="center"){basePosition.top+=targetHeight/2;}
            atOffset=getOffsets(offsets.at,targetWidth,targetHeight);basePosition.left+=atOffset[0];basePosition.top+=atOffset[1];return this.each(function(){var collisionPosition,using,elem=$(this),elemWidth=elem.outerWidth(),elemHeight=elem.outerHeight(),marginLeft=parseCss(this,"marginLeft"),marginTop=parseCss(this,"marginTop"),collisionWidth=elemWidth+marginLeft+parseCss(this,"marginRight")+
                scrollInfo.width,collisionHeight=elemHeight+marginTop+parseCss(this,"marginBottom")+
                scrollInfo.height,position=$.extend({},basePosition),myOffset=getOffsets(offsets.my,elem.outerWidth(),elem.outerHeight());if(options.my[0]==="right"){position.left-=elemWidth;}else if(options.my[0]==="center"){position.left-=elemWidth/2;}
                if(options.my[1]==="bottom"){position.top-=elemHeight;}else if(options.my[1]==="center"){position.top-=elemHeight/2;}
                position.left+=myOffset[0];position.top+=myOffset[1];collisionPosition={marginLeft:marginLeft,marginTop:marginTop};$.each(["left","top"],function(i,dir){if($.ui.position[collision[i]]){$.ui.position[collision[i]][dir](position,{targetWidth:targetWidth,targetHeight:targetHeight,elemWidth:elemWidth,elemHeight:elemHeight,collisionPosition:collisionPosition,collisionWidth:collisionWidth,collisionHeight:collisionHeight,offset:[atOffset[0]+myOffset[0],atOffset[1]+myOffset[1]],my:options.my,at:options.at,within:within,elem:elem});}});if(options.using){using=function(props){var left=targetOffset.left-position.left,right=left+targetWidth-elemWidth,top=targetOffset.top-position.top,bottom=top+targetHeight-elemHeight,feedback={target:{element:target,left:targetOffset.left,top:targetOffset.top,width:targetWidth,height:targetHeight},element:{element:elem,left:position.left,top:position.top,width:elemWidth,height:elemHeight},horizontal:right<0?"left":left>0?"right":"center",vertical:bottom<0?"top":top>0?"bottom":"middle"};if(targetWidth<elemWidth&&abs(left+right)<targetWidth){feedback.horizontal="center";}
                    if(targetHeight<elemHeight&&abs(top+bottom)<targetHeight){feedback.vertical="middle";}
                    if(max(abs(left),abs(right))>max(abs(top),abs(bottom))){feedback.important="horizontal";}else{feedback.important="vertical";}
                    options.using.call(this,props,feedback);};}
                elem.offset($.extend(position,{using:using}));});};$.ui.position={fit:{left:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollLeft:within.offset.left,outerWidth=within.width,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=withinOffset-collisionPosLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-withinOffset,newOverRight;if(data.collisionWidth>outerWidth){if(overLeft>0&&overRight<=0){newOverRight=position.left+overLeft+data.collisionWidth-outerWidth-
                    withinOffset;position.left+=overLeft-newOverRight;}else if(overRight>0&&overLeft<=0){position.left=withinOffset;}else{if(overLeft>overRight){position.left=withinOffset+outerWidth-data.collisionWidth;}else{position.left=withinOffset;}}}else if(overLeft>0){position.left+=overLeft;}else if(overRight>0){position.left-=overRight;}else{position.left=max(position.left-collisionPosLeft,position.left);}},top:function(position,data){var within=data.within,withinOffset=within.isWindow?within.scrollTop:within.offset.top,outerHeight=data.within.height,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=withinOffset-collisionPosTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-withinOffset,newOverBottom;if(data.collisionHeight>outerHeight){if(overTop>0&&overBottom<=0){newOverBottom=position.top+overTop+data.collisionHeight-outerHeight-
                    withinOffset;position.top+=overTop-newOverBottom;}else if(overBottom>0&&overTop<=0){position.top=withinOffset;}else{if(overTop>overBottom){position.top=withinOffset+outerHeight-data.collisionHeight;}else{position.top=withinOffset;}}}else if(overTop>0){position.top+=overTop;}else if(overBottom>0){position.top-=overBottom;}else{position.top=max(position.top-collisionPosTop,position.top);}}},flip:{left:function(position,data){var within=data.within,withinOffset=within.offset.left+within.scrollLeft,outerWidth=within.width,offsetLeft=within.isWindow?within.scrollLeft:within.offset.left,collisionPosLeft=position.left-data.collisionPosition.marginLeft,overLeft=collisionPosLeft-offsetLeft,overRight=collisionPosLeft+data.collisionWidth-outerWidth-offsetLeft,myOffset=data.my[0]==="left"?-data.elemWidth:data.my[0]==="right"?data.elemWidth:0,atOffset=data.at[0]==="left"?data.targetWidth:data.at[0]==="right"?-data.targetWidth:0,offset=-2*data.offset[0],newOverRight,newOverLeft;if(overLeft<0){newOverRight=position.left+myOffset+atOffset+offset+data.collisionWidth-
                    outerWidth-withinOffset;if(newOverRight<0||newOverRight<abs(overLeft)){position.left+=myOffset+atOffset+offset;}}else if(overRight>0){newOverLeft=position.left-data.collisionPosition.marginLeft+myOffset+
                    atOffset+offset-offsetLeft;if(newOverLeft>0||abs(newOverLeft)<overRight){position.left+=myOffset+atOffset+offset;}}},top:function(position,data){var within=data.within,withinOffset=within.offset.top+within.scrollTop,outerHeight=within.height,offsetTop=within.isWindow?within.scrollTop:within.offset.top,collisionPosTop=position.top-data.collisionPosition.marginTop,overTop=collisionPosTop-offsetTop,overBottom=collisionPosTop+data.collisionHeight-outerHeight-offsetTop,top=data.my[1]==="top",myOffset=top?-data.elemHeight:data.my[1]==="bottom"?data.elemHeight:0,atOffset=data.at[1]==="top"?data.targetHeight:data.at[1]==="bottom"?-data.targetHeight:0,offset=-2*data.offset[1],newOverTop,newOverBottom;if(overTop<0){newOverBottom=position.top+myOffset+atOffset+offset+data.collisionHeight-
                    outerHeight-withinOffset;if(newOverBottom<0||newOverBottom<abs(overTop)){position.top+=myOffset+atOffset+offset;}}else if(overBottom>0){newOverTop=position.top-data.collisionPosition.marginTop+myOffset+atOffset+
                    offset-offsetTop;if(newOverTop>0||abs(newOverTop)<overBottom){position.top+=myOffset+atOffset+offset;}}}},flipfit:{left:function(){$.ui.position.flip.left.apply(this,arguments);$.ui.position.fit.left.apply(this,arguments);},top:function(){$.ui.position.flip.top.apply(this,arguments);$.ui.position.fit.top.apply(this,arguments);}}};})();var position=$.ui.position;
    /*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var data=$.extend($.expr.pseudos,{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):function(elem,i,match){return!!$.data(elem,match[3]);}});
    /*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var disableSelection=$.fn.extend({disableSelection:(function(){var eventType="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(eventType+".ui-disableSelection",function(event){event.preventDefault();});};})(),enableSelection:function(){return this.off(".ui-disableSelection");}});var jQuery=$;
    /*!
 * jQuery Color Animations v2.2.0
 * https://github.com/jquery/jquery-color
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Sun May 10 09:02:36 2020 +0200
 */
    var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor "+"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",class2type={},toString=class2type.toString,rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,stringParsers=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1],execResult[2],execResult[3],execResult[4]];}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(execResult){return[execResult[1]*2.55,execResult[2]*2.55,execResult[3]*2.55,execResult[4]];}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,parse:function(execResult){return[parseInt(execResult[1],16),parseInt(execResult[2],16),parseInt(execResult[3],16),execResult[4]?(parseInt(execResult[4],16)/255).toFixed(2):1];}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,parse:function(execResult){return[parseInt(execResult[1]+execResult[1],16),parseInt(execResult[2]+execResult[2],16),parseInt(execResult[3]+execResult[3],16),execResult[4]?(parseInt(execResult[4]+execResult[4],16)/255).toFixed(2):1];}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(execResult){return[execResult[1],execResult[2]/100,execResult[3]/100,execResult[4]];}}],color=jQuery.Color=function(color,green,blue,alpha){return new jQuery.Color.fn.parse(color,green,blue,alpha);},spaces={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},propTypes={"byte":{floor:true,max:255},"percent":{max:1},"degrees":{mod:360,floor:true}},support=color.support={},supportElem=jQuery("<p>")[0],colors,each=jQuery.each;supportElem.style.cssText="background-color:rgba(1,1,1,.5)";support.rgba=supportElem.style.backgroundColor.indexOf("rgba")>-1;each(spaces,function(spaceName,space){space.cache="_"+spaceName;space.props.alpha={idx:3,type:"percent",def:1};});jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(_i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function getType(obj){if(obj==null){return obj+"";}
        return typeof obj==="object"?class2type[toString.call(obj)]||"object":typeof obj;}
    function clamp(value,prop,allowEmpty){var type=propTypes[prop.type]||{};if(value==null){return(allowEmpty||!prop.def)?null:prop.def;}
        value=type.floor?~~value:parseFloat(value);if(isNaN(value)){return prop.def;}
        if(type.mod){return(value+type.mod)%type.mod;}
        return Math.min(type.max,Math.max(0,value));}
    function stringParse(string){var inst=color(),rgba=inst._rgba=[];string=string.toLowerCase();each(stringParsers,function(_i,parser){var parsed,match=parser.re.exec(string),values=match&&parser.parse(match),spaceName=parser.space||"rgba";if(values){parsed=inst[spaceName](values);inst[spaces[spaceName].cache]=parsed[spaces[spaceName].cache];rgba=inst._rgba=parsed._rgba;return false;}});if(rgba.length){if(rgba.join()==="0,0,0,0"){jQuery.extend(rgba,colors.transparent);}
        return inst;}
        return colors[string];}
    color.fn=jQuery.extend(color.prototype,{parse:function(red,green,blue,alpha){if(red===undefined){this._rgba=[null,null,null,null];return this;}
            if(red.jquery||red.nodeType){red=jQuery(red).css(green);green=undefined;}
            var inst=this,type=getType(red),rgba=this._rgba=[];if(green!==undefined){red=[red,green,blue,alpha];type="array";}
            if(type==="string"){return this.parse(stringParse(red)||colors._default);}
            if(type==="array"){each(spaces.rgba.props,function(_key,prop){rgba[prop.idx]=clamp(red[prop.idx],prop);});return this;}
            if(type==="object"){if(red instanceof color){each(spaces,function(_spaceName,space){if(red[space.cache]){inst[space.cache]=red[space.cache].slice();}});}else{each(spaces,function(_spaceName,space){var cache=space.cache;each(space.props,function(key,prop){if(!inst[cache]&&space.to){if(key==="alpha"||red[key]==null){return;}
                inst[cache]=space.to(inst._rgba);}
                inst[cache][prop.idx]=clamp(red[key],prop,true);});if(inst[cache]&&jQuery.inArray(null,inst[cache].slice(0,3))<0){if(inst[cache][3]==null){inst[cache][3]=1;}
                if(space.from){inst._rgba=space.from(inst[cache]);}}});}
                return this;}},is:function(compare){var is=color(compare),same=true,inst=this;each(spaces,function(_,space){var localCache,isCache=is[space.cache];if(isCache){localCache=inst[space.cache]||space.to&&space.to(inst._rgba)||[];each(space.props,function(_,prop){if(isCache[prop.idx]!=null){same=(isCache[prop.idx]===localCache[prop.idx]);return same;}});}
            return same;});return same;},_space:function(){var used=[],inst=this;each(spaces,function(spaceName,space){if(inst[space.cache]){used.push(spaceName);}});return used.pop();},transition:function(other,distance){var end=color(other),spaceName=end._space(),space=spaces[spaceName],startColor=this.alpha()===0?color("transparent"):this,start=startColor[space.cache]||space.to(startColor._rgba),result=start.slice();end=end[space.cache];each(space.props,function(_key,prop){var index=prop.idx,startValue=start[index],endValue=end[index],type=propTypes[prop.type]||{};if(endValue===null){return;}
            if(startValue===null){result[index]=endValue;}else{if(type.mod){if(endValue-startValue>type.mod/2){startValue+=type.mod;}else if(startValue-endValue>type.mod/2){startValue-=type.mod;}}
                result[index]=clamp((endValue-startValue)*distance+startValue,prop);}});return this[spaceName](result);},blend:function(opaque){if(this._rgba[3]===1){return this;}
            var rgb=this._rgba.slice(),a=rgb.pop(),blend=color(opaque)._rgba;return color(jQuery.map(rgb,function(v,i){return(1-a)*blend[i]+a*v;}));},toRgbaString:function(){var prefix="rgba(",rgba=jQuery.map(this._rgba,function(v,i){if(v!=null){return v;}
            return i>2?1:0;});if(rgba[3]===1){rgba.pop();prefix="rgb(";}
            return prefix+rgba.join()+")";},toHslaString:function(){var prefix="hsla(",hsla=jQuery.map(this.hsla(),function(v,i){if(v==null){v=i>2?1:0;}
            if(i&&i<3){v=Math.round(v*100)+"%";}
            return v;});if(hsla[3]===1){hsla.pop();prefix="hsl(";}
            return prefix+hsla.join()+")";},toHexString:function(includeAlpha){var rgba=this._rgba.slice(),alpha=rgba.pop();if(includeAlpha){rgba.push(~~(alpha*255));}
            return"#"+jQuery.map(rgba,function(v){v=(v||0).toString(16);return v.length===1?"0"+v:v;}).join("");},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString();}});color.fn.parse.prototype=color.fn;function hue2rgb(p,q,h){h=(h+1)%1;if(h*6<1){return p+(q-p)*h*6;}
        if(h*2<1){return q;}
        if(h*3<2){return p+(q-p)*((2/3)-h)*6;}
        return p;}
    spaces.hsla.to=function(rgba){if(rgba[0]==null||rgba[1]==null||rgba[2]==null){return[null,null,null,rgba[3]];}
        var r=rgba[0]/255,g=rgba[1]/255,b=rgba[2]/255,a=rgba[3],max=Math.max(r,g,b),min=Math.min(r,g,b),diff=max-min,add=max+min,l=add*0.5,h,s;if(min===max){h=0;}else if(r===max){h=(60*(g-b)/diff)+360;}else if(g===max){h=(60*(b-r)/diff)+120;}else{h=(60*(r-g)/diff)+240;}
        if(diff===0){s=0;}else if(l<=0.5){s=diff/add;}else{s=diff/(2-add);}
        return[Math.round(h)%360,s,l,a==null?1:a];};spaces.hsla.from=function(hsla){if(hsla[0]==null||hsla[1]==null||hsla[2]==null){return[null,null,null,hsla[3]];}
        var h=hsla[0]/360,s=hsla[1],l=hsla[2],a=hsla[3],q=l<=0.5?l*(1+s):l+s-l*s,p=2*l-q;return[Math.round(hue2rgb(p,q,h+(1/3))*255),Math.round(hue2rgb(p,q,h)*255),Math.round(hue2rgb(p,q,h-(1/3))*255),a];};each(spaces,function(spaceName,space){var props=space.props,cache=space.cache,to=space.to,from=space.from;color.fn[spaceName]=function(value){if(to&&!this[cache]){this[cache]=to(this._rgba);}
        if(value===undefined){return this[cache].slice();}
        var ret,type=getType(value),arr=(type==="array"||type==="object")?value:arguments,local=this[cache].slice();each(props,function(key,prop){var val=arr[type==="object"?key:prop.idx];if(val==null){val=local[prop.idx];}
            local[prop.idx]=clamp(val,prop);});if(from){ret=color(from(local));ret[cache]=local;return ret;}else{return color(local);}};each(props,function(key,prop){if(color.fn[key]){return;}
        color.fn[key]=function(value){var local,cur,match,fn,vtype=getType(value);if(key==="alpha"){fn=this._hsla?"hsla":"rgba";}else{fn=spaceName;}
            local=this[fn]();cur=local[prop.idx];if(vtype==="undefined"){return cur;}
            if(vtype==="function"){value=value.call(this,cur);vtype=getType(value);}
            if(value==null&&prop.empty){return this;}
            if(vtype==="string"){match=rplusequals.exec(value);if(match){value=cur+parseFloat(match[2])*(match[1]==="+"?1:-1);}}
            local[prop.idx]=value;return this[fn](local);};});});color.hook=function(hook){var hooks=hook.split(" ");each(hooks,function(_i,hook){jQuery.cssHooks[hook]={set:function(elem,value){var parsed,curElem,backgroundColor="";if(value!=="transparent"&&(getType(value)!=="string"||(parsed=stringParse(value)))){value=color(parsed||value);if(!support.rgba&&value._rgba[3]!==1){curElem=hook==="backgroundColor"?elem.parentNode:elem;while((backgroundColor===""||backgroundColor==="transparent")&&curElem&&curElem.style){try{backgroundColor=jQuery.css(curElem,"backgroundColor");curElem=curElem.parentNode;}catch(e){}}
            value=value.blend(backgroundColor&&backgroundColor!=="transparent"?backgroundColor:"_default");}
            value=value.toRgbaString();}
            try{elem.style[hook]=value;}catch(e){}}};jQuery.fx.step[hook]=function(fx){if(!fx.colorInit){fx.start=color(fx.elem,hook);fx.end=color(fx.end);fx.colorInit=true;}
        jQuery.cssHooks[hook].set(fx.elem,fx.start.transition(fx.end,fx.pos));};});};color.hook(stepHooks);jQuery.cssHooks.borderColor={expand:function(value){var expanded={};each(["Top","Right","Bottom","Left"],function(_i,part){expanded["border"+part+"Color"]=value;});return expanded;}};colors=jQuery.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"};
    /*!
 * jQuery UI Effects 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var dataSpace="ui-effects-",dataSpaceStyle="ui-effects-style",dataSpaceAnimated="ui-effects-animated";$.effects={effect:{}};(function(){var classAnimationActions=["add","remove","toggle"],shorthandStyles={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};$.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(_,prop){$.fx.step[prop]=function(fx){if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){jQuery.style(fx.elem,prop,fx.end);fx.setAttr=true;}};});function camelCase(string){return string.replace(/-([\da-z])/gi,function(all,letter){return letter.toUpperCase();});}
        function getElementStyles(elem){var key,len,style=elem.ownerDocument.defaultView?elem.ownerDocument.defaultView.getComputedStyle(elem,null):elem.currentStyle,styles={};if(style&&style.length&&style[0]&&style[style[0]]){len=style.length;while(len--){key=style[len];if(typeof style[key]==="string"){styles[camelCase(key)]=style[key];}}}else{for(key in style){if(typeof style[key]==="string"){styles[key]=style[key];}}}
            return styles;}
        function styleDifference(oldStyle,newStyle){var diff={},name,value;for(name in newStyle){value=newStyle[name];if(oldStyle[name]!==value){if(!shorthandStyles[name]){if($.fx.step[name]||!isNaN(parseFloat(value))){diff[name]=value;}}}}
            return diff;}
        if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}
        $.effects.animateClass=function(value,duration,easing,callback){var o=$.speed(duration,easing,callback);return this.queue(function(){var animated=$(this),baseClass=animated.attr("class")||"",applyClassChange,allAnimations=o.children?animated.find("*").addBack():animated;allAnimations=allAnimations.map(function(){var el=$(this);return{el:el,start:getElementStyles(this)};});applyClassChange=function(){$.each(classAnimationActions,function(i,action){if(value[action]){animated[action+"Class"](value[action]);}});};applyClassChange();allAnimations=allAnimations.map(function(){this.end=getElementStyles(this.el[0]);this.diff=styleDifference(this.start,this.end);return this;});animated.attr("class",baseClass);allAnimations=allAnimations.map(function(){var styleInfo=this,dfd=$.Deferred(),opts=$.extend({},o,{queue:false,complete:function(){dfd.resolve(styleInfo);}});this.el.animate(this.diff,opts);return dfd.promise();});$.when.apply($,allAnimations.get()).done(function(){applyClassChange();$.each(arguments,function(){var el=this.el;$.each(this.diff,function(key){el.css(key,"");});});o.complete.call(animated[0]);});});};$.fn.extend({addClass:(function(orig){return function(classNames,speed,easing,callback){return speed?$.effects.animateClass.call(this,{add:classNames},speed,easing,callback):orig.apply(this,arguments);};})($.fn.addClass),removeClass:(function(orig){return function(classNames,speed,easing,callback){return arguments.length>1?$.effects.animateClass.call(this,{remove:classNames},speed,easing,callback):orig.apply(this,arguments);};})($.fn.removeClass),toggleClass:(function(orig){return function(classNames,force,speed,easing,callback){if(typeof force==="boolean"||force===undefined){if(!speed){return orig.apply(this,arguments);}else{return $.effects.animateClass.call(this,(force?{add:classNames}:{remove:classNames}),speed,easing,callback);}}else{return $.effects.animateClass.call(this,{toggle:classNames},force,speed,easing);}};})($.fn.toggleClass),switchClass:function(remove,add,speed,easing,callback){return $.effects.animateClass.call(this,{add:add,remove:remove},speed,easing,callback);}});})();(function(){if($.expr&&$.expr.pseudos&&$.expr.pseudos.animated){$.expr.pseudos.animated=(function(orig){return function(elem){return!!$(elem).data(dataSpaceAnimated)||orig(elem);};})($.expr.pseudos.animated);}
        if($.uiBackCompat!==false){$.extend($.effects,{save:function(element,set){var i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){element.data(dataSpace+set[i],element[0].style[set[i]]);}}},restore:function(element,set){var val,i=0,length=set.length;for(;i<length;i++){if(set[i]!==null){val=element.data(dataSpace+set[i]);element.css(set[i],val);}}},setMode:function(el,mode){if(mode==="toggle"){mode=el.is(":hidden")?"show":"hide";}
                return mode;},createWrapper:function(element){if(element.parent().is(".ui-effects-wrapper")){return element.parent();}
                var props={width:element.outerWidth(true),height:element.outerHeight(true),"float":element.css("float")},wrapper=$("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),size={width:element.width(),height:element.height()},active=document.activeElement;try{active.id;}catch(e){active=document.body;}
                element.wrap(wrapper);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus");}
                wrapper=element.parent();if(element.css("position")==="static"){wrapper.css({position:"relative"});element.css({position:"relative"});}else{$.extend(props,{position:element.css("position"),zIndex:element.css("z-index")});$.each(["top","left","bottom","right"],function(i,pos){props[pos]=element.css(pos);if(isNaN(parseInt(props[pos],10))){props[pos]="auto";}});element.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"});}
                element.css(size);return wrapper.css(props).show();},removeWrapper:function(element){var active=document.activeElement;if(element.parent().is(".ui-effects-wrapper")){element.parent().replaceWith(element);if(element[0]===active||$.contains(element[0],active)){$(active).trigger("focus");}}
                return element;}});}
        $.extend($.effects,{version:"1.13.2",define:function(name,mode,effect){if(!effect){effect=mode;mode="effect";}
                $.effects.effect[name]=effect;$.effects.effect[name].mode=mode;return effect;},scaledDimensions:function(element,percent,direction){if(percent===0){return{height:0,width:0,outerHeight:0,outerWidth:0};}
                var x=direction!=="horizontal"?((percent||100)/100):1,y=direction!=="vertical"?((percent||100)/100):1;return{height:element.height()*y,width:element.width()*x,outerHeight:element.outerHeight()*y,outerWidth:element.outerWidth()*x};},clipToBox:function(animation){return{width:animation.clip.right-animation.clip.left,height:animation.clip.bottom-animation.clip.top,left:animation.clip.left,top:animation.clip.top};},unshift:function(element,queueLength,count){var queue=element.queue();if(queueLength>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queueLength,count)));}
                element.dequeue();},saveStyle:function(element){element.data(dataSpaceStyle,element[0].style.cssText);},restoreStyle:function(element){element[0].style.cssText=element.data(dataSpaceStyle)||"";element.removeData(dataSpaceStyle);},mode:function(element,mode){var hidden=element.is(":hidden");if(mode==="toggle"){mode=hidden?"show":"hide";}
                if(hidden?mode==="hide":mode==="show"){mode="none";}
                return mode;},getBaseline:function(origin,original){var y,x;switch(origin[0]){case"top":y=0;break;case"middle":y=0.5;break;case"bottom":y=1;break;default:y=origin[0]/original.height;}
                switch(origin[1]){case"left":x=0;break;case"center":x=0.5;break;case"right":x=1;break;default:x=origin[1]/original.width;}
                return{x:x,y:y};},createPlaceholder:function(element){var placeholder,cssPosition=element.css("position"),position=element.position();element.css({marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());if(/^(static|relative)/.test(cssPosition)){cssPosition="absolute";placeholder=$("<"+element[0].nodeName+">").insertAfter(element).css({display:/^(inline|ruby)/.test(element.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:element.css("marginTop"),marginBottom:element.css("marginBottom"),marginLeft:element.css("marginLeft"),marginRight:element.css("marginRight"),"float":element.css("float")}).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");element.data(dataSpace+"placeholder",placeholder);}
                element.css({position:cssPosition,left:position.left,top:position.top});return placeholder;},removePlaceholder:function(element){var dataKey=dataSpace+"placeholder",placeholder=element.data(dataKey);if(placeholder){placeholder.remove();element.removeData(dataKey);}},cleanUp:function(element){$.effects.restoreStyle(element);$.effects.removePlaceholder(element);},setTransition:function(element,list,factor,value){value=value||{};$.each(list,function(i,x){var unit=element.cssUnit(x);if(unit[0]>0){value[x]=unit[0]*factor+unit[1];}});return value;}});function _normalizeArguments(effect,options,speed,callback){if($.isPlainObject(effect)){options=effect;effect=effect.effect;}
            effect={effect:effect};if(options==null){options={};}
            if(typeof options==="function"){callback=options;speed=null;options={};}
            if(typeof options==="number"||$.fx.speeds[options]){callback=speed;speed=options;options={};}
            if(typeof speed==="function"){callback=speed;speed=null;}
            if(options){$.extend(effect,options);}
            speed=speed||options.duration;effect.duration=$.fx.off?0:typeof speed==="number"?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;effect.complete=callback||options.complete;return effect;}
        function standardAnimationOption(option){if(!option||typeof option==="number"||$.fx.speeds[option]){return true;}
            if(typeof option==="string"&&!$.effects.effect[option]){return true;}
            if(typeof option==="function"){return true;}
            if(typeof option==="object"&&!option.effect){return true;}
            return false;}
        $.fn.extend({effect:function(){var args=_normalizeArguments.apply(this,arguments),effectMethod=$.effects.effect[args.effect],defaultMode=effectMethod.mode,queue=args.queue,queueName=queue||"fx",complete=args.complete,mode=args.mode,modes=[],prefilter=function(next){var el=$(this),normalizedMode=$.effects.mode(el,mode)||defaultMode;el.data(dataSpaceAnimated,true);modes.push(normalizedMode);if(defaultMode&&(normalizedMode==="show"||(normalizedMode===defaultMode&&normalizedMode==="hide"))){el.show();}
                if(!defaultMode||normalizedMode!=="none"){$.effects.saveStyle(el);}
                if(typeof next==="function"){next();}};if($.fx.off||!effectMethod){if(mode){return this[mode](args.duration,complete);}else{return this.each(function(){if(complete){complete.call(this);}});}}
                function run(next){var elem=$(this);function cleanup(){elem.removeData(dataSpaceAnimated);$.effects.cleanUp(elem);if(args.mode==="hide"){elem.hide();}
                    done();}
                    function done(){if(typeof complete==="function"){complete.call(elem[0]);}
                        if(typeof next==="function"){next();}}
                    args.mode=modes.shift();if($.uiBackCompat!==false&&!defaultMode){if(elem.is(":hidden")?mode==="hide":mode==="show"){elem[mode]();done();}else{effectMethod.call(elem[0],args,done);}}else{if(args.mode==="none"){elem[mode]();done();}else{effectMethod.call(elem[0],args,cleanup);}}}
                return queue===false?this.each(prefilter).each(run):this.queue(queueName,prefilter).queue(queueName,run);},show:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="show";return this.effect.call(this,args);}};})($.fn.show),hide:(function(orig){return function(option){if(standardAnimationOption(option)){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="hide";return this.effect.call(this,args);}};})($.fn.hide),toggle:(function(orig){return function(option){if(standardAnimationOption(option)||typeof option==="boolean"){return orig.apply(this,arguments);}else{var args=_normalizeArguments.apply(this,arguments);args.mode="toggle";return this.effect.call(this,args);}};})($.fn.toggle),cssUnit:function(key){var style=this.css(key),val=[];$.each(["em","px","%","pt"],function(i,unit){if(style.indexOf(unit)>0){val=[parseFloat(style),unit];}});return val;},cssClip:function(clipObj){if(clipObj){return this.css("clip","rect("+clipObj.top+"px "+clipObj.right+"px "+
                clipObj.bottom+"px "+clipObj.left+"px)");}
                return parseClip(this.css("clip"),this);},transfer:function(options,done){var element=$(this),target=$(options.to),targetFixed=target.css("position")==="fixed",body=$("body"),fixTop=targetFixed?body.scrollTop():0,fixLeft=targetFixed?body.scrollLeft():0,endPosition=target.offset(),animation={top:endPosition.top-fixTop,left:endPosition.left-fixLeft,height:target.innerHeight(),width:target.innerWidth()},startPosition=element.offset(),transfer=$("<div class='ui-effects-transfer'></div>");transfer.appendTo("body").addClass(options.className).css({top:startPosition.top-fixTop,left:startPosition.left-fixLeft,height:element.innerHeight(),width:element.innerWidth(),position:targetFixed?"fixed":"absolute"}).animate(animation,options.duration,options.easing,function(){transfer.remove();if(typeof done==="function"){done();}});}});function parseClip(str,element){var outerWidth=element.outerWidth(),outerHeight=element.outerHeight(),clipRegex=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,values=clipRegex.exec(str)||["",0,outerWidth,outerHeight,0];return{top:parseFloat(values[1])||0,right:values[2]==="auto"?outerWidth:parseFloat(values[2]),bottom:values[3]==="auto"?outerHeight:parseFloat(values[3]),left:parseFloat(values[4])||0};}
        $.fx.step.clip=function(fx){if(!fx.clipInit){fx.start=$(fx.elem).cssClip();if(typeof fx.end==="string"){fx.end=parseClip(fx.end,fx.elem);}
            fx.clipInit=true;}
            $(fx.elem).cssClip({top:fx.pos*(fx.end.top-fx.start.top)+fx.start.top,right:fx.pos*(fx.end.right-fx.start.right)+fx.start.right,bottom:fx.pos*(fx.end.bottom-fx.start.bottom)+fx.start.bottom,left:fx.pos*(fx.end.left-fx.start.left)+fx.start.left});};})();(function(){var baseEasings={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(i,name){baseEasings[name]=function(p){return Math.pow(p,i+2);};});$.extend(baseEasings,{Sine:function(p){return 1-Math.cos(p*Math.PI/2);},Circ:function(p){return 1-Math.sqrt(1-p*p);},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15);},Back:function(p){return p*p*(3*p-2);},Bounce:function(p){var pow2,bounce=4;while(p<((pow2=Math.pow(2,--bounce))-1)/11){}
            return 1/Math.pow(4,3-bounce)-7.5625*Math.pow((pow2*3-2)/22-p,2);}});$.each(baseEasings,function(name,easeIn){$.easing["easeIn"+name]=easeIn;$.easing["easeOut"+name]=function(p){return 1-easeIn(1-p);};$.easing["easeInOut"+name]=function(p){return p<0.5?easeIn(p*2)/2:1-easeIn(p*-2+2)/2;};});})();var effect=$.effects;
    /*!
 * jQuery UI Effects Blind 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectBlind=$.effects.define("blind","hide",function(options,done){var map={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},element=$(this),direction=options.direction||"up",start=element.cssClip(),animate={clip:$.extend({},start)},placeholder=$.effects.createPlaceholder(element);animate.clip[map[direction][0]]=animate.clip[map[direction][1]];if(options.mode==="show"){element.cssClip(animate.clip);if(placeholder){placeholder.css($.effects.clipToBox(animate));}
        animate.clip=start;}
        if(placeholder){placeholder.animate($.effects.clipToBox(animate),options.duration,options.easing);}
        element.animate(animate,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
    /*!
 * jQuery UI Effects Bounce 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectBounce=$.effects.define("bounce",function(options,done){var upAnim,downAnim,refValue,element=$(this),mode=options.mode,hide=mode==="hide",show=mode==="show",direction=options.direction||"up",distance=options.distance,times=options.times||5,anims=times*2+(show||hide?1:0),speed=options.duration/anims,easing=options.easing,ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left"),i=0,queuelen=element.queue().length;$.effects.createPlaceholder(element);refValue=element.css(ref);if(!distance){distance=element[ref==="top"?"outerHeight":"outerWidth"]()/3;}
        if(show){downAnim={opacity:1};downAnim[ref]=refValue;element.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing);}
        if(hide){distance=distance/Math.pow(2,times-1);}
        downAnim={};downAnim[ref]=refValue;for(;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance/2;}
        if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;element.animate(upAnim,speed,easing);}
        element.queue(done);$.effects.unshift(element,queuelen,anims+1);});
    /*!
 * jQuery UI Effects Clip 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectClip=$.effects.define("clip","hide",function(options,done){var start,animate={},element=$(this),direction=options.direction||"vertical",both=direction==="both",horizontal=both||direction==="horizontal",vertical=both||direction==="vertical";start=element.cssClip();animate.clip={top:vertical?(start.bottom-start.top)/2:start.top,right:horizontal?(start.right-start.left)/2:start.right,bottom:vertical?(start.bottom-start.top)/2:start.bottom,left:horizontal?(start.right-start.left)/2:start.left};$.effects.createPlaceholder(element);if(options.mode==="show"){element.cssClip(animate.clip);animate.clip=start;}
        element.animate(animate,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
    /*!
 * jQuery UI Effects Drop 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectDrop=$.effects.define("drop","hide",function(options,done){var distance,element=$(this),mode=options.mode,show=mode==="show",direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left")?"-=":"+=",oppositeMotion=(motion==="+=")?"-=":"+=",animation={opacity:0};$.effects.createPlaceholder(element);distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](true)/2;animation[ref]=motion+distance;if(show){element.css(animation);animation[ref]=oppositeMotion+distance;animation.opacity=1;}
        element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
    /*!
 * jQuery UI Effects Explode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectExplode=$.effects.define("explode","hide",function(options,done){var i,j,left,top,mx,my,rows=options.pieces?Math.round(Math.sqrt(options.pieces)):3,cells=rows,element=$(this),mode=options.mode,show=mode==="show",offset=element.show().css("visibility","hidden").offset(),width=Math.ceil(element.outerWidth()/cells),height=Math.ceil(element.outerHeight()/rows),pieces=[];function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete();}}
        for(i=0;i<rows;i++){top=offset.top+i*height;my=i-(rows-1)/2;for(j=0;j<cells;j++){left=offset.left+j*width;mx=j-(cells-1)/2;element.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},options.duration||500,options.easing,childComplete);}}
        function animComplete(){element.css({visibility:"visible"});$(pieces).remove();done();}});
    /*!
 * jQuery UI Effects Fade 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectFade=$.effects.define("fade","toggle",function(options,done){var show=options.mode==="show";$(this).css("opacity",show?0:1).animate({opacity:show?1:0},{queue:false,duration:options.duration,easing:options.easing,complete:done});});
    /*!
 * jQuery UI Effects Fold 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectFold=$.effects.define("fold","hide",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",size=options.size||15,percent=/([0-9]+)%/.exec(size),horizFirst=!!options.horizFirst,ref=horizFirst?["right","bottom"]:["bottom","right"],duration=options.duration/2,placeholder=$.effects.createPlaceholder(element),start=element.cssClip(),animation1={clip:$.extend({},start)},animation2={clip:$.extend({},start)},distance=[start[ref[0]],start[ref[1]]],queuelen=element.queue().length;if(percent){size=parseInt(percent[1],10)/100*distance[hide?0:1];}
        animation1.clip[ref[0]]=size;animation2.clip[ref[0]]=size;animation2.clip[ref[1]]=0;if(show){element.cssClip(animation2.clip);if(placeholder){placeholder.css($.effects.clipToBox(animation2));}
            animation2.clip=start;}
        element.queue(function(next){if(placeholder){placeholder.animate($.effects.clipToBox(animation1),duration,options.easing).animate($.effects.clipToBox(animation2),duration,options.easing);}
            next();}).animate(animation1,duration,options.easing).animate(animation2,duration,options.easing).queue(done);$.effects.unshift(element,queuelen,4);});
    /*!
 * jQuery UI Effects Highlight 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectHighlight=$.effects.define("highlight","show",function(options,done){var element=$(this),animation={backgroundColor:element.css("backgroundColor")};if(options.mode==="hide"){animation.opacity=0;}
        $.effects.saveStyle(element);element.css({backgroundImage:"none",backgroundColor:options.color||"#ffff99"}).animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
    /*!
 * jQuery UI Effects Size 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectSize=$.effects.define("size",function(options,done){var baseline,factor,temp,element=$(this),cProps=["fontSize"],vProps=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],hProps=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],mode=options.mode,restore=mode!=="effect",scale=options.scale||"both",origin=options.origin||["middle","center"],position=element.css("position"),pos=element.position(),original=$.effects.scaledDimensions(element),from=options.from||original,to=options.to||$.effects.scaledDimensions(element,0);$.effects.createPlaceholder(element);if(mode==="show"){temp=from;from=to;to=temp;}
        factor={from:{y:from.height/original.height,x:from.width/original.width},to:{y:to.height/original.height,x:to.width/original.width}};if(scale==="box"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,vProps,factor.from.y,from);to=$.effects.setTransition(element,vProps,factor.to.y,to);}
            if(factor.from.x!==factor.to.x){from=$.effects.setTransition(element,hProps,factor.from.x,from);to=$.effects.setTransition(element,hProps,factor.to.x,to);}}
        if(scale==="content"||scale==="both"){if(factor.from.y!==factor.to.y){from=$.effects.setTransition(element,cProps,factor.from.y,from);to=$.effects.setTransition(element,cProps,factor.to.y,to);}}
        if(origin){baseline=$.effects.getBaseline(origin,original);from.top=(original.outerHeight-from.outerHeight)*baseline.y+pos.top;from.left=(original.outerWidth-from.outerWidth)*baseline.x+pos.left;to.top=(original.outerHeight-to.outerHeight)*baseline.y+pos.top;to.left=(original.outerWidth-to.outerWidth)*baseline.x+pos.left;}
        delete from.outerHeight;delete from.outerWidth;element.css(from);if(scale==="content"||scale==="both"){vProps=vProps.concat(["marginTop","marginBottom"]).concat(cProps);hProps=hProps.concat(["marginLeft","marginRight"]);element.find("*[width]").each(function(){var child=$(this),childOriginal=$.effects.scaledDimensions(child),childFrom={height:childOriginal.height*factor.from.y,width:childOriginal.width*factor.from.x,outerHeight:childOriginal.outerHeight*factor.from.y,outerWidth:childOriginal.outerWidth*factor.from.x},childTo={height:childOriginal.height*factor.to.y,width:childOriginal.width*factor.to.x,outerHeight:childOriginal.height*factor.to.y,outerWidth:childOriginal.width*factor.to.x};if(factor.from.y!==factor.to.y){childFrom=$.effects.setTransition(child,vProps,factor.from.y,childFrom);childTo=$.effects.setTransition(child,vProps,factor.to.y,childTo);}
            if(factor.from.x!==factor.to.x){childFrom=$.effects.setTransition(child,hProps,factor.from.x,childFrom);childTo=$.effects.setTransition(child,hProps,factor.to.x,childTo);}
            if(restore){$.effects.saveStyle(child);}
            child.css(childFrom);child.animate(childTo,options.duration,options.easing,function(){if(restore){$.effects.restoreStyle(child);}});});}
        element.animate(to,{queue:false,duration:options.duration,easing:options.easing,complete:function(){var offset=element.offset();if(to.opacity===0){element.css("opacity",from.opacity);}
                if(!restore){element.css("position",position==="static"?"relative":position).offset(offset);$.effects.saveStyle(element);}
                done();}});});
    /*!
 * jQuery UI Effects Scale 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectScale=$.effects.define("scale",function(options,done){var el=$(this),mode=options.mode,percent=parseInt(options.percent,10)||(parseInt(options.percent,10)===0?0:(mode!=="effect"?0:100)),newOptions=$.extend(true,{from:$.effects.scaledDimensions(el),to:$.effects.scaledDimensions(el,percent,options.direction||"both"),origin:options.origin||["middle","center"]},options);if(options.fade){newOptions.from.opacity=1;newOptions.to.opacity=0;}
        $.effects.effect.size.call(this,newOptions,done);});
    /*!
 * jQuery UI Effects Puff 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectPuff=$.effects.define("puff","hide",function(options,done){var newOptions=$.extend(true,{},options,{fade:true,percent:parseInt(options.percent,10)||150});$.effects.effect.scale.call(this,newOptions,done);});
    /*!
 * jQuery UI Effects Pulsate 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectPulsate=$.effects.define("pulsate","show",function(options,done){var element=$(this),mode=options.mode,show=mode==="show",hide=mode==="hide",showhide=show||hide,anims=((options.times||5)*2)+(showhide?1:0),duration=options.duration/anims,animateTo=0,i=1,queuelen=element.queue().length;if(show||!element.is(":visible")){element.css("opacity",0).show();animateTo=1;}
        for(;i<anims;i++){element.animate({opacity:animateTo},duration,options.easing);animateTo=1-animateTo;}
        element.animate({opacity:animateTo},duration,options.easing);element.queue(done);$.effects.unshift(element,queuelen,anims+1);});
    /*!
 * jQuery UI Effects Shake 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectShake=$.effects.define("shake",function(options,done){var i=1,element=$(this),direction=options.direction||"left",distance=options.distance||20,times=options.times||3,anims=times*2+1,speed=Math.round(options.duration/anims),ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),animation={},animation1={},animation2={},queuelen=element.queue().length;$.effects.createPlaceholder(element);animation[ref]=(positiveMotion?"-=":"+=")+distance;animation1[ref]=(positiveMotion?"+=":"-=")+distance*2;animation2[ref]=(positiveMotion?"-=":"+=")+distance*2;element.animate(animation,speed,options.easing);for(;i<times;i++){element.animate(animation1,speed,options.easing).animate(animation2,speed,options.easing);}
        element.animate(animation1,speed,options.easing).animate(animation,speed/2,options.easing).queue(done);$.effects.unshift(element,queuelen,anims+1);});
    /*!
 * jQuery UI Effects Slide 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effectsEffectSlide=$.effects.define("slide","show",function(options,done){var startClip,startRef,element=$(this),map={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},mode=options.mode,direction=options.direction||"left",ref=(direction==="up"||direction==="down")?"top":"left",positiveMotion=(direction==="up"||direction==="left"),distance=options.distance||element[ref==="top"?"outerHeight":"outerWidth"](true),animation={};$.effects.createPlaceholder(element);startClip=element.cssClip();startRef=element.position()[ref];animation[ref]=(positiveMotion?-1:1)*distance+startRef;animation.clip=element.cssClip();animation.clip[map[direction][1]]=animation.clip[map[direction][0]];if(mode==="show"){element.cssClip(animation.clip);element.css(ref,animation[ref]);animation.clip=startClip;animation[ref]=startRef;}
        element.animate(animation,{queue:false,duration:options.duration,easing:options.easing,complete:done});});
    /*!
 * jQuery UI Effects Transfer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var effect;if($.uiBackCompat!==false){effect=$.effects.define("transfer",function(options,done){$(this).transfer(options,done);});}
    var effectsEffectTransfer=effect;
    /*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.ui.focusable=function(element,hasTabindex){var map,mapName,img,focusableIfVisible,fieldset,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
        img=$("img[usemap='#"+mapName+"']");return img.length>0&&img.is(":visible");}
        if(/^(input|select|textarea|button|object)$/.test(nodeName)){focusableIfVisible=!element.disabled;if(focusableIfVisible){fieldset=$(element).closest("fieldset")[0];if(fieldset){focusableIfVisible=!fieldset.disabled;}}}else if("a"===nodeName){focusableIfVisible=element.href||hasTabindex;}else{focusableIfVisible=hasTabindex;}
        return focusableIfVisible&&$(element).is(":visible")&&visible($(element));};function visible(element){var visibility=element.css("visibility");while(visibility==="inherit"){element=element.parent();visibility=element.css("visibility");}
        return visibility==="visible";}
    $.extend($.expr.pseudos,{focusable:function(element){return $.ui.focusable(element,$.attr(element,"tabindex")!=null);}});var focusable=$.ui.focusable;var form=$.fn._form=function(){return typeof this[0].form==="string"?this.closest("form"):$(this[0].form);};
    /*!
 * jQuery UI Form Reset Mixin 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var formResetMixin=$.ui.formResetMixin={_formResetHandler:function(){var form=$(this);setTimeout(function(){var instances=form.data("ui-form-reset-instances");$.each(instances,function(){this.refresh();});});},_bindFormResetHandler:function(){this.form=this.element._form();if(!this.form.length){return;}
            var instances=this.form.data("ui-form-reset-instances")||[];if(!instances.length){this.form.on("reset.ui-form-reset",this._formResetHandler);}
            instances.push(this);this.form.data("ui-form-reset-instances",instances);},_unbindFormResetHandler:function(){if(!this.form.length){return;}
            var instances=this.form.data("ui-form-reset-instances");instances.splice($.inArray(this,instances),1);if(instances.length){this.form.data("ui-form-reset-instances",instances);}else{this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");}}};
    /*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
    if(!$.expr.pseudos){$.expr.pseudos=$.expr[":"];}
    if(!$.uniqueSort){$.uniqueSort=$.unique;}
    if(!$.escapeSelector){var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;var fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD";}
        return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}
        return"\\"+ch;};$.escapeSelector=function(sel){return(sel+"").replace(rcssescape,fcssescape);};}
    if(!$.fn.even||!$.fn.odd){$.fn.extend({even:function(){return this.filter(function(i){return i%2===0;});},odd:function(){return this.filter(function(i){return i%2===1;});}});};
    /*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var keycode=$.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};
    /*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var labels=$.fn.labels=function(){var ancestor,selector,id,labels,ancestors;if(!this.length){return this.pushStack([]);}
        if(this[0].labels&&this[0].labels.length){return this.pushStack(this[0].labels);}
        labels=this.eq(0).parents("label");id=this.attr("id");if(id){ancestor=this.eq(0).parents().last();ancestors=ancestor.add(ancestor.length?ancestor.siblings():this.siblings());selector="label[for='"+$.escapeSelector(id)+"']";labels=labels.add(ancestors.find(selector).addBack(selector));}
        return this.pushStack(labels);};
    /*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var scrollParent=$.fn.scrollParent=function(includeHidden){var position=this.css("position"),excludeStaticParent=position==="absolute",overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,scrollParent=this.parents().filter(function(){var parent=$(this);if(excludeStaticParent&&parent.css("position")==="static"){return false;}
        return overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+
            parent.css("overflow-x"));}).eq(0);return position==="fixed"||!scrollParent.length?$(this[0].ownerDocument||document):scrollParent;};
    /*!
 * jQuery UI Tabbable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var tabbable=$.extend($.expr.pseudos,{tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),hasTabindex=tabIndex!=null;return(!hasTabindex||tabIndex>=0)&&$.ui.focusable(element,hasTabindex);}});
    /*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var uniqueId=$.fn.extend({uniqueId:(function(){var uuid=0;return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++uuid);}});};})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){$(this).removeAttr("id");}});}});
    /*!
 * jQuery UI Accordion 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var widgetsAccordion=$.widget("ui.accordion",{version:"1.13.2",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:false,event:"click",header:function(elem){return elem.find("> li > :first-child").add(elem.find("> :not(li)").even());},heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var options=this.options;this.prevShow=this.prevHide=$();this._addClass("ui-accordion","ui-widget ui-helper-reset");this.element.attr("role","tablist");if(!options.collapsible&&(options.active===false||options.active==null)){options.active=0;}
            this._processPanels();if(options.active<0){options.active+=this.headers.length;}
            this._refresh();},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?$():this.active.next()};},_createIcons:function(){var icon,children,icons=this.options.icons;if(icons){icon=$("<span>");this._addClass(icon,"ui-accordion-header-icon","ui-icon "+icons.header);icon.prependTo(this.headers);children=this.active.children(".ui-accordion-header-icon");this._removeClass(children,icons.header)._addClass(children,null,icons.activeHeader)._addClass(this.headers,"ui-accordion-icons");}},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons");this.headers.children(".ui-accordion-header-icon").remove();},_destroy:function(){var contents;this.element.removeAttr("role");this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();this._destroyIcons();contents=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();if(this.options.heightStyle!=="content"){contents.css("height","");}},_setOption:function(key,value){if(key==="active"){this._activate(value);return;}
            if(key==="event"){if(this.options.event){this._off(this.headers,this.options.event);}
                this._setupEvents(value);}
            this._super(key,value);if(key==="collapsible"&&!value&&this.options.active===false){this._activate(0);}
            if(key==="icons"){this._destroyIcons();if(value){this._createIcons();}}},_setOptionDisabled:function(value){this._super(value);this.element.attr("aria-disabled",value);this._toggleClass(null,"ui-state-disabled",!!value);this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!value);},_keydown:function(event){if(event.altKey||event.ctrlKey){return;}
            var keyCode=$.ui.keyCode,length=this.headers.length,currentIndex=this.headers.index(event.target),toFocus=false;switch(event.keyCode){case keyCode.RIGHT:case keyCode.DOWN:toFocus=this.headers[(currentIndex+1)%length];break;case keyCode.LEFT:case keyCode.UP:toFocus=this.headers[(currentIndex-1+length)%length];break;case keyCode.SPACE:case keyCode.ENTER:this._eventHandler(event);break;case keyCode.HOME:toFocus=this.headers[0];break;case keyCode.END:toFocus=this.headers[length-1];break;}
            if(toFocus){$(event.target).attr("tabIndex",-1);$(toFocus).attr("tabIndex",0);$(toFocus).trigger("focus");event.preventDefault();}},_panelKeyDown:function(event){if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){$(event.currentTarget).prev().trigger("focus");}},refresh:function(){var options=this.options;this._processPanels();if((options.active===false&&options.collapsible===true)||!this.headers.length){options.active=false;this.active=$();}else if(options.active===false){this._activate(0);}else if(this.active.length&&!$.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){options.active=false;this.active=$();}else{this._activate(Math.max(0,options.active-1));}}else{options.active=this.headers.index(this.active);}
            this._destroyIcons();this._refresh();},_processPanels:function(){var prevHeaders=this.headers,prevPanels=this.panels;if(typeof this.options.header==="function"){this.headers=this.options.header(this.element);}else{this.headers=this.element.find(this.options.header);}
            this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default");this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content");if(prevPanels){this._off(prevHeaders.not(this.headers));this._off(prevPanels.not(this.panels));}},_refresh:function(){var maxHeight,options=this.options,heightStyle=options.heightStyle,parent=this.element.parent();this.active=this._findActive(options.active);this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed");this._addClass(this.active.next(),"ui-accordion-content-active");this.active.next().show();this.headers.attr("role","tab").each(function(){var header=$(this),headerId=header.uniqueId().attr("id"),panel=header.next(),panelId=panel.uniqueId().attr("id");header.attr("aria-controls",panelId);panel.attr("aria-labelledby",headerId);}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0);}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"});}
            this._createIcons();this._setupEvents(options.event);if(heightStyle==="fill"){maxHeight=parent.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}
                maxHeight-=elem.outerHeight(true);});this.headers.each(function(){maxHeight-=$(this).outerHeight(true);});this.headers.next().each(function(){$(this).height(Math.max(0,maxHeight-
                $(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.headers.next().each(function(){var isVisible=$(this).is(":visible");if(!isVisible){$(this).show();}
                maxHeight=Math.max(maxHeight,$(this).css("height","").height());if(!isVisible){$(this).hide();}}).height(maxHeight);}},_activate:function(index){var active=this._findActive(index)[0];if(active===this.active[0]){return;}
            active=active||this.active[0];this._eventHandler({target:active,currentTarget:active,preventDefault:$.noop});},_findActive:function(selector){return typeof selector==="number"?this.headers.eq(selector):$();},_setupEvents:function(event){var events={keydown:"_keydown"};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}
            this._off(this.headers.add(this.headers.next()));this._on(this.headers,events);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers);},_eventHandler:function(event){var activeChildren,clickedChildren,options=this.options,active=this.active,clicked=$(event.currentTarget),clickedIsActive=clicked[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():clicked.next(),toHide=active.next(),eventData={oldHeader:active,oldPanel:toHide,newHeader:collapsing?$():clicked,newPanel:toShow};event.preventDefault();if((clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===false)){return;}
            options.active=collapsing?false:this.headers.index(clicked);this.active=clickedIsActive?$():clicked;this._toggle(eventData);this._removeClass(active,"ui-accordion-header-active","ui-state-active");if(options.icons){activeChildren=active.children(".ui-accordion-header-icon");this._removeClass(activeChildren,null,options.icons.activeHeader)._addClass(activeChildren,null,options.icons.header);}
            if(!clickedIsActive){this._removeClass(clicked,"ui-accordion-header-collapsed")._addClass(clicked,"ui-accordion-header-active","ui-state-active");if(options.icons){clickedChildren=clicked.children(".ui-accordion-header-icon");this._removeClass(clickedChildren,null,options.icons.header)._addClass(clickedChildren,null,options.icons.activeHeader);}
                this._addClass(clicked.next(),"ui-accordion-content-active");}},_toggle:function(data){var toShow=data.newPanel,toHide=this.prevShow.length?this.prevShow:data.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=toShow;this.prevHide=toHide;if(this.options.animate){this._animate(toShow,toHide,data);}else{toHide.hide();toShow.show();this._toggleComplete(data);}
            toHide.attr({"aria-hidden":"true"});toHide.prev().attr({"aria-selected":"false","aria-expanded":"false"});if(toShow.length&&toHide.length){toHide.prev().attr({"tabIndex":-1,"aria-expanded":"false"});}else if(toShow.length){this.headers.filter(function(){return parseInt($(this).attr("tabIndex"),10)===0;}).attr("tabIndex",-1);}
            toShow.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});},_animate:function(toShow,toHide,data){var total,easing,duration,that=this,adjust=0,boxSizing=toShow.css("box-sizing"),down=toShow.length&&(!toHide.length||(toShow.index()<toHide.index())),animate=this.options.animate||{},options=down&&animate.down||animate,complete=function(){that._toggleComplete(data);};if(typeof options==="number"){duration=options;}
            if(typeof options==="string"){easing=options;}
            easing=easing||options.easing||animate.easing;duration=duration||options.duration||animate.duration;if(!toHide.length){return toShow.animate(this.showProps,duration,easing,complete);}
            if(!toShow.length){return toHide.animate(this.hideProps,duration,easing,complete);}
            total=toShow.show().outerHeight();toHide.animate(this.hideProps,{duration:duration,easing:easing,step:function(now,fx){fx.now=Math.round(now);}});toShow.hide().animate(this.showProps,{duration:duration,easing:easing,complete:complete,step:function(now,fx){fx.now=Math.round(now);if(fx.prop!=="height"){if(boxSizing==="content-box"){adjust+=fx.now;}}else if(that.options.heightStyle!=="content"){fx.now=Math.round(total-toHide.outerHeight()-adjust);adjust=0;}}});},_toggleComplete:function(data){var toHide=data.oldPanel,prev=toHide.prev();this._removeClass(toHide,"ui-accordion-content-active");this._removeClass(prev,"ui-accordion-header-active")._addClass(prev,"ui-accordion-header-collapsed");if(toHide.length){toHide.parent()[0].className=toHide.parent()[0].className;}
            this._trigger("activate",null,data);}});var safeActiveElement=$.ui.safeActiveElement=function(document){var activeElement;try{activeElement=document.activeElement;}catch(error){activeElement=document.body;}
        if(!activeElement){activeElement=document.body;}
        if(!activeElement.nodeName){activeElement=document.body;}
        return activeElement;};
    /*!
 * jQuery UI Menu 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var widgetsMenu=$.widget("ui.menu",{version:"1.13.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=false;this.lastMousePosition={x:null,y:null};this.element.uniqueId().attr({role:this.options.role,tabIndex:0});this._addClass("ui-menu","ui-widget ui-widget-content");this._on({"mousedown .ui-menu-item":function(event){event.preventDefault();this._activateItem(event);},"click .ui-menu-item":function(event){var target=$(event.target);var active=$($.ui.safeActiveElement(this.document[0]));if(!this.mouseHandled&&target.not(".ui-state-disabled").length){this.select(event);if(!event.isPropagationStopped()){this.mouseHandled=true;}
                if(target.has(".ui-menu").length){this.expand(event);}else if(!this.element.is(":focus")&&active.closest(".ui-menu").length){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer);}}}},"mouseenter .ui-menu-item":"_activateItem","mousemove .ui-menu-item":"_activateItem",mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(event,keepActiveItem){var item=this.active||this._menuItems().first();if(!keepActiveItem){this.focus(event,item);}},blur:function(event){this._delay(function(){var notContained=!$.contains(this.element[0],$.ui.safeActiveElement(this.document[0]));if(notContained){this.collapseAll(event);}});},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(event){if(this._closeOnDocumentClick(event)){this.collapseAll(event,true);}
                this.mouseHandled=false;}});},_activateItem:function(event){if(this.previousFilter){return;}
            if(event.clientX===this.lastMousePosition.x&&event.clientY===this.lastMousePosition.y){return;}
            this.lastMousePosition={x:event.clientX,y:event.clientY};var actualTarget=$(event.target).closest(".ui-menu-item"),target=$(event.currentTarget);if(actualTarget[0]!==target[0]){return;}
            if(target.is(".ui-state-active")){return;}
            this._removeClass(target.siblings().children(".ui-state-active"),null,"ui-state-active");this.focus(event,target);},_destroy:function(){var items=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),submenus=items.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled "+"tabIndex").removeUniqueId().show();submenus.children().each(function(){var elem=$(this);if(elem.data("ui-menu-submenu-caret")){elem.remove();}});},_keydown:function(event){var match,prev,character,skip,preventDefault=true;switch(event.keyCode){case $.ui.keyCode.PAGE_UP:this.previousPage(event);break;case $.ui.keyCode.PAGE_DOWN:this.nextPage(event);break;case $.ui.keyCode.HOME:this._move("first","first",event);break;case $.ui.keyCode.END:this._move("last","last",event);break;case $.ui.keyCode.UP:this.previous(event);break;case $.ui.keyCode.DOWN:this.next(event);break;case $.ui.keyCode.LEFT:this.collapse(event);break;case $.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(event);}
            break;case $.ui.keyCode.ENTER:case $.ui.keyCode.SPACE:this._activate(event);break;case $.ui.keyCode.ESCAPE:this.collapse(event);break;default:preventDefault=false;prev=this.previousFilter||"";skip=false;character=event.keyCode>=96&&event.keyCode<=105?(event.keyCode-96).toString():String.fromCharCode(event.keyCode);clearTimeout(this.filterTimer);if(character===prev){skip=true;}else{character=prev+character;}
            match=this._filterMenuItems(character);match=skip&&match.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):match;if(!match.length){character=String.fromCharCode(event.keyCode);match=this._filterMenuItems(character);}
            if(match.length){this.focus(event,match);this.previousFilter=character;this.filterTimer=this._delay(function(){delete this.previousFilter;},1000);}else{delete this.previousFilter;}}
            if(preventDefault){event.preventDefault();}},_activate:function(event){if(this.active&&!this.active.is(".ui-state-disabled")){if(this.active.children("[aria-haspopup='true']").length){this.expand(event);}else{this.select(event);}}},refresh:function(){var menus,items,newSubmenus,newItems,newWrappers,that=this,icon=this.options.icons.submenu,submenus=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length);newSubmenus=submenus.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var menu=$(this),item=menu.prev(),submenuCaret=$("<span>").data("ui-menu-submenu-caret",true);that._addClass(submenuCaret,"ui-menu-icon","ui-icon "+icon);item.attr("aria-haspopup","true").prepend(submenuCaret);menu.attr("aria-labelledby",item.attr("id"));});this._addClass(newSubmenus,"ui-menu","ui-widget ui-widget-content ui-front");menus=submenus.add(this.element);items=menus.find(this.options.items);items.not(".ui-menu-item").each(function(){var item=$(this);if(that._isDivider(item)){that._addClass(item,"ui-menu-divider","ui-widget-content");}});newItems=items.not(".ui-menu-item, .ui-menu-divider");newWrappers=newItems.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()});this._addClass(newItems,"ui-menu-item")._addClass(newWrappers,"ui-menu-item-wrapper");items.filter(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!$.contains(this.element[0],this.active[0])){this.blur();}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role];},_setOption:function(key,value){if(key==="icons"){var icons=this.element.find(".ui-menu-icon");this._removeClass(icons,null,this.options.icons.submenu)._addClass(icons,null,value.submenu);}
            this._super(key,value);},_setOptionDisabled:function(value){this._super(value);this.element.attr("aria-disabled",String(value));this._toggleClass(null,"ui-state-disabled",!!value);},focus:function(event,item){var nested,focused,activeParent;this.blur(event,event&&event.type==="focus");this._scrollIntoView(item);this.active=item.first();focused=this.active.children(".ui-menu-item-wrapper");this._addClass(focused,null,"ui-state-active");if(this.options.role){this.element.attr("aria-activedescendant",focused.attr("id"));}
            activeParent=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");this._addClass(activeParent,null,"ui-state-active");if(event&&event.type==="keydown"){this._close();}else{this.timer=this._delay(function(){this._close();},this.delay);}
            nested=item.children(".ui-menu");if(nested.length&&event&&(/^mouse/.test(event.type))){this._startOpening(nested);}
            this.activeMenu=item.parent();this._trigger("focus",event,{item:item});},_scrollIntoView:function(item){var borderTop,paddingTop,offset,scroll,elementHeight,itemHeight;if(this._hasScroll()){borderTop=parseFloat($.css(this.activeMenu[0],"borderTopWidth"))||0;paddingTop=parseFloat($.css(this.activeMenu[0],"paddingTop"))||0;offset=item.offset().top-this.activeMenu.offset().top-borderTop-paddingTop;scroll=this.activeMenu.scrollTop();elementHeight=this.activeMenu.height();itemHeight=item.outerHeight();if(offset<0){this.activeMenu.scrollTop(scroll+offset);}else if(offset+itemHeight>elementHeight){this.activeMenu.scrollTop(scroll+offset-elementHeight+itemHeight);}}},blur:function(event,fromFocus){if(!fromFocus){clearTimeout(this.timer);}
            if(!this.active){return;}
            this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active");this._trigger("blur",event,{item:this.active});this.active=null;},_startOpening:function(submenu){clearTimeout(this.timer);if(submenu.attr("aria-hidden")!=="true"){return;}
            this.timer=this._delay(function(){this._close();this._open(submenu);},this.delay);},_open:function(submenu){var position=$.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden","true");submenu.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(position);},collapseAll:function(event,all){clearTimeout(this.timer);this.timer=this._delay(function(){var currentMenu=all?this.element:$(event&&event.target).closest(this.element.find(".ui-menu"));if(!currentMenu.length){currentMenu=this.element;}
            this._close(currentMenu);this.blur(event);this._removeClass(currentMenu.find(".ui-state-active"),null,"ui-state-active");this.activeMenu=currentMenu;},all?0:this.delay);},_close:function(startMenu){if(!startMenu){startMenu=this.active?this.active.parent():this.element;}
            startMenu.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false");},_closeOnDocumentClick:function(event){return!$(event.target).closest(".ui-menu").length;},_isDivider:function(item){return!/[^\-\u2014\u2013\s]/.test(item.text());},collapse:function(event){var newItem=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(newItem&&newItem.length){this._close();this.focus(event,newItem);}},expand:function(event){var newItem=this.active&&this._menuItems(this.active.children(".ui-menu")).first();if(newItem&&newItem.length){this._open(newItem.parent());this._delay(function(){this.focus(event,newItem);});}},next:function(event){this._move("next","first",event);},previous:function(event){this._move("prev","last",event);},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length;},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length;},_menuItems:function(menu){return(menu||this.element).find(this.options.items).filter(".ui-menu-item");},_move:function(direction,filter,event){var next;if(this.active){if(direction==="first"||direction==="last"){next=this.active
            [direction==="first"?"prevAll":"nextAll"](".ui-menu-item").last();}else{next=this.active
            [direction+"All"](".ui-menu-item").first();}}
            if(!next||!next.length||!this.active){next=this._menuItems(this.activeMenu)[filter]();}
            this.focus(event,next);},nextPage:function(event){var item,base,height;if(!this.active){this.next(event);return;}
            if(this.isLastItem()){return;}
            if(this._hasScroll()){base=this.active.offset().top;height=this.element.innerHeight();if($.fn.jquery.indexOf("3.2.")===0){height+=this.element[0].offsetHeight-this.element.outerHeight();}
                this.active.nextAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base-height<0;});this.focus(event,item);}else{this.focus(event,this._menuItems(this.activeMenu)
                [!this.active?"first":"last"]());}},previousPage:function(event){var item,base,height;if(!this.active){this.next(event);return;}
            if(this.isFirstItem()){return;}
            if(this._hasScroll()){base=this.active.offset().top;height=this.element.innerHeight();if($.fn.jquery.indexOf("3.2.")===0){height+=this.element[0].offsetHeight-this.element.outerHeight();}
                this.active.prevAll(".ui-menu-item").each(function(){item=$(this);return item.offset().top-base+height>0;});this.focus(event,item);}else{this.focus(event,this._menuItems(this.activeMenu).first());}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight");},select:function(event){this.active=this.active||$(event.target).closest(".ui-menu-item");var ui={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(event,true);}
            this._trigger("select",event,ui);},_filterMenuItems:function(character){var escapedCharacter=character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),regex=new RegExp("^"+escapedCharacter,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return regex.test(String.prototype.trim.call($(this).children(".ui-menu-item-wrapper").text()));});}});
    /*!
 * jQuery UI Autocomplete 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.widget("ui.autocomplete",{version:"1.13.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,liveRegionTimer:null,_create:function(){var suppressKeyPress,suppressKeyPressRepeat,suppressInput,nodeName=this.element[0].nodeName.toLowerCase(),isTextarea=nodeName==="textarea",isInput=nodeName==="input";this.isMultiLine=isTextarea||!isInput&&this._isContentEditable(this.element);this.valueMethod=this.element[isTextarea||isInput?"val":"text"];this.isNewMenu=true;this._addClass("ui-autocomplete-input");this.element.attr("autocomplete","off");this._on(this.element,{keydown:function(event){if(this.element.prop("readOnly")){suppressKeyPress=true;suppressInput=true;suppressKeyPressRepeat=true;return;}
                suppressKeyPress=false;suppressInput=false;suppressKeyPressRepeat=false;var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:suppressKeyPress=true;this._move("previousPage",event);break;case keyCode.PAGE_DOWN:suppressKeyPress=true;this._move("nextPage",event);break;case keyCode.UP:suppressKeyPress=true;this._keyEvent("previous",event);break;case keyCode.DOWN:suppressKeyPress=true;this._keyEvent("next",event);break;case keyCode.ENTER:if(this.menu.active){suppressKeyPress=true;event.preventDefault();this.menu.select(event);}
                    break;case keyCode.TAB:if(this.menu.active){this.menu.select(event);}
                    break;case keyCode.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term);}
                    this.close(event);event.preventDefault();}
                    break;default:suppressKeyPressRepeat=true;this._searchTimeout(event);break;}},keypress:function(event){if(suppressKeyPress){suppressKeyPress=false;if(!this.isMultiLine||this.menu.element.is(":visible")){event.preventDefault();}
                return;}
                if(suppressKeyPressRepeat){return;}
                var keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.PAGE_UP:this._move("previousPage",event);break;case keyCode.PAGE_DOWN:this._move("nextPage",event);break;case keyCode.UP:this._keyEvent("previous",event);break;case keyCode.DOWN:this._keyEvent("next",event);break;}},input:function(event){if(suppressInput){suppressInput=false;event.preventDefault();return;}
                this._searchTimeout(event);},focus:function(){this.selectedItem=null;this.previous=this._value();},blur:function(event){clearTimeout(this.searching);this.close(event);this._change(event);}});this._initSource();this.menu=$("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().attr({"unselectable":"on"}).menu("instance");this._addClass(this.menu.element,"ui-autocomplete","ui-front");this._on(this.menu.element,{mousedown:function(event){event.preventDefault();},menufocus:function(event,ui){var label,item;if(this.isNewMenu){this.isNewMenu=false;if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){$(event.target).trigger(event.originalEvent);});return;}}
                item=ui.item.data("ui-autocomplete-item");if(false!==this._trigger("focus",event,{item:item})){if(event.originalEvent&&/^key/.test(event.originalEvent.type)){this._value(item.value);}}
                label=ui.item.attr("aria-label")||item.value;if(label&&String.prototype.trim.call(label).length){clearTimeout(this.liveRegionTimer);this.liveRegionTimer=this._delay(function(){this.liveRegion.html($("<div>").text(label));},100);}},menuselect:function(event,ui){var item=ui.item.data("ui-autocomplete-item"),previous=this.previous;if(this.element[0]!==$.ui.safeActiveElement(this.document[0])){this.element.trigger("focus");this.previous=previous;this._delay(function(){this.previous=previous;this.selectedItem=item;});}
                if(false!==this._trigger("select",event,{item:item})){this._value(item.value);}
                this.term=this._value();this.close(event);this.selectedItem=item;}});this.liveRegion=$("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete");}});},_destroy:function(){clearTimeout(this.searching);this.element.removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove();},_setOption:function(key,value){this._super(key,value);if(key==="source"){this._initSource();}
            if(key==="appendTo"){this.menu.element.appendTo(this._appendTo());}
            if(key==="disabled"&&value&&this.xhr){this.xhr.abort();}},_isEventTargetInWidget:function(event){var menuElement=this.menu.element[0];return event.target===this.element[0]||event.target===menuElement||$.contains(menuElement,event.target);},_closeOnClickOutside:function(event){if(!this._isEventTargetInWidget(event)){this.close();}},_appendTo:function(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0);}
            if(!element||!element[0]){element=this.element.closest(".ui-front, dialog");}
            if(!element.length){element=this.document[0].body;}
            return element;},_initSource:function(){var array,url,that=this;if(Array.isArray(this.options.source)){array=this.options.source;this.source=function(request,response){response($.ui.autocomplete.filter(array,request.term));};}else if(typeof this.options.source==="string"){url=this.options.source;this.source=function(request,response){if(that.xhr){that.xhr.abort();}
            that.xhr=$.ajax({url:url,data:request,dataType:"json",success:function(data){response(data);},error:function(){response([]);}});};}else{this.source=this.options.source;}},_searchTimeout:function(event){clearTimeout(this.searching);this.searching=this._delay(function(){var equalValues=this.term===this._value(),menuVisible=this.menu.element.is(":visible"),modifierKey=event.altKey||event.ctrlKey||event.metaKey||event.shiftKey;if(!equalValues||(equalValues&&!menuVisible&&!modifierKey)){this.selectedItem=null;this.search(null,event);}},this.options.delay);},search:function(value,event){value=value!=null?value:this._value();this.term=this._value();if(value.length<this.options.minLength){return this.close(event);}
            if(this._trigger("search",event)===false){return;}
            return this._search(value);},_search:function(value){this.pending++;this._addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:value},this._response());},_response:function(){var index=++this.requestIndex;return function(content){if(index===this.requestIndex){this.__response(content);}
            this.pending--;if(!this.pending){this._removeClass("ui-autocomplete-loading");}}.bind(this);},__response:function(content){if(content){content=this._normalize(content);}
            this._trigger("response",null,{content:content});if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){this._suggest(content);this._trigger("open");}else{this._close();}},close:function(event){this.cancelSearch=true;this._close(event);},_close:function(event){this._off(this.document,"mousedown");if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",event);}},_change:function(event){if(this.previous!==this._value()){this._trigger("change",event,{item:this.selectedItem});}},_normalize:function(items){if(items.length&&items[0].label&&items[0].value){return items;}
            return $.map(items,function(item){if(typeof item==="string"){return{label:item,value:item};}
                return $.extend({},item,{label:item.label||item.value,value:item.value||item.label});});},_suggest:function(items){var ul=this.menu.element.empty();this._renderMenu(ul,items);this.isNewMenu=true;this.menu.refresh();ul.show();this._resizeMenu();ul.position($.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next();}
            this._on(this.document,{mousedown:"_closeOnClickOutside"});},_resizeMenu:function(){var ul=this.menu.element;ul.outerWidth(Math.max(ul.width("").outerWidth()+1,this.element.outerWidth()));},_renderMenu:function(ul,items){var that=this;$.each(items,function(index,item){that._renderItemData(ul,item);});},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-autocomplete-item",item);},_renderItem:function(ul,item){return $("<li>").append($("<div>").text(item.label)).appendTo(ul);},_move:function(direction,event){if(!this.menu.element.is(":visible")){this.search(null,event);return;}
            if(this.menu.isFirstItem()&&/^previous/.test(direction)||this.menu.isLastItem()&&/^next/.test(direction)){if(!this.isMultiLine){this._value(this.term);}
                this.menu.blur();return;}
            this.menu[direction](event);},widget:function(){return this.menu.element;},_value:function(){return this.valueMethod.apply(this.element,arguments);},_keyEvent:function(keyEvent,event){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(keyEvent,event);event.preventDefault();}},_isContentEditable:function(element){if(!element.length){return false;}
            var editable=element.prop("contentEditable");if(editable==="inherit"){return this._isContentEditable(element.parent());}
            return editable==="true";}});$.extend($.ui.autocomplete,{escapeRegex:function(value){return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");},filter:function(array,term){var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");return $.grep(array,function(value){return matcher.test(value.label||value.value||value);});}});$.widget("ui.autocomplete",$.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(amount){return amount+(amount>1?" results are":" result is")+" available, use up and down arrow keys to navigate.";}}},__response:function(content){var message;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return;}
            if(content&&content.length){message=this.options.messages.results(content.length);}else{message=this.options.messages.noResults;}
            clearTimeout(this.liveRegionTimer);this.liveRegionTimer=this._delay(function(){this.liveRegion.html($("<div>").text(message));},100);}});var widgetsAutocomplete=$.ui.autocomplete;
    /*!
 * jQuery UI Controlgroup 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var controlgroupCornerRegex=/ui-corner-([a-z]){2,6}/g;var widgetsControlgroup=$.widget("ui.controlgroup",{version:"1.13.2",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:true,items:{"button":"input[type=button], input[type=submit], input[type=reset], button, a","controlgroupLabel":".ui-controlgroup-label","checkboxradio":"input[type='checkbox'], input[type='radio']","selectmenu":"select","spinner":".ui-spinner-input"}},_create:function(){this._enhance();},_enhance:function(){this.element.attr("role","toolbar");this.refresh();},_destroy:function(){this._callChildMethod("destroy");this.childWidgets.removeData("ui-controlgroup-data");this.element.removeAttr("role");if(this.options.items.controlgroupLabel){this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();}},_initWidgets:function(){var that=this,childWidgets=[];$.each(this.options.items,function(widget,selector){var labels;var options={};if(!selector){return;}
            if(widget==="controlgroupLabel"){labels=that.element.find(selector);labels.each(function(){var element=$(this);if(element.children(".ui-controlgroup-label-contents").length){return;}
                element.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");});that._addClass(labels,null,"ui-widget ui-widget-content ui-state-default");childWidgets=childWidgets.concat(labels.get());return;}
            if(!$.fn[widget]){return;}
            if(that["_"+widget+"Options"]){options=that["_"+widget+"Options"]("middle");}else{options={classes:{}};}
            that.element.find(selector).each(function(){var element=$(this);var instance=element[widget]("instance");var instanceOptions=$.widget.extend({},options);if(widget==="button"&&element.parent(".ui-spinner").length){return;}
                if(!instance){instance=element[widget]()[widget]("instance");}
                if(instance){instanceOptions.classes=that._resolveClassesValues(instanceOptions.classes,instance);}
                element[widget](instanceOptions);var widgetElement=element[widget]("widget");$.data(widgetElement[0],"ui-controlgroup-data",instance?instance:element[widget]("instance"));childWidgets.push(widgetElement[0]);});});this.childWidgets=$($.uniqueSort(childWidgets));this._addClass(this.childWidgets,"ui-controlgroup-item");},_callChildMethod:function(method){this.childWidgets.each(function(){var element=$(this),data=element.data("ui-controlgroup-data");if(data&&data[method]){data[method]();}});},_updateCornerClass:function(element,position){var remove="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";var add=this._buildSimpleOptions(position,"label").classes.label;this._removeClass(element,null,remove);this._addClass(element,null,add);},_buildSimpleOptions:function(position,key){var direction=this.options.direction==="vertical";var result={classes:{}};result.classes[key]={"middle":"","first":"ui-corner-"+(direction?"top":"left"),"last":"ui-corner-"+(direction?"bottom":"right"),"only":"ui-corner-all"}[position];return result;},_spinnerOptions:function(position){var options=this._buildSimpleOptions(position,"ui-spinner");options.classes["ui-spinner-up"]="";options.classes["ui-spinner-down"]="";return options;},_buttonOptions:function(position){return this._buildSimpleOptions(position,"ui-button");},_checkboxradioOptions:function(position){return this._buildSimpleOptions(position,"ui-checkboxradio-label");},_selectmenuOptions:function(position){var direction=this.options.direction==="vertical";return{width:direction?"auto":false,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(direction?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(direction?"top":"left")},last:{"ui-selectmenu-button-open":direction?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(direction?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[position]};},_resolveClassesValues:function(classes,instance){var result={};$.each(classes,function(key){var current=instance.options.classes[key]||"";current=String.prototype.trim.call(current.replace(controlgroupCornerRegex,""));result[key]=(current+" "+classes[key]).replace(/\s+/g," ");});return result;},_setOption:function(key,value){if(key==="direction"){this._removeClass("ui-controlgroup-"+this.options.direction);}
            this._super(key,value);if(key==="disabled"){this._callChildMethod(value?"disable":"enable");return;}
            this.refresh();},refresh:function(){var children,that=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction);if(this.options.direction==="horizontal"){this._addClass(null,"ui-helper-clearfix");}
            this._initWidgets();children=this.childWidgets;if(this.options.onlyVisible){children=children.filter(":visible");}
            if(children.length){$.each(["first","last"],function(index,value){var instance=children[value]().data("ui-controlgroup-data");if(instance&&that["_"+instance.widgetName+"Options"]){var options=that["_"+instance.widgetName+"Options"](children.length===1?"only":value);options.classes=that._resolveClassesValues(options.classes,instance);instance.element[instance.widgetName](options);}else{that._updateCornerClass(children[value](),value);}});this._callChildMethod("refresh");}}});
    /*!
 * jQuery UI Checkboxradio 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.widget("ui.checkboxradio",[$.ui.formResetMixin,{version:"1.13.2",options:{disabled:null,label:null,icon:true,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var disabled,labels,labelContents;var options=this._super()||{};this._readType();labels=this.element.labels();this.label=$(labels[labels.length-1]);if(!this.label.length){$.error("No label found for checkboxradio widget");}
            this.originalLabel="";labelContents=this.label.contents().not(this.element[0]);if(labelContents.length){this.originalLabel+=labelContents.clone().wrapAll("<div></div>").parent().html();}
            if(this.originalLabel){options.label=this.originalLabel;}
            disabled=this.element[0].disabled;if(disabled!=null){options.disabled=disabled;}
            return options;},_create:function(){var checked=this.element[0].checked;this._bindFormResetHandler();if(this.options.disabled==null){this.options.disabled=this.element[0].disabled;}
            this._setOption("disabled",this.options.disabled);this._addClass("ui-checkboxradio","ui-helper-hidden-accessible");this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget");if(this.type==="radio"){this._addClass(this.label,"ui-checkboxradio-radio-label");}
            if(this.options.label&&this.options.label!==this.originalLabel){this._updateLabel();}else if(this.originalLabel){this.options.label=this.originalLabel;}
            this._enhance();if(checked){this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active");}
            this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus");},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus");}});},_readType:function(){var nodeName=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type;if(nodeName!=="input"||!/radio|checkbox/.test(this.type)){$.error("Can't create checkboxradio on element.nodeName="+nodeName+" and element.type="+this.type);}},_enhance:function(){this._updateIcon(this.element[0].checked);},widget:function(){return this.label;},_getRadioGroup:function(){var group;var name=this.element[0].name;var nameSelector="input[name='"+$.escapeSelector(name)+"']";if(!name){return $([]);}
            if(this.form.length){group=$(this.form[0].elements).filter(nameSelector);}else{group=$(nameSelector).filter(function(){return $(this)._form().length===0;});}
            return group.not(this.element);},_toggleClasses:function(){var checked=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);if(this.options.icon&&this.type==="checkbox"){this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",checked)._toggleClass(this.icon,null,"ui-icon-blank",!checked);}
            if(this.type==="radio"){this._getRadioGroup().each(function(){var instance=$(this).checkboxradio("instance");if(instance){instance._removeClass(instance.label,"ui-checkboxradio-checked","ui-state-active");}});}},_destroy:function(){this._unbindFormResetHandler();if(this.icon){this.icon.remove();this.iconSpace.remove();}},_setOption:function(key,value){if(key==="label"&&!value){return;}
            this._super(key,value);if(key==="disabled"){this._toggleClass(this.label,null,"ui-state-disabled",value);this.element[0].disabled=value;return;}
            this.refresh();},_updateIcon:function(checked){var toAdd="ui-icon ui-icon-background ";if(this.options.icon){if(!this.icon){this.icon=$("<span>");this.iconSpace=$("<span> </span>");this._addClass(this.iconSpace,"ui-checkboxradio-icon-space");}
            if(this.type==="checkbox"){toAdd+=checked?"ui-icon-check ui-state-checked":"ui-icon-blank";this._removeClass(this.icon,null,checked?"ui-icon-blank":"ui-icon-check");}else{toAdd+="ui-icon-blank";}
            this._addClass(this.icon,"ui-checkboxradio-icon",toAdd);if(!checked){this._removeClass(this.icon,null,"ui-icon-check ui-state-checked");}
            this.icon.prependTo(this.label).after(this.iconSpace);}else if(this.icon!==undefined){this.icon.remove();this.iconSpace.remove();delete this.icon;}},_updateLabel:function(){var contents=this.label.contents().not(this.element[0]);if(this.icon){contents=contents.not(this.icon[0]);}
            if(this.iconSpace){contents=contents.not(this.iconSpace[0]);}
            contents.remove();this.label.append(this.options.label);},refresh:function(){var checked=this.element[0].checked,isDisabled=this.element[0].disabled;this._updateIcon(checked);this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",checked);if(this.options.label!==null){this._updateLabel();}
            if(isDisabled!==this.options.disabled){this._setOptions({"disabled":isDisabled});}}}]);var widgetsCheckboxradio=$.ui.checkboxradio;
    /*!
 * jQuery UI Button 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.widget("ui.button",{version:"1.13.2",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:true},_getCreateOptions:function(){var disabled,options=this._super()||{};this.isInput=this.element.is("input");disabled=this.element[0].disabled;if(disabled!=null){options.disabled=disabled;}
            this.originalLabel=this.isInput?this.element.val():this.element.html();if(this.originalLabel){options.label=this.originalLabel;}
            return options;},_create:function(){if(!this.option.showLabel&!this.options.icon){this.options.showLabel=true;}
            if(this.options.disabled==null){this.options.disabled=this.element[0].disabled||false;}
            this.hasTitle=!!this.element.attr("title");if(this.options.label&&this.options.label!==this.originalLabel){if(this.isInput){this.element.val(this.options.label);}else{this.element.html(this.options.label);}}
            this._addClass("ui-button","ui-widget");this._setOption("disabled",this.options.disabled);this._enhance();if(this.element.is("a")){this._on({"keyup":function(event){if(event.keyCode===$.ui.keyCode.SPACE){event.preventDefault();if(this.element[0].click){this.element[0].click();}else{this.element.trigger("click");}}}});}},_enhance:function(){if(!this.element.is("button")){this.element.attr("role","button");}
            if(this.options.icon){this._updateIcon("icon",this.options.icon);this._updateTooltip();}},_updateTooltip:function(){this.title=this.element.attr("title");if(!this.options.showLabel&&!this.title){this.element.attr("title",this.options.label);}},_updateIcon:function(option,value){var icon=option!=="iconPosition",position=icon?this.options.iconPosition:value,displayBlock=position==="top"||position==="bottom";if(!this.icon){this.icon=$("<span>");this._addClass(this.icon,"ui-button-icon","ui-icon");if(!this.options.showLabel){this._addClass("ui-button-icon-only");}}else if(icon){this._removeClass(this.icon,null,this.options.icon);}
            if(icon){this._addClass(this.icon,null,value);}
            this._attachIcon(position);if(displayBlock){this._addClass(this.icon,null,"ui-widget-icon-block");if(this.iconSpace){this.iconSpace.remove();}}else{if(!this.iconSpace){this.iconSpace=$("<span> </span>");this._addClass(this.iconSpace,"ui-button-icon-space");}
                this._removeClass(this.icon,null,"ui-wiget-icon-block");this._attachIconSpace(position);}},_destroy:function(){this.element.removeAttr("role");if(this.icon){this.icon.remove();}
            if(this.iconSpace){this.iconSpace.remove();}
            if(!this.hasTitle){this.element.removeAttr("title");}},_attachIconSpace:function(iconPosition){this.icon[/^(?:end|bottom)/.test(iconPosition)?"before":"after"](this.iconSpace);},_attachIcon:function(iconPosition){this.element[/^(?:end|bottom)/.test(iconPosition)?"append":"prepend"](this.icon);},_setOptions:function(options){var newShowLabel=options.showLabel===undefined?this.options.showLabel:options.showLabel,newIcon=options.icon===undefined?this.options.icon:options.icon;if(!newShowLabel&&!newIcon){options.showLabel=true;}
            this._super(options);},_setOption:function(key,value){if(key==="icon"){if(value){this._updateIcon(key,value);}else if(this.icon){this.icon.remove();if(this.iconSpace){this.iconSpace.remove();}}}
            if(key==="iconPosition"){this._updateIcon(key,value);}
            if(key==="showLabel"){this._toggleClass("ui-button-icon-only",null,!value);this._updateTooltip();}
            if(key==="label"){if(this.isInput){this.element.val(value);}else{this.element.html(value);if(this.icon){this._attachIcon(this.options.iconPosition);this._attachIconSpace(this.options.iconPosition);}}}
            this._super(key,value);if(key==="disabled"){this._toggleClass(null,"ui-state-disabled",value);this.element[0].disabled=value;if(value){this.element.trigger("blur");}}},refresh:function(){var isDisabled=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");if(isDisabled!==this.options.disabled){this._setOptions({disabled:isDisabled});}
            this._updateTooltip();}});if($.uiBackCompat!==false){$.widget("ui.button",$.ui.button,{options:{text:true,icons:{primary:null,secondary:null}},_create:function(){if(this.options.showLabel&&!this.options.text){this.options.showLabel=this.options.text;}
            if(!this.options.showLabel&&this.options.text){this.options.text=this.options.showLabel;}
            if(!this.options.icon&&(this.options.icons.primary||this.options.icons.secondary)){if(this.options.icons.primary){this.options.icon=this.options.icons.primary;}else{this.options.icon=this.options.icons.secondary;this.options.iconPosition="end";}}else if(this.options.icon){this.options.icons.primary=this.options.icon;}
            this._super();},_setOption:function(key,value){if(key==="text"){this._super("showLabel",value);return;}
            if(key==="showLabel"){this.options.text=value;}
            if(key==="icon"){this.options.icons.primary=value;}
            if(key==="icons"){if(value.primary){this._super("icon",value.primary);this._super("iconPosition","beginning");}else if(value.secondary){this._super("icon",value.secondary);this._super("iconPosition","end");}}
            this._superApply(arguments);}});$.fn.button=(function(orig){return function(options){var isMethodCall=typeof options==="string";var args=Array.prototype.slice.call(arguments,1);var returnValue=this;if(isMethodCall){if(!this.length&&options==="instance"){returnValue=undefined;}else{this.each(function(){var methodValue;var type=$(this).attr("type");var name=type!=="checkbox"&&type!=="radio"?"button":"checkboxradio";var instance=$.data(this,"ui-"+name);if(options==="instance"){returnValue=instance;return false;}
        if(!instance){return $.error("cannot call methods on button"+" prior to initialization; "+"attempted to call method '"+options+"'");}
        if(typeof instance[options]!=="function"||options.charAt(0)==="_"){return $.error("no such method '"+options+"' for button"+" widget instance");}
        methodValue=instance[options].apply(instance,args);if(methodValue!==instance&&methodValue!==undefined){returnValue=methodValue&&methodValue.jquery?returnValue.pushStack(methodValue.get()):methodValue;return false;}});}}else{if(args.length){options=$.widget.extend.apply(null,[options].concat(args));}
        this.each(function(){var type=$(this).attr("type");var name=type!=="checkbox"&&type!=="radio"?"button":"checkboxradio";var instance=$.data(this,"ui-"+name);if(instance){instance.option(options||{});if(instance._init){instance._init();}}else{if(name==="button"){orig.call($(this),options);return;}
            $(this).checkboxradio($.extend({icon:false},options));}});}
        return returnValue;};})($.fn.button);$.fn.buttonset=function(){if(!$.ui.controlgroup){$.error("Controlgroup widget missing");}
        if(arguments[0]==="option"&&arguments[1]==="items"&&arguments[2]){return this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]);}
        if(arguments[0]==="option"&&arguments[1]==="items"){return this.controlgroup.apply(this,[arguments[0],"items.button"]);}
        if(typeof arguments[0]==="object"&&arguments[0].items){arguments[0].items={button:arguments[0].items};}
        return this.controlgroup.apply(this,arguments);};}
    var widgetsButton=$.ui.button;
    /*!
 * jQuery UI Datepicker 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.extend($.ui,{datepicker:{version:"1.13.2"}});var datepicker_instActive;function datepicker_getZindex(elem){var position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}
        elem=elem.parent();}
        return 0;}
    function Datepicker(){this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:"",selectMonthLabel:"Select month",selectYearLabel:"Select year"};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,onUpdateDatepicker:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional[""]);this.regional.en=$.extend(true,{},this.regional[""]);this.regional["en-US"]=$.extend(true,{},this.regional.en);this.dpDiv=datepicker_bindHover($("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));}
    $.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv;},setDefaults:function(settings){datepicker_extendRemove(this._defaults,settings||{});return this;},_attachDatepicker:function(target,settings){var nodeName,inline,inst;nodeName=target.nodeName.toLowerCase();inline=(nodeName==="div"||nodeName==="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid;}
            inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{});if(nodeName==="input"){this._connectDatepicker(target,inst);}else if(inline){this._inlineDatepicker(target,inst);}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:datepicker_bindHover($("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return;}
            this._attachments(input,inst);input.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp);this._autoSize(inst);$.data(target,"datepicker",inst);if(inst.settings.disabled){this._disableDatepicker(target);}},_attachments:function(input,inst){var showOn,buttonText,buttonImage,appendText=this._get(inst,"appendText"),isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove();}
            if(appendText){inst.append=$("<span>").addClass(this._appendClass).text(appendText);input[isRTL?"before":"after"](inst.append);}
            input.off("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove();}
            showOn=this._get(inst,"showOn");if(showOn==="focus"||showOn==="both"){input.on("focus",this._showDatepicker);}
            if(showOn==="button"||showOn==="both"){buttonText=this._get(inst,"buttonText");buttonImage=this._get(inst,"buttonImage");if(this._get(inst,"buttonImageOnly")){inst.trigger=$("<img>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText});}else{inst.trigger=$("<button type='button'>").addClass(this._triggerClass);if(buttonImage){inst.trigger.html($("<img>").attr({src:buttonImage,alt:buttonText,title:buttonText}));}else{inst.trigger.text(buttonText);}}
                input[isRTL?"before":"after"](inst.trigger);inst.trigger.on("click",function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[0]){$.datepicker._hideDatepicker();}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0]);}else{$.datepicker._showDatepicker(input[0]);}
                    return false;});}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var findMax,max,maxI,i,date=new Date(2009,12-1,20),dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){findMax=function(names){max=0;maxI=0;for(i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i;}}
            return maxI;};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay());}
            inst.input.attr("size",this._formatDate(inst,date).length);}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return;}
            divSpan.addClass(this.markerClassName).append(inst.dpDiv);$.data(target,"datepicker",inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target);}
            inst.dpDiv.css("display","block");},_dialogDatepicker:function(input,date,onSelect,settings,pos){var id,browserWidth,browserHeight,scrollX,scrollY,inst=this._dialogInst;if(!inst){this.uuid+=1;id="dp"+this.uuid;this._dialogInput=$("<input type='text' id='"+id+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.on("keydown",this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],"datepicker",inst);}
            datepicker_extendRemove(inst.settings,settings||{});date=(date&&date.constructor===Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){browserWidth=document.documentElement.clientWidth;browserHeight=document.documentElement.clientHeight;scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY];}
            this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv);}
            $.data(this._dialogInput[0],"datepicker",inst);return this;},_destroyDatepicker:function(target){var nodeName,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}
            nodeName=target.nodeName.toLowerCase();$.removeData(target,"datepicker");if(nodeName==="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp);}else if(nodeName==="div"||nodeName==="span"){$target.removeClass(this.markerClassName).empty();}
            if(datepicker_instActive===inst){datepicker_instActive=null;this._curInst=null;}},_enableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}
            nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false;}).end().filter("img").css({opacity:"1.0",cursor:""});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false);}
            this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value);});},_disableDatepicker:function(target){var nodeName,inline,$target=$(target),inst=$.data(target,"datepicker");if(!$target.hasClass(this.markerClassName)){return;}
            nodeName=target.nodeName.toLowerCase();if(nodeName==="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true;}).end().filter("img").css({opacity:"0.5",cursor:"default"});}else if(nodeName==="div"||nodeName==="span"){inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true);}
            this._disabledInputs=$.map(this._disabledInputs,function(value){return(value===target?null:value);});this._disabledInputs[this._disabledInputs.length]=target;},_isDisabledDatepicker:function(target){if(!target){return false;}
            for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]===target){return true;}}
            return false;},_getInst:function(target){try{return $.data(target,"datepicker");}catch(err){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(target,name,value){var settings,date,minDate,maxDate,inst=this._getInst(target);if(arguments.length===2&&typeof name==="string"){return(name==="defaults"?$.extend({},$.datepicker._defaults):(inst?(name==="all"?$.extend({},inst.settings):this._get(inst,name)):null));}
            settings=name||{};if(typeof name==="string"){settings={};settings[name]=value;}
            if(inst){if(this._curInst===inst){this._hideDatepicker();}
                date=this._getDateDatepicker(target,true);minDate=this._getMinMaxDate(inst,"min");maxDate=this._getMinMaxDate(inst,"max");datepicker_extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate);}
                if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate);}
                if("disabled"in settings){if(settings.disabled){this._disableDatepicker(target);}else{this._enableDatepicker(target);}}
                this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst);}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value);},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst);}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst);}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault);}
            return(inst?this._getDate(inst):null);},_doKeyDown:function(event){var onSelect,dateStr,sel,inst=$.datepicker._getInst(event.target),handled=true,isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:sel=$("td."+$.datepicker._dayOverClass+":not(."+
            $.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);}
            onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);}else{$.datepicker._hideDatepicker();}
            return false;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target);}
            handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target);}
            handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D");}
            handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");}
            break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D");}
            handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D");}
            handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");}
            break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D");}
            handled=event.ctrlKey||event.metaKey;break;default:handled=false;}}else if(event.keyCode===36&&event.ctrlKey){$.datepicker._showDatepicker(this);}else{handled=false;}
            if(handled){event.preventDefault();event.stopPropagation();}},_doKeyPress:function(event){var chars,chr,inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));chr=String.fromCharCode(event.charCode==null?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1);}},_doKeyUp:function(event){var date,inst=$.datepicker._getInst(event.target);if(inst.input.val()!==inst.lastVal){try{date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst);}}catch(err){}}
            return true;},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!=="input"){input=$("input",input.parentNode)[0];}
            if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){return;}
            var inst,beforeShow,beforeShowSettings,isFixed,offset,showAnim,duration;inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!==inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);}}
            beforeShow=$.datepicker._get(inst,"beforeShow");beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return;}
            datepicker_extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value="";}
            if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight;}
            isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")==="fixed";return!isFixed;});offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){showAnim=$.datepicker._get(inst,"showAnim");duration=$.datepicker._get(inst,"duration");inst.dpDiv.css("z-index",datepicker_getZindex($(input))+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects.effect[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration);}else{inst.dpDiv[showAnim||"show"](showAnim?duration:null);}
                if($.datepicker._shouldFocusInput(inst)){inst.input.trigger("focus");}
                $.datepicker._curInst=inst;}},_updateDatepicker:function(inst){this.maxRows=4;datepicker_instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var origyearshtml,numMonths=this._getNumberOfMonths(inst),cols=numMonths[1],width=17,activeCell=inst.dpDiv.find("."+this._dayOverClass+" a"),onUpdateDatepicker=$.datepicker._get(inst,"onUpdateDatepicker");if(activeCell.length>0){datepicker_handleMouseover.apply(activeCell.get(0));}
            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em");}
            inst.dpDiv[(numMonths[0]!==1||numMonths[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)){inst.input.trigger("focus");}
            if(inst.yearshtml){origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year").first().replaceWith(inst.yearshtml);}
                origyearshtml=inst.yearshtml=null;},0);}
            if(onUpdateDatepicker){onUpdateDatepicker.apply((inst.input?inst.input[0]:null),[inst]);}},_shouldFocusInput:function(inst){return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus");},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth(),dpHeight=inst.dpDiv.outerHeight(),inputWidth=inst.input?inst.input.outerWidth():0,inputHeight=inst.input?inst.input.outerHeight():0,viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft()),viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left===inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top===(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset;},_findPos:function(obj){var position,inst=this._getInst(obj),isRTL=this._get(inst,"isRTL");while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.pseudos.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"];}
            position=$(obj).offset();return[position.left,position.top];},_hideDatepicker:function(input){var showAnim,duration,postProcess,onClose,inst=this._curInst;if(!inst||(input&&inst!==$.data(input,"datepicker"))){return;}
            if(this._datepickerShowing){showAnim=this._get(inst,"showAnim");duration=this._get(inst,"duration");postProcess=function(){$.datepicker._tidyDialog(inst);};if($.effects&&($.effects.effect[showAnim]||$.effects[showAnim])){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess);}else{inst.dpDiv[(showAnim==="slideDown"?"slideUp":(showAnim==="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess);}
                if(!showAnim){postProcess();}
                this._datepickerShowing=false;onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst]);}
                this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv);}}
                this._inDialog=false;}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");},_checkExternalClick:function(event){if(!$.datepicker._curInst){return;}
            var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!==$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length===0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst)){$.datepicker._hideDatepicker();}},_adjustDate:function(id,offset,period){var target=$(id),inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return;}
            this._adjustInstDate(inst,offset,period);this._updateDatepicker(inst);},_gotoToday:function(id){var date,target=$(id),inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear;}else{date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();}
            this._notifyChange(inst);this._adjustDate(target);},_selectMonthYear:function(id,select,period){var target=$(id),inst=this._getInst(target[0]);inst["selected"+(period==="M"?"Month":"Year")]=inst["draw"+(period==="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target);},_selectDay:function(id,month,year,td){var inst,target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return;}
            inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=parseInt($("a",td).attr("data-date"));inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));},_clearDate:function(id){var target=$(id);this._selectDate(target,"");},_selectDate:function(id,dateStr){var onSelect,target=$(id),inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr);}
            this._updateAlternate(inst);onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);}else if(inst.input){inst.input.trigger("change");}
            if(inst.inline){this._updateDatepicker(inst);}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof(inst.input[0])!=="object"){inst.input.trigger("focus");}
                this._lastInput=null;}},_updateAlternate:function(inst){var altFormat,date,dateStr,altField=this._get(inst,"altField");if(altField){altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");date=this._getDate(inst);dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(document).find(altField).val(dateStr);}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""];},iso8601Week:function(date){var time,checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments";}
            value=(typeof value==="object"?value.toString():value+"");if(value===""){return null;}
            var iFormat,dim,extra,iValue=0,shortYearCutoffTemp=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,shortYearCutoff=(typeof shortYearCutoffTemp!=="string"?shortYearCutoffTemp:new Date().getFullYear()%100+parseInt(shortYearCutoffTemp,10)),dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,year=-1,month=-1,day=-1,doy=-1,literal=false,date,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++;}
                return matches;},getNumber=function(match){var isDoubled=lookAhead(match),size=(match==="@"?14:(match==="!"?20:(match==="y"&&isDoubled?4:(match==="o"?3:2)))),minSize=(match==="y"?size:1),digits=new RegExp("^\\d{"+minSize+","+size+"}"),num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue;}
                iValue+=num[0].length;return parseInt(num[0],10);},getName=function(match,shortNames,longNames){var index=-1,names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]];}).sort(function(a,b){return-(a[1].length-b[1].length);});$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()===name.toLowerCase()){index=pair[0];iValue+=name.length;return false;}});if(index!==-1){return index+1;}else{throw"Unknown name at position "+iValue;}},checkLiteral=function(){if(value.charAt(iValue)!==format.charAt(iFormat)){throw"Unexpected literal at position "+iValue;}
                iValue++;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{checkLiteral();}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral();}else{literal=true;}
                break;default:checkLiteral();}}}
            if(iValue<value.length){extra=value.substr(iValue);if(!/^\s+/.test(extra)){throw"Extra/unparsed characters found in date: "+extra;}}
            if(year===-1){year=new Date().getFullYear();}else if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+
                (year<=shortYearCutoff?0:-100);}
            if(doy>-1){month=1;day=doy;do{dim=this._getDaysInMonth(year,month-1);if(day<=dim){break;}
                month++;day-=dim;}while(true);}
            date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!==year||date.getMonth()+1!==month||date.getDate()!==day){throw"Invalid date";}
            return date;},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+
            Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return"";}
            var iFormat,dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort,dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames,monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort,monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++;}
                return matches;},formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num;}}
                return num;},formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value]);},output="",literal=false;if(date){for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{output+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getFullYear()%100<10?"0":"")+date.getFullYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'";}else{literal=true;}
                break;default:output+=format.charAt(iFormat);}}}}
            return output;},_possibleChars:function(format){var iFormat,chars="",literal=false,lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)===match);if(matches){iFormat++;}
            return matches;};for(iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)==="'"&&!lookAhead("'")){literal=false;}else{chars+=format.charAt(iFormat);}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'";}else{literal=true;}
            break;default:chars+=format.charAt(iFormat);}}}
            return chars;},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];},_setDateFromField:function(inst,noDefault){if(inst.input.val()===inst.lastVal){return;}
            var dateFormat=this._get(inst,"dateFormat"),dates=inst.lastVal=inst.input?inst.input.val():null,defaultDate=this._getDefaultDate(inst),date=defaultDate,settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate;}catch(event){dates=(noDefault?"":dates);}
            inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst);},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()));},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date;},offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst));}catch(e){}
            var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date(),year=date.getFullYear(),month=date.getMonth(),day=date.getDate(),pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;}
                matches=pattern.exec(offset);}
            return new Date(year,month,day);},newDate=(date==null||date===""?defaultDate:(typeof date==="string"?offsetString(date):(typeof date==="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()==="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0);}
            return this._daylightSavingAdjust(newDate);},_daylightSavingAdjust:function(date){if(!date){return null;}
            date.setHours(date.getHours()>12?date.getHours()+2:0);return date;},_setDate:function(inst,date,noChange){var clear=!date,origMonth=inst.selectedMonth,origYear=inst.selectedYear,newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){this._notifyChange(inst);}
            this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst));}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()==="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate;},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths"),id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){$.datepicker._adjustDate(id,-stepMonths,"M");},next:function(){$.datepicker._adjustDate(id,+stepMonths,"M");},hide:function(){$.datepicker._hideDatepicker();},today:function(){$.datepicker._gotoToday(id);},selectDay:function(){$.datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false;},selectMonth:function(){$.datepicker._selectMonthYear(id,this,"M");return false;},selectYear:function(){$.datepicker._selectMonthYear(id,this,"Y");return false;}};$(this).on(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")]);});},_generateHTML:function(inst){var maxDraw,prevText,prev,nextText,next,currentText,gotoDate,controls,buttonPanel,firstDay,showWeek,dayNames,dayNamesMin,monthNames,monthNamesShort,beforeShowDay,showOtherMonths,selectOtherMonths,defaultDate,html,dow,row,group,col,selectedDate,cornerClass,calender,thead,day,daysInMonth,leadDays,curRows,numRows,printDate,dRow,tbody,daySettings,otherMonth,unselectable,tempDate=new Date(),today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(),tempDate.getMonth(),tempDate.getDate())),isRTL=this._get(inst,"isRTL"),showButtonPanel=this._get(inst,"showButtonPanel"),hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext"),navigationAsDateFormat=this._get(inst,"navigationAsDateFormat"),numMonths=this._getNumberOfMonths(inst),showCurrentAtPos=this._get(inst,"showCurrentAtPos"),stepMonths=this._get(inst,"stepMonths"),isMultiMonth=(numMonths[0]!==1||numMonths[1]!==1),currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay))),minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),drawMonth=inst.drawMonth-showCurrentAtPos,drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--;}
            if(maxDate){maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--;}}}
            inst.drawMonth=drawMonth;inst.drawYear=drawYear;prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));if(this._canAdjustMonth(inst,-1,drawYear,drawMonth)){prev=$("<a>").attr({"class":"ui-datepicker-prev ui-corner-all","data-handler":"prev","data-event":"click",title:prevText}).append($("<span>").addClass("ui-icon ui-icon-circle-triangle-"+
                (isRTL?"e":"w")).text(prevText))[0].outerHTML;}else if(hideIfNoPrevNext){prev="";}else{prev=$("<a>").attr({"class":"ui-datepicker-prev ui-corner-all ui-state-disabled",title:prevText}).append($("<span>").addClass("ui-icon ui-icon-circle-triangle-"+
                (isRTL?"e":"w")).text(prevText))[0].outerHTML;}
            nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));if(this._canAdjustMonth(inst,+1,drawYear,drawMonth)){next=$("<a>").attr({"class":"ui-datepicker-next ui-corner-all","data-handler":"next","data-event":"click",title:nextText}).append($("<span>").addClass("ui-icon ui-icon-circle-triangle-"+
                (isRTL?"w":"e")).text(nextText))[0].outerHTML;}else if(hideIfNoPrevNext){next="";}else{next=$("<a>").attr({"class":"ui-datepicker-next ui-corner-all ui-state-disabled",title:nextText}).append($("<span>").attr("class","ui-icon ui-icon-circle-triangle-"+
                (isRTL?"w":"e")).text(nextText))[0].outerHTML;}
            currentText=this._get(inst,"currentText");gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));controls="";if(!inst.inline){controls=$("<button>").attr({type:"button","class":"ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all","data-handler":"hide","data-event":"click"}).text(this._get(inst,"closeText"))[0].outerHTML;}
            buttonPanel="";if(showButtonPanel){buttonPanel=$("<div class='ui-datepicker-buttonpane ui-widget-content'>").append(isRTL?controls:"").append(this._isInRange(inst,gotoDate)?$("<button>").attr({type:"button","class":"ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all","data-handler":"today","data-event":"click"}).text(currentText):"").append(isRTL?"":controls)[0].outerHTML;}
            firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);showWeek=this._get(inst,"showWeek");dayNames=this._get(inst,"dayNames");dayNamesMin=this._get(inst,"dayNamesMin");monthNames=this._get(inst,"monthNames");monthNamesShort=this._get(inst,"monthNamesShort");beforeShowDay=this._get(inst,"beforeShowDay");showOtherMonths=this._get(inst,"showOtherMonths");selectOtherMonths=this._get(inst,"selectOtherMonths");defaultDate=this._getDefaultDate(inst);html="";for(row=0;row<numMonths[0];row++){group="";this.maxRows=4;for(col=0;col<numMonths[1];col++){selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));cornerClass=" ui-corner-all";calender="";if(isMultiMonth){calender+="<div class='ui-datepicker-group";if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break;}}
                calender+="'>";}
                calender+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+cornerClass+"'>"+
                    (/all|left/.test(cornerClass)&&row===0?(isRTL?next:prev):"")+
                    (/all|right/.test(cornerClass)&&row===0?(isRTL?prev:next):"")+
                    this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>";thead=(showWeek?"<th class='ui-datepicker-week-col'>"+this._get(inst,"weekHeader")+"</th>":"");for(dow=0;dow<7;dow++){day=(dow+firstDay)%7;thead+="<th scope='col'"+((dow+firstDay+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+dayNames[day]+"'>"+dayNamesMin[day]+"</span></th>";}
                calender+=thead+"</tr></thead><tbody>";daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);}
                leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;curRows=Math.ceil((leadDays+daysInMonth)/7);numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(dRow=0;dRow<numRows;dRow++){calender+="<tr>";tbody=(!showWeek?"":"<td class='ui-datepicker-week-col'>"+
                    this._get(inst,"calculateWeek")(printDate)+"</td>");for(dow=0;dow<7;dow++){daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);otherMonth=(printDate.getMonth()!==drawMonth);unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+="<td class='"+
                    ((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+
                    (otherMonth?" ui-datepicker-other-month":"")+
                    ((printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime())?" "+this._dayOverClass:"")+
                    (unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+
                    (otherMonth&&!showOtherMonths?"":" "+daySettings[1]+
                        (printDate.getTime()===currentDate.getTime()?" "+this._currentClass:"")+
                        (printDate.getTime()===today.getTime()?" ui-datepicker-today":""))+"'"+
                    ((!otherMonth||showOtherMonths)&&daySettings[2]?" title='"+daySettings[2].replace(/'/g,"&#39;")+"'":"")+
                    (unselectable?"":" data-handler='selectDay' data-event='click' data-month='"+printDate.getMonth()+"' data-year='"+printDate.getFullYear()+"'")+">"+
                    (otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?"<span class='ui-state-default'>"+printDate.getDate()+"</span>":"<a class='ui-state-default"+
                        (printDate.getTime()===today.getTime()?" ui-state-highlight":"")+
                        (printDate.getTime()===currentDate.getTime()?" ui-state-active":"")+
                        (otherMonth?" ui-priority-secondary":"")+"' href='#' aria-current='"+(printDate.getTime()===currentDate.getTime()?"true":"false")+"' data-date='"+printDate.getDate()+"'>"+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate);}
                    calender+=tbody+"</tr>";}
                drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++;}
                calender+="</tbody></table>"+(isMultiMonth?"</div>"+
                    ((numMonths[0]>0&&col===numMonths[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");group+=calender;}
                html+=group;}
            html+=buttonPanel;inst._keyEvent=false;return html;},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var inMinYear,inMaxYear,month,years,thisYear,determineYear,year,endYear,changeMonth=this._get(inst,"changeMonth"),changeYear=this._get(inst,"changeYear"),showMonthAfterYear=this._get(inst,"showMonthAfterYear"),selectMonthLabel=this._get(inst,"selectMonthLabel"),selectYearLabel=this._get(inst,"selectYearLabel"),html="<div class='ui-datepicker-title'>",monthHtml="";if(secondary||!changeMonth){monthHtml+="<span class='ui-datepicker-month'>"+monthNames[drawMonth]+"</span>";}else{inMinYear=(minDate&&minDate.getFullYear()===drawYear);inMaxYear=(maxDate&&maxDate.getFullYear()===drawYear);monthHtml+="<select class='ui-datepicker-month' aria-label='"+selectMonthLabel+"' data-handler='selectMonth' data-event='change'>";for(month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+="<option value='"+month+"'"+
            (month===drawMonth?" selected='selected'":"")+">"+monthNamesShort[month]+"</option>";}}
            monthHtml+="</select>";}
            if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"");}
            if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+="<span class='ui-datepicker-year'>"+drawYear+"</span>";}else{years=this._get(inst,"yearRange").split(":");thisYear=new Date().getFullYear();determineYear=function(value){var year=(value.match(/c[+\-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+\-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year);};year=determineYear(years[0]);endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+="<select class='ui-datepicker-year' aria-label='"+selectYearLabel+"' data-handler='selectYear' data-event='change'>";for(;year<=endYear;year++){inst.yearshtml+="<option value='"+year+"'"+
                (year===drawYear?" selected='selected'":"")+">"+year+"</option>";}
                inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null;}}
            html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml;}
            html+="</div>";return html;},_adjustInstDate:function(inst,offset,period){var year=inst.selectedYear+(period==="Y"?offset:0),month=inst.selectedMonth+(period==="M"?offset:0),day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period==="D"?offset:0),date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period==="M"||period==="Y"){this._notifyChange(inst);}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),newDate=(minDate&&date<minDate?minDate:date);return(maxDate&&newDate>maxDate?maxDate:newDate);},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst]);}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths==="number"?[1,numMonths]:numMonths));},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null);},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay();},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst),date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));}
            return this._isInRange(inst,date);},_isInRange:function(inst,date){var yearSplit,currentYear,minDate=this._getMinMaxDate(inst,"min"),maxDate=this._getMinMaxDate(inst,"max"),minYear=null,maxYear=null,years=this._get(inst,"yearRange");if(years){yearSplit=years.split(":");currentYear=new Date().getFullYear();minYear=parseInt(yearSplit[0],10);maxYear=parseInt(yearSplit[1],10);if(yearSplit[0].match(/[+\-].*/)){minYear+=currentYear;}
            if(yearSplit[1].match(/[+\-].*/)){maxYear+=currentYear;}}
            return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime())&&(!minYear||date.getFullYear()>=minYear)&&(!maxYear||date.getFullYear()<=maxYear));},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!=="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")};},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear;}
            var date=(day?(typeof day==="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst));}});function datepicker_bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.on("mouseout",selector,function(){$(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).removeClass("ui-datepicker-prev-hover");}
        if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).removeClass("ui-datepicker-next-hover");}}).on("mouseover",selector,datepicker_handleMouseover);}
    function datepicker_handleMouseover(){if(!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline?datepicker_instActive.dpDiv.parent()[0]:datepicker_instActive.input[0])){$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");$(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){$(this).addClass("ui-datepicker-prev-hover");}
        if(this.className.indexOf("ui-datepicker-next")!==-1){$(this).addClass("ui-datepicker-next-hover");}}}
    function datepicker_extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null){target[name]=props[name];}}
        return target;}
    $.fn.datepicker=function(options){if(!this.length){return this;}
        if(!$.datepicker.initialized){$(document).on("mousedown",$.datepicker._checkExternalClick);$.datepicker.initialized=true;}
        if($("#"+$.datepicker._mainDivId).length===0){$("body").append($.datepicker.dpDiv);}
        var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}
        if(options==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs));}
        return this.each(function(){if(typeof options==="string"){$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs));}else{$.datepicker._attachDatepicker(this,options);}});};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.13.2";var widgetsDatepicker=$.datepicker;var ie=$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    /*!
 * jQuery UI Mouse 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var mouseHandled=false;$(document).on("mouseup",function(){mouseHandled=false;});var widgetsMouse=$.widget("ui.mouse",{version:"1.13.2",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var that=this;this.element.on("mousedown."+this.widgetName,function(event){return that._mouseDown(event);}).on("click."+this.widgetName,function(event){if(true===$.data(event.target,that.widgetName+".preventClickEvent")){$.removeData(event.target,that.widgetName+".preventClickEvent");event.stopImmediatePropagation();return false;}});this.started=false;},_mouseDestroy:function(){this.element.off("."+this.widgetName);if(this._mouseMoveDelegate){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);}},_mouseDown:function(event){if(mouseHandled){return;}
            this._mouseMoved=false;if(this._mouseStarted){this._mouseUp(event);}
            this._mouseDownEvent=event;var that=this,btnIsLeft=(event.which===1),elIsCancel=(typeof this.options.cancel==="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false);if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){return true;}
            this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){that.mouseDelayMet=true;},this.options.delay);}
            if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(event)!==false);if(!this._mouseStarted){event.preventDefault();return true;}}
            if(true===$.data(event.target,this.widgetName+".preventClickEvent")){$.removeData(event.target,this.widgetName+".preventClickEvent");}
            this._mouseMoveDelegate=function(event){return that._mouseMove(event);};this._mouseUpDelegate=function(event){return that._mouseUp(event);};this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate);event.preventDefault();mouseHandled=true;return true;},_mouseMove:function(event){if(this._mouseMoved){if($.ui.ie&&(!document.documentMode||document.documentMode<9)&&!event.button){return this._mouseUp(event);}else if(!event.which){if(event.originalEvent.altKey||event.originalEvent.ctrlKey||event.originalEvent.metaKey||event.originalEvent.shiftKey){this.ignoreMissingWhich=true;}else if(!this.ignoreMissingWhich){return this._mouseUp(event);}}}
            if(event.which||event.button){this._mouseMoved=true;}
            if(this._mouseStarted){this._mouseDrag(event);return event.preventDefault();}
            if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,event)!==false);if(this._mouseStarted){this._mouseDrag(event);}else{this._mouseUp(event);}}
            return!this._mouseStarted;},_mouseUp:function(event){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(event.target===this._mouseDownEvent.target){$.data(event.target,this.widgetName+".preventClickEvent",true);}
            this._mouseStop(event);}
            if(this._mouseDelayTimer){clearTimeout(this._mouseDelayTimer);delete this._mouseDelayTimer;}
            this.ignoreMissingWhich=false;mouseHandled=false;event.preventDefault();},_mouseDistanceMet:function(event){return(Math.max(Math.abs(this._mouseDownEvent.pageX-event.pageX),Math.abs(this._mouseDownEvent.pageY-event.pageY))>=this.options.distance);},_mouseDelayMet:function(){return this.mouseDelayMet;},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true;}});var plugin=$.ui.plugin={add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args,allowDisconnected){var i,set=instance.plugins[name];if(!set){return;}
            if(!allowDisconnected&&(!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11)){return;}
            for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}};var safeBlur=$.ui.safeBlur=function(element){if(element&&element.nodeName.toLowerCase()!=="body"){$(element).trigger("blur");}};
    /*!
 * jQuery UI Draggable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.widget("ui.draggable",$.ui.mouse,{version:"1.13.2",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative();}
            if(this.options.addClasses){this._addClass("ui-draggable");}
            this._setHandleClassName();this._mouseInit();},_setOption:function(key,value){this._super(key,value);if(key==="handle"){this._removeHandleClassName();this._setHandleClassName();}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true;return;}
            this._removeHandleClassName();this._mouseDestroy();},_mouseCapture:function(event){var o=this.options;if(this.helper||o.disabled||$(event.target).closest(".ui-resizable-handle").length>0){return false;}
            this.handle=this._getHandle(event);if(!this.handle){return false;}
            this._blurActiveElement(event);this._blockFrames(o.iframeFix===true?"iframe":o.iframeFix);return true;},_blockFrames:function(selector){this.iframeBlocks=this.document.find(selector).map(function(){var iframe=$(this);return $("<div>").css("position","absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];});},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks;}},_blurActiveElement:function(event){var activeElement=$.ui.safeActiveElement(this.document[0]),target=$(event.target);if(target.closest(activeElement).length){return;}
            $.ui.safeBlur(activeElement);},_mouseStart:function(event){var o=this.options;this.helper=this._createHelper(event);this._addClass(this.helper,"ui-draggable-dragging");this._cacheHelperProportions();if($.ui.ddmanager){$.ui.ddmanager.current=this;}
            this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent(true);this.offsetParent=this.helper.offsetParent();this.hasFixedAncestor=this.helper.parents().filter(function(){return $(this).css("position")==="fixed";}).length>0;this.positionAbs=this.element.offset();this._refreshOffsets(event);this.originalPosition=this.position=this._generatePosition(event,false);this.originalPageX=event.pageX;this.originalPageY=event.pageY;if(o.cursorAt){this._adjustOffsetFromHelper(o.cursorAt);}
            this._setContainment();if(this._trigger("start",event)===false){this._clear();return false;}
            this._cacheHelperProportions();if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}
            this._mouseDrag(event,true);if($.ui.ddmanager){$.ui.ddmanager.dragStart(this,event);}
            return true;},_refreshOffsets:function(event){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:false,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:event.pageX-this.offset.left,top:event.pageY-this.offset.top};},_mouseDrag:function(event,noPropagation){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset();}
            this.position=this._generatePosition(event,true);this.positionAbs=this._convertPositionTo("absolute");if(!noPropagation){var ui=this._uiHash();if(this._trigger("drag",event,ui)===false){this._mouseUp(new $.Event("mouseup",event));return false;}
                this.position=ui.position;}
            this.helper[0].style.left=this.position.left+"px";this.helper[0].style.top=this.position.top+"px";if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}
            return false;},_mouseStop:function(event){var that=this,dropped=false;if($.ui.ddmanager&&!this.options.dropBehaviour){dropped=$.ui.ddmanager.drop(this,event);}
            if(this.dropped){dropped=this.dropped;this.dropped=false;}
            if((this.options.revert==="invalid"&&!dropped)||(this.options.revert==="valid"&&dropped)||this.options.revert===true||(typeof this.options.revert==="function"&&this.options.revert.call(this.element,dropped))){$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(that._trigger("stop",event)!==false){that._clear();}});}else{if(this._trigger("stop",event)!==false){this._clear();}}
            return false;},_mouseUp:function(event){this._unblockFrames();if($.ui.ddmanager){$.ui.ddmanager.dragStop(this,event);}
            if(this.handleElement.is(event.target)){this.element.trigger("focus");}
            return $.ui.mouse.prototype._mouseUp.call(this,event);},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp(new $.Event("mouseup",{target:this.element[0]}));}else{this._clear();}
            return this;},_getHandle:function(event){return this.options.handle?!!$(event.target).closest(this.element.find(this.options.handle)).length:true;},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;this._addClass(this.handleElement,"ui-draggable-handle");},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle");},_createHelper:function(event){var o=this.options,helperIsFunction=typeof o.helper==="function",helper=helperIsFunction?$(o.helper.apply(this.element[0],[event])):(o.helper==="clone"?this.element.clone().removeAttr("id"):this.element);if(!helper.parents("body").length){helper.appendTo((o.appendTo==="parent"?this.element[0].parentNode:o.appendTo));}
            if(helperIsFunction&&helper[0]===this.element[0]){this._setPositionRelative();}
            if(helper[0]!==this.element[0]&&!(/(fixed|absolute)/).test(helper.css("position"))){helper.css("position","absolute");}
            return helper;},_setPositionRelative:function(){if(!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative";}},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ");}
            if(Array.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
            if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}
            if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
            if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}
            if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_isRootNode:function(element){return(/(html|body)/i).test(element.tagName)||element===this.document[0];},_getParentOffset:function(){var po=this.offsetParent.offset(),document=this.document[0];if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
            if(this._isRootNode(this.offsetParent[0])){po={top:0,left:0};}
            return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0};}
            var p=this.element.position(),scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+
                    (!scrollIsRootNode?this.scrollParent.scrollTop():0),left:p.left-(parseInt(this.helper.css("left"),10)||0)+
                    (!scrollIsRootNode?this.scrollParent.scrollLeft():0)};},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var isUserScrollable,c,ce,o=this.options,document=this.document[0];this.relativeContainer=null;if(!o.containment){this.containment=null;return;}
            if(o.containment==="window"){this.containment=[$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,$(window).scrollLeft()+$(window).width()-
            this.helperProportions.width-this.margins.left,$(window).scrollTop()+
            ($(window).height()||document.body.parentNode.scrollHeight)-
            this.helperProportions.height-this.margins.top];return;}
            if(o.containment==="document"){this.containment=[0,0,$(document).width()-this.helperProportions.width-this.margins.left,($(document).height()||document.body.parentNode.scrollHeight)-
            this.helperProportions.height-this.margins.top];return;}
            if(o.containment.constructor===Array){this.containment=o.containment;return;}
            if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}
            c=$(o.containment);ce=c[0];if(!ce){return;}
            isUserScrollable=/(scroll|auto)/.test(c.css("overflow"));this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+
            (parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+
            (parseInt(c.css("paddingTop"),10)||0),(isUserScrollable?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-
            (parseInt(c.css("borderRightWidth"),10)||0)-
            (parseInt(c.css("paddingRight"),10)||0)-
            this.helperProportions.width-
            this.margins.left-
            this.margins.right,(isUserScrollable?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-
            (parseInt(c.css("borderBottomWidth"),10)||0)-
            (parseInt(c.css("paddingBottom"),10)||0)-
            this.helperProportions.height-
            this.margins.top-
            this.margins.bottom];this.relativeContainer=c;},_convertPositionTo:function(d,pos){if(!pos){pos=this.position;}
            var mod=d==="absolute"?1:-1,scrollIsRootNode=this._isRootNode(this.scrollParent[0]);return{top:(pos.top+
                    this.offset.relative.top*mod+
                    this.offset.parent.top*mod-
                    ((this.cssPosition==="fixed"?-this.offset.scroll.top:(scrollIsRootNode?0:this.offset.scroll.top))*mod)),left:(pos.left+
                    this.offset.relative.left*mod+
                    this.offset.parent.left*mod-
                    ((this.cssPosition==="fixed"?-this.offset.scroll.left:(scrollIsRootNode?0:this.offset.scroll.left))*mod))};},_generatePosition:function(event,constrainPosition){var containment,co,top,left,o=this.options,scrollIsRootNode=this._isRootNode(this.scrollParent[0]),pageX=event.pageX,pageY=event.pageY;if(!scrollIsRootNode||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()};}
            if(constrainPosition){if(this.containment){if(this.relativeContainer){co=this.relativeContainer.offset();containment=[this.containment[0]+co.left,this.containment[1]+co.top,this.containment[2]+co.left,this.containment[3]+co.top];}else{containment=this.containment;}
                if(event.pageX-this.offset.click.left<containment[0]){pageX=containment[0]+this.offset.click.left;}
                if(event.pageY-this.offset.click.top<containment[1]){pageY=containment[1]+this.offset.click.top;}
                if(event.pageX-this.offset.click.left>containment[2]){pageX=containment[2]+this.offset.click.left;}
                if(event.pageY-this.offset.click.top>containment[3]){pageY=containment[3]+this.offset.click.top;}}
                if(o.grid){top=o.grid[1]?this.originalPageY+Math.round((pageY-
                    this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;pageY=containment?((top-this.offset.click.top>=containment[1]||top-this.offset.click.top>containment[3])?top:((top-this.offset.click.top>=containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=o.grid[0]?this.originalPageX+
                    Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;pageX=containment?((left-this.offset.click.left>=containment[0]||left-this.offset.click.left>containment[2])?left:((left-this.offset.click.left>=containment[0])?left-o.grid[0]:left+o.grid[0])):left;}
                if(o.axis==="y"){pageX=this.originalPageX;}
                if(o.axis==="x"){pageY=this.originalPageY;}}
            return{top:(pageY-
                    this.offset.click.top-
                    this.offset.relative.top-
                    this.offset.parent.top+
                    (this.cssPosition==="fixed"?-this.offset.scroll.top:(scrollIsRootNode?0:this.offset.scroll.top))),left:(pageX-
                    this.offset.click.left-
                    this.offset.relative.left-
                    this.offset.parent.left+
                    (this.cssPosition==="fixed"?-this.offset.scroll.left:(scrollIsRootNode?0:this.offset.scroll.left)))};},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove();}
            this.helper=null;this.cancelHelperRemoval=false;if(this.destroyOnClear){this.destroy();}},_trigger:function(type,event,ui){ui=ui||this._uiHash();$.ui.plugin.call(this,type,[event,ui,this],true);if(/^(drag|start|stop)/.test(type)){this.positionAbs=this._convertPositionTo("absolute");ui.offset=this.positionAbs;}
            return $.Widget.prototype._trigger.call(this,type,event,ui);},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs};}});$.ui.plugin.add("draggable","connectToSortable",{start:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.sortables=[];$(draggable.options.connectToSortable).each(function(){var sortable=$(this).sortable("instance");if(sortable&&!sortable.options.disabled){draggable.sortables.push(sortable);sortable.refreshPositions();sortable._trigger("activate",event,uiSortable);}});},stop:function(event,ui,draggable){var uiSortable=$.extend({},ui,{item:draggable.element});draggable.cancelHelperRemoval=false;$.each(draggable.sortables,function(){var sortable=this;if(sortable.isOver){sortable.isOver=0;draggable.cancelHelperRemoval=true;sortable.cancelHelperRemoval=false;sortable._storedCSS={position:sortable.placeholder.css("position"),top:sortable.placeholder.css("top"),left:sortable.placeholder.css("left")};sortable._mouseStop(event);sortable.options.helper=sortable.options._helper;}else{sortable.cancelHelperRemoval=true;sortable._trigger("deactivate",event,uiSortable);}});},drag:function(event,ui,draggable){$.each(draggable.sortables,function(){var innermostIntersecting=false,sortable=this;sortable.positionAbs=draggable.positionAbs;sortable.helperProportions=draggable.helperProportions;sortable.offset.click=draggable.offset.click;if(sortable._intersectsWith(sortable.containerCache)){innermostIntersecting=true;$.each(draggable.sortables,function(){this.positionAbs=draggable.positionAbs;this.helperProportions=draggable.helperProportions;this.offset.click=draggable.offset.click;if(this!==sortable&&this._intersectsWith(this.containerCache)&&$.contains(sortable.element[0],this.element[0])){innermostIntersecting=false;}
            return innermostIntersecting;});}
            if(innermostIntersecting){if(!sortable.isOver){sortable.isOver=1;draggable._parent=ui.helper.parent();sortable.currentItem=ui.helper.appendTo(sortable.element).data("ui-sortable-item",true);sortable.options._helper=sortable.options.helper;sortable.options.helper=function(){return ui.helper[0];};event.target=sortable.currentItem[0];sortable._mouseCapture(event,true);sortable._mouseStart(event,true,true);sortable.offset.click.top=draggable.offset.click.top;sortable.offset.click.left=draggable.offset.click.left;sortable.offset.parent.left-=draggable.offset.parent.left-
                sortable.offset.parent.left;sortable.offset.parent.top-=draggable.offset.parent.top-
                sortable.offset.parent.top;draggable._trigger("toSortable",event);draggable.dropped=sortable.element;$.each(draggable.sortables,function(){this.refreshPositions();});draggable.currentItem=draggable.element;sortable.fromOutside=draggable;}
                if(sortable.currentItem){sortable._mouseDrag(event);ui.position=sortable.position;}}else{if(sortable.isOver){sortable.isOver=0;sortable.cancelHelperRemoval=true;sortable.options._revert=sortable.options.revert;sortable.options.revert=false;sortable._trigger("out",event,sortable._uiHash(sortable));sortable._mouseStop(event,true);sortable.options.revert=sortable.options._revert;sortable.options.helper=sortable.options._helper;if(sortable.placeholder){sortable.placeholder.remove();}
                ui.helper.appendTo(draggable._parent);draggable._refreshOffsets(event);ui.position=draggable._generatePosition(event,true);draggable._trigger("fromSortable",event);draggable.dropped=false;$.each(draggable.sortables,function(){this.refreshPositions();});}}});}});$.ui.plugin.add("draggable","cursor",{start:function(event,ui,instance){var t=$("body"),o=instance.options;if(t.css("cursor")){o._cursor=t.css("cursor");}
            t.css("cursor",o.cursor);},stop:function(event,ui,instance){var o=instance.options;if(o._cursor){$("body").css("cursor",o._cursor);}}});$.ui.plugin.add("draggable","opacity",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("opacity")){o._opacity=t.css("opacity");}
            t.css("opacity",o.opacity);},stop:function(event,ui,instance){var o=instance.options;if(o._opacity){$(ui.helper).css("opacity",o._opacity);}}});$.ui.plugin.add("draggable","scroll",{start:function(event,ui,i){if(!i.scrollParentNotHidden){i.scrollParentNotHidden=i.helper.scrollParent(false);}
            if(i.scrollParentNotHidden[0]!==i.document[0]&&i.scrollParentNotHidden[0].tagName!=="HTML"){i.overflowOffset=i.scrollParentNotHidden.offset();}},drag:function(event,ui,i){var o=i.options,scrolled=false,scrollParent=i.scrollParentNotHidden[0],document=i.document[0];if(scrollParent!==document&&scrollParent.tagName!=="HTML"){if(!o.axis||o.axis!=="x"){if((i.overflowOffset.top+scrollParent.offsetHeight)-event.pageY<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop+o.scrollSpeed;}else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity){scrollParent.scrollTop=scrolled=scrollParent.scrollTop-o.scrollSpeed;}}
            if(!o.axis||o.axis!=="y"){if((i.overflowOffset.left+scrollParent.offsetWidth)-event.pageX<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft+o.scrollSpeed;}else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity){scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft-o.scrollSpeed;}}}else{if(!o.axis||o.axis!=="x"){if(event.pageY-$(document).scrollTop()<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);}else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity){scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);}}
            if(!o.axis||o.axis!=="y"){if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);}else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity){scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);}}}
            if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(i,event);}}});$.ui.plugin.add("draggable","snap",{start:function(event,ui,i){var o=i.options;i.snapElements=[];$(o.snap.constructor!==String?(o.snap.items||":data(ui-draggable)"):o.snap).each(function(){var $t=$(this),$o=$t.offset();if(this!==i.element[0]){i.snapElements.push({item:this,width:$t.outerWidth(),height:$t.outerHeight(),top:$o.top,left:$o.left});}});},drag:function(event,ui,inst){var ts,bs,ls,rs,l,r,t,b,i,first,o=inst.options,d=o.snapTolerance,x1=ui.offset.left,x2=x1+inst.helperProportions.width,y1=ui.offset.top,y2=y1+inst.helperProportions.height;for(i=inst.snapElements.length-1;i>=0;i--){l=inst.snapElements[i].left-inst.margins.left;r=l+inst.snapElements[i].width;t=inst.snapElements[i].top-inst.margins.top;b=t+inst.snapElements[i].height;if(x2<l-d||x1>r+d||y2<t-d||y1>b+d||!$.contains(inst.snapElements[i].item.ownerDocument,inst.snapElements[i].item)){if(inst.snapElements[i].snapping){if(inst.options.snap.release){inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));}}
            inst.snapElements[i].snapping=false;continue;}
            if(o.snapMode!=="inner"){ts=Math.abs(t-y2)<=d;bs=Math.abs(b-y1)<=d;ls=Math.abs(l-x2)<=d;rs=Math.abs(r-x1)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top;}
                if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top;}
                if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left;}
                if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left;}}
            first=(ts||bs||ls||rs);if(o.snapMode!=="outer"){ts=Math.abs(t-y1)<=d;bs=Math.abs(b-y2)<=d;ls=Math.abs(l-x1)<=d;rs=Math.abs(r-x2)<=d;if(ts){ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top;}
                if(bs){ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top;}
                if(ls){ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left;}
                if(rs){ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left;}}
            if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first)){if(inst.options.snap.snap){inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item}));}}
            inst.snapElements[i].snapping=(ts||bs||ls||rs||first);}}});$.ui.plugin.add("draggable","stack",{start:function(event,ui,instance){var min,o=instance.options,group=$.makeArray($(o.stack)).sort(function(a,b){return(parseInt($(a).css("zIndex"),10)||0)-
            (parseInt($(b).css("zIndex"),10)||0);});if(!group.length){return;}
            min=parseInt($(group[0]).css("zIndex"),10)||0;$(group).each(function(i){$(this).css("zIndex",min+i);});this.css("zIndex",(min+group.length));}});$.ui.plugin.add("draggable","zIndex",{start:function(event,ui,instance){var t=$(ui.helper),o=instance.options;if(t.css("zIndex")){o._zIndex=t.css("zIndex");}
            t.css("zIndex",o.zIndex);},stop:function(event,ui,instance){var o=instance.options;if(o._zIndex){$(ui.helper).css("zIndex",o._zIndex);}}});var widgetsDraggable=$.ui.draggable;
    /*!
 * jQuery UI Resizable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.widget("ui.resizable",$.ui.mouse,{version:"1.13.2",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(value){return parseFloat(value)||0;},_isNumber:function(value){return!isNaN(parseFloat(value));},_hasScroll:function(el,a){if($(el).css("overflow")==="hidden"){return false;}
            var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",has=false;if(el[scroll]>0){return true;}
            try{el[scroll]=1;has=(el[scroll]>0);el[scroll]=0;}catch(e){}
            return has;},_create:function(){var margins,o=this.options,that=this;this._addClass("ui-resizable");$.extend(this,{_aspectRatio:!!(o.aspectRatio),aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap($("<div class='ui-wrapper'></div>").css({overflow:"hidden",position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));this.elementIsWrapper=true;margins={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")};this.element.css(margins);this.originalElement.css("margin",0);this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css(margins);this._proportionallyResize();}
            this._setupHandles();if(o.autoHide){$(this.element).on("mouseenter",function(){if(o.disabled){return;}
                that._removeClass("ui-resizable-autohide");that._handles.show();}).on("mouseleave",function(){if(o.disabled){return;}
                if(!that.resizing){that._addClass("ui-resizable-autohide");that._handles.hide();}});}
            this._mouseInit();},_destroy:function(){this._mouseDestroy();this._addedHandles.remove();var wrapper,_destroy=function(exp){$(exp).removeData("resizable").removeData("ui-resizable").off(".resizable");};if(this.elementIsWrapper){_destroy(this.element);wrapper=this.element;this.originalElement.css({position:wrapper.css("position"),width:wrapper.outerWidth(),height:wrapper.outerHeight(),top:wrapper.css("top"),left:wrapper.css("left")}).insertAfter(wrapper);wrapper.remove();}
            this.originalElement.css("resize",this.originalResizeStyle);_destroy(this.originalElement);return this;},_setOption:function(key,value){this._super(key,value);switch(key){case"handles":this._removeHandles();this._setupHandles();break;case"aspectRatio":this._aspectRatio=!!value;break;default:break;}},_setupHandles:function(){var o=this.options,handle,i,n,hname,axis,that=this;this.handles=o.handles||(!$(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});this._handles=$();this._addedHandles=$();if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw";}
            n=this.handles.split(",");this.handles={};for(i=0;i<n.length;i++){handle=String.prototype.trim.call(n[i]);hname="ui-resizable-"+handle;axis=$("<div>");this._addClass(axis,"ui-resizable-handle "+hname);axis.css({zIndex:o.zIndex});this.handles[handle]=".ui-resizable-"+handle;if(!this.element.children(this.handles[handle]).length){this.element.append(axis);this._addedHandles=this._addedHandles.add(axis);}}}
            this._renderAxis=function(target){var i,axis,padPos,padWrapper;target=target||this.element;for(i in this.handles){if(this.handles[i].constructor===String){this.handles[i]=this.element.children(this.handles[i]).first().show();}else if(this.handles[i].jquery||this.handles[i].nodeType){this.handles[i]=$(this.handles[i]);this._on(this.handles[i],{"mousedown":that._mouseDown});}
                if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){axis=$(this.handles[i],this.element);padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();padPos=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");target.css(padPos,padWrapper);this._proportionallyResize();}
                this._handles=this._handles.add(this.handles[i]);}};this._renderAxis(this.element);this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));this._handles.disableSelection();this._handles.on("mouseover",function(){if(!that.resizing){if(this.className){axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);}
                that.axis=axis&&axis[1]?axis[1]:"se";}});if(o.autoHide){this._handles.hide();this._addClass("ui-resizable-autohide");}},_removeHandles:function(){this._addedHandles.remove();},_mouseCapture:function(event){var i,handle,capture=false;for(i in this.handles){handle=$(this.handles[i])[0];if(handle===event.target||$.contains(handle,event.target)){capture=true;}}
            return!this.options.disabled&&capture;},_mouseStart:function(event){var curleft,curtop,cursor,o=this.options,el=this.element;this.resizing=true;this._renderProxy();curleft=this._num(this.helper.css("left"));curtop=this._num(this.helper.css("top"));if(o.containment){curleft+=$(o.containment).scrollLeft()||0;curtop+=$(o.containment).scrollTop()||0;}
            this.offset=this.helper.offset();this.position={left:curleft,top:curtop};this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:el.width(),height:el.height()};this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};this.originalPosition={left:curleft,top:curtop};this.originalMousePosition={left:event.pageX,top:event.pageY};this.aspectRatio=(typeof o.aspectRatio==="number")?o.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);cursor=$(".ui-resizable-"+this.axis).css("cursor");$("body").css("cursor",cursor==="auto"?this.axis+"-resize":cursor);this._addClass("ui-resizable-resizing");this._propagate("start",event);return true;},_mouseDrag:function(event){var data,props,smp=this.originalMousePosition,a=this.axis,dx=(event.pageX-smp.left)||0,dy=(event.pageY-smp.top)||0,trigger=this._change[a];this._updatePrevProperties();if(!trigger){return false;}
            data=trigger.apply(this,[event,dx,dy]);this._updateVirtualBoundaries(event.shiftKey);if(this._aspectRatio||event.shiftKey){data=this._updateRatio(data,event);}
            data=this._respectSize(data,event);this._updateCache(data);this._propagate("resize",event);props=this._applyChanges();if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize();}
            if(!$.isEmptyObject(props)){this._updatePrevProperties();this._trigger("resize",event,this.ui());this._applyChanges();}
            return false;},_mouseStop:function(event){this.resizing=false;var pr,ista,soffseth,soffsetw,s,left,top,o=this.options,that=this;if(this._helper){pr=this._proportionallyResizeElements;ista=pr.length&&(/textarea/i).test(pr[0].nodeName);soffseth=ista&&this._hasScroll(pr[0],"left")?0:that.sizeDiff.height;soffsetw=ista?0:that.sizeDiff.width;s={width:(that.helper.width()-soffsetw),height:(that.helper.height()-soffseth)};left=(parseFloat(that.element.css("left"))+
            (that.position.left-that.originalPosition.left))||null;top=(parseFloat(that.element.css("top"))+
            (that.position.top-that.originalPosition.top))||null;if(!o.animate){this.element.css($.extend(s,{top:top,left:left}));}
            that.helper.height(that.size.height);that.helper.width(that.size.width);if(this._helper&&!o.animate){this._proportionallyResize();}}
            $("body").css("cursor","auto");this._removeClass("ui-resizable-resizing");this._propagate("stop",event);if(this._helper){this.helper.remove();}
            return false;},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};this.prevSize={width:this.size.width,height:this.size.height};},_applyChanges:function(){var props={};if(this.position.top!==this.prevPosition.top){props.top=this.position.top+"px";}
            if(this.position.left!==this.prevPosition.left){props.left=this.position.left+"px";}
            if(this.size.width!==this.prevSize.width){props.width=this.size.width+"px";}
            if(this.size.height!==this.prevSize.height){props.height=this.size.height+"px";}
            this.helper.css(props);return props;},_updateVirtualBoundaries:function(forceAspectRatio){var pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b,o=this.options;b={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:Infinity,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:Infinity};if(this._aspectRatio||forceAspectRatio){pMinWidth=b.minHeight*this.aspectRatio;pMinHeight=b.minWidth/this.aspectRatio;pMaxWidth=b.maxHeight*this.aspectRatio;pMaxHeight=b.maxWidth/this.aspectRatio;if(pMinWidth>b.minWidth){b.minWidth=pMinWidth;}
            if(pMinHeight>b.minHeight){b.minHeight=pMinHeight;}
            if(pMaxWidth<b.maxWidth){b.maxWidth=pMaxWidth;}
            if(pMaxHeight<b.maxHeight){b.maxHeight=pMaxHeight;}}
            this._vBoundaries=b;},_updateCache:function(data){this.offset=this.helper.offset();if(this._isNumber(data.left)){this.position.left=data.left;}
            if(this._isNumber(data.top)){this.position.top=data.top;}
            if(this._isNumber(data.height)){this.size.height=data.height;}
            if(this._isNumber(data.width)){this.size.width=data.width;}},_updateRatio:function(data){var cpos=this.position,csize=this.size,a=this.axis;if(this._isNumber(data.height)){data.width=(data.height*this.aspectRatio);}else if(this._isNumber(data.width)){data.height=(data.width/this.aspectRatio);}
            if(a==="sw"){data.left=cpos.left+(csize.width-data.width);data.top=null;}
            if(a==="nw"){data.top=cpos.top+(csize.height-data.height);data.left=cpos.left+(csize.width-data.width);}
            return data;},_respectSize:function(data){var o=this._vBoundaries,a=this.axis,ismaxw=this._isNumber(data.width)&&o.maxWidth&&(o.maxWidth<data.width),ismaxh=this._isNumber(data.height)&&o.maxHeight&&(o.maxHeight<data.height),isminw=this._isNumber(data.width)&&o.minWidth&&(o.minWidth>data.width),isminh=this._isNumber(data.height)&&o.minHeight&&(o.minHeight>data.height),dw=this.originalPosition.left+this.originalSize.width,dh=this.originalPosition.top+this.originalSize.height,cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);if(isminw){data.width=o.minWidth;}
            if(isminh){data.height=o.minHeight;}
            if(ismaxw){data.width=o.maxWidth;}
            if(ismaxh){data.height=o.maxHeight;}
            if(isminw&&cw){data.left=dw-o.minWidth;}
            if(ismaxw&&cw){data.left=dw-o.maxWidth;}
            if(isminh&&ch){data.top=dh-o.minHeight;}
            if(ismaxh&&ch){data.top=dh-o.maxHeight;}
            if(!data.width&&!data.height&&!data.left&&data.top){data.top=null;}else if(!data.width&&!data.height&&!data.top&&data.left){data.left=null;}
            return data;},_getPaddingPlusBorderDimensions:function(element){var i=0,widths=[],borders=[element.css("borderTopWidth"),element.css("borderRightWidth"),element.css("borderBottomWidth"),element.css("borderLeftWidth")],paddings=[element.css("paddingTop"),element.css("paddingRight"),element.css("paddingBottom"),element.css("paddingLeft")];for(;i<4;i++){widths[i]=(parseFloat(borders[i])||0);widths[i]+=(parseFloat(paddings[i])||0);}
            return{height:widths[0]+widths[2],width:widths[1]+widths[3]};},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return;}
            var prel,i=0,element=this.helper||this.element;for(;i<this._proportionallyResizeElements.length;i++){prel=this._proportionallyResizeElements[i];if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(prel);}
                prel.css({height:(element.height()-this.outerDimensions.height)||0,width:(element.width()-this.outerDimensions.width)||0});}},_renderProxy:function(){var el=this.element,o=this.options;this.elementOffset=el.offset();if(this._helper){this.helper=this.helper||$("<div></div>").css({overflow:"hidden"});this._addClass(this.helper,this._helper);this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++o.zIndex});this.helper.appendTo("body").disableSelection();}else{this.helper=this.element;}},_change:{e:function(event,dx){return{width:this.originalSize.width+dx};},w:function(event,dx){var cs=this.originalSize,sp=this.originalPosition;return{left:sp.left+dx,width:cs.width-dx};},n:function(event,dx,dy){var cs=this.originalSize,sp=this.originalPosition;return{top:sp.top+dy,height:cs.height-dy};},s:function(event,dx,dy){return{height:this.originalSize.height+dy};},se:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},sw:function(event,dx,dy){return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));},ne:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));},nw:function(event,dx,dy){return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));}},_propagate:function(n,event){$.ui.plugin.call(this,n,[event,this.ui()]);if(n!=="resize"){this._trigger(n,event,this.ui());}},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};}});$.ui.plugin.add("resizable","animate",{stop:function(event){var that=$(this).resizable("instance"),o=that.options,pr=that._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),soffseth=ista&&that._hasScroll(pr[0],"left")?0:that.sizeDiff.height,soffsetw=ista?0:that.sizeDiff.width,style={width:(that.size.width-soffsetw),height:(that.size.height-soffseth)},left=(parseFloat(that.element.css("left"))+
            (that.position.left-that.originalPosition.left))||null,top=(parseFloat(that.element.css("top"))+
            (that.position.top-that.originalPosition.top))||null;that.element.animate($.extend(style,top&&left?{top:top,left:left}:{}),{duration:o.animateDuration,easing:o.animateEasing,step:function(){var data={width:parseFloat(that.element.css("width")),height:parseFloat(that.element.css("height")),top:parseFloat(that.element.css("top")),left:parseFloat(that.element.css("left"))};if(pr&&pr.length){$(pr[0]).css({width:data.width,height:data.height});}
                that._updateCache(data);that._propagate("resize",event);}});}});$.ui.plugin.add("resizable","containment",{start:function(){var element,p,co,ch,cw,width,height,that=$(this).resizable("instance"),o=that.options,el=that.element,oc=o.containment,ce=(oc instanceof $)?oc.get(0):(/parent/.test(oc))?el.parent().get(0):oc;if(!ce){return;}
            that.containerElement=$(ce);if(/document/.test(oc)||oc===document){that.containerOffset={left:0,top:0};that.containerPosition={left:0,top:0};that.parentData={element:$(document),left:0,top:0,width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight};}else{element=$(ce);p=[];$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=that._num(element.css("padding"+name));});that.containerOffset=element.offset();that.containerPosition=element.position();that.containerSize={height:(element.innerHeight()-p[3]),width:(element.innerWidth()-p[1])};co=that.containerOffset;ch=that.containerSize.height;cw=that.containerSize.width;width=(that._hasScroll(ce,"left")?ce.scrollWidth:cw);height=(that._hasScroll(ce)?ce.scrollHeight:ch);that.parentData={element:ce,left:co.left,top:co.top,width:width,height:height};}},resize:function(event){var woset,hoset,isParent,isOffsetRelative,that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cp=that.position,pRatio=that._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=that.containerElement,continueResize=true;if(ce[0]!==document&&(/static/).test(ce.css("position"))){cop=co;}
            if(cp.left<(that._helper?co.left:0)){that.size.width=that.size.width+
                (that._helper?(that.position.left-co.left):(that.position.left-cop.left));if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=false;}
                that.position.left=o.helper?co.left:0;}
            if(cp.top<(that._helper?co.top:0)){that.size.height=that.size.height+
                (that._helper?(that.position.top-co.top):that.position.top);if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=false;}
                that.position.top=that._helper?co.top:0;}
            isParent=that.containerElement.get(0)===that.element.parent().get(0);isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));if(isParent&&isOffsetRelative){that.offset.left=that.parentData.left+that.position.left;that.offset.top=that.parentData.top+that.position.top;}else{that.offset.left=that.element.offset().left;that.offset.top=that.element.offset().top;}
            woset=Math.abs(that.sizeDiff.width+
                (that._helper?that.offset.left-cop.left:(that.offset.left-co.left)));hoset=Math.abs(that.sizeDiff.height+
                (that._helper?that.offset.top-cop.top:(that.offset.top-co.top)));if(woset+that.size.width>=that.parentData.width){that.size.width=that.parentData.width-woset;if(pRatio){that.size.height=that.size.width/that.aspectRatio;continueResize=false;}}
            if(hoset+that.size.height>=that.parentData.height){that.size.height=that.parentData.height-hoset;if(pRatio){that.size.width=that.size.height*that.aspectRatio;continueResize=false;}}
            if(!continueResize){that.position.left=that.prevPosition.left;that.position.top=that.prevPosition.top;that.size.width=that.prevSize.width;that.size.height=that.prevSize.height;}},stop:function(){var that=$(this).resizable("instance"),o=that.options,co=that.containerOffset,cop=that.containerPosition,ce=that.containerElement,helper=$(that.helper),ho=helper.offset(),w=helper.outerWidth()-that.sizeDiff.width,h=helper.outerHeight()-that.sizeDiff.height;if(that._helper&&!o.animate&&(/relative/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}
            if(that._helper&&!o.animate&&(/static/).test(ce.css("position"))){$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});}}});$.ui.plugin.add("resizable","alsoResize",{start:function(){var that=$(this).resizable("instance"),o=that.options;$(o.alsoResize).each(function(){var el=$(this);el.data("ui-resizable-alsoresize",{width:parseFloat(el.width()),height:parseFloat(el.height()),left:parseFloat(el.css("left")),top:parseFloat(el.css("top"))});});},resize:function(event,ui){var that=$(this).resizable("instance"),o=that.options,os=that.originalSize,op=that.originalPosition,delta={height:(that.size.height-os.height)||0,width:(that.size.width-os.width)||0,top:(that.position.top-op.top)||0,left:(that.position.left-op.left)||0};$(o.alsoResize).each(function(){var el=$(this),start=$(this).data("ui-resizable-alsoresize"),style={},css=el.parents(ui.originalElement[0]).length?["width","height"]:["width","height","top","left"];$.each(css,function(i,prop){var sum=(start[prop]||0)+(delta[prop]||0);if(sum&&sum>=0){style[prop]=sum||null;}});el.css(style);});},stop:function(){$(this).removeData("ui-resizable-alsoresize");}});$.ui.plugin.add("resizable","ghost",{start:function(){var that=$(this).resizable("instance"),cs=that.size;that.ghost=that.originalElement.clone();that.ghost.css({opacity:0.25,display:"block",position:"relative",height:cs.height,width:cs.width,margin:0,left:0,top:0});that._addClass(that.ghost,"ui-resizable-ghost");if($.uiBackCompat!==false&&typeof that.options.ghost==="string"){that.ghost.addClass(this.options.ghost);}
            that.ghost.appendTo(that.helper);},resize:function(){var that=$(this).resizable("instance");if(that.ghost){that.ghost.css({position:"relative",height:that.size.height,width:that.size.width});}},stop:function(){var that=$(this).resizable("instance");if(that.ghost&&that.helper){that.helper.get(0).removeChild(that.ghost.get(0));}}});$.ui.plugin.add("resizable","grid",{resize:function(){var outerDimensions,that=$(this).resizable("instance"),o=that.options,cs=that.size,os=that.originalSize,op=that.originalPosition,a=that.axis,grid=typeof o.grid==="number"?[o.grid,o.grid]:o.grid,gridX=(grid[0]||1),gridY=(grid[1]||1),ox=Math.round((cs.width-os.width)/gridX)*gridX,oy=Math.round((cs.height-os.height)/gridY)*gridY,newWidth=os.width+ox,newHeight=os.height+oy,isMaxWidth=o.maxWidth&&(o.maxWidth<newWidth),isMaxHeight=o.maxHeight&&(o.maxHeight<newHeight),isMinWidth=o.minWidth&&(o.minWidth>newWidth),isMinHeight=o.minHeight&&(o.minHeight>newHeight);o.grid=grid;if(isMinWidth){newWidth+=gridX;}
            if(isMinHeight){newHeight+=gridY;}
            if(isMaxWidth){newWidth-=gridX;}
            if(isMaxHeight){newHeight-=gridY;}
            if(/^(se|s|e)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;}else if(/^(ne)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.top=op.top-oy;}else if(/^(sw)$/.test(a)){that.size.width=newWidth;that.size.height=newHeight;that.position.left=op.left-ox;}else{if(newHeight-gridY<=0||newWidth-gridX<=0){outerDimensions=that._getPaddingPlusBorderDimensions(this);}
                if(newHeight-gridY>0){that.size.height=newHeight;that.position.top=op.top-oy;}else{newHeight=gridY-outerDimensions.height;that.size.height=newHeight;that.position.top=op.top+os.height-newHeight;}
                if(newWidth-gridX>0){that.size.width=newWidth;that.position.left=op.left-ox;}else{newWidth=gridX-outerDimensions.width;that.size.width=newWidth;that.position.left=op.left+os.width-newWidth;}}}});var widgetsResizable=$.ui.resizable;
    /*!
 * jQuery UI Dialog 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.widget("ui.dialog",{version:"1.13.2",options:{appendTo:"body",autoOpen:true,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:true,closeText:"Close",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(pos){var topOffset=$(this).css(pos).offset().top;if(topOffset<0){$(this).css("top",pos.top-topOffset);}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions:{maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");if(this.options.title==null&&this.originalTitle!=null){this.options.title=this.originalTitle;}
            if(this.options.disabled){this.options.disabled=false;}
            this._createWrapper();this.element.show().removeAttr("title").appendTo(this.uiDialog);this._addClass("ui-dialog-content","ui-widget-content");this._createTitlebar();this._createButtonPane();if(this.options.draggable&&$.fn.draggable){this._makeDraggable();}
            if(this.options.resizable&&$.fn.resizable){this._makeResizable();}
            this._isOpen=false;this._trackFocus();},_init:function(){if(this.options.autoOpen){this.open();}},_appendTo:function(){var element=this.options.appendTo;if(element&&(element.jquery||element.nodeType)){return $(element);}
            return this.document.find(element||"body").eq(0);},_destroy:function(){var next,originalPosition=this.originalPosition;this._untrackInstance();this._destroyOverlay();this.element.removeUniqueId().css(this.originalCss).detach();this.uiDialog.remove();if(this.originalTitle){this.element.attr("title",this.originalTitle);}
            next=originalPosition.parent.children().eq(originalPosition.index);if(next.length&&next[0]!==this.element[0]){next.before(this.element);}else{originalPosition.parent.append(this.element);}},widget:function(){return this.uiDialog;},disable:$.noop,enable:$.noop,close:function(event){var that=this;if(!this._isOpen||this._trigger("beforeClose",event)===false){return;}
            this._isOpen=false;this._focusedElement=null;this._destroyOverlay();this._untrackInstance();if(!this.opener.filter(":focusable").trigger("focus").length){$.ui.safeBlur($.ui.safeActiveElement(this.document[0]));}
            this._hide(this.uiDialog,this.options.hide,function(){that._trigger("close",event);});},isOpen:function(){return this._isOpen;},moveToTop:function(){this._moveToTop();},_moveToTop:function(event,silent){var moved=false,zIndices=this.uiDialog.siblings(".ui-front:visible").map(function(){return+$(this).css("z-index");}).get(),zIndexMax=Math.max.apply(null,zIndices);if(zIndexMax>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",zIndexMax+1);moved=true;}
            if(moved&&!silent){this._trigger("focus",event);}
            return moved;},open:function(){var that=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable();}
            return;}
            this._isOpen=true;this.opener=$($.ui.safeActiveElement(this.document[0]));this._size();this._position();this._createOverlay();this._moveToTop(null,true);if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1);}
            this._show(this.uiDialog,this.options.show,function(){that._focusTabbable();that._trigger("focus");});this._makeFocusTarget();this._trigger("open");},_focusTabbable:function(){var hasFocus=this._focusedElement;if(!hasFocus){hasFocus=this.element.find("[autofocus]");}
            if(!hasFocus.length){hasFocus=this.element.find(":tabbable");}
            if(!hasFocus.length){hasFocus=this.uiDialogButtonPane.find(":tabbable");}
            if(!hasFocus.length){hasFocus=this.uiDialogTitlebarClose.filter(":tabbable");}
            if(!hasFocus.length){hasFocus=this.uiDialog;}
            hasFocus.eq(0).trigger("focus");},_restoreTabbableFocus:function(){var activeElement=$.ui.safeActiveElement(this.document[0]),isActive=this.uiDialog[0]===activeElement||$.contains(this.uiDialog[0],activeElement);if(!isActive){this._focusTabbable();}},_keepFocus:function(event){event.preventDefault();this._restoreTabbableFocus();this._delay(this._restoreTabbableFocus);},_createWrapper:function(){this.uiDialog=$("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front");this._on(this.uiDialog,{keydown:function(event){if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&event.keyCode===$.ui.keyCode.ESCAPE){event.preventDefault();this.close(event);return;}
                if(event.keyCode!==$.ui.keyCode.TAB||event.isDefaultPrevented()){return;}
                var tabbables=this.uiDialog.find(":tabbable"),first=tabbables.first(),last=tabbables.last();if((event.target===last[0]||event.target===this.uiDialog[0])&&!event.shiftKey){this._delay(function(){first.trigger("focus");});event.preventDefault();}else if((event.target===first[0]||event.target===this.uiDialog[0])&&event.shiftKey){this._delay(function(){last.trigger("focus");});event.preventDefault();}},mousedown:function(event){if(this._moveToTop(event)){this._focusTabbable();}}});if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")});}},_createTitlebar:function(){var uiDialogTitle;this.uiDialogTitlebar=$("<div>");this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix");this._on(this.uiDialogTitlebar,{mousedown:function(event){if(!$(event.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.trigger("focus");}}});this.uiDialogTitlebarClose=$("<button type='button'></button>").button({label:$("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:false}).appendTo(this.uiDialogTitlebar);this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close");this._on(this.uiDialogTitlebarClose,{click:function(event){event.preventDefault();this.close(event);}});uiDialogTitle=$("<span>").uniqueId().prependTo(this.uiDialogTitlebar);this._addClass(uiDialogTitle,"ui-dialog-title");this._title(uiDialogTitle);this.uiDialogTitlebar.prependTo(this.uiDialog);this.uiDialog.attr({"aria-labelledby":uiDialogTitle.attr("id")});},_title:function(title){if(this.options.title){title.text(this.options.title);}else{title.html("&#160;");}},_createButtonPane:function(){this.uiDialogButtonPane=$("<div>");this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix");this.uiButtonSet=$("<div>").appendTo(this.uiDialogButtonPane);this._addClass(this.uiButtonSet,"ui-dialog-buttonset");this._createButtons();},_createButtons:function(){var that=this,buttons=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if($.isEmptyObject(buttons)||(Array.isArray(buttons)&&!buttons.length)){this._removeClass(this.uiDialog,"ui-dialog-buttons");return;}
            $.each(buttons,function(name,props){var click,buttonOptions;props=typeof props==="function"?{click:props,text:name}:props;props=$.extend({type:"button"},props);click=props.click;buttonOptions={icon:props.icon,iconPosition:props.iconPosition,showLabel:props.showLabel,icons:props.icons,text:props.text};delete props.click;delete props.icon;delete props.iconPosition;delete props.showLabel;delete props.icons;if(typeof props.text==="boolean"){delete props.text;}
                $("<button></button>",props).button(buttonOptions).appendTo(that.uiButtonSet).on("click",function(){click.apply(that.element[0],arguments);});});this._addClass(this.uiDialog,"ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog);},_makeDraggable:function(){var that=this,options=this.options;function filteredUi(ui){return{position:ui.position,offset:ui.offset};}
            this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(event,ui){that._addClass($(this),"ui-dialog-dragging");that._blockFrames();that._trigger("dragStart",event,filteredUi(ui));},drag:function(event,ui){that._trigger("drag",event,filteredUi(ui));},stop:function(event,ui){var left=ui.offset.left-that.document.scrollLeft(),top=ui.offset.top-that.document.scrollTop();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};that._removeClass($(this),"ui-dialog-dragging");that._unblockFrames();that._trigger("dragStop",event,filteredUi(ui));}});},_makeResizable:function(){var that=this,options=this.options,handles=options.resizable,position=this.uiDialog.css("position"),resizeHandles=typeof handles==="string"?handles:"n,e,s,w,se,sw,ne,nw";function filteredUi(ui){return{originalPosition:ui.originalPosition,originalSize:ui.originalSize,position:ui.position,size:ui.size};}
            this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:options.maxWidth,maxHeight:options.maxHeight,minWidth:options.minWidth,minHeight:this._minHeight(),handles:resizeHandles,start:function(event,ui){that._addClass($(this),"ui-dialog-resizing");that._blockFrames();that._trigger("resizeStart",event,filteredUi(ui));},resize:function(event,ui){that._trigger("resize",event,filteredUi(ui));},stop:function(event,ui){var offset=that.uiDialog.offset(),left=offset.left-that.document.scrollLeft(),top=offset.top-that.document.scrollTop();options.height=that.uiDialog.height();options.width=that.uiDialog.width();options.position={my:"left top",at:"left"+(left>=0?"+":"")+left+" "+"top"+(top>=0?"+":"")+top,of:that.window};that._removeClass($(this),"ui-dialog-resizing");that._unblockFrames();that._trigger("resizeStop",event,filteredUi(ui));}}).css("position",position);},_trackFocus:function(){this._on(this.widget(),{focusin:function(event){this._makeFocusTarget();this._focusedElement=$(event.target);}});},_makeFocusTarget:function(){this._untrackInstance();this._trackingInstances().unshift(this);},_untrackInstance:function(){var instances=this._trackingInstances(),exists=$.inArray(this,instances);if(exists!==-1){instances.splice(exists,1);}},_trackingInstances:function(){var instances=this.document.data("ui-dialog-instances");if(!instances){instances=[];this.document.data("ui-dialog-instances",instances);}
            return instances;},_minHeight:function(){var options=this.options;return options.height==="auto"?options.minHeight:Math.min(options.minHeight,options.height);},_position:function(){var isVisible=this.uiDialog.is(":visible");if(!isVisible){this.uiDialog.show();}
            this.uiDialog.position(this.options.position);if(!isVisible){this.uiDialog.hide();}},_setOptions:function(options){var that=this,resize=false,resizableOptions={};$.each(options,function(key,value){that._setOption(key,value);if(key in that.sizeRelatedOptions){resize=true;}
            if(key in that.resizableRelatedOptions){resizableOptions[key]=value;}});if(resize){this._size();this._position();}
            if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",resizableOptions);}},_setOption:function(key,value){var isDraggable,isResizable,uiDialog=this.uiDialog;if(key==="disabled"){return;}
            this._super(key,value);if(key==="appendTo"){this.uiDialog.appendTo(this._appendTo());}
            if(key==="buttons"){this._createButtons();}
            if(key==="closeText"){this.uiDialogTitlebarClose.button({label:$("<a>").text(""+this.options.closeText).html()});}
            if(key==="draggable"){isDraggable=uiDialog.is(":data(ui-draggable)");if(isDraggable&&!value){uiDialog.draggable("destroy");}
                if(!isDraggable&&value){this._makeDraggable();}}
            if(key==="position"){this._position();}
            if(key==="resizable"){isResizable=uiDialog.is(":data(ui-resizable)");if(isResizable&&!value){uiDialog.resizable("destroy");}
                if(isResizable&&typeof value==="string"){uiDialog.resizable("option","handles",value);}
                if(!isResizable&&value!==false){this._makeResizable();}}
            if(key==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));}},_size:function(){var nonContentHeight,minContentHeight,maxContentHeight,options=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(options.minWidth>options.width){options.width=options.minWidth;}
            nonContentHeight=this.uiDialog.css({height:"auto",width:options.width}).outerHeight();minContentHeight=Math.max(0,options.minHeight-nonContentHeight);maxContentHeight=typeof options.maxHeight==="number"?Math.max(0,options.maxHeight-nonContentHeight):"none";if(options.height==="auto"){this.element.css({minHeight:minContentHeight,maxHeight:maxContentHeight,height:"auto"});}else{this.element.height(Math.max(0,options.height-nonContentHeight));}
            if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight());}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var iframe=$(this);return $("<div>").css({position:"absolute",width:iframe.outerWidth(),height:iframe.outerHeight()}).appendTo(iframe.parent()).offset(iframe.offset())[0];});},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks;}},_allowInteraction:function(event){if($(event.target).closest(".ui-dialog").length){return true;}
            return!!$(event.target).closest(".ui-datepicker").length;},_createOverlay:function(){if(!this.options.modal){return;}
            var jqMinor=$.fn.jquery.substring(0,4);var isOpening=true;this._delay(function(){isOpening=false;});if(!this.document.data("ui-dialog-overlays")){this.document.on("focusin.ui-dialog",function(event){if(isOpening){return;}
                var instance=this._trackingInstances()[0];if(!instance._allowInteraction(event)){event.preventDefault();instance._focusTabbable();if(jqMinor==="3.4."||jqMinor==="3.5."){instance._delay(instance._restoreTabbableFocus);}}}.bind(this));}
            this.overlay=$("<div>").appendTo(this._appendTo());this._addClass(this.overlay,null,"ui-widget-overlay ui-front");this._on(this.overlay,{mousedown:"_keepFocus"});this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1);},_destroyOverlay:function(){if(!this.options.modal){return;}
            if(this.overlay){var overlays=this.document.data("ui-dialog-overlays")-1;if(!overlays){this.document.off("focusin.ui-dialog");this.document.removeData("ui-dialog-overlays");}else{this.document.data("ui-dialog-overlays",overlays);}
                this.overlay.remove();this.overlay=null;}}});if($.uiBackCompat!==false){$.widget("ui.dialog",$.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super();this.uiDialog.addClass(this.options.dialogClass);},_setOption:function(key,value){if(key==="dialogClass"){this.uiDialog.removeClass(this.options.dialogClass).addClass(value);}
            this._superApply(arguments);}});}
    var widgetsDialog=$.ui.dialog;
    /*!
 * jQuery UI Droppable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.widget("ui.droppable",{version:"1.13.2",widgetEventPrefix:"drop",options:{accept:"*",addClasses:true,greedy:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var proportions,o=this.options,accept=o.accept;this.isover=false;this.isout=true;this.accept=typeof accept==="function"?accept:function(d){return d.is(accept);};this.proportions=function(){if(arguments.length){proportions=arguments[0];}else{return proportions?proportions:proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};}};this._addToManager(o.scope);if(o.addClasses){this._addClass("ui-droppable");}},_addToManager:function(scope){$.ui.ddmanager.droppables[scope]=$.ui.ddmanager.droppables[scope]||[];$.ui.ddmanager.droppables[scope].push(this);},_splice:function(drop){var i=0;for(;i<drop.length;i++){if(drop[i]===this){drop.splice(i,1);}}},_destroy:function(){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop);},_setOption:function(key,value){if(key==="accept"){this.accept=typeof value==="function"?value:function(d){return d.is(value);};}else if(key==="scope"){var drop=$.ui.ddmanager.droppables[this.options.scope];this._splice(drop);this._addToManager(value);}
            this._super(key,value);},_activate:function(event){var draggable=$.ui.ddmanager.current;this._addActiveClass();if(draggable){this._trigger("activate",event,this.ui(draggable));}},_deactivate:function(event){var draggable=$.ui.ddmanager.current;this._removeActiveClass();if(draggable){this._trigger("deactivate",event,this.ui(draggable));}},_over:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}
            if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this._addHoverClass();this._trigger("over",event,this.ui(draggable));}},_out:function(event){var draggable=$.ui.ddmanager.current;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return;}
            if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this._removeHoverClass();this._trigger("out",event,this.ui(draggable));}},_drop:function(event,custom){var draggable=custom||$.ui.ddmanager.current,childrenIntersection=false;if(!draggable||(draggable.currentItem||draggable.element)[0]===this.element[0]){return false;}
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var inst=$(this).droppable("instance");if(inst.options.greedy&&!inst.options.disabled&&inst.options.scope===draggable.options.scope&&inst.accept.call(inst.element[0],(draggable.currentItem||draggable.element))&&$.ui.intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance,event)){childrenIntersection=true;return false;}});if(childrenIntersection){return false;}
            if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this._removeActiveClass();this._removeHoverClass();this._trigger("drop",event,this.ui(draggable));return this.element;}
            return false;},ui:function(c){return{draggable:(c.currentItem||c.element),helper:c.helper,position:c.position,offset:c.positionAbs};},_addHoverClass:function(){this._addClass("ui-droppable-hover");},_removeHoverClass:function(){this._removeClass("ui-droppable-hover");},_addActiveClass:function(){this._addClass("ui-droppable-active");},_removeActiveClass:function(){this._removeClass("ui-droppable-active");}});$.ui.intersect=(function(){function isOverAxis(x,reference,size){return(x>=reference)&&(x<(reference+size));}
        return function(draggable,droppable,toleranceMode,event){if(!droppable.offset){return false;}
            var x1=(draggable.positionAbs||draggable.position.absolute).left+draggable.margins.left,y1=(draggable.positionAbs||draggable.position.absolute).top+draggable.margins.top,x2=x1+draggable.helperProportions.width,y2=y1+draggable.helperProportions.height,l=droppable.offset.left,t=droppable.offset.top,r=l+droppable.proportions().width,b=t+droppable.proportions().height;switch(toleranceMode){case"fit":return(l<=x1&&x2<=r&&t<=y1&&y2<=b);case"intersect":return(l<x1+(draggable.helperProportions.width/2)&&x2-(draggable.helperProportions.width/2)<r&&t<y1+(draggable.helperProportions.height/2)&&y2-(draggable.helperProportions.height/2)<b);case"pointer":return isOverAxis(event.pageY,t,droppable.proportions().height)&&isOverAxis(event.pageX,l,droppable.proportions().width);case"touch":return((y1>=t&&y1<=b)||(y2>=t&&y2<=b)||(y1<t&&y2>b))&&((x1>=l&&x1<=r)||(x2>=l&&x2<=r)||(x1<l&&x2>r));default:return false;}};})();$.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,event){var i,j,m=$.ui.ddmanager.droppables[t.options.scope]||[],type=event?event.type:null,list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(i=0;i<m.length;i++){if(m[i].options.disabled||(t&&!m[i].accept.call(m[i].element[0],(t.currentItem||t.element)))){continue;}
            for(j=0;j<list.length;j++){if(list[j]===m[i].element[0]){m[i].proportions().height=0;continue droppablesLoop;}}
            m[i].visible=m[i].element.css("display")!=="none";if(!m[i].visible){continue;}
            if(type==="mousedown"){m[i]._activate.call(m[i],event);}
            m[i].offset=m[i].element.offset();m[i].proportions({width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight});}},drop:function(draggable,event){var dropped=false;$.each(($.ui.ddmanager.droppables[draggable.options.scope]||[]).slice(),function(){if(!this.options){return;}
            if(!this.options.disabled&&this.visible&&$.ui.intersect(draggable,this,this.options.tolerance,event)){dropped=this._drop.call(this,event)||dropped;}
            if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){this.isout=true;this.isover=false;this._deactivate.call(this,event);}});return dropped;},dragStart:function(draggable,event){draggable.element.parentsUntil("body").on("scroll.droppable",function(){if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}});},drag:function(draggable,event){if(draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}
            $.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return;}
                var parentInstance,scope,parent,intersects=$.ui.intersect(draggable,this,this.options.tolerance,event),c=!intersects&&this.isover?"isout":(intersects&&!this.isover?"isover":null);if(!c){return;}
                if(this.options.greedy){scope=this.options.scope;parent=this.element.parents(":data(ui-droppable)").filter(function(){return $(this).droppable("instance").options.scope===scope;});if(parent.length){parentInstance=$(parent[0]).droppable("instance");parentInstance.greedyChild=(c==="isover");}}
                if(parentInstance&&c==="isover"){parentInstance.isover=false;parentInstance.isout=true;parentInstance._out.call(parentInstance,event);}
                this[c]=true;this[c==="isout"?"isover":"isout"]=false;this[c==="isover"?"_over":"_out"].call(this,event);if(parentInstance&&c==="isout"){parentInstance.isout=false;parentInstance.isover=true;parentInstance._over.call(parentInstance,event);}});},dragStop:function(draggable,event){draggable.element.parentsUntil("body").off("scroll.droppable");if(!draggable.options.refreshPositions){$.ui.ddmanager.prepareOffsets(draggable,event);}}};if($.uiBackCompat!==false){$.widget("ui.droppable",$.ui.droppable,{options:{hoverClass:false,activeClass:false},_addActiveClass:function(){this._super();if(this.options.activeClass){this.element.addClass(this.options.activeClass);}},_removeActiveClass:function(){this._super();if(this.options.activeClass){this.element.removeClass(this.options.activeClass);}},_addHoverClass:function(){this._super();if(this.options.hoverClass){this.element.addClass(this.options.hoverClass);}},_removeHoverClass:function(){this._super();if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass);}}});}
    var widgetsDroppable=$.ui.droppable;
    /*!
 * jQuery UI Progressbar 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var widgetsProgressbar=$.widget("ui.progressbar",{version:"1.13.2",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.attr({role:"progressbar","aria-valuemin":this.min});this._addClass("ui-progressbar","ui-widget ui-widget-content");this.valueDiv=$("<div>").appendTo(this.element);this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header");this._refreshValue();},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");this.valueDiv.remove();},value:function(newValue){if(newValue===undefined){return this.options.value;}
            this.options.value=this._constrainedValue(newValue);this._refreshValue();},_constrainedValue:function(newValue){if(newValue===undefined){newValue=this.options.value;}
            this.indeterminate=newValue===false;if(typeof newValue!=="number"){newValue=0;}
            return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,newValue));},_setOptions:function(options){var value=options.value;delete options.value;this._super(options);this.options.value=this._constrainedValue(value);this._refreshValue();},_setOption:function(key,value){if(key==="max"){value=Math.max(this.min,value);}
            this._super(key,value);},_setOptionDisabled:function(value){this._super(value);this.element.attr("aria-disabled",value);this._toggleClass(null,"ui-state-disabled",!!value);},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min);},_refreshValue:function(){var value=this.options.value,percentage=this._percentage();this.valueDiv.toggle(this.indeterminate||value>this.min).width(percentage.toFixed(0)+"%");this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,value===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=$("<div>").appendTo(this.valueDiv);this._addClass(this.overlayDiv,"ui-progressbar-overlay");}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":value});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null;}}
            if(this.oldValue!==value){this.oldValue=value;this._trigger("change");}
            if(value===this.options.max){this._trigger("complete");}}});
    /*!
 * jQuery UI Selectable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var widgetsSelectable=$.widget("ui.selectable",$.ui.mouse,{version:"1.13.2",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var that=this;this._addClass("ui-selectable");this.dragged=false;this.refresh=function(){that.elementPos=$(that.element[0]).offset();that.selectees=$(that.options.filter,that.element[0]);that._addClass(that.selectees,"ui-selectee");that.selectees.each(function(){var $this=$(this),selecteeOffset=$this.offset(),pos={left:selecteeOffset.left-that.elementPos.left,top:selecteeOffset.top-that.elementPos.top};$.data(this,"selectable-item",{element:this,$element:$this,left:pos.left,top:pos.top,right:pos.left+$this.outerWidth(),bottom:pos.top+$this.outerHeight(),startselected:false,selected:$this.hasClass("ui-selected"),selecting:$this.hasClass("ui-selecting"),unselecting:$this.hasClass("ui-unselecting")});});};this.refresh();this._mouseInit();this.helper=$("<div>");this._addClass(this.helper,"ui-selectable-helper");},_destroy:function(){this.selectees.removeData("selectable-item");this._mouseDestroy();},_mouseStart:function(event){var that=this,options=this.options;this.opos=[event.pageX,event.pageY];this.elementPos=$(this.element[0]).offset();if(this.options.disabled){return;}
            this.selectees=$(options.filter,this.element[0]);this._trigger("start",event);$(options.appendTo).append(this.helper);this.helper.css({"left":event.pageX,"top":event.pageY,"width":0,"height":0});if(options.autoRefresh){this.refresh();}
            this.selectees.filter(".ui-selected").each(function(){var selectee=$.data(this,"selectable-item");selectee.startselected=true;if(!event.metaKey&&!event.ctrlKey){that._removeClass(selectee.$element,"ui-selected");selectee.selected=false;that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=true;that._trigger("unselecting",event,{unselecting:selectee.element});}});$(event.target).parents().addBack().each(function(){var doSelect,selectee=$.data(this,"selectable-item");if(selectee){doSelect=(!event.metaKey&&!event.ctrlKey)||!selectee.$element.hasClass("ui-selected");that._removeClass(selectee.$element,doSelect?"ui-unselecting":"ui-selected")._addClass(selectee.$element,doSelect?"ui-selecting":"ui-unselecting");selectee.unselecting=!doSelect;selectee.selecting=doSelect;selectee.selected=doSelect;if(doSelect){that._trigger("selecting",event,{selecting:selectee.element});}else{that._trigger("unselecting",event,{unselecting:selectee.element});}
                return false;}});},_mouseDrag:function(event){this.dragged=true;if(this.options.disabled){return;}
            var tmp,that=this,options=this.options,x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;if(x1>x2){tmp=x2;x2=x1;x1=tmp;}
            if(y1>y2){tmp=y2;y2=y1;y1=tmp;}
            this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});this.selectees.each(function(){var selectee=$.data(this,"selectable-item"),hit=false,offset={};if(!selectee||selectee.element===that.element[0]){return;}
                offset.left=selectee.left+that.elementPos.left;offset.right=selectee.right+that.elementPos.left;offset.top=selectee.top+that.elementPos.top;offset.bottom=selectee.bottom+that.elementPos.top;if(options.tolerance==="touch"){hit=(!(offset.left>x2||offset.right<x1||offset.top>y2||offset.bottom<y1));}else if(options.tolerance==="fit"){hit=(offset.left>x1&&offset.right<x2&&offset.top>y1&&offset.bottom<y2);}
                if(hit){if(selectee.selected){that._removeClass(selectee.$element,"ui-selected");selectee.selected=false;}
                    if(selectee.unselecting){that._removeClass(selectee.$element,"ui-unselecting");selectee.unselecting=false;}
                    if(!selectee.selecting){that._addClass(selectee.$element,"ui-selecting");selectee.selecting=true;that._trigger("selecting",event,{selecting:selectee.element});}}else{if(selectee.selecting){if((event.metaKey||event.ctrlKey)&&selectee.startselected){that._removeClass(selectee.$element,"ui-selecting");selectee.selecting=false;that._addClass(selectee.$element,"ui-selected");selectee.selected=true;}else{that._removeClass(selectee.$element,"ui-selecting");selectee.selecting=false;if(selectee.startselected){that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=true;}
                    that._trigger("unselecting",event,{unselecting:selectee.element});}}
                    if(selectee.selected){if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){that._removeClass(selectee.$element,"ui-selected");selectee.selected=false;that._addClass(selectee.$element,"ui-unselecting");selectee.unselecting=true;that._trigger("unselecting",event,{unselecting:selectee.element});}}}});return false;},_mouseStop:function(event){var that=this;this.dragged=false;$(".ui-unselecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");that._removeClass(selectee.$element,"ui-unselecting");selectee.unselecting=false;selectee.startselected=false;that._trigger("unselected",event,{unselected:selectee.element});});$(".ui-selecting",this.element[0]).each(function(){var selectee=$.data(this,"selectable-item");that._removeClass(selectee.$element,"ui-selecting")._addClass(selectee.$element,"ui-selected");selectee.selecting=false;selectee.selected=true;selectee.startselected=true;that._trigger("selected",event,{selected:selectee.element});});this._trigger("stop",event);this.helper.remove();return false;}});
    /*!
 * jQuery UI Selectmenu 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var widgetsSelectmenu=$.widget("ui.selectmenu",[$.ui.formResetMixin,{version:"1.13.2",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:false,change:null,close:null,focus:null,open:null,select:null},_create:function(){var selectmenuId=this.element.uniqueId().attr("id");this.ids={element:selectmenuId,button:selectmenuId+"-button",menu:selectmenuId+"-menu"};this._drawButton();this._drawMenu();this._bindFormResetHandler();this._rendered=false;this.menuItems=$();},_drawButton:function(){var icon,that=this,item=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button);this._on(this.labels,{click:function(event){this.button.trigger("focus");event.preventDefault();}});this.element.hide();this.button=$("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element);this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget");icon=$("<span>").appendTo(this.button);this._addClass(icon,"ui-selectmenu-icon","ui-icon "+this.options.icons.button);this.buttonItem=this._renderButtonItem(item).appendTo(this.button);if(this.options.width!==false){this._resizeButton();}
            this._on(this.button,this._buttonEvents);this.button.one("focusin",function(){if(!that._rendered){that._refreshMenu();}});},_drawMenu:function(){var that=this;this.menu=$("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu});this.menuWrap=$("<div>").append(this.menu);this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front");this.menuWrap.appendTo(this._appendTo());this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(event,ui){event.preventDefault();that._setSelection();that._select(ui.item.data("ui-selectmenu-item"),event);},focus:function(event,ui){var item=ui.item.data("ui-selectmenu-item");if(that.focusIndex!=null&&item.index!==that.focusIndex){that._trigger("focus",event,{item:item});if(!that.isOpen){that._select(item,event);}}
                that.focusIndex=item.index;that.button.attr("aria-activedescendant",that.menuItems.eq(item.index).attr("id"));}}).menu("instance");this.menuInstance._off(this.menu,"mouseleave");this.menuInstance._closeOnDocumentClick=function(){return false;};this.menuInstance._isDivider=function(){return false;};},refresh:function(){this._refreshMenu();this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{}));if(this.options.width===null){this._resizeButton();}},_refreshMenu:function(){var item,options=this.element.find("option");this.menu.empty();this._parseOptions(options);this._renderMenu(this.menu,this.items);this.menuInstance.refresh();this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");this._rendered=true;if(!options.length){return;}
            item=this._getSelectedItem();this.menuInstance.focus(null,item);this._setAria(item.data("ui-selectmenu-item"));this._setOption("disabled",this.element.prop("disabled"));},open:function(event){if(this.options.disabled){return;}
            if(!this._rendered){this._refreshMenu();}else{this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active");this.menuInstance.focus(null,this._getSelectedItem());}
            if(!this.menuItems.length){return;}
            this.isOpen=true;this._toggleAttr();this._resizeMenu();this._position();this._on(this.document,this._documentClick);this._trigger("open",event);},_position:function(){this.menuWrap.position($.extend({of:this.button},this.options.position));},close:function(event){if(!this.isOpen){return;}
            this.isOpen=false;this._toggleAttr();this.range=null;this._off(this.document);this._trigger("close",event);},widget:function(){return this.button;},menuWidget:function(){return this.menu;},_renderButtonItem:function(item){var buttonItem=$("<span>");this._setText(buttonItem,item.label);this._addClass(buttonItem,"ui-selectmenu-text");return buttonItem;},_renderMenu:function(ul,items){var that=this,currentOptgroup="";$.each(items,function(index,item){var li;if(item.optgroup!==currentOptgroup){li=$("<li>",{text:item.optgroup});that._addClass(li,"ui-selectmenu-optgroup","ui-menu-divider"+
            (item.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""));li.appendTo(ul);currentOptgroup=item.optgroup;}
            that._renderItemData(ul,item);});},_renderItemData:function(ul,item){return this._renderItem(ul,item).data("ui-selectmenu-item",item);},_renderItem:function(ul,item){var li=$("<li>"),wrapper=$("<div>",{title:item.element.attr("title")});if(item.disabled){this._addClass(li,null,"ui-state-disabled");}
            this._setText(wrapper,item.label);return li.append(wrapper).appendTo(ul);},_setText:function(element,value){if(value){element.text(value);}else{element.html("&#160;");}},_move:function(direction,event){var item,next,filter=".ui-menu-item";if(this.isOpen){item=this.menuItems.eq(this.focusIndex).parent("li");}else{item=this.menuItems.eq(this.element[0].selectedIndex).parent("li");filter+=":not(.ui-state-disabled)";}
            if(direction==="first"||direction==="last"){next=item[direction==="first"?"prevAll":"nextAll"](filter).eq(-1);}else{next=item[direction+"All"](filter).eq(0);}
            if(next.length){this.menuInstance.focus(event,next);}},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li");},_toggle:function(event){this[this.isOpen?"close":"open"](event);},_setSelection:function(){var selection;if(!this.range){return;}
            if(window.getSelection){selection=window.getSelection();selection.removeAllRanges();selection.addRange(this.range);}else{this.range.select();}
            this.button.trigger("focus");},_documentClick:{mousedown:function(event){if(!this.isOpen){return;}
                if(!$(event.target).closest(".ui-selectmenu-menu, #"+
                    $.escapeSelector(this.ids.button)).length){this.close(event);}}},_buttonEvents:{mousedown:function(){var selection;if(window.getSelection){selection=window.getSelection();if(selection.rangeCount){this.range=selection.getRangeAt(0);}}else{this.range=document.selection.createRange();}},click:function(event){this._setSelection();this._toggle(event);},keydown:function(event){var preventDefault=true;switch(event.keyCode){case $.ui.keyCode.TAB:case $.ui.keyCode.ESCAPE:this.close(event);preventDefault=false;break;case $.ui.keyCode.ENTER:if(this.isOpen){this._selectFocusedItem(event);}
                break;case $.ui.keyCode.UP:if(event.altKey){this._toggle(event);}else{this._move("prev",event);}
                break;case $.ui.keyCode.DOWN:if(event.altKey){this._toggle(event);}else{this._move("next",event);}
                break;case $.ui.keyCode.SPACE:if(this.isOpen){this._selectFocusedItem(event);}else{this._toggle(event);}
                break;case $.ui.keyCode.LEFT:this._move("prev",event);break;case $.ui.keyCode.RIGHT:this._move("next",event);break;case $.ui.keyCode.HOME:case $.ui.keyCode.PAGE_UP:this._move("first",event);break;case $.ui.keyCode.END:case $.ui.keyCode.PAGE_DOWN:this._move("last",event);break;default:this.menu.trigger(event);preventDefault=false;}
                if(preventDefault){event.preventDefault();}}},_selectFocusedItem:function(event){var item=this.menuItems.eq(this.focusIndex).parent("li");if(!item.hasClass("ui-state-disabled")){this._select(item.data("ui-selectmenu-item"),event);}},_select:function(item,event){var oldIndex=this.element[0].selectedIndex;this.element[0].selectedIndex=item.index;this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(item));this._setAria(item);this._trigger("select",event,{item:item});if(item.index!==oldIndex){this._trigger("change",event,{item:item});}
            this.close(event);},_setAria:function(item){var id=this.menuItems.eq(item.index).attr("id");this.button.attr({"aria-labelledby":id,"aria-activedescendant":id});this.menu.attr("aria-activedescendant",id);},_setOption:function(key,value){if(key==="icons"){var icon=this.button.find("span.ui-icon");this._removeClass(icon,null,this.options.icons.button)._addClass(icon,null,value.button);}
            this._super(key,value);if(key==="appendTo"){this.menuWrap.appendTo(this._appendTo());}
            if(key==="width"){this._resizeButton();}},_setOptionDisabled:function(value){this._super(value);this.menuInstance.option("disabled",value);this.button.attr("aria-disabled",value);this._toggleClass(this.button,null,"ui-state-disabled",value);this.element.prop("disabled",value);if(value){this.button.attr("tabindex",-1);this.close();}else{this.button.attr("tabindex",0);}},_appendTo:function(){var element=this.options.appendTo;if(element){element=element.jquery||element.nodeType?$(element):this.document.find(element).eq(0);}
            if(!element||!element[0]){element=this.element.closest(".ui-front, dialog");}
            if(!element.length){element=this.document[0].body;}
            return element;},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen);this._removeClass(this.button,"ui-selectmenu-button-"+
            (this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+
            (this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen);this.menu.attr("aria-hidden",!this.isOpen);},_resizeButton:function(){var width=this.options.width;if(width===false){this.button.css("width","");return;}
            if(width===null){width=this.element.show().outerWidth();this.element.hide();}
            this.button.outerWidth(width);},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1));},_getCreateOptions:function(){var options=this._super();options.disabled=this.element.prop("disabled");return options;},_parseOptions:function(options){var that=this,data=[];options.each(function(index,item){if(item.hidden){return;}
            data.push(that._parseOption($(item),index));});this.items=data;},_parseOption:function(option,index){var optgroup=option.parent("optgroup");return{element:option,index:index,value:option.val(),label:option.text(),optgroup:optgroup.attr("label")||"",disabled:optgroup.prop("disabled")||option.prop("disabled")};},_destroy:function(){this._unbindFormResetHandler();this.menuWrap.remove();this.button.remove();this.element.show();this.element.removeUniqueId();this.labels.attr("for",this.ids.element);}}]);
    /*!
 * jQuery UI Slider 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var widgetsSlider=$.widget("ui.slider",$.ui.mouse,{version:"1.13.2",widgetEventPrefix:"slide",options:{animate:false,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this._calculateNewMax();this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content");this._refresh();this._animateOff=false;},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue();},_createHandles:function(){var i,handleCount,options=this.options,existingHandles=this.element.find(".ui-slider-handle"),handle="<span tabindex='0'></span>",handles=[];handleCount=(options.values&&options.values.length)||1;if(existingHandles.length>handleCount){existingHandles.slice(handleCount).remove();existingHandles=existingHandles.slice(0,handleCount);}
            for(i=existingHandles.length;i<handleCount;i++){handles.push(handle);}
            this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));this._addClass(this.handles,"ui-slider-handle","ui-state-default");this.handle=this.handles.eq(0);this.handles.each(function(i){$(this).data("ui-slider-handle-index",i).attr("tabIndex",0);});},_createRange:function(){var options=this.options;if(options.range){if(options.range===true){if(!options.values){options.values=[this._valueMin(),this._valueMin()];}else if(options.values.length&&options.values.length!==2){options.values=[options.values[0],options.values[0]];}else if(Array.isArray(options.values)){options.values=options.values.slice(0);}}
            if(!this.range||!this.range.length){this.range=$("<div>").appendTo(this.element);this._addClass(this.range,"ui-slider-range");}else{this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max");this.range.css({"left":"","bottom":""});}
            if(options.range==="min"||options.range==="max"){this._addClass(this.range,"ui-slider-range-"+options.range);}}else{if(this.range){this.range.remove();}
            this.range=null;}},_setupEvents:function(){this._off(this.handles);this._on(this.handles,this._handleEvents);this._hoverable(this.handles);this._focusable(this.handles);},_destroy:function(){this.handles.remove();if(this.range){this.range.remove();}
            this._mouseDestroy();},_mouseCapture:function(event){var position,normValue,distance,closestHandle,index,allowed,offset,mouseOverHandle,that=this,o=this.options;if(o.disabled){return false;}
            this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();position={x:event.pageX,y:event.pageY};normValue=this._normValueFromMouse(position);distance=this._valueMax()-this._valueMin()+1;this.handles.each(function(i){var thisDistance=Math.abs(normValue-that.values(i));if((distance>thisDistance)||(distance===thisDistance&&(i===that._lastChangedValue||that.values(i)===o.min))){distance=thisDistance;closestHandle=$(this);index=i;}});allowed=this._start(event,index);if(allowed===false){return false;}
            this._mouseSliding=true;this._handleIndex=index;this._addClass(closestHandle,null,"ui-state-active");closestHandle.trigger("focus");offset=closestHandle.offset();mouseOverHandle=!$(event.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=mouseOverHandle?{left:0,top:0}:{left:event.pageX-offset.left-(closestHandle.width()/2),top:event.pageY-offset.top-
                    (closestHandle.height()/2)-
                    (parseInt(closestHandle.css("borderTopWidth"),10)||0)-
                    (parseInt(closestHandle.css("borderBottomWidth"),10)||0)+
                    (parseInt(closestHandle.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(event,index,normValue);}
            this._animateOff=true;return true;},_mouseStart:function(){return true;},_mouseDrag:function(event){var position={x:event.pageX,y:event.pageY},normValue=this._normValueFromMouse(position);this._slide(event,this._handleIndex,normValue);return false;},_mouseStop:function(event){this._removeClass(this.handles,null,"ui-state-active");this._mouseSliding=false;this._stop(event,this._handleIndex);this._change(event,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false;},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal";},_normValueFromMouse:function(position){var pixelTotal,pixelMouse,percentMouse,valueTotal,valueMouse;if(this.orientation==="horizontal"){pixelTotal=this.elementSize.width;pixelMouse=position.x-this.elementOffset.left-
            (this._clickOffset?this._clickOffset.left:0);}else{pixelTotal=this.elementSize.height;pixelMouse=position.y-this.elementOffset.top-
            (this._clickOffset?this._clickOffset.top:0);}
            percentMouse=(pixelMouse/pixelTotal);if(percentMouse>1){percentMouse=1;}
            if(percentMouse<0){percentMouse=0;}
            if(this.orientation==="vertical"){percentMouse=1-percentMouse;}
            valueTotal=this._valueMax()-this._valueMin();valueMouse=this._valueMin()+percentMouse*valueTotal;return this._trimAlignValue(valueMouse);},_uiHash:function(index,value,values){var uiHash={handle:this.handles[index],handleIndex:index,value:value!==undefined?value:this.value()};if(this._hasMultipleValues()){uiHash.value=value!==undefined?value:this.values(index);uiHash.values=values||this.values();}
            return uiHash;},_hasMultipleValues:function(){return this.options.values&&this.options.values.length;},_start:function(event,index){return this._trigger("start",event,this._uiHash(index));},_slide:function(event,index,newVal){var allowed,otherVal,currentValue=this.value(),newValues=this.values();if(this._hasMultipleValues()){otherVal=this.values(index?0:1);currentValue=this.values(index);if(this.options.values.length===2&&this.options.range===true){newVal=index===0?Math.min(otherVal,newVal):Math.max(otherVal,newVal);}
            newValues[index]=newVal;}
            if(newVal===currentValue){return;}
            allowed=this._trigger("slide",event,this._uiHash(index,newVal,newValues));if(allowed===false){return;}
            if(this._hasMultipleValues()){this.values(index,newVal);}else{this.value(newVal);}},_stop:function(event,index){this._trigger("stop",event,this._uiHash(index));},_change:function(event,index){if(!this._keySliding&&!this._mouseSliding){this._lastChangedValue=index;this._trigger("change",event,this._uiHash(index));}},value:function(newValue){if(arguments.length){this.options.value=this._trimAlignValue(newValue);this._refreshValue();this._change(null,0);return;}
            return this._value();},values:function(index,newValue){var vals,newValues,i;if(arguments.length>1){this.options.values[index]=this._trimAlignValue(newValue);this._refreshValue();this._change(null,index);return;}
            if(arguments.length){if(Array.isArray(arguments[0])){vals=this.options.values;newValues=arguments[0];for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(newValues[i]);this._change(null,i);}
                this._refreshValue();}else{if(this._hasMultipleValues()){return this._values(index);}else{return this.value();}}}else{return this._values();}},_setOption:function(key,value){var i,valsLength=0;if(key==="range"&&this.options.range===true){if(value==="min"){this.options.value=this._values(0);this.options.values=null;}else if(value==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null;}}
            if(Array.isArray(this.options.values)){valsLength=this.options.values.length;}
            this._super(key,value);switch(key){case"orientation":this._detectOrientation();this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation);this._refreshValue();if(this.options.range){this._refreshRange(value);}
                this.handles.css(value==="horizontal"?"bottom":"left","");break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(i=valsLength-1;i>=0;i--){this._change(null,i);}
                this._animateOff=false;break;case"step":case"min":case"max":this._animateOff=true;this._calculateNewMax();this._refreshValue();this._animateOff=false;break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break;}},_setOptionDisabled:function(value){this._super(value);this._toggleClass(null,"ui-state-disabled",!!value);},_value:function(){var val=this.options.value;val=this._trimAlignValue(val);return val;},_values:function(index){var val,vals,i;if(arguments.length){val=this.options.values[index];val=this._trimAlignValue(val);return val;}else if(this._hasMultipleValues()){vals=this.options.values.slice();for(i=0;i<vals.length;i+=1){vals[i]=this._trimAlignValue(vals[i]);}
            return vals;}else{return[];}},_trimAlignValue:function(val){if(val<=this._valueMin()){return this._valueMin();}
            if(val>=this._valueMax()){return this._valueMax();}
            var step=(this.options.step>0)?this.options.step:1,valModStep=(val-this._valueMin())%step,alignValue=val-valModStep;if(Math.abs(valModStep)*2>=step){alignValue+=(valModStep>0)?step:(-step);}
            return parseFloat(alignValue.toFixed(5));},_calculateNewMax:function(){var max=this.options.max,min=this._valueMin(),step=this.options.step,aboveMin=Math.round((max-min)/step)*step;max=aboveMin+min;if(max>this.options.max){max-=step;}
            this.max=parseFloat(max.toFixed(this._precision()));},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min));}
            return precision;},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1;},_valueMin:function(){return this.options.min;},_valueMax:function(){return this.max;},_refreshRange:function(orientation){if(orientation==="vertical"){this.range.css({"width":"","left":""});}
            if(orientation==="horizontal"){this.range.css({"height":"","bottom":""});}},_refreshValue:function(){var lastValPercent,valPercent,value,valueMin,valueMax,oRange=this.options.range,o=this.options,that=this,animate=(!this._animateOff)?o.animate:false,_set={};if(this._hasMultipleValues()){this.handles.each(function(i){valPercent=(that.values(i)-that._valueMin())/(that._valueMax()-
            that._valueMin())*100;_set[that.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);if(that.options.range===true){if(that.orientation==="horizontal"){if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate);}
            if(i===1){that.range[animate?"animate":"css"]({width:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}else{if(i===0){that.range.stop(1,1)[animate?"animate":"css"]({bottom:(valPercent)+"%"},o.animate);}
            if(i===1){that.range[animate?"animate":"css"]({height:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});}}}
            lastValPercent=valPercent;});}else{value=this.value();valueMin=this._valueMin();valueMax=this._valueMax();valPercent=(valueMax!==valueMin)?(value-valueMin)/(valueMax-valueMin)*100:0;_set[this.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);if(oRange==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate);}
            if(oRange==="max"&&this.orientation==="horizontal"){this.range.stop(1,1)[animate?"animate":"css"]({width:(100-valPercent)+"%"},o.animate);}
            if(oRange==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate);}
            if(oRange==="max"&&this.orientation==="vertical"){this.range.stop(1,1)[animate?"animate":"css"]({height:(100-valPercent)+"%"},o.animate);}}},_handleEvents:{keydown:function(event){var allowed,curVal,newVal,step,index=$(event.target).data("ui-slider-handle-index");switch(event.keyCode){case $.ui.keyCode.HOME:case $.ui.keyCode.END:case $.ui.keyCode.PAGE_UP:case $.ui.keyCode.PAGE_DOWN:case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:event.preventDefault();if(!this._keySliding){this._keySliding=true;this._addClass($(event.target),null,"ui-state-active");allowed=this._start(event,index);if(allowed===false){return;}}
                break;}
                step=this.options.step;if(this._hasMultipleValues()){curVal=newVal=this.values(index);}else{curVal=newVal=this.value();}
                switch(event.keyCode){case $.ui.keyCode.HOME:newVal=this._valueMin();break;case $.ui.keyCode.END:newVal=this._valueMax();break;case $.ui.keyCode.PAGE_UP:newVal=this._trimAlignValue(curVal+((this._valueMax()-this._valueMin())/this.numPages));break;case $.ui.keyCode.PAGE_DOWN:newVal=this._trimAlignValue(curVal-((this._valueMax()-this._valueMin())/this.numPages));break;case $.ui.keyCode.UP:case $.ui.keyCode.RIGHT:if(curVal===this._valueMax()){return;}
                    newVal=this._trimAlignValue(curVal+step);break;case $.ui.keyCode.DOWN:case $.ui.keyCode.LEFT:if(curVal===this._valueMin()){return;}
                    newVal=this._trimAlignValue(curVal-step);break;}
                this._slide(event,index,newVal);},keyup:function(event){var index=$(event.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(event,index);this._change(event,index);this._removeClass($(event.target),null,"ui-state-active");}}}});
    /*!
 * jQuery UI Sortable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var widgetsSortable=$.widget("ui.sortable",$.ui.mouse,{version:"1.13.2",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(x,reference,size){return(x>=reference)&&(x<(reference+size));},_isFloating:function(item){return(/left|right/).test(item.css("float"))||(/inline|table-cell/).test(item.css("display"));},_create:function(){this.containerCache={};this._addClass("ui-sortable");this.refresh();this.offset=this.element.offset();this._mouseInit();this._setHandleClassName();this.ready=true;},_setOption:function(key,value){this._super(key,value);if(key==="handle"){this._setHandleClassName();}},_setHandleClassName:function(){var that=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle");$.each(this.items,function(){that._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle");});},_destroy:function(){this._mouseDestroy();for(var i=this.items.length-1;i>=0;i--){this.items[i].item.removeData(this.widgetName+"-item");}
            return this;},_mouseCapture:function(event,overrideHandle){var currentItem=null,validHandle=false,that=this;if(this.reverting){return false;}
            if(this.options.disabled||this.options.type==="static"){return false;}
            this._refreshItems(event);$(event.target).parents().each(function(){if($.data(this,that.widgetName+"-item")===that){currentItem=$(this);return false;}});if($.data(event.target,that.widgetName+"-item")===that){currentItem=$(event.target);}
            if(!currentItem){return false;}
            if(this.options.handle&&!overrideHandle){$(this.options.handle,currentItem).find("*").addBack().each(function(){if(this===event.target){validHandle=true;}});if(!validHandle){return false;}}
            this.currentItem=currentItem;this._removeCurrentsFromItems();return true;},_mouseStart:function(event,overrideHandle,noActivation){var i,body,o=this.options;this.currentContainer=this;this.refreshPositions();this.appendTo=$(o.appendTo!=="parent"?o.appendTo:this.currentItem.parent());this.helper=this._createHelper(event);this._cacheHelperProportions();this._cacheMargins();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};$.extend(this.offset,{click:{left:event.pageX-this.offset.left,top:event.pageY-this.offset.top},relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");if(o.cursorAt){this._adjustOffsetFromHelper(o.cursorAt);}
            this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide();}
            this._createPlaceholder();this.scrollParent=this.placeholder.scrollParent();$.extend(this.offset,{parent:this._getParentOffset()});if(o.containment){this._setContainment();}
            if(o.cursor&&o.cursor!=="auto"){body=this.document.find("body");this.storedCursor=body.css("cursor");body.css("cursor",o.cursor);this.storedStylesheet=$("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(body);}
            if(o.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex");}
                this.helper.css("zIndex",o.zIndex);}
            if(o.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity");}
                this.helper.css("opacity",o.opacity);}
            if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset();}
            this._trigger("start",event,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions();}
            if(!noActivation){for(i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,this._uiHash(this));}}
            if($.ui.ddmanager){$.ui.ddmanager.current=this;}
            if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}
            this.dragging=true;this._addClass(this.helper,"ui-sortable-helper");if(!this.helper.parent().is(this.appendTo)){this.helper.detach().appendTo(this.appendTo);this.offset.parent=this._getParentOffset();}
            this.position=this.originalPosition=this._generatePosition(event);this.originalPageX=event.pageX;this.originalPageY=event.pageY;this.lastPositionAbs=this.positionAbs=this._convertPositionTo("absolute");this._mouseDrag(event);return true;},_scroll:function(event){var o=this.options,scrolled=false;if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-
            event.pageY<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;}else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity){this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;}
            if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-
                event.pageX<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;}else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity){this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;}}else{if(event.pageY-this.document.scrollTop()<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed);}else if(this.window.height()-(event.pageY-this.document.scrollTop())<o.scrollSensitivity){scrolled=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed);}
            if(event.pageX-this.document.scrollLeft()<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed);}else if(this.window.width()-(event.pageX-this.document.scrollLeft())<o.scrollSensitivity){scrolled=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed);}}
            return scrolled;},_mouseDrag:function(event){var i,item,itemElement,intersection,o=this.options;this.position=this._generatePosition(event);this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px";}
            if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px";}
            if(o.scroll){if(this._scroll(event)!==false){this._refreshItemPositions(true);if($.ui.ddmanager&&!o.dropBehaviour){$.ui.ddmanager.prepareOffsets(this,event);}}}
            this.dragDirection={vertical:this._getDragVerticalDirection(),horizontal:this._getDragHorizontalDirection()};for(i=this.items.length-1;i>=0;i--){item=this.items[i];itemElement=item.item[0];intersection=this._intersectsWithPointer(item);if(!intersection){continue;}
                if(item.instance!==this.currentContainer){continue;}
                if(itemElement!==this.currentItem[0]&&this.placeholder[intersection===1?"next":"prev"]()[0]!==itemElement&&!$.contains(this.placeholder[0],itemElement)&&(this.options.type==="semi-dynamic"?!$.contains(this.element[0],itemElement):true)){this.direction=intersection===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){this._rearrange(event,item);}else{break;}
                    this._trigger("change",event,this._uiHash());break;}}
            this._contactContainers(event);if($.ui.ddmanager){$.ui.ddmanager.drag(this,event);}
            this._trigger("sort",event,this._uiHash());this.lastPositionAbs=this.positionAbs;return false;},_mouseStop:function(event,noPropagation){if(!event){return;}
            if($.ui.ddmanager&&!this.options.dropBehaviour){$.ui.ddmanager.drop(this,event);}
            if(this.options.revert){var that=this,cur=this.placeholder.offset(),axis=this.options.axis,animation={};if(!axis||axis==="x"){animation.left=cur.left-this.offset.parent.left-this.margins.left+
                (this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft);}
                if(!axis||axis==="y"){animation.top=cur.top-this.offset.parent.top-this.margins.top+
                    (this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop);}
                this.reverting=true;$(this.helper).animate(animation,parseInt(this.options.revert,10)||500,function(){that._clear(event);});}else{this._clear(event,noPropagation);}
            return false;},cancel:function(){if(this.dragging){this._mouseUp(new $.Event("mouseup",{target:null}));if(this.options.helper==="original"){this.currentItem.css(this._storedCSS);this._removeClass(this.currentItem,"ui-sortable-helper");}else{this.currentItem.show();}
            for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("deactivate",null,this._uiHash(this));if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",null,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
            if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0]);}
                if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove();}
                $.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){$(this.domPosition.prev).after(this.currentItem);}else{$(this.domPosition.parent).prepend(this.currentItem);}}
            return this;},serialize:function(o){var items=this._getItemsAsjQuery(o&&o.connected),str=[];o=o||{};$(items).each(function(){var res=($(o.item||this).attr(o.attribute||"id")||"").match(o.expression||(/(.+)[\-=_](.+)/));if(res){str.push((o.key||res[1]+"[]")+"="+(o.key&&o.expression?res[1]:res[2]));}});if(!str.length&&o.key){str.push(o.key+"=");}
            return str.join("&");},toArray:function(o){var items=this._getItemsAsjQuery(o&&o.connected),ret=[];o=o||{};items.each(function(){ret.push($(o.item||this).attr(o.attribute||"id")||"");});return ret;},_intersectsWith:function(item){var x1=this.positionAbs.left,x2=x1+this.helperProportions.width,y1=this.positionAbs.top,y2=y1+this.helperProportions.height,l=item.left,r=l+item.width,t=item.top,b=t+item.height,dyClick=this.offset.click.top,dxClick=this.offset.click.left,isOverElementHeight=(this.options.axis==="x")||((y1+dyClick)>t&&(y1+dyClick)<b),isOverElementWidth=(this.options.axis==="y")||((x1+dxClick)>l&&(x1+dxClick)<r),isOverElement=isOverElementHeight&&isOverElementWidth;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>item[this.floating?"width":"height"])){return isOverElement;}else{return(l<x1+(this.helperProportions.width/2)&&x2-(this.helperProportions.width/2)<r&&t<y1+(this.helperProportions.height/2)&&y2-(this.helperProportions.height/2)<b);}},_intersectsWithPointer:function(item){var verticalDirection,horizontalDirection,isOverElementHeight=(this.options.axis==="x")||this._isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),isOverElementWidth=(this.options.axis==="y")||this._isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),isOverElement=isOverElementHeight&&isOverElementWidth;if(!isOverElement){return false;}
            verticalDirection=this.dragDirection.vertical;horizontalDirection=this.dragDirection.horizontal;return this.floating?((horizontalDirection==="right"||verticalDirection==="down")?2:1):(verticalDirection&&(verticalDirection==="down"?2:1));},_intersectsWithSides:function(item){var isOverBottomHalf=this._isOverAxis(this.positionAbs.top+
            this.offset.click.top,item.top+(item.height/2),item.height),isOverRightHalf=this._isOverAxis(this.positionAbs.left+
            this.offset.click.left,item.left+(item.width/2),item.width),verticalDirection=this.dragDirection.vertical,horizontalDirection=this.dragDirection.horizontal;if(this.floating&&horizontalDirection){return((horizontalDirection==="right"&&isOverRightHalf)||(horizontalDirection==="left"&&!isOverRightHalf));}else{return verticalDirection&&((verticalDirection==="down"&&isOverBottomHalf)||(verticalDirection==="up"&&!isOverBottomHalf));}},_getDragVerticalDirection:function(){var delta=this.positionAbs.top-this.lastPositionAbs.top;return delta!==0&&(delta>0?"down":"up");},_getDragHorizontalDirection:function(){var delta=this.positionAbs.left-this.lastPositionAbs.left;return delta!==0&&(delta>0?"right":"left");},refresh:function(event){this._refreshItems(event);this._setHandleClassName();this.refreshPositions();return this;},_connectWith:function(){var options=this.options;return options.connectWith.constructor===String?[options.connectWith]:options.connectWith;},_getItemsAsjQuery:function(connected){var i,j,cur,inst,items=[],queries=[],connectWith=this._connectWith();if(connectWith&&connected){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([typeof inst.options.items==="function"?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),inst]);}}}}
            queries.push([typeof this.options.items==="function"?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);function addItems(){items.push(this);}
            for(i=queries.length-1;i>=0;i--){queries[i][0].each(addItems);}
            return $(items);},_removeCurrentsFromItems:function(){var list=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=$.grep(this.items,function(item){for(var j=0;j<list.length;j++){if(list[j]===item.item[0]){return false;}}
            return true;});},_refreshItems:function(event){this.items=[];this.containers=[this];var i,j,cur,inst,targetData,_queries,item,queriesLength,items=this.items,queries=[[typeof this.options.items==="function"?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]],connectWith=this._connectWith();if(connectWith&&this.ready){for(i=connectWith.length-1;i>=0;i--){cur=$(connectWith[i],this.document[0]);for(j=cur.length-1;j>=0;j--){inst=$.data(cur[j],this.widgetFullName);if(inst&&inst!==this&&!inst.options.disabled){queries.push([typeof inst.options.items==="function"?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);this.containers.push(inst);}}}}
            for(i=queries.length-1;i>=0;i--){targetData=queries[i][1];_queries=queries[i][0];for(j=0,queriesLength=_queries.length;j<queriesLength;j++){item=$(_queries[j]);item.data(this.widgetName+"-item",targetData);items.push({item:item,instance:targetData,width:0,height:0,left:0,top:0});}}},_refreshItemPositions:function(fast){var i,item,t,p;for(i=this.items.length-1;i>=0;i--){item=this.items[i];if(this.currentContainer&&item.instance!==this.currentContainer&&item.item[0]!==this.currentItem[0]){continue;}
            t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;if(!fast){item.width=t.outerWidth();item.height=t.outerHeight();}
            p=t.offset();item.left=p.left;item.top=p.top;}},refreshPositions:function(fast){this.floating=this.items.length?this.options.axis==="x"||this._isFloating(this.items[0].item):false;if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset();}
            this._refreshItemPositions(fast);var i,p;if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this);}else{for(i=this.containers.length-1;i>=0;i--){p=this.containers[i].element.offset();this.containers[i].containerCache.left=p.left;this.containers[i].containerCache.top=p.top;this.containers[i].containerCache.width=this.containers[i].element.outerWidth();this.containers[i].containerCache.height=this.containers[i].element.outerHeight();}}
            return this;},_createPlaceholder:function(that){that=that||this;var className,nodeName,o=that.options;if(!o.placeholder||o.placeholder.constructor===String){className=o.placeholder;nodeName=that.currentItem[0].nodeName.toLowerCase();o.placeholder={element:function(){var element=$("<"+nodeName+">",that.document[0]);that._addClass(element,"ui-sortable-placeholder",className||that.currentItem[0].className)._removeClass(element,"ui-sortable-helper");if(nodeName==="tbody"){that._createTrPlaceholder(that.currentItem.find("tr").eq(0),$("<tr>",that.document[0]).appendTo(element));}else if(nodeName==="tr"){that._createTrPlaceholder(that.currentItem,element);}else if(nodeName==="img"){element.attr("src",that.currentItem.attr("src"));}
                if(!className){element.css("visibility","hidden");}
                return element;},update:function(container,p){if(className&&!o.forcePlaceholderSize){return;}
                if(!p.height()||(o.forcePlaceholderSize&&(nodeName==="tbody"||nodeName==="tr"))){p.height(that.currentItem.innerHeight()-
                    parseInt(that.currentItem.css("paddingTop")||0,10)-
                    parseInt(that.currentItem.css("paddingBottom")||0,10));}
                if(!p.width()){p.width(that.currentItem.innerWidth()-
                    parseInt(that.currentItem.css("paddingLeft")||0,10)-
                    parseInt(that.currentItem.css("paddingRight")||0,10));}}};}
            that.placeholder=$(o.placeholder.element.call(that.element,that.currentItem));that.currentItem.after(that.placeholder);o.placeholder.update(that,that.placeholder);},_createTrPlaceholder:function(sourceTr,targetTr){var that=this;sourceTr.children().each(function(){$("<td>&#160;</td>",that.document[0]).attr("colspan",$(this).attr("colspan")||1).appendTo(targetTr);});},_contactContainers:function(event){var i,j,dist,itemWithLeastDistance,posProperty,sizeProperty,cur,nearBottom,floating,axis,innermostContainer=null,innermostIndex=null;for(i=this.containers.length-1;i>=0;i--){if($.contains(this.currentItem[0],this.containers[i].element[0])){continue;}
            if(this._intersectsWith(this.containers[i].containerCache)){if(innermostContainer&&$.contains(this.containers[i].element[0],innermostContainer.element[0])){continue;}
                innermostContainer=this.containers[i];innermostIndex=i;}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",event,this._uiHash(this));this.containers[i].containerCache.over=0;}}}
            if(!innermostContainer){return;}
            if(this.containers.length===1){if(!this.containers[innermostIndex].containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}}else{dist=10000;itemWithLeastDistance=null;floating=innermostContainer.floating||this._isFloating(this.currentItem);posProperty=floating?"left":"top";sizeProperty=floating?"width":"height";axis=floating?"pageX":"pageY";for(j=this.items.length-1;j>=0;j--){if(!$.contains(this.containers[innermostIndex].element[0],this.items[j].item[0])){continue;}
                if(this.items[j].item[0]===this.currentItem[0]){continue;}
                cur=this.items[j].item.offset()[posProperty];nearBottom=false;if(event[axis]-cur>this.items[j][sizeProperty]/2){nearBottom=true;}
                if(Math.abs(event[axis]-cur)<dist){dist=Math.abs(event[axis]-cur);itemWithLeastDistance=this.items[j];this.direction=nearBottom?"up":"down";}}
                if(!itemWithLeastDistance&&!this.options.dropOnEmpty){return;}
                if(this.currentContainer===this.containers[innermostIndex]){if(!this.currentContainer.containerCache.over){this.containers[innermostIndex]._trigger("over",event,this._uiHash());this.currentContainer.containerCache.over=1;}
                    return;}
                if(itemWithLeastDistance){this._rearrange(event,itemWithLeastDistance,null,true);}else{this._rearrange(event,null,this.containers[innermostIndex].element,true);}
                this._trigger("change",event,this._uiHash());this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));this.currentContainer=this.containers[innermostIndex];this.options.placeholder.update(this.currentContainer,this.placeholder);this.scrollParent=this.placeholder.scrollParent();if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset();}
                this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));this.containers[innermostIndex].containerCache.over=1;}},_createHelper:function(event){var o=this.options,helper=typeof o.helper==="function"?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper==="clone"?this.currentItem.clone():this.currentItem);if(!helper.parents("body").length){this.appendTo[0].appendChild(helper[0]);}
            if(helper[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};}
            if(!helper[0].style.width||o.forceHelperSize){helper.width(this.currentItem.width());}
            if(!helper[0].style.height||o.forceHelperSize){helper.height(this.currentItem.height());}
            return helper;},_adjustOffsetFromHelper:function(obj){if(typeof obj==="string"){obj=obj.split(" ");}
            if(Array.isArray(obj)){obj={left:+obj[0],top:+obj[1]||0};}
            if("left"in obj){this.offset.click.left=obj.left+this.margins.left;}
            if("right"in obj){this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;}
            if("top"in obj){this.offset.click.top=obj.top+this.margins.top;}
            if("bottom"in obj){this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var po=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0])){po.left+=this.scrollParent.scrollLeft();po.top+=this.scrollParent.scrollTop();}
            if(this.offsetParent[0]===this.document[0].body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&$.ui.ie)){po={top:0,left:0};}
            return{top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var p=this.currentItem.position();return{top:p.top-(parseInt(this.helper.css("top"),10)||0)+
                this.scrollParent.scrollTop(),left:p.left-(parseInt(this.helper.css("left"),10)||0)+
                this.scrollParent.scrollLeft()};}else{return{top:0,left:0};}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)};},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};},_setContainment:function(){var ce,co,over,o=this.options;if(o.containment==="parent"){o.containment=this.helper[0].parentNode;}
            if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,o.containment==="document"?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,(o.containment==="document"?(this.document.height()||document.body.parentNode.scrollHeight):this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];}
            if(!(/^(document|window|parent)$/).test(o.containment)){ce=$(o.containment)[0];co=$(o.containment).offset();over=($(ce).css("overflow")!=="hidden");this.containment=[co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+
            (parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+
            (parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-
            (parseInt($(ce).css("borderLeftWidth"),10)||0)-
            (parseInt($(ce).css("paddingRight"),10)||0)-
            this.helperProportions.width-this.margins.left,co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-
            (parseInt($(ce).css("borderTopWidth"),10)||0)-
            (parseInt($(ce).css("paddingBottom"),10)||0)-
            this.helperProportions.height-this.margins.top];}},_convertPositionTo:function(d,pos){if(!pos){pos=this.position;}
            var mod=d==="absolute"?1:-1,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);return{top:(pos.top+
                    this.offset.relative.top*mod+
                    this.offset.parent.top*mod-
                    ((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)),left:(pos.left+
                    this.offset.relative.left*mod+
                    this.offset.parent.left*mod-
                    ((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod))};},_generatePosition:function(event){var top,left,o=this.options,pageX=event.pageX,pageY=event.pageY,scroll=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&$.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset();}
            if(this.originalPosition){if(this.containment){if(event.pageX-this.offset.click.left<this.containment[0]){pageX=this.containment[0]+this.offset.click.left;}
                if(event.pageY-this.offset.click.top<this.containment[1]){pageY=this.containment[1]+this.offset.click.top;}
                if(event.pageX-this.offset.click.left>this.containment[2]){pageX=this.containment[2]+this.offset.click.left;}
                if(event.pageY-this.offset.click.top>this.containment[3]){pageY=this.containment[3]+this.offset.click.top;}}
                if(o.grid){top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];pageY=this.containment?((top-this.offset.click.top>=this.containment[1]&&top-this.offset.click.top<=this.containment[3])?top:((top-this.offset.click.top>=this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];pageX=this.containment?((left-this.offset.click.left>=this.containment[0]&&left-this.offset.click.left<=this.containment[2])?left:((left-this.offset.click.left>=this.containment[0])?left-o.grid[0]:left+o.grid[0])):left;}}
            return{top:(pageY-
                    this.offset.click.top-
                    this.offset.relative.top-
                    this.offset.parent.top+
                    ((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))),left:(pageX-
                    this.offset.click.left-
                    this.offset.relative.left-
                    this.offset.parent.left+
                    ((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())))};},_rearrange:function(event,i,a,hardRefresh){if(a){a[0].appendChild(this.placeholder[0]);}else{i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?i.item[0]:i.item[0].nextSibling));}
            this.counter=this.counter?++this.counter:1;var counter=this.counter;this._delay(function(){if(counter===this.counter){this.refreshPositions(!hardRefresh);}});},_clear:function(event,noPropagation){this.reverting=false;var i,delayedTriggers=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem);}
            this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(i in this._storedCSS){if(this._storedCSS[i]==="auto"||this._storedCSS[i]==="static"){this._storedCSS[i]="";}}
                this.currentItem.css(this._storedCSS);this._removeClass(this.currentItem,"ui-sortable-helper");}else{this.currentItem.show();}
            if(this.fromOutside&&!noPropagation){delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});}
            if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!noPropagation){delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});}
            if(this!==this.currentContainer){if(!noPropagation){delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}).call(this,this.currentContainer));delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}).call(this,this.currentContainer));}}
            function delayEvent(type,instance,container){return function(event){container._trigger(type,event,instance._uiHash(instance));};}
            for(i=this.containers.length-1;i>=0;i--){if(!noPropagation){delayedTriggers.push(delayEvent("deactivate",this,this.containers[i]));}
                if(this.containers[i].containerCache.over){delayedTriggers.push(delayEvent("out",this,this.containers[i]));this.containers[i].containerCache.over=0;}}
            if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove();}
            if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity);}
            if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex);}
            this.dragging=false;if(!noPropagation){this._trigger("beforeStop",event,this._uiHash());}
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(!this.cancelHelperRemoval){if(this.helper[0]!==this.currentItem[0]){this.helper.remove();}
                this.helper=null;}
            if(!noPropagation){for(i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);}
                this._trigger("stop",event,this._uiHash());}
            this.fromOutside=false;return!this.cancelHelperRemoval;},_trigger:function(){if($.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel();}},_uiHash:function(_inst){var inst=_inst||this;return{helper:inst.helper,placeholder:inst.placeholder||$([]),position:inst.position,originalPosition:inst.originalPosition,offset:inst.positionAbs,item:inst.currentItem,sender:_inst?_inst.element:null};}});
    /*!
 * jQuery UI Spinner 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    function spinnerModifier(fn){return function(){var previous=this.element.val();fn.apply(this,arguments);this._refresh();if(previous!==this.element.val()){this._trigger("change");}};}
    $.widget("ui.spinner",{version:"1.13.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);if(this.value()!==""){this._value(this.element.val(),true);}
            this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete");}});},_getCreateOptions:function(){var options=this._super();var element=this.element;$.each(["min","max","step"],function(i,option){var value=element.attr(option);if(value!=null&&value.length){options[option]=value;}});return options;},_events:{keydown:function(event){if(this._start(event)&&this._keydown(event)){event.preventDefault();}},keyup:"_stop",focus:function(){this.previous=this.element.val();},blur:function(event){if(this.cancelBlur){delete this.cancelBlur;return;}
                this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",event);}},mousewheel:function(event,delta){var activeElement=$.ui.safeActiveElement(this.document[0]);var isActive=this.element[0]===activeElement;if(!isActive||!delta){return;}
                if(!this.spinning&&!this._start(event)){return false;}
                this._spin((delta>0?1:-1)*this.options.step,event);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(event);}},100);event.preventDefault();},"mousedown .ui-spinner-button":function(event){var previous;previous=this.element[0]===$.ui.safeActiveElement(this.document[0])?this.previous:this.element.val();function checkFocus(){var isActive=this.element[0]===$.ui.safeActiveElement(this.document[0]);if(!isActive){this.element.trigger("focus");this.previous=previous;this._delay(function(){this.previous=previous;});}}
                event.preventDefault();checkFocus.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;checkFocus.call(this);});if(this._start(event)===false){return;}
                this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(event){if(!$(event.currentTarget).hasClass("ui-state-active")){return;}
                if(this._start(event)===false){return false;}
                this._repeat(null,$(event.currentTarget).hasClass("ui-spinner-up")?1:-1,event);},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>");},_draw:function(){this._enhance();this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content");this._addClass("ui-spinner-input");this.element.attr("role","spinbutton");this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",true).button({classes:{"ui-button":""}});this._removeClass(this.buttons,"ui-corner-all");this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up");this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down");this.buttons.first().button({"icon":this.options.icons.up,"showLabel":false});this.buttons.last().button({"icon":this.options.icons.down,"showLabel":false});if(this.buttons.height()>Math.ceil(this.uiSpinner.height()*0.5)&&this.uiSpinner.height()>0){this.uiSpinner.height(this.uiSpinner.height());}},_keydown:function(event){var options=this.options,keyCode=$.ui.keyCode;switch(event.keyCode){case keyCode.UP:this._repeat(null,1,event);return true;case keyCode.DOWN:this._repeat(null,-1,event);return true;case keyCode.PAGE_UP:this._repeat(null,options.page,event);return true;case keyCode.PAGE_DOWN:this._repeat(null,-options.page,event);return true;}
            return false;},_start:function(event){if(!this.spinning&&this._trigger("start",event)===false){return false;}
            if(!this.counter){this.counter=1;}
            this.spinning=true;return true;},_repeat:function(i,steps,event){i=i||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,steps,event);},i);this._spin(steps*this.options.step,event);},_spin:function(step,event){var value=this.value()||0;if(!this.counter){this.counter=1;}
            value=this._adjustValue(value+step*this._increment(this.counter));if(!this.spinning||this._trigger("spin",event,{value:value})!==false){this._value(value);this.counter++;}},_increment:function(i){var incremental=this.options.incremental;if(incremental){return typeof incremental==="function"?incremental(i):Math.floor(i*i*i/50000-i*i/500+17*i/200+1);}
            return 1;},_precision:function(){var precision=this._precisionOf(this.options.step);if(this.options.min!==null){precision=Math.max(precision,this._precisionOf(this.options.min));}
            return precision;},_precisionOf:function(num){var str=num.toString(),decimal=str.indexOf(".");return decimal===-1?0:str.length-decimal-1;},_adjustValue:function(value){var base,aboveMin,options=this.options;base=options.min!==null?options.min:0;aboveMin=value-base;aboveMin=Math.round(aboveMin/options.step)*options.step;value=base+aboveMin;value=parseFloat(value.toFixed(this._precision()));if(options.max!==null&&value>options.max){return options.max;}
            if(options.min!==null&&value<options.min){return options.min;}
            return value;},_stop:function(event){if(!this.spinning){return;}
            clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",event);},_setOption:function(key,value){var prevValue,first,last;if(key==="culture"||key==="numberFormat"){prevValue=this._parse(this.element.val());this.options[key]=value;this.element.val(this._format(prevValue));return;}
            if(key==="max"||key==="min"||key==="step"){if(typeof value==="string"){value=this._parse(value);}}
            if(key==="icons"){first=this.buttons.first().find(".ui-icon");this._removeClass(first,null,this.options.icons.up);this._addClass(first,null,value.up);last=this.buttons.last().find(".ui-icon");this._removeClass(last,null,this.options.icons.down);this._addClass(last,null,value.down);}
            this._super(key,value);},_setOptionDisabled:function(value){this._super(value);this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!value);this.element.prop("disabled",!!value);this.buttons.button(value?"disable":"enable");},_setOptions:spinnerModifier(function(options){this._super(options);}),_parse:function(val){if(typeof val==="string"&&val!==""){val=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(val,10,this.options.culture):+val;}
            return val===""||isNaN(val)?null:val;},_format:function(value){if(value===""){return"";}
            return window.Globalize&&this.options.numberFormat?Globalize.format(value,this.options.numberFormat,this.options.culture):value;},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())});},isValid:function(){var value=this.value();if(value===null){return false;}
            return value===this._adjustValue(value);},_value:function(value,allowAny){var parsed;if(value!==""){parsed=this._parse(value);if(parsed!==null){if(!allowAny){parsed=this._adjustValue(parsed);}
            value=this._format(parsed);}}
            this.element.val(value);this._refresh();},_destroy:function(){this.element.prop("disabled",false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");this.uiSpinner.replaceWith(this.element);},stepUp:spinnerModifier(function(steps){this._stepUp(steps);}),_stepUp:function(steps){if(this._start()){this._spin((steps||1)*this.options.step);this._stop();}},stepDown:spinnerModifier(function(steps){this._stepDown(steps);}),_stepDown:function(steps){if(this._start()){this._spin((steps||1)*-this.options.step);this._stop();}},pageUp:spinnerModifier(function(pages){this._stepUp((pages||1)*this.options.page);}),pageDown:spinnerModifier(function(pages){this._stepDown((pages||1)*this.options.page);}),value:function(newVal){if(!arguments.length){return this._parse(this.element.val());}
            spinnerModifier(this._value).call(this,newVal);},widget:function(){return this.uiSpinner;}});if($.uiBackCompat!==false){$.widget("ui.spinner",$.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());},_uiSpinnerHtml:function(){return"<span>";},_buttonHtml:function(){return"<a></a><a></a>";}});}
    var widgetsSpinner=$.ui.spinner;
    /*!
 * jQuery UI Tabs 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.widget("ui.tabs",{version:"1.13.2",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(function(){var rhash=/#.*$/;return function(anchor){var anchorUrl,locationUrl;anchorUrl=anchor.href.replace(rhash,"");locationUrl=location.href.replace(rhash,"");try{anchorUrl=decodeURIComponent(anchorUrl);}catch(error){}
            try{locationUrl=decodeURIComponent(locationUrl);}catch(error){}
            return anchor.hash.length>1&&anchorUrl===locationUrl;};})(),_create:function(){var that=this,options=this.options;this.running=false;this._addClass("ui-tabs","ui-widget ui-widget-content");this._toggleClass("ui-tabs-collapsible",null,options.collapsible);this._processTabs();options.active=this._initialActive();if(Array.isArray(options.disabled)){options.disabled=$.uniqueSort(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"),function(li){return that.tabs.index(li);}))).sort();}
            if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(options.active);}else{this.active=$();}
            this._refresh();if(this.active.length){this.load(options.active);}},_initialActive:function(){var active=this.options.active,collapsible=this.options.collapsible,locationHash=location.hash.substring(1);if(active===null){if(locationHash){this.tabs.each(function(i,tab){if($(tab).attr("aria-controls")===locationHash){active=i;return false;}});}
            if(active===null){active=this.tabs.index(this.tabs.filter(".ui-tabs-active"));}
            if(active===null||active===-1){active=this.tabs.length?0:false;}}
            if(active!==false){active=this.tabs.index(this.tabs.eq(active));if(active===-1){active=collapsible?false:0;}}
            if(!collapsible&&active===false&&this.anchors.length){active=0;}
            return active;},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?$():this._getPanelForTab(this.active)};},_tabKeydown:function(event){var focusedTab=$($.ui.safeActiveElement(this.document[0])).closest("li"),selectedIndex=this.tabs.index(focusedTab),goingForward=true;if(this._handlePageNav(event)){return;}
            switch(event.keyCode){case $.ui.keyCode.RIGHT:case $.ui.keyCode.DOWN:selectedIndex++;break;case $.ui.keyCode.UP:case $.ui.keyCode.LEFT:goingForward=false;selectedIndex--;break;case $.ui.keyCode.END:selectedIndex=this.anchors.length-1;break;case $.ui.keyCode.HOME:selectedIndex=0;break;case $.ui.keyCode.SPACE:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex);return;case $.ui.keyCode.ENTER:event.preventDefault();clearTimeout(this.activating);this._activate(selectedIndex===this.options.active?false:selectedIndex);return;default:return;}
            event.preventDefault();clearTimeout(this.activating);selectedIndex=this._focusNextTab(selectedIndex,goingForward);if(!event.ctrlKey&&!event.metaKey){focusedTab.attr("aria-selected","false");this.tabs.eq(selectedIndex).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",selectedIndex);},this.delay);}},_panelKeydown:function(event){if(this._handlePageNav(event)){return;}
            if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){event.preventDefault();this.active.trigger("focus");}},_handlePageNav:function(event){if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true;}
            if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true;}},_findNextTab:function(index,goingForward){var lastTabIndex=this.tabs.length-1;function constrain(){if(index>lastTabIndex){index=0;}
            if(index<0){index=lastTabIndex;}
            return index;}
            while($.inArray(constrain(),this.options.disabled)!==-1){index=goingForward?index+1:index-1;}
            return index;},_focusNextTab:function(index,goingForward){index=this._findNextTab(index,goingForward);this.tabs.eq(index).trigger("focus");return index;},_setOption:function(key,value){if(key==="active"){this._activate(value);return;}
            this._super(key,value);if(key==="collapsible"){this._toggleClass("ui-tabs-collapsible",null,value);if(!value&&this.options.active===false){this._activate(0);}}
            if(key==="event"){this._setupEvents(value);}
            if(key==="heightStyle"){this._setupHeightStyle(value);}},_sanitizeSelector:function(hash){return hash?hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):"";},refresh:function(){var options=this.options,lis=this.tablist.children(":has(a[href])");options.disabled=$.map(lis.filter(".ui-state-disabled"),function(tab){return lis.index(tab);});this._processTabs();if(options.active===false||!this.anchors.length){options.active=false;this.active=$();}else if(this.active.length&&!$.contains(this.tablist[0],this.active[0])){if(this.tabs.length===options.disabled.length){options.active=false;this.active=$();}else{this._activate(this._findNextTab(Math.max(0,options.active-1),false));}}else{options.active=this.tabs.index(this.active);}
            this._refresh();},_refresh:function(){this._setOptionDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0);}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});this._addClass(this.active,"ui-tabs-active","ui-state-active");this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"});}},_processTabs:function(){var that=this,prevTabs=this.tabs,prevAnchors=this.anchors,prevPanels=this.panels;this.tablist=this._getList().attr("role","tablist");this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header");this.tablist.on("mousedown"+this.eventNamespace,"> li",function(event){if($(this).is(".ui-state-disabled")){event.preventDefault();}}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){if($(this).closest("li").is(".ui-state-disabled")){this.blur();}});this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1});this._addClass(this.tabs,"ui-tabs-tab","ui-state-default");this.anchors=this.tabs.map(function(){return $("a",this)[0];}).attr({tabIndex:-1});this._addClass(this.anchors,"ui-tabs-anchor");this.panels=$();this.anchors.each(function(i,anchor){var selector,panel,panelId,anchorId=$(anchor).uniqueId().attr("id"),tab=$(anchor).closest("li"),originalAriaControls=tab.attr("aria-controls");if(that._isLocal(anchor)){selector=anchor.hash;panelId=selector.substring(1);panel=that.element.find(that._sanitizeSelector(selector));}else{panelId=tab.attr("aria-controls")||$({}).uniqueId()[0].id;selector="#"+panelId;panel=that.element.find(selector);if(!panel.length){panel=that._createPanel(panelId);panel.insertAfter(that.panels[i-1]||that.tablist);}
            panel.attr("aria-live","polite");}
            if(panel.length){that.panels=that.panels.add(panel);}
            if(originalAriaControls){tab.data("ui-tabs-aria-controls",originalAriaControls);}
            tab.attr({"aria-controls":panelId,"aria-labelledby":anchorId});panel.attr("aria-labelledby",anchorId);});this.panels.attr("role","tabpanel");this._addClass(this.panels,"ui-tabs-panel","ui-widget-content");if(prevTabs){this._off(prevTabs.not(this.tabs));this._off(prevAnchors.not(this.anchors));this._off(prevPanels.not(this.panels));}},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0);},_createPanel:function(id){return $("<div>").attr("id",id).data("ui-tabs-destroy",true);},_setOptionDisabled:function(disabled){var currentItem,li,i;if(Array.isArray(disabled)){if(!disabled.length){disabled=false;}else if(disabled.length===this.anchors.length){disabled=true;}}
            for(i=0;(li=this.tabs[i]);i++){currentItem=$(li);if(disabled===true||$.inArray(i,disabled)!==-1){currentItem.attr("aria-disabled","true");this._addClass(currentItem,null,"ui-state-disabled");}else{currentItem.removeAttr("aria-disabled");this._removeClass(currentItem,null,"ui-state-disabled");}}
            this.options.disabled=disabled;this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,disabled===true);},_setupEvents:function(event){var events={};if(event){$.each(event.split(" "),function(index,eventName){events[eventName]="_eventHandler";});}
            this._off(this.anchors.add(this.tabs).add(this.panels));this._on(true,this.anchors,{click:function(event){event.preventDefault();}});this._on(this.anchors,events);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs);},_setupHeightStyle:function(heightStyle){var maxHeight,parent=this.element.parent();if(heightStyle==="fill"){maxHeight=parent.height();maxHeight-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var elem=$(this),position=elem.css("position");if(position==="absolute"||position==="fixed"){return;}
            maxHeight-=elem.outerHeight(true);});this.element.children().not(this.panels).each(function(){maxHeight-=$(this).outerHeight(true);});this.panels.each(function(){$(this).height(Math.max(0,maxHeight-
            $(this).innerHeight()+$(this).height()));}).css("overflow","auto");}else if(heightStyle==="auto"){maxHeight=0;this.panels.each(function(){maxHeight=Math.max(maxHeight,$(this).height("").height());}).height(maxHeight);}},_eventHandler:function(event){var options=this.options,active=this.active,anchor=$(event.currentTarget),tab=anchor.closest("li"),clickedIsActive=tab[0]===active[0],collapsing=clickedIsActive&&options.collapsible,toShow=collapsing?$():this._getPanelForTab(tab),toHide=!active.length?$():this._getPanelForTab(active),eventData={oldTab:active,oldPanel:toHide,newTab:collapsing?$():tab,newPanel:toShow};event.preventDefault();if(tab.hasClass("ui-state-disabled")||tab.hasClass("ui-tabs-loading")||this.running||(clickedIsActive&&!options.collapsible)||(this._trigger("beforeActivate",event,eventData)===false)){return;}
            options.active=collapsing?false:this.tabs.index(tab);this.active=clickedIsActive?$():tab;if(this.xhr){this.xhr.abort();}
            if(!toHide.length&&!toShow.length){$.error("jQuery UI Tabs: Mismatching fragment identifier.");}
            if(toShow.length){this.load(this.tabs.index(tab),event);}
            this._toggle(event,eventData);},_toggle:function(event,eventData){var that=this,toShow=eventData.newPanel,toHide=eventData.oldPanel;this.running=true;function complete(){that.running=false;that._trigger("activate",event,eventData);}
            function show(){that._addClass(eventData.newTab.closest("li"),"ui-tabs-active","ui-state-active");if(toShow.length&&that.options.show){that._show(toShow,that.options.show,complete);}else{toShow.show();complete();}}
            if(toHide.length&&this.options.hide){this._hide(toHide,this.options.hide,function(){that._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");show();});}else{this._removeClass(eventData.oldTab.closest("li"),"ui-tabs-active","ui-state-active");toHide.hide();show();}
            toHide.attr("aria-hidden","true");eventData.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});if(toShow.length&&toHide.length){eventData.oldTab.attr("tabIndex",-1);}else if(toShow.length){this.tabs.filter(function(){return $(this).attr("tabIndex")===0;}).attr("tabIndex",-1);}
            toShow.attr("aria-hidden","false");eventData.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});},_activate:function(index){var anchor,active=this._findActive(index);if(active[0]===this.active[0]){return;}
            if(!active.length){active=this.active;}
            anchor=active.find(".ui-tabs-anchor")[0];this._eventHandler({target:anchor,currentTarget:anchor,preventDefault:$.noop});},_findActive:function(index){return index===false?$():this.tabs.eq(index);},_getIndex:function(index){if(typeof index==="string"){index=this.anchors.index(this.anchors.filter("[href$='"+
            $.escapeSelector(index)+"']"));}
            return index;},_destroy:function(){if(this.xhr){this.xhr.abort();}
            this.tablist.removeAttr("role").off(this.eventNamespace);this.anchors.removeAttr("role tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if($.data(this,"ui-tabs-destroy")){$(this).remove();}else{$(this).removeAttr("role tabIndex "+"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");}});this.tabs.each(function(){var li=$(this),prev=li.data("ui-tabs-aria-controls");if(prev){li.attr("aria-controls",prev).removeData("ui-tabs-aria-controls");}else{li.removeAttr("aria-controls");}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","");}},enable:function(index){var disabled=this.options.disabled;if(disabled===false){return;}
            if(index===undefined){disabled=false;}else{index=this._getIndex(index);if(Array.isArray(disabled)){disabled=$.map(disabled,function(num){return num!==index?num:null;});}else{disabled=$.map(this.tabs,function(li,num){return num!==index?num:null;});}}
            this._setOptionDisabled(disabled);},disable:function(index){var disabled=this.options.disabled;if(disabled===true){return;}
            if(index===undefined){disabled=true;}else{index=this._getIndex(index);if($.inArray(index,disabled)!==-1){return;}
                if(Array.isArray(disabled)){disabled=$.merge([index],disabled).sort();}else{disabled=[index];}}
            this._setOptionDisabled(disabled);},load:function(index,event){index=this._getIndex(index);var that=this,tab=this.tabs.eq(index),anchor=tab.find(".ui-tabs-anchor"),panel=this._getPanelForTab(tab),eventData={tab:tab,panel:panel},complete=function(jqXHR,status){if(status==="abort"){that.panels.stop(false,true);}
            that._removeClass(tab,"ui-tabs-loading");panel.removeAttr("aria-busy");if(jqXHR===that.xhr){delete that.xhr;}};if(this._isLocal(anchor[0])){return;}
            this.xhr=$.ajax(this._ajaxSettings(anchor,event,eventData));if(this.xhr&&this.xhr.statusText!=="canceled"){this._addClass(tab,"ui-tabs-loading");panel.attr("aria-busy","true");this.xhr.done(function(response,status,jqXHR){setTimeout(function(){panel.html(response);that._trigger("load",event,eventData);complete(jqXHR,status);},1);}).fail(function(jqXHR,status){setTimeout(function(){complete(jqXHR,status);},1);});}},_ajaxSettings:function(anchor,event,eventData){var that=this;return{url:anchor.attr("href").replace(/#.*$/,""),beforeSend:function(jqXHR,settings){return that._trigger("beforeLoad",event,$.extend({jqXHR:jqXHR,ajaxSettings:settings},eventData));}};},_getPanelForTab:function(tab){var id=$(tab).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+id));}});if($.uiBackCompat!==false){$.widget("ui.tabs",$.ui.tabs,{_processTabs:function(){this._superApply(arguments);this._addClass(this.tabs,"ui-tab");}});}
    var widgetsTabs=$.ui.tabs;
    /*!
 * jQuery UI Tooltip 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    $.widget("ui.tooltip",{version:"1.13.2",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var title=$(this).attr("title");return $("<a>").text(title).html();},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,track:false,close:null,open:null},_addDescribedBy:function(elem,id){var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);describedby.push(id);elem.data("ui-tooltip-id",id).attr("aria-describedby",String.prototype.trim.call(describedby.join(" ")));},_removeDescribedBy:function(elem){var id=elem.data("ui-tooltip-id"),describedby=(elem.attr("aria-describedby")||"").split(/\s+/),index=$.inArray(id,describedby);if(index!==-1){describedby.splice(index,1);}
            elem.removeData("ui-tooltip-id");describedby=String.prototype.trim.call(describedby.join(" "));if(describedby){elem.attr("aria-describedby",describedby);}else{elem.removeAttr("aria-describedby");}},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};this.liveRegion=$("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body);this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible");this.disabledTitles=$([]);},_setOption:function(key,value){var that=this;this._super(key,value);if(key==="content"){$.each(this.tooltips,function(id,tooltipData){that._updateContent(tooltipData.element);});}},_setOptionDisabled:function(value){this[value?"_disable":"_enable"]();},_disable:function(){var that=this;$.each(this.tooltips,function(id,tooltipData){var event=$.Event("blur");event.target=event.currentTarget=tooltipData.element[0];that.close(event,true);});this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var element=$(this);if(element.is("[title]")){return element.data("ui-tooltip-title",element.attr("title")).removeAttr("title");}}));},_enable:function(){this.disabledTitles.each(function(){var element=$(this);if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));}});this.disabledTitles=$([]);},open:function(event){var that=this,target=$(event?event.target:this.element).closest(this.options.items);if(!target.length||target.data("ui-tooltip-id")){return;}
            if(target.attr("title")){target.data("ui-tooltip-title",target.attr("title"));}
            target.data("ui-tooltip-open",true);if(event&&event.type==="mouseover"){target.parents().each(function(){var parent=$(this),blurEvent;if(parent.data("ui-tooltip-open")){blurEvent=$.Event("blur");blurEvent.target=blurEvent.currentTarget=this;that.close(blurEvent,true);}
                if(parent.attr("title")){parent.uniqueId();that.parents[this.id]={element:this,title:parent.attr("title")};parent.attr("title","");}});}
            this._registerCloseHandlers(event,target);this._updateContent(target,event);},_updateContent:function(target,event){var content,contentOption=this.options.content,that=this,eventType=event?event.type:null;if(typeof contentOption==="string"||contentOption.nodeType||contentOption.jquery){return this._open(event,target,contentOption);}
            content=contentOption.call(target[0],function(response){that._delay(function(){if(!target.data("ui-tooltip-open")){return;}
                if(event){event.type=eventType;}
                this._open(event,target,response);});});if(content){this._open(event,target,content);}},_open:function(event,target,content){var tooltipData,tooltip,delayedShow,a11yContent,positionOption=$.extend({},this.options.position);if(!content){return;}
            tooltipData=this._find(target);if(tooltipData){tooltipData.tooltip.find(".ui-tooltip-content").html(content);return;}
            if(target.is("[title]")){if(event&&event.type==="mouseover"){target.attr("title","");}else{target.removeAttr("title");}}
            tooltipData=this._tooltip(target);tooltip=tooltipData.tooltip;this._addDescribedBy(target,tooltip.attr("id"));tooltip.find(".ui-tooltip-content").html(content);this.liveRegion.children().hide();a11yContent=$("<div>").html(tooltip.find(".ui-tooltip-content").html());a11yContent.removeAttr("name").find("[name]").removeAttr("name");a11yContent.removeAttr("id").find("[id]").removeAttr("id");a11yContent.appendTo(this.liveRegion);function position(event){positionOption.of=event;if(tooltip.is(":hidden")){return;}
                tooltip.position(positionOption);}
            if(this.options.track&&event&&/^mouse/.test(event.type)){this._on(this.document,{mousemove:position});position(event);}else{tooltip.position($.extend({of:target},this.options.position));}
            tooltip.hide();this._show(tooltip,this.options.show);if(this.options.track&&this.options.show&&this.options.show.delay){delayedShow=this.delayedShow=setInterval(function(){if(tooltip.is(":visible")){position(positionOption.of);clearInterval(delayedShow);}},13);}
            this._trigger("open",event,{tooltip:tooltip});},_registerCloseHandlers:function(event,target){var events={keyup:function(event){if(event.keyCode===$.ui.keyCode.ESCAPE){var fakeEvent=$.Event(event);fakeEvent.currentTarget=target[0];this.close(fakeEvent,true);}}};if(target[0]!==this.element[0]){events.remove=function(){var targetElement=this._find(target);if(targetElement){this._removeTooltip(targetElement.tooltip);}};}
            if(!event||event.type==="mouseover"){events.mouseleave="close";}
            if(!event||event.type==="focusin"){events.focusout="close";}
            this._on(true,target,events);},close:function(event){var tooltip,that=this,target=$(event?event.currentTarget:this.element),tooltipData=this._find(target);if(!tooltipData){target.removeData("ui-tooltip-open");return;}
            tooltip=tooltipData.tooltip;if(tooltipData.closing){return;}
            clearInterval(this.delayedShow);if(target.data("ui-tooltip-title")&&!target.attr("title")){target.attr("title",target.data("ui-tooltip-title"));}
            this._removeDescribedBy(target);tooltipData.hiding=true;tooltip.stop(true);this._hide(tooltip,this.options.hide,function(){that._removeTooltip($(this));});target.removeData("ui-tooltip-open");this._off(target,"mouseleave focusout keyup");if(target[0]!==this.element[0]){this._off(target,"remove");}
            this._off(this.document,"mousemove");if(event&&event.type==="mouseleave"){$.each(this.parents,function(id,parent){$(parent.element).attr("title",parent.title);delete that.parents[id];});}
            tooltipData.closing=true;this._trigger("close",event,{tooltip:tooltip});if(!tooltipData.hiding){tooltipData.closing=false;}},_tooltip:function(element){var tooltip=$("<div>").attr("role","tooltip"),content=$("<div>").appendTo(tooltip),id=tooltip.uniqueId().attr("id");this._addClass(content,"ui-tooltip-content");this._addClass(tooltip,"ui-tooltip","ui-widget ui-widget-content");tooltip.appendTo(this._appendTo(element));return this.tooltips[id]={element:element,tooltip:tooltip};},_find:function(target){var id=target.data("ui-tooltip-id");return id?this.tooltips[id]:null;},_removeTooltip:function(tooltip){clearInterval(this.delayedShow);tooltip.remove();delete this.tooltips[tooltip.attr("id")];},_appendTo:function(target){var element=target.closest(".ui-front, dialog");if(!element.length){element=this.document[0].body;}
            return element;},_destroy:function(){var that=this;$.each(this.tooltips,function(id,tooltipData){var event=$.Event("blur"),element=tooltipData.element;event.target=event.currentTarget=element[0];that.close(event,true);$("#"+id).remove();if(element.data("ui-tooltip-title")){if(!element.attr("title")){element.attr("title",element.data("ui-tooltip-title"));}
            element.removeData("ui-tooltip-title");}});this.liveRegion.remove();}});if($.uiBackCompat!==false){$.widget("ui.tooltip",$.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var tooltipData=this._superApply(arguments);if(this.options.tooltipClass){tooltipData.tooltip.addClass(this.options.tooltipClass);}
            return tooltipData;}});}
    var widgetsTooltip=$.ui.tooltip;});if(typeof jQuery==='undefined'){throw new Error('Bootstrap\'s JavaScript requires jQuery')}
+function($){'use strict';var version=$.fn.jquery.split(' ')[0].split('.')
    if((version[0]<2&&version[1]<9)||(version[0]==1&&version[1]==9&&version[2]<1)||(version[0]>3)){throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')}}(jQuery);+function($){'use strict';function transitionEnd(){var el=document.createElement('bootstrap')
    var transEndEventNames={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}
    for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}
    return false}
    $.fn.emulateTransitionEnd=function(duration){var called=false
        var $el=this
        $(this).one('bsTransitionEnd',function(){called=true})
        var callback=function(){if(!called)$($el).trigger($.support.transition.end)}
        setTimeout(callback,duration)
        return this}
    $(function(){$.support.transition=transitionEnd()
        if(!$.support.transition)return
        $.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}})}(jQuery);+function($){'use strict';var dismiss='[data-dismiss="alert"]'
    var Alert=function(el){$(el).on('click',dismiss,this.close)}
    Alert.VERSION='3.3.7'
    Alert.TRANSITION_DURATION=150
    Alert.prototype.close=function(e){var $this=$(this)
        var selector=$this.attr('data-target')
        if(!selector){selector=$this.attr('href')
            selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
        var $parent=$(selector==='#'?[]:selector)
        if(e)e.preventDefault()
        if(!$parent.length){$parent=$this.closest('.alert')}
        $parent.trigger(e=$.Event('close.bs.alert'))
        if(e.isDefaultPrevented())return
        $parent.removeClass('in')
        function removeElement(){$parent.detach().trigger('closed.bs.alert').remove()}
        $.support.transition&&$parent.hasClass('fade')?$parent.one('bsTransitionEnd',removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.alert')
        if(!data)$this.data('bs.alert',(data=new Alert(this)))
        if(typeof option=='string')data[option].call($this)})}
    var old=$.fn.alert
    $.fn.alert=Plugin
    $.fn.alert.Constructor=Alert
    $.fn.alert.noConflict=function(){$.fn.alert=old
        return this}
    $(document).on('click.bs.alert.data-api',dismiss,Alert.prototype.close)}(jQuery);+function($){'use strict';var Button=function(element,options){this.$element=$(element)
    this.options=$.extend({},Button.DEFAULTS,options)
    this.isLoading=false}
    Button.VERSION='3.3.7'
    Button.DEFAULTS={loadingText:'loading...'}
    Button.prototype.setState=function(state){var d='disabled'
        var $el=this.$element
        var val=$el.is('input')?'val':'html'
        var data=$el.data()
        state+='Text'
        if(data.resetText==null)$el.data('resetText',$el[val]())
        setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state])
            if(state=='loadingText'){this.isLoading=true
                $el.addClass(d).attr(d,d).prop(d,true)}else if(this.isLoading){this.isLoading=false
                $el.removeClass(d).removeAttr(d).prop(d,false)}},this),0)}
    Button.prototype.toggle=function(){var changed=true
        var $parent=this.$element.closest('[data-toggle="buttons"]')
        if($parent.length){var $input=this.$element.find('input')
            if($input.prop('type')=='radio'){if($input.prop('checked'))changed=false
                $parent.find('.active').removeClass('active')
                this.$element.addClass('active')}else if($input.prop('type')=='checkbox'){if(($input.prop('checked'))!==this.$element.hasClass('active'))changed=false
                this.$element.toggleClass('active')}
            $input.prop('checked',this.$element.hasClass('active'))
            if(changed)$input.trigger('change')}else{this.$element.attr('aria-pressed',!this.$element.hasClass('active'))
            this.$element.toggleClass('active')}}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.button')
        var options=typeof option=='object'&&option
        if(!data)$this.data('bs.button',(data=new Button(this,options)))
        if(option=='toggle')data.toggle()
        else if(option)data.setState(option)})}
    var old=$.fn.button
    $.fn.button=Plugin
    $.fn.button.Constructor=Button
    $.fn.button.noConflict=function(){$.fn.button=old
        return this}
    $(document).on('click.bs.button.data-api','[data-toggle^="button"]',function(e){var $btn=$(e.target).closest('.btn')
        Plugin.call($btn,'toggle')
        if(!($(e.target).is('input[type="radio"], input[type="checkbox"]'))){e.preventDefault()
            if($btn.is('input,button'))$btn.trigger('focus')
            else $btn.find('input:visible,button:visible').first().trigger('focus')}}).on('focus.bs.button.data-api blur.bs.button.data-api','[data-toggle^="button"]',function(e){$(e.target).closest('.btn').toggleClass('focus',/^focus(in)?$/.test(e.type))})}(jQuery);+function($){'use strict';var Carousel=function(element,options){this.$element=$(element)
    this.$indicators=this.$element.find('.carousel-indicators')
    this.options=options
    this.paused=null
    this.sliding=null
    this.interval=null
    this.$active=null
    this.$items=null
    this.options.keyboard&&this.$element.on('keydown.bs.carousel',$.proxy(this.keydown,this))
    this.options.pause=='hover'&&!('ontouchstart'in document.documentElement)&&this.$element.on('mouseenter.bs.carousel',$.proxy(this.pause,this)).on('mouseleave.bs.carousel',$.proxy(this.cycle,this))}
    Carousel.VERSION='3.3.7'
    Carousel.TRANSITION_DURATION=600
    Carousel.DEFAULTS={interval:5000,pause:'hover',wrap:true,keyboard:true}
    Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName))return
        switch(e.which){case 37:this.prev();break
            case 39:this.next();break
            default:return}
        e.preventDefault()}
    Carousel.prototype.cycle=function(e){e||(this.paused=false)
        this.interval&&clearInterval(this.interval)
        this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
        return this}
    Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children('.item')
        return this.$items.index(item||this.$active)}
    Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active)
        var willWrap=(direction=='prev'&&activeIndex===0)||(direction=='next'&&activeIndex==(this.$items.length-1))
        if(willWrap&&!this.options.wrap)return active
        var delta=direction=='prev'?-1:1
        var itemIndex=(activeIndex+delta)%this.$items.length
        return this.$items.eq(itemIndex)}
    Carousel.prototype.to=function(pos){var that=this
        var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
        if(pos>(this.$items.length-1)||pos<0)return
        if(this.sliding)return this.$element.one('slid.bs.carousel',function(){that.to(pos)})
        if(activeIndex==pos)return this.pause().cycle()
        return this.slide(pos>activeIndex?'next':'prev',this.$items.eq(pos))}
    Carousel.prototype.pause=function(e){e||(this.paused=true)
        if(this.$element.find('.next, .prev').length&&$.support.transition){this.$element.trigger($.support.transition.end)
            this.cycle(true)}
        this.interval=clearInterval(this.interval)
        return this}
    Carousel.prototype.next=function(){if(this.sliding)return
        return this.slide('next')}
    Carousel.prototype.prev=function(){if(this.sliding)return
        return this.slide('prev')}
    Carousel.prototype.slide=function(type,next){var $active=this.$element.find('.item.active')
        var $next=next||this.getItemForDirection(type,$active)
        var isCycling=this.interval
        var direction=type=='next'?'left':'right'
        var that=this
        if($next.hasClass('active'))return(this.sliding=false)
        var relatedTarget=$next[0]
        var slideEvent=$.Event('slide.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
        this.$element.trigger(slideEvent)
        if(slideEvent.isDefaultPrevented())return
        this.sliding=true
        isCycling&&this.pause()
        if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
            var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
            $nextIndicator&&$nextIndicator.addClass('active')}
        var slidEvent=$.Event('slid.bs.carousel',{relatedTarget:relatedTarget,direction:direction})
        if($.support.transition&&this.$element.hasClass('slide')){$next.addClass(type)
            if(typeof $next==='object'&&$next.length){$next[0].offsetWidth}
            $active.addClass(direction)
            $next.addClass(direction)
            $active.one('bsTransitionEnd',function(){$next.removeClass([type,direction].join(' ')).addClass('active')
                $active.removeClass(['active',direction].join(' '))
                that.sliding=false
                setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass('active')
            $next.addClass('active')
            this.sliding=false
            this.$element.trigger(slidEvent)}
        isCycling&&this.cycle()
        return this}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.carousel')
        var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=='object'&&option)
        var action=typeof option=='string'?option:options.slide
        if(!data)$this.data('bs.carousel',(data=new Carousel(this,options)))
        if(typeof option=='number')data.to(option)
        else if(action)data[action]()
        else if(options.interval)data.pause().cycle()})}
    var old=$.fn.carousel
    $.fn.carousel=Plugin
    $.fn.carousel.Constructor=Carousel
    $.fn.carousel.noConflict=function(){$.fn.carousel=old
        return this}
    var clickHandler=function(e){var href
        var $this=$(this)
        var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))
        if(!$target.hasClass('carousel'))return
        var options=$.extend({},$target.data(),$this.data())
        var slideIndex=$this.attr('data-slide-to')
        if(slideIndex)options.interval=false
        Plugin.call($target,options)
        if(slideIndex){$target.data('bs.carousel').to(slideIndex)}
        e.preventDefault()}
    $(document).on('click.bs.carousel.data-api','[data-slide]',clickHandler).on('click.bs.carousel.data-api','[data-slide-to]',clickHandler)
    $(window).on('load',function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this)
        Plugin.call($carousel,$carousel.data())})})}(jQuery);+function($){'use strict';var Collapse=function(element,options){this.$element=$(element)
    this.options=$.extend({},Collapse.DEFAULTS,options)
    this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]')
    this.transitioning=null
    if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}
    if(this.options.toggle)this.toggle()}
    Collapse.VERSION='3.3.7'
    Collapse.TRANSITION_DURATION=350
    Collapse.DEFAULTS={toggle:true}
    Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass('width')
        return hasWidth?'width':'height'}
    Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass('in'))return
        var activesData
        var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
        if(actives&&actives.length){activesData=actives.data('bs.collapse')
            if(activesData&&activesData.transitioning)return}
        var startEvent=$.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if(startEvent.isDefaultPrevented())return
        if(actives&&actives.length){Plugin.call(actives,'hide')
            activesData||actives.data('bs.collapse',null)}
        var dimension=this.dimension()
        this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded',true)
        this.$trigger.removeClass('collapsed').attr('aria-expanded',true)
        this.transitioning=1
        var complete=function(){this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
            this.transitioning=0
            this.$element.trigger('shown.bs.collapse')}
        if(!$.support.transition)return complete.call(this)
        var scrollSize=$.camelCase(['scroll',dimension].join('-'))
        this.$element.one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])}
    Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass('in'))return
        var startEvent=$.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if(startEvent.isDefaultPrevented())return
        var dimension=this.dimension()
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight
        this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded',false)
        this.$trigger.addClass('collapsed').attr('aria-expanded',false)
        this.transitioning=1
        var complete=function(){this.transitioning=0
            this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')}
        if(!$.support.transition)return complete.call(this)
        this.$element
            [dimension](0).one('bsTransitionEnd',$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)}
    Collapse.prototype.toggle=function(){this[this.$element.hasClass('in')?'hide':'show']()}
    Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()}
    Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass('in')
        $element.attr('aria-expanded',isOpen)
        $trigger.toggleClass('collapsed',!isOpen).attr('aria-expanded',isOpen)}
    function getTargetFromTrigger($trigger){var href
        var target=$trigger.attr('data-target')||(href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')
        return $(target)}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.collapse')
        var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=='object'&&option)
        if(!data&&options.toggle&&/show|hide/.test(option))options.toggle=false
        if(!data)$this.data('bs.collapse',(data=new Collapse(this,options)))
        if(typeof option=='string')data[option]()})}
    var old=$.fn.collapse
    $.fn.collapse=Plugin
    $.fn.collapse.Constructor=Collapse
    $.fn.collapse.noConflict=function(){$.fn.collapse=old
        return this}
    $(document).on('click.bs.collapse.data-api','[data-toggle="collapse"]',function(e){var $this=$(this)
        if(!$this.attr('data-target'))e.preventDefault()
        var $target=getTargetFromTrigger($this)
        var data=$target.data('bs.collapse')
        var option=data?'toggle':$this.data()
        Plugin.call($target,option)})}(jQuery);+function($){'use strict';var backdrop='.dropdown-backdrop'
    var toggle='[data-toggle="dropdown"]'
    var Dropdown=function(element){$(element).on('click.bs.dropdown',this.toggle)}
    Dropdown.VERSION='3.3.7'
    function getParent($this){var selector=$this.attr('data-target')
        if(!selector){selector=$this.attr('href')
            selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
        var $parent=selector&&$(selector)
        return $parent&&$parent.length?$parent:$this.parent()}
    function clearMenus(e){if(e&&e.which===3)return
        $(backdrop).remove()
        $(toggle).each(function(){var $this=$(this)
            var $parent=getParent($this)
            var relatedTarget={relatedTarget:this}
            if(!$parent.hasClass('open'))return
            if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target))return
            $parent.trigger(e=$.Event('hide.bs.dropdown',relatedTarget))
            if(e.isDefaultPrevented())return
            $this.attr('aria-expanded','false')
            $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown',relatedTarget))})}
    Dropdown.prototype.toggle=function(e){var $this=$(this)
        if($this.is('.disabled, :disabled'))return
        var $parent=getParent($this)
        var isActive=$parent.hasClass('open')
        clearMenus()
        if(!isActive){if('ontouchstart'in document.documentElement&&!$parent.closest('.navbar-nav').length){$(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click',clearMenus)}
            var relatedTarget={relatedTarget:this}
            $parent.trigger(e=$.Event('show.bs.dropdown',relatedTarget))
            if(e.isDefaultPrevented())return
            $this.trigger('focus').attr('aria-expanded','true')
            $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown',relatedTarget))}
        return false}
    Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName))return
        var $this=$(this)
        e.preventDefault()
        e.stopPropagation()
        if($this.is('.disabled, :disabled'))return
        var $parent=getParent($this)
        var isActive=$parent.hasClass('open')
        if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27)$parent.find(toggle).trigger('focus')
            return $this.trigger('click')}
        var desc=' li:not(.disabled):visible a'
        var $items=$parent.find('.dropdown-menu'+desc)
        if(!$items.length)return
        var index=$items.index(e.target)
        if(e.which==38&&index>0)index--
        if(e.which==40&&index<$items.length-1)index++
        if(!~index)index=0
        $items.eq(index).trigger('focus')}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.dropdown')
        if(!data)$this.data('bs.dropdown',(data=new Dropdown(this)))
        if(typeof option=='string')data[option].call($this)})}
    var old=$.fn.dropdown
    $.fn.dropdown=Plugin
    $.fn.dropdown.Constructor=Dropdown
    $.fn.dropdown.noConflict=function(){$.fn.dropdown=old
        return this}
    $(document).on('click.bs.dropdown.data-api',clearMenus).on('click.bs.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.bs.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api',toggle,Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api','.dropdown-menu',Dropdown.prototype.keydown)}(jQuery);+function($){'use strict';var Modal=function(element,options){this.options=options
    this.$body=$(document.body)
    this.$element=$(element)
    this.$dialog=this.$element.find('.modal-dialog')
    this.$backdrop=null
    this.isShown=null
    this.originalBodyPad=null
    this.scrollbarWidth=0
    this.ignoreBackdropClick=false
    if(this.options.remote){this.$element.find('.modal-content').load(this.options.remote,$.proxy(function(){this.$element.trigger('loaded.bs.modal')},this))}}
    Modal.VERSION='3.3.7'
    Modal.TRANSITION_DURATION=300
    Modal.BACKDROP_TRANSITION_DURATION=150
    Modal.DEFAULTS={backdrop:true,keyboard:true,show:true}
    Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)}
    Modal.prototype.show=function(_relatedTarget){var that=this
        var e=$.Event('show.bs.modal',{relatedTarget:_relatedTarget})
        this.$element.trigger(e)
        if(this.isShown||e.isDefaultPrevented())return
        this.isShown=true
        this.checkScrollbar()
        this.setScrollbar()
        this.$body.addClass('modal-open')
        this.escape()
        this.resize()
        this.$element.on('click.dismiss.bs.modal','[data-dismiss="modal"]',$.proxy(this.hide,this))
        this.$dialog.on('mousedown.dismiss.bs.modal',function(){that.$element.one('mouseup.dismiss.bs.modal',function(e){if($(e.target).is(that.$element))that.ignoreBackdropClick=true})})
        this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
            if(!that.$element.parent().length){that.$element.appendTo(that.$body)}
            that.$element.show().scrollTop(0)
            that.adjustDialog()
            if(transition){that.$element[0].offsetWidth}
            that.$element.addClass('in')
            that.enforceFocus()
            var e=$.Event('shown.bs.modal',{relatedTarget:_relatedTarget})
            transition?that.$dialog.one('bsTransitionEnd',function(){that.$element.trigger('focus').trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger('focus').trigger(e)})}
    Modal.prototype.hide=function(e){if(e)e.preventDefault()
        e=$.Event('hide.bs.modal')
        this.$element.trigger(e)
        if(!this.isShown||e.isDefaultPrevented())return
        this.isShown=false
        this.escape()
        this.resize()
        $(document).off('focusin.bs.modal')
        this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal')
        this.$dialog.off('mousedown.dismiss.bs.modal')
        $.support.transition&&this.$element.hasClass('fade')?this.$element.one('bsTransitionEnd',$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()}
    Modal.prototype.enforceFocus=function(){$(document).off('focusin.bs.modal').on('focusin.bs.modal',$.proxy(function(e){if(document!==e.target&&this.$element[0]!==e.target&&!this.$element.has(e.target).length&&!$(e.target).closest('.cke_dialog, .cke').length){this.$element.trigger('focus')}},this))}
    Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on('keydown.dismiss.bs.modal',$.proxy(function(e){e.which==27&&this.hide()},this))}else if(!this.isShown){this.$element.off('keydown.dismiss.bs.modal')}}
    Modal.prototype.resize=function(){if(this.isShown){$(window).on('resize.bs.modal',$.proxy(this.handleUpdate,this))}else{$(window).off('resize.bs.modal')}}
    Modal.prototype.hideModal=function(){var that=this
        this.$element.hide()
        this.backdrop(function(){that.$body.removeClass('modal-open')
            that.resetAdjustments()
            that.resetScrollbar()
            that.$element.trigger('hidden.bs.modal')})}
    Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove()
        this.$backdrop=null}
    Modal.prototype.backdrop=function(callback){var that=this
        var animate=this.$element.hasClass('fade')?'fade':''
        if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
            this.$backdrop=$(document.createElement('div')).addClass('modal-backdrop '+animate).appendTo(this.$body)
            this.$element.on('click.dismiss.bs.modal',$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false
                return}
                if(e.target!==e.currentTarget)return
                this.options.backdrop=='static'?this.$element[0].focus():this.hide()},this))
            if(doAnimate)this.$backdrop[0].offsetWidth
            this.$backdrop.addClass('in')
            if(!callback)return
            doAnimate?this.$backdrop.one('bsTransitionEnd',callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
            var callbackRemove=function(){that.removeBackdrop()
                callback&&callback()}
            $.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one('bsTransitionEnd',callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else if(callback){callback()}}
    Modal.prototype.handleUpdate=function(){this.adjustDialog()}
    Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight
        this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:'',paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:''})}
    Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:'',paddingRight:''})}
    Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth
        if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect()
            fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}
        this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth
        this.scrollbarWidth=this.measureScrollbar()}
    Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css('padding-right')||0),10)
        this.originalBodyPad=document.body.style.paddingRight||''
        if(this.bodyIsOverflowing)this.$body.css('padding-right',bodyPad+this.scrollbarWidth)}
    Modal.prototype.resetScrollbar=function(){this.$body.css('padding-right',this.originalBodyPad)}
    Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement('div')
        scrollDiv.className='modal-scrollbar-measure'
        this.$body.append(scrollDiv)
        var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth}
    function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.modal')
        var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=='object'&&option)
        if(!data)$this.data('bs.modal',(data=new Modal(this,options)))
        if(typeof option=='string')data[option](_relatedTarget)
        else if(options.show)data.show(_relatedTarget)})}
    var old=$.fn.modal
    $.fn.modal=Plugin
    $.fn.modal.Constructor=Modal
    $.fn.modal.noConflict=function(){$.fn.modal=old
        return this}
    $(document).on('click.bs.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this)
        var href=$this.attr('href')
        var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,'')))
        var option=$target.data('bs.modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
        if($this.is('a'))e.preventDefault()
        $target.one('show.bs.modal',function(showEvent){if(showEvent.isDefaultPrevented())return
            $target.one('hidden.bs.modal',function(){$this.is(':visible')&&$this.trigger('focus')})})
        Plugin.call($target,option,this)})}(jQuery);+function($){'use strict';var Tooltip=function(element,options){this.type=null
    this.options=null
    this.enabled=null
    this.timeout=null
    this.hoverState=null
    this.$element=null
    this.inState=null
    this.init('tooltip',element,options)}
    Tooltip.VERSION='3.3.7'
    Tooltip.TRANSITION_DURATION=150
    Tooltip.DEFAULTS={animation:true,placement:'top',selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false,viewport:{selector:'body',padding:0}}
    Tooltip.prototype.init=function(type,element,options){this.enabled=true
        this.type=type
        this.$element=$(element)
        this.options=this.getOptions(options)
        this.$viewport=this.options.viewport&&$($.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):(this.options.viewport.selector||this.options.viewport))
        this.inState={click:false,hover:false,focus:false}
        if(this.$element[0]instanceof document.constructor&&!this.options.selector){throw new Error('`selector` option must be specified when initializing '+this.type+' on the window.document object!')}
        var triggers=this.options.trigger.split(' ')
        for(var i=triggers.length;i--;){var trigger=triggers[i]
            if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){var eventIn=trigger=='hover'?'mouseenter':'focusin'
                var eventOut=trigger=='hover'?'mouseleave':'focusout'
                this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
                this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
        this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()}
    Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS}
    Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options)
        if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
        return options}
    Tooltip.prototype.getDelegateOptions=function(){var options={}
        var defaults=this.getDefaults()
        this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value})
        return options}
    Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
        if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
            $(obj.currentTarget).data('bs.'+this.type,self)}
        if(obj instanceof $.Event){self.inState[obj.type=='focusin'?'focus':'hover']=true}
        if(self.tip().hasClass('in')||self.hoverState=='in'){self.hoverState='in'
            return}
        clearTimeout(self.timeout)
        self.hoverState='in'
        if(!self.options.delay||!self.options.delay.show)return self.show()
        self.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)}
    Tooltip.prototype.isInStateTrue=function(){for(var key in this.inState){if(this.inState[key])return true}
        return false}
    Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data('bs.'+this.type)
        if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions())
            $(obj.currentTarget).data('bs.'+this.type,self)}
        if(obj instanceof $.Event){self.inState[obj.type=='focusout'?'focus':'hover']=false}
        if(self.isInStateTrue())return
        clearTimeout(self.timeout)
        self.hoverState='out'
        if(!self.options.delay||!self.options.delay.hide)return self.hide()
        self.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)}
    Tooltip.prototype.show=function(){var e=$.Event('show.bs.'+this.type)
        if(this.hasContent()&&this.enabled){this.$element.trigger(e)
            var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
            if(e.isDefaultPrevented()||!inDom)return
            var that=this
            var $tip=this.tip()
            var tipId=this.getUID(this.type)
            this.setContent()
            $tip.attr('id',tipId)
            this.$element.attr('aria-describedby',tipId)
            if(this.options.animation)$tip.addClass('fade')
            var placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
            var autoToken=/\s?auto?\s?/i
            var autoPlace=autoToken.test(placement)
            if(autoPlace)placement=placement.replace(autoToken,'')||'top'
            $tip.detach().css({top:0,left:0,display:'block'}).addClass(placement).data('bs.'+this.type,this)
            this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
            this.$element.trigger('inserted.bs.'+this.type)
            var pos=this.getPosition()
            var actualWidth=$tip[0].offsetWidth
            var actualHeight=$tip[0].offsetHeight
            if(autoPlace){var orgPlacement=placement
                var viewportDim=this.getPosition(this.$viewport)
                placement=placement=='bottom'&&pos.bottom+actualHeight>viewportDim.bottom?'top':placement=='top'&&pos.top-actualHeight<viewportDim.top?'bottom':placement=='right'&&pos.right+actualWidth>viewportDim.width?'left':placement=='left'&&pos.left-actualWidth<viewportDim.left?'right':placement
                $tip.removeClass(orgPlacement).addClass(placement)}
            var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight)
            this.applyPlacement(calculatedOffset,placement)
            var complete=function(){var prevHoverState=that.hoverState
                that.$element.trigger('shown.bs.'+that.type)
                that.hoverState=null
                if(prevHoverState=='out')that.leave(that)}
            $.support.transition&&this.$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}}
    Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip()
        var width=$tip[0].offsetWidth
        var height=$tip[0].offsetHeight
        var marginTop=parseInt($tip.css('margin-top'),10)
        var marginLeft=parseInt($tip.css('margin-left'),10)
        if(isNaN(marginTop))marginTop=0
        if(isNaN(marginLeft))marginLeft=0
        offset.top+=marginTop
        offset.left+=marginLeft
        $.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0)
        $tip.addClass('in')
        var actualWidth=$tip[0].offsetWidth
        var actualHeight=$tip[0].offsetHeight
        if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight}
        var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight)
        if(delta.left)offset.left+=delta.left
        else offset.top+=delta.top
        var isVertical=/top|bottom/.test(placement)
        var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight
        var arrowOffsetPosition=isVertical?'offsetWidth':'offsetHeight'
        $tip.offset(offset)
        this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)}
    Tooltip.prototype.replaceArrow=function(delta,dimension,isVertical){this.arrow().css(isVertical?'left':'top',50*(1-delta/dimension)+'%').css(isVertical?'top':'left','')}
    Tooltip.prototype.setContent=function(){var $tip=this.tip()
        var title=this.getTitle()
        $tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
        $tip.removeClass('fade in top bottom left right')}
    Tooltip.prototype.hide=function(callback){var that=this
        var $tip=$(this.$tip)
        var e=$.Event('hide.bs.'+this.type)
        function complete(){if(that.hoverState!='in')$tip.detach()
            if(that.$element){that.$element.removeAttr('aria-describedby').trigger('hidden.bs.'+that.type)}
            callback&&callback()}
        this.$element.trigger(e)
        if(e.isDefaultPrevented())return
        $tip.removeClass('in')
        $.support.transition&&$tip.hasClass('fade')?$tip.one('bsTransitionEnd',complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()
        this.hoverState=null
        return this}
    Tooltip.prototype.fixTitle=function(){var $e=this.$element
        if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}}
    Tooltip.prototype.hasContent=function(){return this.getTitle()}
    Tooltip.prototype.getPosition=function($element){$element=$element||this.$element
        var el=$element[0]
        var isBody=el.tagName=='BODY'
        var elRect=el.getBoundingClientRect()
        if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}
        var isSvg=window.SVGElement&&el instanceof window.SVGElement
        var elOffset=isBody?{top:0,left:0}:(isSvg?null:$element.offset())
        var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()}
        var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null
        return $.extend({},elRect,scroll,outerDims,elOffset)}
    Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=='bottom'?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=='top'?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=='left'?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}
    Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0}
        if(!this.$viewport)return delta
        var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
        var viewportDimensions=this.getPosition(this.$viewport)
        if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll
            var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight
            if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}else{var leftEdgeOffset=pos.left-viewportPadding
            var rightEdgeOffset=pos.left+viewportPadding+actualWidth
            if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else if(rightEdgeOffset>viewportDimensions.right){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}
        return delta}
    Tooltip.prototype.getTitle=function(){var title
        var $e=this.$element
        var o=this.options
        title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
        return title}
    Tooltip.prototype.getUID=function(prefix){do prefix+=~~(Math.random()*1000000)
    while(document.getElementById(prefix))
        return prefix}
    Tooltip.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template)
        if(this.$tip.length!=1){throw new Error(this.type+' `template` option must consist of exactly 1 top-level element!')}}
        return this.$tip}
    Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))}
    Tooltip.prototype.enable=function(){this.enabled=true}
    Tooltip.prototype.disable=function(){this.enabled=false}
    Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled}
    Tooltip.prototype.toggle=function(e){var self=this
        if(e){self=$(e.currentTarget).data('bs.'+this.type)
            if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions())
                $(e.currentTarget).data('bs.'+this.type,self)}}
        if(e){self.inState.click=!self.inState.click
            if(self.isInStateTrue())self.enter(self)
            else self.leave(self)}else{self.tip().hasClass('in')?self.leave(self):self.enter(self)}}
    Tooltip.prototype.destroy=function(){var that=this
        clearTimeout(this.timeout)
        this.hide(function(){that.$element.off('.'+that.type).removeData('bs.'+that.type)
            if(that.$tip){that.$tip.detach()}
            that.$tip=null
            that.$arrow=null
            that.$viewport=null
            that.$element=null})}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.tooltip')
        var options=typeof option=='object'&&option
        if(!data&&/destroy|hide/.test(option))return
        if(!data)$this.data('bs.tooltip',(data=new Tooltip(this,options)))
        if(typeof option=='string')data[option]()})}
    var old=$.fn.tooltip
    $.fn.tooltip=Plugin
    $.fn.tooltip.Constructor=Tooltip
    $.fn.tooltip.noConflict=function(){$.fn.tooltip=old
        return this}}(jQuery);+function($){'use strict';var Popover=function(element,options){this.init('popover',element,options)}
    if(!$.fn.tooltip)throw new Error('Popover requires tooltip.js')
    Popover.VERSION='3.3.7'
    Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
    Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)
    Popover.prototype.constructor=Popover
    Popover.prototype.getDefaults=function(){return Popover.DEFAULTS}
    Popover.prototype.setContent=function(){var $tip=this.tip()
        var title=this.getTitle()
        var content=this.getContent()
        $tip.find('.popover-title')[this.options.html?'html':'text'](title)
        $tip.find('.popover-content').children().detach().end()[this.options.html?(typeof content=='string'?'html':'append'):'text'](content)
        $tip.removeClass('fade top bottom left right in')
        if(!$tip.find('.popover-title').html())$tip.find('.popover-title').hide()}
    Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()}
    Popover.prototype.getContent=function(){var $e=this.$element
        var o=this.options
        return $e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)}
    Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find('.arrow'))}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.popover')
        var options=typeof option=='object'&&option
        if(!data&&/destroy|hide/.test(option))return
        if(!data)$this.data('bs.popover',(data=new Popover(this,options)))
        if(typeof option=='string')data[option]()})}
    var old=$.fn.popover
    $.fn.popover=Plugin
    $.fn.popover.Constructor=Popover
    $.fn.popover.noConflict=function(){$.fn.popover=old
        return this}}(jQuery);+function($){'use strict';function ScrollSpy(element,options){this.$body=$(document.body)
    this.$scrollElement=$(element).is(document.body)?$(window):$(element)
    this.options=$.extend({},ScrollSpy.DEFAULTS,options)
    this.selector=(this.options.target||'')+' .nav li > a'
    this.offsets=[]
    this.targets=[]
    this.activeTarget=null
    this.scrollHeight=0
    this.$scrollElement.on('scroll.bs.scrollspy',$.proxy(this.process,this))
    this.refresh()
    this.process()}
    ScrollSpy.VERSION='3.3.7'
    ScrollSpy.DEFAULTS={offset:10}
    ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)}
    ScrollSpy.prototype.refresh=function(){var that=this
        var offsetMethod='offset'
        var offsetBase=0
        this.offsets=[]
        this.targets=[]
        this.scrollHeight=this.getScrollHeight()
        if(!$.isWindow(this.$scrollElement[0])){offsetMethod='position'
            offsetBase=this.$scrollElement.scrollTop()}
        this.$body.find(this.selector).map(function(){var $el=$(this)
            var href=$el.data('target')||$el.attr('href')
            var $href=/^#./.test(href)&&$(href)
            return($href&&$href.length&&$href.is(':visible')&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0])
            that.targets.push(this[1])})}
    ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset
        var scrollHeight=this.getScrollHeight()
        var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height()
        var offsets=this.offsets
        var targets=this.targets
        var activeTarget=this.activeTarget
        var i
        if(this.scrollHeight!=scrollHeight){this.refresh()}
        if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}
        if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null
            return this.clear()}
        for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}}
    ScrollSpy.prototype.activate=function(target){this.activeTarget=target
        this.clear()
        var selector=this.selector+'[data-target="'+target+'"],'+
            this.selector+'[href="'+target+'"]'
        var active=$(selector).parents('li').addClass('active')
        if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
        active.trigger('activate.bs.scrollspy')}
    ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,'.active').removeClass('active')}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.scrollspy')
        var options=typeof option=='object'&&option
        if(!data)$this.data('bs.scrollspy',(data=new ScrollSpy(this,options)))
        if(typeof option=='string')data[option]()})}
    var old=$.fn.scrollspy
    $.fn.scrollspy=Plugin
    $.fn.scrollspy.Constructor=ScrollSpy
    $.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
        return this}
    $(window).on('load.bs.scrollspy.data-api',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
        Plugin.call($spy,$spy.data())})})}(jQuery);+function($){'use strict';var Tab=function(element){this.element=$(element)}
    Tab.VERSION='3.3.7'
    Tab.TRANSITION_DURATION=150
    Tab.prototype.show=function(){var $this=this.element
        var $ul=$this.closest('ul:not(.dropdown-menu)')
        var selector=$this.data('target')
        if(!selector){selector=$this.attr('href')
            selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
        if($this.parent('li').hasClass('active'))return
        var $previous=$ul.find('.active:last a')
        var hideEvent=$.Event('hide.bs.tab',{relatedTarget:$this[0]})
        var showEvent=$.Event('show.bs.tab',{relatedTarget:$previous[0]})
        $previous.trigger(hideEvent)
        $this.trigger(showEvent)
        if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented())return
        var $target=$(selector)
        this.activate($this.closest('li'),$ul)
        this.activate($target,$target.parent(),function(){$previous.trigger({type:'hidden.bs.tab',relatedTarget:$this[0]})
            $this.trigger({type:'shown.bs.tab',relatedTarget:$previous[0]})})}
    Tab.prototype.activate=function(element,container,callback){var $active=container.find('> .active')
        var transition=callback&&$.support.transition&&($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length)
        function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',false)
            element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded',true)
            if(transition){element[0].offsetWidth
                element.addClass('in')}else{element.removeClass('fade')}
            if(element.parent('.dropdown-menu').length){element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded',true)}
            callback&&callback()}
        $active.length&&transition?$active.one('bsTransitionEnd',next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next()
        $active.removeClass('in')}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.tab')
        if(!data)$this.data('bs.tab',(data=new Tab(this)))
        if(typeof option=='string')data[option]()})}
    var old=$.fn.tab
    $.fn.tab=Plugin
    $.fn.tab.Constructor=Tab
    $.fn.tab.noConflict=function(){$.fn.tab=old
        return this}
    var clickHandler=function(e){e.preventDefault()
        Plugin.call($(this),'show')}
    $(document).on('click.bs.tab.data-api','[data-toggle="tab"]',clickHandler).on('click.bs.tab.data-api','[data-toggle="pill"]',clickHandler)}(jQuery);+function($){'use strict';var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options)
    this.$target=$(this.options.target).on('scroll.bs.affix.data-api',$.proxy(this.checkPosition,this)).on('click.bs.affix.data-api',$.proxy(this.checkPositionWithEventLoop,this))
    this.$element=$(element)
    this.affixed=null
    this.unpin=null
    this.pinnedOffset=null
    this.checkPosition()}
    Affix.VERSION='3.3.7'
    Affix.RESET='affix affix-top affix-bottom'
    Affix.DEFAULTS={offset:0,target:window}
    Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop()
        var position=this.$element.offset()
        var targetHeight=this.$target.height()
        if(offsetTop!=null&&this.affixed=='top')return scrollTop<offsetTop?'top':false
        if(this.affixed=='bottom'){if(offsetTop!=null)return(scrollTop+this.unpin<=position.top)?false:'bottom'
            return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:'bottom'}
        var initializing=this.affixed==null
        var colliderTop=initializing?scrollTop:position.top
        var colliderHeight=initializing?targetHeight:height
        if(offsetTop!=null&&scrollTop<=offsetTop)return'top'
        if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom))return'bottom'
        return false}
    Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop=this.$target.scrollTop()
        var position=this.$element.offset()
        return(this.pinnedOffset=position.top-scrollTop)}
    Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)}
    Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
        var height=this.$element.height()
        var offset=this.options.offset
        var offsetTop=offset.top
        var offsetBottom=offset.bottom
        var scrollHeight=Math.max($(document).height(),$(document.body).height())
        if(typeof offset!='object')offsetBottom=offsetTop=offset
        if(typeof offsetTop=='function')offsetTop=offset.top(this.$element)
        if(typeof offsetBottom=='function')offsetBottom=offset.bottom(this.$element)
        var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom)
        if(this.affixed!=affix){if(this.unpin!=null)this.$element.css('top','')
            var affixType='affix'+(affix?'-'+affix:'')
            var e=$.Event(affixType+'.bs.affix')
            this.$element.trigger(e)
            if(e.isDefaultPrevented())return
            this.affixed=affix
            this.unpin=affix=='bottom'?this.getPinnedOffset():null
            this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix','affixed')+'.bs.affix')}
        if(affix=='bottom'){this.$element.offset({top:scrollHeight-height-offsetBottom})}}
    function Plugin(option){return this.each(function(){var $this=$(this)
        var data=$this.data('bs.affix')
        var options=typeof option=='object'&&option
        if(!data)$this.data('bs.affix',(data=new Affix(this,options)))
        if(typeof option=='string')data[option]()})}
    var old=$.fn.affix
    $.fn.affix=Plugin
    $.fn.affix.Constructor=Affix
    $.fn.affix.noConflict=function(){$.fn.affix=old
        return this}
    $(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this)
        var data=$spy.data()
        data.offset=data.offset||{}
        if(data.offsetBottom!=null)data.offset.bottom=data.offsetBottom
        if(data.offsetTop!=null)data.offset.top=data.offsetTop
        Plugin.call($spy,data)})})}(jQuery);(function(root,factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else if(typeof exports==="object"){module.exports=factory(require("jquery"));}else{root.bootbox=factory(root.jQuery);}}(this,function init($,undefined){"use strict";var templates={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'>"+"<div class='modal-dialog'>"+"<div class='modal-content'>"+"<div class='modal-body'><div class='bootbox-body'></div></div>"+"</div>"+"</div>"+"</div>",header:"<div class='modal-header'>"+"<h4 class='modal-title'></h4>"+"</div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}};var defaults={locale:"en",backdrop:"static",animate:true,className:null,closeButton:true,show:true,container:"body"};var exports={};function _t(key){var locale=locales[defaults.locale];return locale?locale[key]:locales.en[key];}
    function processCallback(e,dialog,callback){e.stopPropagation();e.preventDefault();var preserveDialog=$.isFunction(callback)&&callback.call(dialog,e)===false;if(!preserveDialog){dialog.modal("hide");}}
    function getKeyLength(obj){var k,t=0;for(k in obj){t++;}
        return t;}
    function each(collection,iterator){var index=0;$.each(collection,function(key,value){iterator(key,value,index++);});}
    function sanitize(options){var buttons;var total;if(typeof options!=="object"){throw new Error("Please supply an object of options");}
        if(!options.message){throw new Error("Please specify a message");}
        options=$.extend({},defaults,options);if(!options.buttons){options.buttons={};}
        buttons=options.buttons;total=getKeyLength(buttons);each(buttons,function(key,button,index){if($.isFunction(button)){button=buttons[key]={callback:button};}
            if($.type(button)!=="object"){throw new Error("button with key "+key+" must be an object");}
            if(!button.label){button.label=key;}
            if(!button.className){if(total<=2&&index===total-1){button.className="btn-primary";}else{button.className="btn-default";}}});return options;}
    function mapArguments(args,properties){var argn=args.length;var options={};if(argn<1||argn>2){throw new Error("Invalid argument length");}
        if(argn===2||typeof args[0]==="string"){options[properties[0]]=args[0];options[properties[1]]=args[1];}else{options=args[0];}
        return options;}
    function mergeArguments(defaults,args,properties){return $.extend(true,{},defaults,mapArguments(args,properties));}
    function mergeDialogOptions(className,labels,properties,args){var baseOptions={className:"bootbox-"+className,buttons:createLabels.apply(null,labels)};return validateButtons(mergeArguments(baseOptions,args,properties),labels);}
    function createLabels(){var buttons={};for(var i=0,j=arguments.length;i<j;i++){var argument=arguments[i];var key=argument.toLowerCase();var value=argument.toUpperCase();buttons[key]={label:_t(value)};}
        return buttons;}
    function validateButtons(options,buttons){var allowedButtons={};each(buttons,function(key,value){allowedButtons[value]=true;});each(options.buttons,function(key){if(allowedButtons[key]===undefined){throw new Error("button key "+key+" is not allowed (options are "+buttons.join("\n")+")");}});return options;}
    exports.alert=function(){var options;options=mergeDialogOptions("alert",["ok"],["message","callback"],arguments);if(options.callback&&!$.isFunction(options.callback)){throw new Error("alert requires callback property to be a function when provided");}
        options.buttons.ok.callback=options.onEscape=function(){if($.isFunction(options.callback)){return options.callback.call(this);}
            return true;};return exports.dialog(options);};exports.confirm=function(){var options;options=mergeDialogOptions("confirm",["cancel","confirm"],["message","callback"],arguments);options.buttons.cancel.callback=options.onEscape=function(){return options.callback.call(this,false);};options.buttons.confirm.callback=function(){return options.callback.call(this,true);};if(!$.isFunction(options.callback)){throw new Error("confirm requires a callback");}
        return exports.dialog(options);};exports.prompt=function(){var options;var defaults;var dialog;var form;var input;var shouldShow;var inputOptions;form=$(templates.form);defaults={className:"bootbox-prompt",buttons:createLabels("cancel","confirm"),value:"",inputType:"text"};options=validateButtons(mergeArguments(defaults,arguments,["title","callback"]),["cancel","confirm"]);shouldShow=(options.show===undefined)?true:options.show;options.message=form;options.buttons.cancel.callback=options.onEscape=function(){return options.callback.call(this,null);};options.buttons.confirm.callback=function(){var value;switch(options.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":value=input.val();break;case"checkbox":var checkedItems=input.find("input:checked");value=[];each(checkedItems,function(_,item){value.push($(item).val());});break;}
        return options.callback.call(this,value);};options.show=false;if(!options.title){throw new Error("prompt requires a title");}
        if(!$.isFunction(options.callback)){throw new Error("prompt requires a callback");}
        if(!templates.inputs[options.inputType]){throw new Error("invalid prompt type");}
        input=$(templates.inputs[options.inputType]);switch(options.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":input.val(options.value);break;case"select":var groups={};inputOptions=options.inputOptions||[];if(!$.isArray(inputOptions)){throw new Error("Please pass an array of input options");}
            if(!inputOptions.length){throw new Error("prompt with select requires options");}
            each(inputOptions,function(_,option){var elem=input;if(option.value===undefined||option.text===undefined){throw new Error("given options in wrong format");}
                if(option.group){if(!groups[option.group]){groups[option.group]=$("<optgroup/>").attr("label",option.group);}
                    elem=groups[option.group];}
                elem.append("<option value='"+option.value+"'>"+option.text+"</option>");});each(groups,function(_,group){input.append(group);});input.val(options.value);break;case"checkbox":var values=$.isArray(options.value)?options.value:[options.value];inputOptions=options.inputOptions||[];if(!inputOptions.length){throw new Error("prompt with checkbox requires options");}
            if(!inputOptions[0].value||!inputOptions[0].text){throw new Error("given options in wrong format");}
            input=$("<div/>");each(inputOptions,function(_,option){var checkbox=$(templates.inputs[options.inputType]);checkbox.find("input").attr("value",option.value);checkbox.find("label").append(option.text);each(values,function(_,value){if(value===option.value){checkbox.find("input").prop("checked",true);}});input.append(checkbox);});break;}
        if(options.placeholder){input.attr("placeholder",options.placeholder);}
        if(options.pattern){input.attr("pattern",options.pattern);}
        if(options.maxlength){input.attr("maxlength",options.maxlength);}
        form.append(input);form.on("submit",function(e){e.preventDefault();e.stopPropagation();dialog.find(".btn-primary").click();});dialog=exports.dialog(options);dialog.off("shown.bs.modal");dialog.on("shown.bs.modal",function(){input.focus();});if(shouldShow===true){dialog.modal("show");}
        return dialog;};exports.dialog=function(options){options=sanitize(options);var dialog=$(templates.dialog);var innerDialog=dialog.find(".modal-dialog");var body=dialog.find(".modal-body");var buttons=options.buttons;var buttonStr="";var callbacks={onEscape:options.onEscape};if($.fn.modal===undefined){throw new Error("$.fn.modal is not defined; please double check you have included "+"the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ "+"for more details.");}
        each(buttons,function(key,button){buttonStr+="<button data-bb-handler='"+key+"' type='button' class='btn "+button.className+"'>"+button.label+"</button>";callbacks[key]=button.callback;});body.find(".bootbox-body").html(options.message);if(options.animate===true){dialog.addClass("fade");}
        if(options.className){dialog.addClass(options.className);}
        if(options.size==="large"){innerDialog.addClass("modal-lg");}else if(options.size==="small"){innerDialog.addClass("modal-sm");}
        if(options.title){body.before(templates.header);}
        if(options.closeButton){var closeButton=$(templates.closeButton);if(options.title){dialog.find(".modal-header").prepend(closeButton);}else{closeButton.css("margin-top","-10px").prependTo(body);}}
        if(options.title){dialog.find(".modal-title").html(options.title);}
        if(buttonStr.length){body.after(templates.footer);dialog.find(".modal-footer").html(buttonStr);}
        dialog.on("hidden.bs.modal",function(e){if(e.target===this){dialog.remove();}});dialog.on("shown.bs.modal",function(){dialog.find(".btn-primary:first").focus();});if(options.backdrop!=="static"){dialog.on("click.dismiss.bs.modal",function(e){if(dialog.children(".modal-backdrop").length){e.currentTarget=dialog.children(".modal-backdrop").get(0);}
            if(e.target!==e.currentTarget){return;}
            dialog.trigger("escape.close.bb");});}
        dialog.on("escape.close.bb",function(e){if(callbacks.onEscape){processCallback(e,dialog,callbacks.onEscape);}});dialog.on("click",".modal-footer button",function(e){var callbackKey=$(this).data("bb-handler");processCallback(e,dialog,callbacks[callbackKey]);});dialog.on("click",".bootbox-close-button",function(e){processCallback(e,dialog,callbacks.onEscape);});dialog.on("keyup",function(e){if(e.which===27){dialog.trigger("escape.close.bb");}});$(options.container).append(dialog);dialog.modal({backdrop:options.backdrop?"static":false,keyboard:false,show:false});if(options.show){dialog.modal("show");}
        return dialog;};exports.setDefaults=function(){var values={};if(arguments.length===2){values[arguments[0]]=arguments[1];}else{values=arguments[0];}
        $.extend(defaults,values);};exports.hideAll=function(){$(".bootbox").modal("hide");return exports;};var locales={bg_BG:{OK:"Ок",CANCEL:"Отказ",CONFIRM:"Потвърждавам"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fa:{OK:"قبول",CANCEL:"لغو",CONFIRM:"تایید"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},hu:{OK:"OK",CANCEL:"Mégsem",CONFIRM:"Megerősít"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"ตกลง",CANCEL:"ยกเลิก",CONFIRM:"ยืนยัน"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};exports.addLocale=function(name,values){$.each(["OK","CANCEL","CONFIRM"],function(_,v){if(!values[v]){throw new Error("Please supply a translation for '"+v+"'");}});locales[name]={OK:values.OK,CANCEL:values.CANCEL,CONFIRM:values.CONFIRM};return exports;};exports.removeLocale=function(name){delete locales[name];return exports;};exports.setLocale=function(name){return exports.setDefaults("locale",name);};exports.init=function(_$){return init(_$||$);};return exports;}));"use strict";$.fn.fs_exists=function(){return(this.length!==0);}
var fs=fs||{};fs.string=(function(){return{padLeft:function(num,padCount){num=String(num);while(num.length<padCount){num='0'+num;}
        return num;}}})();fs.uic=(function(){return{initPopover:function(manualInit){var manualCondition=(typeof manualInit!=='undefined')?"[data-manual-init="+manualInit+"]":"";var popoverObj=$('[data-toggle="popover"]'+manualCondition);if(popoverObj.length>0){popoverObj.popover({container:'body'});popoverObj.on('click',function(e){e.preventDefault();e.stopPropagation();});if(fs.util.ua().isiOS){popoverObj.on("shown.bs.popover",function(){$('body').css('cursor','pointer');});popoverObj.on("hide.bs.popover",function(){$('body').css('cursor','auto');});}}}}})();fs.namespace=function(ns_string){var parts=ns_string.split('.'),parent=fs,i;if(parts[0]==="fs"){parts=parts.slice(1);}
    for(i=0;i<parts.length;i++){if(typeof parent[parts[i]]==="undefined"){parent[parts[i]]={};}
        parent=parent[parts[i]];}
    return parent;};fs.escapeHtml=function(text){return text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");};fs.throttle=function(func,wait,options){var timeout,context,args,result;var previous=0;if(!options)options={};var later=function(){previous=options.leading===false?0:+new Date();timeout=null;result=func.apply(context,args);if(!timeout)context=args=null;};var throttled=function(){var now=+new Date();if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0||remaining>wait){if(timeout){clearTimeout(timeout);timeout=null;}
    previous=now;result=func.apply(context,args);if(!timeout)context=args=null;}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining);}
    return result;};throttled.cancel=function(){clearTimeout(timeout);previous=0;timeout=context=args=null;};return throttled;};fs.debounce=function(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};};fs.post=function(url,data,success,dataType,showLoading){return fs.ajaxProxy('post',url,data,success,dataType,showLoading);};fs.get=function(url,data,success,dataType,showLoading){return fs.ajaxProxy('get',url,data,success,dataType,showLoading);};fs.ajaxProxy=function(method,url,data,success,dataType,loadingOpt){var opt_showLoading=true,custom_msg="",loading_block,ajax,ajax_settings,ajax_method,ajax_success,hide_loading_function;if(typeof loadingOpt!=='undefined'){if(typeof loadingOpt==='string'){custom_msg=loadingOpt;}
else{opt_showLoading=loadingOpt;}}
    ajax_method=(method==='get')?'GET':'POST';ajax_settings={type:ajax_method,url:url,data:data,dataType:dataType};if(opt_showLoading){hide_loading_function=function(){loading_block.hide();};loading_block=fs.loadingMsg(custom_msg);if(typeof success==='undefined'){ajax_success=hide_loading_function;}
    else{if($.isArray(success)){ajax_success=success;ajax_success.unshift(hide_loading_function);}
    else{ajax_success=[hide_loading_function,success];}}
        ajax_settings.success=ajax_success;ajax_settings.error=hide_loading_function;}
    else{ajax_settings.success=success;}
    ajax=$.ajax(ajax_settings);ajax.fail(function(jqXhr,exception){var failMsg="";if(jqXhr.status===0){failMsg=_T('network-error')+' (network error)';}
    else if(jqXhr.status=="201"){failMsg=_T('server-error')+' (server error)';}
    else if(jqXhr.status=="404"){failMsg=_T('page-not-found')+' (page not found)';}
    else if(jqXhr.status=="500"){failMsg=_T('server-error')+' (internal server error)';}
    else if(exception==='timeout'){failMsg=_T('network-error')+' (request timeout)';}
    else{failMsg=_T('server-error')+' (unknown error: '+jqXhr.responseText+')';}
        fs.box.alert({message:failMsg,title:_T('save-error'),buttons:{ok:{label:_T('closeMsg')}},callback:function(result){if(result){}}});});return ajax;};fs.loadingMsg=function(msg){var loading_block;if(typeof msg=="undefined"||msg===""){loading_block=$("body").children(".fs-loading");if(loading_block.length>0){loading_block.show();}
else{loading_block=$("<div class='fs-loading'><div class='fs-loading-msg'><img src='/sys/res/icon/loading3.gif' width=16px height=16px></img> Loading ...<div><div>");loading_block.appendTo("body").show();}}
else{loading_block=$("body").children(".fs-custom-loading");if(loading_block.length>0){loading_block.children(".custom-msg").text(msg);loading_block.show();}
else{loading_block=$("<div class='fs-custom-loading'><span class='custom-msg'>"+msg+"</span><div>");loading_block.appendTo("body").show();}
    loading_block.css({position:'fixed',left:($(window).width()-loading_block.outerWidth())/2,top:($(window).height()-loading_block.outerHeight())/2});}
    return{show:function(){loading_block.show();},hide:function(){loading_block.hide();}}};fs.collapse=function(data_url,collapse_id,container_id){var collapse_block=$("#"+collapse_id);if(typeof collapse_block.data('loaded')=='undefined'){if(collapse_block.data('loading')){return;}
    collapse_block.data('loading',true);fs.loadView(collapse_block,data_url,{},function(o){if(typeof container_id!=='undefined'){$("#"+container_id).show();collapse_block.data('loaded',true);collapse_block.hide().slideDown(200);if(typeof MathJax!=='undefined'){MathJax.Hub.Typeset();}}
    else{collapse_block.data('loaded',true);}});}
else{if(collapse_block.is(":visible")){if(typeof container_id!=='undefined'){collapse_block.slideUp(200,function(){$("#"+container_id).hide();});}
else{collapse_block.slideUp(200);}}
else{if(typeof container_id!=='undefined'){$("#"+container_id).show();}
    collapse_block.slideDown(200);}}};fs.table=(function(){return{checkedInfoTemplate:'${count}',reserveCheckedItems:new Array(),initCheckbox:function(tableID,checkedItems){fs.table.reserveCheckedItems[tableID]=checkedItems;$("#"+tableID+" [name='chkbox']").each(function(i,v){var inputElement=$(v);if(fs.table.reserveCheckedItems[tableID].indexOf(inputElement.prop('value'))>=0){inputElement.prop('checked',true);}});var nItems=$("#"+tableID+" [name='chkbox']").not(':disabled').length;var nCheckedItems=$("#"+tableID+" [name='chkbox']:checked").length;var value=(nItems==nCheckedItems&&nItems!==0)?true:false;$("#"+tableID+"_toggleAll").prop('checked',value);$("#"+tableID+"_toggleAll").click(function(){fs.table.toggleAll(tableID);});$("#"+tableID+" [name='chkbox']").click(function(){var nItems=$("#"+tableID+" [name='chkbox']").not(':disabled').length;var nCheckedItems=$("#"+tableID+" [name='chkbox']:checked").length;var value=(nItems==nCheckedItems)?true:false;$("#"+tableID+"_toggleAll").prop('checked',value);var inputElement=$(this);if(!inputElement.prop('checked')){var i=fs.table.reserveCheckedItems[tableID].indexOf(inputElement.prop('value'));if(i>=0){fs.table.reserveCheckedItems[tableID].splice(i,1);}}
        fs.table.updateCheckedInfo(tableID);});$("#"+tableID+"-check-all").click(function(){var text=$(this).text();if(text==_T('cancel-check-all')){var result=confirm(_T('cancel-check-all-confirm'));if(result){fs.table.reserveCheckedItems[tableID]=[];$("#"+tableID+" [name='chkbox']").each(function(i,v){var inputElement=$(v);inputElement.prop('checked',false);});$("#"+tableID+"_toggleAll").prop('checked',false);$("#"+tableID+"-checked-info").html($.tmpl(fs.table.checkedInfoTemplate,{'count':0}));$("#"+tableID+"-check-all a").text(_T('check-all'));}}
    else if(text==_T('check-all')){var allItemsAjaxUrl=$(this).data('allItemsAjaxUrl');$.post(allItemsAjaxUrl,function(resp){var result=confirm(_T('check-all-confirm').replace('%count%',resp.data.length));if(result){fs.table.reserveCheckedItems[tableID]=resp.data;$("#"+tableID+" [name='chkbox']").each(function(i,v){var inputElement=$(v);if(resp.data.indexOf(inputElement.prop('value'))>=0){inputElement.prop('checked',true);}});$("#"+tableID+"_toggleAll").prop('checked',true);$("#"+tableID+"-checked-info").html($.tmpl(fs.table.checkedInfoTemplate,{'count':resp.data.length}));$("#"+tableID+"-check-all a").text(_T('cancel-check-all'));}});}});fs.table.updateCheckedInfo(tableID);},toggleAll:function(tableID){var _checked=$("#"+tableID+'_toggleAll').is(":checked");if(_checked){$("#"+tableID+" [name='chkbox']").not(':checked, :disabled').trigger('click');}
    else{$("#"+tableID+" [name='chkbox']:checked").trigger('click');}},getCheckedItems:function(tableID,delimiter){delimiter=delimiter||"#";var _list=new Array();if(tableID!==''){$("#"+tableID+" [name='chkbox']:checked").each(function(){_list.push($(this).val());});}
        var items=_list.concat(fs.table.reserveCheckedItems[tableID]);items=items.filter(function(item,pos){return items.indexOf(item)===pos&&item!=='';});return items.join(delimiter);},updateCheckedInfo:function(tableID){var checkedInfo=fs.table.getCheckedItems(tableID,',');var checkedCount=(checkedInfo=='')?0:checkedInfo.split(',').length;$("#"+tableID+"-checked-info").html($.tmpl(fs.table.checkedInfoTemplate,{'count':checkedCount}));var checkAll=$("#"+tableID+"-check-all");if(checkAll.length>0){var allItemsAjaxUrl=checkAll.data('allItemsAjaxUrl');$.post(allItemsAjaxUrl,function(resp){if(resp.data.length==checkedCount){checkAll.find('a').text(_T('cancel-check-all'));}else{checkAll.find('a').text(_T('check-all'));}});}},getCheckedValue:function(tableID){return $("#"+tableID+" [name='radio']:checked").val();},initCollapse:function(tableID){$("#"+tableID+" [data-role='row-collapse-toggle']").click(function(){e.preventDefault();fs.table.toggleCollapse($(this));});},toggleCollapse:function(toggleObj){var row=toggleObj.closest('tr');if(row.data['loading']){return;}
        if(row.next('[data-role="row-collapse-block"]').length==0){}
        else{}}};})();fs.pagination=(function(){return{formPost:function(params){var f=$('<form method="post"></form>');$.each(params,function(k,v){if(Array.isArray(v)){$.each(v,function(i,j){f.append('<input name="'+k+'['+i+']" type="hidden" value="'+j+'">');});}else{f.append('<input name="'+k+'" type="hidden" value="'+v+'">');}});f.appendTo('body').submit();}};})();fs.copylink=function(selector,msg){var range,selection;var copyUrl=document.querySelector(selector);var isTextarea=(copyUrl.tagName.toLowerCase()=='textarea')?true:false;var successful=false;var copyFunc=function(e){e.preventDefault();e.originalEvent.clipboardData.setData('text/plain',copyUrl.value);};if(window.clipboardData){window.clipboardData.clearData();successful=window.clipboardData.setData("Text",isTextarea?copyUrl.value:copyUrl.innerText);}
else{if(isTextarea){$(document).on('copy',copyFunc);successful=document.execCommand('copy');$(document).off('copy',copyFunc);}
else if(window.getSelection){range=document.createRange();selection=window.getSelection();range.selectNodeContents(copyUrl);selection.removeAllRanges();selection.addRange(range);successful=document.execCommand('copy');selection.removeAllRanges();}}
    var msg=successful?msg.copiedAlert:msg.failcopy;alert(msg);};fs.log=function(o){if(typeof console==="undefined"||typeof console.log==="undefined"){alert(o);return;}
    var e=new Error();if(e.stack){console.log("Callstack:\n"+e.stack.split("\n").slice(2).join("\n"));}
    console.log(o);};fs.setFontBase=function(setUrl,fontBase){fs.post(setUrl,{'fontBase':fontBase},function(o){if(o.ret.status=='false'){alert(o.ret.msg);return;};window.location.reload();});};fs.event=(function(){var callbacks={};return{register:function(event,fn){if(typeof callbacks[event]==="undefined"){callbacks[event]=[];}
        callbacks[event].push(fn);},registerOne:function(event,fn){fn.one=true;fs.event.register(event,fn);},trigger:function(event){if(typeof callbacks[event]==="undefined"){return;}
        var args=Array.prototype.slice.call(arguments,1);callbacks[event].forEach(function(fn,key){if(typeof fn==="function"){fn.apply(null,args);if(fn.one){delete(callbacks[event][key]);}}});},hasHandler:function(event){return!!callbacks[event]&&callbacks[event].length;}}})();fs.box=(function(){return{dialog:function(options){bootbox.hideAll();if(options.url){options.message=$('<iframe>',{src:options.url,frameborder:0,border:0,allowfullscreen:'allowfullscreen',css:{'display':'block','width':'100%','height':'100%'}});}
        var buttons=[];if(options.buttons){$.each(options.buttons,function(idx,item){item['class']=item.className;buttons.push(item);});}
        var header=options.title;if(typeof options.subTitle!=='undefined'){header=header+" <span class='hint'>"+options.subTitle+"</span>";}
        var dialog=bootbox.dialog(options);var modalDialog=dialog.find('.modal-dialog');if(options.url){modalDialog.addClass('bootbox-iframe');var iframe=modalDialog.find('iframe').first();iframe.load(function(){var cancelBtn=iframe.contents().find('button[data-role="form-cancel"]:visible').first();var triggerCancel=function(){if(cancelBtn){cancelBtn.trigger('click');}};dialog.on('keyup.dismiss.modal',function(e){if(e.which===27&&options.onEscape){triggerCancel();}});dialog.find('button.close').click(function(e){triggerCancel();});});}
        var w=options.width||'',h=options.height||'';if(w!=='auto'&&w>$(window).width()){w=parseInt($(window).width(),10)-20;}
        if(h!=='auto'&&h>$(window).height()){h=parseInt($(window).height(),10)-20;}
        var dialog_css={'width':w,'height':h};var customClass=(typeof options.customClass=='undefined')?'':options.customClass;if(typeof options.css!=='undefined'){for(var attr in options.css){dialog_css[attr]=options.css[attr];}}
        modalDialog.css(dialog_css).addClass('fs-box-dialog').addClass(customClass).toggleClass('fs-box-dialog--iframe',!!options.url);if(h!='auto'){modalDialog.find('.bootbox-body').css({height:modalDialog.height()-153});}
        dialog.on('hidden.bs.modal',function(){fs.event.trigger('dialog.close');});dialog.on('shown.bs.modal',function(){var $iframe=modalDialog.find("iframe");$iframe.bind('load',function(){$iframe[0].contentWindow.$("body").addClass('fs-modal');});if($iframe[0]&&$iframe[0].contentWindow.$){$iframe[0].contentWindow.$("body").addClass('fs-modal');}
            fs.event.trigger('dialog.shown');});return dialog;},alert:function(options){return bootbox.alert(options).addClass('fs-box-alert');},confirm:function(options){options=$.extend(true,{message:_T('confirm-message'),buttons:{confirm:{label:_T('ok'),className:'btn-primary'},cancel:{label:_T('cancel'),className:'btn-default'}},callback:function(result){if(result===true){}}},options);return bootbox.confirm(options).addClass('fs-box-confirm');},info:function(options){options=$.extend({yes:{}},options);var buttons=[{label:options.yes.label||_T('ok'),className:options.yes.className||'btn-primary',callback:function(){if(typeof options.yes.callback==='function'){return options.yes.callback();}}}];$.each(buttons,function(idx,item){buttons[idx]['class']=item.className;});options.buttons=buttons;var options_v3={header:options.title,onEscape:options.onEscape||true,backdrop:options.backdrop};return this.dialog(options);},hideAll:function(){bootbox.hideAll();$("#_fsMask_").remove();},mask:function(msg){if($("#_fsMask_").length){$("#_fsMask_").html(msg);return;}
        $("<div/>").addClass("fs-mask").attr("id","_fsMask_").append($("<div/>").addClass("fs-maskNote").html(msg)).appendTo("body");}}})();fs.lib=(function(){return{tpl:function(tpl,obj){var rendered=tpl;$.each(obj,function(key,value){var re=new RegExp("{{"+key+"}}","gm");rendered=rendered.replace(re,value);});return rendered;}}})();(function($){"use strict";var tmpl=function(str,data){var f=!/[^\w\-\.:]/.test(str)?tmpl.cache[str]=tmpl.cache[str]||tmpl(tmpl.load(str)):new Function(tmpl.arg+',tmpl',"var _e=tmpl.encode"+tmpl.helper+",_s='"+
    str.replace(tmpl.regexp,tmpl.func)+"';return _s;");return data?f(data,tmpl):function(data){return f(data,tmpl);};};tmpl.cache={};tmpl.load=function(id){return document.getElementById(id).innerHTML;};tmpl.regexp=/([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g;tmpl.func=function(s,p1,p2,p3,p4,p5){if(p1){return{"\n":"\\n","\r":"\\r","\t":"\\t"," ":" "}[p1]||"\\"+p1;}
    if(p2){if(p2==="="){return"'+_e("+p3+")+'";}
        return"'+("+p3+"==null?'':"+p3+")+'";}
    if(p4){return"';";}
    if(p5){return"_s+='";}};tmpl.encReg=/[<>&"'\x00]/g;tmpl.encMap={"<":"&lt;",">":"&gt;","&":"&amp;","\"":"&quot;","'":"&#39;"};tmpl.encode=function(s){return(s==null?"":""+s).replace(tmpl.encReg,function(c){return tmpl.encMap[c]||"";});};tmpl.arg="o";tmpl.helper=",print=function(s,e){_s+=e?(s==null?'':s):_e(s);}"+",include=function(s,d){_s+=tmpl(s,d);}";if(typeof define==="function"&&define.amd){define(function(){return tmpl;});}else{$.tmpl=tmpl;}}(fs));fs.url=(function(){return{changeHash:function(target,focus){focus=focus||false;if(!focus){var randomID=fs.util.genUID();$("#"+target).attr('id',randomID);window.location.hash="#"+target;$("#"+randomID).attr('id',target);return;}
        window.location.hash="#"+target;},encode:function(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');},decode:function(url){url=(url+'').toString();return decodeURIComponent(url).replace(/%21/g,'!').replace(/%27/g,'\'').replace(/%28/g,'(').replace(/%29/g,')').replace(/%2A/g,'*').replace(/\+/g,'%20');},getParam:function(name){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search);return results==null?"":decodeURIComponent(results[1].replace(/\+/g," "));},parse:function(url){var parser=document.createElement('a');parser.href=url;return{scheme:parser.protocol.slice(0,-1),host:parser.hostname,port:parseInt(parser.port,10),user:parser.username,pass:parser.password,path:parser.pathname,query:parser.search.substr(1),fragment:parser.hash.substr(1)}},getQueryObject:function(url){var parse=fs.url.parse(url),querys=[],queryObject={};if(parse.query.length){querys=parse.query.split('&');$.each(querys,function(k,query){var q=query.split('=');queryObject[q[0]]=decodeURIComponent(q[1].replace(/\+/g," "));});}
        return queryObject;}}})();(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){factory(require('jquery'));}else{factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
    function decode(s){return config.raw?s:decodeURIComponent(s);}
    function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
    function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
        try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
    function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
    var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(document.location.protocol=='https:'){options.secure=true;}
        if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5);}
        return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
        var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break;}
            if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
        return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}
        $.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));fs.localStorage=(function(){return{isSupport:function(){var test='fs_test';try{localStorage.setItem(test,test);localStorage.removeItem(test);return true;}catch(e){return false;}
        return false;},setItem:function(key,value){localStorage.setItem(key,value);},getItem:function(key){return localStorage.getItem(key);},removeItem:function(key){localStorage.removeItem(key);},clear:function(){localStorage.clear();}};})();fs.cookie=(function($){var defaultOpt={path:'/'};return{isSupport:function(){if(navigator&&typeof navigator.cookieEnabled!=='undefined'){$.cookie('cookieSupported','supported',{expires:1});var supported=($.cookie('cookieSupported')=='supported');$.removeCookie('cookieSupported');return supported;}
        return false;},setItem:function(key,value,opt){$.cookie(key,value,$.extend(defaultOpt,opt));},getItem:function(key){return $.cookie(key);},removeItem:function(key){$.removeCookie(key);},clear:function(){$.each($.cookie(),function(key,value){$.removeCookie(key);});}}})(jQuery);fs.storage=(function(){var support={localStorage:fs.localStorage.isSupport(),cookie:fs.cookie.isSupport()},data={};return{setItem:function(key,value,opt){data[key]=value;if(support.localStorage)fs.localStorage.setItem(key,value);else if(support.cookie)fs.cookie.setItem(key,value,{expires:365});},getItem:function(key){if(support.localStorage)return fs.localStorage.getItem(key);else if(support.cookie)return fs.cookie.getItem(key);else return data[key];},removeItem:function(key){delete data[key];if(support.localStorage)
        fs.localStorage.removeItem(key);else if(support.cookie)
        fs.cookie.removeItem(key);},clear:function(){data={};if(support.localStorage)
        fs.localStorage.clear();else if(support.cookie)
        fs.cookie.clear();}};})();fs.sessionStorage=(function(){var prefix='_session_storage_',isSupportSessionStorage=false;return{setItem:function(key,value){if(isSupportSessionStorage){sessionStorage.setItem(key,value);}else{fs.cookie.setItem(prefix+key,value);}},getItem:function(key){if(isSupportSessionStorage){return sessionStorage.getItem(key);}else{return fs.cookie.getItem(prefix+key);}},removeItem:function(key){if(isSupportSessionStorage){sessionStorage.removeItem(key);}else{fs.cookie.removeItem(prefix+key);}},clear:function(){if(isSupportSessionStorage){sessionStorage.clear();}else{fs.cookie.clear();}}};})();fs.util=(function(){var _index=0;return{getSequenceID:function(){return _index++;},utf8ToBase64:function(str){return btoa(unescape(encodeURIComponent(str)));},base64ToUtf8:function(str){return decodeURIComponent(escape(atob(str)));},bitrate:function(size,precision){var _size=parseInt(size,10),prec=precision||2,levelIndex=0;while(_size>1024){_size/=1024;levelIndex++;}
        return parseFloat(_size.toFixed(prec))+['bps','Kbps','Mbps','Gbps','Tbps','Pbps'][levelIndex];},genUID:function(){return Math.random().toString(36).substring(2);},escape:function(message){return fs.tmpl.encode(message);},htmlEncode:function(value){return $('<div/>').text(value).html();},htmlDecode:function(value){return $('<div/>').html(value).text();},parseFileName:function(fileName){var unit=fileName.split("."),ext=(unit.length===1||(unit[0]===""&&unit.length===2))?'':unit.pop(),name=unit.join(".");return[name,ext];},byteFormat:function(size,precision){var _size=parseInt(size,10),prec=precision||2,levelIndex=0;while(_size>1024){_size/=1024;levelIndex++;}
        return parseFloat(_size.toFixed(prec))+" "+['bytes','KB','MB','GB','TB','PB'][levelIndex];},time2str:function(time){var d=new Date(time);if(isNaN(d.getTime())){return"00:00:00.000";}
        return fs.util.paddingLeft(d.getHours(),2,"0")
            +":"+fs.util.paddingLeft(d.getMinutes(),2,"0")
            +":"+fs.util.paddingLeft(d.getSeconds(),2,"0")
            +"."+fs.util.paddingLeft(d.getMilliseconds(),3,"0");},str2time:function(str){var d=new Date(0),t=str.split(":"),s=t[2]&&t[2].split(",")||[];d.setHours(t[0]||0);d.setMinutes(t[1]||0);d.setSeconds(s[0]||0);d.setMilliseconds(s[1]||0);return d.getTime();},paddingRight:function(str,len,prefix){return fs.util.padding(str,len,prefix,false);},paddingLeft:function(str,len,prefix){return fs.util.padding(str,len,prefix,true);},padding:function(str,len,prefix,left){if(typeof str==='undefined'||!len||str.length>=len){return str;}
        prefix=(typeof prefix==='undefined')?" ":prefix.toString();str=str.toString();left=!!left;return left?(new Array(len-str.length+1)).join(prefix)+str:str+(new Array(len-str.length+1)).join(prefix);},posToTime:function(msec,removeEmpty){if(msec<=0)return removeEmpty?'00:00':'00:00:00.0';var sec=msec+'';var milli=(sec.indexOf(".")==-1)?'0':sec.substr(sec.indexOf('.')+1);var total_sec=parseInt(msec,10);var sec=total_sec%60;var min=parseInt(total_sec/60,10);var hr=parseInt(min/60,10);var min=min%60;if(parseInt(hr/10,10)<=0)hr='0'+hr;if(parseInt(min/10,10)<=0)min='0'+min;if(parseInt(sec/10,10)<=0)sec='0'+sec;if(removeEmpty){var milliStr=milli!=0?"."+fs.util.paddingRight(milli.substr(0,1),1,"0"):"";if(hr!=0){return hr+":"+min+":"+sec+milliStr;}else{return min+":"+sec+milliStr;}}
        return hr+":"+min+":"+sec+"."+fs.util.paddingRight(milli.substr(0,1),1,"0");},timeToPos:function(timeString){var timeAry=timeString.split("."),time=timeAry[0].split(":"),pos=0;$.each(time,function(idx,item){pos*=60;pos+=parseInt(item,10);});pos=pos*1000+parseInt(fs.util.paddingRight(timeAry[1],3,"0")||0,10);return pos;},strip_tags:function(input,allowed){allowed=(((allowed||'')+'').toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join('');var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,commentsAndPhpTags=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return input.replace(commentsAndPhpTags,'').replace(tags,function($0,$1){return allowed.indexOf('<'+$1.toLowerCase()+'>')>-1?$0:'';});},numToENG:function(src){var map="ABCDEFGHIJKLMNOPQRSTUVWXYZ",str="",number=~~src;if(number<=0){return"";}
        do{str=(map[number%map.length-1]||map[map.length-1])+str;number=~~(number/map.length);}while(number&&src>map.length);return str;},ua:function(){var userAgent=window.navigator.userAgent.toLowerCase(),t=new Object;t.isiPad=(null!==userAgent.match(/ipad/i));t.isiPhone=(null!==userAgent.match(/iphone/i));t.isiOS=(t.isiPhone||t.isiPad);t.isAndroid=(null!==userAgent.match(/android/i));t.isBustedAndroid=(null!==userAgent.match(/android 2\.[12]/));t.isBustedNativeHTTPS=("https:"===location.protocol&&(null!==userAgent.match(/android [12]\./)||null!==userAgent.match(/macintosh.* version.* safari/)));t.isPC=!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));t.isMobile=(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));t.isIE=(userAgent.indexOf("msie ")!=-1);t.isIE8=(userAgent.indexOf("msie 8.0")!=-1);return t;},refrashImg:function(scope){scope=scope||'body';var ts=new Date().getTime(),queryName='fsTimestamp',patten=new RegExp(queryName+"=[\\d]{"+(""+ts).length+"}","g");$(scope).find("img").each(function(idx,item){var path=item.src.split("?"),url=path[0],queryString=path[1];queryString=queryString==null?queryName+"="+ts:patten.test(queryString)?queryString.replace(patten,queryName+"="+ts):queryString+="&"+queryName+"="+ts;item.src=url+"?"+queryString;});},refrashTimespan:function(selector){$(selector).each(function(idx,item){var $target=$(item),targetDate=new Date($target.text().replace(/-/g,"/")),nowDate=new Date(),diff=nowDate.getTime()-targetDate.getTime()/1000;if(diff<60){$target.text(_T('minsAgo').replace("%d",1));}else if(diff>=60&&diff<3600){$target.text(_T('minsAgo').replace("%d",Math.floor(diff/60)));}else if(diff>=3600&&diff<86400){$target.text(_T('hoursAgo').replace("%d",Math.floor(diff/3600)));}else if(diff>=3600&&diff<86400){$target.text(_T('daysAgo').replace("%d",Math.floor(diff/86400)));}else if(nowDate.getFullYear()===targetDate.getFullYear()){var m=fs.util.paddingLeft((targetDate.getMonth()+1),2,"0"),d=fs.util.paddingLeft(targetDate.getDate(),2,"0");$target.text(m+"-"+d);}else{var m=fs.util.paddingLeft((targetDate.getMonth()+1),2,"0"),d=fs.util.paddingLeft(targetDate.getDate(),2,"0");$target.text(targetDate.getFullYear()+"-"+m+"-"+d);}});if($(selector).length){setTimeout(function(){fs.util.refrashTimespan(selector);},30000)}},removeSpace:function(text){return $.trim(text.replace(/(\s|&nbsp;){1,}/g," "));},isInteger:function(num){return($.isNumeric(num)&&num===parseInt(num,10))},isFloat:function(n){return Number(n)===n&&n%1!==0;},convertHex:function(hex,opacity){hex=hex.replace('#','');var r=parseInt(hex.substring(0,2),16);var g=parseInt(hex.substring(2,4),16);var b=parseInt(hex.substring(4,6),16);return'rgba('+r+','+g+','+b+','+opacity+')';},nl2br:function(string){string=escape(string);if(string.indexOf('%0D%0A')>-1){var re_nlchar=/%0D%0A/g;}else if(string.indexOf('%0A')>-1){var re_nlchar=/%0A/g;}else if(string.indexOf('%0D')>-1){var re_nlchar=/%0D/g;}
        return unescape(string.replace(re_nlchar,'<br />'));},getNow:function(){var date=new Date();var year=date.getFullYear();var month=date.getMonth()+1;var day=date.getDate();var hours=date.getHours();var minutes=date.getMinutes();var seconds=date.getSeconds();return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;}}})();fs.ui=(function(){var modal=null;var popup=null;return{jmodal:function(){return modal;},jpopup:function(){return popup;},JMsg:function(_html,_w,_h){if(typeof _w=='undefined')_w='auto';if(typeof _h=='undefined')_h='auto';var _option=new Array();_option.width=_w;_option.height=_h;this.modal=bootbox.dialog(_html);$('.bootbox').css({'width':_option.width,'height':_option.height,'top':'50%','left':'50%'});$('.bootbox').css({'margin-left':-$('.bootbox').width()/2,'margin-top':-$('.bootbox').height()/2});$('body').css('overflow','hidden');return this.modal;},closeJModal:function(){$("body").removeAttr('style');bootbox.hideAll();},alert:function(title,context,width,height,btn){this.closeJModal();width=width||640;height=height||320;btn=btn||[];this.modal=bootbox.dialog(context,btn,{header:title});this.modal.css({'width':width,'height':height,'top':'50%','left':'50%','margin-left':-width/2,'margin-top':-height/2});this.modal.find(".modal-body").css({height:this.modal.height()-this.modal.find(".modal-header").outerHeight(true)-this.modal.find(".modal-footer").outerHeight(true),overflow:'auto',padding:'0 10px'});$('body').css('overflow','hidden');},JModal:function(_title,_url,_w,_h,_ext){if(!_ext){_ext={btn:[],cb:undefined};}
        if(!_ext.btn)_ext.btn=[];if(!_ext.cb)_ext.cb=undefined;fs.box.dialog({title:_title,url:_url,width:_w,height:_h,buttons:_ext.btn,onEscape:_ext.cb});},JPopup:function(_title,_url,_width,_height,x,y,_btn,_cb){_height=_height||"";var _ifm=$('<div id="_popup"></div>').load(_url);$('body').append(_ifm);this.popup=$('#_popup').dialog({overlay:false,modal:false,title:_title,width:_width,height:_height,zIndex:100,resizable:false,open:function(e,ui){$(e.target).parent().css({position:'absolute',top:y,left:x});},close:function(){if(_cb)_cb.call();$(this).dialog("destroy");$(this).remove();}});if(_btn){this.popup.dialog({buttons:_btn});}
        _ifm.css({margin:0,padding:0,overflow:'auto'}).width('100%').height(_height);return this.popup;},closeJPopup:function(){if(this.popup){this.popup.dialog("destroy");$("body").removeAttr('style');this.popup.remove();}},mask:function(msg){if($("#_fsMask_").length){$("#_fsMask_").html(msg);return;}
        $("<div/>").addClass("fs-mask").attr("id","_fsMask_").append($("<div/>").addClass("fs-maskNote").html(msg)).appendTo("body");},closeMask:function(){$("#_fsMask_").remove();},showMsg:function(msg,showmask){var $window=$(window);var $bar=$('#fs-bar');showmask=typeof showmask!=='undefined'?showmask:true;if(showmask==true)fs.ui.mask();$bar.text(msg||_T('form-uploading'));var centerX=($window.width()-$bar.outerWidth(true))/2;var centerY=$window.scrollTop()+($window.height()/2)-60;if(centerY<0){centerY=$window.height()/2-10;}
        $bar.css({left:centerX+'px',top:centerY+'px',width:'auto',height:'auto',display:'block'});},showHTML:function(title,msg){fs.ui.mask();var b=$(window),x=$('#fs-bar');x.addClass('html');x.html("<div class='title'>"+title+"</div>"+"<div class='content'>"+msg+"</div>");var centerX=(b.width())/4;var centerY=b.scrollTop()+(b.height()/4)-60;if(centerY<0)centerY=b.height()/2-10;x.css({left:centerX+'px',top:centerY+'px',width:'50%',height:'50%'});x.show();},clearMsg:function(){fs.ui.closeMask();try{$('#fs-bar').hide().removeClass('html text');}catch(e){};},showStatus:function(msg,pos){var b=$(window),x=$('#fs-status'),css={},topShift=0;if(typeof msg=='undefined'){msg=_T('processing');}
        x.addClass('html');x.html("<div class='content'>"+msg+"</div>");if($('#sys').length!=0){topShift=$('#sys').outerHeight();}
        switch(pos){case'left-top':css={top:topShift,bottom:'auto',left:0,right:'auto'};break;case'left-bottom':css={top:'auto',bottom:0,left:0,right:'auto'};break;case'right-bottom':css={top:'auto',bottom:0,left:'auto',right:0};break;default:case'right-top':css={top:topShift,bottom:'auto',left:'auto',right:0};break;}
        x.css(css);x.show();},clearStatus:function(){try{$('#fs-status').hide().removeClass('html text');}catch(e){};}}}
());fs.loadedJsCssFiles=[];fs.isLoadedJsCssFile=function(file){if(fs.loadedJsCssFiles.length==0){$('body script').each(function(){var src=$(this).attr('src');if(typeof src!='undefined'){fs.loadedJsCssFiles.push(src);}});$('head link').each(function(){var href=$(this).attr('href');if(typeof href!='undefined'){fs.loadedJsCssFiles.push(href);}});}
    return(fs.loadedJsCssFiles.indexOf(file)!==-1);};fs.loadJsFiles=function(files,scripts){if(Object.prototype.toString.call(files)!=='[object Array]'){fs.loadJsScript(scripts);return;}
    var allLoaded=false;var file='';do{if(files.length==0){allLoaded=true;break;}
        file=files.shift();}while(fs.isLoadedJsCssFile(file));if(allLoaded){fs.loadJsScript(scripts);return;}
    var eleScript=document.createElement('script');eleScript.src=file;if(fs.util.ua().isIE8){eleScript.onreadystatechange=function(){if(eleScript.readyState=="loaded"||eleScript.readyState=="complete"){fs.loadedJsCssFiles.push(file);if(files.length>0){fs.loadJsFiles(files,scripts);}
    else{fs.loadJsScript(scripts);}}}}
    else{eleScript.onload=function(){fs.loadedJsCssFiles.push(file);if(files.length>0){fs.loadJsFiles(files,scripts);}
    else{fs.loadJsScript(scripts);}};}
    document.getElementsByTagName("body")[0].appendChild(eleScript);};fs.loadJsScript=function(scripts){if(Object.prototype.toString.call(scripts)!=='[object Array]'){return;}
    scripts.forEach(function(item){var scriptblock=document.createElement("script");if(fs.util.ua().isIE8){scriptblock.text=item;}
    else{scriptblock.innerHTML=item;}
        document.getElementsByTagName("body")[0].appendChild(scriptblock);});};fs.loadCssFiles=function(files){if(Object.prototype.toString.call(files)!=='[object Array]'){return;}
    files.forEach(function(item){if(!fs.isLoadedJsCssFile(item)){var link=document.createElement("link");link.setAttribute("rel","stylesheet");link.setAttribute("type","text/css");link.setAttribute("href",item);document.getElementsByTagName("body")[0].appendChild(link);fs.loadedJsCssFiles.push(item);}});};fs.addLocale=function(locale){if(typeof locale!=='object'||locale===null)return;$.each(locale,function(k,v){if(typeof v!=='string')delete locale[k];});$.extend(fs.lang,locale);};fs.loadView=function(container,url,param,callback){container=$(container);if(container.length!==1)return;if(!url)return;param=param||{};container.html('Loading...');fs.get(url,param,function(json){if(!(json.status===true||(json.ret&&json.ret.status==='true'))){if(typeof json.ret=='object'){alert(json.ret.msg);}
else{alert(json.msg);}
    return;}
    if(json.ret!==null&&typeof json.ret==='object'&&json.ret.data){json.data=json.data||{};json.data.html=json.ret.data;}
    container.html(json.data.html);if(json.data.cssFile)fs.loadCssFiles(json.data.cssFile);if(json.data.jsLocale)fs.addLocale(json.data.jsLocale);if(json.data.jsFile){fs.loadJsFiles(json.data.jsFile,json.data.jsScript);}else{fs.loadJsScript(json.data.jsScript);}
    if(typeof callback==='function'){callback(json);}},'json');};(function(instance){var fullScreenApi={supportsFullScreen:false,nonNativeSupportsFullScreen:false,isFullScreen:function(){return false;},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:'',prefix:''},browserPrefixes='webkit moz o ms khtml'.split(' ');if(typeof document.cancelFullScreen!='undefined'){fullScreenApi.supportsFullScreen=true;}else{for(var i=0,il=browserPrefixes.length;i<il;i++){fullScreenApi.prefix=browserPrefixes[i];if(typeof document[fullScreenApi.prefix+'CancelFullScreen']!='undefined'){fullScreenApi.supportsFullScreen=true;break;}}}
    if(fullScreenApi.supportsFullScreen){fullScreenApi.fullScreenEventName=fullScreenApi.prefix+'fullscreenchange';fullScreenApi.isFullScreen=function(){switch(this.prefix){case'':return document.fullScreen;case'webkit':return document.webkitIsFullScreen;default:return document[this.prefix+'FullScreen'];}}
        fullScreenApi.requestFullScreen=function(el){el=typeof el.get==='function'?el.get(0):el;return(this.prefix==='')?el.requestFullScreen():el[this.prefix+'RequestFullScreen']();}
        fullScreenApi.cancelFullScreen=function(el){el=typeof el.get==='function'?el.get(0):el;return(this.prefix==='')?document.cancelFullScreen():document[this.prefix+'CancelFullScreen']();}}else if(typeof window.ActiveXObject!=="undefined"){fullScreenApi.nonNativeSupportsFullScreen=true;fullScreenApi.requestFullScreen=fullScreenApi.cancelFullScreen=function(el){var wscript=new ActiveXObject("WScript.Shell");if(wscript!==null){wscript.SendKeys("{F11}");}}
        fullScreenApi.isFullScreen=function(){return document.body.clientHeight==screen.height&&document.body.clientWidth==screen.width;}}
    instance.fullscreen=fullScreenApi;})(fs);(function($){"use strict";var FsFullScreen=function(element,options){this.options=options;this.$element=$(element).delegate('[data-dismiss="fsFullScreen"]','click.dismiss.fsFullScreen',$.proxy(this.exit,this));this.eleOriStyle=this.$element.attr('style');if(typeof this.eleOriStyle=='undefined'){this.eleOriStyle="";}
    this.$header=$("<div id='fullscreenheader'>").css({position:'fixed',top:0,left:0,right:0,width:'100%',background:'#ccc',height:'40px','z-index':9999}).html("<button class='pull-right close' data-target='#"+this.$element.attr('id')+"' data-toggle='fsFullScreen' title='close' style='margin:10px 10px 0 0; font-size:32px;'>&times;</button>");};FsFullScreen.prototype={constructor:FsFullScreen,enter:function(){var that=this,e=$.Event('enter');this.$element.trigger(e);if(this.isShown||e.isDefaultPrevented())return;this.isShown=true;this.escape();this.$element.css({position:'fixed',top:this.$header.height()+"px",left:0,bottom:0,right:0,height:'auto',width:'100%','padding-bottom':0,'z-index':9999,'background':'#fff'});this.$header.appendTo("body");},exit:function(){this.isShown=false;this.escape();this.$element.attr('style',this.eleOriStyle);this.$header.remove();},escape:function(){if(this.isShown){$("body").css('overflow','hidden').on('keyup.dismiss.fsFullScreen',function(e){e.which==27&&that.exit();});}else{$("body").css('overflow','auto').off('keyup.dismiss.fsFullScreen');}},toggle:function(){return this[!this.isShown?'enter':'exit']();}};var old=$.fn.fsFullScreen;$.fn.fsFullScreen=function(option){return this.each(function(){var that=$(this),data=that.data('fsFullScreen'),options=$.extend({},$.fn.fsFullScreen.defaults,that.data(),typeof option=='object'&&option);if(!data){that.data('fsFullScreen',(data=new FsFullScreen(this,options)));}else{$.extend(that.data('fsFullScreen').options,option);}
    if(typeof option=='string')
        data[option]();else if(options.enter)
        data.enter();});};$.fn.fsFullScreen.defaults={enter:true};$.fn.fsFullScreen.Constructor=FsFullScreen;$.fn.fsFullScreen.noConflict=function(){$.fn.fsFullScreen=old;return this;}
    $(document).on('click.fsFullScreen.data-api','[data-toggle="fsFullScreen"]',function(e){var that=$(this),target=$(that.attr('data-target')),option=target.data('fsFullScreen')?'toggle':$.extend(target.data(),that.data());if(option=='toggle'){$.extend(target.data('fsFullScreen').options,that.data());}
        e.preventDefault();target.fsFullScreen(option).one('exit',function(){that.focus();});});})(jQuery);fs.xhr=(function(window){var request=window.XDomainRequest||window.XMLHttpRequest,xhrQueue=[],abort=function(xhrID){var xhr=xhrQueue[xhrID-1];if(xhr){xhr.abort();}
    xhr=null;delete xhrQueue[xhrID];};return{get:function(url,onProgress,onFail){if(typeof onProgress!=='function'){throw'onProgress must be function';}
        var xhr=new request(),lastMessage='',xhrID;xhr.onload=function(){if(xhr.status===200){xhr.open('GET',url,true);xhr.send();}else{xhr.onerror();}};xhr.onerror=function(){if(typeof onFail==='function'){onFail(xhr.statusText);}
            abort(xhrID)};xhr.onprogress=function(){if(xhr.status&&xhr.status!==200){return;}
            var jsonData=null,receiveText=xhr.responseText.substring(lastMessage.length,xhr.responseText.length);try{jsonData=JSON.parse(receiveText);onProgress(jsonData);}catch(e){console.error(e);console.log(receiveText);}
            lastMessage=xhr.responseText;};xhr.open('GET',url,true);xhr.send();xhrQueue.push(xhr);xhrID=xhrQueue.length;return xhrID;},abort:function(xhrID){abort(xhrID);}};})(window);function date(format,timestamp){var that=this,jsdate,f,txt_words=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],formatChr=/\\?(.?)/gi,formatChrCb=function(t,s){return f[t]?f[t]():s;},_pad=function(n,c){n=String(n);while(n.length<c){n='0'+n;}
    return n;};f={d:function(){return _pad(f.j(),2);},D:function(){return f.l().slice(0,3);},j:function(){return jsdate.getDate();},l:function(){return txt_words[f.w()]+'day';},N:function(){return f.w()||7;},S:function(){var j=f.j(),i=j%10;if(i<=3&&parseInt((j%100)/10,10)==1){i=0;}
        return['st','nd','rd'][i-1]||'th';},w:function(){return jsdate.getDay();},z:function(){var a=new Date(f.Y(),f.n()-1,f.j()),b=new Date(f.Y(),0,1);return Math.round((a-b)/864e5);},W:function(){var a=new Date(f.Y(),f.n()-1,f.j()-f.N()+3),b=new Date(a.getFullYear(),0,4);return _pad(1+Math.round((a-b)/864e5/7),2);},F:function(){return txt_words[6+f.n()];},m:function(){return _pad(f.n(),2);},M:function(){return f.F().slice(0,3);},n:function(){return jsdate.getMonth()+1;},t:function(){return(new Date(f.Y(),f.n(),0)).getDate();},L:function(){var j=f.Y();return j%4===0&j%100!==0|j%400===0;},o:function(){var n=f.n(),W=f.W(),Y=f.Y();return Y+(n===12&&W<9?1:n===1&&W>9?-1:0);},Y:function(){return jsdate.getFullYear();},y:function(){return f.Y().toString().slice(-2);},a:function(){return jsdate.getHours()>11?"pm":"am";},A:function(){return f.a().toUpperCase();},B:function(){var H=jsdate.getUTCHours()*36e2,i=jsdate.getUTCMinutes()*60,s=jsdate.getUTCSeconds();return _pad(Math.floor((H+i+s+36e2)/86.4)%1e3,3);},g:function(){return f.G()%12||12;},G:function(){return jsdate.getHours();},h:function(){return _pad(f.g(),2);},H:function(){return _pad(f.G(),2);},i:function(){return _pad(jsdate.getMinutes(),2);},s:function(){return _pad(jsdate.getSeconds(),2);},u:function(){return _pad(jsdate.getMilliseconds()*1000,6);},e:function(){throw'Not supported (see source code of date() for timezone on how to add support)';},I:function(){var a=new Date(f.Y(),0),c=Date.UTC(f.Y(),0),b=new Date(f.Y(),6),d=Date.UTC(f.Y(),6);return((a-c)!==(b-d))?1:0;},O:function(){var tzo=jsdate.getTimezoneOffset(),a=Math.abs(tzo);return(tzo>0?"-":"+")+_pad(Math.floor(a/60)*100+a%60,4);},P:function(){var O=f.O();return(O.substr(0,3)+":"+O.substr(3,2));},T:function(){return'UTC';},Z:function(){return-jsdate.getTimezoneOffset()*60;},c:function(){return'Y-m-d\\TH:i:sP'.replace(formatChr,formatChrCb);},r:function(){return'D, d M Y H:i:s O'.replace(formatChr,formatChrCb);},U:function(){return jsdate/1000|0;}};this.date=function(format,timestamp){that=this;jsdate=(timestamp===undefined?new Date():(timestamp instanceof Date)?new Date(timestamp):new Date(timestamp*1000));return format.replace(formatChr,formatChrCb);};return this.date(format,timestamp);}
function urlencode(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');};(function(){var object=typeof exports!='undefined'?exports:self;var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';function InvalidCharacterError(message){this.message=message;}
    InvalidCharacterError.prototype=new Error;InvalidCharacterError.prototype.name='InvalidCharacterError';object.btoa||(object.btoa=function(input){var str=String(input);for(var block,charCode,idx=0,map=chars,output='';str.charAt(idx|0)||(map='=',idx%1);output+=map.charAt(63&block>>8-idx%1*8)){charCode=str.charCodeAt(idx+=3/4);if(charCode>0xFF){throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");}
        block=block<<8|charCode;}
        return output;});object.atob||(object.atob=function(input){var str=String(input).replace(/=+$/,'');if(str.length%4==1){throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");}
        for(var bc=0,bs,buffer,idx=0,output='';buffer=str.charAt(idx++);~buffer&&(bs=bc%4?bs*64+buffer:buffer,bc++%4)?output+=String.fromCharCode(255&bs>>(-2*bc&6)):0){buffer=chars.indexOf(buffer);}
        return output;});}());(function(){var methods=["assert","cd","clear","count","countReset","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","select","table","time","timeEnd","timeStamp","timeline","timelineEnd","trace","warn"];var length=methods.length;var console=(window.console=window.console||{});var method;var noop=function(){};while(length--){method=methods[length];if(!console[method])
    console[method]=noop;}})();!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t),e=(n>>16)+(t>>16)+(r>>16);return e<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;var e,i,a,h,d,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,h=v,d=m,l=o(l,g,v,m,n[e],7,-680876936),m=o(m,l,g,v,n[e+1],12,-389564586),v=o(v,m,l,g,n[e+2],17,606105819),g=o(g,v,m,l,n[e+3],22,-1044525330),l=o(l,g,v,m,n[e+4],7,-176418897),m=o(m,l,g,v,n[e+5],12,1200080426),v=o(v,m,l,g,n[e+6],17,-1473231341),g=o(g,v,m,l,n[e+7],22,-45705983),l=o(l,g,v,m,n[e+8],7,1770035416),m=o(m,l,g,v,n[e+9],12,-1958414417),v=o(v,m,l,g,n[e+10],17,-42063),g=o(g,v,m,l,n[e+11],22,-1990404162),l=o(l,g,v,m,n[e+12],7,1804603682),m=o(m,l,g,v,n[e+13],12,-40341101),v=o(v,m,l,g,n[e+14],17,-1502002290),g=o(g,v,m,l,n[e+15],22,1236535329),l=u(l,g,v,m,n[e+1],5,-165796510),m=u(m,l,g,v,n[e+6],9,-1069501632),v=u(v,m,l,g,n[e+11],14,643717713),g=u(g,v,m,l,n[e],20,-373897302),l=u(l,g,v,m,n[e+5],5,-701558691),m=u(m,l,g,v,n[e+10],9,38016083),v=u(v,m,l,g,n[e+15],14,-660478335),g=u(g,v,m,l,n[e+4],20,-405537848),l=u(l,g,v,m,n[e+9],5,568446438),m=u(m,l,g,v,n[e+14],9,-1019803690),v=u(v,m,l,g,n[e+3],14,-187363961),g=u(g,v,m,l,n[e+8],20,1163531501),l=u(l,g,v,m,n[e+13],5,-1444681467),m=u(m,l,g,v,n[e+2],9,-51403784),v=u(v,m,l,g,n[e+7],14,1735328473),g=u(g,v,m,l,n[e+12],20,-1926607734),l=c(l,g,v,m,n[e+5],4,-378558),m=c(m,l,g,v,n[e+8],11,-2022574463),v=c(v,m,l,g,n[e+11],16,1839030562),g=c(g,v,m,l,n[e+14],23,-35309556),l=c(l,g,v,m,n[e+1],4,-1530992060),m=c(m,l,g,v,n[e+4],11,1272893353),v=c(v,m,l,g,n[e+7],16,-155497632),g=c(g,v,m,l,n[e+10],23,-1094730640),l=c(l,g,v,m,n[e+13],4,681279174),m=c(m,l,g,v,n[e],11,-358537222),v=c(v,m,l,g,n[e+3],16,-722521979),g=c(g,v,m,l,n[e+6],23,76029189),l=c(l,g,v,m,n[e+9],4,-640364487),m=c(m,l,g,v,n[e+12],11,-421815835),v=c(v,m,l,g,n[e+15],16,530742520),g=c(g,v,m,l,n[e+2],23,-995338651),l=f(l,g,v,m,n[e],6,-198630844),m=f(m,l,g,v,n[e+7],10,1126891415),v=f(v,m,l,g,n[e+14],15,-1416354905),g=f(g,v,m,l,n[e+5],21,-57434055),l=f(l,g,v,m,n[e+12],6,1700485571),m=f(m,l,g,v,n[e+3],10,-1894986606),v=f(v,m,l,g,n[e+10],15,-1051523),g=f(g,v,m,l,n[e+1],21,-2054922799),l=f(l,g,v,m,n[e+8],6,1873313359),m=f(m,l,g,v,n[e+15],10,-30611744),v=f(v,m,l,g,n[e+6],15,-1560198380),g=f(g,v,m,l,n[e+13],21,1309151649),l=f(l,g,v,m,n[e+4],6,-145523070),m=f(m,l,g,v,n[e+11],10,-1120210379),v=f(v,m,l,g,n[e+2],15,718787259),g=f(g,v,m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,h),m=t(m,d);return[l,g,v,m]}function a(n){var t,r="";for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function h(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function d(n){return a(i(h(n),8*n.length))}function l(n,t){var r,e,o=h(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;16>r;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(h(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="0123456789abcdef",o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+=e.charAt(t>>>4&15)+e.charAt(15&t);return o}function v(n){return unescape(encodeURIComponent(n))}function m(n){return d(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}"function"==typeof define&&define.amd?define(function(){return A}):"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);(function(window,undefined){"use strict";var LIBVERSION="0.7.3",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded";var util={extend:function(regexes,extensions){for(var i in extensions){if("browser cpu device engine os".indexOf(i)!==-1&&extensions[i].length%2===0){regexes[i]=extensions[i].concat(regexes[i])}}return regexes},has:function(str1,str2){if(typeof str1==="string"){return str2.toLowerCase().indexOf(str1.toLowerCase())!==-1}},lowerize:function(str){return str.toLowerCase()}};var mapper={rgx:function(){var result,i=0,j,k,p,q,matches,match,args=arguments;while(i<args.length&&!matches){var regex=args[i],props=args[i+1];if(typeof result===UNDEF_TYPE){result={};for(p in props){q=props[p];if(typeof q===OBJ_TYPE){result[q[0]]=undefined}else{result[q]=undefined}}}j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(this.getUA());if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length==2){if(typeof q[1]==FUNC_TYPE){result[q[0]]=q[1].call(this,match)}else{result[q[0]]=q[1]}}else if(q.length==3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){result[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{result[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length==4){result[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{result[q]=match?match:undefined}}}}i+=2}return result},str:function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(util.has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(util.has(map[i],str)){return i===UNKNOWN?undefined:i}}return str}};var maps={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:"NT 6.4",RT:"ARM"}}}};var regexes={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[NAME,VERSION,MAJOR],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[NAME,"Opera"],VERSION,MAJOR],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],[NAME,VERSION,MAJOR],[/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],[[NAME,"IE"],VERSION,MAJOR],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[NAME,"Yandex"],VERSION,MAJOR],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[NAME,/_/g," "],VERSION,MAJOR],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i],[NAME,VERSION,MAJOR],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[NAME,"Dolphin"],VERSION,MAJOR],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[NAME,"Chrome"],VERSION,MAJOR],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[VERSION,MAJOR,[NAME,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[VERSION,MAJOR,NAME],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[NAME,[MAJOR,mapper.str,maps.browser.oldsafari.major],[VERSION,mapper.str,maps.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[NAME,VERSION,MAJOR],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[NAME,"Netscape"],VERSION,MAJOR],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[NAME,VERSION,MAJOR]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,util.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[ARCHITECTURE,/ower/,"",util.lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[ARCHITECTURE,util.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/applecoremedia\/[\w\.]+ \((ipad)/],[MODEL,[VENDOR,"Apple"],[TYPE,TABLET]],[/(apple\s{0,1}tv)/i],[[MODEL,"Apple TV"],[VENDOR,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[MODEL,[VENDOR,"Amazon"],[TYPE,TABLET]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[MODEL,mapper.str,maps.device.amazon.model],[VENDOR,"Amazon"],[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[MODEL,VENDOR,[TYPE,MOBILE]],[/\((ip[honed|\s\w*]+);/i],[MODEL,[VENDOR,"Apple"],[TYPE,MOBILE]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/\(bb10;\s(\w+)/i],[MODEL,[VENDOR,"BlackBerry"],[TYPE,MOBILE]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[MODEL,[VENDOR,"Asus"],[TYPE,TABLET]],[/(sony)\s(tablet\s[ps])/i],[VENDOR,MODEL,[TYPE,TABLET]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/android.+;\s(shield)\sbuild/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation\s[3portablevi]+)/i],[MODEL,[VENDOR,"Sony"],[TYPE,CONSOLE]],[/(sprint\s(\w+))/i],[[VENDOR,mapper.str,maps.device.sprint.vendor],[MODEL,mapper.str,maps.device.sprint.model],[TYPE,MOBILE]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[MODEL,[VENDOR,"Microsoft"],[TYPE,CONSOLE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,"Microsoft"],[TYPE,MOBILE]],[/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i,/(mot)[\s-]?(\w+)*/i],[[VENDOR,"Motorola"],MODEL,[TYPE,MOBILE]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[MODEL,[VENDOR,"Motorola"],[TYPE,TABLET]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,TABLET]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[VENDOR,"Samsung"],MODEL,[TYPE,MOBILE]],[/(samsung);smarttv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/sie-(\w+)*/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[VENDOR,"Nokia"],MODEL,[TYPE,MOBILE]],[/android\s3\.[\s\w-;]{10}(a\d{3})/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],[[VENDOR,"LG"],MODEL,[TYPE,TABLET]],[/(lg) netcast\.tv/i],[VENDOR,MODEL,[TYPE,SMARTTV]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[MODEL,[VENDOR,"LG"],[TYPE,MOBILE]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/linux;.+((jolla));/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/((pebble))app\/[\d\.]+\s/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/android.+;\s(glass)\s\d/i],[MODEL,[VENDOR,"Google"],[TYPE,WEARABLE]],[/(mobile|tablet);.+rv\:.+gecko\//i],[[TYPE,util.lowerize],VENDOR,MODEL]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]+).*(gecko)/i],[VERSION,NAME]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[NAME,VERSION],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[NAME,[VERSION,mapper.str,maps.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,mapper.str,maps.os.windows.version]],[/\((bb)(10);/i],[[NAME,"BlackBerry"],VERSION],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[NAME,VERSION],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[NAME,"Symbian"],VERSION],[/\((series40);/i],[NAME],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[NAME,"Firefox OS"],VERSION],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[NAME,VERSION],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(sunos)\s?([\w\.]+\d)*/i],[[NAME,"Solaris"],VERSION],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[NAME,VERSION],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[NAME,"iOS"],[VERSION,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[NAME,VERSION]]};var UAParser=function(uastring,extensions){if(!(this instanceof UAParser)){return new UAParser(uastring,extensions).getResult()}var ua=uastring||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var rgxmap=extensions?util.extend(regexes,extensions):regexes;this.getBrowser=function(){return mapper.rgx.apply(this,rgxmap.browser)};this.getCPU=function(){return mapper.rgx.apply(this,rgxmap.cpu)};this.getDevice=function(){return mapper.rgx.apply(this,rgxmap.device)};this.getEngine=function(){return mapper.rgx.apply(this,rgxmap.engine)};this.getOS=function(){return mapper.rgx.apply(this,rgxmap.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return ua};this.setUA=function(uastring){ua=uastring;return this};this.setUA(ua)};UAParser.VERSION=LIBVERSION;UAParser.BROWSER={NAME:NAME,MAJOR:MAJOR,VERSION:VERSION};UAParser.CPU={ARCHITECTURE:ARCHITECTURE};UAParser.DEVICE={MODEL:MODEL,VENDOR:VENDOR,TYPE:TYPE,CONSOLE:CONSOLE,MOBILE:MOBILE,SMARTTV:SMARTTV,TABLET:TABLET,WEARABLE:WEARABLE,EMBEDDED:EMBEDDED};UAParser.ENGINE={NAME:NAME,VERSION:VERSION};UAParser.OS={NAME:NAME,VERSION:VERSION};if(typeof exports!==UNDEF_TYPE){if(typeof module!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{window.UAParser=UAParser;if(typeof define===FUNC_TYPE&&define.amd){define(function(){return UAParser})}var $=window.jQuery||window.Zepto;if(typeof $!==UNDEF_TYPE){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(uastring){parser.setUA(uastring);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}}})(this);(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);var XRegExp;XRegExp=XRegExp||function(n){"use strict";function v(n,i,r){var u;for(u in t.prototype)t.prototype.hasOwnProperty(u)&&(n[u]=t.prototype[u]);return n.xregexp={captureNames:i,isNative:!!r},n}function g(n){return(n.global?"g":"")+(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.extended?"x":"")+(n.sticky?"y":"")}function o(n,r,u){if(!t.isRegExp(n))throw new TypeError("type RegExp expected");var f=i.replace.call(g(n)+(r||""),h,"");return u&&(f=i.replace.call(f,new RegExp("["+u+"]+","g"),"")),n=n.xregexp&&!n.xregexp.isNative?v(t(n.source,f),n.xregexp.captureNames?n.xregexp.captureNames.slice(0):null):v(new RegExp(n.source,f),null,!0)}function a(n,t){var i=n.length;if(Array.prototype.lastIndexOf)return n.lastIndexOf(t);while(i--)if(n[i]===t)return i;return-1}function s(n,t){return Object.prototype.toString.call(n).toLowerCase()==="[object "+t+"]"}function d(n){return n=n||{},n==="all"||n.all?n={natives:!0,extensibility:!0}:s(n,"string")&&(n=t.forEach(n,/[^\s,]+/,function(n){this[n]=!0},{})),n}function ut(n,t,i,u){var o=p.length,s=null,e,f;y=!0;try{while(o--)if(f=p[o],(f.scope==="all"||f.scope===i)&&(!f.trigger||f.trigger.call(u))&&(f.pattern.lastIndex=t,e=r.exec.call(f.pattern,n),e&&e.index===t)){s={output:f.handler.call(u,e,i),match:e};break}}catch(h){throw h;}finally{y=!1}return s}function b(n){t.addToken=c[n?"on":"off"],f.extensibility=n}function tt(n){RegExp.prototype.exec=(n?r:i).exec,RegExp.prototype.test=(n?r:i).test,String.prototype.match=(n?r:i).match,String.prototype.replace=(n?r:i).replace,String.prototype.split=(n?r:i).split,f.natives=n}var t,c,u,f={natives:!1,extensibility:!1},i={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},r={},k={},p=[],e="default",rt="class",it={"default":/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,"class":/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/},et=/\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,h=/([\s\S])(?=[\s\S]*\1)/g,nt=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,ft=i.exec.call(/()??/,"")[1]===n,l=RegExp.prototype.sticky!==n,y=!1,w="gim"+(l?"y":"");return t=function(r,u){if(t.isRegExp(r)){if(u!==n)throw new TypeError("can't supply flags when constructing one RegExp from another");return o(r)}if(y)throw new Error("can't call the XRegExp constructor within token definition functions");var l=[],a=e,b={hasNamedCapture:!1,captureNames:[],hasFlag:function(n){return u.indexOf(n)>-1}},f=0,c,s,p;if(r=r===n?"":String(r),u=u===n?"":String(u),i.match.call(u,h))throw new SyntaxError("invalid duplicate regular expression flag");for(r=i.replace.call(r,/^\(\?([\w$]+)\)/,function(n,t){if(i.test.call(/[gy]/,t))throw new SyntaxError("can't use flag g or y in mode modifier");return u=i.replace.call(u+t,h,""),""}),t.forEach(u,/[\s\S]/,function(n){if(w.indexOf(n[0])<0)throw new SyntaxError("invalid regular expression flag "+n[0]);});f<r.length;)c=ut(r,f,a,b),c?(l.push(c.output),f+=c.match[0].length||1):(s=i.exec.call(it[a],r.slice(f)),s?(l.push(s[0]),f+=s[0].length):(p=r.charAt(f),p==="["?a=rt:p==="]"&&(a=e),l.push(p),++f));return v(new RegExp(l.join(""),i.replace.call(u,/[^gimy]+/g,"")),b.hasNamedCapture?b.captureNames:null)},c={on:function(n,t,r){r=r||{},n&&p.push({pattern:o(n,"g"+(l?"y":"")),handler:t,scope:r.scope||e,trigger:r.trigger||null}),r.customFlags&&(w=i.replace.call(w+r.customFlags,h,""))},off:function(){throw new Error("extensibility must be installed before using addToken");}},t.addToken=c.off,t.cache=function(n,i){var r=n+"/"+(i||"");return k[r]||(k[r]=t(n,i))},t.escape=function(n){return i.replace.call(n,/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},t.exec=function(n,t,i,u){var e=o(t,"g"+(u&&l?"y":""),u===!1?"y":""),f;return e.lastIndex=i=i||0,f=r.exec.call(e,n),u&&f&&f.index!==i&&(f=null),t.global&&(t.lastIndex=f?e.lastIndex:0),f},t.forEach=function(n,i,r,u){for(var e=0,o=-1,f;f=t.exec(n,i,e);)r.call(u,f,++o,n,i),e=f.index+(f[0].length||1);return u},t.globalize=function(n){return o(n,"g")},t.install=function(n){n=d(n),!f.natives&&n.natives&&tt(!0),!f.extensibility&&n.extensibility&&b(!0)},t.isInstalled=function(n){return!!f[n]},t.isRegExp=function(n){return s(n,"regexp")},t.matchChain=function(n,i){return function r(n,u){for(var o=i[u].regex?i[u]:{regex:i[u]},f=[],s=function(n){f.push(o.backref?n[o.backref]||"":n[0])},e=0;e<n.length;++e)t.forEach(n[e],o.regex,s);return u===i.length-1||!f.length?f:r(f,u+1)}([n],0)},t.replace=function(i,u,f,e){var c=t.isRegExp(u),s=u,h;return c?(e===n&&u.global&&(e="all"),s=o(u,e==="all"?"g":"",e==="all"?"":"g")):e==="all"&&(s=new RegExp(t.escape(String(u)),"g")),h=r.replace.call(String(i),s,f),c&&u.global&&(u.lastIndex=0),h},t.split=function(n,t,i){return r.split.call(n,t,i)},t.test=function(n,i,r,u){return!!t.exec(n,i,r,u)},t.uninstall=function(n){n=d(n),f.natives&&n.natives&&tt(!1),f.extensibility&&n.extensibility&&b(!1)},t.union=function(n,i){var l=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,o=0,f,h,c=function(n,t,i){var r=h[o-f];if(t){if(++o,r)return"(?<"+r+">"}else if(i)return"\\"+(+i+f);return n},e=[],r,u;if(!(s(n,"array")&&n.length))throw new TypeError("patterns must be a nonempty array");for(u=0;u<n.length;++u)r=n[u],t.isRegExp(r)?(f=o,h=r.xregexp&&r.xregexp.captureNames||[],e.push(t(r.source).source.replace(l,c))):e.push(t.escape(r));return t(e.join("|"),i)},t.version="2.0.0",r.exec=function(t){var r,f,e,o,u;if(this.global||(o=this.lastIndex),r=i.exec.apply(this,arguments),r){if(!ft&&r.length>1&&a(r,"")>-1&&(e=new RegExp(this.source,i.replace.call(g(this),"g","")),i.replace.call(String(t).slice(r.index),e,function(){for(var t=1;t<arguments.length-2;++t)arguments[t]===n&&(r[t]=n)})),this.xregexp&&this.xregexp.captureNames)for(u=1;u<r.length;++u)f=this.xregexp.captureNames[u-1],f&&(r[f]=r[u]);this.global&&!r[0].length&&this.lastIndex>r.index&&(this.lastIndex=r.index)}return this.global||(this.lastIndex=o),r},r.test=function(n){return!!r.exec.call(this,n)},r.match=function(n){if(t.isRegExp(n)){if(n.global){var u=i.match.apply(this,arguments);return n.lastIndex=0,u}}else n=new RegExp(n);return r.exec.call(n,this)},r.replace=function(n,r){var e=t.isRegExp(n),u,f,h,o;return e?(n.xregexp&&(u=n.xregexp.captureNames),n.global||(o=n.lastIndex)):n+="",s(r,"function")?f=i.replace.call(String(this),n,function(){var t=arguments,i;if(u)for(t[0]=new String(t[0]),i=0;i<u.length;++i)u[i]&&(t[0][u[i]]=t[i+1]);return e&&n.global&&(n.lastIndex=t[t.length-2]+t[0].length),r.apply(null,t)}):(h=String(this),f=i.replace.call(h,n,function(){var n=arguments;return i.replace.call(String(r),et,function(t,i,r){var f;if(i){if(f=+i,f<=n.length-3)return n[f]||"";if(f=u?a(u,i):-1,f<0)throw new SyntaxError("backreference to undefined group "+t);return n[f+1]||""}if(r==="$")return"$";if(r==="&"||+r==0)return n[0];if(r==="`")return n[n.length-1].slice(0,n[n.length-2]);if(r==="'")return n[n.length-1].slice(n[n.length-2]+n[0].length);if(r=+r,!isNaN(r)){if(r>n.length-3)throw new SyntaxError("backreference to undefined group "+t);return n[r]||""}throw new SyntaxError("invalid token "+t);})})),e&&(n.lastIndex=n.global?0:o),f},r.split=function(r,u){if(!t.isRegExp(r))return i.split.apply(this,arguments);var e=String(this),h=r.lastIndex,f=[],o=0,s;return u=(u===n?-1:u)>>>0,t.forEach(e,r,function(n){n.index+n[0].length>o&&(f.push(e.slice(o,n.index)),n.length>1&&n.index<e.length&&Array.prototype.push.apply(f,n.slice(1)),s=n[0].length,o=n.index+s)}),o===e.length?(!i.test.call(r,"")||s)&&f.push(""):f.push(e.slice(o)),r.lastIndex=h,f.length>u?f.slice(0,u):f},u=c.on,u(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4})|x(?![\dA-Fa-f]{2}))/,function(n,t){if(n[1]==="B"&&t===e)return n[0];throw new SyntaxError("invalid escape "+n[0]);},{scope:"all"}),u(/\[(\^?)]/,function(n){return n[1]?"[\\s\\S]":"\\b\\B"}),u(/(?:\(\?#[^)]*\))+/,function(n){return i.test.call(nt,n.input.slice(n.index+n[0].length))?"":"(?:)"}),u(/\\k<([\w$]+)>/,function(n){var t=isNaN(n[1])?a(this.captureNames,n[1])+1:+n[1],i=n.index+n[0].length;if(!t||t>this.captureNames.length)throw new SyntaxError("backreference to undefined group "+n[0]);return"\\"+t+(i===n.input.length||isNaN(n.input.charAt(i))?"":"(?:)")}),u(/(?:\s+|#.*)+/,function(n){return i.test.call(nt,n.input.slice(n.index+n[0].length))?"":"(?:)"},{trigger:function(){return this.hasFlag("x")},customFlags:"x"}),u(/\./,function(){return"[\\s\\S]"},{trigger:function(){return this.hasFlag("s")},customFlags:"s"}),u(/\(\?P?<([\w$]+)>/,function(n){if(!isNaN(n[1]))throw new SyntaxError("can't use integer as capture name "+n[0]);return this.captureNames.push(n[1]),this.hasNamedCapture=!0,"("}),u(/\\(\d+)/,function(n,t){if(!(t===e&&/^[1-9]/.test(n[1])&&+n[1]<=this.captureNames.length)&&n[1]!=="0")throw new SyntaxError("can't use octal escape or backreference to undefined group "+n[0]);return n[0]},{scope:"all"}),u(/\((?!\?)/,function(){return this.hasFlag("n")?"(?:":(this.captureNames.push(null),"(")},{customFlags:"n"}),typeof exports!="undefined"&&(exports.XRegExp=t),t}()
if(typeof(SyntaxHighlighter)=='undefined')var SyntaxHighlighter=function(){if(typeof(require)!='undefined'&&typeof(XRegExp)=='undefined')
{XRegExp=require('xregexp').XRegExp;}
    var sh={defaults:{'class-name':'','first-line':1,'pad-line-numbers':false,'highlight':null,'title':null,'smart-tabs':true,'tab-size':4,'gutter':true,'toolbar':true,'quick-code':true,'collapse':false,'auto-links':true,'light':false,'unindent':true,'html-script':false},config:{space:'&nbsp;',useScriptTags:true,bloggerMode:false,stripBrs:false,tagName:'pre',strings:{expandSource:'expand source',help:'?',alert:'SyntaxHighlighter\n\n',noBrush:'Can\'t find brush for: ',brushNotHtmlScript:'Brush wasn\'t configured for html-script option: ',aboutDialog:atob('PCUtIGFib3V0ICU+')}},vars:{discoveredBrushes:null,highlighters:{}},brushes:{},regexLib:{multiLineCComments:XRegExp('/\\*.*?\\*/','gs'),singleLineCComments:/\/\/.*$/gm,singleLinePerlComments:/#.*$/gm,doubleQuotedString:/"([^\\"\n]|\\.)*"/g,singleQuotedString:/'([^\\'\n]|\\.)*'/g,multiLineDoubleQuotedString:XRegExp('"([^\\\\"]|\\\\.)*"','gs'),multiLineSingleQuotedString:XRegExp("'([^\\\\']|\\\\.)*'",'gs'),xmlComments:XRegExp('(&lt;|<)!--.*?--(&gt;|>)','gs'),url:/\w+:\/\/[\w-.\/?%&=:@;#]*/g,phpScriptTags:{left:/(&lt;|<)\?(?:=|php)?/g,right:/\?(&gt;|>)/g,'eof':true},aspScriptTags:{left:/(&lt;|<)%=?/g,right:/%(&gt;|>)/g},scriptScriptTags:{left:/(&lt;|<)\s*script.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*script\s*(&gt;|>)/gi}},toolbar:{getHtml:function(highlighter)
            {var html='<div class="toolbar">',items=sh.toolbar.items,list=items.list;function defaultGetHtml(highlighter,name)
            {return sh.toolbar.getButtonHtml(highlighter,name,sh.config.strings[name]);}
                for(var i=0,l=list.length;i<l;i++)
                {html+=(items[list[i]].getHtml||defaultGetHtml)(highlighter,list[i]);}
                html+='</div>';return html;},getButtonHtml:function(highlighter,commandName,label)
            {commandName=escapeHtml(commandName);return'<span><a href="#" class="toolbar_item'
                +' command_'+commandName
                +' '+commandName
                +'">'+escapeHtml(label)+'</a></span>';},handler:function(e)
            {var target=e.target,className=target.className||'';function getValue(name)
            {var r=new RegExp(name+'_(\\w+)'),match=r.exec(className);return match?match[1]:null;}
                var highlighter=getHighlighterById(findParentElement(target,'.syntaxhighlighter').id),commandName=getValue('command');if(highlighter&&commandName)
                sh.toolbar.items[commandName].execute(highlighter);e.preventDefault();},items:{list:['expandSource','help'],expandSource:{getHtml:function(highlighter)
                    {if(highlighter.getParam('collapse')!=true)
                        return'';var title=highlighter.getParam('title');return sh.toolbar.getButtonHtml(highlighter,'expandSource',title?title:sh.config.strings.expandSource);},execute:function(highlighter)
                    {var div=getHighlighterDivById(highlighter.id);removeClass(div,'collapsed');}},help:{execute:function(highlighter)
                    {var wnd=popup('','_blank',500,250,'scrollbars=0'),doc=wnd.document;doc.write(sh.config.strings.aboutDialog);doc.close();wnd.focus();}}}},findElements:function(globalParams,element)
        {var elements=element?[element]:toArray(document.getElementsByTagName(sh.config.tagName)),conf=sh.config,result=[];if(conf.useScriptTags)
            elements=elements.concat(getSyntaxHighlighterScriptTags());if(elements.length===0)
            return result;for(var i=0,l=elements.length;i<l;i++)
        {var item={target:elements[i],params:merge(globalParams,parseParams(elements[i].className))};if(item.params['brush']==null)
            continue;result.push(item);}
            return result;},highlight:function(globalParams,element)
        {var elements=this.findElements(globalParams,element),propertyName='innerHTML',highlighter=null,conf=sh.config;if(elements.length===0)
            return;for(var i=0,l=elements.length;i<l;i++)
        {var element=elements[i],target=element.target,params=element.params,brushName=params.brush,code;if(brushName==null)
            continue;if(params['html-script']=='true'||sh.defaults['html-script']==true)
        {highlighter=new sh.HtmlScript(brushName);brushName='htmlscript';}
        else
        {var brush=findBrush(brushName);if(brush)
            highlighter=new brush();else
            continue;}
            code=target[propertyName];if(conf.useScriptTags)
            code=stripCData(code);if((target.title||'')!='')
            params.title=target.title;params['brush']=brushName;highlighter.init(params);element=highlighter.getDiv(code);if((target.id||'')!='')
            element.id=target.id;target.parentNode.replaceChild(element,target);}},all:function(params)
        {attachEvent(window,'load',function(){sh.highlight(params);});}};function escapeHtml(html)
    {return document.createElement('div').appendChild(document.createTextNode(html)).parentNode.innerHTML.replace(/"/g,'&quot;');};function hasClass(target,className)
    {return target.className.indexOf(className)!=-1;};function addClass(target,className)
    {if(!hasClass(target,className))
        target.className+=' '+className;};function removeClass(target,className)
    {target.className=target.className.replace(className,'');};function toArray(source)
    {var result=[];for(var i=0,l=source.length;i<l;i++)
        result.push(source[i]);return result;};function splitLines(block)
    {return block.split(/\r?\n/);}
    function getHighlighterId(id)
    {var prefix='highlighter_';return id.indexOf(prefix)==0?id:prefix+id;};function getHighlighterById(id)
    {return sh.vars.highlighters[getHighlighterId(id)];};function getHighlighterDivById(id)
    {return document.getElementById(getHighlighterId(id));};function storeHighlighter(highlighter)
    {sh.vars.highlighters[getHighlighterId(highlighter.id)]=highlighter;};function findElement(target,search,reverse)
    {if(target==null)
        return null;var nodes=reverse!=true?target.childNodes:[target.parentNode],propertyToFind={'#':'id','.':'className'}[search.substr(0,1)]||'nodeName',expectedValue,found;expectedValue=propertyToFind!='nodeName'?search.substr(1):search.toUpperCase();if((target[propertyToFind]||'').indexOf(expectedValue)!=-1)
        return target;for(var i=0,l=nodes.length;nodes&&i<l&&found==null;i++)
        found=findElement(nodes[i],search,reverse);return found;};function findParentElement(target,className)
    {return findElement(target,className,true);};function indexOf(array,searchElement,fromIndex)
    {fromIndex=Math.max(fromIndex||0,0);for(var i=fromIndex,l=array.length;i<l;i++)
        if(array[i]==searchElement)
            return i;return-1;};function guid(prefix)
    {return(prefix||'')+Math.round(Math.random()*1000000).toString();};function merge(obj1,obj2)
    {var result={},name;for(name in obj1)
        result[name]=obj1[name];for(name in obj2)
        result[name]=obj2[name];return result;};function toBoolean(value)
    {var result={"true":true,"false":false}[value];return result==null?value:result;};function popup(url,name,width,height,options)
    {var x=(screen.width-width)/2,y=(screen.height-height)/2;options+=', left='+x+', top='+y+', width='+width+', height='+height;options=options.replace(/^,/,'');var win=window.open(url,name,options);win.focus();return win;};function attachEvent(obj,type,func,scope)
    {function handler(e)
    {e=e||window.event;if(!e.target)
    {e.target=e.srcElement;e.preventDefault=function()
    {this.returnValue=false;};}
        func.call(scope||window,e);};if(obj.attachEvent)
    {obj.attachEvent('on'+type,handler);}
    else
    {obj.addEventListener(type,handler,false);}};function alert(str)
    {window.alert(sh.config.strings.alert+str);};function findBrush(alias,showAlert)
    {var brushes=sh.vars.discoveredBrushes,result=null;if(brushes==null)
    {brushes={};for(var brush in sh.brushes)
    {var info=sh.brushes[brush],aliases=info.aliases;if(aliases==null)
        continue;info.brushName=brush.toLowerCase();for(var i=0,l=aliases.length;i<l;i++)
        brushes[aliases[i]]=brush;}
        sh.vars.discoveredBrushes=brushes;}
        result=sh.brushes[brushes[alias]];if(result==null&&showAlert)
        alert(sh.config.strings.noBrush+alias);return result;};function eachLine(str,callback)
    {var lines=splitLines(str);for(var i=0,l=lines.length;i<l;i++)
        lines[i]=callback(lines[i],i);return lines.join('\r\n');};function trimFirstAndLastLines(str)
    {return str.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g,'');};function parseParams(str)
    {var match,result={},arrayRegex=XRegExp("^\\[(?<values>(.*?))\\]$"),pos=0,regex=XRegExp("(?<name>[\\w-]+)"+"\\s*:\\s*"+"(?<value>"+"[\\w%#-]+|"+"\\[.*?\\]|"+'".*?"|'+"'.*?'"+")\\s*;?","g");while((match=XRegExp.exec(str,regex,pos))!=null)
    {var value=match.value.replace(/^['"]|['"]$/g,'');if(value!=null&&arrayRegex.test(value))
    {var m=XRegExp.exec(value,arrayRegex);value=m.values.length>0?m.values.split(/\s*,\s*/):[];}
        result[match.name]=value;pos=match.index+match[0].length;}
        return result;};function wrapLinesWithCode(str,css)
    {if(str==null||str.length==0||str=='\n')
        return str;str=str.replace(/</g,'&lt;');str=str.replace(/ {2,}/g,function(m)
    {var spaces='';for(var i=0,l=m.length;i<l-1;i++)
        spaces+=sh.config.space;return spaces+' ';});if(css!=null)
        str=eachLine(str,function(line)
        {if(line.length==0)
            return'';var spaces='';line=line.replace(/^(&nbsp;| )+/,function(s)
        {spaces=s;return'';});if(line.length==0)
            return spaces;return spaces+'<code class="'+css+'">'+line+'</code>';});return str;};function padNumber(number,length)
    {var result=number.toString();while(result.length<length)
        result='0'+result;return result;};function processTabs(code,tabSize)
    {var tab='';for(var i=0;i<tabSize;i++)
        tab+=' ';return code.replace(/\t/g,tab);};function processSmartTabs(code,tabSize)
    {var lines=splitLines(code),tab='\t',spaces='';for(var i=0;i<50;i++)
        spaces+='                    ';function insertSpaces(line,pos,count)
    {return line.substr(0,pos)
        +spaces.substr(0,count)
        +line.substr(pos+1,line.length);};code=eachLine(code,function(line)
    {if(line.indexOf(tab)==-1)
        return line;var pos=0;while((pos=line.indexOf(tab))!=-1)
    {var spaces=tabSize-pos%tabSize;line=insertSpaces(line,pos,spaces);}
        return line;});return code;};function fixInputString(str)
    {var br=/<br\s*\/?>|&lt;br\s*\/?&gt;/gi;if(sh.config.bloggerMode==true)
        str=str.replace(br,'\n');if(sh.config.stripBrs==true)
        str=str.replace(br,'');return str;};function trim(str)
    {return str.replace(/^\s+|\s+$/g,'');};function unindent(str)
    {var lines=splitLines(fixInputString(str)),indents=new Array(),regex=/^\s*/,min=1000;for(var i=0,l=lines.length;i<l&&min>0;i++)
    {var line=lines[i];if(trim(line).length==0)
        continue;var matches=regex.exec(line);if(matches==null)
        return str;min=Math.min(matches[0].length,min);}
        if(min>0)
            for(var i=0,l=lines.length;i<l;i++)
                lines[i]=lines[i].substr(min);return lines.join('\n');};function matchesSortCallback(m1,m2)
    {if(m1.index<m2.index)
        return-1;else if(m1.index>m2.index)
        return 1;else
    {if(m1.length<m2.length)
        return-1;else if(m1.length>m2.length)
        return 1;}
        return 0;};function getMatches(code,regexInfo)
    {function defaultAdd(match,regexInfo)
    {return match[0];};var index=0,match=null,matches=[],func=regexInfo.func?regexInfo.func:defaultAdd
        pos=0;while((match=XRegExp.exec(code,regexInfo.regex,pos))!=null)
    {var resultMatch=func(match,regexInfo);if(typeof(resultMatch)=='string')
        resultMatch=[new sh.Match(resultMatch,match.index,regexInfo.css)];matches=matches.concat(resultMatch);pos=match.index+match[0].length;}
        return matches;};function processUrls(code)
    {var gt=/(.*)((&gt;|&lt;).*)/;return code.replace(sh.regexLib.url,function(m)
    {var suffix='',match=null;if(match=gt.exec(m))
    {m=match[1];suffix=match[2];}
        return'<a href="'+m+'">'+m+'</a>'+suffix;});};function getSyntaxHighlighterScriptTags()
    {var tags=document.getElementsByTagName('script'),result=[];for(var i=0,l=tags.length;i<l;i++)
        if(tags[i].type=='syntaxhighlighter')
            result.push(tags[i]);return result;};function stripCData(original)
    {var left='<![CDATA[',right=']]>',copy=trim(original),changed=false,leftLength=left.length,rightLength=right.length;if(copy.indexOf(left)==0)
    {copy=copy.substring(leftLength);changed=true;}
        var copyLength=copy.length;if(copy.indexOf(right)==copyLength-rightLength)
    {copy=copy.substring(0,copyLength-rightLength);changed=true;}
        return changed?copy:original;};function quickCodeHandler(e)
    {var target=e.target,highlighterDiv=findParentElement(target,'.syntaxhighlighter'),container=findParentElement(target,'.container'),textarea=document.createElement('textarea'),highlighter;if(!container||!highlighterDiv||findElement(container,'textarea'))
        return;highlighter=getHighlighterById(highlighterDiv.id);addClass(highlighterDiv,'source');var lines=container.childNodes,code=[];for(var i=0,l=lines.length;i<l;i++)
        code.push(lines[i].innerText||lines[i].textContent);code=code.join('\r');code=code.replace(/\u00a0/g," ");textarea.appendChild(document.createTextNode(code));container.appendChild(textarea);textarea.focus();textarea.select();attachEvent(textarea,'blur',function(e)
    {textarea.parentNode.removeChild(textarea);removeClass(highlighterDiv,'source');});};sh.Match=function(value,index,css)
    {this.value=value;this.index=index;this.length=value.length;this.css=css;this.brushName=null;};sh.Match.prototype.toString=function()
    {return this.value;};sh.HtmlScript=function(scriptBrushName)
    {var brushClass=findBrush(scriptBrushName),scriptBrush,xmlBrush=new sh.brushes.Xml(),bracketsRegex=null,ref=this,methodsToExpose='getDiv getHtml init'.split(' ');if(brushClass==null)
        return;scriptBrush=new brushClass();for(var i=0,l=methodsToExpose.length;i<l;i++)
        (function(){var name=methodsToExpose[i];ref[name]=function()
        {return xmlBrush[name].apply(xmlBrush,arguments);};})();if(scriptBrush.htmlScript==null)
    {alert(sh.config.strings.brushNotHtmlScript+scriptBrushName);return;}
        xmlBrush.regexList.push({regex:scriptBrush.htmlScript.code,func:process});function offsetMatches(matches,offset)
    {for(var j=0,l=matches.length;j<l;j++)
        matches[j].index+=offset;}
        function process(match,info)
        {var code=match.code,matches=[],regexList=scriptBrush.regexList,offset=match.index+match.left.length,htmlScript=scriptBrush.htmlScript,result;for(var i=0,l=regexList.length;i<l;i++)
        {result=getMatches(code,regexList[i]);offsetMatches(result,offset);matches=matches.concat(result);}
            if(htmlScript.left!=null&&match.left!=null)
            {result=getMatches(match.left,htmlScript.left);offsetMatches(result,match.index);matches=matches.concat(result);}
            if(htmlScript.right!=null&&match.right!=null)
            {result=getMatches(match.right,htmlScript.right);offsetMatches(result,match.index+match[0].lastIndexOf(match.right));matches=matches.concat(result);}
            for(var j=0,l=matches.length;j<l;j++)
                matches[j].brushName=brushClass.brushName;return matches;}};sh.Highlighter=function()
    {};sh.Highlighter.prototype={getParam:function(name,defaultValue)
        {var result=this.params[name];return toBoolean(result==null?defaultValue:result);},create:function(name)
        {return document.createElement(name);},findMatches:function(regexList,code)
        {var result=[];if(regexList!=null)
            for(var i=0,l=regexList.length;i<l;i++)
                if(typeof(regexList[i])=="object")
                    result=result.concat(getMatches(code,regexList[i]));return this.removeNestedMatches(result.sort(matchesSortCallback));},removeNestedMatches:function(matches)
        {for(var i=0,l=matches.length;i<l;i++)
        {if(matches[i]===null)
            continue;var itemI=matches[i],itemIEndPos=itemI.index+itemI.length;for(var j=i+1,l=matches.length;j<l&&matches[i]!==null;j++)
        {var itemJ=matches[j];if(itemJ===null)
            continue;else if(itemJ.index>itemIEndPos)
            break;else if(itemJ.index==itemI.index&&itemJ.length>itemI.length)
            matches[i]=null;else if(itemJ.index>=itemI.index&&itemJ.index<itemIEndPos)
            matches[j]=null;}}
            return matches;},figureOutLineNumbers:function(code)
        {var lines=[],firstLine=parseInt(this.getParam('first-line'));eachLine(code,function(line,index)
        {lines.push(index+firstLine);});return lines;},isLineHighlighted:function(lineNumber)
        {var list=this.getParam('highlight',[]);if(typeof(list)!='object'&&list.push==null)
            list=[list];return indexOf(list,lineNumber.toString())!=-1;},getLineHtml:function(lineIndex,lineNumber,code)
        {var classes=['line','number'+lineNumber,'index'+lineIndex,'alt'+(lineNumber%2==0?1:2).toString()];if(this.isLineHighlighted(lineNumber))
            classes.push('highlighted');if(lineNumber==0)
            classes.push('break');return'<div class="'+classes.join(' ')+'">'+code+'</div>';},getLineNumbersHtml:function(code,lineNumbers)
        {var html='',count=splitLines(code).length,firstLine=parseInt(this.getParam('first-line')),pad=this.getParam('pad-line-numbers');if(pad==true)
            pad=(firstLine+count-1).toString().length;else if(isNaN(pad)==true)
            pad=0;for(var i=0;i<count;i++)
        {var lineNumber=lineNumbers?lineNumbers[i]:firstLine+i,code=lineNumber==0?sh.config.space:padNumber(lineNumber,pad);html+=this.getLineHtml(i,lineNumber,code);}
            return html;},getCodeLinesHtml:function(html,lineNumbers)
        {html=trim(html);var lines=splitLines(html),padLength=this.getParam('pad-line-numbers'),firstLine=parseInt(this.getParam('first-line')),html='',brushName=this.getParam('brush');for(var i=0,l=lines.length;i<l;i++)
        {var line=lines[i],indent=/^(&nbsp;|\s)+/.exec(line),spaces=null,lineNumber=lineNumbers?lineNumbers[i]:firstLine+i;;if(indent!=null)
        {spaces=indent[0].toString();line=line.substr(spaces.length);spaces=spaces.replace(' ',sh.config.space);}
            line=trim(line);if(line.length==0)
            line=sh.config.space;html+=this.getLineHtml(i,lineNumber,(spaces!=null?'<code class="'+brushName+' spaces">'+spaces+'</code>':'')+line);}
            return html;},getTitleHtml:function(title)
        {return title?'<caption>'+escapeHtml(title)+'</caption>':'';},getMatchesHtml:function(code,matches)
        {var pos=0,result='',brushName=this.getParam('brush','');function getBrushNameCss(match)
        {var result=match?(match.brushName||brushName):brushName;return result?result+' ':'';};for(var i=0,l=matches.length;i<l;i++)
        {var match=matches[i],matchBrushName;if(match===null||match.length===0)
            continue;matchBrushName=getBrushNameCss(match);result+=wrapLinesWithCode(code.substr(pos,match.index-pos),matchBrushName+'plain')
            +wrapLinesWithCode(match.value,matchBrushName+match.css);pos=match.index+match.length+(match.offset||0);}
            result+=wrapLinesWithCode(code.substr(pos),getBrushNameCss()+'plain');return result;},getHtml:function(code)
        {var html='',classes=['syntaxhighlighter'],tabSize,matches,lineNumbers;if(this.getParam('light')==true)
            this.params.toolbar=this.params.gutter=false;className='syntaxhighlighter';if(this.getParam('collapse')==true)
            classes.push('collapsed');if((gutter=this.getParam('gutter'))==false)
            classes.push('nogutter');classes.push(this.getParam('class-name'));classes.push(this.getParam('brush'));code=trimFirstAndLastLines(code).replace(/\r/g,' ');tabSize=this.getParam('tab-size');code=this.getParam('smart-tabs')==true?processSmartTabs(code,tabSize):processTabs(code,tabSize);if(this.getParam('unindent'))
            code=unindent(code);if(gutter)
            lineNumbers=this.figureOutLineNumbers(code);matches=this.findMatches(this.regexList,code);html=this.getMatchesHtml(code,matches);html=this.getCodeLinesHtml(html,lineNumbers);if(this.getParam('auto-links'))
            html=processUrls(html);if(typeof(navigator)!='undefined'&&navigator.userAgent&&navigator.userAgent.match(/MSIE/))
            classes.push('ie');html='<div id="'+getHighlighterId(this.id)+'" class="'+escapeHtml(classes.join(' '))+'">'
            +(this.getParam('toolbar')?sh.toolbar.getHtml(this):'')
            +'<table border="0" cellpadding="0" cellspacing="0">'
            +this.getTitleHtml(this.getParam('title'))
            +'<tbody>'
            +'<tr>'
            +(gutter?'<td class="gutter">'+this.getLineNumbersHtml(code)+'</td>':'')
            +'<td class="code">'
            +'<div class="container">'
            +html
            +'</div>'
            +'</td>'
            +'</tr>'
            +'</tbody>'
            +'</table>'
            +'</div>';return html;},getDiv:function(code)
        {if(code===null)
            code='';this.code=code;var div=this.create('div');div.innerHTML=this.getHtml(code);if(this.getParam('toolbar'))
            attachEvent(findElement(div,'.toolbar'),'click',sh.toolbar.handler);if(this.getParam('quick-code'))
            attachEvent(findElement(div,'.code'),'dblclick',quickCodeHandler);return div;},init:function(params)
        {this.id=guid();storeHighlighter(this);this.params=merge(sh.defaults,params||{})
            if(this.getParam('light')==true)
                this.params.toolbar=this.params.gutter=false;},getKeywords:function(str)
        {str=str.replace(/^\s+|\s+$/g,'').replace(/\s+/g,'|');return'\\b(?:'+str+')\\b';},forHtmlScript:function(regexGroup)
        {var regex={'end':regexGroup.right.source};if(regexGroup.eof)
            regex.end="(?:(?:"+regex.end+")|$)";this.htmlScript={left:{regex:regexGroup.left,css:'script'},right:{regex:regexGroup.right,css:'script'},code:XRegExp("(?<left>"+regexGroup.left.source+")"+"(?<code>.*?)"+"(?<right>"+regex.end+")","sgi")};}};return sh;}();typeof(exports)!='undefined'?exports.SyntaxHighlighter=SyntaxHighlighter:null;(function(){var sh=SyntaxHighlighter;sh.autoloader=function()
{var list=arguments,elements=sh.findElements(),brushes={},scripts={},all=SyntaxHighlighter.all,allCalled=false,allParams=null,i;SyntaxHighlighter.all=function(params)
{allParams=params;allCalled=true;};function addBrush(aliases,url)
{for(var i=0;i<aliases.length;i++)
    brushes[aliases[i]]=url;};function getAliases(item)
{return item.pop?item:item.split(/\s+/);}
    for(i=0;i<list.length;i++)
    {var aliases=getAliases(list[i]),url=aliases.pop();addBrush(aliases,url);}
    for(i=0;i<elements.length;i++)
    {var url=brushes[elements[i].params.brush];if(url&&scripts[url]===undefined)
    {if(elements[i].params['html-script']==='true')
    {if(scripts[brushes['xml']]===undefined){loadScript(brushes['xml']);scripts[url]=false;}}
        scripts[url]=false;loadScript(url);}}
    function loadScript(url)
    {var script=document.createElement('script'),done=false;script.src=url;script.type='text/javascript';script.language='javascript';script.onload=script.onreadystatechange=function()
    {if(!done&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'))
    {done=true;scripts[url]=true;checkAll();script.onload=script.onreadystatechange=null;script.parentNode.removeChild(script);}};document.body.appendChild(script);};function checkAll()
{for(var url in scripts)
    if(scripts[url]==false)
        return;if(allCalled)
    SyntaxHighlighter.highlight(allParams);};};})();
/*!
 * FormosaSoft Modified!!
 *
 *
 * fancyBox - jQuery Plugin
 * version: 2.1.4 (Thu, 10 Jan 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function(window,document,$,undefined){"use strict";var W=$(window),D=$(document),F=$.fancybox=function(){F.open.apply(this,arguments);},IE=navigator.userAgent.match(/msie/),didUpdate=null,isTouch=document.createTouch!==undefined,isQuery=function(obj){return obj&&obj.hasOwnProperty&&obj instanceof $;},isString=function(str){return str&&$.type(str)==="string";},isPercentage=function(str){return isString(str)&&str.indexOf('%')>0;},isScrollable=function(el){return(el&&!(el.style.overflow&&el.style.overflow==='hidden')&&((el.clientWidth&&el.scrollWidth>el.clientWidth)||(el.clientHeight&&el.scrollHeight>el.clientHeight)));},getScalar=function(orig,dim){var value=parseInt(orig,10)||0;if(dim&&isPercentage(orig)){value=F.getViewport()[dim]/100*value;}
    return Math.ceil(value);},getValue=function(value,dim){return getScalar(value,dim)+'px';};$.extend(F,{version:'2.1.4',defaults:{padding:15,margin:20,width:800,height:600,minWidth:1,minHeight:1,maxWidth:9999,maxHeight:9999,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!isTouch,fitToView:true,aspectRatio:false,topRatio:0.5,leftRatio:0.5,scrolling:'auto',wrapCSS:'',arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:'html',headers:{'X-fancyBox':true}},iframe:{scrolling:'auto',preload:true},swf:{wmode:'transparent',allowfullscreen:'true',allowscriptaccess:'always'},keys:{next:{13:'left',34:'up',39:'left',40:'up'},prev:{8:'right',33:'down',37:'right',38:'down'},close:[27],play:[32],toggle:[70]},direction:{next:'left',prev:'right'},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(IE?' allowtransparency="true"':'')+'></iframe>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:'fade',openSpeed:250,openEasing:'swing',openOpacity:true,openMethod:'zoomIn',closeEffect:'fade',closeSpeed:250,closeEasing:'swing',closeOpacity:true,closeMethod:'zoomOut',nextEffect:'elastic',nextSpeed:250,nextEasing:'swing',nextMethod:'changeIn',prevEffect:'elastic',prevSpeed:250,prevEasing:'swing',prevMethod:'changeOut',helpers:{overlay:true,title:true},onCancel:$.noop,beforeLoad:$.noop,afterLoad:$.noop,beforeShow:$.noop,afterShow:$.noop,beforeChange:$.noop,beforeClose:$.noop,afterClose:$.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(group,opts){if(!group){return;}
        if(!$.isPlainObject(opts)){opts={};}
        if(false===F.close(true)){return;}
        if(!$.isArray(group)){group=isQuery(group)?$(group).get():[group];}
        $.each(group,function(i,element){var obj={},href,title,content,type,rez,hrefParts,selector;if($.type(element)==="object"){if(element.nodeType){element=$(element);}
            if(isQuery(element)){obj={href:element.data('fancybox-href')||element.attr('href'),title:element.data('fancybox-title')||element.attr('title'),isDom:true,element:element};if($.metadata){$.extend(true,obj,element.metadata());}}else{obj=element;}}
            href=opts.href||obj.href||(isString(element)?element:null);title=opts.title!==undefined?opts.title:obj.title||'';content=opts.content||obj.content;type=content?'html':(opts.type||obj.type);if(!type&&obj.isDom){type=element.data('fancybox-type');if(!type){rez=element.prop('class').match(/fancybox\.(\w+)/);type=rez?rez[1]:null;}}
            if(isString(href)){if(!type){if(F.isImage(href)){type='image';}else if(F.isSWF(href)){type='swf';}else if(href.charAt(0)==='#'){type='inline';}else if(isString(element)){type='html';content=element;}}
                if(type==='ajax'){hrefParts=href.split(/\s+/,2);href=hrefParts.shift();selector=hrefParts.shift();}}
            if(!content){if(type==='inline'){if(href){content=$(isString(href)?href.replace(/.*(?=#[^\s]+$)/,''):href);}else if(obj.isDom){content=element;}}else if(type==='html'){content=href;}else if(!type&&!href&&obj.isDom){type='inline';content=element;}}
            $.extend(obj,{href:href,type:type,content:content,title:title,selector:selector});group[i]=obj;});F.opts=$.extend(true,{},F.defaults,opts);if(opts.keys!==undefined){F.opts.keys=opts.keys?$.extend({},F.defaults.keys,opts.keys):false;}
        F.group=group;return F._start(F.opts.index);},cancel:function(){var coming=F.coming;if(!coming||false===F.trigger('onCancel')){return;}
        F.hideLoading();if(F.ajaxLoad){F.ajaxLoad.abort();}
        F.ajaxLoad=null;if(F.imgPreload){F.imgPreload.onload=F.imgPreload.onerror=null;}
        if(coming.wrap){coming.wrap.stop(true,true).trigger('onReset').remove();}
        F.coming=null;if(!F.current){F._afterZoomOut(coming);}},close:function(event){F.cancel();if(false===F.trigger('beforeClose')){return;}
        F.unbindEvents();if(!F.isActive){return;}
        if(!F.isOpen||event===true){$('.fancybox-wrap').stop(true).trigger('onReset').remove();F._afterZoomOut();}else{F.isOpen=F.isOpened=false;F.isClosing=true;$('.fancybox-item, .fancybox-nav').remove();F.wrap.stop(true,true).removeClass('fancybox-opened');F.transitions[F.current.closeMethod]();}},play:function(action){var clear=function(){clearTimeout(F.player.timer);},set=function(){clear();if(F.current&&F.player.isActive){F.player.timer=setTimeout(F.next,F.current.playSpeed);}},stop=function(){clear();$('body').unbind('.player');F.player.isActive=false;F.trigger('onPlayEnd');},start=function(){if(F.current&&(F.current.loop||F.current.index<F.group.length-1)){F.player.isActive=true;$('body').bind({'afterShow.player onUpdate.player':set,'onCancel.player beforeClose.player':stop,'beforeLoad.player':clear});set();F.trigger('onPlayStart');}};if(action===true||(!F.player.isActive&&action!==false)){start();}else{stop();}},next:function(direction){var current=F.current;if(current){if(!isString(direction)){direction=current.direction.next;}
        F.jumpto(current.index+1,direction,'next');}},prev:function(direction){var current=F.current;if(current){if(!isString(direction)){direction=current.direction.prev;}
        F.jumpto(current.index-1,direction,'prev');}},jumpto:function(index,direction,router){var current=F.current;if(!current){return;}
        index=getScalar(index);F.direction=direction||current.direction[(index>=current.index?'next':'prev')];F.router=router||'jumpto';if(current.loop){if(index<0){index=current.group.length+(index%current.group.length);}
            index=index%current.group.length;}
        if(current.group[index]!==undefined){F.cancel();F._start(index);}},reposition:function(e,onlyAbsolute){var current=F.current,wrap=current?current.wrap:null,pos;if(wrap){pos=F._getPosition(onlyAbsolute);if(e&&e.type==='scroll'){delete pos.position;wrap.stop(true,true).animate(pos,200);}else{wrap.css(pos);current.pos=$.extend({},current.dim,pos);}}},update:function(e){var type=(e&&e.type),anyway=!type||type==='orientationchange';if(anyway){clearTimeout(didUpdate);didUpdate=null;}
        if(!F.isOpen||didUpdate){return;}
        didUpdate=setTimeout(function(){var current=F.current;if(!current||F.isClosing){return;}
            F.wrap.removeClass('fancybox-tmp');if(anyway||type==='load'||(type==='resize'&&current.autoResize)){F._setDimension();}
            if(!(type==='scroll'&&current.canShrink)){F.reposition(e);}
            F.trigger('onUpdate');didUpdate=null;},(anyway&&!isTouch?0:300));},toggle:function(action){if(F.isOpen){F.current.fitToView=$.type(action)==="boolean"?action:!F.current.fitToView;if(isTouch){F.wrap.removeAttr('style').addClass('fancybox-tmp');F.trigger('onUpdate');}
        F.update();}},hideLoading:function(){D.unbind('.loading');$('#fancybox-loading').remove();},showLoading:function(){var el,viewport;F.hideLoading();el=$('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');D.bind('keydown.loading',function(e){if((e.which||e.keyCode)===27){e.preventDefault();F.cancel();}});if(!F.defaults.fixed){viewport=F.getViewport();el.css({position:'absolute',top:(viewport.h*0.5)+viewport.y,left:(viewport.w*0.5)+viewport.x});}},getViewport:function(){var locked=(F.current&&F.current.locked)||false,rez={x:W.scrollLeft(),y:W.scrollTop()};if(locked){rez.w=locked[0].clientWidth;rez.h=locked[0].clientHeight;}else{rez.w=isTouch&&window.innerWidth?window.innerWidth:W.width();rez.h=isTouch&&window.innerHeight?window.innerHeight:W.height();}
        return rez;},unbindEvents:function(){if(F.wrap&&isQuery(F.wrap)){F.wrap.unbind('.fb');}
        D.unbind('.fb');W.unbind('.fb');},bindEvents:function(){var current=F.current,keys;if(!current){return;}
        W.bind('orientationchange.fb'+(isTouch?'':' resize.fb')+(current.autoCenter&&!current.locked?' scroll.fb':''),F.update);keys=current.keys;if(keys){D.bind('keydown.fb',function(e){var code=e.which||e.keyCode,target=e.target||e.srcElement;if(code===27&&F.coming){return false;}
            if(!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey&&!(target&&(target.type||$(target).is('[contenteditable]')))){$.each(keys,function(i,val){if(current.group.length>1&&val[code]!==undefined){F[i](val[code]);e.preventDefault();return false;}
                if($.inArray(code,val)>-1){F[i]();e.preventDefault();return false;}});}});}
        if($.fn.mousewheel&&current.mouseWheel){F.wrap.bind('mousewheel.fb',function(e,delta,deltaX,deltaY){var target=e.target||null,parent=$(target),canScroll=false;while(parent.length){if(canScroll||parent.is('.fancybox-skin')||parent.is('.fancybox-wrap')){break;}
            canScroll=isScrollable(parent[0]);parent=$(parent).parent();}
            if(delta!==0&&!canScroll){if(F.group.length>1&&!current.canShrink){if(deltaY>0||deltaX>0){F.prev(deltaY>0?'down':'left');}else if(deltaY<0||deltaX<0){F.next(deltaY<0?'up':'right');}
                e.preventDefault();}}});}},trigger:function(event,o){var ret,obj=o||F.coming||F.current;if(!obj){return;}
        if($.isFunction(obj[event])){ret=obj[event].apply(obj,Array.prototype.slice.call(arguments,1));}
        if(ret===false){return false;}
        if(obj.helpers){$.each(obj.helpers,function(helper,opts){if(opts&&F.helpers[helper]&&$.isFunction(F.helpers[helper][event])){opts=$.extend(true,{},F.helpers[helper].defaults,opts);F.helpers[helper][event](opts,obj);}});}
        $.event.trigger(event+'.fb');},isImage:function(str){return isString(str)&&str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i);},isSWF:function(str){return isString(str)&&str.match(/\.(swf)((\?|#).*)?$/i);},_start:function(index){var coming={},obj,href,type,margin,padding;index=getScalar(index);obj=F.group[index]||null;if(!obj){return false;}
        coming=$.extend(true,{},F.opts,obj);margin=coming.margin;padding=coming.padding;if($.type(margin)==='number'){coming.margin=[margin,margin,margin,margin];}
        if($.type(padding)==='number'){coming.padding=[padding,padding,padding,padding];}
        if(coming.modal){$.extend(true,coming,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}});}
        if(coming.autoSize){coming.autoWidth=coming.autoHeight=true;}
        if(coming.width==='auto'){coming.autoWidth=true;}
        if(coming.height==='auto'){coming.autoHeight=true;}
        coming.group=F.group;coming.index=index;F.coming=coming;if(false===F.trigger('beforeLoad')){F.coming=null;return;}
        type=coming.type;href=coming.href;if(!type){F.coming=null;if(F.current&&F.router&&F.router!=='jumpto'){F.current.index=index;return F[F.router](F.direction);}
            return false;}
        F.isActive=true;if(type==='image'||type==='swf'){coming.autoHeight=coming.autoWidth=false;coming.scrolling='visible';}
        if(type==='image'){coming.aspectRatio=true;}
        coming.wrap=$(coming.tpl.wrap).addClass('fancybox-'+(isTouch?'mobile':'desktop')+' fancybox-type-'+type+' fancybox-tmp '+coming.wrapCSS).appendTo(coming.parent||'body');$.extend(coming,{skin:$('.fancybox-skin',coming.wrap),outer:$('.fancybox-outer',coming.wrap),inner:$('.fancybox-inner',coming.wrap)});$.each(["Top","Right","Bottom","Left"],function(i,v){coming.skin.css('padding'+v,getValue(coming.padding[i]));});F.trigger('onReady');if(type==='inline'||type==='html'){if(!coming.content||!coming.content.length){return F._error('content');}}else if(!href){return F._error('href');}
        if(type==='image'){F._loadImage();}else if(type==='ajax'){F._loadAjax();}else if(type==='iframe'){F._loadIframe();}else{F._afterLoad();}},_error:function(type){$.extend(F.coming,{type:'html',autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:'no',hasError:type,content:F.coming.tpl.error});F._afterLoad();},_loadImage:function(){var img=F.imgPreload=new Image();img.onload=function(){this.onload=this.onerror=null;F.coming.width=this.width;F.coming.height=this.height;F._afterLoad();};img.onerror=function(){this.onload=this.onerror=null;F._error('image');};img.src=F.coming.href;if(img.complete!==true){F.showLoading();}},_loadAjax:function(){var coming=F.coming;F.showLoading();F.ajaxLoad=$.ajax($.extend({},coming.ajax,{url:coming.href,error:function(jqXHR,textStatus){if(F.coming&&textStatus!=='abort'){F._error('ajax',jqXHR);}else{F.hideLoading();}},success:function(data,textStatus){if(textStatus==='success'){coming.content=data;F._afterLoad();}}}));},_loadIframe:function(){var coming=F.coming,iframe=$(coming.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr('scrolling',isTouch?'auto':coming.iframe.scrolling).attr('src',coming.href);$(coming.wrap).bind('onReset',function(){try{$(this).find('iframe').hide().attr('src','//about:blank').end().empty();}catch(e){}});if(coming.iframe.preload){F.showLoading();iframe.one('load',function(){$(this).data('ready',1);if(!isTouch){$(this).bind('load.fb',F.update);}
        $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();F._afterLoad();});}
        coming.content=iframe.appendTo(coming.inner);if(!coming.iframe.preload){F._afterLoad();}},_preloadImages:function(){var group=F.group,current=F.current,len=group.length,cnt=current.preload?Math.min(current.preload,len-1):0,item,i;for(i=1;i<=cnt;i+=1){item=group[(current.index+i)%len];if(item.type==='image'&&item.href){new Image().src=item.href;}}},_afterLoad:function(){var coming=F.coming,previous=F.current,placeholder='fancybox-placeholder',current,content,type,scrolling,href,embed;F.hideLoading();if(!coming||F.isActive===false){return;}
        if(false===F.trigger('afterLoad',coming,previous)){coming.wrap.stop(true).trigger('onReset').remove();F.coming=null;return;}
        if(previous){F.trigger('beforeChange',previous);previous.wrap.stop(true).removeClass('fancybox-opened').find('.fancybox-item, .fancybox-nav').remove();}
        F.unbindEvents();current=coming;content=coming.content;type=coming.type;scrolling=coming.scrolling;$.extend(F,{wrap:current.wrap,skin:current.skin,outer:current.outer,inner:current.inner,current:current,previous:previous});href=current.href;switch(type){case'inline':case'ajax':case'html':if(current.selector){content=$('<div>').html(content).find(current.selector);}else if(isQuery(content)){if(!content.data(placeholder)){content.data(placeholder,$('<div class="'+placeholder+'"></div>').insertAfter(content).hide());}
            content=content.show().detach();current.wrap.bind('onReset',function(){if($(this).find(content).length){content.hide().replaceAll(content.data(placeholder)).data(placeholder,false);}});}
            break;case'image':content=current.tpl.image.replace('{href}',href);break;case'swf':content='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+href+'"></param>';embed='';$.each(current.swf,function(name,val){content+='<param name="'+name+'" value="'+val+'"></param>';embed+=' '+name+'="'+val+'"';});content+='<embed src="'+href+'" type="application/x-shockwave-flash" width="100%" height="100%"'+embed+'></embed></object>';break;}
        if(!(isQuery(content)&&content.parent().is(current.inner))){current.inner.append(content);}
        F.trigger('beforeShow');current.inner.css('overflow',scrolling==='yes'?'scroll':(scrolling==='no'?'hidden':scrolling));F._setDimension();F.reposition();F.isOpen=false;F.coming=null;F.bindEvents();if(!F.isOpened){$('.fancybox-wrap').not(current.wrap).stop(true).trigger('onReset').remove();}else if(previous.prevMethod){F.transitions[previous.prevMethod]();}
        F.transitions[F.isOpened?current.nextMethod:current.openMethod]();F._preloadImages();},_setDimension:function(){var viewport=F.getViewport(),steps=0,canShrink=false,canExpand=false,wrap=F.wrap,skin=F.skin,inner=F.inner,current=F.current,width=current.width,height=current.height,minWidth=current.minWidth,minHeight=current.minHeight,maxWidth=current.maxWidth,maxHeight=current.maxHeight,scrolling=current.scrolling,scrollOut=current.scrollOutside?current.scrollbarWidth:0,margin=current.margin,wMargin=getScalar(margin[1]+margin[3]),hMargin=getScalar(margin[0]+margin[2]),wPadding,hPadding,wSpace,hSpace,origWidth,origHeight,origMaxWidth,origMaxHeight,ratio,width_,height_,maxWidth_,maxHeight_,iframe,body;wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');wPadding=getScalar(skin.outerWidth(true)-skin.width());hPadding=getScalar(skin.outerHeight(true)-skin.height());wSpace=wMargin+wPadding;hSpace=hMargin+hPadding;origWidth=isPercentage(width)?(viewport.w-wSpace)*getScalar(width)/100:width;origHeight=isPercentage(height)?(viewport.h-hSpace)*getScalar(height)/100:height;if(current.type==='iframe'){iframe=current.content;if(current.autoHeight&&iframe.data('ready')===1){try{if(iframe[0].contentWindow.document.location){inner.width(origWidth).height(origHeight);body=iframe.contents().find('body');if(scrollOut){body.css('overflow-x','hidden');}
        origHeight=body.height();}}catch(e){}}}else if(current.autoWidth||current.autoHeight){inner.addClass('fancybox-tmp');if(!current.autoWidth){inner.width(origWidth);}
        if(!current.autoHeight){inner.height(origHeight);}
        if(current.autoWidth){origWidth=inner.width();}
        if(current.autoHeight){origHeight=inner.height();}
        inner.removeClass('fancybox-tmp');}
        width=getScalar(origWidth);height=getScalar(origHeight);ratio=origWidth/origHeight;minWidth=getScalar(isPercentage(minWidth)?getScalar(minWidth,'w')-wSpace:minWidth);maxWidth=getScalar(isPercentage(maxWidth)?getScalar(maxWidth,'w')-wSpace:maxWidth);minHeight=getScalar(isPercentage(minHeight)?getScalar(minHeight,'h')-hSpace:minHeight);maxHeight=getScalar(isPercentage(maxHeight)?getScalar(maxHeight,'h')-hSpace:maxHeight);origMaxWidth=maxWidth;origMaxHeight=maxHeight;if(current.fitToView){maxWidth=Math.min(viewport.w-wSpace,maxWidth);maxHeight=Math.min(viewport.h-hSpace,maxHeight);}else{maxWidth=viewport.w-wSpace;}
        maxWidth_=viewport.w-wMargin;maxHeight_=viewport.h-hMargin;if(current.aspectRatio){if(width>maxWidth){width=maxWidth;height=getScalar(width/ratio);}
            if(height>maxHeight){height=maxHeight;width=getScalar(height*ratio);}
            if(width<minWidth){width=minWidth;height=getScalar(width/ratio);}
            if(height<minHeight){height=minHeight;width=getScalar(height*ratio);}}else{width=Math.max(minWidth,Math.min(width,maxWidth));if(current.autoHeight&&current.type!=='iframe'){inner.width(width);height=inner.height();}
            height=Math.max(minHeight,Math.min(height,maxHeight));}
        if(current.fitToView){inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height();if(current.aspectRatio){while((width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight){if(steps++>19){break;}
            height=Math.max(minHeight,Math.min(maxHeight,height-10));width=getScalar(height*ratio);if(width<minWidth){width=minWidth;height=getScalar(width/ratio);}
            if(width>maxWidth){width=maxWidth;height=getScalar(width/ratio);}
            inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height();}}else{width=Math.max(minWidth,Math.min(width,width-(width_-maxWidth_)));height=Math.max(minHeight,Math.min(height,height-(height_-maxHeight_)));}}
        if(scrollOut&&scrolling==='auto'&&height<origHeight&&(width+wPadding+scrollOut)<maxWidth_){width+=scrollOut;}
        inner.width(width).height(height);wrap.width(width+wPadding);width_=wrap.width();height_=wrap.height();canShrink=(width_>maxWidth_||height_>maxHeight_)&&width>minWidth&&height>minHeight;canExpand=current.aspectRatio?(width<origMaxWidth&&height<origMaxHeight&&width<origWidth&&height<origHeight):((width<origMaxWidth||height<origMaxHeight)&&(width<origWidth||height<origHeight));$.extend(current,{dim:{width:getValue(width_),height:getValue(height_)},origWidth:origWidth,origHeight:origHeight,canShrink:canShrink,canExpand:canExpand,wPadding:wPadding,hPadding:hPadding,wrapSpace:height_-skin.outerHeight(true),skinSpace:skin.height()-height});if(!iframe&&current.autoHeight&&height>minHeight&&height<maxHeight&&!canExpand){inner.height('auto');}},_getPosition:function(onlyAbsolute){var current=F.current,viewport=F.getViewport(),margin=current.margin,width=F.wrap.width()+margin[1]+margin[3],height=F.wrap.height()+margin[0]+margin[2],rez={position:'absolute',top:margin[0],left:margin[3]};if(current.autoCenter&&current.fixed&&!onlyAbsolute&&height<=viewport.h&&width<=viewport.w){rez.position='fixed';}else if(!current.locked){rez.top+=viewport.y;rez.left+=viewport.x;}
        rez.top=getValue(Math.max(rez.top,rez.top+((viewport.h-height)*current.topRatio)));rez.left=getValue(Math.max(rez.left,rez.left+((viewport.w-width)*current.leftRatio)));return rez;},_afterZoomIn:function(){var current=F.current;if(!current){return;}
        F.isOpen=F.isOpened=true;F.wrap.css('overflow','visible').addClass('fancybox-opened');F.update();if(current.closeClick||(current.nextClick&&F.group.length>1)){F.inner.css('cursor','pointer').bind('click.fb',function(e){if(!$(e.target).is('a')&&!$(e.target).parent().is('a')){e.preventDefault();F[current.closeClick?'close':'next']();}});}
        if(current.closeBtn){$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb',function(e){e.preventDefault();F.close();});}
        if(current.arrows&&F.group.length>1){if(current.loop||current.index>0){$(current.tpl.prev).appendTo(F.outer).bind('click.fb',F.prev);}
            if(current.loop||current.index<F.group.length-1){$(current.tpl.next).appendTo(F.outer).bind('click.fb',F.next);}}
        F.trigger('afterShow');if(!current.loop&&current.index===current.group.length-1){F.play(false);}else if(F.opts.autoPlay&&!F.player.isActive){F.opts.autoPlay=false;F.play();}},_afterZoomOut:function(obj){obj=obj||F.current;$('.fancybox-wrap').trigger('onReset').remove();$.extend(F,{group:{},opts:{},router:false,current:null,isActive:false,isOpened:false,isOpen:false,isClosing:false,wrap:null,skin:null,outer:null,inner:null});F.trigger('afterClose',obj);}});F.transitions={getOrigPosition:function(){var current=F.current,element=current.element,orig=current.orig,pos={},width=50,height=50,hPadding=current.hPadding,wPadding=current.wPadding,viewport=F.getViewport();if(!orig&&current.isDom&&element.is(':visible')){orig=element.find('img:first');if(!orig.length){orig=element;}}
        if(isQuery(orig)){pos=orig.offset();if(orig.is('img')){width=orig.outerWidth();height=orig.outerHeight();}}else{pos.top=viewport.y+(viewport.h-height)*current.topRatio;pos.left=viewport.x+(viewport.w-width)*current.leftRatio;}
        if(F.wrap.css('position')==='fixed'||current.locked){pos.top-=viewport.y;pos.left-=viewport.x;}
        pos={top:getValue(pos.top-hPadding*current.topRatio),left:getValue(pos.left-wPadding*current.leftRatio),width:getValue(width+wPadding),height:getValue(height+hPadding)};return pos;},step:function(now,fx){var ratio,padding,value,prop=fx.prop,current=F.current,wrapSpace=current.wrapSpace,skinSpace=current.skinSpace;if(prop==='width'||prop==='height'){ratio=fx.end===fx.start?1:(now-fx.start)/(fx.end-fx.start);if(F.isClosing){ratio=1-ratio;}
        padding=prop==='width'?current.wPadding:current.hPadding;value=now-padding;F.skin[prop](getScalar(prop==='width'?value:value-(wrapSpace*ratio)));F.inner[prop](getScalar(prop==='width'?value:value-(wrapSpace*ratio)-(skinSpace*ratio)));}},zoomIn:function(){var current=F.current,startPos=current.pos,effect=current.openEffect,elastic=effect==='elastic',endPos=$.extend({opacity:1},startPos);delete endPos.position;if(elastic){startPos=this.getOrigPosition();if(current.openOpacity){startPos.opacity=0.1;}}else if(effect==='fade'){startPos.opacity=0.1;}
        F.wrap.css(startPos).animate(endPos,{duration:effect==='none'?0:current.openSpeed,easing:current.openEasing,step:elastic?this.step:null,complete:F._afterZoomIn});},zoomOut:function(){var current=F.current,effect=current.closeEffect,elastic=effect==='elastic',endPos={opacity:0.1};if(elastic){endPos=this.getOrigPosition();if(current.closeOpacity){endPos.opacity=0.1;}}
        F.wrap.animate(endPos,{duration:effect==='none'?0:current.closeSpeed,easing:current.closeEasing,step:elastic?this.step:null,complete:F._afterZoomOut});},changeIn:function(){var current=F.current,effect=current.nextEffect,startPos=current.pos,endPos={opacity:1},direction=F.direction,distance=200,field;startPos.opacity=0.1;if(effect==='elastic'){field=direction==='down'||direction==='up'?'top':'left';if(direction==='down'||direction==='right'){startPos[field]=getValue(getScalar(startPos[field])-distance);endPos[field]='+='+distance+'px';}else{startPos[field]=getValue(getScalar(startPos[field])+distance);endPos[field]='-='+distance+'px';}}
        if(effect==='none'){F._afterZoomIn();}else{F.wrap.css(startPos).animate(endPos,{duration:current.nextSpeed,easing:current.nextEasing,complete:F._afterZoomIn});}},changeOut:function(){var previous=F.previous,effect=previous.prevEffect,endPos={opacity:0.1},direction=F.direction,distance=200;if(effect==='elastic'){endPos[direction==='down'||direction==='up'?'top':'left']=(direction==='up'||direction==='left'?'-':'+')+'='+distance+'px';}
        previous.wrap.animate(endPos,{duration:effect==='none'?0:previous.prevSpeed,easing:previous.prevEasing,complete:function(){$(this).trigger('onReset').remove();}});}};F.helpers.overlay={defaults:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:!isTouch,fixed:true},overlay:null,fixed:false,create:function(opts){opts=$.extend({},this.defaults,opts);if(this.overlay){this.close();}
        this.overlay=$('<div class="fancybox-overlay"></div>').appendTo('body');this.fixed=false;if(opts.fixed&&F.defaults.fixed){this.overlay.addClass('fancybox-overlay-fixed');this.fixed=true;}},open:function(opts){var that=this;opts=$.extend({},this.defaults,opts);if(this.overlay){this.overlay.unbind('.overlay').width('auto').height('auto');}else{this.create(opts);}
        if(!this.fixed){W.bind('resize.overlay',$.proxy(this.update,this));this.update();}
        if(opts.closeClick){this.overlay.bind('click.overlay',function(e){if($(e.target).hasClass('fancybox-overlay')){if(F.isActive){F.close();}else{that.close();}}});}
        this.overlay.css(opts.css).show();},close:function(){$('.fancybox-overlay').remove();W.unbind('resize.overlay');this.overlay=null;if(this.margin!==false){$('body').css('margin-right',this.margin);this.margin=false;}
        if(this.el){this.el.removeClass('fancybox-lock');}},update:function(){var width='100%',offsetWidth;this.overlay.width(width).height('100%');if(IE){offsetWidth=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(D.width()>offsetWidth){width=D.width();}}else if(D.width()>W.width()){width=D.width();}
        this.overlay.width(width).height(D.height());},onReady:function(opts,obj){$('.fancybox-overlay').stop(true,true);if(!this.overlay){this.margin=D.height()>W.height()||$('body').css('overflow-y')==='scroll'?$('body').css('margin-right'):false;this.el=document.all&&!document.querySelector?$('html'):$('body');this.create(opts);}
        if(opts.locked&&this.fixed){obj.locked=this.overlay.append(obj.wrap);obj.fixed=false;}
        if(opts.showEarly===true){this.beforeShow.apply(this,arguments);}},beforeShow:function(opts,obj){if(obj.locked){this.el.addClass('fancybox-lock');if(this.margin!==false){$('body').css('margin-right',getScalar(this.margin)+obj.scrollbarWidth);}}
        this.open(opts);},onUpdate:function(){if(!this.fixed){this.update();}},afterClose:function(opts){if(this.overlay&&!F.isActive){this.overlay.fadeOut(opts.speedOut,$.proxy(this.close,this));}}};F.helpers.title={defaults:{type:'float',position:'bottom'},beforeShow:function(opts){var current=F.current,text=current.title,type=opts.type,title,target;if($.isFunction(text)){text=text.call(current.element,current);}
        if(!isString(text)||$.trim(text)===''){return;}
        title=$('<div class="fancybox-title fancybox-title-'+type+'-wrap">'+text+'</div>');switch(type){case'inside':target=F.skin;break;case'outside':target=F.wrap;break;case'over':target=F.inner;break;default:target=F.skin;title.appendTo('body');if(IE){title.width(title.width());}
            title.wrapInner('<span class="child"></span>');F.current.margin[2]+=Math.abs(getScalar(title.css('margin-bottom')));break;}
        title[(opts.position==='top'?'prependTo':'appendTo')](target);}};$.fn.fancybox=function(options){var index,that=$(this),selector=this.selector||'',run=function(e){var what=$(this).blur(),idx=index,relType,relVal;if(!(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)&&!what.is('.fancybox-wrap')){relType=options.groupAttr||'data-fancybox-group';relVal=what.attr(relType);if(!relVal){relType='rel';relVal=what.get(0)[relType];}
    if(relVal&&relVal!==''&&relVal!=='nofollow'){what=selector.length?$(selector):that;what=what.filter('['+relType+'="'+relVal+'"]');idx=what.index(this);}
    options.index=idx;if(F.open(what,options)!==false){e.preventDefault();}}};options=options||{};index=options.index||0;if(!selector||options.live===false){that.unbind('click.fb-start').bind('click.fb-start',run);}else{D.undelegate(selector,'click.fb-start').delegate(selector+":not('.fancybox-item, .fancybox-nav')",'click.fb-start',run);}
    this.filter('[data-fancybox-start=1]').trigger('click');return this;};D.ready(function(){if($.scrollbarWidth===undefined){$.scrollbarWidth=function(){var parent=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),child=parent.children(),width=child.innerWidth()-child.height(99).innerWidth();parent.remove();return width;};}
    if($.support.fixedPosition===undefined){$.support.fixedPosition=(function(){var elem=$('<div style="position:fixed;top:20px;"></div>').appendTo('body'),fixed=(elem[0].offsetTop===20||elem[0].offsetTop===15);elem.remove();return fixed;}());}
    $.extend(F.defaults,{scrollbarWidth:$.scrollbarWidth(),fixed:$.support.fixedPosition,parent:$('body')});});}(window,document,jQuery));function popupLinkfy(){if($('div[type="editor"]').length>0)return;$('a[target="_popup"]').each(function(idx,itm){var _rel=[];if(typeof $(this).attr('rel')!=='undefined'){$(this).attr('rel').split(' ').some(function(item){if(item.indexOf(',')!==-1){_rel=item.split(',');return true;}});}
    var def=new Array();def.push('autoxauto');def.push(0);if(!_rel[0])_rel[0]=def[0];if(!_rel[1])_rel[1]=def[1];var _size=_rel[0].split('x');_size[0]=(_size[0]=='auto')?760:_size[0];_size[1]=(_size[1]=='auto')?500:_size[1];var videoOnly=_rel[1];var parser=document.createElement('a');parser.href=$(this).attr('href');var _param=(parser.search=='')?'?popup=true&output=embed&videoOnly='+videoOnly:'&popup=true&output=embedvideoOnly='+videoOnly;parser.search+=_param;$(itm).fancybox({type:'iframe',preload:true,autoWidth:false,autoHeight:false,autoSize:false,autoResize:false,href:parser.href,padding:5,title:function(){var _href=($(this).data('url')==undefined)?$(this).attr('href'):$(this).data('url');return $('<a>',{href:_href,html:_T('app_oriUrl')+': '+_href,target:'_blank'}).wrapAll('<tmpl>').parent().html();},titleShow:true,margin:20,beforeLoad:function(){this.width=parseInt(_size[0],10);this.height=parseInt(_size[1],10);fs.event.trigger('popupLinkfy.beforeLoad');},afterShow:function(){fs.event.trigger('popupLinkfy.afterShow');}});});}
function SyntaxHighlighterInit(containerSelector){if(containerSelector===undefined){SyntaxHighlighter.autoloader.apply(null,path('actionscript3 as3      @shBrushAS3.js','bash shell             @shBrushBash.js','cpp c                  @shBrushCpp.js','c# c-sharp csharp      @shBrushCSharp.js','css                    @shBrushCss.js','xml                    @shBrushXml.js','java                   @shBrushJava.js','js jscript javascript  @shBrushJScript.js','perl pl                @shBrushPerl.js','php                    @shBrushPhp.js','text plain             @shBrushPlain.js','py python              @shBrushPython.js','ruby rails ror rb      @shBrushRuby.js','sql                    @shBrushSql.js','vb vbnet               @shBrushVb.js'));SyntaxHighlighter.vars.discoveredBrushes=null;SyntaxHighlighter.defaults['toolbar']=false;SyntaxHighlighter.defaults['quick-code']=false
    SyntaxHighlighter.defaults['smart-tabs']=true;SyntaxHighlighter.all();}
else{var brushJsFiles=['/sys/js/syntaxhighlight/shBrushAS3.js','/sys/js/syntaxhighlight/shBrushBash.js','/sys/js/syntaxhighlight/shBrushCpp.js','/sys/js/syntaxhighlight/shBrushCSharp.js','/sys/js/syntaxhighlight/shBrushCss.js','/sys/js/syntaxhighlight/shBrushXml.js','/sys/js/syntaxhighlight/shBrushJava.js','/sys/js/syntaxhighlight/shBrushJScript.js','/sys/js/syntaxhighlight/shBrushPerl.js','/sys/js/syntaxhighlight/shBrushPhp.js','/sys/js/syntaxhighlight/shBrushPlain.js','/sys/js/syntaxhighlight/shBrushPython.js','/sys/js/syntaxhighlight/shBrushRuby.js','/sys/js/syntaxhighlight/shBrushSql.js','/sys/js/syntaxhighlight/shBrushVb.js'];var renderJs=[""+"$('"+containerSelector+"').find('pre').each(function(){\n"+"    SyntaxHighlighter.highlight(null, this);\n"+"});"];fs.loadJsFiles(brushJsFiles,renderJs);}
    function path(){var args=arguments,result=[];for(var i=0;i<args.length;i++)result.push(args[i].replace('@','/sys/js/syntaxhighlight/'));return result;}}
function ExtUrllinkfy(){var regex=new RegExp(window.location.host);$('a:not([target="_blank"]):not([target="_popup"]):not([target="_self"])').filter(function(){return this.href.match(/^(https?:\/\/)/)}).filter(function(){return!regex.test(this.href);}).filter(function(){return!this.href.match(window.App.hrefFilterStr)}).attr("target","_blank").attr("rel","noopener noreferrer");}
$(document).bind('syntaxhighlight',function(){SyntaxHighlighterInit();}).bind('popupLinkfy',function(){popupLinkfy();}).bind('ExtUrllinkfy',function(){ExtUrllinkfy();});var _windowLoadEvents=['popupLinkfy','syntaxhighlight','ExtUrllinkfy'];function removeWindowLoadEventsEvent(e){var index=_windowLoadEvents.indexOf(e);_windowLoadEvents.splice(index,1);}
$.extend({ping:function(){var d=new Date();$.post('/index/ping',{time:d.getTime()},function(obj){});}});setInterval($.ping,60*60*1000);$(function(){$.each(_windowLoadEvents,function(idx,item){$(document).trigger(item);})
    $('.js-fs-modal').click(function(e){e.preventDefault();if($(this).hasClass('disabled')||$(this).closest('.disabled').length){return false;}
        var that=$(this),box=fs.box.dialog({title:fs.util.escape(that.data('title')||this.title||this.innerHTML),subTitle:fs.util.escape(that.data('sub-title')),url:that.data('url')||this.href||that.attr('href'),width:that.data('width'),height:that.data('height')})});$('.js-fs-modal-form').click(function(e){e.preventDefault();if($(this).hasClass('disabled')||$(this).closest('.disabled').length){return false;}
        var that=$(this),box=fs.box.dialog({title:fs.util.escape(that.data('title')||this.title||this.innerHTML),subTitle:fs.util.escape(that.data('sub-title')),url:that.data('url')||this.href||that.attr('href'),width:that.data('width'),height:that.data('height'),buttons:[{label:that.data('save-text')||_T('ok'),className:'btn btn-primary',callback:function(){box.find("iframe")[0].contentWindow.jQuery("body").trigger('form.beforeSubmit');if(box.find("iframe")[0].contentWindow.jQuery("form").length){box.find("iframe")[0].contentWindow.jQuery("form").trigger('submit');}
                    return false;}},{label:_T('cancel'),className:'btn'}]})});$('.js-fs-confirm-ajax').click(function(e){e.preventDefault();var that=$(this),title=_T('delete-alert');if(that.hasClass('disabled')||that.closest('.disabled').length){return false;}
        if(typeof that.data('title')!=='undefined'){title=_T('cfmDel-item',{'%name%':that.data('title')});}
        if(confirm(title)){$.post(that.data('url')||this.href||that.attr('href'),function(o){if(o.ret.status!=='true'){alert(o.ret.msg);return;}
            window.location.reload();},'json');}});$('.js-fs-ajax').click(function(e){e.preventDefault();var that=$(this);if(that.hasClass('disabled')||that.closest('.disabled').length){return false;}
        $.post(that.data('url')||this.href||that.attr('href'),function(o){if(o.ret.status!=='true'){alert(o.ret.msg);return;}
            if(o.ret.alert){alert(o.ret.alert);}
            if(o.ret.redirect){window.location.href=o.ret.redirect;return;}
            window.location.reload();},'json');});$('.js-fs-form').on('change','input, select',function(){this.form.submit();});});

/*
 * ver 20170706
 */
"use strict";

$.fn.fmc_exists = function () {
    return (this.length !== 0);
}

var fmc = fmc || {};

$('body').bind('form.validation', function (e, ret) {
    fmc.handleValidation(ret.formId, ret.msg);
});

$('body').bind('form.completed', function (e, ret) {
    fmc.handleCompleted(ret.action);
});



fmc.isFileUploading = function (formId, ctrlIds) {

    var isUploading = false;

    $.each(ctrlIds, function (index, ctrl) {
        var id = ctrl['id'];
        var type = $("#" + formId).find("#" + id).data("type");

        switch (type) {
            case "file":
                var ctrl = $("#" + formId).find("#" + id).find(".js-file-file");
                isUploading |= ctrl.is(':disabled');
            default:
        }
    });

    return isUploading;
}

fmc.messageLinkHandler = function (formId, id) {
    if ($('[id="' + id + '"]').length > 1) {
        var nid = formId + '-' + id;
        if ($('#' + nid).length == 0) {
            $('#' + formId + ' #' + id).append('<div id="' + nid + '"></div>');
        }
        location.hash = "#" + nid;
    }
    else {
        location.hash = "#" + id;
    }
}

fmc.handleValidation = function (formId, msg) {
    msg = msg || {};

    // var form = $("#" + formId);
    var formError = $("#" + formId).find("[data-role='form-validation']");
    formError.remove();


    // $("#" + formId).find(".form-group").each(function() {
    //     var group = $(this);
    //     var error = group.find("[data-role='validation']");

    //     group.removeClass("has-error has-danger");
    //     error.remove();
    // });
    fmc.clearErrorMessage(formId);

    $("#" + formId).triggerHandler('form.validation.fail');

    var errorNum = Object.keys(msg).length;
    var formError = $("#" + formId).find("[data-role='form-validation']");
    if (formError.length === 0) {
        formError = $("<div></div>").attr({
            'class': "fs-form-message",
            'data-role': "form-validation"
        });

        $("#" + formId).prepend(formError);
    }

    formError.html("<div>" + errorNum + " " + _T("errorCount") + "</div>");

    $.each(msg, function (i, m) {

        if (m.id == formId) {
            formError.append("<div>" + m.msg + "</div>");
            return;
        }

        var that = $("#" + formId).find("#" + m.id);
        var group = that.closest(".form-group");
        var error = group.find("[data-role='validation']");

        if (error.length === 0) {

            error = $("<div></div>").attr({
                'class': "help-block with-errors",
                'data-role': "validation"
            });

            group.find(".fs-form-control").append(error);
            group.addClass("has-error has-danger");
        }

        error.append("<div>" + m.msg + "</div>");

        var label = group.find('label.control-label').text().trim();
        if (label == '') {
            // placeholder
            if (group.find('[name="' + m.id + '"]').length == 1) {
                label = group.find('[name="' + m.id + '"]').prop('placeholder').trim();
            }
        }
        if (label == '') {
            label = m.id;
        }
        label = fs.escapeHtml(label);
        formError.append("<a class='fs-form-message-link' onclick=fmc.messageLinkHandler('" + formId + "','" + m.id + "') >\
            <div class='col-xs-6'>" + label + "</div>\
            <div class='col-xs-6 text-overflow'>" + $('<p>' + m.msg + '</p>').text() + "</div>\
        </a>");
        location.hash = "#";
    });
    formError.append('<div class="clearfix"></div>');

    if (parent == self) {
        // not iframe
        var modalScrollDiv = $('.modal.fade.in');
        if (modalScrollDiv.length > 0) {
            // modal
            modalScrollDiv.animate({ scrollTop: 0 }, 'slow');
        }
        else {
            $('html,body').animate({ scrollTop: $("#" + formId).offset().top }, 'slow');
        }
    }
    else {
        try {
            $('html,body').animate({ scrollTop: $("#" + formId).offset().top }, 'slow');
            parent.$('.modal.fade.in').animate({ scrollTop: 0 }, 'slow');
        }
        catch (e) { }
    }

}

fmc.handleCompleted = function (action) {

    action = action || {};

    // alert
    $(action.alert).each(function (idx, val) {
        alert(val);
    });

    // confirm
    var confirm_flag = false;

    $(action.confirm).each(function (idx, val) {
        if (!confirm(val)) {
            confirm_flag = true;
            return;
        }
    });

    if (confirm_flag) return;
    if (action.close) {
        window.close();
        return;
    } else if (action.redir) {

        if (action.redir == 'parentReload') {
            parent.window.location.reload(true);
            return;
        } else if (action.redir == 'closeModal') {
            parent.fs.ui.closeJModal();
        } else {
            window.location.href = action.redir;

            /* reload current page with anchor hash */
            if (action.redir.charAt(0) === '#') {
                window.location.reload();
            }
        }

    } else if (action.parentReload) {
        parent.window.location.reload(true);
        return;
    } else if (action.parentUrl) {

        /* reload current page with anchor hash */
        if (action.parentUrl.charAt(0) === '#') {
            parent.window.location.href = parent.window.location.href.split('#')[0] + action.parentUrl;
            parent.window.location.reload();
        }
        else {
            parent.window.location.href = action.parentUrl;
        }

    } else if (action.closeModal) {
        parent.fs.ui.closeJModal();
        return;
    } else if (action.reload) {
        window.location.reload(true);
        return;
    } else if (action.customJs) {
        var scriptblock = document.createElement("script");
        if (fs.util.ua().isIE8) {
            scriptblock.text = action.customJs;
        }
        else {
            scriptblock.innerHTML = action.customJs;
        }
        document.getElementsByTagName("body")[0].appendChild(scriptblock);
    } else if (action.customParentJs) {
        parent.fs.loadJsScript([action.customParentJs]);
    } else if (action.blankAndParentReload) {
        parent.window.location.reload(true);
        window.open(action.blankAndParentReload);
    } else {
        window.location.reload();
    }
}



fmc.clearErrorMessage = function (formId) {
    var ctrls = (formId === undefined) ? $(".form-group") : $("#" + formId).find(".form-group"),
        formMsg = (formId === undefined) ? $(".fs-form-message[data-role=form-validation]") : $("#" + formId + " .fs-form-message[data-role=form-validation]")

    ctrls.each(function () {
        $(this).removeClass("has-error has-danger");
        $(this).find("[data-role='validation']").remove();
    });

    formMsg.each(function () {
        $(this).remove();
    });
}




// tcsu, 2017/09/03
fmc.getValue = function (id) {
    var type = $("#" + id).data("type");
    switch (type) {
        case "hidden":
        case "text":
        case "email":
        case "password":
        case "number":
        case "textarea":
        case "color":
        case "image":
        case "rating":
            return fmc.getInput2(id);
    }
}

fmc.setValue = function (id, value, formId) {
    var type = $("#" + id).data("type");
    switch (type) {
        case "hidden":
        case "text":
        case "email":
        case "password":
        case "number":
        case "textarea":
        case "color":
        case "image":
        case "rating":
            return fmc.setInput2(id, value, formId);
        case "select":
            return fmc.setSelect(id, value, formId);
        case "select2":
            return fmc.setSelect2(id, value, formId);
        case "html":
            return fmc.setHtml(id, value, formId);
        case "datepicker":
            return fmc.setDatepicker(id, value, formId);
        case "radios":
            return fmc.setRadio(id, value, formId);
    }
}

fmc.getInput2 = function (id) {
    return $("#" + id).find("[name=" + id + "]").val();
}
fmc.setInput2 = function (id, value, formId) {
    var ctrl = (formId == undefined)
        ? $("#" + id)
        : $("#" + formId + ' #' + id)
    ctrl.find("[name=" + id + "]").val(value);
}
fmc.setSelect = function (id, value, formId) {
    var ctrl = (formId == undefined)
        ? $("#" + id)
        : $("#" + formId + ' #' + id)
    ctrl.find("select").val(value);
}

fmc.setSelect2 = function (ctrlId, data, formId) {
    var multiple = (formId == undefined)
        ? $('#' + ctrlId + " select").attr('multiple')
        : $('#' + formId + ' #' + ctrlId + " select").attr('multiple');
    var name = (multiple == 'multiple')
        ? ctrlId + '[]'
        : ctrlId;
    var select2Ctrl = (formId == undefined)
        ? $('#' + ctrlId + " select[name='" + name + "']")
        : $('#' + formId + ' #' + ctrlId + " select[name='" + name + "']");

    if (Array.isArray(data)) {
        var selectVals = [];
        data.forEach(function (val) {
            if (select2Ctrl.find("option[value='" + val.id + "']").length == 0) {
                var newOption = new Option(val.text, val.id);
                select2Ctrl.append(newOption);
            }

            selectVals.push(val.id);
        });

        select2Ctrl.val(selectVals);
    } else {
        if (select2Ctrl.find("option[value='" + data.id + "']").length == 0) {
            var newOption = new Option(data.text, data.id);
            select2Ctrl.append(newOption);
        }

        select2Ctrl.val(data.id);
    }

    select2Ctrl.trigger('change');
}
fmc.setHtml = function (id, value, formId) {
    var ctrl = (formId == undefined)
        ? $("#" + id)
        : $("#" + formId + ' #' + id)
    ctrl.find("[name=" + id + "]").html(value);
}
fmc.setDatepicker = function (id, value, formId) {
    var ctrl = (formId == undefined)
        ? $("#" + id)
        : $("#" + formId + ' #' + id)
    ctrl.find("[name=" + id + "_date]").val(value);
}
fmc.setRadio = function (id, value, formId) {
    var ctrl = (formId == undefined)
        ? $("#" + id + " input[name=" + id + "][value=" + value + "]")
        : $("#" + formId + ' #' + id + " input[name=" + id + "][value=" + value + "]")
    ctrl.trigger('click');
}








fmc.getValues = function (formId, ctrlIds) {
    var values = {};

    $.each(ctrlIds, function (index, ctrl) {
        var id = ctrl['id'];
        var value = fmc.getValueById(formId, ctrl);
        values[id] = value;
    });

    return values;
}

fmc.getValueById = function (formId, ctrl) {
    var id = ctrl['id'];
    var type = $("#" + formId).find("#" + id).data("type");
    switch (type) {
        case "hidden":
        case "text":
        case "email":
        case "password":
        case "number":
        case "textarea":
        case "color":
        case "image":
        case "rating":
        case "slider":
            return fmc.getInput(formId, id);
        case "input_range":
            return fmc.getInputRange(formId, id);
        case "select":
            return fmc.getSelect(formId, id);
        case "radios":
            return fmc.getRadios(formId, id);
        case "checkboxes":
            return fmc.getCheckboxes(formId, id, ctrl['options']);
        case "year_range":
            return fmc.getYearRange(formId, id);
        case "month_range":
            return fmc.getMonthRange(formId, id);
        case "date_range":
        case "time_range":
            return fmc.getDateAndTimeRange(formId, id);
        case "datetime_range":
        case "datetime_range_group":
            return fmc.getDateTimeRange(formId, id);
        case "multi_date_time_range":
            return fmc.getMultipleDateTimeRange(formId, id);
        case "date_time":
            return fmc.getDateTime(formId, id);
        case "datepicker2":
            return fmc.getDatepicker2(formId, id, ctrl['mode']);
        case "datepicker":
            return fmc.getDatepicker(formId, id);
        case "timepicker":
            return fmc.getTimepicker(formId, id);
        case "multiple":
            return fmc.getMultiple(formId, id, ctrl['controls']);
        case "select2":
            return fmc.getSelect2(formId, id, ctrl['mode']);
        case "editor":
            return fmc.getEditor(formId, id);
        case "file":
            return fmc.getFile(formId, id);
        case "uploader":
            return fmc.getUploader(formId, id);
        case "uploader2":
            return fmc.getUploader2(formId, id);
        case "captcha":
            return fmc.getCaptcha(formId, id);
        case "dimension":
            return fmc.getDimension(formId, id);
        case "code":
            return fmc.getCode(formId, id);
        case "checkbox":
            return fmc.getCheckbox(formId, id, ctrl['options']);
        case "radio_tree":
            return fmc.getRadioTree(formId, id);
        case "checkbox_tree":
            return fmc.getCheckboxTree(formId, id, ctrl['options']);
        case "duration":
            return fmc.getDuration(formId, id, ctrl['disableDay']);
        case "tfEditOption":
            return fmc.gettfEditOption(formId, id);
        case "selectEditOption":
            return fmc.getSelectEditOption(formId, id);
        case "taiwan_city":
            return fmc.getTaiwanCity(formId, id);
        default:
            return { "id": id, "value": null };
    }
}

fmc.getInput = function (formId, id) {
    var value = $("#" + formId).find("[name=" + id + "]").val();

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getInputRange = function (formId, id) {
    var value_start = $("#" + formId).find("[name=" + id + "_start" + "]").val();
    var value_end = $("#" + formId).find("[name=" + id + "_end" + "]").val();

    var obj = {
        "id": id,
        "value": { "start": value_start, "end": value_end }
    };
    return obj;
}

fmc.getSelect = function (formId, id) {
    var value = $("#" + formId).find("[name=" + id + "]").val();

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getRadios = function (formId, id) {
    var value = $("#" + formId).find("[name=" + id + "]:checked").val();

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getCheckboxes = function (formId, id, options) {
    var multiple = $("#" + formId).find("#" + id);

    var controls = {};
    $.each(options, function (index, option) {
        var ctrlId = option['id'];
        var ctrlValue = null;

        var unchecked_enable = multiple.find("[data-id=" + ctrlId + "]").is(':checked') ? true : false;
        if (unchecked_enable) {
            ctrlValue = multiple.find("[data-id=" + ctrlId + "]").val();
        } else {
            ctrlValue = multiple.find("[data-id=unchecked-" + ctrlId + "]").val();
        }

        var ctrlObj = {
            "id": ctrlId,
            "value": ctrlValue
        };

        controls[ctrlId] = ctrlObj;
    });

    var obj = {
        "id": id,
        "value": controls
    };
    return obj;
}

fmc.getYearRange = function (formId, id) {
    var value_start = $("#" + formId).find("[name=" + id + "_start" + "]").val();
    var value_end = $("#" + formId).find("[name=" + id + "_end" + "]").val();

    var obj = {
        "id": id,
        "value": { "start": value_start, "end": value_end }
    };
    return obj;
}

fmc.getMonthRange = function (formId, id) {
    var value_start = $("#" + formId).find("[name=" + id + "_start" + "]").val();
    var value_end = $("#" + formId).find("[name=" + id + "_end" + "]").val();

    var obj = {
        "id": id,
        "value": { "start": value_start, "end": value_end }
    };
    return obj;
}

fmc.getDateAndTimeRange = function (formId, id) {
    var value_start = $("#" + formId).find("[name=" + id + "_start" + "]").val();
    var value_end = $("#" + formId).find("[name=" + id + "_end" + "]").val();

    var obj = {
        "id": id,
        "value": { "start": value_start, "end": value_end }
    };
    return obj;
}

fmc.getDateTimeRange = function (formId, id) {
    var value_start_date = $("#" + formId).find("[name=" + id + "_start_date" + "]").val();
    var value_start_time = $("#" + formId).find("[name=" + id + "_start_time" + "]").val();
    var value_end_date = $("#" + formId).find("[name=" + id + "_end_date" + "]").val();
    var value_end_time = $("#" + formId).find("[name=" + id + "_end_time" + "]").val();

    var obj = {
        "id": id,
        "value": { "start_date": value_start_date, "start_time": value_start_time, "end_date": value_end_date, "end_time": value_end_time }
    };
    return obj;
}

fmc.getDateTime = function (formId, id) {
    var value_date = $("#" + formId).find("[name=" + id + "_date" + "]").val();
    var value_time = $("#" + formId).find("[name=" + id + "_time" + "]").val();

    var obj = {
        "id": id,
        "value": { "date": value_date, "time": value_time }
    };
    return obj;
}

fmc.getDatepicker = function (formId, id) {
    var value = $("#" + formId).find("[name=" + id + "_date" + "]").val();

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getDatepicker2 = function (formId, id, mode) {
    var year = $("#" + formId).find("[name=" + id + "_year]"),
        month = $("#" + formId).find("[name=" + id + "_month]"),
        day = $("#" + formId).find("[name=" + id + "_day]"),
        date = [];

    if (mode == 'Ymd') {
        date.push(year.val());
    }
    date.push(month.val());
    date.push(day.val());

    var obj = {
        "id": id,
        "value": date.join('-')
    };
    return obj;
}

fmc.getTimepicker = function (formId, id) {
    var value = $("#" + formId).find("[name=" + id + "_time" + "]").val();

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getMultiple = function (formId, id, ctrls) {
    var multiple = $("#" + formId).find("#" + id);

    var controls = {};
    $.each(ctrls, function (index, ctrl) {
        var ctrlType = ctrl['type'];
        var ctrlId = ctrl['id'];
        var ctrlValue = null;
        switch (ctrlType) {
            case 'select':
            case 'text':
            case 'number':
                ctrlValue = multiple.find("[name=" + ctrlId + "]").val();
                break;
            case 'checkbox':
                var unchecked_enable = multiple.find("[data-id=" + ctrlId + "]").is(':checked') ? true : false;
                if (unchecked_enable) {
                    ctrlValue = multiple.find("[data-id=" + ctrlId + "]").val();
                } else {
                    ctrlValue = multiple.find("[data-id=unchecked-" + ctrlId + "]").val();
                }
                break;
            case 'select2':
                if (ctrl['mode'] == 'multiple') {
                    ctrlValue = multiple.find("[name='" + ctrlId + "[]']").val();
                }
                else {
                    ctrlValue = multiple.find("[name=" + ctrlId + "]").val();
                }
                break;
            default:
        }

        var ctrlObj = {
            "id": ctrlId,
            "value": ctrlValue
        };

        controls[ctrlId] = ctrlObj;
    });

    var obj = {
        "id": id,
        "value": controls
    };
    return obj;
}

fmc.getSelect2 = function (formId, id, mode) {
    if (mode == 'multiple') {
        var value = $("#" + formId).find("[name='" + id + "[]']").val();
    }
    else {
        var value = $("#" + formId).find("[name=" + id + "]").val();
    }

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getEditor = function (formId, id) {
    var editor = $("#" + formId).find("[name=" + id + "]").attr('id');
    var value = getEditorValue(editor);

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getFile = function (formId, id) {
    var value = $("#" + formId).find("[name=" + id + "]").val();

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getUploader = function (formId, id) {
    var uploader = $("#" + formId).find("#" + id);
    var value = $("#" + formId).find("#" + id + "_uploader").val();

    var checkbox = uploader.find("[data-id=" + id + "_checkbox" + "]");
    if (checkbox.length !== 0) {
        var unchecked_enable = checkbox.is(':checked') ? true : false;
        if (unchecked_enable) {
            value = uploader.find("[data-id=" + id + "_checkbox" + "]").val();
        } else {
            value = uploader.find("[data-id=unchecked-" + id + "_checkbox" + "]").val();
        }
    }

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getCaptcha = function (formId, id) {
    var value = $("#" + formId).find("[name='" + id + "']").val();
    var obj = {
        "id": id,
        "value": value
    }
    return obj;
}

fmc.getDimension = function (formId, id) {
    var value_width = $("#" + formId).find("[name=" + id + "_width" + "]").val();
    var value_height = $("#" + formId).find("[name=" + id + "_height" + "]").val();

    var obj = {
        "id": id,
        "value": { "width": value_width, "height": value_height }
    };
    return obj;
}

fmc.getCode = function (formId, id) {
    var value = $('#' + formId).find("[name='" + id + "']").val();

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getCheckbox = function (formId, id, options) {
    var checkbox = $("#" + formId).find("#" + id);

    var controls = [];
    $.each(options, function (index, option) {
        var ctrlId = id + "_" + option['id'];
        var ctrlValue = null;

        var ckecked = checkbox.find("[data-id=" + ctrlId + "]").is(':checked');
        if (ckecked) {
            ctrlValue = checkbox.find("[data-id=" + ctrlId + "]").val();

            controls.push(ctrlValue);
        }
    });

    var value = controls.join("#");

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getMultipleDateTimeRange = function (formId, id) {
    var datetimeRange = $("#" + formId).find("#" + id);

    var options = datetimeRange.find('.fs-form-datetime-range-item');
    var controls = [];
    $.each(options, function (index, option) {
        var value_date = $(option).find("[role=" + id + "_date]").val();
        var value_start = $(option).find("[role=" + id + "_start]").val();
        var value_end = $(option).find("[role=" + id + "_end]").val();
        if ($(option).is(":visible")) {
            if (value_date !== "" || value_start !== "" || value_end !== "") {
                controls.push({ 'date': value_date, 'start': value_start, 'end': value_end });
            }
        }
    });
    var obj = {
        "id": id,
        "value": controls
    };
    return obj;
}

fmc.getCheckboxTree = function (formId, id, options) {
    var checkboxTree = $("#" + formId).find("#" + id);
    var mode = checkboxTree.data('mode');
    var controls = [];
    $.each(options, function (index, option) {
        var ctrlId = id + "_" + option['id'];
        var ctrlValue = null;
        var checkbox = checkboxTree.find("[data-id=" + ctrlId + "]");
        var ckecked = checkbox.is(':checked');
        var getValue = false;

        if (ckecked) {
            if (mode == 'applyToChildren') {
                var parentCheckbox = checkbox.closest('#' + formId + ' #' + id + ' ul').prev('li.checkbox').find('input[type="checkbox"]');
                if (parentCheckbox.length == 0 || parentCheckbox.is(':checked') === false) {
                    getValue = true;
                }
            } else {
                getValue = true;
            }
        }

        if (getValue) {
            ctrlValue = checkbox.val();

            controls.push(ctrlValue);
        }
    });

    var value = controls.join("#");

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getRadioTree = function (formId, id) {
    var value = $("#" + formId).find("[name=" + id + "]:checked").val();

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getUploader2 = function (formId, id) {
    var uploader = $("#" + formId).find("#" + id);
    var value = $("#" + formId).find("#" + formId + '_' + id + "_uploader").val();

    var checkbox = uploader.find("[data-id=" + id + "_checkbox" + "]");
    if (checkbox.length !== 0) {
        var unchecked_enable = checkbox.is(':checked') ? true : false;
        if (unchecked_enable) {
            value = uploader.find("[data-id=" + id + "_checkbox" + "]").val();
        } else {
            value = uploader.find("[data-id=unchecked-" + id + "_checkbox" + "]").val();
        }
    }

    var obj = {
        "id": id,
        "value": value
    };
    return obj;
}

fmc.getDuration = function (formId, id, disableDay) {
    var day = $('#' + formId).find('#' + id + '_day'),
        hour = $('#' + formId).find('#' + id + '_hour'),
        minute = $('#' + formId).find('#' + id + '_minute'),
        obj = {
            "id": id,
            "value": {}
        };

    if (disableDay == 0) {
        obj.value.day = day.val().trim().replace(/^(0+)([0-9])/, '$2');
    }
    obj.value.hour = hour.val().trim().replace(/^(0+)([0-9])/, '$2');
    obj.value.minute = minute.val().trim().replace(/^(0+)([0-9])/, '$2');

    return obj;
}

fmc.gettfEditOption = function (formId, id) {
    var option = {
        0: $("#" + formId).find("[id=0_" + id + "_text]").val(),
        1: $("#" + formId).find("[id=1_" + id + "_text]").val()
    };

    var answer = $("#" + formId).find("[name=" + id + "]:checked").val();

    var obj = {
        "id": id,
        "value": {
            "answer": answer,
            "option": option
        }
    };
    return obj;
}

fmc.getSelectEditOption = function (formId, id) {
    var option = {};
    var answer = [];
    var container = $('#' + formId + ' #' + id);

    /* option */
    container.find('.optionEdit-item').each(function (k, v) {
        var textInput = $(v).find('input[type="text"]');
        option[k] = {
            text: textInput.val().trim(),
            img: textInput.data('img')
        };
    });
    /* answers */
    container.find('[name="optionEdit_option"]:checked').each(function (k, v) {
        answer.push($(v).val());
    });

    var obj = {
        "id": id,
        "value": {
            "answer": answer,
            "option": option
        }
    };
    return obj;
}

fmc.getTaiwanCity = function (formId, id) {
    var container = $('#' + formId + ' #' + id);

    var obj = {
        "id": id,
        "value": {
            "county": container.find('select[name="' + id + '_county"]').val(),
            "district": container.find('select[name="' + id + '_district"]').val(),
            "road": container.find('input[name="' + id + '_road"]').val()
        }
    };
    return obj;
}

fmc.reload = function (formId, id, control) {
    var type = $("#" + id).data("type");
    switch (type) {
        case "select":
            return fmc.reloadSelect(formId, id, control);
    }
}
fmc.reloadSelect = function (formId, id, control) {
    $("#" + formId + " #" + id + " select").html(control);
}

fmc.bind_checkedCollapse = function (formId) {
    var formSelector = (formId == undefined) ? 'body' : '#' + formId;

    // init: checked-collapse
    $(formSelector + ' .checked-collapse').each(function () {
        var id = $(this).attr("id");

        var toggle = $(formSelector + ' [data-toggle="checked-collapse"][data-target*="#' + id + '"]').filter(function () {
            var targets = $(this).data('target').split(','),
                match = false;
            for (var i = 0; i < targets.length; i++) {
                if (targets[i].trim() == '#' + id) {
                    match = true;
                    break;
                }
            }
            return match;
        });

        if (toggle.is(':checked')) {  /* checkbox, radio */
            $(formSelector + ' #' + id).collapse('show');
        } else if (toggle.is('.image-input-hidden') && toggle.val()) {  /* check fmc::IMAEG hidden input has value or not */
            $(formSelector + ' #' + id).collapse('show');
        }
    });

    var processedName = [];
    // bind onchange event: radio, checkbox
    $(formSelector + ' input[data-toggle="checked-collapse"]').each(function () {
        var type = $(this).attr('type');
        switch (type) {
            case 'radio':
                var name = $(this).attr('name'),
                    radios = $(formSelector + ' input:radio[name=' + name + ']');

                if (processedName.indexOf(name) == -1) {
                    radios.change(function () {
                        var hideTargets = [],
                            showTargets = [];
                        radios.each(function () {
                            var targetId = $(this).data("target");
                            if (targetId) {
                                var targetIds = targetId.split(',').map(function (o) { return o.trim(); }),
                                    action = ($(this).is(':checked')) ? 'show' : 'hide';
                                targetIds.forEach(function (o) {
                                    if (action == 'show') {
                                        if (showTargets.indexOf(o) == -1) {
                                            showTargets.push(o);
                                        }
                                    } else {
                                        if (hideTargets.indexOf(o) == -1) {
                                            hideTargets.push(o);
                                        }
                                    }
                                });
                            }
                        });

                        var filteredHideTargets = hideTargets.filter(function (o) { return (showTargets.indexOf(o) == -1) });
                        if (filteredHideTargets.length > 0) {
                            $(formSelector + ' ' + filteredHideTargets.join(',')).collapse('hide');
                        }
                        if (showTargets.length > 0) {
                            $(formSelector + ' ' + showTargets.join(',')).collapse('show');
                        }
                    });
                    processedName.push(name);
                }
                break;

            case 'checkbox':
                $(this).change(function () {
                    var targetId = $(this).data("target");
                    if (targetId) {
                        if ($(this).is(':checked')) {
                            $(formSelector + ' ' + targetId).collapse('show');
                        } else {
                            var hideTargets = targetId.split(',').map(function (o) { return o.trim(); });
                            var checkboxes = $(this).closest(formSelector + ' .form-group[data-type="checkbox"]').find('input[type="checkbox"]');
                            var showTargets = [];
                            checkboxes.each(function () {
                                var checkboxTargetId = $(this).data('target');
                                if ($(this).is(':checked') && checkboxTargetId) {
                                    var checkboxTargetIds = checkboxTargetId.split(',').map(function (o) { return o.trim(); });
                                    checkboxTargetIds.forEach(function (o) {
                                        if (showTargets.indexOf(o) == -1) {
                                            showTargets.push(o);
                                        }
                                    });
                                }
                            });
                            var filteredHideTargets = hideTargets.filter(function (o) { return (showTargets.indexOf(o) == -1) });
                            if (filteredHideTargets.length > 0) {
                                $(formSelector + ' ' + filteredHideTargets.join(',')).collapse('hide');
                            }
                        }
                    }
                });
                break;

            default:
                break;
        }
    });

    // bind onchange event: select
    $(formSelector + ' select option[data-toggle="checked-collapse"]').each(function () {
        var select_name = $(this).closest('select').attr('name');
        if (processedName.indexOf(select_name) == -1) {
            $(this).closest('select').change(function () {
                var hideTargets = [],
                    showTargets = [];
                $('option', this).each(function () {
                    var targetId = $(this).data("target");
                    if (targetId) {
                        var targetIds = targetId.split(',').map(function (o) { return o.trim(); }),
                            action = ($(this).is(':selected')) ? 'show' : 'hide';
                        targetIds.forEach(function (o) {
                            if (action == 'show') {
                                if (showTargets.indexOf(o) == -1) {
                                    showTargets.push(o);
                                }
                            } else {
                                if (hideTargets.indexOf(o) == -1) {
                                    hideTargets.push(o);
                                }
                            }
                        });
                    }
                });

                var filteredHideTargets = hideTargets.filter(function (o) { return (showTargets.indexOf(o) == -1) });
                if (filteredHideTargets.length > 0) {
                    $(formSelector + ' ' + filteredHideTargets.join(',')).collapse('hide');
                }
                if (showTargets.length > 0) {
                    $(formSelector + ' ' + showTargets.join(',')).collapse('show');
                }
            });
            processedName.push(select_name);
        }
    });

    // bind onchange event on fmc::IMAGE
    $(formSelector + ' .form-group[data-type="image"] input[type="hidden"]').change(function () {
        $(formSelector + ' ' + $(this).data("target")).collapse($(this).val() ? 'show' : 'hide');
    });
}



// *** data-target 裡面的 id 必須是唯一
fmc.bind_checkedEnable = function (formId) {
    var isEnabledMap = {};
    var clearMap = function () {
        isEnabledMap = {};
    };
    var setTargetEnable = function (ctrl) {
        var target = $(ctrl).data("target");  // selector, ex. "#id1, #id2, ..."

        if (target) {
            var targetIds = target.split(',').map(function (o) { return o.trim(); });
            if ($(ctrl).is(':checked')) {
                targetIds.forEach(function (o) {
                    isEnabledMap[o] = 1;
                    $(o).removeClass('fs-disabled');
                });
            }
            else {
                targetIds.forEach(function (o) {
                    if (isEnabledMap[o] == 1) {
                        return;
                    }
                    $(o).addClass('fs-disabled');
                });
            }
        }
    };

    var formSelector = (formId == undefined) ? 'body' : '#' + formId;

    var processedName = [];
    // radio, checkbox
    $(formSelector + ' input[data-toggle="checked-enable"]').each(function () {
        var type = $(this).attr('type');            // <input type=radio/checkbox ...>

        switch (type) {
            case 'radio':
                var name = $(this).attr('name'),
                    radios = $(formSelector + ' input:radio[name=' + name + ']');

                if (processedName.indexOf(name) == -1) {
                    // init
                    radios.each(function () {
                        setTargetEnable(this);
                    });
                    clearMap();

                    radios.change(function () {
                        radios.each(function () {
                            setTargetEnable(this);
                        });
                        clearMap();
                    });
                    processedName.push(name);
                }

                break;

            case 'checkbox':
                setTargetEnable(this);  // init
                clearMap();
                $(this).change(function () {
                    if ($(this).is(':checked')) {
                        setTargetEnable(this);
                    } else {
                        var checkboxes = $(this).closest(formSelector + ' .form-group[data-type="checkbox"]').find('input[type="checkbox"]');
                        checkboxes.each(function () {
                            setTargetEnable(this);
                        });
                    }
                    clearMap();
                });
                break;

            default:
                break;
        }
    });

    // select
    $(formSelector + ' select option[data-toggle="checked-enable"]').each(function () {
        var select = $(this).closest('select'),
            options = select.find('option'),
            select_name = select.attr('name');

        if (processedName.indexOf(select_name) == -1) {
            // init
            options.each(function () {
                setTargetEnable(this);
            });
            clearMap();

            select.change(function () {
                options.each(function () {
                    setTargetEnable(this);
                });
                clearMap();
            });

            processedName.push(select_name);
        }
    });
}

fmc.bind_inputEnable = function (formId) {
    var setTargetEnable = function (ctrl) {
        var target = $(ctrl).data("target");

        if (target) {
            if ($(ctrl).val().length == 0) {
                $(target).addClass('fs-disabled');
            }
            else {
                $(target).removeClass('fs-disabled');
            }
        }
    };

    var formSelector = (formId == undefined) ? 'body' : '#' + formId;

    $(formSelector + ' input[data-toggle="input-enable"]').each(function () {

        setTargetEnable(this);
        $(this).bind('input propertychange', function () {
            setTargetEnable(this);
        });

    });
}

//更動
var fbRoot = document.createElement('div');
fbRoot.id = 'fb-root';
document.body.insertBefore(fbRoot, document.body.firstChild);
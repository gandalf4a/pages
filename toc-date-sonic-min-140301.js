tocDate.autoLoad="0";
tocDate.total=0;
tocDate.startNo=1;
tocDate.yearNow="";
tocDate.monthNow="";
tocDate.toggle=function(a){var b=jQuery;
    b(a).next()[tocDate.toggleEffect]()};
    tocDate.json=function(r){var g=jQuery,p=[],m=[],q=[],e=("entry" in r.feed)?1:0,c=r.feed.entry.length,h,f,d,o,n,b,a;tocDate.total=!tocDate.total?r.feed.openSearch$totalResults.$t:tocDate.total;
    if(!e){g("#TOC-date").html("目前沒有文章");
    return}
    for(h=0;h<c;h++){o=r.feed.entry[h];
        n=o.title.$t;b=o.published.$t.substring(0,10);
        d=o.link.length;
        for(f=0;f<d;f++){
            if(o.link[f].rel=="alternate"){a=o.link[f].href;break}}p.push(n);
        q.push(b);
        m.push(a)}g("#tocMore").html("");
        if(tocDate.autoLoad=="0"){tocDate.divInit(g,p,m,q)}else{tocDate.main(g,p,m,q)}};
        tocDate.divInit=function($,postTitle,postUrl,postDate){var _0x1868=[];
            eval(function(_0xc24fx1,_0xc24fx2,_0xc24fx3,_0xc24fx4,_0xc24fx5,_0xc24fx6){_0xc24fx5=function(_0xc24fx3){return(_0xc24fx3<_0xc24fx2?_0x1868[4]:_0xc24fx5(parseInt(_0xc24fx3/_0xc24fx2)))+((_0xc24fx3=_0xc24fx3%_0xc24fx2)>35?String[_0x1868[5]](_0xc24fx3+29):_0xc24fx3.toString(36))};
            if(!_0x1868[4][_0x1868[6]](/^/,String)){while(_0xc24fx3--){_0xc24fx6[_0xc24fx5(_0xc24fx3)]=_0xc24fx4[_0xc24fx3]||_0xc24fx5(_0xc24fx3)}_0xc24fx4=[function(_0xc24fx5){return _0xc24fx6[_0xc24fx5]}];_0xc24fx5=function(){return _0x1868[7]};
            _0xc24fx3=1}while(_0xc24fx3--){
                if(_0xc24fx4[_0xc24fx3]){_0xc24fx1=_0xc24fx1[_0x1868[6]](new RegExp(_0x1868[8]+_0xc24fx5(_0xc24fx3)+_0x1868[8],_0x1868[9]),_0xc24fx4[_0xc24fx3])}}return _0xc24fx1}(_0x1868[0],61,61,_0x1868[3][_0x1868[2]](_0x1868[1]),0,{}))};
            tocDate.main=function(d,o,h,p){var c=h.length,e,b,k,g,m,n,f,j,a;
                for(e=0;e<c;e++){b=p[e];k=b.substring(0,4);g=b.substring(5,7);m=b.substring(8,10);
                    if(k!=tocDate.yearNow){f="<div class='tocYear'>";
                    f+="<span class='tocYearTitle' onclick='tocDate.toggle(this);'>"+k+"</span>";f+="<div class='tocYearToggle' id='tocYear"+k+"'></div>";f+="<div style='clear: both;'></div></div><div style='clear: both;'></div>";d("#TOC-date").append(f);tocDate.yearNow=k}
                    if(g!=tocDate.monthNow){n=tocDate.month[parseInt(g,10)-1];f="<div  class='tocMonthTitle' onclick='tocDate.toggle(this);'>"+n+"</div>";f+="<div class='tocMonthToggle' id='tocMonth"+k+g+"'></div><div style='clear: both;'></div>";d("#tocYear"+k).append(f);tocDate.monthNow=g}f="<span class='tocDayNo'>["+m+"]</span>";f+="<div class='tocPostTitle'><a href='"+h[e]+"' target='_blank'>"+o[e]+"</a></div>";d("#tocMonth"+k+g).append(f)}tocDate.startNo=tocDate.loadNumber+tocDate.startNo;if(tocDate.total<tocDate.startNo){return}
                    if(tocDate.autoLoad=="N"&&tocDate.total>=tocDate.startNo){f="<span class='tocMore' onclick='tocDate.init($, 1)'>"+tocDate.loadMoreText+"</span>";f+="<span class='tocMore' onclick='tocDate.init($, 2)'>"+tocDate.loadAllText+"</span>";d("#tocMore").html(f)}
                    if(tocDate.autoLoad=="Y"){tocDate.init(d,2)}};tocDate.init=function(c,a){var b="<div style='text-align: center; margin: 0px auto'><img style='vertical-align: middle; border: none; box-shadow: none;' src='https://lh3.googleusercontent.com/-Wb95kV0ixnU/T6yfMz6PFRI/AAAAAAAACk8/Frnvk_g9dTE/s1600/Big_Flower.gif'/>&#12288;please wait...</div>";c=!c?jQuery:c;
                    if(!a){b="<div id='tocMore'>"+b+"</div>";c("#TOC-date").after(b);b="<div id='tocInfo'></div>";c("#tocMore").after(b)}else{c("#tocMore").html(b)}
                    if(a==2){tocDate.autoLoad="Y"}c.getScript("/feeds/posts/summary?max-results="+tocDate.loadNumber+"&start-index="+tocDate.startNo+"&alt=json-in-script&callback=tocDate.json")};tocDate.getScript=function(f,e){var d=document.createElement("script");
                    if(d.readyState){d.onreadystatechange=function(){
                        if(d.readyState=="loaded"||d.readyState=="complete"){d.onreadystatechange=null;
                            if(e){e()}}}}else{d.onload=function(){
                                if(e){e()}}}d.src=f;document.documentElement.firstChild.appendChild(d)};
                                if(typeof jQuery==="undefined"){tocDate.getScript("https://raw.githack.com/gandalf4a/pages/master/jquery.min.js",tocDate.init)}else{tocDate.init()};

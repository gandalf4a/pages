tocDate.autoLoad="0";tocDate.total=0;tocDate.startNo=1;tocDate.yearNow="";tocDate.monthNow="";tocDate.toggle=function(a){var b=jQuery;b(a).next()[tocDate.toggleEffect]()};tocDate.json=function(r){var g=jQuery,p=[],m=[],q=[],e=("entry" in r.feed)?1:0,c=r.feed.entry.length,h,f,d,o,n,b,a;tocDate.total=!tocDate.total?r.feed.openSearch$totalResults.$t:tocDate.total;if(!e){g("#TOC-date").html("目前沒有文章");return}for(h=0;h<c;h++){o=r.feed.entry[h];n=o.title.$t;b=o.published.$t.substring(0,10);d=o.link.length;for(f=0;f<d;f++){if(o.link[f].rel=="alternate"){a=o.link[f].href;break}}p.push(n);q.push(b);m.push(a)}g("#tocMore").html("");if(tocDate.autoLoad=="0"){tocDate.divInit(g,p,m,q)}else{tocDate.main(g,p,m,q)}};tocDate.divInit=function($,postTitle,postUrl,postDate){var _0x1868=["\x79\x20\x64\x3D\x68\x5B\x30\x5D\x2C\x38\x2C\x39\x2C\x63\x2C\x32\x3B\x36\x2E\x38\x3D\x38\x3D\x64\x2E\x6F\x28\x30\x2C\x34\x29\x3B\x36\x2E\x39\x3D\x39\x3D\x64\x2E\x6F\x28\x35\x2C\x37\x29\x3B\x63\x3D\x36\x2E\x42\x5B\x73\x28\x39\x2C\x74\x29\x2D\x31\x5D\x3B\x32\x3D\x22\x3C\x33\x20\x62\x3D\x27\x66\x27\x3E\x22\x3B\x32\x2B\x3D\x22\x3C\x69\x20\x62\x3D\x27\x7A\x27\x20\x6A\x3D\x27\x36\x2E\x6B\x28\x6C\x29\x3B\x27\x3E\x22\x2B\x38\x2B\x22\x3C\x2F\x69\x3E\x22\x3B\x32\x2B\x3D\x22\x3C\x33\x20\x62\x3D\x27\x75\x27\x20\x6D\x3D\x27\x66\x22\x2B\x38\x2B\x22\x27\x3E\x22\x3B\x32\x2B\x3D\x22\x3C\x33\x20\x62\x3D\x27\x76\x27\x20\x6A\x3D\x27\x36\x2E\x6B\x28\x6C\x29\x3B\x27\x3E\x22\x2B\x63\x2B\x22\x3C\x2F\x33\x3E\x22\x3B\x32\x2B\x3D\x22\x3C\x33\x20\x62\x3D\x27\x77\x27\x20\x6D\x3D\x27\x78\x22\x2B\x38\x2B\x39\x2B\x22\x27\x3E\x3C\x2F\x33\x3E\x3C\x33\x20\x67\x3D\x27\x70\x3A\x20\x71\x3B\x27\x3E\x3C\x2F\x33\x3E\x3C\x2F\x33\x3E\x3C\x33\x20\x67\x3D\x27\x70\x3A\x20\x71\x3B\x27\x3E\x3C\x2F\x33\x3E\x22\x3B\x24\x28\x22\x23\x72\x2D\x65\x22\x29\x2E\x41\x28\x32\x29\x3B\x32\x3D\x22\x3C\x61\x20\x43\x3D\x27\x44\x3A\x2F\x2F\x45\x2E\x46\x2E\x47\x2F\x48\x2F\x49\x2F\x4A\x2D\x4B\x2D\x65\x2D\x4C\x2E\x32\x27\x20\x4D\x3D\x27\x4F\x27\x20\x50\x3D\x27\x51\x20\x52\x27\x3E\x20\x53\x20\x72\x20\x54\x20\x65\x3C\x2F\x61\x3E\x22\x3B\x24\x28\x22\x23\x55\x22\x29\x2E\x32\x28\x32\x29\x3B\x36\x2E\x56\x3D\x22\x4E\x22\x3B\x36\x2E\x57\x28\x24\x2C\x58\x2C\x59\x2C\x68\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x68\x74\x6D\x6C\x7C\x64\x69\x76\x7C\x7C\x7C\x74\x6F\x63\x44\x61\x74\x65\x7C\x7C\x79\x65\x61\x72\x4E\x6F\x77\x7C\x6D\x6F\x6E\x74\x68\x4E\x6F\x77\x7C\x7C\x63\x6C\x61\x73\x73\x7C\x6D\x6F\x6E\x74\x68\x4E\x61\x6D\x65\x7C\x64\x61\x74\x65\x4E\x6F\x77\x7C\x64\x61\x74\x65\x7C\x74\x6F\x63\x59\x65\x61\x72\x7C\x73\x74\x79\x6C\x65\x7C\x70\x6F\x73\x74\x44\x61\x74\x65\x7C\x73\x70\x61\x6E\x7C\x6F\x6E\x63\x6C\x69\x63\x6B\x7C\x74\x6F\x67\x67\x6C\x65\x7C\x74\x68\x69\x73\x7C\x69\x64\x7C\x7C\x73\x75\x62\x73\x74\x72\x69\x6E\x67\x7C\x63\x6C\x65\x61\x72\x7C\x62\x6F\x74\x68\x7C\x54\x4F\x43\x7C\x70\x61\x72\x73\x65\x49\x6E\x74\x7C\x31\x30\x7C\x74\x6F\x63\x59\x65\x61\x72\x54\x6F\x67\x67\x6C\x65\x7C\x74\x6F\x63\x4D\x6F\x6E\x74\x68\x54\x69\x74\x6C\x65\x7C\x74\x6F\x63\x4D\x6F\x6E\x74\x68\x54\x6F\x67\x67\x6C\x65\x7C\x74\x6F\x63\x4D\x6F\x6E\x74\x68\x7C\x76\x61\x72\x7C\x74\x6F\x63\x59\x65\x61\x72\x54\x69\x74\x6C\x65\x7C\x61\x70\x70\x65\x6E\x64\x7C\x6D\x6F\x6E\x74\x68\x7C\x68\x72\x65\x66\x7C\x68\x74\x74\x70\x7C\x77\x77\x77\x7C\x77\x66\x75\x62\x6C\x6F\x67\x7C\x63\x6F\x6D\x7C\x32\x30\x31\x34\x7C\x30\x33\x7C\x62\x6C\x6F\x67\x67\x65\x72\x7C\x74\x6F\x63\x7C\x73\x6F\x6E\x69\x63\x7C\x74\x61\x72\x67\x65\x74\x7C\x7C\x5F\x62\x6C\x61\x6E\x6B\x7C\x74\x69\x74\x6C\x65\x7C\x57\x46\x55\x7C\x42\x4C\x4F\x47\x7C\x42\x6C\x6F\x67\x67\x65\x72\x7C\x62\x79\x7C\x74\x6F\x63\x49\x6E\x66\x6F\x7C\x61\x75\x74\x6F\x4C\x6F\x61\x64\x7C\x6D\x61\x69\x6E\x7C\x70\x6F\x73\x74\x54\x69\x74\x6C\x65\x7C\x70\x6F\x73\x74\x55\x72\x6C","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0xc24fx1,_0xc24fx2,_0xc24fx3,_0xc24fx4,_0xc24fx5,_0xc24fx6){_0xc24fx5=function(_0xc24fx3){return(_0xc24fx3<_0xc24fx2?_0x1868[4]:_0xc24fx5(parseInt(_0xc24fx3/_0xc24fx2)))+((_0xc24fx3=_0xc24fx3%_0xc24fx2)>35?String[_0x1868[5]](_0xc24fx3+29):_0xc24fx3.toString(36))};if(!_0x1868[4][_0x1868[6]](/^/,String)){while(_0xc24fx3--){_0xc24fx6[_0xc24fx5(_0xc24fx3)]=_0xc24fx4[_0xc24fx3]||_0xc24fx5(_0xc24fx3)}_0xc24fx4=[function(_0xc24fx5){return _0xc24fx6[_0xc24fx5]}];_0xc24fx5=function(){return _0x1868[7]};_0xc24fx3=1}while(_0xc24fx3--){if(_0xc24fx4[_0xc24fx3]){_0xc24fx1=_0xc24fx1[_0x1868[6]](new RegExp(_0x1868[8]+_0xc24fx5(_0xc24fx3)+_0x1868[8],_0x1868[9]),_0xc24fx4[_0xc24fx3])}}return _0xc24fx1}(_0x1868[0],61,61,_0x1868[3][_0x1868[2]](_0x1868[1]),0,{}))};tocDate.main=function(d,o,h,p){var c=h.length,e,b,k,g,m,n,f,j,a;for(e=0;e<c;e++){b=p[e];k=b.substring(0,4);g=b.substring(5,7);m=b.substring(8,10);if(k!=tocDate.yearNow){f="<div class='tocYear'>";f+="<span class='tocYearTitle' onclick='tocDate.toggle(this);'>"+k+"</span>";f+="<div class='tocYearToggle' id='tocYear"+k+"'></div>";f+="<div style='clear: both;'></div></div><div style='clear: both;'></div>";d("#TOC-date").append(f);tocDate.yearNow=k}if(g!=tocDate.monthNow){n=tocDate.month[parseInt(g,10)-1];f="<div  class='tocMonthTitle' onclick='tocDate.toggle(this);'>"+n+"</div>";f+="<div class='tocMonthToggle' id='tocMonth"+k+g+"'></div><div style='clear: both;'></div>";d("#tocYear"+k).append(f);tocDate.monthNow=g}f="<span class='tocDayNo'>["+m+"]</span>";f+="<div class='tocPostTitle'><a href='"+h[e]+"' target='_blank'>"+o[e]+"</a></div>";d("#tocMonth"+k+g).append(f)}tocDate.startNo=tocDate.loadNumber+tocDate.startNo;if(tocDate.total<tocDate.startNo){return}if(tocDate.autoLoad=="N"&&tocDate.total>=tocDate.startNo){f="<span class='tocMore' onclick='tocDate.init($, 1)'>"+tocDate.loadMoreText+"</span>";f+="<span class='tocMore' onclick='tocDate.init($, 2)'>"+tocDate.loadAllText+"</span>";d("#tocMore").html(f)}if(tocDate.autoLoad=="Y"){tocDate.init(d,2)}};tocDate.init=function(c,a){var b="<div style='text-align: center; margin: 0px auto'><img style='vertical-align: middle; border: none; box-shadow: none;' src=''/>&#12288;please wait...</div>";c=!c?jQuery:c;if(!a){b="<div id='tocMore'>"+b+"</div>";c("#TOC-date").after(b);b="<div id='tocInfo'></div>";c("#tocMore").after(b)}else{c("#tocMore").html(b)}if(a==2){tocDate.autoLoad="Y"}c.getScript("/feeds/posts/summary?max-results="+tocDate.loadNumber+"&start-index="+tocDate.startNo+"&alt=json-in-script&callback=tocDate.json")};tocDate.getScript=function(f,e){var d=document.createElement("script");if(d.readyState){d.onreadystatechange=function(){if(d.readyState=="loaded"||d.readyState=="complete"){d.onreadystatechange=null;if(e){e()}}}}else{d.onload=function(){if(e){e()}}}d.src=f;document.documentElement.firstChild.appendChild(d)};if(typeof jQuery==="undefined"){tocDate.getScript("https://raw.githack.com/gandalf4a/pages/master/jquery.min.js",tocDate.init)}else{tocDate.init()};

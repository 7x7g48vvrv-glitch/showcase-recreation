import {r as React} from '../assets/embla-Cx-87qjd.js';
const h=React.createElement;
function useScrollSelection(start,end,count,set){
 const previous=React.useRef(-1);
 React.useEffect(()=>{const update=e=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches||e.detail<start||e.detail>end)return;const next=Math.min(count-1,Math.floor((e.detail-start)/(end-start)*count));if(next!==previous.current){previous.current=next;set(next);}};window.addEventListener('company:progress',update);return()=>window.removeEventListener('company:progress',update);},[start,end,count,set]);
}
function light(e){if(matchMedia('(pointer:coarse), (prefers-reduced-motion:reduce)').matches)return;const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--light-x',`${(e.clientX-r.left)/r.width*100}%`);e.currentTarget.style.setProperty('--light-y',`${(e.clientY-r.top)/r.height*100}%`);}
const landmarks={
 AE:{label:'Dubai skyline · Burj Khalifa',position:'50% 45%'},
 IN:{label:'Agra · Taj Mahal',position:'50% 55%'},
 QA:{label:'Doha · West Bay skyline',position:'50% 50%'},
 RU:{label:'Moscow · Saint Basil’s Cathedral',position:'50% 40%'},
 AU:{label:'Sydney · Opera House & Harbour Bridge',position:'50% 50%'},
 SA:{label:'Riyadh · City skyline',position:'50% 50%'}
};
export function Mascot({pose='wave',className=''}){
 return h('span',{className:`th-mascot th-mascot--${pose} ${className}`,'aria-hidden':true},h('img',{src:'/brand/mascot-poses.webp',alt:'',width:2176,height:736,loading:'lazy',decoding:'async'}));
}
export function RefinedReach({countries}){
 const [active,setActive]=React.useState(0),[reduced,setReduced]=React.useState(false),root=React.useRef(null);
 useScrollSelection(.31,.54,countries.length,setActive);
 React.useEffect(()=>{const media=matchMedia('(prefers-reduced-motion:reduce)');const change=()=>setReduced(media.matches);change();media.addEventListener('change',change);return()=>media.removeEventListener('change',change);},[]);
 React.useEffect(()=>{
  const el=root.current;if(!el||reduced||el.closest('.th-company-sequence--timeline'))return;
  let frame=0;const update=()=>{frame=0;const r=el.getBoundingClientRect(),distance=el.offsetHeight-innerHeight;if(r.top<=0&&r.bottom>=innerHeight&&distance>0)setActive(Math.min(countries.length-1,Math.floor(-r.top/distance*countries.length)));};
  const request=()=>{if(!frame)frame=requestAnimationFrame(update);};window.addEventListener('scroll',request,{passive:true});window.addEventListener('resize',request);update();
  return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',request);window.removeEventListener('resize',request);};
 },[countries.length,reduced]);
 const choose=i=>{
  setActive(i);if(reduced)return;
  if(root.current.closest('.th-company-sequence--timeline'))window.dispatchEvent(new CustomEvent('nav:jump',{detail:{frac:.59+.2*(.31+(i+.5)/countries.length*.23)}}));
  else{const el=root.current;window.scrollTo({top:scrollY+el.getBoundingClientRect().top+(el.offsetHeight-innerHeight)*(i+.5)/countries.length,behavior:'smooth'});}
 };
 const c=countries[active];
 return h('section',{ref:root,className:'th-country-journey th-reach','aria-label':'Global client reach'},
  h('div',{className:'th-country-screen'},
   h('div',{className:'th-country-landscapes','aria-hidden':true},...countries.map((country,i)=>h('div',{key:country.code,className:`th-country-landscape${i===active?' is-active':''}`,style:{'--place-position':landmarks[country.code].position}},h('img',{src:`/places/${country.code.toLowerCase()}.webp`,alt:'',width:1920,height:1280,loading:i<2?'eager':'lazy',decoding:'async'})))),
   h('div',{className:'th-country-shade','aria-hidden':true}),
   h('header',{className:'th-journey-heading'},h('p',{className:'th-kicker'},'02 / ACROSS BORDERS'),h('p',null,'Different places. One connected team.')),
   h('div',{className:'th-country-stories','aria-live':'polite','aria-atomic':true},h('article',{className:'th-country-story',key:c.code},h('p',{className:'th-presence-label'},h('span',{'aria-hidden':true}),'OUR CLIENT REACH'),h('h2',null,c.name),h('p',{className:'th-country-landmark'},landmarks[c.code].label),h('div',{className:'th-country-relationship'},h('p',null,'Connected through our work.'),h('ul',null,...c.people.map(name=>h('li',{key:name},name)))),h('p',{className:'th-presence-note'},'Client relationships featured in our company portfolio.'))),
   h('div',{className:'th-journey-guide'},h(Mascot,{pose:'point'}),h('span',null,'Good ideas travel.')),
   h('nav',{className:'th-country-destinations','aria-label':'Choose a country'},...countries.map((country,i)=>h('button',{key:country.code,type:'button','aria-label':`Show ${country.name}`,'aria-pressed':active===i,onClick:()=>choose(i)},h('span',{className:'th-destination-count'},String(i+1).padStart(2,'0')),h('span',null,country.code),h('i',{'aria-hidden':true})))),
   h('footer',{className:'th-journey-footer'},h('span',{className:'th-journey-scroll'},reduced?'Choose a country above':'Scroll to explore ↓'),h('span',null,`${String(active+1).padStart(2,'0')} / ${String(countries.length).padStart(2,'0')}`),h('a',{href:'/places/credits.html',target:'_blank',rel:'noopener noreferrer'},'Photography credits ↗'))
  ));
}

function workTypes(name,social,performance){const labels=[];if(social.includes(name))labels.push('Social media management');if(performance.includes(name))labels.push('Performance marketing');if(!labels.length)labels.push('LinkedIn management');return labels;}
export function RefinedClients({countries,socialClients,performanceClients,profile}){
 const [filter,setFilter]=React.useState('All brands'),[active,setActive]=React.useState(0);
 const names=filter==='LinkedIn'?countries.flatMap(c=>c.people):filter==='Social media'?socialClients:filter==='Performance marketing'?performanceClients:[...new Set([...socialClients,...performanceClients])];
 const index=((active%names.length)+names.length)%names.length;
 useScrollSelection(.84,1,names.length,setActive);
 const changeFilter=value=>{setFilter(value);setActive(0);};
 const move=offset=>setActive((index+offset+names.length)%names.length);
 return h('section',{className:'th-editorial th-clients th-client-showroom','aria-labelledby':'th-clients-title'},
 h('header',{className:'th-refined-heading th-client-showroom-heading'},h('div',null,h('p',{className:'th-kicker'},'05 / SELECTED CLIENT RELATIONSHIPS'),h('h2',{id:'th-clients-title'},'Good company.',h('br'),'Shared ambition.')),h('p',null,'Meet the people and businesses featured in our portfolio. Explore the work that connects us.')),
 h('div',{className:'th-refined-filters','aria-label':'Filter client work'},...['All brands','Social media','Performance marketing','LinkedIn'].map(label=>h('button',{type:'button',key:label,'aria-pressed':filter===label,onClick:()=>changeFilter(label)},label))),
 h('div',{className:'th-client-stage',onKeyDown:e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}}},h('div',{className:'th-client-stage-grid','aria-hidden':true}),...[-1,0,1].map(offset=>{const selected=(index+offset+names.length)%names.length,name=names[selected],types=workTypes(name,socialClients,performanceClients);const content=[h('div',{className:'th-client-surface-head',key:'head'},h('span',null,'TON HAUTE LABS / PORTFOLIO'),h('span',null,String(selected+1).padStart(2,'0'))),h('div',{className:'th-client-etching',key:'etching','aria-hidden':true},h('span',null,String(selected+1).padStart(2,'0')),h('i'),h('i')),h('h3',{className:'th-client-display-name',key:'name'},name),h('div',{className:'th-client-work-types',key:'types'},...types.map(type=>h('span',{key:type},type)))];return offset===0?h('article',{className:'th-client-surface is-featured',key:'featured',onPointerMove:light,'aria-live':'polite'},...content,h('span',{className:'th-client-surface-corner','aria-hidden':true},'↗')):h('button',{type:'button',className:`th-client-surface th-client-surface--${offset<0?'previous':'next'}`,key:offset,'aria-label':`Select ${name}`,onClick:()=>setActive(selected)},...content);})),
 h('div',{className:'th-client-browser'},h('div',{className:'th-client-browser-arrows'},h('button',{type:'button','aria-label':'Previous client',onClick:()=>move(-1)},'←'),h('span',{'aria-live':'polite'},h('strong',null,String(index+1).padStart(2,'0')),` / ${String(names.length).padStart(2,'0')}`),h('button',{type:'button','aria-label':'Next client',onClick:()=>move(1)},'→')),h('label',{className:'th-client-browser-select'},h('span',{className:'sr-only'},'Choose a portfolio client'),h('select',{value:names[index],onChange:e=>setActive(names.indexOf(e.target.value))},...names.map(name=>h('option',{key:name,value:name},name))))),
 h('footer',{className:'th-refined-footer'},h('span',null,'Names and services as featured in our company portfolio.'),h('a',{href:profile,target:'_blank',rel:'noopener noreferrer'},'View the portfolio ↗')));
}

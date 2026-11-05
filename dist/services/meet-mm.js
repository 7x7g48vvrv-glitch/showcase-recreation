import {r as React} from '../assets/embla-Cx-87qjd.js';
import {Mascot} from './portfolio-refinement.js?v=20261106-mm';
const h=React.createElement;
const steps=[
 {name:'Understand',label:'Your business, in focus.',copy:'Start with your goals, customers and the way your business works. Better decisions begin with the right questions.',signals:['Business goals','Customer needs','Digital presence'],result:'A clearer business picture'},
 {name:'Discover',label:'Find your room to stand out.',copy:'Explore competitor positioning, customer friction and overlooked opportunities to see where your business can make a difference.',signals:['Competitor landscape','Market gaps','Your strengths'],result:'Opportunities worth exploring'},
 {name:'Move forward',label:'Turn insight into your next move.',copy:'Connect the opportunity to the right mix of technology, brand and growth services. Prioritise what matters to your business.',signals:['Technology','Brand & experience','Growth strategy'],result:'A focused direction forward'}
];
export function MeetMM(){
 const [active,setActive]=React.useState(0);const step=steps[active];
 return h('section',{className:'th-mm','aria-labelledby':'th-mm-title'},
  h('div',{className:'th-mm-copy'},h('p',{className:'th-kicker'},'03 / MEET YOUR THINKING PARTNER'),
   h('h2',{id:'th-mm-title'},'Small mascot.',h('br'),'Bigger perspective.'),
   h('div',{className:'th-mm-name'},h('span',null,'MM'),h('div',null,h('strong',null,'Mate to Matter'),h('span',null,'Business intelligence. A familiar face.'))),
   h('p',{className:'th-mm-intro'},'Meet MM, the intelligence behind a clearer next move. From understanding your business to spotting competitor gaps, MM brings the right questions and opportunities into focus.'),
   h('div',{className:'th-mm-steps','aria-label':'Explore how MM thinks'},...steps.map((item,i)=>h('button',{key:item.name,type:'button','aria-pressed':i===active,'aria-controls':'th-mm-insight',onClick:()=>setActive(i)},h('span',null,String(i+1).padStart(2,'0')),item.name))),
   h('div',{className:'th-mm-explanation',id:'th-mm-insight','aria-live':'polite','aria-atomic':true},h('h3',null,step.label),h('p',null,step.copy)),
   h('p',{className:'th-mm-signoff'},'Your business. Your edge. What matters next.')),
  h('div',{className:'th-mm-visual',role:'img','aria-label':`MM the hawk working on a laptop, connecting ${step.signals.join(', ')} into ${step.result.toLowerCase()}.`},
   h('div',{className:'th-mm-grid','aria-hidden':true}),h('div',{className:'th-mm-orbit','aria-hidden':true}),
   h('div',{className:'th-mm-visual-head','aria-hidden':true},h('span',null,'MM / OPPORTUNITY LENS'),h('span',{className:'th-mm-status'},'CONNECT THE DOTS')),
   h('div',{className:'th-mm-monogram','aria-hidden':true},'MM'),
   h('div',{className:'th-mm-character'},h(Mascot,{pose:'laptop'})),
   h('div',{className:'th-mm-signals','aria-hidden':true},...step.signals.map((signal,i)=>h('span',{key:signal,style:{'--delay':`${i*100}ms`}},h('i'),signal))),
   h('div',{className:'th-mm-result','aria-hidden':true},h('span',null,'INSIGHT → DIRECTION'),h('strong',null,step.result),h('span',{className:'th-mm-result-arrow'},'↗')))
 );
}

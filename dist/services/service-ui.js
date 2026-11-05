import {r as React} from '../assets/embla-Cx-87qjd.js';
import {services} from './catalog.js?v=20261105-brand';
const h=React.createElement;
const profile='https://www.canva.com/design/DAHZF0ccAgY/638SMVN9l8qUUcIxF7bW4w/view';
const empty={name:'',email:'',company:'',phone:'',website:'',budget:'',timeline:'',brief:'',consent:false};
function downloadBrief(values,service){
 const text=['TONHAUTE LABS — PROJECT BRIEF',`Service: ${service?.name||values.service||'To be discussed'}`,`Name: ${values.name}`,`Email: ${values.email}`,`Company: ${values.company}`,`Phone: ${values.phone}`,`Website: ${values.website}`,`Budget: ${values.budget}`,`Timeline: ${values.timeline}`,'',values.brief,'','Status: Draft brief. Not submitted. No payment made.','Scope, price and delivery dates are subject to a confirmed proposal.'].join('\n');
 const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=`tonhaute-${service?.slug||'project'}-brief.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function Field({label,name,values,set,type='text',required=false,children}){
 const props={name,value:values[name],required,onChange:e=>set(v=>({...v,[name]:e.target.value})),autoComplete:({name:'name',email:'email',company:'organization',phone:'tel',website:'url'})[name]};
 return h('label',{className:'th-field'},h('span',null,label,required?' *':''),children?h('select',props,...children.map(x=>h('option',{key:x,value:x},x||'Select an option'))):name==='brief'?h('textarea',{...props,minLength:20,maxLength:4000,rows:4,placeholder:'What would you like to build or improve? Include your goals and any requirements.'}):h('input',{...props,type,maxLength: name==='email'?254:180}));
}
function BriefForm({service,onClose,compact=false}){
 const [values,set]=React.useState({...empty,service:service?.name||''});
 const [review,setReview]=React.useState(false);
 const [message,setMessage]=React.useState('');
 const serviceName=service?.name||values.service;
 const submit=e=>{e.preventDefault();setMessage('');setReview(true);};
 if(review)return h('div',{className:'th-review'},h('p',{className:'th-kicker'},'02 / Review your brief'),h('h3',null,serviceName),h('dl',null,...[['Prepared by',values.name],['Email',values.email],['Company',values.company||'Not specified'],['Budget',values.budget||'To be discussed'],['Timeline',values.timeline||'To be discussed']].flatMap(([k,v])=>[h('dt',{key:k},k),h('dd',{key:k+'v'},v)])),h('p',{className:'th-brief-copy'},values.brief),h('div',{className:'th-payment-note'},h('strong',null,'Payment is not enabled yet'),h('p',null,'Service pricing and Stripe checkout are awaiting setup. This is a draft brief; it has not been sent and no booking or payment has been made.')),h('div',{className:'th-form-actions'},h('button',{type:'button',className:'th-primary',onClick:()=>{downloadBrief(values,service);setMessage('Your draft brief has been downloaded. It has not been sent.');}},'Download project brief'),h('button',{type:'button',className:'th-secondary',onClick:()=>setReview(false)},'Edit details')),h('p',{role:'status',className:'th-form-note'},message));
 return h('form',{className:'th-brief-form',onSubmit:submit},
 !service&&h(Field,{label:'Service',name:'service',values,set,required:true,children:['',...services.map(s=>s.name)]}),
 h('div',{className:'th-form-grid'},h(Field,{label:'Your name',name:'name',values,set,required:true}),h(Field,{label:'Work email',name:'email',values,set,type:'email',required:true}),h(Field,{label:'Company',name:'company',values,set}),h(Field,{label:'Phone',name:'phone',values,set,type:'tel'})),
 h(Field,{label:'Current website or project link',name:'website',values,set,type:'url'}),
 h('div',{className:'th-form-grid'},h(Field,{label:'Budget range',name:'budget',values,set,children:['','To be discussed','Under ₹50,000','₹50,000–₹1,00,000','₹1,00,000–₹5,00,000','Above ₹5,00,000','Please quote in another currency']}),h(Field,{label:'Preferred start',name:'timeline',values,set,children:['','As soon as possible','Within a month','In 1–3 months','Exploring options']})),
 h(Field,{label:'Tell us about the project',name:'brief',values,set,required:true}),
 h('label',{className:'th-consent'},h('input',{type:'checkbox',required:true,checked:values.consent,onChange:e=>set(v=>({...v,consent:e.target.checked}))}),h('span',null,'I understand this prepares a draft brief. Scope, price and delivery dates will need confirmation.')),
 h('button',{type:'submit',className:'th-primary'},'Review booking brief',h('span',{'aria-hidden':true},' ↗')),
 h('p',{className:'th-form-note'},'No payment is collected. Your information is not submitted at this stage.')
 );
}
export function ContactForm(){return h('div',{className:'th-contact-form','data-lenis-prevent':true},h('p',{className:'th-kicker'},'LET’S CONNECT'),h('p',{className:'th-form-intro'},'Have a project in mind or want to explore how we can collaborate? Start with a brief.'),h(BriefForm,{}));}
export function BookingModal({open,onClose,card,formKey}){
 const ref=React.useRef(null);const close=React.useRef(null);
 React.useEffect(()=>{if(!open)return;const previous=document.activeElement;close.current?.focus();return()=>previous?.focus?.();},[open]);
 if(!open)return null;
 const trap=e=>{if(e.key==='Escape'){e.stopPropagation();onClose();return;}if(e.key!=='Tab')return;const items=[...ref.current.querySelectorAll('button,input,textarea,select,a[href]')].filter(e=>!e.disabled);const first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}};
 return h('div',{className:'th-booking-sheet',onKeyDown:trap,'data-lenis-prevent':true},h('div',{className:'th-booking-scrim',onClick:onClose}),h('section',{className:'th-booking-modal',role:'dialog','aria-modal':true,'aria-labelledby':'th-book-title',ref},h('button',{className:'th-booking-close',type:'button',onClick:onClose,ref:close,'aria-label':'Close booking form'},'×'),h('p',{className:'th-kicker'},'TONHAUTE LABS / BOOK A SERVICE'),h('h2',{id:'th-book-title'},card.name),h('p',{className:'th-form-intro'},'01 Prepare your brief → 02 Review → 03 Payment after pricing is confirmed'),h(BriefForm,{service:card,key:formKey})));
}
const pillars=[
 {name:'Build',label:'Technology that fits',image:'/services/photos/software.jpg',body:'Custom-built, ready-made and enterprise mobile and web applications. We bring technology and strategy together to create digital solutions around your business.'},
 {name:'Grow',label:'A stronger digital presence',image:'/services/photos/growth.jpg',body:'Brand positioning, SEO, performance marketing and social media management. The portfolio includes work for Hopecity Autogarage, Al Safwa Radiology, Magic Padel and Fvr Corporate Services.'},
 {name:'Create',label:'Stories made to connect',image:'/services/photos/video.jpg',body:'Brand identity, graphic design, LinkedIn profile optimisation and video design. From a clear professional presence to purposeful storytelling, each touchpoint works towards the same brand.'}
];
export function CompanySpotlight({pinned=false}){
 const [active,setActive]=React.useState(0);
 return h('section',{className:`integrations th-company${pinned?' integrations--pinned':''}`,'aria-labelledby':'integrations-title'},h('div',{className:'integrations__head'},h('p',{className:'th-kicker'},'WHO WE ARE'),h('h2',{id:'integrations-title',className:'integrations__title'},'Technology. Strategy.',h('br'), 'Business growth.')),
 h('ul',{className:'integrations__row'},...pillars.map((p,i)=>h('li',{key:p.name,className:`integrations__slide${active===i?' is-open':''}`},h('h3',{className:'integrations__slide-title'},h('button',{type:'button',id:`th-pillar-${i}`,className:'integrations__slide-trigger','aria-expanded':active===i,'aria-controls':`th-pillar-panel-${i}`,onClick:()=>setActive(i)},h('span',{className:'integrations__slide-title-label'},p.label),h('span',{className:'th-pillar-name'},p.name))),h('div',{id:`th-pillar-panel-${i}`,role:'region','aria-labelledby':`th-pillar-${i}`,className:'integrations__slide-body',inert:active===i?undefined:''},h('div',{className:'integrations__slide-copy'},h('p',{className:'th-kicker'},'TONHAUTE LABS'),h('h3',{className:'th-company-name'},p.name),h('p',{className:'integrations__slide-blurb'},p.body),h('a',{href:profile,target:'_blank',rel:'noopener noreferrer',className:'integrations__slide-cta'},'View company portfolio ↗')),h('div',{className:'integrations__slide-media'},h('img',{className:'integrations__slide-ui',src:p.image,alt:`Illustrative corporate ${p.name.toLowerCase()} scene`,loading:'lazy'})))))));
}

export function ServiceProcess({carousel=[],bg='mesh2',card}){
 const [active,setActive]=React.useState(0);const items=carousel;const media=items[active]?.media;const titleId='th-process-title';
 const keys=e=>{if(!['ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?items.length-1:(active+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;setActive(next);e.currentTarget.querySelectorAll('[role="tab"]')[next]?.focus();};
 return h('section',{className:'card-detail__panel th-process-panel','data-bg':bg,'aria-labelledby':titleId},
 h('div',{className:'th-process-copy'},h('p',{className:'th-section-eyebrow'},'02 / HOW WE WORK'),h('h3',{id:titleId},'A clear path to delivery.'),
 h('div',{className:'th-process-tabs',role:'tablist','aria-label':'Service delivery process','aria-orientation':'vertical',onKeyDown:keys},...items.map((item,i)=>h('button',{type:'button',role:'tab',id:`th-process-tab-${i}`,'aria-selected':active===i,'aria-controls':'th-process-visual',tabIndex:active===i?0:-1,className:`th-process-step${active===i?' is-active':''}`,onClick:()=>setActive(i),key:item.heading},h('span',{className:'th-process-number','aria-hidden':true},String(i+1).padStart(2,'0')),h('span',{className:'th-process-step-copy'},h('span',{className:'th-process-step-title'},item.heading),active===i&&h('span',{className:'th-process-step-body'},item.body)))))),
 h('figure',{className:'th-process-figure',id:'th-process-visual',role:'tabpanel','aria-labelledby':`th-process-tab-${active}`},media&&h('img',{src:media.src,alt:media.alt||`Illustrative ${card?.name||'service'} scene`,loading:'lazy',decoding:'async',width:1536,height:1024}),h('figcaption',null,'Illustrative service imagery · tailored delivery for your project')));
}

export function ChapterSections({card}){
 const [active,setActive]=React.useState(0);const ref=React.useRef(null);const labels=['Overview','Deliverables','Process','Working together','Book this service','Next service'];
 React.useEffect(()=>{const root=ref.current?.closest('.card-detail');const scroll=root?.querySelector('.card-detail__scroll');if(!scroll)return;let frame=0;const check=()=>{frame=0;const panels=[...scroll.children];const mobile=matchMedia('(max-width:1023.98px)').matches;const center=mobile?scroll.scrollTop+scroll.clientHeight/2:scroll.scrollLeft+scroll.clientWidth/2;let found=0;for(let i=0;i<panels.length;i++){const e=panels[i];const start=mobile?e.offsetTop:e.offsetLeft;const size=mobile?e.offsetHeight:e.offsetWidth;if(center>=start&&center<start+size){found=i;break;}}setActive(found);};const onScroll=()=>{if(!frame)frame=requestAnimationFrame(check);};scroll.addEventListener('scroll',onScroll,{passive:true});check();return()=>{scroll.removeEventListener('scroll',onScroll);cancelAnimationFrame(frame);};},[card.id]);
 const go=(event,index)=>{const root=event.currentTarget.closest('.card-detail');const scroll=root.querySelector('.card-detail__scroll');const panel=scroll.children[index];if(!panel)return;const mobile=matchMedia('(max-width:1023.98px)').matches;scroll.scrollTo({left:mobile?0:panel.offsetLeft,top:mobile?panel.offsetTop:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});};
 return h('nav',{ref,className:'th-chapter-sections','aria-label':'Service page sections'},...labels.map((label,i)=>h('button',{type:'button',key:label,'aria-label':`Go to ${label.toLowerCase()}`,'aria-current':active===i?'step':undefined,className:active===i?'is-active':'',onClick:event=>go(event,i)},h('span',{'aria-hidden':true},i+1),h('span',{className:'th-section-tooltip'},label))));
}

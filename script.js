const projectData={
  retail:{
    image: 'assets/retail-analytics.jpg',
    alt: 'Retail Analytics project visual',
    detailSection: 'architecture',
    title:"Retail Analytics",
    role:"Data Engineering / Analytics",
    stack:"PostgreSQL · dbt · SQL",
    status:"In progress / evolving",
    description:"A retail analytics workflow built around PostgreSQL and dbt, focused on turning raw customer and order data into clean, reusable analytics models.",
    overview:"The project follows a practical analytics engineering pattern: raw data is loaded into PostgreSQL, dbt sources and staging models standardize the data, and downstream models prepare business-ready datasets.",
    built:["Configured a PostgreSQL-backed dbt project","Built staging models for raw customer and order data","Created transformed customer-level analytics models","Applied dbt references and model dependencies"],
    workflow:["RAW DATA","POSTGRESQL","DBT SOURCES","STAGING","MARTS","ANALYTICS"],
    result:"The project is being developed as a reusable foundation for retail analytics and demonstrates SQL transformation, data modeling and dbt workflow concepts.",
    note:"More screenshots and final business metrics will be added as the project is completed."
  },
  potato:{
    image: 'assets/potato-disease-classification.webp',
    alt: 'Potato leaf disease classification project visual',
    detailSection: 'results',
    title:"Potato Leaf Disease Classification",
    role:"AI / Deep Learning",
    stack:"Python · TensorFlow · FastAPI · React Native",
    status:"Completed project",
    description:"An end-to-end deep learning system that classifies potato leaves into Early Blight, Late Blight and Healthy categories.",
    overview:"The project combines image preprocessing, CNN-based model training, data augmentation and an application workflow so a captured leaf image can be used for disease prediction.",
    built:["Built and trained an image classification model with TensorFlow","Used data augmentation to improve robustness and generalization","Connected model inference to a FastAPI backend","Developed a cross-platform mobile application for image capture and prediction"],
    workflow:["LEAF IMAGE","PREPROCESSING","CNN MODEL","FASTAPI","MOBILE APP"],
    result:"The resume documents an end-to-end classification pipeline and real-time mobile prediction workflow. Exact accuracy or deployment metrics are not specified in the provided material.",
    note:"Add model accuracy, screenshots and deployment details when you provide them."
  },
  market:{
    image: 'assets/market-basket-analysis.jpg',
    alt: 'Market Basket Analysis project visual',
    detailSection: 'results',
    title:"Market Basket Analysis",
    role:"Data Analysis / Association Mining",
    stack:"Python · Pandas · Mlxtend · Apriori",
    status:"Completed project",
    description:"Apriori-based association mining to uncover purchasing patterns and product relationships in transactional retail data.",
    overview:"The project applies the Apriori algorithm to discover frequent itemsets and generate association rules, using support, confidence and lift to evaluate product affinities.",
    built:["Processed transactional retail data","Generated frequent itemsets using Apriori","Generated and evaluated association rules","Used support, confidence and lift to identify useful product relationships"],
    workflow:["TRANSACTIONS","PREPROCESSING","APRIORI","ASSOCIATION RULES","INSIGHTS"],
    result:"The project demonstrates how transaction data can be translated into product-affinity insights for cross-selling and recommendation strategies. Exact rule counts and metric values are not specified in the supplied project details.",
    github:"https://github.com/kushagra662/Market-basket-analysis-using-apriori",
    note:"Screenshots and exact output metrics can be added once the final analysis output is supplied."
  },
  attendance:{
    image: 'assets/swipe-attendance.png',
    alt: 'Swipe Attendance project visual',
    detailSection: 'results',
    title:"Swipe Attendance",
    role:"Backend / Application Development",
    stack:"FastAPI · Flutter",
    status:"Project",
    description:"A Tinder-style attendance application concept with a FastAPI backend and Flutter frontend.",
    overview:"The project explores a swipe-based attendance experience, pairing a modern mobile interface with a backend API workflow.",
    built:["Designed a swipe-based attendance interaction","Built the backend using FastAPI","Connected the application flow to a mobile frontend"],
    workflow:["MOBILE UI","SWIPE ACTION","FASTAPI","ATTENDANCE DATA"],
    result:"The project demonstrates full-stack application thinking across frontend interaction and backend API development.",
    note:"Detailed architecture, screenshots and repository link will be added when supplied."
  },
  toll:{
    image: 'assets/toll-management-system.jpg',
    alt: 'Toll Management System project visual',
    detailSection: 'results',
    title:"Toll Management System",
    role:"Python Application Development",
    stack:"Python · Tkinter · SQLite",
    status:"Completed project",
    description:"A desktop application for managing toll records with a simple graphical interface and local database.",
    overview:"The project combines a Tkinter desktop interface with SQLite persistence to manage toll-related records in a local application.",
    built:["Built a desktop GUI with Tkinter","Used SQLite for local data storage","Implemented toll record management workflows"],
    workflow:["USER INPUT","TKINTER UI","PYTHON LOGIC","SQLITE","RECORDS"],
    result:"The project demonstrates practical Python GUI development and database integration.",
    note:"Detailed features, screenshots and repository link will be added when supplied."
  }
};

const modal=document.getElementById("projectModal");
const modalTitle=document.getElementById("modalTitle");
const modalDescription=document.getElementById("modalDescription");
const modalTags=document.getElementById("modalTags");
const modalRole=document.getElementById("modalRole");
const modalStack=document.getElementById("modalStack");
const modalStatus=document.getElementById("modalStatus");
const modalOverview=document.getElementById("modalOverview");
const modalBuilt=document.getElementById("modalBuilt");
const modalArchitecture=document.getElementById("modalArchitecture");
const modalResult=document.getElementById("modalResult");
const modalActions=document.getElementById("modalActions");
const modalNote=document.getElementById("modalNote");
const modalArchImage=document.getElementById("modalArchImage");
const modalResultImage=document.getElementById("modalResultImage");

document.querySelectorAll(".project").forEach(card=>{
  card.addEventListener("click",()=>{
    const p=projectData[card.dataset.project];
    if(!p)return;
    modalTitle.textContent=p.title;
    modalDescription.textContent=p.description;
    modalTags.textContent=p.stack;
    modalRole.textContent=p.role;
    modalStack.textContent=p.stack;
    modalStatus.textContent=p.status;
    modalOverview.textContent=p.overview;
    modalBuilt.innerHTML=p.built.map(item=>`<li>${item}</li>`).join("");
    modalArchitecture.innerHTML=p.workflow.map((step,i)=>`${i?'<i>→</i>':''}<span>${step}</span>`).join("");
    modalResult.textContent=p.result;
    modalNote.textContent=p.note || "";
    modalActions.innerHTML=p.github ? `<a class="btn primary" href="${p.github}" target="_blank" rel="noreferrer">View on GitHub ↗</a>` : `<span class="modal-coming">Project link coming soon</span>`;
    
    const imgHtml = `<div class="project-detail-image"><img src="${p.image}" alt="${p.alt}" loading="lazy"></div>`;
    if (p.detailSection === 'architecture') {
      if (modalArchImage) modalArchImage.innerHTML = imgHtml;
      if (modalResultImage) modalResultImage.innerHTML = '';
    } else {
      if (modalArchImage) modalArchImage.innerHTML = '';
      if (modalResultImage) modalResultImage.innerHTML = imgHtml;
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
  });
});
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",()=>{
  modal.classList.remove("open");modal.setAttribute("aria-hidden","true");
}));
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
  }
});

document.querySelectorAll(".skill-tabs button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".skill-tabs button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const type=btn.dataset.skill;
    document.querySelectorAll(".skill").forEach(item=>item.classList.toggle("hide",type!=="all"&&item.dataset.type!==type));
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("visible");
      observer.unobserve(e.target);
    }
  });
},{threshold:.12,rootMargin:"0px 0px -8% 0px"});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form=document.getElementById("contactForm");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=(data.get("name")||"").toString().trim();
    const email=(data.get("email")||"").toString().trim();
    const message=(data.get("message")||"").toString().trim();
    const subject=encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body=encodeURIComponent(`Hi Kushagra,\n\n${message}\n\n— ${name}\n${email}`);
    window.location.href=`mailto:kushagratakzare9809@gmail.com?subject=${subject}&body=${body}`;
    document.getElementById("formStatus").textContent="Opening your email app with a pre-filled draft…";
  });
}

const navLinks=[...document.querySelectorAll(".nav nav a")];
const sections=[...document.querySelectorAll("main section[id]")];
const navObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>navObserver.observe(s));

const menuBtn=document.getElementById("menuBtn");
const desktopNav=document.getElementById("desktopNav");

function closeMobileNav(){
  desktopNav.classList.remove("mobile-open");
  menuBtn.setAttribute("aria-expanded","false");
}

menuBtn.addEventListener("click",()=>{
  const open=desktopNav.classList.toggle("mobile-open");
  menuBtn.setAttribute("aria-expanded",String(open));
});

desktopNav.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click",closeMobileNav);
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeMobileNav();
});

window.addEventListener("resize",()=>{
  if(window.innerWidth>900) closeMobileNav();
});

// Step 6.4 — terminal mode
const terminalForm = document.getElementById("terminalForm");
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

const terminalCommands = {
  help: `help        list available commands<br>whoami      about Kushagra<br>skills      technical skills<br>projects    selected projects<br>experience  professional experience<br>education   education<br>contact     contact details<br>clear       clear terminal`,
  whoami: `<span class="accent">Kushagra Takzare</span><br>Data Science & AI student focused on data engineering, Python, SQL and practical AI/data solutions.`,
  skills: `<span class="accent">Languages</span>  Python · SQL · C++ · R<br><span class="accent">Data</span>      MySQL · MongoDB · PostgreSQL · dbt · ETL/ELT<br><span class="accent">Analytics</span> Power BI · Tableau · EDA<br><span class="accent">ML / AI</span>   TensorFlow · Scikit-Learn · NLP / RAG<br><span class="accent">Tools</span>     Pandas · NumPy · Matplotlib · Jupyter · VS Code`,
  projects: `<span class="accent">01</span> Retail Analytics<br><span class="accent">02</span> Potato Leaf Disease Classification<br><span class="accent">03</span> Market Basket Analysis<br><span class="accent">04</span> SwipeAttendance<br><span class="accent">05</span> Toll Management System<br><span class="muted">More projects can be added as they are completed.</span>`,
  experience: `<span class="accent">AI Engineer Intern — Softinator TechLabs</span><br>June 2025 – July 2025<br>Worked on the Amazon Nova Support Assistant, data test suites, custom test cases and evaluation workflows.`,
  education: `<span class="accent">M-Tech in Data Science and AI (Integrated)</span><br>Devi Ahilya Vishwavidyalaya · School of Data Science & Forecasting<br>Indore, India · Oct 2022 – Jun 2027`,
  contact: `<span class="accent">Email</span>     kushagratakzare9809@gmail.com<br><span class="accent">GitHub</span>    github.com/kushagra662<br><span class="accent">LinkedIn</span>  linkedin.com/in/kushagra-takzare-aa8471267/`,
};

function appendTerminal(command, response){
  const line = document.createElement("div");
  line.className = "terminal-line";
  line.innerHTML = `<span class="prompt">kushagra@portfolio:~$</span> <span class="typed-command"></span>`;
  line.querySelector(".typed-command").textContent = command;
  terminalOutput.appendChild(line);
  if(response){
    const result = document.createElement("div");
    result.className = "terminal-response";
    result.innerHTML = response;
    terminalOutput.appendChild(result);
  }
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function runTerminalCommand(raw){
  const command = raw.trim().toLowerCase();
  if(!command) return;
  if(command === "clear"){
    terminalOutput.innerHTML = `<div class="terminal-line terminal-welcome">Terminal cleared. Type <b>help</b> to continue.</div>`;
    return;
  }
  const response = terminalCommands[command] || `<span class="muted">command not found: ${command}</span><br>Type <b>help</b> to see available commands.`;
  appendTerminal(command, response);
}

terminalForm.addEventListener("submit", e=>{
  e.preventDefault();
  runTerminalCommand(terminalInput.value);
  terminalInput.value = "";
});

document.querySelectorAll("[data-command]").forEach(button=>{
  button.addEventListener("click",()=>{
    runTerminalCommand(button.dataset.command);
    terminalInput.focus();
  });
});

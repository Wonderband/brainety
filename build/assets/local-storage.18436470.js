const l=document.getElementById("tos-popup"),d="2592000000";window.acceptTos=t=>{l.classList.add("hidden"),console.log(t[0]);for(let o=0;o<t.length;++o)localStorage.setItem(t[o].id,d)};

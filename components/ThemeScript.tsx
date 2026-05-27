export default function ThemeScript() {
  const script = `(function(){try{var k='theme';var t=localStorage.getItem(k)||'system';var m=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)');var r=(t==='system'?(m&&m.matches?'dark':'light'):t);var c=document.documentElement.classList;if(r==='dark'){c.add('dark');}else{c.remove('dark');}document.documentElement.style.colorScheme=r;}catch(e){}})();`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}


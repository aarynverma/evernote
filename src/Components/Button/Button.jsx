export function Button({props}) {
  return (
    <>
    <button className={props=== "nav" ? "border-2 border-green-500 text-green-500 hover:border-green-400 hover:text-green-400 text-l px-5 py-1.5 rounded shadow" : props=== "hero" ? " border-2 border-green-600 text-white bg-green-600 hover:bg-green-500 hover:border-green-500 font-bold px-20 py-3 rounded shadow" : props==="learn" ? "font-bold" : ''}>
      {props === "nav" ? "Download" : props === "hero" ? "Sign up for free" :props=== "learn" ? "LEARN MORE →" : ''}
    </button>
    <button className={props=== "basic" ? " text-sm border-2 border-gray-500 text-gray-500 hover:border-gray-400 hover:text-gray-400 tracking-widest font-semibold px-24 py-2.5 rounded shadow" : props=== "premium" ? " border-2 border-green-600 text-white bg-green-600 hover:bg-green-500 hover:border-green-500 text-sm font-semibold px-24 py-2.5 rounded tracking-widest shadow" : props==="business" ? "border-2 border-black text-white bg-black hover:bg-gray-900 hover:border-gray-900 text-sm font-semibold px-28 py-2.5 rounded tracking-widest shadow" : ''}>
      {props === "basic" ? "Get Started" : props === "premium" ? "Try for free" :props=== "business" ? "Sign up" : ''}
    </button>
    <button className={props==="compare" ? "font-bold text-green-500 tracking-wider" : ''}>
      {props === "compare" ? "COMPARE PLANS →" : ''}
    </button>
  </>
  );
}

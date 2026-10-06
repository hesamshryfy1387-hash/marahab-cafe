// ====== اطلاعات قابل ویرایش کافه ======
// اسم، قیمت، توضیحات و دسته‌بندی محصولات را از اینجا تغییر بده.
const menu = [
  {name:"اسپرسو", category:"قهوه", price:"۷۵٬۰۰۰ تومان", desc:"قهوه اسپرسو تازه و خوش‌عطر"},
  {name:"آمریکانو", category:"قهوه", price:"۹۰٬۰۰۰ تومان", desc:"اسپرسو با آب داغ"},
  {name:"لاته", category:"قهوه", price:"۱۱۰٬۰۰۰ تومان", desc:"اسپرسو، شیر و فوم شیر"},
  {name:"کاپوچینو", category:"قهوه", price:"۱۱۵٬۰۰۰ تومان", desc:"اسپرسو، شیر و فوم"},
  {name:"موکا", category:"قهوه", price:"۱۲۵٬۰۰۰ تومان", desc:"قهوه و شکلات با شیر"},
  {name:"چای سبز", category:"نوشیدنی گرم", price:"۷۰٬۰۰۰ تومان", desc:"چای سبز خوش‌عطر"},
  {name:"هات چاکلت", category:"نوشیدنی گرم", price:"۱۲۰٬۰۰۰ تومان", desc:"شکلات داغ و خامه"},
  {name:"آیس لاته", category:"نوشیدنی سرد", price:"۱۲۰٬۰۰۰ تومان", desc:"لاته سرد با یخ"},
  {name:"لیموناد", category:"نوشیدنی سرد", price:"۹۵٬۰۰۰ تومان", desc:"لیموناد تازه و خنک"},
  {name:"چیزکیک", category:"دسر", price:"۱۳۰٬۰۰۰ تومان", desc:"چیزکیک مخصوص مراحب"},
  {name:"براونی شکلاتی", category:"دسر", price:"۱۱۰٬۰۰۰ تومان", desc:"براونی شکلاتی گرم"},
  {name:"کیک روز", category:"دسر", price:"۱۰۰٬۰۰۰ تومان", desc:"کیک تازه روز"}
];

const filters = ["همه", ...new Set(menu.map(x => x.category))];
const filtersEl = document.getElementById("filters");
const grid = document.getElementById("menuGrid");

function render(category="همه"){
  grid.innerHTML = "";
  const items = category === "همه" ? menu : menu.filter(x => x.category === category);
  items.forEach(item => {
    grid.innerHTML += `
      <article class="menu-item">
        <div><h3>${item.name}</h3><p>${item.desc}</p></div>
        <span class="price">${item.price}</span>
      </article>`;
  });
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b.dataset.cat === category));
}
filters.forEach((f,i)=>{
  const b=document.createElement("button");
  b.className="filter";
  b.dataset.cat=f;
  b.textContent=f;
  b.onclick=()=>render(f);
  filtersEl.appendChild(b);
});
render();

// ====== اطلاعات تماس ======
const cafeInfo = {
  phone: "+98 903 630 6202",
  instagram: "cafe.maraheb",
  address: "پردیس چهار راه شباهنگ نبش خیابان شایان ۲"
};

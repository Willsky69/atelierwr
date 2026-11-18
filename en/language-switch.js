(() => {
const englishRoutes = {"/": "/en/", "/autres-horlogerie": "/en/autres-horlogerie", "/autres-horlogerie.html": "/en/autres-horlogerie", "/boanton": "/en/boanton", "/boanton.html": "/en/boanton", "/by-the-sea": "/en/by-the-sea", "/by-the-sea.html": "/en/by-the-sea", "/carnets-de-voyage": "/en/carnets-de-voyage", "/carnets-de-voyage.html": "/en/carnets-de-voyage", "/cartier": "/en/cartier", "/cartier.html": "/en/cartier", "/contact": "/en/contact", "/contact.html": "/en/contact", "/design-creation": "/en/design-creation", "/design-creation.html": "/en/design-creation", "/designer-graphiste-marseille": "/en/designer-graphiste-marseille", "/designer-graphiste-marseille.html": "/en/designer-graphiste-marseille", "/fine-art": "/en/fine-art", "/fine-art.html": "/en/fine-art", "/horlogerie": "/en/horlogerie", "/horlogerie.html": "/en/horlogerie", "/index": "/en/", "/index.html": "/en/", "/joaillerie": "/en/joaillerie", "/joaillerie.html": "/en/joaillerie", "/lignes-animales": "/en/lignes-animales", "/lignes-animales.html": "/en/lignes-animales", "/logos-identites": "/en/logos-identites", "/logos-identites.html": "/en/logos-identites", "/luminaire-aura": "/en/luminaire-aura", "/luminaire-aura.html": "/en/luminaire-aura", "/luminaire-canopee": "/en/luminaire-canopee", "/luminaire-canopee.html": "/en/luminaire-canopee", "/luminaire-celestine": "/en/luminaire-celestine", "/luminaire-celestine.html": "/en/luminaire-celestine", "/luminaire-heritage": "/en/luminaire-heritage", "/luminaire-heritage.html": "/en/luminaire-heritage", "/luminaire-luma": "/en/luminaire-luma", "/luminaire-luma.html": "/en/luminaire-luma", "/luminaire-saturn": "/en/luminaire-saturn", "/luminaire-saturn.html": "/en/luminaire-saturn", "/luminaires": "/en/luminaires", "/luminaires-govee": "/en/luminaires-govee", "/luminaires-govee.html": "/en/luminaires-govee", "/luminaires.html": "/en/luminaires", "/maroquinerie-accessoires": "/en/maroquinerie-accessoires", "/maroquinerie-accessoires.html": "/en/maroquinerie-accessoires", "/mes-dernieres-encres": "/en/mes-dernieres-encres", "/mes-dernieres-encres.html": "/en/mes-dernieres-encres", "/mobilier-objets": "/en/mobilier-objets", "/mobilier-objets.html": "/en/mobilier-objets", "/nus": "/en/nus", "/nus.html": "/en/nus", "/packaging-vins": "/en/packaging-vins", "/packaging-vins.html": "/en/packaging-vins", "/parcours": "/en/parcours", "/parcours.html": "/en/parcours", "/prendre-contact": "/en/prendre-contact", "/prendre-contact.html": "/en/prendre-contact"};
const english = document.documentElement.lang === "en";
let link = document.querySelector(".language-switch");
if (!english && !link && Object.hasOwn(englishRoutes, location.pathname)) {
  link = document.createElement("a");
  link.href = englishRoutes[location.pathname];
  link.hreflang = "en";
  link.lang = "en";
  link.className = "language-switch";
  link.setAttribute("aria-label", "English version");
  link.textContent = "EN";
  (document.querySelector("header.nav .menu, header.nav .wrap") || document.body).append(link);
}
if (link) link.addEventListener("click", () => { link.hash = location.hash; });

})();

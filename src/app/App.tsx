import { useState } from "react";
import heroImage from "../imports/image-1.png";
import logoImage from "../imports/logo.png";

const fraunces: React.CSSProperties = {
  fontFamily: "'Fraunces', serif",
  fontWeight: 600,
  fontVariationSettings: '"SOFT" 0, "WONK" 1',
};

const openSans: React.CSSProperties = {
  fontFamily: "'Open Sans', sans-serif",
};

function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-black" style={{ height: "clamp(220px, 28vw, 320px)" }}>
      {/* Fish photo — fill and crop to cover, anchored to center */}
      <img
        src={heroImage}
        alt="Taimen"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.88)" }}
      />
      {/* Subtle gradient overlay for text legibility */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.05) 100%)" }} />
      {/* Centred title block */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4 text-center text-white"
        style={{ textShadow: "0 0 8px rgba(0,0,0,0.85), 0 0 24px rgba(0,0,0,0.5)" }}
      >
        <p className="w-full" style={{ ...fraunces, fontSize: "clamp(22px, 4.5vw, 50px)", lineHeight: 1.25 }}>
          Pyhäjärven Taimen Cup 2026
        </p>
        <p style={{ ...fraunces, fontSize: "clamp(18px, 3.5vw, 40px)", lineHeight: 1.6 }}>
          15.6. – 31.10.2026
        </p>
      </div>
    </div>
  );
}

function Tabs({ active, setActive }: { active: "kilpailu" | "tietosuoja"; setActive: (v: "kilpailu" | "tietosuoja") => void }) {
  const tabs = [
    { id: "kilpailu" as const, label: "Kilpailu" },
    { id: "tietosuoja" as const, label: "Tietosuojaseloste" },
  ];
  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActive(tab.id)}
          className="flex flex-col items-center gap-[3px] pb-0 cursor-pointer bg-transparent border-0 p-0"
        >
          <span style={{ ...fraunces, fontSize: 16, color: "#17324d" }}>{tab.label}</span>
          <div
            style={{
              height: 2,
              width: "100%",
              background: active === tab.id ? "#17324d" : "transparent",
              transition: "background 0.2s",
            }}
          />
        </button>
      ))}
    </div>
  );
}

function KilpailuPage() {
  return (
    <div className="flex flex-col gap-[22px] w-full" style={{ color: "#17324d" }}>
      {/* Intro */}
      <div style={openSans}>
        <p style={{ fontSize: 14, fontWeight: 600, lineHeight: "normal", marginBottom: 0 }}>
          Pyhäjärven hoitokunta kutsuu kaikki kalastajat mukaan kesän ja syksyn mittaiseen taimenkilpailuun, jossa kauden suurin taimen palkitaan.
        </p>
        <br />
        <p style={{ fontSize: 14, lineHeight: "normal", marginBottom: 0 }}>
          <span style={{ fontWeight: 600 }}>Ajankohta: </span>
          <span style={{ fontWeight: 400 }}>15.6. – 31.10.2026</span>
          <br />
          <span style={{ fontWeight: 600 }}>Kilpailupaikka: </span>
          <span style={{ fontWeight: 400 }}>Pyhäjärvi, Pelkosenniemi</span>
        </p>
      </div>

      {/* Säännöt */}
      <Section title="Säännöt">
        <p style={{ fontSize: 14, lineHeight: "normal" }}>
          Kyseessä on pituuskilpailu, eli pisin hyväksytty aktiivivälinein pyydetty taimen voittaa. Alamitta on 50 cm. Saaliskiintiö on yksi taimen vuorokautta kohden per kalastaja. Rasvaevälliset taimenet on vapautettava. Rasvaevättömät taimenet voi ottaa sääntöjen puitteissa. Kalastukseen vaaditaan voimassa oleva lupa, jonka voi ostaa osoitteesta{" "}
          <a href="https://pyhanvedet.fi/lupakauppa" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>pyhanvedet.fi/lupakauppa</a>.
        </p>
      </Section>

      {/* Osallistuminen */}
      <Section title="Osallistuminen">
        <p style={{ fontSize: 14, lineHeight: "normal" }}>
          <span style={{ fontWeight: 700 }}>Lähetä WhatsApp-viesti numeroon 0403227772. </span>
          Lisää viestiin nimesi, kalan pituus ja pyyntipäivä. Liitä mukaan kuva saaliista siten, että kala näkyy selvästi mittanauhan päällä ja pituus on luettavissa kuvasta.
        </p>
      </Section>

      {/* Mittausohje */}
      <Section title="Mittausohje">
        <p style={{ fontSize: 14, lineHeight: "normal" }}>
          Mittaa kalan pituus leuan kärjestä yhteen puristetun pyrstön päähän senttimetrin tarkkuudella. Aseta kala tasaiselle alustalle ja mittaa pituus alustaa pitkin kalan vierestä, ei kalan pintaa pitkin. Sekä Astelin- että Oravanrannasta löytyy mittauspiste.
        </p>
      </Section>

      {/* Palkinnot */}
      <Section title="Palkinnot">
        <div style={{ fontSize: 14, lineHeight: "normal" }}>
          <p style={{ marginBottom: 0 }}>
            Pääpalkintona on suurimman taimenen saajalle{" "}
            <span style={{ fontWeight: 700 }}>sähköperämoottori</span>{" "}
            <span style={{ fontWeight: 700 }}>(arvo 200 €)</span>. Lisäksi kaikkien osallistujien kesken arvotaan 3 x 2kpl käsintehtyjä taimenvaappuja.
          </p>
          <br />
          <p style={{ marginBottom: 0 }}>
            Jos samanpituisia kaloja on useampia, voittaja arvotaan näiden kalojen kesken. Palkintojen voittajat ilmoitetaan pian kilpailun päättymisen jälkeen marraskuun alussa pyhan_vedet Instagram tilillä. Voittajille ilmoitetaan myös henkilökohtaisesti.
          </p>
          <br />
          <p style={{ marginBottom: 0 }}>
            Palkinnot on noudettavissa Pyhätunturilta mutta myös kotimaan postitus on mahdollinen.
          </p>
        </div>
      </Section>

      {/* Saalispalaute */}
      <Section title="Saalispalaute">
        <p style={{ fontSize: 14, lineHeight: "normal" }}>
          Toivomme lisäksi saalispalautetta osoitteessa{" "}
          <a href="https://pyhanvedet.fi/kalastus-ja-luvat/#saalispalaute" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>pyhanvedet.fi/kalastus-ja-luvat/#saalispalaute</a>.{" "}
          Saalispalautteiden avulla seuraamme taimenkannan kehitystä ja saamme arvokasta tietoa kalavesien hoidon tueksi.
        </p>
      </Section>

      {/* Sosiaalinen media */}
      <Section title="Sosiaalinen media">
        <p style={{ fontSize: 14, lineHeight: "normal" }}>
          Osallistumalla kilpailuun annat luvan julkaista kuvia omilla somekanavillamme. Jos julkaiset saaliisi Instagramissa, käytäthän tunnisteita{" "}
          <span style={{ fontWeight: 700 }}>#pyhantaimencup2026</span> ja{" "}
          <span style={{ fontWeight: 700 }}>@pyhan_vedet</span>.
        </p>
      </Section>
    </div>
  );
}

function TietosuojaPage() {
  return (
    <div style={{ ...openSans, color: "#17324d", fontSize: 14, lineHeight: "normal" }}>
      <p style={{ fontWeight: 700, marginBottom: 0 }}>Tietosuojaseloste – Pyhäjärven Taimen Cup 2026</p>
      <br />
      <p style={{ marginBottom: 0 }}><span style={{ fontWeight: 700 }}>Rekisterinpitäjä: </span>Pyhäjärven hoitokunta</p>
      <br />
      <p style={{ marginBottom: 0 }}><span style={{ fontWeight: 700 }}>Yhteyshenkilö: </span>vrautiainen@gmail.com</p>
      <br />
      <p style={{ fontWeight: 700, marginBottom: 0 }}>Mitä tietoja keräämme:</p>
      <p style={{ marginBottom: 0 }}>Kilpailuun osallistumisen yhteydessä voimme kerätä seuraavia tietoja:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginTop: 4 }}>
        <li>nimi</li>
        <li>puhelinnumero</li>
        <li>Instagram-käyttäjätunnus (jos osallistuja käyttää Instagramia)</li>
        <li>saalistiedot (kalalaji, pituus, pyyntipäivä)</li>
        <li>kilpailuun lähetetyt valokuvat</li>
        <li>mahdolliset saalispalautetiedot</li>
      </ul>
      <br />
      <p style={{ fontWeight: 700, marginBottom: 0 }}>Tietoja käytetään:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginTop: 4 }}>
        <li>kilpailun järjestämiseen</li>
        <li>kilpailutulosten tarkistamiseen ja julkaisemiseen</li>
        <li>voittajien yhteydenottoon</li>
        <li>kalakannan seurannan ja kalavesien hoidon tukemiseen saalispalautteiden avulla</li>
      </ul>
      <br />
      <p style={{ fontWeight: 700, marginBottom: 0 }}>Tietojen luovuttaminen</p>
      <p style={{ marginBottom: 0 }}>Tietoja ei luovuteta ulkopuolisille kaupallisiin tarkoituksiin.</p>
      <p>Kilpailun voittajan nimi, saaliskuva ja saalistiedot voidaan julkaista kilpailun tulosten yhteydessä Pyhäjärven hoitokunnan verkkosivuilla, sosiaalisen median kanavissa tai muissa kilpailuun liittyvissä julkaisuissa.</p>
      <br />
      <p style={{ fontWeight: 700, marginBottom: 0 }}>Tietojen säilyttäminen</p>
      <p style={{ marginBottom: 0 }}>Kilpailuun liittyviä tietoja säilytetään enintään kaksi vuotta kilpailun päättymisen jälkeen, minkä jälkeen tiedot poistetaan tai anonymisoidaan.</p>
      <p>Saalispalautteita voidaan säilyttää pidempään tilastollisessa muodossa ilman henkilötietoja.</p>
      <br />
      <p style={{ fontWeight: 700, marginBottom: 0 }}>Rekisteröidyn oikeudet</p>
      <p style={{ marginBottom: 0 }}>Osallistujalla on oikeus:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginTop: 4 }}>
        <li>saada tieto itseään koskevista tiedoista</li>
        <li>pyytää virheellisten tietojen korjaamista</li>
        <li>pyytää tietojen poistamista, mikäli niiden säilyttämiselle ei ole lakisääteistä tai kilpailun järjestämiseen liittyvää perustetta</li>
      </ul>
      <br />
      <p style={{ marginBottom: 0 }}>Tietopyynnöt voi lähettää osoitteeseen vrautiainen@gmail.com</p>
      <br />
      <p style={{ fontWeight: 700, marginBottom: 0 }}>Suostumus</p>
      <p>Osallistumalla kilpailuun osallistuja hyväksyy tämän tietosuojaselosteen mukaisen henkilötietojen käsittelyn.</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 w-full" style={{ color: "#17324d", ...openSans }}>
      <p style={{ ...fraunces, fontSize: 18, lineHeight: "normal", marginBottom: 0 }}>{title}</p>
      {children}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState<"kilpailu" | "tietosuoja">("kilpailu");

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: "#ecf0f1" }}>
      <Hero />

      {/* Content wrapper — centred, max ~640px, responsive padding */}
      <div className="flex flex-col items-start gap-7 w-full mx-auto px-4 py-7" style={{ maxWidth: 640 }}>
        <Tabs active={tab} setActive={setTab} />
        {tab === "kilpailu" ? <KilpailuPage /> : <TietosuojaPage />}
        <div className="flex justify-center w-full pt-2">
          <img src={logoImage} alt="Pyhäjärven hoitokunta" style={{ width: 153, height: 125, objectFit: "contain" }} />
        </div>
      </div>
    </div>
  );
}

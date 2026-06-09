import imgImg87371 from "./334d900913ab30b6c0528bc378475bd0ed23edc6.png";
import imgImage5 from "./a76ab81f2ecd78ffe7979ae7902b6ab76b5521d7.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch drop-shadow-[0px_0px_5px_rgba(0,0,0,0.8)] flex flex-col font-['Fraunces:SemiBold',sans-serif] font-semibold gap-[32px] items-start left-[calc(50%+0.5px)] text-center text-white top-1/2 w-[538px]">
      <p className="leading-[1.3] relative shrink-0 text-[34px] w-full" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
        Pyhäjärven Taimen Cup 2026
      </p>
      <p className="leading-[1.8] relative shrink-0 text-[30px] w-full" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
        15.6. - 31.10.2026
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-black h-[300px] overflow-clip relative shrink-0 w-full" data-name="Hero">
      <div className="-translate-x-1/2 absolute aspect-[1171/369.99993896484375] bottom-[-17.33%] flex items-center justify-center left-1/2 top-[-6%]" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="IMG_8737 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-55.34%] max-w-none top-0 w-[237.36%]" src={imgImg87371} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[46.154%] from-[rgba(0,0,0,0.3)] inset-0 to-[86.538%] to-[rgba(0,0,0,0)]" />
      <Frame />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center relative shrink-0" data-name="Tab">
      <p className="[word-break:break-word] font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#17324d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
        Kilpailu
      </p>
      <div className="h-0 relative shrink-0 w-full">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 1" />
        </svg>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center relative shrink-0" data-name="Tab">
      <p className="[word-break:break-word] font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#17324d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
        Tietosuojaseloste
      </p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 2">
            <line id="Line 1" stroke="var(--stroke-0, #17324D)" strokeWidth="2" x2="119" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[544px]">
      <Tab />
      <Tab1 />
    </div>
  );
}

export default function NettisivuTietosuojaseloste() {
  return (
    <div className="bg-[#e5e7e8] content-stretch flex flex-col gap-[28px] items-center pb-[32px] relative size-full" data-name="Nettisivu / Tietosuojaseloste">
      <Hero />
      <Frame1 />
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#17324d] text-[0px] w-[544px]">
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Tietosuojaseloste – Pyhäjärven Taimen Cup 2026
        </p>
        <p className="leading-[normal] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="mb-0 text-[14px] whitespace-pre-wrap">
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Rekisterinpitäjä:
          </span>
          <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal]" style={{ fontVariationSettings: '"wdth" 100' }}>{` Pyhäjärven hoitokunta`}</span>
        </p>
        <p className="leading-[normal] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="mb-0 text-[14px] whitespace-pre-wrap">
          <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal]" style={{ fontVariationSettings: '"wdth" 100' }}>
            Yhteyshenkilö:
          </span>
          <span className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal]" style={{ fontVariationSettings: '"wdth" 100' }}>{` vrautiainen@gmail.com`}</span>
        </p>
        <p className="leading-[normal] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Mitä tietoja keräämme:
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Kilpailuun osallistumisen yhteydessä voimme kerätä seuraavia tietoja:
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              nimi
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              puhelinnumero
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              Instagram-käyttäjätunnus (jos osallistuja käyttää Instagramia)
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              saalistiedot (kalalaji, pituus, pyyntipäivä)
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              kilpailuun lähetetyt valokuvat
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              mahdolliset saalispalautetiedot
            </span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Tietoja käytetään:
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              kilpailun järjestämiseen
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              kilpailutulosten tarkistamiseen ja julkaisemiseen
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              voittajien yhteydenottoon
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              kalakannan seurannan ja kalavesien hoidon tukemiseen saalispalautteiden avulla
            </span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Tietojen luovuttaminen
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Tietoja ei luovuteta ulkopuolisille kaupallisiin tarkoituksiin.
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Kilpailun voittajan nimi, saaliskuva ja saalistiedot voidaan julkaista kilpailun tulosten yhteydessä Pyhäjärven hoitokunnan verkkosivuilla, sosiaalisen median kanavissa tai muissa kilpailuun liittyvissä julkaisuissa.
        </p>
        <p className="leading-[normal] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Tietojen säilyttäminen
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Kilpailuun liittyviä tietoja säilytetään enintään kaksi vuotta kilpailun päättymisen jälkeen, minkä jälkeen tiedot poistetaan tai anonymisoidaan.
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Saalispalautteita voidaan säilyttää pidempään tilastollisessa muodossa ilman henkilötietoja.
        </p>
        <p className="leading-[normal] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Rekisteröidyn oikeudet
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Osallistujalla on oikeus:
        </p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              saada tieto itseään koskevista tiedoista
            </span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              pyytää virheellisten tietojen korjaamista
            </span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#17324d] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              pyytää tietojen poistamista, mikäli niiden säilyttämiselle ei ole lakisääteistä tai kilpailun järjestämiseen liittyvää perustetta
            </span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Tietopyynnöt voi lähettää osoitteeseen:
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          vrautiainen@gmail.com
        </p>
        <p className="leading-[normal] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[normal] mb-0 text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Suostumus
        </p>
        <p className="font-['Open_Sans:Regular',sans-serif] leading-[normal] text-[14px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Osallistumalla kilpailuun osallistuja hyväksyy tämän tietosuojaselosteen mukaisen henkilötietojen käsittelyn.
        </p>
      </div>
      <div className="h-[125px] relative shrink-0 w-[153px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}
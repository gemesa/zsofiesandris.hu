import Section from "@/app/_components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { Button } from "@/app/_components/ui/button";
import { CircleHelp } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const FAQ: FC = () => {
  return (
    <Section
      title="Kérdések és válaszok"
      className="sm:w-4/5 mx-auto"
      icon={<CircleHelp className="sm:size-8 size-8 pt-1" />}
    >
      <Accordion type="multiple" className="w-full font-libre italic">
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Van dress code?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Igen, szeretnénk, ha Ti is csinosan ünnepelnétek Velünk, kérlek,
            formal dress code-ot kövessetek. Viseljetek bátran bármit, amiben
            jól érzitek magatokat, ugyanakkor{" "}
            <span className="font-bold">
              a fehér szín kerülését kifejezetten kérjük.
            </span>{" "}
            A ceremónia kültéri, a vacsora és a buli pedig beltéren lesz, így
            érdemes vékony kabáttal készülni. Ha nem vagy biztos benne, hogy
            megfelelő-e a választott ruha, keresd bátran a menyasszonyt
            kérdéseddel. <span className="not-italic">🙂</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Hozhatok plusz egy főt?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Igen, szívesen látjuk kísérődet a nagy napunkon. Kérjük viszont,
            hogy a jelentkezési űrlapon jelezd augusztus 1-ig részvételi
            szándékát, hogy úgy tudjunk készülni.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Meddig kell visszajeleznem?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Visszajelezni augusztus 1-ig tudsz a jelentkezési űrlapon. Ha
            kérdésed merült fel, keress minket bizalommal, szívesen segítünk
            bármiben.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Hol tudok megszállni?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            A szállásfoglalás egyénileg történik, de sajnos az esküvő helyszínén
            korlátozott a szálláslehetőség. A környéken több opció is adott,
            javasoljuk a nyergesújfalui{" "}
            <Button
              asChild
              variant="link"
              className="p-0 h-6 text-base sm:text-lg"
            >
              <Link href="https://www.booking.com/Share-wj0Pvt">
                Bali Boutique Room
              </Link>
            </Button>
            -ot vagy{" "}
            <Button
              asChild
              variant="link"
              className="p-0 h-6 text-base sm:text-lg"
            >
              <Link href="https://www.booking.com/Share-6tVBvaZ">
                Paskom Apartmanház
              </Link>
            </Button>
            at, mivel ezektől a szállásoktól tudunk transzferbuszt biztosítani
            és az áraik is kedvezőek.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Hogyan jutok az esküvő helyszínére?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Az esküvő helyszínére ingyenes transzferbuszt biztosítunk oda és
            vissza is. A transzferbusz a nyergesújfalui{" "}
            <Button
              asChild
              variant="link"
              className="p-0 h-6 text-base sm:text-lg"
            >
              <Link href="https://www.booking.com/Share-wj0Pvt">
                Bali Boutique Room
              </Link>
            </Button>{" "}
            és{" "}
            <Button
              asChild
              variant="link"
              className="p-0 h-6 text-base sm:text-lg"
            >
              <Link href="https://www.booking.com/Share-6tVBvaZ">
                Paskom Apartmanház
              </Link>
            </Button>{" "}
            szállásokon áll meg. Szeretnénk, ha sokáig velünk ünnepelnél a nagy
            napon, ezért kérjük, lehetőség szerint a két szállás közül válassz.
            Így nem kell aggódnod a logisztikán, bátran koccinthatsz velünk.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Mikor indul a transzferbusz? Hogy tudok rá jelentkezni?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            A transzferbusz menetrendjét és minden hasznos információt a
            weboldalon fogunk közzétenni. Hazafelé 4 órán át lesz elérhető a
            szolgáltatás, a helyszínre pedig egy gyűjtőjárat fog indulni.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Autóval érkeznék, tudok a helyszínen parkolni?
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Igen, a helyszínen ingyenes a parkolás, de ha tervezel szállást
            foglalni, a transzferbusz miatt javasoljuk, hogy a szállásnál
            parkolj.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};

export default FAQ;

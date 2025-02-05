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
      icon={<CircleHelp className="size-8 pt-1" />}
    >
      <div className="flex flex-col gap-5 font-libre italic">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Van dress code?</AccordionTrigger>
            <AccordionContent>
              // !! TODO Igen, szeretnénk ha Ti is csinosan ünnepelnétek Velünk,
              kérlek, formal dress code-ot kövessetek. Viseljetek bátran bármit,
              amiben jól érzitek magatokat, ugyanakkor a fehér szín kerülését
              kifejezetten kérjük. A ceremónia kültéri, a vacsora és a buli
              pedig beltéren lesz, így érdemes vékony kabáttal készülni. Ha nem
              vagy biztos benne, hogy megfelelő-e a választott ruha, keresd
              bátran a menyasszonyt kérdéseddel.{" "}
              <span className="TODO tailwind unset italics">🙂</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Hozhatok plusz egy főt?</AccordionTrigger>
            <AccordionContent>
              Igen, szívesen látjuk kísérődet a nagy napunkon. Kérjük viszont,
              hogy a jelentkezési űrlapon jelezd augusztus 1-ig részvételi
              szándékát, hogy úgy tudjunk készülni.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Meddig kell visszajeleznem?</AccordionTrigger>
            <AccordionContent>
              Visszajelezni augusztus 1-ig tudsz a jelentkezési űrlapon. Ha
              kérdésed merült fel, // ! TODO: most akkor kit keressen? keresd
              Esztit vagy Istit, szívesen segítünk bármiben.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Hol tudok megszállni?</AccordionTrigger>
            <AccordionContent>
              A szállásfoglalás egyénileg történik, de sajnos az esküvő
              helyszínen korlátozott a szálláslehetőség. A környéken több opció
              is adott, javasoljuk a nyergesújfalui{" "}
              <Button asChild variant="link" className="p-0 h-6">
                <Link href="https://www.booking.com/Share-wj0Pvt">
                  Bali Boutique Room
                </Link>
              </Button>
              -ot vagy{" "}
              <Button asChild variant="link" className="p-0 h-6">
                <Link href="https://www.booking.com/Share-6tVBvaZ">
                  Paskom Apartmanház
                </Link>
              </Button>
              at, mivel ezektől a szállásoktól tudunk transzferbuszt biztosítani
              és az áraik is kedvezőek.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Hogyan jutok az esküvő helyszínére?
            </AccordionTrigger>
            <AccordionContent>
              Az esküvő helyszínére ingyenes transzferbuszt biztosítunk oda- és
              hazafele is. A transzferbusz a nyergesújfalui{" "}
              <Button asChild variant="link" className="p-0  h-6">
                <Link href="https://www.booking.com/Share-wj0Pvt">
                  Bali Boutique Room
                </Link>
              </Button>{" "}
              és{" "}
              <Button asChild variant="link" className="p-0 h-6">
                <Link href="https://www.booking.com/Share-6tVBvaZ">
                  Paskom Apartmanház
                </Link>
              </Button>{" "}
              szállásokon áll meg. Szeretnénk, ha sokáig velünk ünnepelnél a
              nagy napon, így kérjük, lehetőség szerint a két szállás közül // !
              TODO: így vagy úgy? válassz. Így nem kell aggódnod a logisztikán,
              bátran koccinthatsz velünk.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Mikor indul a transzferbusz? Hogy tudok rá jelentkezni?
            </AccordionTrigger>
            <AccordionContent>
              A transzferbusz menetrendjét és minden hasznos információt a
              weboldalon fogunk közzétenni. Hazafele 4 órán át lesz elérhető a
              szolgáltatás, a helyszínre pedig egy gyűjtőjárat fog indulni.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Autóval érkeznék a helyszínre, tudok a helyszínen parkolni?
            </AccordionTrigger>
            <AccordionContent>
              Igen, a helyszínen ingyenes parkolás, de amennyiben tervezel
              szállást foglalni, a transzferbusz miatt javasoljuk, hogy a
              szállásnál parkold le autódat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
};

export default FAQ;

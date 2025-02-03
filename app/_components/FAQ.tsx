import Section from "@/app/_components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { FC } from "react";

const FAQ: FC = () => {
  return (
    <Section title="Kérdések és válaszok">
      <div className="flex flex-col gap-5 font-libre italic">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Van dress code?</AccordionTrigger>
            <AccordionContent>
              Igen, szeretnénk ha Ti is csinosan ünnepelnétek Velünk, kérlek
              formal dress code-ot kövessetek. Viseljetek bàtran bármit amiben
              jól érzitek magatokat, ugyanakkor a fehér szín kerülését szigorúan
              kérjük. A ceremónia kültéri, a vacsora és a buli pedig beltéren
              lesz, így érdemes vékony kabáttal készülni. Ha nem vagy biztos
              benne, hogy megfelelő-e a választott ruha, keresd bátran a
              menyasszonyt kérdéseddel. {":)"}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Hozhatok plusz egy főt?</AccordionTrigger>
            <AccordionContent>
              Igen, szívesen látjuk kíserődet a nagy napunkon. Kérjük viszont,
              hogy a jelentkezési űrlapon jelezd augusztus 1-ig részvételi
              szándékát, hogy tudjunk készülni.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Meddig kell visszajeleznem?</AccordionTrigger>
            <AccordionContent>
              Kérjük jelezz vissza augusztus 1-ig a jelentkezési űrlapon.
              Kérdéseddel bátran keresd Esztit vagy Istit, szívesen segítünk
              bármiben.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Hol tudok megszállni?</AccordionTrigger>
            <AccordionContent>
              Sajnos az esküvő helyszínén korlátozott a szálláslehetőség,
              viszont a környéken több opció is adott. Kérjük lehetőség szerint
              a nyergesújfalui{" "}
              <Button asChild variant="link" className="p-0  h-6">
                <Link href="https://www.booking.com/Share-wj0Pvt">
                  Bali Boutique Room
                </Link>
              </Button>
              -ot vagy{" "}
              <Button asChild variant="link" className="p-0  h-6">
                <Link href="https://www.booking.com/Share-6tVBvaZ">
                  Paskom Apartmanház
                </Link>
              </Button>
              at válaszd, hiszen ezektől a szállásoktól biztosítjuk a
              transzferbuszt. A szállásfoglalás egyénileg történik, köszönjük
              előre is a segítségeteket!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Hogyan jutok az esküvő helyszínére?
            </AccordionTrigger>
            <AccordionContent>
              Az esküvő helyszínére ingyenes transzferbuszt oda- és hazafele is
              biztosítunk. A transzferbusz a nyergesújfalui{" "}
              <Button asChild variant="link" className="p-0  h-6">
                <Link href="https://www.booking.com/Share-wj0Pvt">
                  Bali Boutique Room
                </Link>
              </Button>{" "}
              és
              <Button asChild variant="link" className="p-0  h-6">
                <Link href="https://www.booking.com/Share-6tVBvaZ">
                  Paskom Apartmanház
                </Link>
              </Button>{" "}
              szállásokon áll meg. Szeretnènk ha sokáig velünk ünnepelnél a nagy
              napon, így kérjük lehetőség szerint a kèt szállás közül válassz.
              Így nem kell aggódnod a logisztikán, bátran koccinthatsz velünk,
              hiszen az transzferbusz gondoskodik az utadról.
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
              Igen, a helyszínen lehetséges az ingyenes parkolás, ugyanakkor
              felhívjuk figyelmed a transzferbusz lehetőségre, így nem kell
              aggódnod az utolsó pohár ital belefér-e.{":)"}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
};

export default FAQ;

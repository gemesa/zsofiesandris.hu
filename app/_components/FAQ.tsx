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
      title="Hasznos tudnivalók"
      className="sm:w-4/5 mx-auto"
      icon={<CircleHelp className="sm:size-8 size-8 pt-1" />}
    >
      <Accordion type="multiple" className="w-full font-libre italic">
        <AccordionItem value="item-1">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Visszajelzés
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            A visszajelzés határideje 2026. Március 31, jelentkezni a fenti űrlap kitöltésével lehetséges. 
            Azonban, mivel a vendégházakat külön, publikus oldalon is le lehet foglalni, így amennyiben ott tervezel megszállni, kérünk minél előbb jelezz vissza, hogy biztosan legyen még szabad szoba.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Szálláslehetőségek
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            A Kastélyban 25 standard szállodai szoba található. Az ár a reggelit is tartalmazza.
            <br /><br />
                  Árak:
            <div className="text-left">
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>3 éves kor alatt ingyenes</li>
                <li>Pótágyas elhelyezés: 18.500 Ft/fő/éj (pótágyak csak limitált számban elérhetőek)</li>
                <li>Kétágyas elhelyezés kétágyas szobában: 32.600 Ft/fő/éj</li>
              </ul>
            </div>
            <br />
            Ezen kívül, az esküvő helyszínétől néhány perc sétára találhatóak az{" "}
            <Button
              asChild
              variant="link"
              className="p-0 h-6 text-base sm:text-lg"
            >
              <Link href="https://www.alsopetenyszallas.hu/">
                Alsópetényi Vendégházak
              </Link>
            </Button>
            , ahol összesen 22 főt tudunk elszállásolni.
            <br /><br />
            A szállodai szobák és a vendégházak foglalása is rajtunk keresztül történik, így kérünk, a formban jelezd, ha itt szeretnél majd megszállni.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="w-full">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Dress code
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Nyugodtan érkezhetsz bármilyen (elegáns) öltözékben, amiben jól érzed magad, azonban a fehér, piros és fekete színű ruhák kerülését kérjük.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Lemondás
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Reméljük, hogy minél többen velünk fogtok ünnepelni a Nagy Napunkon, azonban tudjuk, hogy sajnos bármikor közbejöhet valami.
            Amennyiben előre kiderül, hogy mégsem tudsz jönni, kérjük legkésőbb az esküvő előtt 15 nappal jelezd, mert utána már nekünk is nagyon nehezen módosítható a létszám.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Parkolás
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            A helyszínen a Kastély parkolójában, illetve a Vendégházak előtt is biztosított a parkolás.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};

export default FAQ;
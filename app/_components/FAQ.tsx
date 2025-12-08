import Section from '@/app/_components/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_components/ui/accordion';
import { CircleHelp } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const FAQ: FC = () => {
  return (
    <Section
      title="Hasznos tudnivalók"
      className="sm:w-4/5 mx-auto"
      icon={<CircleHelp className="sm:size-8 size-8 pt-1" />}
    >
      <Accordion type="multiple" className="w-full font-libre italic">
        <AccordionItem value="item-1">
          <AccordionTrigger className="sm:text-xl text-lg w-full">Visszajelzés</AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            A visszajelzés határideje 2026. március 1., jelentkezni a fenti űrlap kitöltésével
            lehetséges. Mivel a vendégházakat külön, publikus oldalon is le lehet foglalni, így
            amennyiben ott tervezel megszállni, kérünk minél előbb jelezz vissza, hogy biztosan
            legyen még szabad szoba.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="sm:text-xl text-lg w-full">
            Szálláslehetőségek
          </AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            A{' '}
            <Link
              href="https://pronaykastely.hu/hu"
              className="text-camouflage-green hover:text-kombu-green transition-colors underline"
            >
              Kastélyban
            </Link>{' '}
            25 standard szállodai szoba található. Az ár a reggelit is tartalmazza.
            <br />
            <br />
            <b>Prónay-kastély árak:</b>
            <div className="text-left">
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>3 éves kor alatt ingyenes</li>
                <li>
                  Pótágyas elhelyezés: 18.500 Ft/fő/éj (pótágyak csak limitált számban elérhetőek)
                </li>
                <li>Kétágyas elhelyezés kétágyas szobában: 32.600 Ft/fő/éj</li>
              </ul>
            </div>
            <br />
            Ezenkívül, az esküvő helyszínétől néhány perc sétára találhatóak az{' '}
            <Link
              href="https://www.alsopetenyszallas.hu/"
              className="text-camouflage-green hover:text-kombu-green transition-colors underline"
            >
              Alsópetényi Vendégházak
            </Link>
            , ahol összesen 22 főt tudunk elszállásolni.
            <br />
            <br />
            <b>Alsópetényi Vendégházak árak:</b>
            <br />
            <br />
            <div className="text-left">
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Egyágyas elhelyezés: 42.100 Ft/fő/éj</li>
                <li>Kétágyas elhelyezés: 27.900 Ft/fő/éj</li>
              </ul>
            </div>
            <br />
            Az ár a reggelit is tartalmazza. A szállodai szobák és a vendégházak foglalása is
            rajtunk keresztül történik, így kérünk, a formban jelezd, ha itt szeretnél majd
            megszállni.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="w-full">
          <AccordionTrigger className="sm:text-xl text-lg w-full">Dress code</AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Nyugodtan érkezhetsz bármilyen elegáns öltözékben, amiben jól érzed magad, azonban
            hölgyek esetén a fehér, piros és fekete színű ruhák kerülését kérjük.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="sm:text-xl text-lg w-full">Lemondás</AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            Reméljük, hogy minél többen velünk fogtok ünnepelni, de amennyiben kiderül, hogy mégsem
            tudsz jönni, kérjük legkésőbb az esküvő előtt 30 nappal jelezd, mert utána már nekünk is
            nagyon nehezen módosítható a létszám.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="sm:text-xl text-lg w-full">Parkolás</AccordionTrigger>
          <AccordionContent className="text-base sm:text-lg">
            A helyszínen a Kastély parkolójában, illetve a Vendégházak előtt is biztosított a
            parkolás.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};

export default FAQ;

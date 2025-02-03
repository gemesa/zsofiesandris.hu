import ApplicationForm from "@/app/_components/ApplicationForm";
import FAQ from "@/app/_components/FAQ";
import ImageOverlay from "@/app/_components/ImageOverlay";

import Section from "@/app/_components/Section";
import { Separator } from "@radix-ui/react-separator";
import {
  BookHeart,
  Bus,
  CalendarHeart,
  Gift,
  Heart,
  MapPinned,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col font-playfair">
      <div className="w-full h-screen sm:h-[400px] relative">
        <Image
          src="/wedding2.jpg"
          alt="Eszter és István esküvője"
          quality={100}
          sizes="100vw"
          priority
          fill
          className="object-cover"
        />
        <ImageOverlay />
      </div>

      <div className="container px-4 sm:px-10 my-8 grow pb-10">
        <Section
          className="mt-6"
          icon={<BookHeart className="size-8 pt-1" />}
          title="Jelentkezés"
        >
          <div className="flex flex-col gap-6">
            <p className="text-base">
              Megtisztelnél minket, ha velünk ünnepelnél a nagy napunkon!
              Kérlek, részvételi szándékod az alábbi űrlap kitöltésével jelezd
              augusztus 1-ig!
            </p>
            <ApplicationForm />
          </div>
        </Section>
        <Section
          title="Menetrend"
          icon={<CalendarHeart className="size-8 pt-1" />}
        >
          <Separator
            orientation="vertical"
            className="w-0.5 h-4 bg-camouflage-green rounded-sm"
          />
          <div className="flex flex-col items-center my-2">
            <p className="text-xl text-kombu-green">16:00</p>
            <p className="text-camouflage-green">
              vendégvárás, falatkák & hideg fröccs
            </p>
          </div>
          <Separator
            orientation="vertical"
            className="w-0.5 h-6 bg-camouflage-green rounded-sm"
          />
          <div className="flex flex-col items-center my-2">
            <p className="text-xl text-kombu-green">16:30</p>
            <p className="text-camouflage-green">szertartás</p>
          </div>
          <Separator
            orientation="vertical"
            className="w-0.5 h-6 bg-camouflage-green rounded-sm"
          />
          <div className="flex flex-col items-center my-2">
            <p className="text-xl text-kombu-green">17:30</p>
            <p className="text-camouflage-green">csoportképek</p>
          </div>
          <Separator
            orientation="vertical"
            className="w-0.5 h-6 bg-camouflage-green rounded-sm"
          />
          <div className="flex flex-col items-center my-2">
            <p className="text-xl text-kombu-green">18:30</p>
            <p className="text-camouflage-green">vacsora</p>
          </div>
          <Separator
            orientation="vertical"
            className="w-0.5 h-6 bg-camouflage-green rounded-sm"
          />
          <div className="flex flex-col items-center my-2">
            <p className="text-xl text-kombu-green">20:30</p>
            <p className="text-camouflage-green">nyitótánc</p>
          </div>
          <Separator
            orientation="vertical"
            className="w-0.5 h-6 bg-camouflage-green rounded-sm"
          />
          <div className="flex flex-col items-center my-2">
            <p className="text-xl text-kombu-green">22:30</p>
            <p className="text-camouflage-green">torta</p>
          </div>
          <Separator
            orientation="vertical"
            className="w-0.5 h-6 bg-camouflage-green rounded-sm"
          />
          <div className="flex flex-col items-center my-2">
            <p className="text-xl text-kombu-green">23:00</p>
            <p className="text-camouflage-green">menyasszonytánc</p>
          </div>
        </Section>

        <Section title="Helyszín" icon={<MapPinned className="size-8 pt-1" />}>
          <div className="flex flex-col gap-5">
            <p>Hilltop Borbirtok, 2544 Neszmély, Melegeshegy</p>
            <iframe
              className="h-[400px] w-full border-none rounded-md overflow-hidden"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.8985454623075!2d18.37534041274353!3d47.72521817108085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a5aa0c613c585%3A0x56f927e22b444349!2sHilltop%20Borbirtok%20%26%20%C3%89tterem!5e0!3m2!1shu!2shu!4v1736691249522!5m2!1shu!2shu"
              allowFullScreen
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Section>
        <Section title="Logisztika" icon={<Bus className="size-8 pt-1" />}>
          Ingyenes transzferbusz oda és vissza a szállásoktól. Tovàbbi
          információ hamarosan!
        </Section>
        <Section title="Ajándék" icon={<Gift className="size-8 pt-1" />}>
          A legnagyobb ajándék a részvételetek, azonban ha támogatnátok közös
          életünk kezdetét, az erre szánt összeget borítékba tegyétek!
        </Section>
        <FAQ />

        <div className="flex flex-col text-center items-center gap-1.5">
          <h4 className="font-semibold">
            Kérdés esetén keress bátran minket az alábbi elerhetőségek egyikén!
          </h4>
          <p>Eszti: +36203721666</p>
          <p>Isti: +36707440909</p>
          <p className="mt-4 flex font-semibold gap-2 flex-col items-center justify-center">
            Már nagyon várjuk hogy együtt ünnepeljünk!
            <Heart className="size-6" />
          </p>
        </div>
      </div>
    </div>
  );
}

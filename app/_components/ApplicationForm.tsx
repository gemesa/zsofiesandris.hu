"use client";
import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { Textarea } from "@/app/_components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/_components/ui/alert-dialog";
import { submitApplication } from "@/app/_db/actions";

import {
  WeddingApplicationFormData,
  weddingApplicationSchema,
} from "@/app/_lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { FC, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ApplicationForm: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [pendingFormData, setPendingFormData] = useState<WeddingApplicationFormData | null>(null);

  const applicantForm = useForm<WeddingApplicationFormData>({
    resolver: zodResolver(weddingApplicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      otherGuests: "",
      foodRestrictions: "",
      comment: "",
    },
  });

  const onSubmit = (values: WeddingApplicationFormData) => {
    setPendingFormData(values);
    setShowConfirmDialog(true);
  };

  const handleConfirm = () => {
    if (!pendingFormData) return;

    setShowConfirmDialog(false);
    startTransition(async () => {
      const { isSuccess } = await submitApplication(pendingFormData);

      if (isSuccess) {
        applicantForm.reset();
        setPendingFormData(null);
        toast.success(
          "Sikeres jelentkezés! Köszönjük, hogy velünk ünnepelsz majd!"
        );
      } else {
        toast.error(
          "Hiba történt. Kérlek próbáld újra később vagy keresd az ifjú párt."
        );
      }
    });
  };

  const handleCancel = () => {
    setShowConfirmDialog(false);
  };

  return (
    <>
      <Form {...applicantForm}>
        <form
          onSubmit={applicantForm.handleSubmit(onSubmit)}
          className="font-libre italic flex flex-col gap-5 items-stretch w-full text-left"
        >
          <FormField
            control={applicantForm.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base form-medium">
                  Teljes neved*
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-kombu-green focus-visible:ring-kombu-green border-[1.5px] caret-kombu-green"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicantForm.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base form-medium">
                  Telefonszámod*
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-kombu-green focus-visible:ring-kombu-green border-[1.5px] caret-kombu-green"
                    {...field}
                    type="tel"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicantForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base form-medium">
                  E-mail címed*
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-kombu-green focus-visible:ring-kombu-green border-[1.5px] caret-kombu-green"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicantForm.control}
            name="otherGuests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base form-medium">
                  További vendégek teljes neve
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="border-kombu-green focus-visible:ring-kombu-green border-[1.5px] caret-kombu-green"
                    {...field}
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicantForm.control}
            name="foodRestrictions"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base form-medium">
                  Van-e ételérzékenységed? Ha igen, mi?
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="border-kombu-green focus-visible:ring-kombu-green border-[1.5px] caret-kombu-green"
                    {...field}
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={applicantForm.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base form-medium">
                  Van bármi más, amit megosztanál velünk?
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="border-kombu-green focus-visible:ring-kombu-green border-[1.5px] caret-kombu-green"
                    {...field}
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isPending}
            className="font-libre font-normal text-lg p-5 bg-kombu-green"
          >
            {isPending ? (
              <Loader2Icon className="text-foreground animate-spin" />
            ) : (
              "Jelentkezem"
            )}
          </Button>
        </form>
      </Form>

<AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
  <AlertDialogContent className="font-libre max-w-md border-2 border-kombu-green bg-[#BFCFBB]/60 sm:bg-[#BFCFBB]/60">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-2xl font-playfair text-kombu-green text-center mb-2">
        Kérjük ellenőrizd az adataidat
      </AlertDialogTitle>
      <AlertDialogDescription className="space-y-4 pt-4">
        <div className="bg-white/60 p-4 rounded-lg border border-kombu-green/30 backdrop-blur-sm">
          <span className="text-sm font-bold text-kombu-green tracking-wide">
            Email cím
          </span>
          <div className="text-sm font-medium text-kombu-green mt-2 break-all">
            {pendingFormData?.email}
          </div>
        </div>
        <div className="bg-white/60 p-4 rounded-lg border border-kombu-green/30 backdrop-blur-sm">
          <span className="text-sm font-bold text-kombu-green tracking-wide">
            Telefonszám
          </span>
          <div className="text-sm font-medium text-kombu-green mt-2">
            {pendingFormData?.phoneNumber}
          </div>
        </div>
        <p className="text-base text-kombu-green italic text-center pt-2 font-bold">
          Erre az email címre fogjuk küldeni a visszaigazolást.
        </p>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter className="flex-col sm:flex-row gap-2 mt-4">
      <AlertDialogCancel 
        onClick={handleCancel}
        className="font-libre border-2 border-kombu-green text-kombu-green hover:bg-kombu-green/10 bg-white/60"
      >
        Vissza és javítás
      </AlertDialogCancel>
      <AlertDialogAction
        onClick={handleConfirm}
        className="bg-kombu-green hover:bg-kombu-green/90 font-libre text-base px-6 text-white"
        disabled={isPending}
      >
        {isPending ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          "Helyes, elküldöm"
        )}
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </>
  );
};

export default ApplicationForm;

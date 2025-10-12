"use client";
import { RadioGroup, RadioGroupItem } from "@/app/_components/ui/radio-group";
import { Label } from "@/app/_components/ui/label";
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
      attendance: undefined,
      otherGuests: "",
      smallChildren: undefined,
      midChildren: undefined,
      foodRestrictions: "",
      comment: "",
      accomodation: undefined,
    },
  });

  const attendanceValue = applicantForm.watch("attendance");

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
                  Teljes név*
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base form-medium">
                  E-mail cím*
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
            name="attendance"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-2">
                  <FormLabel className="text-base form-medium">
                    Részt veszel az eseményen?*
                  </FormLabel>
                  {field.value && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => field.onChange(undefined)}
                      className="h-auto py-1 px-2 text-xs font-libre italic text-kombu-green hover:text-kombu-green/80 whitespace-nowrap flex-shrink-0"
                    >
                      Törlés
                    </Button>
                  )}
                </div>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="Igen" 
                        id="Igen"
                        className="border-kombu-green text-kombu-green"
                      />
                      <Label 
                        htmlFor="Igen" 
                        className="font-normal cursor-pointer font-libre italic"
                      >
                        Igen, ott leszek!
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value="Nem" 
                        id="Nem"
                        className="border-kombu-green text-kombu-green"
                      />
                      <Label 
                        htmlFor="Nem" 
                        className="font-normal cursor-pointer font-libre italic"
                      >
                        Sajnos nem tudok részt venni
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {attendanceValue !== "Nem" && (
            <>
              <FormField
                control={applicantForm.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base form-medium">
                      Telefonszám
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
                name="smallChildren"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel className="text-base form-medium">
                      3 év alatti gyerekek száma
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-kombu-green focus-visible:ring-kombu-green border-[1.5px] caret-kombu-green"
                        {...field}
                        type="number"
                        min="0"
                        placeholder="0"
                        value={value ?? ""}
                        onChange={(e) => {
                          const val = e.target.value;
                          onChange(val === "" ? undefined : Number(val));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={applicantForm.control}
                name="midChildren"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel className="text-base form-medium">
                      3 és 12 év közötti gyerekek száma
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-kombu-green focus-visible:ring-kombu-green border-[1.5px] caret-kombu-green"
                        {...field}
                        type="number"
                        min="0"
                        placeholder="0"
                        value={value ?? ""}
                        onChange={(e) => {
                          const val = e.target.value;
                          onChange(val === "" ? undefined : Number(val));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={applicantForm.control}
                name="accomodation"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-base form-medium">
                        Szállás (információk lejjebb)
                      </FormLabel>
                      {field.value && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            field.onChange(undefined);
                          }}
                          className="h-auto p-1 text-xs font-libre italic text-kombu-green hover:text-kombu-green/80"
                        >
                          Törlés
                        </Button>
                      )}
                    </div>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value ?? ""}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="szállás0"
                            id="szállás0"
                            className="border-kombu-green text-kombu-green"
                          />
                          <Label
                            htmlFor="szállás0"
                            className="font-normal cursor-pointer font-libre italic">
                            szállás0
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="szállás1"
                            id="szállás1"
                            className="border-kombu-green text-kombu-green"
                          />
                          <Label
                            htmlFor="szállás1"
                            className="font-normal cursor-pointer font-libre italic">
                            szállás1
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="szállás2"
                            id="szállás2"
                            className="border-kombu-green text-kombu-green"
                          />
                          <Label
                            htmlFor="szállás2"
                            className="font-normal cursor-pointer font-libre italic">
                            szállás2
                          </Label>
                        </div>
                      </RadioGroup>
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
                      Az érkezőknek van-e bármilyen ételallergiája és/vagy speciális étrendje?
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
            </>
          )}
          {attendanceValue === "Nem" && (
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
          )}
          <Button
            type="submit"
            disabled={isPending}
            className="font-libre font-normal text-lg p-5 #E9BAB5"
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
  <AlertDialogContent className="font-libre max-w-md border-2 #E9BAB5 bg-[#FEFEFD]/60 sm:bg-[##FEFEFD]/60">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-2xl font-playfair #E9BAB5 text-center mb-2">
        Kérjük ellenőrizd az email címed
      </AlertDialogTitle>
      <AlertDialogDescription className="space-y-4 pt-4">
        <div className="bg-white/60 p-4 rounded-lg border #E9BAB5/30 backdrop-blur-sm">
          <div className="text-sm font-medium text-kombu-green mt-2 break-all">
            {pendingFormData?.email}
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
        className="font-libre border-2 #E9BAB5 text-kombu-green hover:bg-kombu-green/10 bg-white/60"
      >
        Vissza és javítás
      </AlertDialogCancel>
      <AlertDialogAction
        onClick={handleConfirm}
        className="#E9BAB5 hover:#E9BAB5/90 font-libre text-base px-6 text-white"
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

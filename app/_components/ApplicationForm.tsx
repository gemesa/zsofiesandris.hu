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
import { submitApplication } from "@/app/_db/actions";

import {
  WeddingApplicationFormData,
  weddingApplicationSchema,
} from "@/app/_lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { FC, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ApplicationForm: FC = () => {
  const [isPending, startTransition] = useTransition();
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
    startTransition(async () => {
      const { isSuccess } = await submitApplication(values);

      if (isSuccess) {
        applicantForm.reset();
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

  return (
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
              <FormLabel>Kitöltő teljes neve*</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>Kitöltő telefonszáma*</FormLabel>
              <FormControl>
                <Input {...field} type="tel" />
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
              <FormLabel>Kitöltő e-mail címe*</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>További vendégek teljes neve</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
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
              <FormLabel>Van-e ételérzékenységed? Ha igen, mi?</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
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
              <FormLabel>Van bármi más, amit megosztanál velünk?</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
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
  );
};

export default ApplicationForm;

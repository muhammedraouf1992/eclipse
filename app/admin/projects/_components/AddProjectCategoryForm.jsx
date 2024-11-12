"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addProjectCategorySchema } from "@/lib/validationSchema";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { addProjectCategory } from "../actions/addCategoryAction";

import RichTextEditor from "../../_components/RichTextEditor";

export default function AddProjectCategoryForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(addProjectCategorySchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("slug", values.slug);
    formData.append("imgUrl", values.imgUrl);
    formData.append("coverImg", values.coverImg);
    formData.append("description", values.description);
    startTransition(async () => {
      try {
        await addProjectCategory(formData);
        router.push("/admin/projects");
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 my-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize text-lg">title</FormLabel>
              <FormControl>
                <Input placeholder="category title..." {...field} />
              </FormControl>
              <FormDescription>
                This is your public display title.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize text-lg">slug</FormLabel>
              <FormControl>
                <Input placeholder="category slug..." {...field} />
              </FormControl>
              <FormDescription>This is your public url.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imgUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize text-lg">banner image</FormLabel>
              <FormControl>
                <Input
                  className="fileinput"
                  type="file"
                  onChange={(e) => {
                    // Capture the selected file
                    const selectedFile = e.target.files?.[0] || null;
                    // Manually trigger the onChange event with the selected file
                    field.onChange(selectedFile);
                  }}
                  ref={field.ref} // Ensure the input is properly registered
                />
              </FormControl>
              <FormDescription>
                This is banner image. size should be 1200*628
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="coverImg"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize text-lg">banner image</FormLabel>
              <FormControl>
                <Input
                  className="fileinput"
                  type="file"
                  onChange={(e) => {
                    // Capture the selected file
                    const selectedFile = e.target.files?.[0] || null;
                    // Manually trigger the onChange event with the selected file
                    field.onChange(selectedFile);
                  }}
                  ref={field.ref} // Ensure the input is properly registered
                />
              </FormControl>
              <FormDescription>
                This is banner image. size should be 1200*628
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize text-lg">description</FormLabel>
              <FormControl>
                <RichTextEditor
                  content={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

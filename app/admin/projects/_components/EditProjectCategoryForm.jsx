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

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { editCategorySchema } from "@/lib/validationSchema";
import Image from "next/image";

import { Textarea } from "@/components/ui/textarea";
import { editCategoryAction } from "../actions/editCategoryAction";
import RichTextEditor from "../../_components/RichTextEditor";

export function EditCategoryForm({ category }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(editCategorySchema),
    defaultValues: {
      title: category.title || "",
      slug: category.slug || "",
      description: category.description || "",
      imgUrl: "",
      coverImg: "",
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
      await editCategoryAction(formData, category);
      router.push("/admin/projects");
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
                <Input placeholder="category title" {...field} />
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
                <Input placeholder="category slug" {...field} />
              </FormControl>
              <FormDescription>This is your public url.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <FormField
            control={form.control}
            name="imgUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-lg">
                  banner image
                </FormLabel>
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
          <Image
            src={`${category.imgUrl}`}
            width={200}
            height={200}
            alt="blogImage"
          />
        </div>
        <div>
          <FormField
            control={form.control}
            name="coverImg"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-lg">
                  cover image
                </FormLabel>
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
                  This is banner image. size should be 1080*1080
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Image
            src={`${category.coverImg || ""}`}
            width={200}
            height={200}
            alt="blogImage"
          />
        </div>

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

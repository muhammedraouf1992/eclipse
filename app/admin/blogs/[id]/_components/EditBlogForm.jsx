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
import RichTextEditor from "@/app/admin/_components/RichTextEditor";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { editBlogSchema } from "@/lib/validationSchema";
import Image from "next/image";
import { editBlogAction } from "../actions/editBlogAction";

export function EditBlogForm({ blog }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(editBlogSchema),
    defaultValues: {
      title: blog.title || "",
      slug: blog.slug || "",
      content: blog.content || "",
      image: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("slug", values.slug);
    formData.append("image", values.image);
    formData.append("content", values.content);

    startTransition(async () => {
      await editBlogAction(formData, blog);
      router.push("/admin/blogs");
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
                <Input placeholder="shadcn" {...field} />
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
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public url.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize text-lg">
                  feature image
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
            src={`${blog.imgUrl}`}
            width={200}
            height={200}
            alt="blogImage"
          />
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize text-lg">Content</FormLabel>
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

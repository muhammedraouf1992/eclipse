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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { addProjectSchema } from "@/lib/validationSchema";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { Textarea } from "@/components/ui/textarea";
import { addProjectAction } from "../actions/addProjectAction";

export default function AddProjectForm({ categories }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(addProjectSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      categoryId: "",
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
    formData.append("categoryId", values.categoryId);
    if (Array.isArray(values.gridImgs)) {
      values.gridImgs.forEach((file) => {
        formData.append("gridImgs", file);
      });
    }
    startTransition(async () => {
      try {
        await addProjectAction(formData);
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
                <Input placeholder="project title..." {...field} />
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
                <Input placeholder="project slug..." {...field} />
              </FormControl>
              <FormDescription>This is your public url.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Category Select */}
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem value={category.id} key={category.id}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage categories in the category page .
              </FormDescription>
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
              <FormLabel className="capitalize text-lg">cover image</FormLabel>
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
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize text-lg">description</FormLabel>
              <FormControl>
                <Textarea placeholder="Project description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gridImgs"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="capitalize text-lg">Grid images</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  onChange={(e) => {
                    const selectedFiles = Array.from(e.target.files) || [];
                    field.onChange(selectedFiles);
                  }}
                  ref={field.ref}
                />
              </FormControl>
              <FormDescription>
                This is banner image. size should be 1080*1080
              </FormDescription>
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

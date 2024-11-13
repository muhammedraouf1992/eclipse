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

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { editProjectSchema } from "@/lib/validationSchema";
import Image from "next/image";

import { Textarea } from "@/components/ui/textarea";

import { XCircle } from "lucide-react";
import { deleteProjectImg } from "../actions/deleteProjectImg";
import { editProjectAction } from "../actions/editProjectAction";

export default function EditProjectForm({ project, categories }) {
  const [isPending, startTransition] = useTransition();
  const [gridImgs, setGridImgs] = useState(project.gridImgs.split(","));
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(editProjectSchema),
    defaultValues: {
      title: project.title || "",
      slug: project.slug || "",
      description: project.description || "",
      categoryId: project.categoryId || "",
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

    formData.append("categoryId", values.categoryId);

    if (Array.isArray(values.gridImgs)) {
      values.gridImgs.forEach((file) => {
        formData.append("gridImgs", file);
      });
    }
    startTransition(async () => {
      await editProjectAction(formData, project);
      router.push("/admin/projects");
    });
  }

  const handleDelete = async (img) => {
    const updatedImages = gridImgs.filter((gridImg) => gridImg != img);

    setGridImgs(updatedImages);

    startTransition(async () => {
      const gridImgsStr = updatedImages.join(",");
      await deleteProjectImg(gridImgsStr, project, img);
    });
  };

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
                  This is banner image. size should be 1080*1080
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Image
            src={`${project.imgUrl}`}
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
                  Cover image
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
            src={`${project.coverImg || ""}`}
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
              <FormLabel className="capitalize text-lg">Content</FormLabel>
              <FormControl>
                <Textarea {...field} />
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
                This is banner image. size should be 1200*628
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-10">
          {gridImgs.map((img, i) => (
            <div key={i} className="relative">
              <Image src={img} width={200} height={200} alt="image" />
              <XCircle
                className="absolute top-2 right-2 text-red-700 cursor-pointer"
                onClick={() => handleDelete(img)}
              />
            </div>
          ))}
        </div>
        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

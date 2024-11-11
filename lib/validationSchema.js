import { z } from "zod";
const blogImage = z
  .instanceof(File, { message: "you have to pick an image" })
  .refine((file) => file.size > 0, {
    message: "File size must be greater than 0.",
  })
  .refine((file) => file.size < 2000000, {
    message: "File size must be less than 2mb.",
  });
const fileSchema = z.instanceof(File).refine((file) => file.size > 0, {
  message: "Each file must have a size greater than 0 bytes",
});
const imageSchema = z.array(fileSchema).nonempty({
  message: "You must select at least one image",
});

export const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "slug must be at least 2 characters.",
  }),
  image: blogImage,
  content: z.string().min(2, {
    message: "content must be at least 2 characters.",
  }),
});
export const editBlogSchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  image: z.any().optional(),
  content: z.string().optional(),
});
export const addProjectCategorySchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "slug must be at least 2 characters.",
  }),
  imgUrl: blogImage,
  coverImg: blogImage,
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
});
export const addProjectSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "slug must be at least 2 characters.",
  }),
  imgUrl: blogImage,
  coverImg: blogImage,
  categoryId: z.string().min(1, { message: "you have to pick a category" }),
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
  gridImgs: imageSchema,
});
export const editCategorySchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  imgUrl: z.any().optional(),
  coverImg: z.any().optional(),
  description: z.string().optional(),
});
export const editProjectSchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  imgUrl: z.any().optional(),
  coverImg: z.any().optional(),
  gridImgs: z.any().optional(),
  categoryId: z.any().optional(),
  description: z.string().optional(),
});
export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(4, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

"use client";
import { Trash } from "lucide-react";
import React, { useTransition } from "react";
import { deleteBlogAction } from "../actions/deleteBlogAction";
import { Button } from "@/components/ui/button";

const DeleteBlogButton = ({ blog }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Trash
        className={`text-red-500 cursor-pointer ${
          isPending && "text-gray-100"
        }`}
        onClick={() =>
          startTransition(async () => {
            await deleteBlogAction(blog);
          })
        }
      />
    </>
  );
};

export default DeleteBlogButton;

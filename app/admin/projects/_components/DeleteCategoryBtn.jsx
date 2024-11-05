"use client";
import { Trash } from "lucide-react";
import React, { useTransition } from "react";
import { deleteCategoryAction } from "../actions/deleteCategoryAction";

const DeleteCategoryButton = ({ category }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Trash
        className={`text-red-500 cursor-pointer ${
          isPending && "text-gray-100"
        }`}
        onClick={() =>
          startTransition(async () => {
            await deleteCategoryAction(category);
          })
        }
      />
    </>
  );
};

export default DeleteCategoryButton;

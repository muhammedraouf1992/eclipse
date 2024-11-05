"use client";
import { Trash } from "lucide-react";
import React, { useTransition } from "react";

import { deleteProject } from "../actions/deleteProjectAction";

const DeleteProjectButton = ({ project }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <Trash
        className={`text-red-500 cursor-pointer ${
          isPending && "text-gray-100"
        }`}
        onClick={() =>
          startTransition(async () => {
            await deleteProject(project);
          })
        }
      />
    </>
  );
};

export default DeleteProjectButton;

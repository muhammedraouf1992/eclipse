import React from "react";
import { AddBlogForm } from "./_components/AddBlogForm";

const AddNewBlogPage = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl">Add New Blog</h1>
      <AddBlogForm />
    </div>
  );
};

export default AddNewBlogPage;

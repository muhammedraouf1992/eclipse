"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import ToolBar from "./ToolBar";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";

import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";

export default function RichTextEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure(),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: "blog-text",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
        HTMLAttributes: {
          class: "blog-title",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-3 blog-orderedlist",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-3 blog-unorderedlist",
        },
      }),
      Highlight,
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "min-h-[200px] border rounded-md bg-black py-2 px-3",
      },
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="richtexteditor">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

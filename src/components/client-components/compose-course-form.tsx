"use client";

import { PostgrestError } from "@supabase/supabase-js";
import React, { useRef } from "react";
import { toast } from "sonner";

type ComposeTweetFormProps = {
  serverAction: any;
};

const ComposeCourseForm = ({ serverAction }: ComposeTweetFormProps) => {
  const resetRef = useRef<HTMLButtonElement>(null);

  const handleSubmitCourse = async (data: any) => {
    try {
      const res = await serverAction(data);
      if (res?.error) {
        return toast.error(res.error.message);
      }
      toast.success("Course sent successfully!");
      resetRef.current?.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={handleSubmitCourse} className="flex h-full w-full flex-col">
      <input
        type="text"
        name="tweet"
        className="h-full w-full border-b-[0.5px] border-none border-gray-600 bg-transparent p-4 text-2xl outline-none placeholder:text-gray-600"
        placeholder="What's happening?"
      />
      <div className="flex w-full items-center justify-between">
        <div></div>
        <div className="w-full max-w-[100px]">
          <button
            type="submit"
            className="bg-twitterColor w-full rounded-full px-4 py-2 text-center text-lg font-bold transition duration-200 hover:bg-opacity-70"
          >
            Course
          </button>
          <button ref={resetRef} className="invisible" type="reset"></button>
        </div>
      </div>
    </form>
  );
};

export default ComposeCourseForm;

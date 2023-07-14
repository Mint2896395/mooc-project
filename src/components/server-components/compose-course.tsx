// import React from "react";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies, headers } from "next/headers";
// import { randomUUID } from "crypto";
// import { SupabaseClient } from "@supabase/supabase-js";

// import { revalidatePath } from "next/cache";
// import ComposeCourseForm from "../client-components/compose-course-form";
// import { db } from "@/lib/db";
// import { courses } from "@/lib/db/schema";

// const ComposeCourse = () => {
//   async function submitCourse(formData: FormData) {
//     "use server";

//     const course = formData.get("course");

//     if (!course) return;

//     const supabaseClient = createServerComponentClient({
//       cookies,
//       headers,
//     });

//     const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
//     const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

//     if (!supabaseUrl || !supabaseSecretKey)
//       return { error: { message: "supabase credentials are not provided!" } };

//     const supabaseServer = new SupabaseClient(supabaseUrl, supabaseSecretKey);

//     const { data: userData, error: userError } =
//       await supabaseClient.auth.getUser();

//     if (userError) return;

//     let err = "";

//     const res = await db
//       .insert(courses)
//       .values({
//         text: course.toString(),
//         id: randomUUID(),
//         profileId: userData.user.id,
//       })
//       .returning()
//       .catch((error) => {
//         console.log(error);
//         err = "something wrong with server";
//       });

//     revalidatePath("/");

//     return { data: res, error: err };
//   }

//   return <ComposeCourseForm serverAction={submitCourse} />;
// };

// export default ComposeCourse;

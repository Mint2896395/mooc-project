// "use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { useEffect, useState } from "react";

// import type { Database } from "../../lib/supabase.types";

// type Profile = Database["public"]["Tables"]["profiles"]["Row"];

// export default function ClientPage() {
//   const [profiles, setProfiles] = useState<Profile[] | null>(null);
//   const supabase = createClientComponentClient<Database>();

//   useEffect(() => {
//     const getData = async () => {
//       const { data } = await supabase.from("profiles").select();
//       setProfiles(data);
//     };

//     getData();
//   }, []);

//   return profiles ? (
//     <pre>{JSON.stringify(profiles, null, 2)}</pre>
//   ) : (
//     <p>Loading profiles...</p>
//   );
// }

import { courses } from "@/lib/db/schema";
import React from "react";
import { db } from "@/lib/db";

const ClientPage = async ({ params }: { params: { id: string } }) => {

  const profile = await db.select().from(courses);
  console.log(profile);


  return profile ? (
    <pre>{JSON.stringify(profile, null, 2)}</pre>
  ) : (
    <p>Loading profiles...</p>
  );
};

export default ClientPage;

import { createClient } from "@/utils/supabase/client";

import {redirect} from "next/navigation";

export default async function ProtectedPage() {
    const supabase =  createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/sign-in");
    }





    return (
        <div>s</div>
    );
}




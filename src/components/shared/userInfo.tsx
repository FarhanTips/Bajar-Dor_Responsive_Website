"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const UserInfo = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();
    console.log(session);

    if (isPending) {
        return (
            <div className="ml-auto">
                Loading
            </div>
        );
    }

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("সাইন আউট সফল হয়েছে!");
                    router.push("/sign-in"); // redirect to login page. // Client-side event handler থেকে navigate করছি, তাই router.push ব্যবহার করেছি।
                },
            },
        });
    };
    return (
        <div >
            {
                session?.user ?
                    <div className='flex items-center justify-end gap-2'>
                        <p className='font-semibold'>Welcome! <Link href="/profile" className='text-red-700 border border-gray-300 rounded hover:border-red-700 px-2 py-1'>{session.user?.name}</Link></p>
                        <Button onClick={handleSignOut} className="px-3.5 py-1.5 rounded-sm bg-white text-black border border-gray-300 hover:bg-[#047F39] hover:text-white">সাইন আউট</Button>
                    </div>
                    :
                    <div className='flex items-center justify-end gap-2'>
                        <Link
                            href="/sign-in"
                            className="px-4 py-2 rounded-md border border-gray-300 hover:text-[#047F39] border-none"
                        >
                            সাইন ইন
                        </Link>
                        <Link
                            href="/sign-up"
                            className="px-3.5 py-1.5 rounded-md bg-[#047F39] text-white active:scale-95 hover:bg-[#036b30]"
                        >
                            সাইন আপ
                        </Link>
                    </div>
            }
        </div>
    );
};

export default UserInfo;
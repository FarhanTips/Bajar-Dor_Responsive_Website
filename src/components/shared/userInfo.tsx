"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Label } from "@heroui/react";
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
                Loading...
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
        <div className="w-full min-w-0">
            {session?.user ? (
                <div>
                    <Dropdown>
                        <Button className="flex max-w-full items-center gap-2 rounded-md border border-gray-300 bg-white px-3.5 py-2 text-xs font-semibold text-black sm:px-4 sm:text-base">
                            <span className="max-w-30 truncate sm:max-w-45 lg:max-w-none">
                                {session.user?.name}
                            </span>
                            <span className="shrink-0 text-[8px] sm:text-[10px]">▼</span>
                        </Button>

                        <Dropdown.Popover>
                            <Dropdown.Menu
                                onAction={(key) => {
                                    if (key === "প্রোফাইল") {
                                        router.push("/profile");
                                    }

                                    if (key === "সাইন আউট") {
                                        handleSignOut();
                                    }
                                }}
                            >
                                <Dropdown.Item id="ইমেইল" textValue="ইমেইল" className="cursor-default hover:bg-transparent">
                                    <Label className="text-[10px] sm:text-sm">
                                        <p>{session.user?.name}</p>
                                        <p className="text-[8px] sm:text-xs text-gray-400">{session.user?.email}</p>
                                    </Label>
                                </Dropdown.Item>


                                <Dropdown.Item id="প্রোফাইল" textValue="প্রোফাইল">
                                    <Label className="text-[10px] sm:text-sm">আমার প্রোফাইল</Label>
                                </Dropdown.Item>

                                <Dropdown.Item
                                    id="সাইন আউট"
                                    textValue="সাইন আউট"
                                    variant="danger"
                                >
                                    <Label className="text-[10px] sm:text-sm text-red-700">↩︎ সাইন আউট</Label>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>
            ) : (
                <div className="flex items-center justify-end gap-1.5 sm:gap-2">
                    <Link
                        href="/sign-in"
                        className="whitespace-nowrap rounded-md px-3 py-2 text-xs transition hover:text-[#047F39] sm:px-4 sm:text-base"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign-up"
                        className="whitespace-nowrap rounded-md bg-[#047F39] px-3 py-2 text-xs text-white transition hover:bg-[#036b30] active:scale-95 sm:px-4 sm:text-base"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;

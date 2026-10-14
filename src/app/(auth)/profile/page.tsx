
"use client"
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { SyntheticEvent } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const ProfilePage = () => {

        const router = useRouter();
    
        const { data: session, isPending } = authClient.useSession();
        console.log(session);
    
        if (isPending) {
            return (
                <div className="min-h-screen flex justify-center items-center">
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

    const handleUpdateButton = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user: Record<string, string> = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            user[key] = value.toString();
        });
        console.log("Data from form", user);

        const { data, error } = await authClient.updateUser({
            name: user.name,
        })
        console.log("After submission", data, error);
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("নাম সফলভাবে পরিবর্তন হয়েছে!");
    };

    return (
        <div className="bg-[#F0F5F0] flex flex-col items-center justify-center px-4 pt-16 pb-30">


            <div className="w-full max-w-md rounded-2xl">
                <p className="font-bold text-lg mb-6">আমার প্রোফাইল</p>

                <h1 className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-4 shadow-lg shadow-gray-200/50 sm:rounded-2xl sm:p-6 md:p-4 flex justify-between items-center mb-6">
                    <div>
                        <p className="text-lg font-bold">{session?.user?.name}</p>
                        <p className="text-sm text-gray-500">{session?.user?.email}</p>
                    </div>
                    <Button onClick={handleSignOut} className="bg-white border hover:bg-red-600 border-red-700 p-4 text-red-700 hover:text-white rounded-lg font-semibold text-xs">↩︎ সাইন আউট</Button>
                </h1>


                <div className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-4 shadow-lg shadow-gray-200/50 sm:rounded-2xl sm:p-6 md:p-7 lg:p-8">
                    <Form className="flex w-full flex-col gap-5 " onSubmit={handleUpdateButton} >
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "নামে অন্তত ৩টি অক্ষর থাকতে হবে";
                                }
                                return null;
                            }}
                        >
                            <Label>নতুন নাম</Label>
                            <Input className="border border-gray-300 rounded-sm" placeholder="আপনার নাম" />
                            <FieldError />
                        </TextField>
                        <div className="flex gap-2 pt-2">

                            <Button
                                type="submit"
                                className="w-full rounded-lg bg-[#047F39] py-3 text-sm font-semibold text-white shadow-md shadow-red-700/20 transition-colors"
                            >
                                সাবমিট করুন
                            </Button>

                        </div>
                    </Form>
                </div>


            </div>
            <div></div>


        </div>
    );
};

export default ProfilePage;

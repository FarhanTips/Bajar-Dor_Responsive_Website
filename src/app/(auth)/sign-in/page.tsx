

"use client";
import type { SyntheticEvent } from "react";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";



export default function SignUpPage() {

    const router = useRouter();

    const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user: Record<string, string> = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            user[key] = value.toString();
        });
        console.log("Data from form", user);

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            // callbackURL: "/"  // Callback redirect করলে page navigation-এর কারণে toast একদম অল্প সময়ের জন্য দেখা যায়, তাই toast.success-এর পর router.push() দিয়ে redirect করছি।
        });

        console.log("After form submission", data, error);
        if (error) {
            toast.error(error.message);
            return;
        }
        toast.success("সাইন ইন সফল হয়েছে!");
        router.push("/"); // Client-side event handler থেকে navigate করছি, তাই router.push ব্যবহার করেছি।
    };

    const handleGoogleSignIn = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
            // errorCallbackURL: "/sign-in",
        });

        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-[#F0F5F0] px-4 py-10">
            {/* Heading */}
            <div className="mb-8 text-center">


                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    সাইন ইন
                </h1>

                <p className="text-sm leading-6 text-gray-500">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>
            <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-8">



                {/* Sign In Form */}
                <Form
                    className="flex w-full flex-col gap-5"
                    onSubmit={onSubmit}
                >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "অনুগ্রহ করে সঠিক ইমেইল ঠিকানা লিখুন";
                            }

                            return null;
                        }}
                    >
                        <Label className="mb-2 block text-sm font-semibold text-gray-700">
                            ইমেইল
                        </Label>

                        <Input
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#047F39] focus:bg-white focus:ring-4 focus:ring-[#047F39]/10"
                            placeholder="আপনার ইমেইল লিখুন"
                        />

                        <FieldError className="mt-1 text-sm text-red-600" />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "কমপক্ষে ৩টি অক্ষর লিখুন";
                            }

                            return null;
                        }}
                    >
                        <Label className="mb-2 block text-sm font-semibold text-gray-700">
                            পাসওয়ার্ড
                        </Label>

                        <Input
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#047F39] focus:bg-white focus:ring-4 focus:ring-[#047F39]/10"
                            placeholder="আপনার পাসওয়ার্ড লিখুন"
                        />

                        <FieldError className="mt-1 text-sm text-red-600" />
                    </TextField>

                    <Button
                        type="submit"
                        className="text-sm w-full rounded-lg bg-[#047F39] py-3 font-semibold text-white shadow-md shadow-red-700/20 transition-colors"
                    >
                        সাইন ইন করুন
                    </Button>
                </Form>



                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs font-medium text-gray-400">
                        অথবা
                    </span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Google Sign In */}
                <Button
                    onClick={handleGoogleSignIn}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-[#047F39]/40 hover:bg-[#047F39]/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#047F39]/10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        className="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path
                            fill="#EA4335"
                            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
                        />
                        <path
                            fill="#4285F4"
                            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.99 46.98 31.85 46.98 24.55Z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.88.93 7.56 2.56 10.78l7.97-6.19Z"
                        />
                        <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
                        />
                    </svg>

                    Google দিয়ে সাইন ইন করুন
                </Button>

                {/* Sign Up Link */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link
                        href="/sign-up"
                        className="font-semibold text-[#047F39] transition-colors hover:text-[#035c2a] hover:underline"
                    >
                        সাইন আপ করুন
                    </Link>
                </div>
            </div>
            <Link href="/" className="mt-6 text-center text-xs text-gray-400">
                ⬅︎ হোম পেজে ফিরে যান
            </Link>
        </div>
    );
}

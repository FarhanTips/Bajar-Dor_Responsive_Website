"use client";

import type { SyntheticEvent } from "react";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function SignUpPage() {
    const router = useRouter();

    const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user: Record<string, string> = {};

        formData.forEach((value, key) => {
            user[key] = value.toString();
        });

        const { error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
        router.push("/sign-in");
    };

    const handleGoogleSignUp = async () => {
        const { error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
            errorCallbackURL: "/sign-up",
        });
        console.log("Cgheck rror", error);
        if (error) {
            toast.error(error.message);
        }
    };

    return (
        <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-[#F0F5F0] px-4 py-12">
            {/* Page Header */}
            <header className="mb-8 w-full max-w-md text-center">
                <h1 className="mb-2 text-2xl font-bold tracking-tight">
                    অ্যাকাউন্ট তৈরি করুন
                </h1>

                <p className="text-sm leading-6 text-gray-500">
                    বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                </p>
            </header>

            {/* Sign Up Card */}
            <section className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-8">
                <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.trim().length < 3) {
                                return "নামে অন্তত ৩টি অক্ষর থাকতে হবে";
                            }
                            return null;
                        }}
                    >
                        <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                            আপনার নাম
                        </Label>

                        <Input
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#047F39] focus:ring-2 focus:ring-[#047F39]/15"
                            placeholder="আপনার নাম লিখুন"
                            autoComplete="name"
                        />

                        <FieldError />
                    </TextField>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "অনুগ্রহ করে সঠিক ইমেইল ঠিকানা লিখুন";
                            }
                            return null;
                        }}
                    >
                        <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                            ইমেইল
                        </Label>

                        <Input
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#047F39] focus:ring-2 focus:ring-[#047F39]/15"
                            placeholder="you@example.com"
                            autoComplete="email"
                        />

                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        minLength={8}
                        validate={(value) => {
                            if (value.length < 8) {
                                return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                            }

                            if (!/[A-Z]/.test(value)) {
                                return "অন্তত ১টি বড় হাতের ইংরেজি অক্ষর দিন";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "অন্তত ১টি সংখ্যা দিন";
                            }

                            return null;
                        }}
                    >
                        <Label className="mb-1.5 block text-sm font-medium text-gray-700">
                            পাসওয়ার্ড
                        </Label>

                        <Input
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#047F39] focus:ring-2 focus:ring-[#047F39]/15"
                            placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন"
                        />

                        <Description className="mt-1.5 text-xs leading-5 text-gray-500">
                            কমপক্ষে ৮ অক্ষর, ১টি বড় হাতের অক্ষর এবং ১টি সংখ্যা থাকতে হবে।
                        </Description>

                        <FieldError />
                    </TextField>

                    {/* Email Sign Up */}
                    <Button
                        type="submit"
                        className="text-sm w-full rounded-lg bg-[#047F39] py-3 font-semibold text-white shadow-md shadow-red-700/20 transition-colors"
                    >
                        অ্যাকাউন্ট তৈরি করুন
                    </Button>
                </Form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-xs text-gray-400">অথবা</span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Google Sign Up */}
                <Button
                    type="button"
                    onPress={handleGoogleSignUp}
                    className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047F39] focus-visible:ring-offset-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            fill="#4285F4"
                            d="M43.6 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11a9.4 9.4 0 0 1-4.1 6.2v5.2h6.7c3.9-3.6 6-9 6-15.4Z"
                        />
                        <path
                            fill="#34A853"
                            d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.7-5.2c-1.8 1.2-4 2-6.8 2-5.2 0-9.6-3.5-11.2-8.2H5.9v5.3A20 20 0 0 0 24 44Z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M12.8 27.7a12 12 0 0 1 0-7.4V15H5.9a20 20 0 0 0 0 18l6.9-5.3Z"
                        />
                        <path
                            fill="#EA4335"
                            d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4A20 20 0 0 0 5.9 15l6.9 5.3c1.6-4.7 6-8.2 11.2-8.2Z"
                        />
                    </svg>

                    Google দিয়ে সাইন আপ করুন
                </Button>

                {/* Sign In Link */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    অ্যাকাউন্ট আছে?{" "}
                    <Link
                        href="/sign-in"
                        className="font-semibold text-[#047F39] transition-colors hover:text-[#035c2a] hover:underline"
                    >
                        সাইন ইন করুন
                    </Link>
                </div>
            </section>

            {/* Back to Home */}
            <Link href="/" className="mt-6 text-center text-xs text-gray-400">
                ⬅︎ হোম পেজে ফিরে যান
            </Link>
        </main>
    );
}
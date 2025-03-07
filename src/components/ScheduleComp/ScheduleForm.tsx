import React, { useEffect, useState } from 'react'

const ScheduleForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [date, setDate] = useState<Date | undefined>();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        date: undefined as Date | undefined, // Add date to formData
        preferredTime: "",
    });
    // Update formData when date changes
    useEffect(() => {
        setFormData((prev) => ({ ...prev, date }));
    }, [date]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };
    console.log(formData)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { id, checked } = e.target;
    //     setFormData((prev) => ({ ...prev, [id]: checked }));
    // };

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            {/* Form Section */}
            <section className="py-8 md:py-12">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl">
                        {!submitted ? (
                            <form onSubmit={submitForm} className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800 md:p-8">
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-2">Basic Information</h2>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Please provide your contact details and preferred consultation time.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Full Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Phone number (optional)
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Enter your phone number"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Company (optional)
                                            </label>
                                            <input
                                                id="company"
                                                type="text"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                placeholder="Enter your company name"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <h2 className="text-2xl font-bold mb-2">Consultation Date</h2>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            Select a date and time that works for you.
                                        </p>

                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Select a date
                                                </label>
                                                <input
                                                    type="date"
                                                    value={date ? date.toISOString().split("T")[0] : ""}
                                                    // value={formData.date}
                                                    onChange={(e) => setDate(new Date(e.target.value))}
                                                    min={new Date().toISOString().split("T")[0]}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Preferred time
                                                </label>
                                                <select
                                                    id="preferredTime"
                                                    value={formData.preferredTime}
                                                    onChange={handleSelectChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                    required
                                                >
                                                    <option value="">Select a time</option>
                                                    <option value="9am">9:00 AM</option>
                                                    <option value="10am">10:00 AM</option>
                                                    <option value="11am">11:00 AM</option>
                                                    <option value="1pm">1:00 PM</option>
                                                    <option value="2pm">2:00 PM</option>
                                                    <option value="3pm">3:00 PM</option>
                                                    <option value="4pm">4:00 PM</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-950/30">
                                        <div className="flex items-start gap-3">
                                            <div>
                                                <h3 className="font-medium text-gray-900 dark:text-indigo-300">Consultation Details</h3>
                                                <p className="text-sm text-gray-700 dark:text-gray-400">
                                                    Your consultation will be a 30-minute video call with one of our experts. You'll receive a
                                                    confirmation email with the meeting link after submitting this form.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="space-y-4">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                id="agreeToTerms"
                                                type="checkbox"
                                                checked={formData.agreeToTerms}
                                                onChange={handleCheckboxChange}
                                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900"
                                            />
                                            <label htmlFor="agreeToTerms" className="text-sm text-gray-600 dark:text-gray-400">
                                                I agree to the{" "}
                                                <a href="#" className="text-indigo-600 hover:underline dark:text-indigo-400">
                                                    terms and conditions
                                                </a>{" "}
                                                and{" "}
                                                <a href="#" className="text-indigo-600 hover:underline dark:text-indigo-400">
                                                    privacy policy
                                                </a>
                                            </label>
                                        </div>
                                    </div> */}

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            disabled={
                                                !date ||
                                                !formData.preferredTime ||
                                                !formData.name ||
                                                !formData.email
                                            }
                                            className="bg-gradient-to-r from-[#01151f] via-black to-[#01151f] hover:from-emerald-800 hover:to-emerald-900 cursor-pointer text-white px-6 py-2 rounded-md"
                                        >
                                            Schedule Consultation
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800 md:p-8 space-y-6 text-center">
                                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                                    <span className="text-green-600 dark:text-green-400">✓</span>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Consultation Scheduled!</h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Thank you for scheduling a consultation with us. We've sent a confirmation email to{" "}
                                        <span className="font-medium text-indigo-600 dark:text-indigo-400">{formData.email}</span> with
                                        all the details.
                                    </p>
                                </div>

                                <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
                                    <h3 className="text-lg font-medium mb-4">Your Consultation Details</h3>
                                    <div className="space-y-3 text-left">
                                        <div className="flex justify-between border-b border-gray-100 pb-2 dark:border-gray-800">
                                            <span className="text-gray-500 dark:text-gray-400">Name:</span>
                                            <span className="font-medium">{formData.name}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-100 pb-2 dark:border-gray-800">
                                            <span className="text-gray-500 dark:text-gray-400">Date:</span>
                                            <span className="font-medium">{date ? date.toLocaleDateString() : "Not selected"}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-100 pb-2 dark:border-gray-800">
                                            <span className="text-gray-500 dark:text-gray-400">Time:</span>
                                            <span className="font-medium">{formData.preferredTime}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({
                                                name: "",
                                                email: "",
                                                phone: "",
                                                company: "",
                                                date: undefined as Date | undefined, // Add date to formData
                                                preferredTime: "",
                                            });
                                            setDate(undefined);
                                        }}
                                        className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 dark:border-gray-700 dark:text-gray-300 cursor-pointer"
                                    >
                                        Schedule Another Consultation
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ScheduleForm

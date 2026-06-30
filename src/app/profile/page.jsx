'use client';
 
import { Button, Input } from '@heroui/react';
import Image from 'next/image';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Camera,
    Shield,
    BookOpen,
    Award,
    Edit3,
} from 'lucide-react';

const ProfilePage = () => {
    return (
         <div className="min-h-[80vh] bg-slate-50 py-10 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Cover + Avatar */}
                <div className="relative bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400 relative">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
                    </div>
 
                    <div className="px-10 pb-10">
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 gap-4">
                            <div className="flex items-end gap-5">
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-3xl border-4 border-white shadow-xl overflow-hidden bg-slate-200">
                                        <Image
                                            src="https://i.pravatar.cc/200"
                                            alt="Profile"
                                            width={128}
                                            height={128}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <button className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                                        <Camera className="w-4 h-4" />
                                    </button>
                                </div>
 
                                <div className="pb-2">
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                                        Pervez
                                    </h2>
                                    <p className="text-slate-500 font-medium">
                                        Full-Stack Developer
                                    </p>
                                </div>
                            </div>
 
                            <Button
                                color="primary"
                                className="h-12 px-6 font-bold rounded-2xl shadow-lg shadow-blue-600/20 gap-2"
                            >
                                <Edit3 className="w-4 h-4" />
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                </div>
 
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        { icon: BookOpen, label: 'Enrolled Courses', value: '12' },
                        { icon: Award, label: 'Certificates', value: '5' },
                        { icon: Shield, label: 'Account Status', value: 'Verified' },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl flex items-center gap-4"
                        >
                            <div className="bg-blue-600/10 text-blue-600 p-3 rounded-2xl">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">{stat.label}</p>
                                <p className="text-xl font-black text-slate-900">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
 
                {/* Personal Info Form */}
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl space-y-8">
                    <div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight">
                            Personal Information
                        </h3>
                        <p className="text-slate-500 font-medium text-sm">
                            Update your personal details here
                        </p>
                    </div>
 
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">
                                Full Name
                            </label>
                            <Input
                                defaultValue="Pervez"
                                startContent={<User className="w-5 h-5 text-slate-400" />}
                                className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                            />
                        </div>
 
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">
                                Email Address
                            </label>
                            <Input
                                defaultValue="pervez@example.com"
                                type="email"
                                startContent={<Mail className="w-5 h-5 text-slate-400" />}
                                className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                            />
                        </div>
 
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">
                                Phone Number
                            </label>
                            <Input
                                defaultValue="+880 1XXXXXXXXX"
                                type="tel"
                                startContent={<Phone className="w-5 h-5 text-slate-400" />}
                                className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                            />
                        </div>
 
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1">
                                Location
                            </label>
                            <Input
                                defaultValue="Dhaka, Bangladesh"
                                startContent={<MapPin className="w-5 h-5 text-slate-400" />}
                                className="border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 transition-all duration-300 h-14 bg-white w-full rounded-2xl"
                            />
                        </div>
                    </div>
 
                    <div className="flex justify-end gap-3 pt-2">
                        <Button
                            variant="bordered"
                            className="h-12 px-6 font-bold rounded-2xl border-slate-200"
                        >
                            Cancel
                        </Button>
                        <Button
                            color="primary"
                            className="h-12 px-8 font-black rounded-2xl shadow-xl shadow-blue-600/20"
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
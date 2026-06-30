'use client';
 
import Image from 'next/image';

const ProfilePage = () => {
    return (
       
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
            <div className="flex flex-col items-center">
                <Image
                    src="https://i.pravatar.cc/150"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-bold">Pervez Hossain</h2>
                <p className="text-gray-500">Full-Stack Developer</p>
            </div>

            <div className="mt-6 space-y-3">
                <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">pervez@example.com</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">+880 1XXXXXXXXX</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Dhaka, Bangladesh</p>
                </div>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
                Edit Profile
            </button>
        </div>
    );
};

export default ProfilePage;
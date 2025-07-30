// src/app/signin/page.js
'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SignInPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status]);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      username: e.target.username.value,
      password: e.target.password.value,
    });

    if (!res.ok) {
      setError('Invalid username or password');
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50">
      <div className="flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
        >
          <h1 className="text-center text-3xl font-serif text-amber-600 mb-4">
            Across Pages
          </h1>
          <h2 className="text-2xl font-bold text-slate-800">Sign In</h2>

          <input
            name="username"
            placeholder="Username"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
          >
            Sign In
          </button>
          {error && <p className="text-red-600">{error}</p>}

          <div className="flex justify-between text-sm text-slate-600 mt-2">
            <a href="/signup" className="hover:underline">
              Don’t have an account? Sign up
            </a>
            <a href="/forgot-password" className="hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
      </div>

      <div className="text-center py-4 text-sm text-gray-500">
        © Ailaysa Technologies Pvt Ltd
      </div>
    </div>
  );
}

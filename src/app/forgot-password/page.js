'use client';

import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;

    const res = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setMessage('Password reset instructions sent to your email.');
      setError('');
    } else {
      setError('Failed to send reset instructions. Try again.');
      setMessage('');
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
          <h2 className="text-2xl font-bold text-slate-800">Forgot Password?</h2>

          <p className="text-sm text-slate-600">
            Enter your registered email address and we’ll send you reset instructions.
          </p>

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
          >
            Send Reset Link
          </button>

          {message && <p className="text-green-600 text-sm">{message}</p>}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex justify-between text-sm text-slate-600 mt-2">
            <a href="/signin" className="hover:underline">
              Back to Sign In
            </a>
            <a href="/signup" className="hover:underline">
              Create new account
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

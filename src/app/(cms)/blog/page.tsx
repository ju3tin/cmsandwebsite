'use client'
import { Metadata } from "next";
import React from "react";
export const revalidate = 300

export default async function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-semibold mb-8">Blog</h1>

      {/* Replace with Supabase fetch */}
      <div className="space-y-6">
        <div className="border p-6 rounded-md">
          <h2 className="text-xl font-medium">Example Post</h2>
          <p className="text-gray-600 mt-2">
            This is a placeholder blog post.
          </p>
        </div>
      </div>
    </main>
  )
}

"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-white/10",
        className
      )}
    />
  );
}

// Card Skeleton
export function CardSkeleton() {
  return (
    <div className="glass rounded-2xl p-6 h-full">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton className="w-12 h-12 rounded-xl" />
        <div className="flex-1">
          <Skeleton className="w-32 h-5 mb-2" />
          <Skeleton className="w-20 h-3" />
        </div>
      </div>
      <Skeleton className="w-full h-4 mb-2" />
      <Skeleton className="w-3/4 h-4 mb-4" />
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton className="w-16 h-6 rounded-full" />
        <Skeleton className="w-20 h-6 rounded-full" />
        <Skeleton className="w-14 h-6 rounded-full" />
      </div>
      <Skeleton className="w-full h-px my-4" />
      <div className="flex items-center gap-4">
        <Skeleton className="w-16 h-4" />
        <Skeleton className="w-16 h-4" />
      </div>
    </div>
  );
}

// Projects Grid Skeleton
export function ProjectsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

// Text Skeleton
export function TextSkeleton({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

// Hero Skeleton
export function HeroSkeleton() {
  return (
    <div className="w-full py-32">
      <div className="max-w-4xl mx-auto text-center">
        <Skeleton className="w-32 h-4 mx-auto mb-4" />
        <Skeleton className="w-96 h-16 mx-auto mb-6" />
        <Skeleton className="w-64 h-6 mx-auto" />
      </div>
    </div>
  );
}

// Skill Card Skeleton
export function SkillCardSkeleton() {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Skeleton className="w-12 h-12 rounded-xl" />
        <div>
          <Skeleton className="w-32 h-6 mb-2" />
          <Skeleton className="w-20 h-4" />
        </div>
      </div>
      <Skeleton className="w-full h-4 mb-6" />
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <Skeleton className="w-24 h-4" />
              <Skeleton className="w-10 h-4" />
            </div>
            <Skeleton className="w-full h-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Skills Grid Skeleton
export function SkillsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkillCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Testimonial Skeleton
export function TestimonialSkeleton() {
  return (
    <div className="glass rounded-3xl p-8 sm:p-12">
      <div className="text-center">
        <Skeleton className="w-20 h-20 mx-auto mb-8 rounded-full" />
        <div className="flex items-center justify-center gap-1 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="w-6 h-6" />
          ))}
        </div>
        <div className="max-w-4xl mx-auto mb-12">
          <Skeleton className="w-full h-8 mb-4" />
          <Skeleton className="w-3/4 h-8 mx-auto" />
        </div>
        <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-full" />
        <Skeleton className="w-32 h-6 mx-auto mb-2" />
        <Skeleton className="w-48 h-4 mx-auto" />
      </div>
    </div>
  );
}

// Journey Timeline Skeleton
export function TimelineSkeleton() {
  return (
    <div className="space-y-12">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-8">
          <div className="hidden md:block md:w-1/2" />
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
            <Skeleton className="w-16 h-16 rounded-full" />
          </div>
          <div className="ml-24 md:ml-0 md:w-1/2">
            <div className="glass rounded-2xl p-6">
              <Skeleton className="w-24 h-6 mb-2" />
              <Skeleton className="w-48 h-8 mb-4" />
              <Skeleton className="w-full h-4 mb-2" />
              <Skeleton className="w-3/4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Contact Form Skeleton
export function ContactFormSkeleton() {
  return (
    <div className="glass rounded-3xl p-8">
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <Skeleton className="w-full h-14" />
        <Skeleton className="w-full h-14" />
      </div>
      <Skeleton className="w-full h-14 mb-6" />
      <Skeleton className="w-full h-40 mb-6" />
      <Skeleton className="w-full h-14" />
    </div>
  );
}

// Stats Skeleton
export function StatsSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="glass rounded-2xl p-6 text-center">
          <Skeleton className="w-16 h-10 mx-auto mb-2" />
          <Skeleton className="w-24 h-4 mx-auto" />
        </div>
      ))}
    </div>
  );
}

// Image Skeleton
export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <Skeleton className={cn("w-full h-full", className)} />
  );
}

// Button Skeleton
export function ButtonSkeleton({ className }: { className?: string }) {
  return (
    <Skeleton className={cn("h-12 w-32 rounded-full", className)} />
  );
}

// Avatar Skeleton
export function AvatarSkeleton({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };
  
  return (
    <Skeleton className={cn("rounded-full", sizes[size])} />
  );
}

// Header Skeleton
export function HeaderSkeleton() {
  return (
    <div className="w-full py-5">
      <div className="flex items-center justify-between">
        <Skeleton className="w-12 h-8" />
        <div className="hidden lg:flex items-center gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="w-16 h-8" />
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-24 h-10 rounded-full" />
        </div>
        <Skeleton className="w-10 h-10 lg:hidden" />
      </div>
    </div>
  );
}

"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, Image, MessageSquare, Music, Video } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";


const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation'
  },
  {
    label: "Image Generation",
    icon: Image,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    href: '/image'
  },
  {
    label: "Video Generation",
    icon: Video,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    href: '/video'
  },
  {
    label: "Audio Generation",
    icon: Music,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '/music'
  },
  {
    label: "Code Generation",
    icon: Code,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    href: '/code'
  },
]

const DashboardPage = () => {
  const user = useUser();
  console.log(user);
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">Explore The Power of AI</h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">Chat with smartest AI - Experience The Power OF AI</p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {
          tools.map((tool) => (
            <Card 
            onClick={() => router.push(tool.href)}
            key={tool.href}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default DashboardPage;

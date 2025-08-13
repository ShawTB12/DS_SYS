"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeItem, setActiveItem] = useState("dashboard")

  const menuItems = [
    { id: "dashboard", label: "ダッシュボード", icon: "📊" },
    { id: "inventory", label: "在庫管理SYS", icon: "📦" },
    { id: "alerts", label: "在庫アラート一覧", icon: "⚠️" },
    { id: "sales", label: "売上推移", icon: "📈" },
    { id: "settings", label: "Setting", icon: "⚙️" },
    { id: "account", label: "アカウント追加", icon: "👤" },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold text-foreground">DRESSKIN</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeItem === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 text-left",
                activeItem === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
              )}
              onClick={() => setActiveItem(item.id)}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
    </div>
  )
}

import { Navbar } from "@/components/custom/Navbar";
import { Button } from "@/components/ui/button";
import { Code2, Copy, Lock, Share2, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
            Share code snippets with your team
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Share Code
            <br />
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Instantly
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A secure, simple code snippet sharing platform built for your team. Save, organize, and collaborate on code
            without leaving your workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-base font-medium">
              Start Sharing
            </Button>
            <Button
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800/50 h-12 px-8 text-base font-medium bg-transparent"
            >
              View Demo
            </Button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="mt-16 rounded-xl border border-slate-700/50 bg-slate-900/50 p-8 backdrop-blur-sm">
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm text-slate-400 space-y-1">
                <div>
                  {"<"}
                  <span className="text-blue-400">function</span> shareCode{"{"}
                  {">"}
                </div>
                <div className="ml-4">{"// Your code here..."}</div>
                <div>
                  {"<"}/{"{"}
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
          <p className="text-slate-400">Designed specifically for developers and engineering teams</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-8 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
              <Share2 className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Instant Sharing</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Generate shareable links in seconds. Perfect for code reviews and team collaboration.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-8 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
              <Lock className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Private & Secure</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Only accessible to team members. Your code stays private and protected.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-8 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500/30 transition-colors">
              <Zap className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Optimized performance with syntax highlighting and instant search.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-8 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
              <Users className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Team Collaboration</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Organize snippets in collections and share with your entire team.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-8 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors">
              <Copy className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Easy Copy</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              One-click copy with syntax highlighting for multiple languages.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/30 p-8 hover:bg-slate-900/50 hover:border-slate-600/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
              <Code2 className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">All Languages</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Support for all major programming languages and markup formats.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 text-center">
        <div className="rounded-xl border border-slate-700/50 bg-linear-to-br from-slate-900/50 to-slate-800/30 p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to collaborate better?</h2>
          <p className="text-slate-400 mb-8 text-lg">Join your team on Root Code Snipper today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-12 text-base font-medium">
              Get Started Free
            </Button>
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 h-12 px-12 text-base font-medium bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-linear-to-br from-blue-500 to-cyan-500 rounded-md"></div>
            <span>Root Code Snipper © 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-slate-200 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

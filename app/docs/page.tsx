import CodeSnippetHighlighter from "@/components/custom/CodeSnippetHighlighter";
import { Navbar } from "@/components/custom/Navbar";
import { getUserLocale } from "@/config/locale";

const pythonCodeExample = `
class User:
    def __init__(self, username, role):
        self.username = username
        self.role = role

class RoleManager:
    role_hierarchy = {
        "super_admin": ["admin"],
        "admin": ["manager"],
        "manager": ["premium_user"],
        "premium_user": ["user"],
        "user": [],
    }

    permissions = {
        "super_admin": ["all:access"],
        "admin": ["user:delete", "product:delete"],
        "manager": ["product:create", "product:update"],
        "premium_user": ["product:view"],
        "user": ["profile:view"],
    }

    @classmethod
    def get_permissions(cls, role):
        perms = set(cls.permissions.get(role, []))
        for r in cls.role_hierarchy.get(role, []):
            perms.update(cls.get_permissions(r))
        return perms

# Example usage
alice = User("alice", "manager")
print(f"Alice's permissions: {RoleManager.get_permissions(alice.role)}")
`;

const phpCodeExample = `
<?php

class BlogPost {
    private string \$title;
    private string \$content;
    private string \$author;

    public function __construct(string \$title, string \$content, string \$author) {
        \$this->title = \$title;
        \$this->content = \$content;
        \$this->author = \$author;
    }

    public function summary(): string {
        return substr(\$this->content, 0, 100) . '...';
    }

    public function display() {
        echo "<h2>{\$this->title}</h2>";
        echo "<p>" . \$this->summary() . "</p>";
        echo "<small>by {\$this->author}</small>";
    }
}

// Example usage
\$post = new BlogPost("Hello World", "This is a sample blog post content that is very long...", "Alice");
\$post->display();
?>
`;

const javaCodeExample = `
public class Calculator {

    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public double divide(int a, int b) {
        if (b == 0) throw new IllegalArgumentException("Cannot divide by zero");
        return (double) a / b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Add: " + calc.add(5, 3));
        System.out.println("Divide: " + calc.divide(10, 2));
    }
}
`;

const goCodeExample = `
package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, world!")
}

func main() {
    http.HandleFunc("/", helloHandler)
    fmt.Println("Starting server on :8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        fmt.Println("Server failed:", err)
    }
}
`;

const code = `
export const RoleHierarchy: Record<string, string[]> = {
  super_admin: ['admin'],
  admin: ['manager'],
  manager: ['premium_user'],
  premium_user: ['user'],
  user: [],
} as const;

export const RoleBasedPermissions: Record<string, string[]> = {
  super_admin: [],
  admin: ['product:delete', 'user:delete'],
  manager: [
    'product:create',
    'product:update',
  ],
};
  `;

export default async function DocsPage() {
  const locale = await getUserLocale();

  return (
    <div className='min-h-screen bg-gray-900'>
      <Navbar locale={locale} />
      <div className=' p-4 space-y-4'>
        <CodeSnippetHighlighter lang='tsx' code={code} />

        <CodeSnippetHighlighter lang='python' code={pythonCodeExample} />

        <CodeSnippetHighlighter lang='php' code={phpCodeExample} />

        <CodeSnippetHighlighter lang='java' code={javaCodeExample} />

        <CodeSnippetHighlighter lang='go' code={goCodeExample} />
      </div>

      <footer className='border-t border-slate-800/50 py-8 px-6 md:px-12'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm'>
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 bg-linear-to-br from-blue-500 to-cyan-500 rounded-md'></div>
            <span>Root Code Snipper © 2026</span>
          </div>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-slate-200 transition-colors'>
              Privacy
            </a>
            <a href='#' className='hover:text-slate-200 transition-colors'>
              Terms
            </a>
            <a href='#' className='hover:text-slate-200 transition-colors'>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

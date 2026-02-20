import { Header } from "@/components/organisms/Header";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      <Header />
      <main className="max-w-4xl mx-auto px-6 pt-20">{children}</main>
      <footer className="max-w-4xl mx-auto px-6 py-8 mt-24 border-t border-neutral-100 dark:border-neutral-800">
        <p className="text-xs text-neutral-400 dark:text-neutral-500 font-mono text-center">
          Built with Next.js · ISTJ · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

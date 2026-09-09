import { Header } from "@/components/header";
export function LegalPage({ title, updated, children }: { title:string; updated:string; children:React.ReactNode }) {
  return <main id="top" className="site-shell min-h-screen"><Header/><article className="legal-prose mx-auto max-w-3xl px-6 pb-24 pt-32 sm:pt-40"><p className="section-kicker">Seller Studio</p><h1>{title}</h1><p className="legal-updated">Last updated: {updated}</p>{children}<p className="mt-12"><a href="/">← Back to Seller Studio</a></p></article></main>;
}

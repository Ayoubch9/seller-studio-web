import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Etsy Disclaimer", alternates: { canonical: "/etsy-disclaimer" } };
export default function Page(){return <LegalPage title="Etsy Disclaimer" updated="September 9, 2026"><p>The term “Etsy” is a trademark of Etsy, Inc. Seller Studio is an independent product. This application uses the Etsy API but is not endorsed or certified by Etsy, Inc.</p><h2>Marketplace information</h2><p>References to Etsy, marketplace fees and seller data are used to explain Seller Studio functionality and integrations. Etsy controls its own services, policies, fees and API availability, which may change independently of Seller Studio.</p></LegalPage>}

/**
 * SchemaScript Component
 * Renders JSON-LD structured data as a <script> tag
 * Used for schema.org SEO markup (TravelAgency, TouristTrip, FAQPage, etc.)
 */

interface SchemaScriptProps {
    schema: Record<string, any>;
}

export default function SchemaScript({ schema }: SchemaScriptProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
            suppressHydrationWarning
        />
    );
}

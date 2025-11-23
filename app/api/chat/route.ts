import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { COMPANY_DATA } from '@/lib/ai-data';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
   try {
      // Check if API key is set
      if (!process.env.OPENAI_API_KEY) {
         const loadedKeys = Object.keys(process.env).filter(key => key.includes("OPEN") || key.includes("KEY")).join(", ")
         console.error("OPENAI_API_KEY missing. Loaded keys:", loadedKeys)

         return new Response(
            JSON.stringify({
               error: "OpenAI API key is not configured.",
               details: "Please check .env.local",
               loadedEnvKeys: loadedKeys
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
         )
      }

      const { messages } = await req.json();

      const systemPrompt = `You are a helpful AI assistant for ${COMPANY_DATA.name}, a freelance web design and development agency. Your role is to help potential clients learn about our services, pricing, and portfolio.

**About Us:**
We help small businesses grow with custom, high-converting websites. We specialize in modern web design, e-commerce solutions, and ongoing website maintenance.

**Services & Pricing:**
${COMPANY_DATA.services.map(s => `
${s.name} (${s.price})${s.tag ? ` [${s.tag}]` : ''}
- Ideal for: ${s.idealFor}
- Features:
${s.features.map(f => `  - ${f}`).join('\n')}
`).join('\n')}

**Our Process:**
${COMPANY_DATA.process.map(p => `${p.step}. ${p.name}: ${p.description}`).join('\n')}

**Timeline & Terms:**
- Timeline: ${COMPANY_DATA.faq.find(f => f.q.includes("How long"))?.a}
- Payment: ${COMPANY_DATA.faq.find(f => f.q.includes("payment"))?.a}

**Portfolio Highlights:**
${COMPANY_DATA.portfolio.map(p => `- ${p.link ? `[${p.name}](${p.link})` : p.name} (${p.type}): ${p.result}`).join('\n')}

**Contact Information:**
- Email: ${COMPANY_DATA.contact.email}
- Phone: ${COMPANY_DATA.contact.phone}
- Location: ${COMPANY_DATA.contact.location}
- Availability: ${COMPANY_DATA.contact.availability}

**Key Benefits:**
- Custom designs tailored to your brand
- Mobile-first, responsive development
- SEO optimization included
- User-friendly CMS for easy updates
- Ongoing support available
- Fast, secure, and modern technology stack

**Response Style:**
- Use **Bold** for package names, pricing, and key terms.
- Use bullet points for lists of features or steps.
- Keep paragraphs short and easy to read.
- Use > for important notes or highlights.
- Do not use code blocks for text.

You are a helpful, friendly, and professional sales assistant. Your goal is to qualify leads and guide them towards booking a consultation or choosing a package. Always be polite and concise.
Be friendly, professional, and helpful. If someone asks about pricing, guide them to the package that best fits their needs. If they want to get started, direct them to contact us via email or phone. Always be honest about timelines and capabilities.`

      const result = streamText({
         model: openai('gpt-4o-mini'),
         system: systemPrompt,
         messages,
      });

      return result.toTextStreamResponse();
   } catch (error) {
      console.error("Chat API Error:", error)
      return new Response(
         JSON.stringify({ error: error instanceof Error ? error.message : "An error occurred" }),
         { status: 500, headers: { "Content-Type": "application/json" } }
      )
   }
}

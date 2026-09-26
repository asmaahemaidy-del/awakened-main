import { z } from "zod";

export const schemas = {
  pages: {
    organizations: z.object({
      FAQ: z.array(
        z.object({
          id: z.string(),
          en: z.object({
            q: z.string(),
            a: z.string(),
          }),
          ar: z.object({
            q: z.string(),
            a: z.string(),
          }),
        }),
      ),
      OFFERINGS: z.array(
        z.object({
          id: z.string(),
          icon: z.string(),
          en: z.object({
            title: z.string(),
            desc: z.string(),
          }),
          ar: z.object({
            title: z.string(),
            desc: z.string(),
          }),
        }),
      ),
    }),
    individuals: z.object({
      PATHWAYS: z.array(
        z.object({
          id: z.string(),
          en: z.object({
            title: z.string(),
            sub: z.string(),
            desc: z.string(),
          }),
          ar: z.object({
            title: z.string(),
            sub: z.string(),
            desc: z.string(),
          }),
          icon: z.string(),
        }),
      ),
    }),
    home: z.object({
      WHO_WE_SUPPORT: z.array(
        z.object({
          en: z.object({
            label: z.string(),
            title: z.string(),
            desc: z.string(),
          }),
          ar: z.object({
            label: z.string(),
            title: z.string(),
            desc: z.string(),
          }),
          href: z.string(),
          icon: z.string(),
          id: z.string(),
        }),
      ),
      PATHWAYS: z.array(
        z.object({
          en: z.string(),
          ar: z.string(),
          href: z.string(),
          id: z.string(),
        }),
      ),
      RETREAT_SLIDES: z.array(
        z.object({
          en: z.object({
            name: z.string(),
            location: z.string(),
            date: z.string(),
            spots: z.string(),
            desc: z.string(),
          }),
          ar: z.object({
            name: z.string(),
            location: z.string(),
            date: z.string(),
            spots: z.string(),
            desc: z.string(),
          }),
          id: z.string(),
        }),
      ),
    }),
    services: z.object({
      services: z.array(
        z.object({
          number: z.string(),
          id: z.string(),
          en: z.string(),
          ar: z.string(),
          descEn: z.string(),
          descAr: z.string(),
          features: z.array(
            z.object({
              en: z.string(),
              ar: z.string(),
              id: z.string(),
            }),
          ),
          bookingLink: z.string(),
          bookingEn: z.string(),
          bookingAr: z.string(),
          learnMoreLink: z.string().optional(),
          learnMoreEn: z.string().optional(),
          learnMoreAr: z.string().optional(),
        }),
      ),
      pillars: z.array(
        z.object({
          en: z.string(),
          ar: z.string(),
          descEn: z.string(),
          descAr: z.string(),
          id: z.string(),
        }),
      ),
    }),
    book: z.object({
      hero: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        heading: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        anchors: z.array(
          z.object({
            id: z.string(),
            en: z.string(),
            ar: z.string(),
          }),
        ),
      }),
      discovery: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        heading: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        body: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        note: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        cta: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        emailNote: z.object({
          en: z.string(),
          ar: z.string(),
        }),
      }),
      membership: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        heading: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        body: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        footnote: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        tiers: z.array(
          z.object({
            id: z.string(),
            tier: z.object({
              en: z.string(),
              ar: z.string(),
            }),
            name: z.object({
              en: z.string(),
              ar: z.string(),
            }),
            desc: z.object({
              en: z.string(),
              ar: z.string(),
            }),
            features: z.array(
              z.object({
                en: z.string(),
                ar: z.string(),
                id: z.string(),
              }),
            ),
            priceLabel: z.object({
              en: z.string(),
              ar: z.string(),
            }),
            priceQAR: z.string(),
            priceUSD: z.string(),
            cta: z.object({
              en: z.string(),
              ar: z.string(),
            }),
            highlight: z.boolean(),
          }),
        ),
      }),
    }),
    about: z.object({
      meta: z.object({
        title: z.string(),
        titleAr: z.string(),
        description: z.string(),
        descriptionAr: z.string(),
      }),
      hero: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        body: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        ctaPrimary: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        ctaSecondary: z.object({
          en: z.string(),
          ar: z.string(),
        }),
      }),
      positioning: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        heading: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        body1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        body2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
      }),
      problem: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        paragraphs: z.array(
          z.object({
            id: z.string(),
            en: z.string(),
            ar: z.string(),
          }),
        ),
      }),
      solution: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        cards: z.array(
          z.object({
            id: z.string(),
            label: z.object({
              en: z.string(),
              ar: z.string(),
            }),
            body: z.object({
              en: z.string(),
              ar: z.string(),
            }),
          }),
        ),
      }),
      dimensions: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        body: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        footer: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        items: z.array(
          z.object({
            id: z.string(),
            number: z.string(),
            en: z.string(),
            ar: z.string(),
            descEn: z.string(),
            descAr: z.string(),
          }),
        ),
      }),
      standards: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        paragraphs: z.array(
          z.object({
            id: z.string(),
            en: z.string(),
            ar: z.string(),
          }),
        ),
      }),
      beliefs: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        items: z.array(
          z.object({
            id: z.string(),
            en: z.string(),
            ar: z.string(),
          }),
        ),
      }),
      values: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        heading: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        items: z.array(
          z.object({
            id: z.string(),
            number: z.string(),
            en: z.string(),
            ar: z.string(),
            descEn: z.string(),
            descAr: z.string(),
          }),
        ),
      }),
      philosophy: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        quote: z.object({
          en: z.string(),
          ar: z.string(),
        }),
      }),
      privacy: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        paragraphs: z.array(
          z.object({
            id: z.string(),
            en: z.string(),
            ar: z.string(),
          }),
        ),
      }),
      team: z.object({
        eyebrow: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        body: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        cta: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        advisors: z.array(
          z.object({
            id: z.string(),
            slot: z.string(),
            nameEn: z.string(),
            nameAr: z.string(),
            specEn: z.string(),
            specAr: z.string(),
          }),
        ),
      }),
      cta: z.object({
        headingLine1: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        headingLine2: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        body: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        ctaPrimary: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        ctaSecondary: z.object({
          en: z.string(),
          ar: z.string(),
        }),
        email: z.string(),
      }),
    }),
  },
};

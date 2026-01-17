import { client } from "@/lib/client";
import { gql } from "@apollo/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let items: MetadataRoute.Sitemap = [];
    
    try {
        const { data } = await client.query(
          {
            query: gql`
                query Sitemap {
                    posts {
                        nodes {
                            slug
                            modified
                        }
                    }
                    pages {
                        nodes {
                            slug
                            modified
                        }
                    }
                }
            `,
          }
        );

        // @ts-ignore
        data.pages?.nodes.forEach(page => {
            let priority = 0.8;
            let slug = page.slug;

            if (page.slug === 'strona-glowna') {
                priority = 1;
                slug = '';
            }

            items.push({
                url: `https://www.ogrodzagrosze.pl/${slug}`,
                lastModified: new Date(page.modified || ''),
                changeFrequency: 'always',
                priority,
            });
        });

 
    } catch (error) {
        console.error(error);
    }

    return items;
}

import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '3uxd2ui2',
    dataset: 'production',
    apiVersion: '2022-10-10', // use current UTC date - see "specifying API version"!
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}
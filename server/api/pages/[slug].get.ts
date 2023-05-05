import pages from '~/server/pageData'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const page = pages.find(
    (page) => page.slug === query.slug
  );

  // if (!page) {
  //   throw createError({
  //     statusCode: 404,
  //     message: 'Page not found',
  //   });
  // }
  
  return await page
})
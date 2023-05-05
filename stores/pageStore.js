import pages from '~/server/pageData'

export const usePageStore = defineStore('page', {
  state: () => ({
    page: {},
  }),
  
  actions: {
    async show(slug) {
      
      const page = pages.find(
        (page) => page.slug === slug
      );
      
      this.page = page

      // await $fetch(`/api/pages?slug=${slug}`)
      //   .catch((e) => {
      //     console.log('Error...', e.data.message)
      //   })
      //   .then((response) => {
      //     console.log('Got page...', response)
      //   })
    }
  },
  getters: {},
})

// export const usePageStore = defineStore('page', () => {d
//   const page = ref()

//   return { store }
// })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot));
}
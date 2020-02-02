<template>
  <Layout :show-logo="false" :show-header="false" class>
    <section>
      <h2 class="text-lg2x">Training</h2>
      <div
        v-for="training in $page.trainings.edges"
        :key="training.node.id"
        class="max-w-sm w-full lg:max-w-full lg:flex mb-8 bg-gray-100"
      >
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          :style="{ backgroundImage: 'url(' + training.node.image + ')', backgroundPosition:'center' }"
          title="Woman holding a mug"
        ></div>
        <div
          class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-gray-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-2">
            <p class="text-sm text-gray-600 flex items-center mb-2">{{training.node.level}}</p>
            <div class="text-gray-900 font-bold text-xl mb-2">{{training.node.title}}</div>
            <p class="text-gray-700 text-base">{{training.node.description}}</p>
          </div>
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="https://tailwindcss.com/img/jonathan.jpg"
              alt="Avatar of Putera Kahfi"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none mb-1">{{training.node.mentor}}</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>


<page-query>
query {
  trainings: allTrainings (sortBy: "title", order: ASC){
    edges {
      node {
        id
        title
        description
        image
      }
    }
  }
}
</page-query>


<script>
export default {};
</script>

<style></style>

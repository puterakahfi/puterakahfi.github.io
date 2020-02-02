<template>
  <Layout :show-logo="false" :show-header="false" class>
    <section>
      <h2 class="text-lg2x">{{trainings.title}}</h2>
      <div :key="training" v-for="training in trainings.items" class="max-w-sm w-full lg:max-w-full lg:flex mb-8">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          :style="{ backgroundImage: 'url(' + training.image + ')', backgroundPosition:'center' }"
          title="Woman holding a mug"
        ></div>
        <div
          class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-2">
            <p class="text-sm text-gray-600 flex items-center mb-2">{{training.level}}</p>
            <div class="text-gray-900 font-bold text-xl mb-2">{{training.title}}</div>
            <p class="text-gray-700 text-base">
             {{training.description}}
            </p>
          </div>
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="https://tailwindcss.com/img/jonathan.jpg"
              alt="Avatar of Putera Kahfi"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none mb-1">{{training.mentor}}</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  </Layout>
</template>

<script>
import trainings from "@/data/training.json";

export default {
  data() {
    return {
      trainings
    };
  }
};
</script>

<style></style>

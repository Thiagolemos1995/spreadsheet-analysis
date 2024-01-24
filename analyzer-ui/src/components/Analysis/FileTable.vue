<template>
  <div class="relative overflow-x-auto">
    <div v-if="subscriberFileList.length <= 0">Nenhum arquivo cadastrado</div>
    <table
      v-else
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th
            v-for="tableHeader in tableHeader"
            :key="tableHeader.name"
            scope="col"
            class="px-6 py-3"
          >
            {{ tableHeader.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="file in subscriberFileList"
          :key="file.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td class="px-6 py-4">
            {{ file.id }}
          </td>
          <td class="px-6 py-4">
            {{ file.fileName }}
          </td>
          <td class="px-6 py-4">
            <div class="flex gap-2">
              <button
                data-tooltip-target="tooltip"
                class="px-2 bg-white py-2 rounded-lg hover:bg-green-200 transition-colors duration-300 ease-in-out text-green-900 font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 2.75A.75.75 0 0 1 1.75 2h16.5a.75.75 0 0 1 0 1.5H18v8.75A2.75 2.75 0 0 1 15.25 15h-1.072l.798 3.06a.75.75 0 0 1-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 0 1-1.452-.38L5.823 15H4.75A2.75 2.75 0 0 1 2 12.25V3.5h-.25A.75.75 0 0 1 1 2.75ZM7.373 15l-.391 1.5h6.037l-.392-1.5H7.373Zm7.49-8.931a.75.75 0 0 1-.175 1.046 19.326 19.326 0 0 0-3.398 3.098.75.75 0 0 1-1.097.04L8.5 8.561l-2.22 2.22A.75.75 0 1 1 5.22 9.72l2.75-2.75a.75.75 0 0 1 1.06 0l1.664 1.663a20.786 20.786 0 0 1 3.122-2.74.75.75 0 0 1 1.046.176Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <AnalysisDeleteFileDialog :file-id="file.id" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <button
    class="w-full bg-green-500 py-2 rounded-lg hover:bg-green-900 transition-colors duration-300 ease-in-out text-white font-bold"
    @click="getSubscriberFiles"
  >
    Get File List
  </button>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  setup() {
    return {
      tableHeader: [{ name: 'ID' }, { name: 'File Name' }, { name: 'Actions' }],
    };
  },

  computed: mapState(['subscriberFileList']),
  methods: {
    ...mapActions(['getSubscriberFiles']),
  },
};
</script>

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
              <AnalysisChartDialog
                :file-id="file.id"
                :file-name="file.fileName"
              />
              <AnalysisDeleteFileDialog
                :file-id="file.id"
                :file-name="file.fileName"
              />
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

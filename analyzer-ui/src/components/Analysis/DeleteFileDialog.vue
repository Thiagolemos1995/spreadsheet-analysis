<template>
  <button
    class="px-2 bg-white py-2 rounded-lg hover:bg-green-200 transition-colors duration-300 ease-in-out text-green-900 font-bold"
    @click="openDialog = true"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="w-5 h-5"
    >
      <path
        fill-rule="evenodd"
        d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  <TransitionRoot as="template" :show="openDialog">
    <Dialog as="div" class="relative z-10" @close="openDialog = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:flex-col sm:justify-center gap-5">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-base font-semibold leading-6 text-gray-900"
                    >
                      Delete file {{ fileId }}
                    </DialogTitle>
                  </div>

                  <span>Are you sure to delete this File ?</span>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-6"
              >
                <button
                  type="button"
                  class="w-full bg-green-500 py-2 rounded-lg hover:bg-green-900 transition-colors duration-300 ease-in-out text-white font-bold"
                  @click="deleteFile(fileId)"
                >
                  Confirm
                </button>
                <button
                  ref="cancelButtonRef"
                  type="button"
                  class="w-full bg-white py-2 rounded-lg hover:bg-green-200 transition-colors duration-300 ease-in-out text-green-900 font-bold"
                  @click="openDialog = false"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue';

const openDialog = ref(false);
</script>

<script>
import { deleteSubscriberFile } from '~/services';

export default {
  props: {
    fileId: {
      type: String,
      required: true,
    },
  },
  methods: {
    async deleteFile(id) {
      try {
        const response = await deleteSubscriberFile(id);

        console.log('File deleted successfully', response.data);
      } catch (error) {
        console.error('Error deleting file', error);
      }
    },
  },
};
</script>

<template>
  <button
    data-tooltip-target="tooltip"
    class="px-2 bg-white py-2 rounded-lg hover:bg-green-200 transition-colors duration-300 ease-in-out text-green-900 font-bold"
    @click="handleOpenChartDialog(fileId)"
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

  <TransitionRoot
    as="template"
    :show="openDialog"
  >
    <DialogComponent
      as="div"
      class="relative z-10"
      @close="openDialog = false"
    >
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
                      Subscriber Data Chart {{ fileId }} - {{ fileName }}
                    </DialogTitle>
                  </div>

                  <Bar
                    v-if="loaded"
                    :data="monthlyRecurringRevenueChartData"
                  />
                  <Bar
                    v-if="loaded"
                    :data="churnRateChartData"
                  />
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-6"
              >
                <button
                  ref="cancelButtonRef"
                  type="button"
                  class="w-full bg-white py-2 rounded-lg hover:bg-green-200 transition-colors duration-300 ease-in-out text-green-900 font-bold"
                  @click="openDialog = false"
                >
                  close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </DialogComponent>
  </TransitionRoot>
</template>

<script>
import {
  Dialog as DialogComponent,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { mapState, mapActions } from 'vuex';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  components: {
    DialogComponent,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    Bar,
  },
  props: {
    fileId: {
      type: String || Number,
      required: true,
    },
    fileName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      openDialog: false,
      loaded: false,
      monthlyRecurringRevenueChartData: null,
      churnRateChartData: null,
    };
  },
  computed: mapState(['subscriberFileData']),
  methods: {
    ...mapActions(['getSubscriberFileById']),
    async handleOpenChartDialog(id) {
      this.openDialog = true;
      this.loaded = false;
      const chartLabel = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      try {
        const fetchDataResponse = await this.getSubscriberFileById(id);
        this.monthlyRecurringRevenueChartData = {
          labels: chartLabel,
          datasets: [
            {
              label: 'MonthlyRecurringRevenue',
              backgroundColor: '#00621C',
              data: fetchDataResponse.subscriberDataRows.map(
                (dataRows) => dataRows[0]
              ),
            },
          ],
        };

        this.churnRateChartData = {
          labels: chartLabel,
          datasets: [
            {
              label: 'ChurnRate',
              backgroundColor: '#2CE86B',
              data: fetchDataResponse.subscriberDataRows.map(
                (dataRows) => dataRows[1]
              ),
            },
          ],
        };
        this.loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
